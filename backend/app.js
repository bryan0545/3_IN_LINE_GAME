const express = require('express');
const cors = require('cors');
const app = express();
// settings
app.set('port', process.env.SERVER_PORT || 5000);

app.use(cors());
app.use(express.json());

// routes
app.use('/games', require('./routes/routesGame'));

module.exports = app;

