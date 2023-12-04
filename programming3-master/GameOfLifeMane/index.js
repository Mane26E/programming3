// let os = require("os");
// let message = "The platform is ";

// function main(){
// console.log(message + os.platform());
// }
// main();


// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
// res.send("Hello world");
// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });


// let express = require("express");
// let app = express();

// app.get("/", function(req, res){
// res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
// let name = req.params.name;
// res.send("<h1>Hello " + name +"</h1>");
// });
// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });




// let fs = require('fs');

// function createFile(){
// let file = "hello.txt";

// fs.appendFileSync(file, "Hello worldhhgnhhghjg jgughjg");
// }
// createFile();



var fs = require('fs');
function main(){
fs.writeFile("hello.txt", "Hello world\n", function(err){
console.log("fs.writeFile ended");
});
console.log("fs.writeFile");
}
main();