const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
// app.use('/api/calendar', calendarRouter);
// app.use('/api/cloudinary', cloudinaryRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});