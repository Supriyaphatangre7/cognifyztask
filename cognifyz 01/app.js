const express=require('express');

var bodyParser = require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    res.send("First Name is  :"+  req.body.fname  +  "     Last Name is  :"  +  req.body.lname  +  "     Email is  :"  +  req.body.email  +   "     Password is   :"  +  req.body.password   +  "     Gender is  :"  +   req.body.gender);
     
});

app.listen(5500,()=>{
    console.log("server is running");
});

