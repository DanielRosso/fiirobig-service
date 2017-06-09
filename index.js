var moment = require('moment');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

app.post('/', function (req, res) {
    var timeToFiirobig = moment().startOf('minute').to(moment().startOf('hour').hour(17));

    res.status(200).send(timeToFiirobig);
});