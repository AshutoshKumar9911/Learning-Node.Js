const http = require('http');

// function requestListner(req, res){
//   console.log(req);
// }

// http.createServer(requestListner);


const server = http.createServer((req, res)=>{
  console.log(req);
});

// server.listen(3000);

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT} `)
})
