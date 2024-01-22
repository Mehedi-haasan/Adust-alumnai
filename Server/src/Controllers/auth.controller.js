const createError = require("http-errors");
var express = require('express');
const multer = require("multer");
const path = require("path");
var bodyParser = require('body-parser');
const db = require('../Config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const getUsers=(req,res)=>{
    
    try {
        db.query(`Select * from role`, (err, result)=>{
            if(!err){
                res.send(result);
            }
        });
    } catch (error) {
        console.error(error);
    }
}



const getUserById=(req, res)=>{
    db.query(`Select * from role where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    res.send(results);
}

const SingUp=(req, res)=>{
    db.query(`Select * from role where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    res.send(results);
}





module.exports = {getUsers,getUserById,SingUp}