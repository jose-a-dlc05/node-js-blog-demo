const http = require("http");

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
const server = http.createServer((req, res) => {
	console.log("request made");
});

/**
 * server.listen()
 * Starts the HTTP server listening for connections.
 */
server.listen(3000, "localhost", () => {
	console.log("listening for requests made on port 3000");
});
