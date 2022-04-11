const axios = require('axios');
const res = require('express/lib/response');

const API_KEY = process.env.MAILCHIMP_API_KEY;

const API_URL = 'https://us5.api.mailchimp.com/3.0';
const LIST_ID = 'b44f719c45';

// REFERENCE:
// https://medium.com/geekculture/send-email-campaign-using-node-js-and-mailchimp-api-9e38a51054b4
// https://mailchimp.com/developer/marketing/docs/fundamentals/

const subcribeForEmails = async user => {
    const url = `${API_URL}/lists/${LIST_ID}/members?skip_merge_validation=false`;

    const requestData = {
        email_address: user.email,
        status: "subscribed",
    };

    const requestHeaders = {
        auth: {
            username: 'anjanic',
            password: API_KEY
        }
    };

    try {
        await axios.post(url, requestData, requestHeaders);
    } catch (err) {
        console.log(err);
    }
};

const unsubcribeForEmails = async user => {
    const { email } = user;

    const url = `${API_URL}/lists/${LIST_ID}/members/${email}`;

    const requestHeaders = {
        auth: {
            username: 'anjanic',
            password: API_KEY
        }
    };

    try {
        await axios.delete(url, requestHeaders);
    } catch (err) {
        console.log(err);
    }
};

const sendEmail = async email => {
    console.log(email);
    res.json(email);
};

module.exports = { subcribeForEmails, unsubcribeForEmails, sendEmail };