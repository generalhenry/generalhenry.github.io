var http = require('http');
var httpProxy = require('http-proxy');

var server = http.createServer(function (req, res) {
  res.end('foo');
}).listen(7235);

var proxy = httpProxy.createServer(function (req, res, next) {
  console.log('started');
  var buffer = httpProxy.buffer(req);
  console.log(buffer.resume.toString());
  next();
}, 7235, 'localhost').listen(9885);
proxy.proxy.on('end', function () {
  console.log('ended');
});


