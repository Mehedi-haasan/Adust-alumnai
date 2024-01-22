const createError = require("http-errors");
var express = require('express');
const multer = require("multer");
const path = require("path");
var bodyParser = require('body-parser');
const client = require('../../Config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const getItems=(req,res)=>{
    
    try {
        client.query(`Select * from role`, (err, result)=>{
            if(!err){
                res.send(result);
            }
        });
    } catch (error) {
        console.error(error);
    }
}



const getItemById=(req, res)=>{
    client.query(`Select * from items where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    res.json(results);
}

const createItem=(req, res) => {
    try {
    const {id,heading,category,price,size,colour,input,discount,stock,rating}=req.body;
    const {filename}=req.file;
       client.query("insert into items SET ?",{id:id, heading:heading, category:category, size:size, discount:discount, colour:colour, input:input, image:`http://localhost:5500/${filename}`, rating:rating, stock:stock, price:price}, (err, result)=>{
        if(err){
            console.log(err);
          }else{
            console.log("Insert Successfull")
            res.status(201).json({status:201, })
          }
       })
    } catch (error) {
        console.log(error)
    }
   }


const putItem = (req, res) => {
    let user = req.body;
   
    let updateQuery = `UPDATE products SET id=${user.id}, name = '${user.name}', post = '${user.post}', image = ${user.image} WHERE id = ${req.params.id}`;
    // Execute the query using the database client
    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful');
        } else {
            console.log(err.message);
            res.status(201).send('An error occurred during the update');
        }
    });

}

const patchItem = (req, res) => {
    let user = req.body;
    let updateQuery = `UPDATE products SET id=${user.id}, name = '${user.name}', post = '${user.post}', image = ${user.image} WHERE id = ${req.params.id}`;
    // Execute the query using the database client
    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful');
        } else {
            console.log(err.message);
            res.status(201).send('An error occurred during the update');
        }
    });

}


const deleteItem = (req, res)=>{
    let insertQuery = `delete from items where id=${req.params.id}`
    console.log(insertQuery);

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
}






module.exports = {getItems,getItemById,createItem,putItem,patchItem,deleteItem}