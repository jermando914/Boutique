const express = require('express');
const cors = require('cors');
const db = require('./db');



const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

app.post('/achats', (req, res) => {
    const {description, prix, image} = req.body;
    const sql = 'INSERT INTO achats (description,prix,image) VALUES (? , ?, ?)';
    db.query(sql, [description,prix,image], (err,result) => {
        if(err) return res.status(500).send(err);
        res.status(201).json({message: 'Achat bien enregistrer avec image'});
    });
});

const PORT= 3001;
console.log("serveur prête !!")
app.listen(PORT,()=> {
    console.log('Serveur lancé sur le port 3001');
});