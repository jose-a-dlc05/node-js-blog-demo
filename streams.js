// start using data before it has finished loading
const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
	encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
// 	console.log("---- NEW CHUNK ----");
// 	console.log(chunk.toString());
// 	writeStream.write(`\n NEW STREAM \n`);
// 	writeStream.write(chunk);
// });

// piping
// readStream.pipe(writeStream);
