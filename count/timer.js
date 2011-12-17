var timer = new function() {
	var that = this;
	this.timeCount = 0;
	this.firstclick = true;
	this.duration = 1000;
	this.skip = 0;
	this.pause = true;
	this.answered = 0;
	this.clockTimeout = "";
	this.setClock = function () {
		
	}
	switch(activity.getName()){
		case "MakeAddition":
		case "MakeSubtraction":
		case "MakeMultiplication":
		case "MakeDivision":
			this.frogsOutGreen = new Array();
			var start = 1;
			var end = 35;
			for( var i=start; i<=end; i++){
				if(i<10){
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCropped/FrogHopCrop000'+i+'.png';
					$.preLoadImages(url);
					this.frogsOutGreen.push(url);
				}else{
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCropped/FrogHopCrop00'+i+'.png';
					$.preLoadImages(url);
					this.frogsOutGreen.push(url);
				}
			}
			this.frogsInGreen = new Array();
			var start = 36;
			var end = 76;
			for( var i=start; i<=end; i++){
				if(i<10){
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCropped/FrogHopCrop000'+i+'.png';
					$.preLoadImages(url);
					this.frogsInGreen.push(url);
				}else{
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCropped/FrogHopCrop00'+i+'.png';
					$.preLoadImages(url);
					this.frogsInGreen.push(url);
				}
			}
			this.frogsOutOrange = new Array();
			var start = 1;
			var end = 35;
			for( var i=start; i<=end; i++){
				if(i<10){
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedOrange/FrogHopCropOrange000'+i+'.png';
					$.preLoadImages(url);
					this.frogsOutOrange.push(url);
				}else{
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedOrange/FrogHopCropOrange00'+i+'.png';
					$.preLoadImages(url);
					this.frogsOutOrange.push(url);
				}
			}
			this.frogsInOrange = new Array();
			var start = 36;
			var end = 75;
			for( var i=start; i<=end; i++){
				if(i<10){
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedOrange/FrogHopCropOrange000'+i+'.png';
					$.preLoadImages(url);
					this.frogsInOrange.push(url);
				}else{
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedOrange/FrogHopCropOrange00'+i+'.png';
					$.preLoadImages(url);
					this.frogsInOrange.push(url);
				}
			}
			this.frogsOutBlue = new Array();
			var start = 1;
			var end = 35;
			for( var i=start; i<=end; i++){
				if(i<10){
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedBlue/FrogHopCropBlue000'+i+'.png';
					$.preLoadImages(url);
					this.frogsOutBlue.push(url);
				}else{
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedBlue/FrogHopCropBlue00'+i+'.png';
					$.preLoadImages(url);
					this.frogsOutBlue.push(url);
				}
			}
			this.frogsInBlue = new Array();
			var start = 36;
			var end = 75;
			for( var i=start; i<=end; i++){
				if(i<10){
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedBlue/FrogHopCropBlue000'+i+'.png';
					$.preLoadImages(url)
					this.frogsInBlue.push(url);
				}else{
					var url = 'http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCroppedBlue/FrogHopCropBlue00'+i+'.png';
					$.preLoadImages(url)
					this.frogsInBlue.push(url);
				}
			}
			break;
		default:
	}
	this.frogStick = new Array();
	var start = 1;
	var end = 41;
	for( var i=start; i<=end; i++){
		if(i<10){
			this.frogStick.push('http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogSticktoScreen/FrogScreen000'+i+'.png');
		}else{
			this.frogStick.push('http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogSticktoScreen/FrogScreen00'+i+'.png');
		}
	}
	this.hithere = function (){
		soundManager.onready(function(){
			soundManager.play('hithere', 'http://mathcoachinteractive.com/Interactive3/media/Sounds/HiThere_ClickBlueButton.mp3');
		});
	}
	this.bugreport = function () {
		return [ ["level",this.level],["toe",this.toe],["turn",this.turn] ];
	};
};
$.preLoadImages('http://mathcoachinteractive.com/Interactive3/media/Art/Make/BGv1.png');
	
$(document).ready(function(){
	$(document).keydown(function(e){
		if( !timer.pause ){
			switch( e.which ){
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
					console.log("0-9 pressed");
					addNumber( e.which - 48 );
					break;
				case 83:
					console.log("s pressed"); 
					skip();
					break;
				case 8:
				case 68:
					console.log("d pressed");
					deletenum();
					break;
				case 13:
					console.log("return pressed");
					check();
					break;	
			}	
		}
	});
});
classes[classes.length] = timer;
function timerpost(result)
{
	$.post(activity.collect(), { 
		QuestionIndex: activity.getProblemnumber(),
		time: timer.timeCount,
		problem: problem(),
		correct: correct(),
		result: result
		 } );
}

function clockTimeOut()
{

}
function clockTick() 
{
	if(this.pause)
	{
		alert("curses");
	}
	timer.timeCount++;/*
	if(timer.timeCount > 12)
	{
		clockTimeOut();
		timer.timeCount = 1;
	}*/
	//$("#timerdial").css("backgroundImage", "url(http://mathcoachinteractive.com/Interactive3/media/clockimg/bluecircles/clock_circle"+timer.timeCount+".png)");
	timer.clockTimeout = setTimeout("clockTick()", timer.duration);
}
function bindClicks(){
	$("#democlose").live('click', function() {
		 $("#demo").fadeOut("slow", function(){ $(this).remove() }).end();
	 });
	$("#demoplay").live('click', function(){
		clearTimeout(timer.clockTimeout);
		if(timer.pause)
		{
			if(timer.firstclick){
				switch(activity.getName()){
					case "MakeAddition":
					case "MakeSubtraction":
					case "MakeMultiplication":
					case "MakeDivision":
						$("#demo").animate({top:450,right:100},1500);
						break;
					default:
						$("#demo").animate({top:420,right:660},1500);
				}
				$("#demoplay").remove();
				firstclick = false;
			}
			console.log("play");
			timer.pause = false;
			$("#timerbutton").attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/pause.png");
			timer.clockTimeout = setTimeout("clockTick()", timer.duration);
		}
		switch(activity.getName()){
			case "MakeAddition":
			case "MakeSubtraction":
			case "MakeMultiplication":
			case "MakeDivision":
				$("#demo").animate({top:450,right:100},1500);
				break;
			default:
				$("#demo").animate({top:420,right:660},1500);
		}
		$(this).remove();
	});
	$("#continue").live('click', function() {
		hideMenu();
		timer.pause = false;
		console.log("play");
		$('#bigstar').remove();
		$("#timerbutton").attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/pause.png");
	});
	$("#goagain").live('click', function() {
		hideMenu();
		$("#rewards img").remove();
		$("#splats img").remove();
		$("#bigstar").remove();
		$("#demo").remove();
		switch(activity.getName()){
			case "Count":
				resetCount();
				break;
			case "MakeAddition":
			case "MakeSubtraction":
			case "MakeMultiplication":
			case "MakeDivision":
				clearFrog(0);
				setProblem();
				splash();
				break;
			case "TellTime":
				resetTellTime();
				break;	
		}
		timer.firstclick = true;
		
	});
	$("#nextlevel").live('click', function() {
		hideMenu();
		$("#rewards img").remove();
		$("#splats img").remove();
		$("#bigstar").remove();
		$("#demo").remove();
		timer.firstclick = true;
		console.log(activity);
		activity.getObject().levelup();
		switch(activity.getName()){
			case "Count":
				resetCount();
				break;
			case "MakeAddition":
			case "MakeSubtraction":
			case "MakeMultiplication":
			case "MakeDivision":
				splash();
				clearFrog(0);
				setProblem();
				break;	
			case "TellTime":
				resetTellTime();
				break;
		}
	});
	$("#stop").live( 'click', function() {
		hideMenu();
		$("#bigstar").remove();
		$("#rewards img, #splats img").remove();
		$("#demo").remove();
		activity.showreport();
		switch(activity.getName()){
			case "Count":
				resetCount();
				break;
			case "MakeAddition":
			case "MakeSubtraction":
			case "MakeMultiplication":
			case "MakeDivision":
				clearFrog(0);
				setProblem();
				splash();
				break;	
			case "TellTime":
				resetTellTime();
				break;
		}
		timer.firstclick = true;
	});
}
function setSettings(){
	//SETTINGS
	$('#dialog-settings').load("../js/base/loadSettingsTest.php", {activityName:activity.getName(), level:activity.getLevel()}, function(){
		//$("#level"+activity.getLevel()).append('  (You are currently here.)');
		$('#settingsbutton').click(function(){
			$('#currentLocation').remove();
			$("#level"+activity.getLevel()).append('<span id=currentLocation> (You are currently here.)</span>');
		});
		console.log("settings loaded");
	});
	
	
	/*
	$('#dialog-settings').html('<ul id="levels"></ul>');
	var rawurl = location.href.toString();
	var url = rawurl.substring(0, rawurl.indexOf("=") );
	$('#levels').css({'list-style-type':'circle', 'list-style-position':'inside'});
	var selectLevels = activity.getLevels();
	for( var i=0; i<selectLevels.length; i++){		
		switch(activity.getName()){
			default:
				$('#levels').append('<li id="level'+selectLevels[i]+'"><a href="'+url+'='+selectLevels[i]+'">Level '+selectLevels[i]+'</a></li>');
				break;
		}
	}	
	
	*/	
}
function setClock( callback )
{
        timer.firstclick = true;
	$("#timerbutton").click(function () {
		clearTimeout(timer.clockTimeout);
		if(timer.pause)
		{
			if(timer.firstclick){
				switch(activity.getName()){
					case "MakeAddition":
					case "MakeSubtraction":
					case "MakeMultiplication":
					case "MakeDivision":
						$("#demo").animate({top:450,right:100},1500);
						break;
					default:
						$("#demo").animate({top:420,right:660},1500);
				}
				$("#demoplay").remove();
				firstclick = false;
				if( callback != null ){
					callback();
				}
			}
			console.log("play");
			timer.pause = false;
			$(this).attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/pause.png");
			timer.clockTimeout = setTimeout("clockTick()", timer.duration);
		}
		else
		{
			
			pauseGame();
		}
	});
	
}
function setKeypad() {
	var keypad = $('<div id=keypad></div>');
	keypad.css({
		backgroundColor:'#ffffff',
		opacity:.85,
		width:150,
		height:250,
		border:'2px solid #39b7d0', 
		bottom:10,
		right:10,
		borderRadius:10,
		padding:5});
	var cval = '';
	for(var i = 1; i <= 13; i++)
	{
		if( i <= 9 )
		{
			var key = $('<div class=key>'+i+'</div>').css({fontSize:30});
		}
		else
		{
			switch(i){
				case 10:
					var key = $('<div class=key>delete</div>').css({fontSize:10});
					break;
				case 11:
					var key = $('<div class=key>0</div>').css({fontSize:30});
					break;
				case 12:
					var key = $('<div class=key>skip</div>').css({fontSize:10});
					break;
				case 13:
					var key = $('<div class=key id=checkkey><b>check</b><img src=http://mathcoachinteractive.com/Interactive3/media/Art/CheckMark_noText.png></div>').css({fontSize:10 });
					break;
				
			}
		}
		key.css({
			float:'left',
			width:40,
			height:40,
			textAlign:'center',
			margin:5,
			borderRadius:5,
			backgroundColor:'#e2eefc',
			cursor:'pointer'});
		
		key.hover(function () {
			$(this).css({backgroundColor:'#C5DFFF'});
		}, 
		function () {
			$(this).css({backgroundColor:'#e2eefc'});
		});
		keypad.append(key);
	}
	$('#workspace').html(keypad);
	
	//END NEW KEYPAD
}
function setFrogs(){
	var frogs = $('<div id=frogs></div>');
	frogs.append('<div id=log><img id=logimg src="http://mathcoachinteractive.com/Interactive3/media/Art/Make/Logv2.png"/></div>');
	for(var i=0; i<10; i++){
		frogs.append('<div class=frog id='+i+'><img style="display:none;" src="http://mathcoachinteractive.com/Interactive3/media/Art/Make/FrogAnimations/FrogHopCropped/FrogHopCrop0001.png"/></div>');
	}
	
	$('#bottom').append(frogs).append('<div id=water></div>');
}
function splash()
{
	if( $("#demo").length == 0 ){
		showmebird = $('<div id=demo ><div id=democlose style="cursor:pointer; color:white; width:70px; float:right;">close [x]</div><img alt="Demo" src="http://mathcoachinteractive.com/Interactive3/media/Art/Cloud_Timed_Demo_v2.png" /><div id=demoplay></div></div>');
		showmebird
		.css({ 
			position: "absolute",
			width: 300,
			top: 500,
			right: 700,
			height: 250
		})
		.hide()
		.appendTo("body")
		.fadeIn(500)
		.animate({
			top:200,
			right:300
		},1500)
		.draggable();
	}
	
	return false;
}
function pauseGame(){
		console.log("paused");
		timer.pause = true;
		$("#timerbutton").attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/play.png");
		showMenu("pause");
}
function reward(rewardimg, rewardfinishimg)
{
	clearTimeout(timer.clockTimeout);
	timer.timeCount = 0;
	if($("#rewards img").length < 9)
	{
		$("#rewards").append('<img alt="star" src = '+rewardimg+' style="height:80px"/>');
		timer.clockTimeout = setTimeout("clockTick()", timer.duration);
		setProblem();
	}
	else
	{
		timer.pause = true;
		console.log("paused");
		$("#timerbutton").attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/play.png");
		$("#rewards").append('<img alt="star" src = '+rewardimg+' style="height:80px"/>');
		$('body').append('<div id=bigstar><img src="'+rewardfinishimg+'" /></div>');
		switch(activity.getName()){
			case "DFX":
				var windowWidth = getViewport('width');
				var contentHeight = getViewport('height');
				var divWidth = 281;
				var divHeight = 242;
				$("#bigstar").css({
					position:'fixed',
					width:divWidth,
					height:divHeight,
					left: windowWidth/2 - divWidth/2 + 50,
					top: contentHeight/12,
					'z-index':600
				});
				$("#bigstar img").css({
					height:250
				});
				break;
			default:
				var windowWidth = getViewport('width');
				var contentHeight = getViewport('height');
				var divWidth = 281;
				var divHeight = 242;
				$("#bigstar").css({
					position:'fixed',
					width:divWidth,
					height:divHeight,
					left: windowWidth/2 - divWidth/2 + 50,
					top: contentHeight/12,
					'z-index':600
				});
		}
		showMenu("end");
	}
}
function makeReward()
{
	clearTimeout(timer.clockTimeout);
	timer.timeCount = 0;
	if(timer.answered < 9)
	{
		console.log("timer answered<9: "+ timer.answered);		
		timer.clockTimeout = setTimeout("clockTick()", timer.duration);
		switch(timer.answered){
			case 0:
			case 1:
			case 2:
			case 5:
			case 6:
			case 7:
				animateFrog( 'out', timer.answered, 'green' );
				break;
			case 3:
			case 4:
				animateFrog( 'out', timer.answered, 'orange' );
				break;
			case 8:
			case 9:
				animateFrog( 'out', timer.answered, 'blue' );
				break;
		}
		timer.answered++;
		setProblem();
	}
	else
	{
		console.log("timer answered>9: "+ timer.answered);		
		timer.pause = true;
		console.log("paused");
		$("#timerbutton").attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/play.png");
		animateFrog( 'out', timer.answered, 'blue' );
		setTimeout( function(){
			soundManager.play('wow', 'http://mathcoachinteractive.com/Interactive3/media/Sounds/Audio_Wow_TenRight.mp3');
			$('<img id=wow_affirm src="http://mathcoachinteractive.com/Interactive3/media/Art/Make/affirm_WOW_frogbog.png"/>').hide().appendTo('#rewards').fadeIn();
		}, 2500);
		setTimeout( function(){
			$('#wow_affirm').fadeOut();
		}, 5000);
		
		for(var i=1; i<=timer.answered; i++){
			switch(i){
				case 0:
				case 1:
				case 2:
				case 5:
				case 6:
				case 7:
					setTimeout( 'animateFrog("in",'+i+', "green")', 5200 );
					break;
				case 3:
				case 4:
					setTimeout( 'animateFrog("in",'+i+', "orange")', 5200 );
					break;
				case 8:
				case 9:
					setTimeout( 'animateFrog("in",'+i+', "blue")', 5200 );
					break;
			}
		}
		setTimeout( function(){
			animateFrog("stick",0);
			$('#wow_affirm').remove();
		}, 6500 );
		$('#frogs #0').css({'z-index':450});
		timer.answered = 0;
		setTimeout(function () {showMenu("end") }, 7500);
		
	}
}
function tellTimeReward(answer)
{
	
	soundManager.play(answer);
	soundManager.createSound({
		id: 'shootingstar', 
		url: 'http://mathcoachinteractive.com/Interactive3/media/Sounds/TellTime/shootingstar.mp3',
		volume: 500
	});
	soundManager.play('shootingstar');
	clearTimeout(timer.clockTimeout);
	timer.timeCount = 0;
	if(timer.answered < 9)
	{
		TellTime.incCurrProblem();
		console.log("timer answered<9: "+ timer.answered);		
		timer.clockTimeout = setTimeout("clockTick()", timer.duration);
		var img = $('<img src="http://mathcoachinteractive.com/Interactive3/media/Art/Star.png"/>').css({position:'absolute', top:-450 });
		$('<div id=star'+$('#bottom div').length+' ></div>').appendTo('#bottom').append(img);
		//.animate({top:0}, 300);
		var box = $('#bottom div:last img'),
		     clones = $.map(Array(10), function(item, i){
		        return box.clone().css('opacity', 1 / (i + 1)).hide().insertAfter(box);
		    });
		
		box.animate({
		    top: 0,
		}, {
		    duration: 300,
		    step: function(now, fx) {
		
		        // On each step, set a timeout for each clone,
		        // making it move to the required position.
		
		        var prop = fx.prop;
		
		        $.each(clones, function(i, clone){
		            clone = $(clone).show();
		            setTimeout(function(){
		                clone.css(prop, now);
		            }, 50 * i);
		        });
		
		    }
		});
		timer.answered++;
		setTimeout(setProblem, 500);
		setTimeout(function(){
			$('#bottom div:last img').remove();
			$('<img src="http://mathcoachinteractive.com/Interactive3/media/Art/Star.png"/>').css({position:'absolute', top:0}).appendTo('#bottom div:last');
		},300);
	}
	else
	{
		console.log("timer answered>9: "+ timer.answered);		
		timer.pause = true;
		console.log("paused");
		$("#timerbutton").attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/play.png");
		var img = $('<img src="http://mathcoachinteractive.com/Interactive3/media/Art/Star.png"/>').css({position:'absolute', top:-450 });
		$('<div id=star'+$('#bottom div').length+' ></div>').appendTo('#bottom').append(img);
		//.animate({top:0}, 300);
		var box = $('#bottom div:last img'),
		     clones = $.map(Array(10), function(item, i){
		        return box.clone().css('opacity', 1 / (i + 1)).hide().insertAfter(box);
		    });
		
		box.animate({
		    top: 0,
		}, {
		    duration: 300,
		    step: function(now, fx) {
		
		        // On each step, set a timeout for each clone,
		        // making it move to the required position.
		
		        var prop = fx.prop;
		
		        $.each(clones, function(i, clone){
		            clone = $(clone).show();
		            setTimeout(function(){
		                clone.css(prop, now);
		            }, 50 * i);
		        });
		
		    }
		});
		timer.answered = 0;
		setTimeout(function(){
			$('#bottom div:last img').remove();
			$('<img src="http://mathcoachinteractive.com/Interactive3/media/Art/Star.png"/>').css({position:'absolute', top:0}).appendTo('#bottom div:last');
		},300);
		setTimeout(function(){showMenu("end")},6000);
		
		
	}
	
}
function animateFrog(type, id, color){
	var ribbitIDs = ['ribbit1', 'ribbit2'];
	soundManager.createSound({
		id:'ribbit1',
		url:'http://mathcoachinteractive.com/Interactive3/media/Sounds/Frog.mp3'
	});
	soundManager.createSound({
		id:'ribbit2',
		url:'http://mathcoachinteractive.com/Interactive3/media/Sounds/Frog2.mp3'
	});
	soundManager.createSound({
		id:'splash',
		url:'http://mathcoachinteractive.com/Interactive3/media/Sounds/WaterSplash1.mp3'
	});

	var interval = 50;
	var i;
	var totalimg = 0;
	var combination;
	if(!color){
		if(type=='out' | type =='in'){
			combination = type + 'green';
		}else{
			combination = type;
		}
	} else {
		combination = type + color;
	}
	var ribbitChoice = ~~(Math.random()*ribbitIDs.length);
	switch(combination){
		case "outgreen":
			console.log("frog out");
			soundManager.play(ribbitIDs[ribbitChoice]);
			$("#frogs .frog#"+id+" img").show();
			$("#frogs .frog#"+id).addClass('onlog');
			for( i = 0; i < timer.frogsOutGreen.length; i++ ){
				(function(src) {
					setTimeout( function(){ $("#frogs .frog#"+id+" img").attr('src', src )}, interval*i );
				})(timer.frogsOutGreen[i]);

			}			
			$('#frogs').stop(true, true);
			var log = setTimeout( function(){ $('#frogs').effect("bounce", { direction:'down', distance:15, times:2 }, 600)}, 1200);
			break;
		case "ingreen":
			console.log("frog in");
			$("#frogs .frog#"+id).removeClass('onlog');
			for( i = 0; i < timer.frogsInGreen.length; i++ ){
				(function(src) {
					setTimeout( function(){ $("#frogs .frog#"+id+" img").attr('src', src )}, interval*i );
				})(timer.frogsInGreen[i]);

			}			
			var splash = setTimeout('soundManager.play("splash")', 1300);
			break;	
		case "outorange":
			console.log("frog out");
			soundManager.play(ribbitIDs[ribbitChoice]);
			$("#frogs .frog#"+id+" img").show();
			$("#frogs .frog#"+id).addClass('onlog');
			for( i = 0; i < timer.frogsOutOrange.length; i++ ){
				(function(src) {
					setTimeout( function(){ $("#frogs .frog#"+id+" img").attr('src', src )}, interval*i );
				})(timer.frogsOutOrange[i]);

			}			
			$('#frogs').stop(true, true);
			var log = setTimeout( function(){ $('#frogs').effect("bounce", { direction:'down', distance:20, times:3 }, 600)}, 1200);
			break;
		case "inorange":
			console.log("frog in");
			$("#frogs .frog#"+id).removeClass('onlog');
			for( i = 0; i < timer.frogsInOrange.length; i++ ){
				(function(src) {
					setTimeout( function(){ $("#frogs .frog#"+id+" img").attr('src', src )}, interval*i );
				})(timer.frogsInOrange[i]);

			}			
			var splash = setTimeout('soundManager.play("splash")', 1300);
			break;	
		case "outblue":
			console.log("frog out");
			soundManager.play(ribbitIDs[ribbitChoice]);
			$("#frogs .frog#"+id+" img").show();
			$("#frogs .frog#"+id).addClass('onlog');
			for( i = 0; i < timer.frogsOutBlue.length; i++ ){
				(function(src) {
					setTimeout( function(){ $("#frogs .frog#"+id+" img").attr('src', src )}, interval*i );
				})(timer.frogsOutBlue[i]);

			}			
			$('#frogs').stop(true, true);
			var log = setTimeout( function(){ $('#frogs').effect("bounce", { direction:'down', distance:20, times:3 }, 600)}, 1200);
			break;
		case "inblue":
			console.log("frog in");
			$("#frogs .frog#"+id).removeClass('onlog');
			for( i = 0; i < timer.frogsInBlue.length; i++ ){
				(function(src) {
					setTimeout( function(){ $("#frogs .frog#"+id+" img").attr('src', src )}, interval*i );
				})(timer.frogsInBlue[i]);

			}			
			var splash = setTimeout('soundManager.play("splash")', 1300);
			break;	
		case "stick":
			console.log("frog stick");
			$("#frogs .frog#"+id).removeClass('onlog');
			for( i = 0; i < timer.frogStick.length; i++ ){
				(function(src) {
					setTimeout( function(){ $("#frogs .frog#"+id+" img").attr('src', src ).css({'z-index':450, width:650, bottom:-121, right:-109})}, interval*i );
				})(timer.frogStick[i]);

			}
			break;	
	}
	
}
function clearFrog(frogid){
	console.log("clear frog called");
	//if(!frogid){
	//	$('.frog').removeClass('onlog').css({'z-index':55});
	//	$('.frog img').hide().attr('src', '').css({ width:200, bottom:-160, right:-70 });
	//}
	//else{
		$('#frogs #'+frogid).removeClass('onlog');
		$('#frogs #'+frogid+' img').hide().css({ width:200, bottom:-160, right:-70 });
	//}
}
function showMenu(type){
	if ($("#menu").length == 0 ) {
		$('body').append('<div id=menu></div>');
		switch(activity.getName()){
			case "DFX":
				$("#menu").append('<img id=goagain src="http://mathcoachinteractive.com/Interactive3/media/Art/affirm02_fish_continue.png"/>')
					.append('<img id=continue src="http://mathcoachinteractive.com/Interactive3/media/Art/affirm02_fish_continue.png"/>')
					.append('<img id=nextlevel src="http://mathcoachinteractive.com/Interactive3/media/Art/affirm02_fish_NextLvl.png"/>')
					.append('<img id=stop src="http://mathcoachinteractive.com/Interactive3/media/Art/affirm02_fish_Stop.png"/>')
					.css({backgroundImage:'none'});
				$("#goagain, #continue, #nextlevel" ).css({ width:200, height:72 });
				$("#stop" ).css({ width:160, height:72 });
				break;
			case "MakeAddition":
			case "MakeSubtraction":
			case "MakeMultiplication":
			case "MakeDivision":
				$("#menu").append('<img id=goagain src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_ContinueButton.png"/>')
					.append('<img id=continue src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_ContinueButton.png"/>')
					.append('<img id=nextlevel src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_NextLevelButton.png"/>')
					.append('<img id=stop src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_StopButton.png"/>')
					.append('<p id=endtext>What would you like to do next?</p>');;
				break;
			default:
				$("#menu").append('<img id=goagain src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_ContinueButton.png"/>')
					.append('<img id=continue src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_ContinueButton.png"/>')
					.append('<img id=nextlevel src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_NextLevelButton.png"/>')
					.append('<img id=stop src="http://mathcoachinteractive.com/Interactive3/media/Art/MFX_StopButton.png"/>');
		}
	}
	var windowWidth = getViewport('width');
	var contentHeight = getViewport('height');
	var divWidth = 280;
	var divHeight = 225;
	$("#menu").css({
		position:'absolute',
		width:divWidth,
		height:divHeight,
		left: windowWidth/2 - divWidth/2 + 50,
		top: contentHeight/2 -120,
		'z-index':500
	});
	switch(type){
		case "pause":
			$("#goagain").hide();
			$("#continue").show();
			$("#nextlevel").hide();
			$("#endtext").hide();
			break;
		case "end":
			$("#goagain").show();
			$("#continue").hide();
			if(activity.isMaxlevel())
			{
				$("#nextlevel").hide();
			}
			else
			{
				$("#nextlevel").show();
			}
			break;
		default:
	}
	showMask();
	
	$("#menu").show();
}
function hideMenu(){
	hideMask();
	$("#menu").hide();
}
function showMask(){
	if ($("#mask").length == 0 ) {
		$('body').append('<div id=mask></div>');
	}
	var windowWidth = getViewport('width');
	var windowHeight = getViewport('height');
	$("#mask").css({
		position:'absolute',
		left:0,
		top:0,
		width: windowWidth,
		height: windowHeight,
		backgroundColor: 'black',
		opacity: 0.3,
		'z-index':400
	});
	$("#mask").show();
}
function hideMask() {
	$("#mask").hide();
}
function splat(splatimg)
{	
	if(splatimg){
		console.log("splats");
		clearTimeout(timer.clockTimeout);
		timer.timeCount = 0;
		if($("#splats img").length < 6)
		{
			$("#splats").append('<img alt="oops" src = '+splatimg+' />');
			timer.clockTimeout = setTimeout("clockTick()", timer.duration);
			console.log("splats img length < 6");
			setProblem();
		}
		else
		{
			$("#splats img, #rewards img").remove();
			bigoops = $('<div id="bigstar"></div>');
			bigoops.append('<img alt="big oops" src='+splatimg+' />');
			$("body").append(bigoops);
			$("#bigstar").click( function() {
				timer.clockTimeout = setTimeout("clockTick()", timer.duration);
				$(this).fadeOut(function(){
					$(this).remove();
					setProblem();
				});
			});
		}
	}else{
		setProblem();
	}
}
function addNumber(number)
{
	var activityName = activity.getName();
	switch( activityName ){
		case "AFX":
		case "SFX":
		case "DFX":
		case "MFX":
			var origin = $.trim($("#problem span:last").text());
			var max;
			switch( activityName ){
				case "AFX":
				case "SFX":
					max = 2;
					break;
				case "DFX":
					max = 4;
					break;
				case "MFX":
					max = 3;
					break;
			}
			if(origin.length < max)
			{
				if(origin == 0)
				{
					var value = number;
				}
				else
				{
					var value = origin + "" + number;
				}
			}
			else 
			{
				var value = origin;
			}
			$("#slider").slider( "value" , value );
			$("#problem span:last").html(value);
			break;
		case "MakeAddition":
		case "MakeSubtraction":
		case "MakeMultiplication":
		case "MakeDivision":
			var origin = $('#problem .blank');
			var originText = origin.text();
			var max;
			switch( activityName ){
				case "MakeAddition":
				case "MakeSubtraction":
					max = 2;
					break;
				case "MakeMultiplication":
					max = 2;
					break;
				case "MakeDivision":
					max = 2;
					break;
			}
			if( originText.length < max ){
				if( $('#problem .blank').html() == '&nbsp;' ){
					origin.html(number);
				} else {
					origin.append(number);
				}
			}
			break;
		case "TellTime":
			function isEmpty(){
				$('.oclock_entry').each(function(){
					if( $(this).html() == ''){
						return true;
					}
				});
				return false;
			}
			function findEmpty(){
				var found = false;
				var index = -1;
				$('.oclock_entry').each(function(i){
					if( $(this).html() == '' && !found ){
						index = i;
						found = true;
					}
				});	
				return index;
			}
			$('.selected').html(number);
			var origin = $('.oclock_entry');
			if( findEmpty() >= 0 ){
				$('.selected').css({border:'2px solid #FFE315'}).removeClass('selected');
				$(origin[findEmpty()]).css({border:'2px solid red'}).addClass('selected');
			} 
			
			
			
			
			
			
			break;
	}
}
function check()
{
	timer.skip = 0; //reset skip if they click check
	var correct = activity.getObject().getCorrect();
	
	var answer; 
	var activityName = activity.getName();
	switch( activityName ){
		case "AFX":
		case "SFX":
		case "DFX":
		case "MFX":
			answer = $("#problem span:last").text();
			break;
		case "MakeAddition":
		case "MakeSubtraction":
		case "MakeMultiplication":
		case "MakeDivision":
			answer = $("#problem .blank").text();
			break;
		case "TellTime":
			if( $('#oclock_tenshour').hasClass('oclock_entry') ){
				answer = $('#oclock').text();
			}else{
				answer = "0" + $('#oclock').text();
			}
			break;
	}
	
	if(!String(answer).length)
	{
		return false;
	}
	timerpost(answer);
	if( correct == answer )
	{
		switch( activity.getName() ){
			case "AFX":
				reward("http://mathcoachinteractive.com/Interactive3/media/Art/Apple_yellow.png", "http://mathcoachinteractive.com/Interactive3/media/Art/Affirm_Add_AppleYellow.png");
				break;
			case "SFX":
				reward("http://mathcoachinteractive.com/Interactive3/media/Art/apple_redV3.png", "http://mathcoachinteractive.com/Interactive3/media/Art/Affirm_Sub_AppleRed.png");
				break;
			case "MFX":
				reward("http://mathcoachinteractive.com/Interactive3/media/Art/Star80.png", "http://mathcoachinteractive.com/Interactive3/media/Art/Affirmation_cloud_01.png");
				break;
			case "DFX":
				reward("http://mathcoachinteractive.com/Interactive3/media/Art/Star80.png", "http://mathcoachinteractive.com/Interactive3/media/Art/affirm02_fish_CL.png");
			case "MakeAddition":
			case "MakeSubtraction":
			case "MakeMultiplication":
			case "MakeDivision":
				makeReward();
				break;
			case "TellTime":
				tellTimeReward(answer);
				console.log("check(): correct");
				break;
			
		}
	} 
	else 
	{
		switch( activity.getName() ){
			case "AFX":
				splat("http://mathcoachinteractive.com/Interactive3/media/Art/OOPS_appleCoreYellow.png");
				break;
			case "SFX":
				splat("http://mathcoachinteractive.com/Interactive3/media/Art/OOPS_appleCoreRed.png");
				break;
			case "MFX":
			case "DFX":
				splat("http://mathcoachinteractive.com/Interactive3/media/Art/OOPS_blob.png");
				break;
			case "TellTime":
				soundManager.play('zap', 'http://mathcoachinteractive.com/Interactive3/media/Sounds/Wheel-of-Fortune-Buzzer.mp3');
				soundManager.play('oops', 'http://mathcoachinteractive.com/Interactive3/media/Sounds/TellTime/TellTime_OOPS.mp3');
				resetDigitalClock();
				activity.problemnumberinc();
				break;
			case "MakeAddition":
			case "MakeSubtraction":
			case "MakeMultiplication":
			case "MakeDivision":
				$('.blank').html('&nbsp;');
				soundManager.play('zap', 'http://mathcoachinteractive.com/Interactive3/media/Sounds/Wheel-of-Fortune-Buzzer.mp3');
				activity.problemnumberinc();
				break;
			
			default:
				splat();
				break;
		}
	}
}
function deletenum()
{
	console.log("deletenum called");
	
	var activityName = activity.getName();
	switch( activityName ){
		case "AFX":
		case "SFX":
		case "DFX":
		case "MFX":
			var origin = $.trim($("#problem span:last").text());
			if(isNumber(origin))
			{
				var value = Math.floor(origin / 10);
			}
			if( !value )
			{
				value = '';
			} 
			$("#problem span:last").html(value);
			break;
		case "MakeAddition":
		case "MakeSubtraction":
		case "MakeMultiplication":
		case "MakeDivision":
			var origin = $.trim($("#problem .blank").text());
			if(isNumber(origin))
			{
				var value = Math.floor(origin / 10);
			}
			if( !value )
			{
				value = '&nbsp;';
			} 
			$("#problem .blank").html(value);
	}
}
function skip()
{	
	console.log("skip called");
	//skips problem and resets timer
	timerpost("skip");
	clearTimeout(timer.clockTimeout);
	timer.timeCount = 0;
	timer.clockTimeout = setTimeout("clockTick()", timer.duration);
	setProblem();
	//count number of skips, if 10 consecutive, popup menu
	//skip is reset in check() 
	timer.skip++;
	if( timer.skip % 10 == 0 ){
		timer.pause = true;
		console.log("paused");
		$("#timerbutton").attr("src","http://mathcoachinteractive.com/Interactive3/media/clockimg/play.png");
		$('body').append('<div id=bigstar><p>What would you like to do?</p><img src="http://mathcoachinteractive.com/Interactive3/media/Art/cloudbig.png" /></div>');
		$('#bigstar').css({
			position:'absolute',
			width:300,
			height:250,
			left:100,
			top:0,
			'z-index':400
		});
		$('#bigstar p').css({
			position:'relative',
			fontSize:'1.5em',
			left:60,
			top:170,
			width: 200
		});
		showMenu("pause");
	}
}
function clockTimeOut()
{
	timerpost("timeout");
	setProblem();
}
function getViewport(type){
	var viewportwidth = 0;
	var viewportheight = 0;
 	if (typeof window.innerWidth != 'undefined') {
      		viewportwidth = window.innerWidth,
      		viewportheight = window.innerHeight
 	}
 	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 	else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0){
       		viewportwidth = document.documentElement.clientWidth,
       		viewportheight = document.documentElement.clientHeight
 	}
 	// older versions of IE
 	else {
       		viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
       		viewportheight = document.getElementsByTagName('body')[0].clientHeight
 	}
 	switch(type){
 		case 'width':
 			return viewportwidth;
 			break;
 		case 'height':
 			return viewportheight;
 			break;
 	}
}
/*
function setSlider()
{
	var html = '';
	for(var i = 0; i < 10; i ++)
	{
		html += '<div class="linedivider">'+i+'</div>';
	}
	html += '<div id="slider"></div>';
	$("#bottom").html(html);
}
*/