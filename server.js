const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	// set header content type
	res.setHeader("Content-Type", "text/html");

	res.write("<h1>Hello, Welcome</h1>");
	res.write("<p>This is a test of the response</p>");

	res.end(); // this sends the result to the browser
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
