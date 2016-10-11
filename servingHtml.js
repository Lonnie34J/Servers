var http = require('http');
var fs = require('fs');
var url = require('url');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

	var urlParts = url.parse(req.url);

	switch (urlParts.pathname) {
		case'/home':
		displayHome(urlParts.pathname, req, res);
		break;

		case'/favoritefoods':
		displayFoods(urlParts.pathname, req, res);
		break;

		case'/favoritemovies':
		displayMovies(urlParts.pathname, req, res);
		break;

		case'/favoritecss':
		displayCss(urlParts.pathname, req, res);
		break;
	}
};

function displayHome (url, req, res) {
	fs.readFile("home.html", function(err, data){
		res.writeHead(404, {'Content-Type': 'text.html'});
		res.end(data);
	});
};

function displayFoods (url, req, res) {
	fs.readFile("favorite_food.html", function(err, data){
		res.writeHead(404, {'Content-Type': 'text.html'});
		res.end(data);
	});
};

function displayMovies(url, req, res) {
	fs.readFile("favorite_movies.html", function(err, data){
		res.writeHead(404, {'Content-Type': 'text.html'});
		res.end(data);
	});
};

function displayCss(url, req, res) {
	fs.readFile("favorite_css_frameworks.html", function(err, data){
		res.writeHead(404, {'Content-Type': 'text.html'});
		res.end(data);
	});
};

server.listen(PORT, function(){
	console.log("Server is listening on PORT: "+ PORT)
})

