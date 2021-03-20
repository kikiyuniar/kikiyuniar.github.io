const { google } = require("googleapis");
const keys = require("./keys.json");

// https://nodejs.org/
// https://developers.google.com/sheets/api/quickstart/nodejs
// console.developers.google.com
// https://developers.google.com/identity/protocols/googlescopes

const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key, 
    ["https://www.googleapis.com/auth/spreadsheets"]
    );

client.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connected!");
  }
});
