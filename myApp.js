require('dotenv').config()
let express = require('express');
let app = express();
let message = {message : "Hello json"};
const mySecret = process.env['MESSAGE_STYLE']

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/now', function again(req, res, next){
  req.time = new Date().toString()
  next();
}, (req, res) => {
  res.json(req.time)
  console.log(req.time)
})

app.get('/json', function(req, res){
  if(process.env['MESSAGE_STYLE'] === "uppercase")
  {
    res.json({"message": "HELLO JSON"});
  }else{
    res.json(message);
  }
})

app.use(function middleware(req, res, next) {
  // Do something
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  // Call the next function in line:
  next();
});

app.use("/public", express.static(__dirname + "/public"))

console.log("hello world");




































 module.exports = app;
