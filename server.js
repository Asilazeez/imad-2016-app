var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title: "Article one created by Asil",
    content:'<p> Hai I am Asil this is my HTML page, During my college days I have try to create some web app. So I got some ides about this course. Now Im working in nucore software solution as Quality Assuarance engineer. Now Im looking forward to evolve myself to a super tester who got a detail idea about development.</p>',
    head: "ARTICLE ONE"
};
var template='<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content = "width-device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel ="stylesheet"/>
    </head>
    <body>
        <div class = "container">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <h3>${head}</h3>
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html> '  ;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
 // res.send("response: to Article one ");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
