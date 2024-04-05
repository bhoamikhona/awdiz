const http = require("http");

const books = [{ name: "mybook 1", name: "mybook2", name: "mybook3" }];

const server = http.createServer((req, res) => {
  console.log(req, "req");
  if (req.method === "GET" && req.url === "/books") {
    return res.end("books");
  } else if (req.method === "GET" && req.url === "/welcome") {
    return res.end("Welcome");
  } else if (req.method === "GET" && req.url === "/bye") {
    return res.end("bye");
  } else {
    return res.end("url undefined");
  }
});

server.listen(3000, () => console.log("Server listening on port 3000"));
