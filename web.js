var APPLICATION_NAME = "buy-it"
require('nodefly').profile(
    '8f7287bb-f406-4d1e-b3b9-0c2923d46615',
    [APPLICATION_NAME,'Heroku']
);
var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname));

app.get('/todos.json', function(req, res){
  res.send([{message:'Loaded'}]);
});

app.post('/todo/new', function(req, res){
  console.log(req.body.todo);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
