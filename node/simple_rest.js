const { createServer } = require('node:http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
  var path = url.parse(req.url, true).pathname;
  console.log(path + ' was accessed');
  switch (path) {
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
