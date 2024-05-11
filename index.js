const http = require('node:http');
const os = require('os');

// Delayed server setup
setTimeout(() => {
  const reqHandler = (req, res) => {
    if (req.url === "/" && req.method === "GET") {
      console.log("Server running");

      const nIArray =  Object.keys(os.networkInterfaces()).slice(0,3)
      const userData = {
        message: `Server set up from ${os.userInfo().username}`,
        admin: `Administrative access controlled by ${os.version()}`,
        note: `Hello, world! We are running from ${os.platform()} and have the following network interfaces: ${nIArray}`,
        networkI: {
          networkInterfaces: `${os.networkInterfaces()
          }`},
        result: `Synchronous addition result: ${sum}`,
        resultX: `Synchronous product result: ${product}`
      };

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify(userData));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  };
  const product = 2*3;
  const sum = 2 + 2;
  console.log(`result: Synchronous addition result: ${sum}`)
  console.log(`result: Synchronous addition result: ${product}`)

  const server = http.createServer(reqHandler);

  server.listen(3000, "127.0.0.1", () => {
    console.log("I'm listening on port 3000 and running from 127.0...");
    console.log(`result: Synchronous addition result: ${sum}`)
    console.log(`result: Synchronous addition result: ${product}`)
  });
}, 3000);
