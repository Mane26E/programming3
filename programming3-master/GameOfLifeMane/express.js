var express = require("express");
var app = express();

// app.get("/", function(req, res){
// res.redirect("index.html");
// });

app.listen(3000, function() {
    console.log("Example is running on port 3000");
});


// let Square = require("./square")

// let obj = new Square(4)
// console.log(obj.tviQarakusi());

// app.get("/", function(req, res) {
//     res.redirect("http://google.com");
// });

app.get("/", function(req, res, search) {

    search = "Anna Asti"

    res.redirect("http://google.com/search?q=" + search);
});