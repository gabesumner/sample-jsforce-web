var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', 8080);
});