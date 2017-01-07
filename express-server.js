/**
 * Created by Sushant on 03-01-2017.
 */
var express = require('express');
var app = express();
var favicon = require('express-favicon');

app.use("/static",express.static("static"));
app.use(favicon(__dirname + '/static/favicon.ico'));
app.get("/",function (req,res) {
    res.send("hello there");
});
app.listen(3000,"127.0.0.1",() => {
    console.log('Express Server started');
});