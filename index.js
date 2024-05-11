const http = require('node:http');
const os = require('os');
const { randomInt} = require('node:crypto')

const delay = randomInt(2000, 4000);
const delay2 = randomInt(3500, 5000);
const reqDelay1 = randomInt(2000, 6000);

// Delayed server setup
setTimeout(() => {
  const reqHandler = (req, res) => {
    const reqDelay1 = randomInt(2000, 5000);
    setTimeout(() => { // Apply delay for this specific request
    if (req.url === "/" && req.method === "GET") {
      console.log(`Server up and running requests after ${delay} ms delay`);
      const userData = {
        message: `Server set up from ${os.userInfo().username}`,
        admin: `Administrative access controlled by ${os.version()}`,
        note: `Hello, world! We are running from ${os.platform()} and have the following network interfaces \t ${JSON.stringify(os.networkInterfaces())}`,
        result: `Synchronous addition result: ${sum}`,
        resultX: `Synchronous addition result: ${product}`
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(`${JSON.stringify(userData)} after ${delay2} ms delay`);
    }else if(req.url === "/files" && req.method === "GET"){
        console.log(`Server is up after ${delay1} ms delay`);
        const details = {
          News1: "Is New York the capital of the world?",
          News2: "How do University students fare? A report by Essien Pam"
        };
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(details));
      }
 else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  }, reqDelay1);
};
  const product = 2*3;
  const sum = 2 + 2;
  console.log(`result: Synchronous addition result: ${sum}`)
  console.log(`result: Synchronous addition result: ${product}`)

  const server = http.createServer(reqHandler);

  server.listen(3000, "127.0.0.1", () => {
    console.log("Server listening on port 3000");
    console.log(`result: Synchronous addition result: ${sum} after ${reqDelay1} ms delay`)
    console.log(`result: Synchronous product result: ${product} after ${delay} ms delay`)
  });
}, delay);
