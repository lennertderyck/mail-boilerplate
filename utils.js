import { Converter as MarkdownConverter } from 'showdown';
import { askiClient } from './askimet';
import stripTags from "striptags";

export const checkReciever = (r) => r.endsWith('@haegepoorters.be');

export const checkSender = (s = '') => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return s.match(emailPattern);
}

export const composeHTML = ({ name, sender, subject, message }) => {
    const converter = new MarkdownConverter();
    const convertedMessage = converter.makeHtml(message);
    
    return `
        <p><strong>Naam</strong>: ${ name }</p>
        <p><strong>Email</strong>: <a href="mailto:${ sender }?subject=Re: ${ subject }">${ sender }</a></p>
        <p><strong>Onderwerp</strong>: ${ subject }</p>
        <p><strong>Bericht</strong></p>
        <hr>
        ${ convertedMessage }           
    `
}

export const checkSpam = async ({ ip, name, sender, message, userAgent: useragent }) => {
    const content = stripTags(message);
    const comment = {
        ip,
        name,
        useragent,
        content,
        email: sender,
    }
    
    try {
        return await askiClient.checkSpam(comment)
    } catch (error) {
        return error
    }
}

export const test = (s, ...i) => ({ s, i})