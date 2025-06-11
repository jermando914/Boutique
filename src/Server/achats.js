const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('./achats', (req,res) => {
    const {description, price, image} = req.body;
    console.log('Requêtte POST reçu:', req.body);

    const sql = 'INSERT INTO achats (description,price,image) VALUES (?,?,?)';
    db.query(sql, [description,price,image], (err,result)=> {
        if(err) {
            console.error(err);
            return res.status(500).json({error: err.message})
        }
        res.status(201).json({message: 'Achat bien enregistrer avec image'});
    });
});
module.exports=router;