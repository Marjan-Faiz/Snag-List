// Free email backend. Emails the Excel file ONLY to the Google account that owns this script.
const SECRET = 'change-this-to-your-own-code';   // must match "Secret code" in the app

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.token !== SECRET) return out({ ok: false, error: 'Wrong secret code' });
    const blob = Utilities.newBlob(
      Utilities.base64Decode(d.data),
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      d.filename || 'Snag_List.xlsx'
    );
    MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      subject: d.subject || 'Snag List',
      body: 'Your snag list is attached.',
      attachments: [blob]
    });
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
