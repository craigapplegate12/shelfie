require('dotenv').config();
const express = require('express');
const bodyParser=require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const app = express();
const port=8080;
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());


app.get('/api/inventory', (req, res) => {
    const db = req.app.get('db');

    db.get_inventory()
    .then(results => {
        res.send(results)
    })
    .catch((err)=> {
        console.log('error', err)
    })
}) 


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