const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());


const get_module = require("./get_module/get_products");
app.use("/get",get_module);


const post_module = require("./post_module/post_products");
app.use("/post",post_module);


const put_module = require("./put_module/put_products");
app.use("/put",put_module);


const delete_module = require("./delete_module/delete_products");
app.use("/delete",delete_module);


app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});


//http://localhost:8080/get
