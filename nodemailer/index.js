const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    opportunisticTLS: true,
    ignoreTLS: true,
    debug: true,
    transactionLog: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

console.log(transporter.options)

const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: 'Test Email',
    text: 'This is a test email'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log('Email sent: ' + JSON.stringify(info));
});
