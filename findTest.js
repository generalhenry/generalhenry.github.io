var finder = require('findit').find(__dirname + '/node_modules');
var fs = require('fs');
var whiteList = fs.createWriteStream('./whiteList.txt', {flags: 'a'});
var whiteArray = fs.readFileSync('./whiteList.txt').toString().split('\n');

finder.on('file', function (file, stat) {
  if (whiteArray.some(function (name) { return name === file; })) {
     return console.log('whiteListed:', file);
  }
  var ext = /\.(.*)$/.exec(file);
  if (ext && ext[1]) {
    ext = ext[1];
  }
  if (/js$/.test(ext)) {
    //console.log(file);
    fs.readFile(file, function (err, data) {
      if (err) throw err;
      data = data.toString();
      if (/require/.test(data)) {
        data = data.replace(/^/, 'console.log(__filename);\n');
        fs.writeFile(file, data, function (err) {
          if (err) throw err;
        });
      } else {
        whiteList.write(file + '\n');
      }
    });
  }
});

finder.on('end', function () {
  whiteList.end();
});
