require('dotenv').config();

const app = require('./app');
require('./dbConnection');

app.listen(app.get('port'), () => {
    console.log(`*** Server running on port ${app.get('port')}`);
})