var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req,res) {
    res.render('../views/less');
});


app.get('/less', function(req,res) {
    res.render('../views/less');
});

app.get('/historia', function(req,res) {
    res.render('../views/historia');
});

app.get('/ex02', function(req,res) {
    res.render('../views/ex02');
});

app.listen(3001, function() {
    console.log('Executando na porta 3001');
});