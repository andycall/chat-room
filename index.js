var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var body_parser = require('body-parser');

var router = express.Router();

app.use(body_parser.json());


//app.use("/chat_video", function(req, res, next){
//    console.log(123);
//    next();
//});


app.use("/chat_video", express.static(path.join(__dirname, 'bower_components')));


//router.get('/', function(req, res){
//    console.log(12344);
//    return res.sendFile(__dirname + "/index.html");
//});

//router.post('/', function(){
//    console.log(123);
//});

app.post('/', function(req, res){
    var data = req.body;
    console.log(data);
    return res.json(data);
});

//app.use('/chat_video', router);


//io.on('connection', function(socket){
//    console.log('a user connected');
//
//    socket.on('disconnect', function(){
//        console.log('a user disconnected');
//    });
//});

http.listen(3000, function(){
    console.log('server listening on port 3000');
});