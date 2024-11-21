//const {log} = require("console")
const http = require("http");

const PORT=3000
const hostname="127.0.0.1"

console.log("hello")
http
  .createServer((req, res) => {
    res.statusCode = 200;
   // res.setHeader("Content-Type", "text/html");
   res.setHeader("Content-Type", "text/plain");
    res.write("Hello Class 2024-RTT-61");
    res.write('<h1 style="color: red">Hello World!</h1>');  
    res.write('<p>I wonder what else we can send...</p>');  
    res.end();
  }).listen(PORT, () => {
    console.log(`Server is running on port :${PORT}.`);
  });
