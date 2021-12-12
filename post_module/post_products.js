const express = require('express');
const mongodb = require("mongodb");
const ashokIT = mongodb.MongoClient;

const post_module = express.Router();

post_module.post("/",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/ecommerce?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db(`ecommerce`);
            db.collection("products").insertOne({"name":req.body.name,
                                                 "cost":req.body.cost,
                                                  "brand":req.body.brand,
                                                "rating":req.body.rating,
                                                 "countInStock":req.body.countInStock,
                                                 "description":req.body.description},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"insert":"success"});
                }
            })
        }
    })
});

module.exports = post_module;