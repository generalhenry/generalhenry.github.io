http = require 'http' 
server = http.createServer (req, res) ->
  res.end 'yo'
  debugger
server.listen 9000
