const http = require('node:http');
const os = require('os');

const reqHandler = (req, res)=>{
    if (req.url === "/" && req.method === "GET"){
      console.log("SErver running")
      //synchronous operation
      const sum = 2+2;
      const userData = {
        message: `Server set up from ${os.userInfo().username}`,
          admin: `Administrative access controlled by ${os.version()}`,
          note: `Hello, world! We are running from ${os.platform()} and have the following network interfaces ${JSON.stringify(os.networkInterfaces())}`,
          result: `Synchronous addition result: ${sum}`
        }
           res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type")
      const sysInfo = {message: `Hi there, I am os.user() /n I have ${os.cpus()} number of cores, and have ${os.freemem()} left on my PC`}
      res.writeHead(200, {'Content-Type': 'utf-8'});

      res.writeHead(200, {'Content-Type': 'utf-8'})
      res.end(JSON.stringify(userData));

    } else{
        res.writeHead(404, { "Content-Type": "text/plain" });
    }
  }
  const sum = 2+2;
  const product = 2*3;
const server = http.createServer(reqHandler);
console.log(`Synchronous addition result: ${sum}`)

server.listen("3000", "127.0.0.1", ()=>{
console.log(`I'm listening on 3000, and running from 127.0...`)
console.log(`Synchronous addition result: ${product}`)
console.log(`Synchronous product result: ${product}`)
});


