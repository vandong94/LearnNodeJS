var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.post("/contact", (req, res) =>{
    res.render("contact-success", {data: req.body});
})

module.exports = router;