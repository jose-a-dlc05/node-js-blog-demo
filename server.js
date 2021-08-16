const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	// set header content type
	res.setHeader("Content-Type", "text/html");

	let path = "./views/";
	switch (req.url) {
		case "/":
			path += "index.html";
			res.statusCode = 200;
			break;
		case "/about":
			path += "about.html";
			res.statusCode = 200;
			break;
		case "/about-me" || "/aboutme":
			res.statusCode = 301;
			res.setHeader("Location", "/about");
			res.end();
		case "/contact":
			path += "contact.html";
			res.statusCode = 200;
			break;
		default:
			path += "404.html";
			res.statusCode = 404;
			break;
	}

	// send an html file to the browser
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.end(data); // this only works if you're only sending on thing back to the page, if send multiple things back then use res.write()
		}
	});
});

server.listen(3000, "localhost", () => {
	console.log("listening for requests made on port 3000");
});

/**
 * createServer([options][,requestListener])
 *
 * options (object)
 * requestListener(function)
 *
 * returns: <http.Server>
 *
 * https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener
 */

/**
 * server.listen()
 * Starts the HTTP server listening for connections.
 */
