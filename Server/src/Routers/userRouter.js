const express = require('express');
const Router = express.Router();
const multer = require("multer");


const {getUsers,getUserById,SingUp} =require('../Controllers/auth.controller');




Router.get("/users",getUsers);
Router.get("/get/user/:id",getUserById);
Router.post("/users",SingUp);

// Router.post("/createitem", upload.single('image'), createItem);
// Router.put("/putitem/:id", putItem);
// Router.patch("/patchitem/:id", patchItem);
// Router.delete("/deleteitem/:id",deleteItem);






module.exports= Router;