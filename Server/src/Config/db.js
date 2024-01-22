const mysql = require('mysql2')


const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Ceevit250",
database:"adust" 
})

module.exports=db; 

