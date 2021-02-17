// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer'

const { SMTP_ACCOUNT, SMTP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
    host: 'mail.zxcs.nl',
    port: 465,
    auth: {
       user: SMTP_ACCOUNT,
       pass: SMTP_PASSWORD
    }
});

// const message = {
//     from: 'noreply@haegepoorters.be', // Sender address
//     to: 'givers@haegepoorters.be',         // List of recipients
//     subject: 'Webform test', // Subject line
//     html: 'Als dit is toegekomen dan werkt deze shit, hoer a' // Plain text body
// };

export const sendMail = ({ from, to, subject, html }) => {
    const message = { from, to, subject, html };
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) reject(err)
            else resolve(info)
        });
    })
}
