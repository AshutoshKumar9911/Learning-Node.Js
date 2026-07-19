// Simple Node Server

const http = require('http');

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);

  if (req.url ==='/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> My First Page </title></head> ');
  res.write('<body><h1>Ashutosh Kumar / Preaparing for Gate</h1></body>')
  res.write('</html>');
  return res.end();
  }else if (req.url === '/subscription'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> My First Page </title></head> ');
  res.write('<body><h1>I have Subscription of Unacademy </h1></body>')
  res.write('</html>');
  return res.end();
  }else{
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> My First Page </title></head> ');
  res.write('<body><h1>SherShah Engineering College, Sasaram</h1></body>')
  res.write('</html>');
  res.end();
  }
});

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`)
});
