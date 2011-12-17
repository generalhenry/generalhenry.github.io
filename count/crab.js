function Crab (appendTo, iro ) {
	var that = this, i;
	var urlHead = 'http://mathcoachinteractive.com/Interactive3/media/Art/Crab/';
	var urlTail = '.png';
	var hopURLs = [];
	var runURLs = [];
	var times = 0;
  
	//consts
  var RUN_LENGTH = 686;
  var DEFAULT_INTERVAL = 30;
  
	//define color
	var color = {
    blue: 'Blue',
    orange: 'Orange',
    purple: 'Purple',
    red: 'Red'
  }[ iro ];
	
	//populate array for hop
	for( i=0; i<31; i++ ) {
		if( i<9 ) {
			hopURLs[i] = urlHead+color+'Hop/'+color+'Hop'+'000'+(i+1)+urlTail;
		} else {
			hopURLs[i] = urlHead+color+'Hop/'+color+'Hop'+'00'+(i+1)+urlTail;
		}
	}
	//populate array for run
	for( i=0; i<95; i++ ) {
		if( i<9 ) {
			runURLs[i] = urlHead+color+'Run/'+color+'Run'+'000'+(i+1)+urlTail;
		} else {
			runURLs[i] = urlHead+color+'Run/'+color+'Run'+'00'+(i+1)+urlTail;
		}
	}
	
	$.preLoadImagesArray(hopURLs);
	$.preLoadImagesArray(runURLs);
	
	var crab = $('<img class=crab src="'+runURLs[0]+'" alt="crab" />');
	crab.appendTo(appendTo);
  
  function delayFrameChange (src, index, interval) {
    setTimeout( function(){ crab.attr('src', src ); }, interval*index );
  }
  
	this.run = function (num) {	
		console.log("crab obj: run called");
		var interval = num || DEFAULT_INTERVAL;
		crab.attr('src', runURLs[0] ).css({top:0, left:0+(times*-RUN_LENGTH)});
    var index = 0;
		for( var i in runURLs ) {
			delayFrameChange( runURLs[i], index++, interval);
		}	
		times++;		
	};
	this.runReverse = function (num) {
		console.log("crab obj: runReverse called");
		var interval = num || DEFAULT_INTERVAL;
		times--;
		crab.attr('src', runURLs[runURLs.length-1] ).css({top:0, left:0+(times*-RUN_LENGTH)});
		var index = 0;
		for( var x = (runURLs.length-1); x>=0; x-- ){
      delayFrameChange( runURLs[x], index++, interval);
		}		
	};
	this.blink = function (num) {
		console.log("crab obj: blink called");
		var start = 75;
		var interval = num || DEFAULT_INTERVAL;
		var left = 17 + ( (times-1) * -700) ;
		crab.attr('src', runURLs[start] ).css({top:0, left:left});
		var index = 0;
		for( var i=start; i< runURLs.length; i++ ) {
      delayFrameChange( runURLs[i], index++, interval);
		}	
	};
	this.hop = function (num) {
		console.log("crab obj: hop called");
		var interval = num || DEFAULT_INTERVAL;
		var index = 0;
		var left = 17 + ( (times-1) * -RUN_LENGTH) ;
		crab.attr('src', hopURLs[0] ).css({top:-97, left:left});
		for( var i in hopURLs ) {
      delayFrameChange( hopURLs[i], index++, interval);
		}
	};
	this.reveal = function () {
		console.log("crab obj: reveal called");
		crab.hide().fadeIn();
	};
	this.conceal = function () {
		console.log("crab obj: conceal called");
		crab.show().fadeOut();
	};
	this.reset = function () {
		console.log("crab obj: reset called");
		times = 0;
	};
  this.getTimes = function () {
    return times;
  }
}