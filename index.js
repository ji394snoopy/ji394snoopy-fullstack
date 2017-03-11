var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

var localPath = "/resume/resume.html"

app.get('/', function(request, response) {
  //response.render('pages/index');
  fs.readFile(localPath, function(err, contents) {
		if(!err) {
			response.setHeader("Content-Length", contents.length);
			response.statusCode = 200;
			response.end(contents);
		} else {
			response.writeHead(500);
			response.end();
		}
});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


