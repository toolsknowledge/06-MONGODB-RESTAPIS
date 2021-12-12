const express = require("express");
const mongodb = require("mongodb");
const ashokIT = mongodb.MongoClient;

const delete_module = express.Router();

delete_module.delete("/",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/ecommerce?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ecommerce");
            db.collection("products").deleteOne({"brand":req.body.brand},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            })
        }
    });
});

module.exports = delete_module;