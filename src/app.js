const express = require('express');

const app = express();

const userRoute = require('./routes/userRoutes');

app.use(express.json());

app.use('/signup', userRoute);

module.exports = app;