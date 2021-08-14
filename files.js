var fs = require("fs");
// READING FILES
// asynchronous
/*
fs.readFile("./docs/blog1.txt", function (err, data) {
	if (err) {
		console.log(err);
	}
	console.log(data.toString());
});

console.log("last line");
*/

// WRITING FILES
/*
//if file exists it replaces the content with what is in the second argument
fs.writeFile("./docs/blog1.txt", "hello, world", () => {
	console.log("file was written");
});

// if file does not exist then it creates it with what is in the second argument
fs.writeFile("./docs/blog2.txt", "hello, again", () => {
	console.log("file was written again");
});
*/
// DIRECTORY
/*
if (!fs.existsSync("./assets")) {
	fs.mkdir("./assets", (err) => {
		console.log(err);
	});
	console.log("folder created");
} else {
	fs.rmdir("./assets", (err) => {
		console.log(err);
	});
	console.log("folder deleted");
}
*/

// DELETE FILES
/*
if (fs.existsSync("./docs/deleteme.txt")) {
	fs.unlink("./docs/deleteme.txt", (err) => {
		console.log(err);
	});
	console.log("file deleted");
}

*/
