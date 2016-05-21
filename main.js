var express = require('express');
var app = express();

app.use('/mvp', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.redirect('/mvp/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
