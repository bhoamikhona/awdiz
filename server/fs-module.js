const fs = require("fs");

fs.writeFile("./server/hello.txt", "Hello, World!", function (error) {
  if (error) console.log(error);
  else console.log("File successfully written.");
});

fs.readFile("./server/hello.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
