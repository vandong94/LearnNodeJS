var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});
var bodyParser = require("body-parser");
var urlPhanTich = bodyParser.urlencoded({extends: false});
app.post("/contact", urlPhanTich,(req, res) =>{
    console.log(req.body);
    console.log(urlPhanTich);
    res.render("contact-success", {data: req.body});
})


app.listen(3000, ()=>{
    console.log("Server is running");
});
