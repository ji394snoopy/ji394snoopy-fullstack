var express = require('express');
var fs = require('fs');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

var app = express();


app.set('port', (process.env.PORT || 5000));

// app.use('/css',express.static(path.join(__dirname,'public/resume/css')));
// app.use('/modules',express.static(path.join(__dirname,'public/resume/node_modules')));
// app.use('/js',express.static(path.join(__dirname,'public/resume/script')));
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.use(serveStatic(__dirname));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    // response.render('pages/index');
    // var filePath = request.url;
    // if (filePath === '/')
    //     filePath = '/resume.html';

    var filePath = __dirname + '/index.html';

    // console.log(filePath);

    // var extname = path.extname(filePath);
    // var contentType = 'text/html';

    // switch (extname) {
    //     case '.js':
    //         contentType = 'text/javascript';
    //         break;
    //     case '.css':
    //         contentType = 'text/css';
    //         break;
    // }

    fs.exists(filePath, function(exists) {
        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                }
            });
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
