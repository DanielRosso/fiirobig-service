var util = require('util');
var moment = require('moment');
moment.locale("de");

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

app.post('/', function (req, res) {
    var timeToFiirobig = moment().startOf('minute').to(moment().startOf('hour').hour(17));
    var minutesToFiirobig = moment.duration(moment().startOf('hour').hour(17).diff(moment().startOf('minute'))).asMinutes();

    res.status(200).send(util.format("Es sind noch %s Minuten bis zum Fiiiroobig :)", minutesToFiirobig));
});

app.post("/auto", function (req, res) {
    //kw 47
    var timeToAuto = moment("20201116", "YYYYMMDD").fromNow();

    res.status(200).send(util.format("Es sind noch %s bis zum AMG :)", timeToAuto));
});