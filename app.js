const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000); // returns instance of server

app.get("/", (req, res) => {
	// res.send("<h1>home page</h1>");
	res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
	// res.send("<h1>about page</h1>");
	res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
	// res.send("<h1>about page</h1>");
	res.sendFile("./views/contact.html", { root: __dirname });
});

// redirects
app.get("/about-me", (req, res) => {
	res.redirect("/about");
});

// 404
app.use((req, res) => {
	res.status(404).sendFile("./views/404.html", { root: __dirname });
});
