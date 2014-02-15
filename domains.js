var https = require('http');
var domain = require('domain');

function getUrl(aHost, aPath, okCallback) {
  var options = { host : aHost, path : aPath, method : 'GET' }
    , responseBody = ''
    , request = https.request(options, handleRequest);

  request.end();

  function handleRequest(httpsResponse) {
    httpsResponse.setEncoding('utf8');
    httpsResponse.on('data', function(chunk) { responseBody += chunk; });
    httpsResponse.on('end',  function(){ okCallback(httpsResponse.statusCode, responseBody); });
    //httpsResponse.on('error', function(err){ console.log('hi'); throw err; }); 
  }
}

function fetch(aHost, aPath, okCallback) {
  var d = domain.create();
  d.on('error', function(err) { 
    console.log('It all went awry: ' + err.toString());
    d.dispose();
    //d.removeAllListeners();
    //d = null;
    //console.dir(d);
    //storeResult = null;
    //okCallback = null;
    //process.exit(1);
  });
  d.on('dispose', function () {
   console.log('bob');
   d.removeAllListeners();
   console.log(d);
   d = null;
  });

  d.run(function() { getUrl(aHost, aPath, storeResult); });

  function storeResult(statusCode, responseBody) {
    if (statusCode >= 400) {
      //okCallback();
      throw new Error("Oops");
    } else {
      okCallback(responseBody);
    }
  }
}

// works fine and exits cleanly with a valid path (like '/')
fetch('www.google.com', '/domainsAreStrange', function(body) { console.log('Received: ' + body); });
