var request = require('request');
var Magic = require('mmmagic').Magic;
var magic = new Magic();
//var azure = require('azure');
//var blobService = azure.createBlobService();
var fs = require('fs');
//console.log(blobService);
var ws = fs.createWriteStream('./file.tmp');

request('https://htilford.com/bgWZ.jpeg', {encoding:null}).pipe(ws).on('close', function () {
  console.log('downloaded');
  magic.detectFile('./file.tmp', function (err, res) {
    console.log('detected', res);
  });
});
