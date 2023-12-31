const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// console.log('my client id:', process.env.CLIENT_ID, 'my client secret:', process.env.CLIENT_SECRET);

router.post('/', (req, res) => {
    console.log('data in post', req.body)
    // console.log('my client id:', process.env.CLIENT_ID, 'my client secret:', process.env.CLIENT_SECRET);

    // adding headers to the POST request
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    // adding key-value pairs to the POST request body
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', process.env.CLIENT_ID);
    data.append('client_secret', process.env.CLIENT_SECRET);

    axios.post(`https://accounts.spotify.com/api/token`, data, {
        headers: headers,
    })
        .then(response => {
            console.log("response.data is:", response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log("error in API token POST:", error);
            res.sendStatus(500);
        })

})


module.exports = router;