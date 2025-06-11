const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"boutiques"
});

db.connect((err)=> {
    if(err) throw err;
    console.log('Connexion à la base réussie')
});
module.exports= db

