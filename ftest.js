var fstream = require('fstream');
var Stream = require('stream');
var read = fstream.Reader('./node_modules');
var transform = Stream.Transform();
var write = fstream.Writer('./temp');

transform._transform = function transform (chunk, encoding, cb) {
  process.stdout.write('.');
  this.push(chunk);
  cb();
};

transform.add = function (entry) {
  console.log('add', entry.type, entry.path);
  //process.exit();
  
  entry.pipe(transform, {end: false});
  transform.emit('entry', entry);
};

transform.pipe = function (dest, opts) {
  var me = this
  if (typeof dest.add === "function") {
    // piping to a multi-compatible, and we've got directory entries.
    me.on("entry", function (entry) {
      var ret = dest.add(entry)
      if (false === ret) {
        me.pause()
      }
    })
  }

  // console.error("R Pipe apply Stream Pipe")
  return Stream.prototype.pipe.apply(this, arguments)
}

read.pipe(transform).pipe(write);
