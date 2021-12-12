const express = require("express");
const mongodb = require("mongodb");

const ashokIT = mongodb.MongoClient;


const get_module = express.Router();

get_module.get("/",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/ecommerce?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ecommerce");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
});

module.exports = get_module;