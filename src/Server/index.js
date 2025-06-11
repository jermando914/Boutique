const express = require('express');
const cors = require('cors');
const db = require('./db');
const achatRouter = require('../achats');


const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use('/', achatRouter);

app.get('/produits', (req, res) => {
    db.query('SELECT * FROM produits', (err,result) => {
        if(err) return res.status(500).send(err);
        res.json(result);
    });
});

const PORT= 3001;
console.log("serveur prête !!")
app.listen(PORT,()=> {
    console.log('Serveur lancé sur le port 3001');
});