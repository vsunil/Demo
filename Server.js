//var express = require('express');
var app = express();
// var articles = require("./models/Articles")();
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
// app.use(express.static(__dirname + '/public'));
// app.use(function(req, res, next) {
  // req.articles = articles;
  // next();
// });
// app.get('/api/get', require("./controllers/api/get"));
// app.get('/', require("./controllers/index"));
app.listen(3000);
console.log('Listening on port 3000');

function express(){
	return "hello";
}