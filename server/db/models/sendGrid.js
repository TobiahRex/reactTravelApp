const Mail = {
  itinerary(clientName, cb) {
    const helper = require('sendgrid').mail;
    const fromEmail = new helper.Email('registration@yelpCatalogue.com');
    const toEmail = new helper.Email(`${clientName.Email}`);
    const subject = 'Itinerary';
    const content = new helper.Content('text/html',
    `<html>
    <h1>Hi, ${clientName.Firstname}</h1>
    <br>
    <h4>Thanks for using itinerEZ</h4>
    <h1>Here is your itenerary</h1>
    <p class="lead">blah blah blah</p>
    <br>
    <h2>Thanks!
    <br>
    Respectfully,
    <br>
    <i>Tobiah Rex</i></h2>
    </html>`);
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);
    const sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY);
    const requestBody = mail.toJSON();
    const request = sg.emptyRequest();
    request.method = 'POST';
    request.path = '/v3/mail/send';
    request.body = requestBody;
    sg.API(request, cb);
  },
};
module.exports = Mail;
