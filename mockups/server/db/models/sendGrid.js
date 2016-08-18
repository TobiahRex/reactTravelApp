const Mail = {
  itinerary(clientInfo, cb) {



    const helper = require('sendgrid').mail;
    const fromEmail = new helper.Email('registration@yelpCatalogue.com');
    const toEmail = new helper.Email(`${clientInfo.email}`);
    const subject = 'Itinerary';
    const content = new helper.Content('text/html',
    `<html>
    <h1>Hi, ${clientInfo.who.firstName} ${clientInfo.who.lastName}</h1>
    <br>
    <h4>Thanks for using itinerEZ</h4>
    <h1>Here is your itenerary</h1>
    <h3>Who: ${clientInfo.who}</h3>
    <h3>When: ${clientInfo.when}</h3>
    <h3>Where: ${clientInfo.where}</h3>
    <h3>What: ${clientInfo.what}</h3>

    <hr>

    <h2>Thanks!
    <br>
    Respectfully,
    <br>
    <i>Tobiah Rex</i></h2>
    </html>`);
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);
    const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    const requestBody = mail.toJSON()
    const request = sg.emptyRequest()
    request.method = 'POST';
    request.path = '/v3/mail/send';
    request.body = requestBody;
    sg.API(request, cb);
  },
};
module.exports = Mail;
