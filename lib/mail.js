// lib/mail.js
import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

if (!SMTP_SERVER_HOST || !SMTP_SERVER_USERNAME || !SMTP_SERVER_PASSWORD || !SITE_MAIL_RECEIVER) {
    console.error('Missing required environment variables for email configuration');
    console.error('Required variables:', {
        SMTP_SERVER_HOST,
        SMTP_SERVER_USERNAME: SMTP_SERVER_USERNAME ? 'Set' : 'Missing',
        SMTP_SERVER_PASSWORD: SMTP_SERVER_PASSWORD ? 'Set' : 'Missing',
        SITE_MAIL_RECEIVER
    });
}

const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: false, // use false for port 587
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail({ email, subject, text, html }) {
    try {
        await transporter.verify();

        const info = await transporter.sendMail({
            from: `"HobbyMe Contact" <${SMTP_SERVER_USERNAME}>`,
            to: SITE_MAIL_RECEIVER,
            replyTo: email,
            subject,
            text,
            html,
        });

        console.log('Email sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Email sending error:', error);
        throw error;
    }
}
