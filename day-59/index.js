import http from "http";
const books = ["ABC", "XYZ", "PQR"];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url == "/api/books") {
    res.end(JSON.stringify(books));
  } else if (req.method === "GET" && req.url === "/api/test") {
    res.end(`Testing`);
  } else {
    res.end("Method or url not found...");
  }
});

server.listen(8000, () => {
  console.log(`server is running on port 8000`);
});

// Event loop demo
console.log(`hi 1`);
setTimeout(() => {
  console.log(`hi 2`);
}, 3000);
console.log(`hi 3`);
setTimeout(() => {
  console.log(`hi 4`);
}, 3000);
