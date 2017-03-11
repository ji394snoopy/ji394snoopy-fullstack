var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public/resume')));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    //response.render('pages/index');
    console.log('get /');
    response.redirect('resume.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
