var express = require('express');
var app = express();
var port = process.env['PORT'] || 3000;

// Learn about all these express middleware.

app.use(express.bodyParser);
app.use(express.static(__dirname + 'public'));
app.use(express.methodOverride);
app.use(express.cookieParser);
app.use(express.cookieSession({secret: 'thisisasecret'}, key: "test"});



var home = function(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send("this is the home page");
};

var paramRoute = function(req, res) {
  var id = req.params.id
  res.setHeader("Content-Type", "text/html");
  res.send("the id is " + id);
};


app.get("/", home);
app.get("/:id", paramRoute);

app.listen(port);

console.log('Server running at http://localhost:' + port + '/');


/*
app.use(express.bodyParser());

app.get("/", function(req, res) {
  res.setHeader("Content-Type", "text/plan");
  res.end("Hello World");
});

app.post("/apitest", function(req, res) {


});


var handler = function(req, res) {
  console.log(req.url);

  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } else if (req.url == '/marketing') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the marketing page\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found.\n');
  }
}

var server = http.createServer(handler);
server.listen(3000);

console.log("Server running at http://localhost:3000/");

*/