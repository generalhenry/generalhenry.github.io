/*global activity, soundManager, classes, setClock, setSettings, bindClicks, QueryLoader, timer, clockTick, Crab, timerpost, createFirework, showMenu */
/*
  account for failed audio
    no exceptions or failure to progress (YAY!)
    no alternate explaination (BOOO!)
  account for impatience
    lockout
*/
var count = (function() {
  var exports = {};
  var levels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  activity.setLevels(levels);
  activity.setObject(exports);
  //more privates, fewer publics
  //most the functions should be moved inside
  exports.crabs = [];
  exports.min = 0;
  exports.max = 5;
  exports.right = 0;
  exports.wrong = 0;
  exports.problemNumber = 0;
  exports.currIndex = 0;
  exports.answers = [];
  exports.answersTiles = [];
  exports.levelup = activity.incLevel;
  exports.audio = false;
  exports.levelTypes = {
    A: 'count', D: 'count', G: 'count',
    B: 'flip', E: 'flip', H: 'flip',
    C: 'match', F: 'match', I: 'match', J: 'match'
  };
  // this whole section should be turned into functions
  var urlhead = "http://mathcoachinteractive.com/Interactive3/media/Art/Count/";
  var urltail = ".png";
  var audioPath = 'http://mathcoachinteractive.com/Interactive3/media/Sounds/Count/Count_';
  exports.dominos = [
    [urlhead + "00_dom_v01" + urltail],
    [urlhead + "01_dom" + urltail],
    [urlhead + "02_dom_V1.1" + urltail, urlhead + "02_dom_V2" + urltail],
    [urlhead + "03_dom_V1" + urltail, urlhead + "03_dom_V2" + urltail],
    [urlhead + "04_dom_V1.1" + urltail, urlhead + "04_dom_V2" + urltail, urlhead + "04_dom_V3" + urltail],
    [urlhead + "05_dom_V1" + urltail, urlhead + "05_dom_V2" + urltail, urlhead + "05_dom_V3" + urltail],
    [urlhead + "06_Dom_V5_1" + urltail, urlhead + "06_dom_V1.1" + urltail, urlhead + "06_dom_V2" + urltail, urlhead + "06_dom_V3" + urltail],
    [urlhead + "07_Dom_V5_1" + urltail, urlhead + "07_dom_V1" + urltail, urlhead + "07_dom_V2" + urltail, urlhead + "07_dom_V3" + urltail],
    [urlhead + "08_Dom_V5_1" + urltail, urlhead + "08_dom_V1.1" + urltail, urlhead + "08_dom_V2" + urltail, urlhead + "08_dom_V3" + urltail],
    [urlhead + "09_Dom_V5_1" + urltail, urlhead + "09_dom_V1" + urltail, urlhead + "09_dom_V2" + urltail],
    [urlhead + "10_Dom_V5" + urltail, urlhead + "10_dom_V1.1" + urltail, urlhead + "10_Dom_V2" + urltail, urlhead + "10_Dom_V5_1" + urltail],
    [urlhead + "11_Dom_V5" + urltail, urlhead + "11_dom_V1" + urltail, urlhead + "11_Dom_V2" + urltail],
    [urlhead + "12_Dom_V5" + urltail, urlhead + "12_dom_V1" + urltail, urlhead + "12_Dom_V2" + urltail],
    [urlhead + "13_Dom_V5" + urltail, urlhead + "13_Dom_V1" + urltail],
    [urlhead + "14_Dom_V5" + urltail, urlhead + "14_Dom_V1" + urltail],
    [urlhead + "15_Dom_V5" + urltail, urlhead + "15_Dom_V1" + urltail],
    [urlhead + "16_Dom_V5" + urltail, urlhead + "16_Dom_V1" + urltail],
    [urlhead + "17_Dom_V5" + urltail, urlhead + "17_Dom_V1" + urltail],
    [urlhead + "18_Dom_V5" + urltail, urlhead + "18_Dom_V1" + urltail],
    [urlhead + "19_Dom_V5" + urltail, urlhead + "19_Dom_V1" + urltail],
    [urlhead + "20_Dom_V5" + urltail, urlhead + "20_Dom_V1" + urltail]
  ];
  var tileColors = ['zero_red', 'one', 'two', 'three', 'four_aqua', 'five', 'six_vio', 'seven_blue', 'eight_teal', 'nine_pink', 'ten_red', 'eleven', 'twelve', 'three', 'fourteen_aqua', 'fifteen', 'sixteen', 'seventeen_blue', 'eighteen_teal', 'nineteen_pink', 'twenty_red'];
  var filpColors = ['red', 'purple', 'orange', 'brown', 'aqua', 'green', 'vio', 'blue', 'teal', 'pink'];
  var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five_V2', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  exports.tiles = [];
  exports.tilesFlip = [];
  exports.numberWords = [];
  exports.countAudio = [];
  for (var i = 0; i <= 20; i++) {
    exports.tiles[i] = urlhead + pad(i, 2) + '_tile_' + tileColors[i] + urltail;
    exports.tilesFlip[i] = urlhead + pad(i < 11 ? i : i - 10, 2) + '_tile_blank_' + filpColors[i % 10] + urltail;
    exports.numberWords[i] = urlhead + pad(i, 2) + '_word' + urltail;
    exports.countAudio[i] = [numberWords[i], audioPath + numberWords[i] + '.mp3'];
  }
  exports.correctSounds = ['cSound1', 'cSound2', 'cSound3'];
  exports.incorrectSounds = ['iSound1'];
  exports.getLevelType = function() {
    return exports.levelTypes[activity.getLevel()];
  };
  exports.setNumbers = function() {
    activity.problemnumberinc();
    var minMax = {
      A: { min: 0, max: 5 },
      B: { min: 1, max: 5 },
      C: { min: 0, max: 5 },
      D: { min: 0, max: 10 },
      E: { min: 1, max: 10 },
      F: { min: 0, max: 10 },
      G: { min: 0, max: 20 },
      H: { min: 1, max: 20 },
      I: { min: 0, max: 20 },
      J: { min: 0, max: 20 }
    }[activity.getLevel()];
    exports.min = minMax.min;
    exports.max = minMax.max;
  };
  exports.setNumbers(); //awkward
  exports.getCorrect = function() {
    return exports.answers[exports.currIndex];
  };
  exports.setCorrect = function(correct) {
    exports.correct = correct;
  };
  exports.getCountNum = function() {
    return exports.answers[exports.currIndex];
  };
  exports.incCountNumIndex = function() {
    if (exports.currIndex < (exports.answers.length)) {
      exports.currIndex++;
    }
  };
  exports.getCountNumIndex = function() {
    return exports.currIndex;
  };
  exports.bugreport = function() {
    return [["level", activity.getLevel()], ["min", exports.min], ["max", exports.max]];
  };
  return exports;
})();
classes[classes.length] = count;
(function preLoadImages () { //oddly placed
  $.preLoadImagesArray(count.tiles);
  $.preLoadImagesArray(count.tilesFlip);
  $.preLoadImages2DArray(count.dominos);
 })();
function initSetup() {
  $('#right').remove();
  var timer = $('#timer');
  $('#left').html(timer);
  setInitAnimation();
  setProblemInit();
  setClock();
  setSettings();
  bindClicks();
  $("#rewards").html("");
  $("#splats").html("");
  QueryLoader.complete = function() {
    autoPlay();
  };
}
function autoPlay() {
  var deferred = $.Deferred();
  clearTimeout(timer.clockTimeout);
  timer.pause = false;
  $("#timerbutton").attr("src", "http://mathcoachinteractive.com/Interactive3/media/clockimg/pause.png");
  timer.clockTimeout = setTimeout(clockTick, timer.duration);
  function OnSoundReady(params) {
    return function() {
      count.audio = true;
      QueryLoader.overlay.fadeOut(800);
      var introSound = soundManager.createSound({
        id: 'level' + params.level,
        url: 'http://mathcoachinteractive.com/Interactive3/media/Sounds/Count/' + params.mp3 + '.mp3'
      });
      soundManager.play('level' + params.level, {onfinish:deferred.resolve});
      $('#helpcloud').attr('src', 'http://mathcoachinteractive.com/Interactive3/media/Art/Count/' + params.png + '.png').show();
      var soundURLhead = "http://mathcoachinteractive.com/Interactive3/media/Sounds/";
      var soundURLtail = ".mp3";
      var correctSound1 = soundManager.createSound({
        id: 'cSound1',
        url: soundURLhead + "GameshowBellDing3" + soundURLtail
      });
      var correctSound2 = soundManager.createSound({
        id: 'cSound2',
        url: soundURLhead + "Chimes" + soundURLtail
      });
      var correctSound3 = soundManager.createSound({
        id: 'cSound3',
        url: soundURLhead + "CashRegister" + soundURLtail
      });
      var incorrectSound1 = soundManager.createSound({
        id: 'iSound1',
        url: soundURLhead + "Wheel-of-Fortune-Buzzer" + soundURLtail
      });
    };
  }
  var params = {
    count: {
      level: 'A',
      mp3: 'Count_HiThere',
      png: 'CountSignBoardCountUpBack'
    },
    flip: {
      level: 'B',
      mp3: 'Flip_HiThere',
      png: 'CountSignBoardNumberFlip'
    },
    match: {
      level: 'C',
      mp3: 'Match_HiThere',
      png: 'CountSignBoardMatchModel'
    }
  }[count.getLevelType()];
  var onSoundReady = OnSoundReady(params);
  soundManager.onready(onSoundReady);
  soundManager.onerror = function() { count.audio = false; deferred.reject(); }
  deferred.always( setProblem );
}
function setInitAnimation() {
  var sky = $('<div id=sky></div>');
  var cloud1 = $('<div id=cloud1 class=clouds><img src="http://mathcoachinteractive.com/Interactive3/media/Art/Cloud_Medium.png"/></div>');
  var cloud2 = $('<div id=cloud2 class=clouds><img src="http://mathcoachinteractive.com/Interactive3/media/Art/cloudSM.png"/></div>');
  sky.append(cloud1).append(cloud2);
  $('#activityContents').append(sky);
  cloudMove();
  $('<img id=helpcloud src=""/>').appendTo('#main');
}
function cloudMove(cloudMoved) {
  if (!cloudMoved) {
    $("#cloud1").css({
      left: $("#cloud1").offset().left
    });
  }
  function cloudAnimateDone() {
    $(this).css({
      left: -$(this).width()
    });
    cloudMove(true);
  }
  $("#cloud1").animate({
    left: $("#sky").width()
  }, cloudMoved ? 180000 : 150000, "linear", cloudAnimateDone);
  $("#cloud2").animate({
    left: $("#sky").width()
  }, cloudMoved ? 120000 : 60000, "linear", cloudAnimateDone);
}
function setCrabs() {
  var crab;
  var colors = ['red', 'purple', 'orange', 'blue'];
  var colorsLength = colors.length;
  for (var i = 0; i <= count.max; i++) {
    var color = colors[i % colorsLength];
    count.crabs[i] = (new Crab('#crab' + i, color));
  }
}
function setProblemline() {
  var currProblem = $('<div id=currProblem></div>');
  var levelTitle = $('<span id=levelTitle></span>');
  currProblem.append('<img src="http://mathcoachinteractive.com/Interactive3/media/Art/cloudbig.png"/>');
  currProblem.append('<p id=problemText></p>');
  currProblem.append('<p id=countanswer><img style="display:none;" src=""/></p>');
  $('#d-line').append(levelTitle).append(currProblem);
  addedDivs.push(currProblem);
}
var addedDivs = []; //GLOBAL
function removeAddedDivs() { //need to review, not all the divs need to be reset
  for (var i = 0, len = addedDivs.length; i < len; i++) {
    addedDivs.pop().remove();
  }
}
function addNumbers(level) {
  var box, linenumber;
  for (var i = 0; i <= count.max; i++) {
    box = $('<div class="box notflipped"><img src="' + count.tiles[i] + '"/></div>');
    switch (count.getLevelType()) {
    case "count":
      $('#d-line').css({ height: 200 });
      linenumber = ~~ (i / 11) + 1;
      break;
    case "flip":
      $('#d-line').css({ height: 250 });
      linenumber = ~~ (i / 11) + 1;
      $('#currProblem, #currProblem p, #currProblem img').css({ width: 350 });
      $('#countanswer img').css({width: 150});
      break;
    case "match":
      $('#currProblem, #currProblem p, #currProblem img').css({width: 350});
      $('#countanswer img').css({width: 150});
      $('#d-line').css({height: 250});
      linenumber = i < 21 ? ~~ (i / 11) + 1 : ~~ (i / 10) + 1;
      break;
    }
    box.addClass('line' + linenumber).attr('id', i).addClass(level);
    $('#numberline').append(box);
    addedDivs.push(box);
  }
}
function addCrabs( level ) {
  var crabstop = $('<div class=crabstop id=crabstop-' + level + '></div>');
  var crabsbottom = $('<div class=crabsbottom id=crabsbottom-' + level + '></div>');
  $('#bottom').append(crabstop).append(crabsbottom);
  addedDivs.push(crabstop);
  addedDivs.push(crabsbottom);
  var size, crab, type;
  for (var i = 0; i <= count.max; i++) {
    crab = $('<div class=crabs></div>');
    type = {
      A: {
        size: 'big',
        linenumber: ~~ (i / 6) + 1
      },
      D: {
        size: 'small',
        linenumber: ~~ (i / 11) + 1
      },
      G: {
        size: 'small',
        linenumber: i < 21 ? ~~ (i / 11) + 1 : ~~ (i / 10) + 1
      }
    }[activity.getLevel()];
    crab.addClass(type.size).attr('id', 'crab' + i);
    if (type.linenumber === 1) {
      crabsbottom.append(crab);
    } else {
      crabstop.append(crab);
    }
  }
  setCrabs();
}
function setNumberline() {
  count.setNumbers();
  if ($('#numberline').length > 0) {
    removeAddedDivs();
  }
  var numberline = $('<div id=numberline></div>');
  $('#bottom').append(numberline);
  addedDivs.push(numberline);
  var level = 'level' + activity.getLevel();
  addNumbers(level);
  $('#countanswer').attr('src', count.answersTiles[count.getCountNumIndex()]);
  if( count.getLevelType() === 'count' ) {
    addCrabs( level );
  } else {
    addTally();    
  }
  addFireworks();
}
function addTally () {
  var tally = $('<div id=tally></div>');
  var tallyContent = $('<p id=stats></p>');
  var tallyText = '<p id=statstitle>Stats</p><p class=statstext>Level: <span id=statslevel></span></p><p class=statstext>Right: <span id=statsright></span></p><p class=statstext>Oops: <span id=statsoops></span></p></p>  ';
  tallyContent.append(tallyText);
  tally.append('<img src="http://mathcoachinteractive.com/Interactive3/media/Art/Cloud_Medium.png"/>').append(tallyContent).appendTo('#d-line');
  addedDivs.push(tally);
  $('#statsright').html(count.right);
  $('#statsoops').html(count.wrong);
}
function addFireworks () {
  var firework = $('<div id=fireworks-template></div>');
  firework.append('<div id="fw" class="firework"></div>');
  firework.append('<div id="fp" class="fireworkParticle"><img src="http://mathcoachinteractive.com/Interactive3/media/Art/particles.gif" alt="" /></div>');
  var fireworkContainer = $('<div id=fireContainer></div>');
  $('#activityContents').append(firework);
  $('#activityContents').append(fireworkContainer);
  addedDivs.push(firework);
  addedDivs.push(fireworkContainer);
}
function initCount () {
  for (var i = 0; i <= count.max; i++) {
    count.answers.push(i);
    count.answersTiles.push(count.numberWords[i]);
  }
  for (i = count.max - 1; 0 <= i; i--) {
    count.answers.push(i);
    count.answersTiles.push(count.numberWords[i]);
  }
}
function initMatch () {
  for (var total = 20, i = total, num, index; i > 0; i--) {
    num = ~~ (Math.random() * (count.max - count.min + 1)) + count.min;
    count.answers.push(num);
    if (i > 10) {
      count.answersTiles.push(count.dominos[num][0]);
    } else {
      index = ~~ (Math.random() * count.dominos[num].length);
      count.answersTiles.push(count.dominos[num][index]);
    }
  }
}
function initFind ( notFound ) {
  var found, num, i;
  while (count.answers.length < 20) {
    num = ~~ (Math.random() * (count.max - count.min + 1)) + count.min;
    found = false;
    for (i in count.answers) {
      if (count.answers[i] === num) {
        found = true;
        break;
      }
    }
    if (!found) {
      notFound( num );
    }
  }
}
function initNogo () {
  var numberscount = [];
  for (var x = 0; x <= count.max; x++) {
    numberscount[x] = 0;
  }
  for (var total = 20, i = 0, num, nogo, minusOne, plusOne; i < total; i++) {
    num = ~~ (Math.random() * (count.max - count.min + 1)) + count.min;
    if (i === 0) {
      count.answers.push(num);
      count.answersTiles.push(count.dominos[num][0]);
      numberscount[num]++;
    } else {
      nogo = [];
      for (x = 0; x < numberscount.length; x++) {
        if (numberscount[x] % 2 === 1) {
          minusOne = x - 1;
          plusOne = x + 1;
          nogo.push(minusOne);
          nogo.push(plusOne);
        }
      }
      num = getNumber(nogo);
      count.answers.push(num);
      count.answersTiles.push(count.dominos[num][0]);
      numberscount[num]++;
    }
  }
}
var problemInit = {
  A: function () {
    initCount();
    return {
      html: 'Count to 5. Relate number to quantity.',
      title: 'Count Up and Back',
      problemText: ''
    };
  },
  B: function () {
    var numberSequence = [
      [2, 4, 2, 1, 1, 4, 3, 1, 3, 5, 3, 5, 3, 4, 1, 2, 2, 1, 4, 3],
      [1, 3, 1, 5, 3, 2, 5, 4, 2, 4, 3, 1, 3, 1, 5, 3, 1, 3, 5, 4],
      [2, 5, 2, 3, 1, 3, 5, 4, 1, 2, 4, 5, 2, 1, 5, 3, 1, 3, 2, 5],
      [4, 1, 4, 3, 1, 5, 3, 2, 5, 4, 2, 3, 5, 3, 1, 5, 3, 4, 2, 4],
      [5, 1, 5, 1, 2, 4, 2, 1, 4, 5, 3, 3, 5, 1, 2, 5, 2, 1, 3, 5]
    ];
    var sequence = ~~ (Math.random() * numberSequence.length);
    count.answers = numberSequence[sequence];
    for (var i in count.answers) {
      count.answersTiles.push(count.dominos[count.answers[i]][0]);
    }
    return {
      html: 'Practice number order to 5',
      title: 'Number Flip',
      problemText: 'Flip'
    };
  },
  C: function () {
    initMatch();
    return {
      html: 'Match models to numerals',
      title: 'Match the Model',
      problemText: 'How many dots?'
    };
  },
  D: function () {
    initCount();
    return {
      html: 'Count to 10. Relate number to quantity.',
      title: 'Count Up and Back',
      problemText: ''
    };
  },
  E: function () {
    initNogo();
    return {
      html: 'Practice number order to 10',
      title: 'Number Flip',
      problemText: 'Find <img src="" style="display:none"/>'
    };
  },
  F: function () {
    initMatch();
    return {
      html: 'Match models to numerals',
      title: 'Match the Model',
      problemText: 'How many dots?'
    };
  },
  G: function () {
    initCount();
    return {
      html: 'Count to 20. Relate number to quantity.',
      title: 'Count Up and Back',
      problemText: ''
    };
  },
  H: function () {
    initNogo();
    return {
      html: 'Practice number order to 20',
      title: 'Number Flip',
      problemText: 'Find <img src="" style="display:none"/>'
    };
  },
  I: function () {
    initFind( function ( num ) {
      count.answers.push(num);
      count.answersTiles.push(count.dominos[num][0]);
    });
    return {
      html: 'Match models to numerals',
      title: 'Match the Model',
      problemText: 'How many dots?'
    };
  },
  J: function () {
    initFind( function ( num ) {
      var index;
      count.answers.push(num);
      if (count.dominos[num].length === 1) {
        index = ~~ (Math.random() * count.dominos[num].length);
      } else {
        index = ~~ (Math.random() * (count.dominos[num].length - 1)) + 1;
      }
      count.answersTiles.push(count.dominos[num][index]);
    });
    return {
      html: 'Match models to numerals',
      title: 'More Match Up!',
      problemText: 'How many dots?'
    };
  }
};
function setProblemInit() {
  setNumberline();
  setProblemline();
  count.answers = [];
  count.answersTiles = [];
  var params = problemInit[ activity.getLevel() ]();
  $('#objective').html("Objective: " + params.html + " (Level " + activity.getLevel() + ")");
  $('#levelTitle').html(params.title);
  $('#problemText').html(params.problemText);
  $('#statslevel').html(activity.getLevel());
}
function initBind() {
  $('.box').click(boxClick);
}
function boxClick () {
  var cSound = ~~ (Math.random() * count.correctSounds.length);
  var iSound = ~~ (Math.random() * count.incorrectSounds.length);
  if (!timer.pause) {
    if( activity.isLocked() ) {
      return false;
    } else {
      activity.lock();
    }
    var answer = ~~$(this).attr('id');
    timerpost(answer);
    click[count.getLevelType()]( answer, cSound, iSound, $(this) ); 
  }
}
var click = {
  count: function ( answer, cSound, iSound, element ) {
    if (isCorrect(answer)) {
      if (count.crabs[answer].getTimes() < 1) {
        if (answer !== 0) {
          count.crabs[answer].reveal();
        }
        count.crabs[answer].run();
      } else {
        if (answer !== count.max) {
          count.crabs[answer + 1].runReverse();
        }
      }
    }
    this.match( answer, cSound, iSound, element );
  },
  match: function ( answer, cSound, iSound, element ) {
    if (isCorrect(answer)) {
      var boxAnimated = animateBox('hop', element.attr('id'));
      var soundPlayed = playSound('correct', cSound);
      activity.problemnumberinc();
      count.incCountNumIndex();
     if( count.getLevelType() === 'match' ) {
        count.right++;
        $('#statsright').html(count.right);
      }
      $.when( boxAnimated, soundPlayed ).always( setProblem );
    } else {
      playSound('incorrect', iSound).always(activity.unlock);
      if( count.getLevelType() === 'match' ) {
          count.wrong++;
          $('#statsoops').html(count.wrong);
      }
    }
  },
  flip: function ( answer, cSound, iSound, element ) {
      if (isCorrect(answer)) {
        var boxAnimated = animateBox('flip', element.attr('id'));
        var soundPlayed = playSound('correct', cSound);
        count.incCountNumIndex();
        count.right++;
        $('#statsright').html(count.right);
        $.when( boxAnimated, soundPlayed ).always( setProblem );
      } else {
        playSound('incorrect', iSound).always(activity.unlock);
        count.wrong++;
        $('#statsoops').html(count.wrong);
      }
  }
};
function animateBox(type, id) {
  console.log( type, id );
  var deferred = $.Deferred();
  var interval;
  switch (type) {// should be turned into an object of functions
  case "flip":
    var time = 200;
    if ($(".box#" + id).hasClass('notflipped')) {
      $(".box#" + id).flip({
        direction: 'lr',
        content: '<img src="' + count.tilesFlip[id] + '"/>',
        speed: time,
        onEnd: deferred.resolve
      }).removeClass('notflipped').addClass('flipped');
    } else {
      $(".box#" + id).revertFlip().removeClass('flipped').addClass('notflipped');
      setTimeout(deferred.resolve, time);
    }
    deferred.done( function() { console.log('resolved flip'); });
    break;
  case "hop":
    interval = 500;
    $(".box#" + id).effect("bounce", {
      times: 3,
      distance: 100
    }, interval, deferred.resolve);
    break;
  case "hop2":
    interval = 800;
    $(".box#" + id).effect("bounce", {
      times: 1,
      distance: 100
    }, interval, deferred.resolve);
    break;
  }
  return deferred.promise();
}
function isCorrect(num) {
  return num === count.getCountNum() ? true : false;
}
function playSound(type, sound) {
  var deferred = $.Deferred();
  if ( !count.audio ) {
    deferred.resolve();
  } else {
    switch (type) {
      case "correct":
        soundManager.play(count.correctSounds[sound],{onfinish:deferred.resolve});
        break;
      case "incorrect":
        soundManager.play(count.incorrectSounds[sound],{onfinish:deferred.resolve});
        break;
    }
  }
  return deferred.promise();
}
function setProblem() {
  QueryLoader.overlay.fadeOut(800);
  count.problemNumber++; //API
  clearTimeout(timer.clockTimeout);
  timer.timecount = 0;
  $('#countanswer').attr('class', count.getCountNum());
  if (count.getCountNumIndex() === count.answers.length) {
    finishAffirmation();
  } else { //should be turned into a function
    timer.clockTimeout = setTimeout(clockTick, timer.duration);
    if( $('#countanswer img').length === 0){
			$('#countanswer').append('<img src="'+count.answersTiles[count.getCountNumIndex()]+'"/>').hide().fadeIn(100);
		} else {
      $('#countanswer img').fadeOut(50, function(){
        $(this).attr('src', count.answersTiles[count.getCountNumIndex()]).fadeIn(100);
      });
    }
    if (count.getLevelType() === 'count' && count.audio ) {
      soundManager.play(count.countAudio[count.getCountNum()][0], count.countAudio[count.getCountNum()][1]);
    }
  }
  //should be turned into a function
  var tileNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  if (count.getCountNumIndex() < count.answers.length) {
    switch (count.getLevelType()) {
    case "count":
      $('#countanswer').html(tileNumber[count.getCountNum()]);
      break;
    case "flip":
      $('#problemText').html('Find ' + tileNumber[count.getCountNum()]);
      break;
    }
  }
  activity.unlock();
}
function finishAffirmation () { //needs to be broken down into smaller functions
  var intervalHop, interval, i;
  function delayAnimateBox(i) {
    setTimeout(function() {
      animateBox("hop2", i);
    }, 4500 + i * intervalHop);
  }
  function delayCreateFirework(x, y, i) {
    setTimeout(function() {
      createFirework(15, 100, 4, 1, x, y, x, y, false, true);
    }, 4000 + i * interval);
  }
  timer.pause = true;
  $("#timerbutton").attr("src", "http://mathcoachinteractive.com/Interactive3/media/clockimg/play.png");
  //CRABS
  for (i in count.crabs) {
    setTimeout(count.crabs[i].run, 3000);
    setTimeout(count.crabs[i].hop, 7000);
    setTimeout(count.crabs[i].run, 8000);
    setTimeout(count.crabs[i].conceal, 11000);
  }
  //APPLAUSE AND FLIP BOXES OVER
  var wait = setTimeout(
  function() {
    for (var i = 0; i < count.tiles.length; i++) {
      if ($(".box#" + i).hasClass('flipped')) {
        animateBox('flip', i);
      }
    }
    if( count.audio ) {
      soundManager.play('applause', 'http://mathcoachinteractive.com/Interactive3/media/Sounds/Applause.mp3');
    }
  }, 3500);
  //FIREWORKS
  var fireworkNum = 20,
    x, y;
  interval = 200;
  for (i = 0; i < fireworkNum; i++) {
    x = ~~ (Math.random() * 50) + 15;
    y = ~~ (Math.random() * 30) + 20;
    delayCreateFirework(x, y, i);
  }
  //CHIME AND STAGGER WAVE EFFECT
  var chimeSoundForHopSequence = setTimeout(function() {
    playSound("correct", 1);
  }, 4500);
  intervalHop = 70;
  for (i = 0; i <= count.max; i++) {
    delayAnimateBox(i);
  }
  //SHOW MENU
  setTimeout(function() {
    showMenu('end');
  }, 3500 + fireworkNum * interval);
}
function resetCount() {
  for (var i = 0; i < count.tiles.length; i++) {
    if ($(".box#" + i).hasClass('flipped')) {
      animateBox('flip', i);
    }
  }
  count.currIndex = 0;
  for (i in count.crabs) {
    count.crabs[i].reset();
  }
  setProblemInit();
  initBind();
  autoPlay();
}
function problem() { //is this used?
  return 'Find: <img src="' + count.answersTiles[count.getCountNumIndex()] + '"/>';
}
function correct() { //is this used?
  return count.getCorrect();
}
function pad(number, length) {
  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}
function getNumber(nogo) {
  var number = ~~ (Math.random() * (count.max - count.min + 1)) + count.min;
  for (var i = 0; i < nogo.length; i++) {
    if (number === nogo[i]) {
      return getNumber(nogo);
    }
  }
  return number;
}
function initStart() {}