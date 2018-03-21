var express = require("express");
// Luu y tat ca require deu phai dat o tren top, tru truong hop em customize dac biet ma ko co phuong phap lam khac
var bodyParser = require("body-parser");
// O day em luu y dau ./ truoc routes, neu ko co dau ./ lenh require se fail
// Trong truong hop require('./route'), nodejs se uu tien tim file ./routes.js, neu ko co se tim toi file ./routes/index.js
var route = require('./routes');
// tuong tu cau lenh tren
// var route = require('./routes/index');

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extends: false}));

// set route cho expressjs
app.use(route);

app.set("view engine", "ejs");


app.listen(3000, ()=>{
    console.log("Server is running");
});
