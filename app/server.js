var express = require('express');
var app = express();
app.use(express.static('app'))
app.get('/', function (req, res) {
  res.sendfile('app/index.html');
});
app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
})
