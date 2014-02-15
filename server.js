var http = require('http'),
  request = require('request');

http.createServer(function (req, res) {
  req.pipe(request('http://runnable.com' + req.url)).pipe(res);
}).listen(4563);
