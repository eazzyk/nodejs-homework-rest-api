const nodemailer = require('nodemailer');
require('dotenv').config();

const { SEND_EMAIL_NAME, SEND_EMAIL_PASS } = process.env;

const nodemailerConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SEND_EMAIL_NAME,
    pass: SEND_EMAIL_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async data => {
  const email = {
    ...data,
    from: SEND_EMAIL_NAME,
    subject: 'Email verification',
  };
  try {
    await transport.sendMail(email);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
