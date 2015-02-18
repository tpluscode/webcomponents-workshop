var express = require('express');
var app = express();

app.use(express.static('examples'));
app.use(express.static('bower_components'));

app.listen(3000);