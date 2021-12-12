const express = require("express");
const mongodb = require("mongodb");
const ashokIT = mongodb.MongoClient;
const put_module = express.Router();
put_module.put("/",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/ecommerce?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ecommerce");
            db.collection("products").updateOne({"brand":req.body.brand},{$set:{"cost":req.body.cost}},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"update":"success"});
                }
            })
        }
    });
});
module.exports = put_module;