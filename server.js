var express = require('express');
var app = express();


app.use('', express.static(__dirname + '/myApp/'));

// application -------------------------------------------------------------
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/myApp/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(4200, 'localhost');
console.log('App listening on port ', 4200);
