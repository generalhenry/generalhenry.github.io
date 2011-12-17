var QueryLoader = {
	/*
	 * QueryLoader		Preload your site before displaying it!
	 * Author:			Gaya Kessler
	 * Date:			23-09-09
	 * URL:				http://www.gayadesign.com
	 * Version:			1.0
	 * 
	 * A simple jQuery powered preloader to load every image on the page and in the CSS
	 * before displaying the page to the user.
	 */
	selectorPreload: "body",
  done: false,
	init: function(callback) {
		this.complete = callback || $.noop;
    QueryLoader.spawnLoader();
    $(window).load(function () {
      QueryLoader.doneLoad();
    })
	},
	

	spawnLoader: function() {
    if( this.done ) {
      return false;
    }
		if (QueryLoader.selectorPreload === "body") {
			var height = $(window).height();
			var width = $(window).width();
			var position = "fixed";
		} else {
			var height = $(QueryLoader.selectorPreload).outerHeight();
			var width = $(QueryLoader.selectorPreload).outerWidth();
			var position = "absolute";
		}
		
		QueryLoader.overlay = $("<div class=QOverlay></div>").appendTo(QueryLoader.selectorPreload);
		$(QueryLoader.overlay).css({
			position: position,
			width: width,
			height: height
		});
		
		QueryLoader.loadText = $("<div class=QLoad><img alt='loading' src='ajax-loader.gif' />Loading...</div>").appendTo(QueryLoader.overlay);
		
	},
	
	doneLoad: function() {
    this.done = true;
    QueryLoader.overlay.fadeOut(800);
    this.complete();
	}
}