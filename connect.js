var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Aerobic');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/Order', function(req,res){
    var Name = req.body.name;
    var Number = req.body.num;
    var Age = req.body.Age;
    var Email =req.body.email;
    var Category = req.body.Category;
    var address =req.body.add;
    var city = req.body.city;
    var Pincode = req.body.pin;
    var data = {
        "name": Name,
        "number":Number,
        "Age":Age,
        "email":Email,
        "Category":Category,
        "add":address,
        "city":city,
        "pin":Pincode,
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");       
    });
     return res.redirect('success.html');
})
app.listen(3000);
console.log("server listening at port 4000");