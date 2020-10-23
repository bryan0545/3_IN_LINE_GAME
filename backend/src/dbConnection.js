const mongoose = require('mongoose');

const URI = process.env.DB_URI || 'mongodb://localhost/threeinline';
 
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});    

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('*** DB is connected ***');
});

connection.once('close', ()=>{
    console.log('*** DB is disconnected ***');
});

connection.on('error', err => {
    console.log(err);
  });