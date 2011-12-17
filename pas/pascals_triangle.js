(function pascals_triangle () {
  function rgb(value) {
    var greater = ~~value;
    var lesser = ~~(value * 0.5);
    return 'rgb('+lesser+','+lesser+','+greater+')';
  }
  function colors(n,mod){
  var value = n*255/mod;
    return rgb( value );
  }
  function draw_rectangle(row,column,color) {
    var offset = column - row/2;
    var x = middle+offset;
    var y = row;
    var posx= middle+scale*offset;
    var posy= scale*y;
    var rect = paper.rect(posx, posy, scale, scale);
    rect.attr( {
      fill: color,
      'stroke-width': 0,
      stroke: color
    });
    rect = null;
  }
  function draw_triangle(rows,mod) {
    var value = 1 % mod;
    draw_rectangle(1,0,colors(value,mod));
    var prev_row = [0,1,0];
    var this_row, i;
    for(var cur_row = 2; cur_row <= rows; cur_row++) {
      this_row = [0];
      for(i =0, len = prev_row.length - 1; i < len;i++) {
        this_row[i+1] = (prev_row[i]+prev_row[i+1] )%mod;
        value = this_row[i+1];
        draw_rectangle(cur_row,i,colors(value,mod));
      }
      this_row[i+1]=0;
      prev_row = this_row;
    }
  }
  function getParams(url) {
    var substring = url.substr(url.lastIndexOf("?")+1,url.length);
    var valuepairs = substring.split("&");
    var result = {};
    console.log(valuepairs);
    for(var i = 0; i < valuepairs.length;i++) {
      var pairarray = valuepairs[i].split("=");
      var key = pairarray[0];
      var value = pairarray[1];
      result[key] = value;
    }
    return result;
  }

  var url=document.URL;
  var params = getParams(url);
  var rows = ~~params.rows;
  var mod = ~~params.mod;
  var SIZE = 500;
  var scale = SIZE/rows;
  var middle = SIZE/2;
  var paper = Raphael(document.getElementById("pascalcanvas"), SIZE, SIZE);
  draw_triangle(rows,mod);
})();
