var http = require("http");
const url = require('url')
const PORT = 8081;

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  const parseUrl=url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimPath = path.replace(/^\/+|\/+$/g, '')
  if(trimPath === "welcome"){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Dominos!');
  } else if (trimPath === 'contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`{  
        phone: '18602100000', 
             email: 'guestcaredominos@jublfood.com' 
       }
       `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 error');
  }
}


httpServer.listen(PORT,()=>{
    
    console.log(`The server is listening on port ${PORT}`)
   
})

module.exports = httpServer;