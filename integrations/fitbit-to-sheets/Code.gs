/**
 * Fitbit → Google Sheet (daily sleep, steps, resting HR)
 * ------------------------------------------------------
 * Runs on Google's servers (free Apps Script). Pulls yesterday's numbers
 * from the Fitbit Web API and appends a row to a Google Sheet that the
 * Life OS controller reads.
 *
 * Works on a FREE Google account + FREE Fitbit account. Nothing runs on
 * your phone — your Fitbit app already syncs to Fitbit's cloud; this reads
 * from there. See README.md for the full setup.
 *
 * Secrets (Client ID/Secret) are NOT in this file — they live in Script
 * Properties so nothing sensitive is ever committed to git.
 */

// Columns written to the sheet, in order.
var HEADERS = ['Date', 'Sleep (h)', 'Steps', 'Resting HR', 'Pulled at'];

/**
 * MAIN — set a daily time-driven trigger to run this (e.g. 07:30).
 * Also safe to run by hand to test.
 */
function updateFitbitSheet() {
  var service = getFitbitService_();
  if (!service.hasAccess()) {
    Logger.log('Not authorised yet. Run "authorize" and follow the link in the log.');
    return;
  }

  // TODAY. Run this in the evening (see README) and the row holds last
  // night's sleep + today's steps-so-far — exactly what the 22:00 check-in
  // wants. Safe to run more than once a day: it UPDATES today's row rather
  // than adding a duplicate.
  var tz = Session.getScriptTimeZone();
  var date = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');

  var steps = getSteps_(service, date);
  var restingHr = getRestingHr_(service, date);
  var sleepHours = getSleepHours_(service, date);

  var sheet = getSheet_();
  var row = [date, sleepHours, steps, restingHr,
             Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd HH:mm')];
  upsertRow_(sheet, date, row);
  Logger.log('Wrote %s: sleep %s h, steps %s, resting HR %s', date, sleepHours, steps, restingHr);
}

// Replace today's row if it already exists, else append — so repeat runs
// in a day keep one row per date with the latest numbers.
function upsertRow_(sheet, date, row) {
  var last = sheet.getLastRow();
  if (last >= 2) {
    var dates = sheet.getRange(2, 1, last - 1, 1).getValues();
    for (var i = 0; i < dates.length; i++) {
      var cell = dates[i][0];
      var cellDate = (cell instanceof Date)
        ? Utilities.formatDate(cell, Session.getScriptTimeZone(), 'yyyy-MM-dd')
        : String(cell).trim();
      if (cellDate === date) {
        sheet.getRange(i + 2, 1, 1, row.length).setValues([row]);
        return;
      }
    }
  }
  sheet.appendRow(row);
}

// ---- Fitbit API calls -------------------------------------------------

function getSteps_(service, date) {
  var url = 'https://api.fitbit.com/1/user/-/activities/date/' + date + '.json';
  var json = fitbitGet_(service, url);
  return json && json.summary ? json.summary.steps : '';
}

function getRestingHr_(service, date) {
  var url = 'https://api.fitbit.com/1/user/-/activities/heart/date/' + date + '/1d.json';
  var json = fitbitGet_(service, url);
  try {
    return json['activities-heart'][0].value.restingHeartRate || '';
  } catch (e) {
    return '';
  }
}

function getSleepHours_(service, date) {
  var url = 'https://api.fitbit.com/1.2/user/-/sleep/date/' + date + '.json';
  var json = fitbitGet_(service, url);
  if (!json || !json.summary || json.summary.totalMinutesAsleep == null) return '';
  return Math.round((json.summary.totalMinutesAsleep / 60) * 10) / 10; // 1 dp
}

function fitbitGet_(service, url) {
  var res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + service.getAccessToken() },
    muteHttpExceptions: true
  });
  if (res.getResponseCode() !== 200) {
    Logger.log('Fitbit API %s → %s: %s', url, res.getResponseCode(), res.getContentText());
    return null;
  }
  return JSON.parse(res.getContentText());
}

// ---- Sheet ------------------------------------------------------------

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Fitbit') || ss.insertSheet('Fitbit');
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

// ---- OAuth2 (uses the apps-script-oauth2 library) ---------------------

/**
 * Run this ONCE to authorise. Check the execution log for a URL, open it,
 * approve Fitbit access, and you're done. Re-run updateFitbitSheet after.
 */
function authorize() {
  var service = getFitbitService_();
  if (service.hasAccess()) {
    Logger.log('Already authorised. You can run updateFitbitSheet now.');
  } else {
    Logger.log('Open this URL to authorise:\n%s', service.getAuthorizationUrl());
  }
}

function reset() {
  getFitbitService_().reset();
}

/** Handles the redirect back from Fitbit after you approve. */
function authCallback(request) {
  var isAuthorized = getFitbitService_().handleCallback(request);
  return HtmlService.createHtmlOutput(
    isAuthorized ? 'Success! You can close this tab.' : 'Denied. You can close this tab.');
}

/** Prints the redirect URI to paste into your Fitbit app's settings. */
function logRedirectUri() {
  Logger.log(getFitbitService_().getRedirectUri());
}

function getFitbitService_() {
  var props = PropertiesService.getScriptProperties();
  var clientId = props.getProperty('FITBIT_CLIENT_ID');
  var clientSecret = props.getProperty('FITBIT_CLIENT_SECRET');
  return OAuth2.createService('fitbit')
    .setAuthorizationBaseUrl('https://www.fitbit.com/oauth2/authorize')
    .setTokenUrl('https://api.fitbit.com/oauth2/token')
    .setClientId(clientId)
    .setClientSecret(clientSecret)
    .setCallbackFunction('authCallback')
    .setPropertyStore(PropertiesService.getUserProperties())
    .setScope('activity heartrate sleep profile')
    // Fitbit wants the client id/secret as a Basic auth header on token calls.
    .setTokenHeaders({
      Authorization: 'Basic ' + Utilities.base64Encode(clientId + ':' + clientSecret)
    });
}
