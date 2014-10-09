var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

var hbs = exphbs.create();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render('index', { foo: "bar" });
});

app.listen(8080);