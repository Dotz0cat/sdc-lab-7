const { createServer } = require('node:http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
  var reqPath = url.parse(req.url, true).pathname;
  console.log(reqPath + ' was accessed');
  switch (reqPath) {
    case ('/buttons'):
      let pData = '';
      if (req.method === 'POST') {
        req.on('data', (chunk) => {
          pData += chunk;
        });
      }

      const filepath = path.join(__dirname, 'buttons.html');
      fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end('<h1>Page Not Found</h1>');
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const modified_data = data.replace(new RegExp('pData', 'g'), pData);
        res.end(modified_data);
      });
      break;
    case ('/path'):
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end('<p>This is a seperate path</p>');
      break;
    case('/'):
    case ('/index.html'):
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end('<p>Hello World</p>');
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<p>content not found</p>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
