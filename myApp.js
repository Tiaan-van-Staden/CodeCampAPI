require('dotenv').config()
var bodyParser = require('body-parser');
let express = require('express');
let app = express();
let message = {message : "Hello json"};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function middleware(req, res, next) {
  // Do something
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  // Call the next function in line:
  next();
});

app.use("/public", express.static(__dirname + "/public"))

app.post('/name', (req, res) => {
  var firstName = req.body.first;
  var lastName = req.body.last
  res.json({name: `${firstName} ${lastName}`})
})

console.log("Aww shiet, here we go again");

app.get('/now', function(req, res, next){
  req.time = new Date().toString()
  next();
}, (req, res) => {
  res.send({time: req.time})
})

app.get('/:word/echo', function(req, res, next){
  req.params.word
  next();
}, (req, res) => {
  res.send({echo: req.params.word})
})

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










































 module.exports = app;
