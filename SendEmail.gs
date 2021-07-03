
//Sends emails with data from the current spreadsheet. Refer to the comments when using this simple snippet.

function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var numRows = 20; // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 21);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var emailAddress = row[16]; // Change this to the column where you can find the email address
    var message = row[20]; // Change this to the column where you can find the content of the message you want to send.
    var subject = row[17]; // Change this to the subject line
    var cc = row[18];
    MailApp.sendEmail(emailAddress, subject, message,{
    name: 'Insert Name Here',
    replyTo: 'Insert Reply To Address'
});
  }
}
