var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var path = require('path');
var controller = require('./controllers/user.controller');

var port = 8080;

mongoose.connect("mongodb://localhost/Login",{ useNewUrlParser: true } );

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) => {
    res.render('index.html');
})

app.post('/', controller.register)

app.listen(port, () => {console.log('listening on port ' + port)});