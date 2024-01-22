
require('dotenv').config();



const password=process.env.DB_PASSWORD;


// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: password,
//     database: "e_commerce"
// })

// module.exports = client



const mysql = require('mysql2')


const client = mysql.createConnection({
host: "localhost",
user: "root",
password: "Ceevit250",
database:"adust" 
})

module.exports=client; 

