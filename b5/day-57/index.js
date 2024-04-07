import fs from "fs";

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const content = "This is the content to be written in the file.";
// Create a new fule and write content in it.
fs.writeFile("example.txt", content, (err) => {
  if (err) {
    console.log(`Error writing this file: ${err}`);
  } else {
    console.log(`File created and content written successfully!`);
  }
});
