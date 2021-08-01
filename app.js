//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));

var colleges = [];
var countries = [];
var expensess = [];
var deadlines = [];


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
    
    res.render('card', {college: college, country: country, expenses: expenses, deadline: deadline});
    
});

app.post("/", function(req,res) {
    var college = req.body.college; 
    var country = req.body.country; 
    var expenses = req.body.expenses; 
    var deadline = req.body.deadline; 
    colleges.push(college);
    countries.push(country);
    expensess.push(expenses);
    deadlines.push(deadline);
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});