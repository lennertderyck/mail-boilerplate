import moment from 'moment';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { sendMail } from './nodemailer';
import { checkSender, checkSpam, composeHTML, test } from './utils';

dotenv.config();
moment.locale('nl');

const api = express(), port = 5050;
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'DELETE',
        'PUT'
    ],

    allowedHeaders: [
        'Content-Type'
    ],
    accessControlAllowOrigin: '*'
};

// set handlers
api.use(cookieParser());
api.use(express.json());
api.use(cors(corsOpts));
api.use(express.urlencoded({
    extended: true
}));
api.use((err, req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.status(500).json(err)
})

/**
 * TODO: add Askimet
 * https://www.npmjs.com/package/akismet-api
 */
 
api.post('/', async (req, res) => {
    const { reciever, name, subject, sender, message, human: winnie = false, redirect_success, redirect_error } = req.body;
    
    const validSender = checkSender(sender);
    const composedMessage = composeHTML({ name, sender, subject, message });
    
    const userAgent = req.headers['user-agent'];
    console.log('userAgent', userAgent);
    
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log('ip', ip);
    
    const isSpam = await checkSpam({ ip, name, sender, userAgent, message: composedMessage });
    console.log('isSpam', isSpam)
    
    if (!validSender || isSpam) res.redirect(redirect_error)
    else if (winnie == false) {
        try {
            const resp = await sendMail({
                from: sender,
                sender: sender,
                to: reciever + '@haegepoorters.be',
                subject: `${subject} – Nieuw bericht via haegepoorters.be`,
                replyTo: sender,
                html: composedMessage
            })
            res.redirect(redirect_success);
        } catch (err) {
            console.log(err);
            res.redirect(redirect_error);
        }
    } else res.redirect(redirect_error);
})

export default api;
