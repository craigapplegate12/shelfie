require('dotenv').config();
const express = require('express');
const bodyParser=require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const app = express();
const port=8080;

app.use(bodyParser.json());


massive(process.env.DATABASE_STRING) 
    .then(db => {
        app.set('db', db)
        console.log('database is connected')
        
    })
    .catch(err => {
        console.log('database connection error', err)
    })

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})  