/**
 * Adobe Helium: symbol definitions
 */
window.symbols = {
"stage": {
   version: "0.1",
   baseState: "Base State",
   initialState: "Base State",
   parameters: {

   },
   content: {
      dom: [
        {
            id:'BigCubeBack',
            type:'image',
            rect:[0,0,800,600],
            fill:['rgba(0,0,0,0)','images/cube.png'],
        },
        {
            id:'Box3',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box2.png'],
        },
        {
            id:'Box2',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box1.png'],
        },
        {
            id:'Box1',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box.png'],
        },
        {
            id:'Box6',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box5.png'],
        },
        {
            id:'Box5',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box4.png'],
        },
        {
            id:'Box4',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box3.png'],
        },
        {
            id:'Box9',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box8.png'],
        },
        {
            id:'Box8',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box7.png'],
        },
        {
            id:'Box7',
            type:'image',
            rect:[0,0,150,150],
            fill:['rgba(0,0,0,0)','images/Box6.png'],
        },
        {
            id:'BigCubeFront',
            type:'image',
            rect:[0,0,800,600],
            fill:['rgba(0,0,0,0)','images/cube1.png'],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#BigCubeFront": [
            ["transform", "translateX", '32px'],
            ["transform", "translateY", '-580px']
         ],
         "#Box9": [
            ["transform", "translateX", '171px'],
            ["transform", "translateY", '-144px']
         ],
         "#Box1": [
            ["transform", "translateX", '440px'],
            ["transform", "translateY", '-141px']
         ],
         "#Box5": [
            ["transform", "translateX", '310px'],
            ["transform", "translateY", '-146px']
         ],
         "#Box6": [
            ["transform", "translateX", '214px'],
            ["transform", "translateY", '-144px']
         ],
         "#Box8": [
            ["transform", "translateX", '259px'],
            ["transform", "translateY", '-143px']
         ],
         "#Box4": [
            ["transform", "translateX", '394px'],
            ["transform", "translateY", '-145px']
         ],
         "#Box2": [
            ["transform", "translateX", '350px'],
            ["transform", "translateY", '-147px']
         ],
         "#Box7": [
            ["transform", "translateX", '350px'],
            ["transform", "translateY", '-150px']
         ],
         "#stage": [
            ["color", "background-color", 'rgba(197,223,255,1)'],
            ["style", "width", '790px'],
            ["style", "height", '550px'],
            ["style", "overflow", 'hidden']
         ],
         "#BigCubeBack": [
            ["transform", "translateY", '-555px'],
            ["transform", "translateX", '-64px'],
            ["transform", "rotateZ", '180deg']
         ],
         "#Box3": [
            ["transform", "translateX", '260px'],
            ["transform", "translateY", '-145px']
         ]
      }
   },
   actions: {

   },
   bindings: [

   ],
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1888,
         timeline: [
            { id: "eid18", tween: [ "transform", "#BigCubeBack", "translateX", '-64px', { valueTemplate: undefined, fromValue: '-64px'}], position: 500, duration: 0, easing: "linear" },
            { id: "eid37", tween: [ "transform", "#Box2", "translateY", '305px', { valueTemplate: undefined, fromValue: '-147px'}], position: 500, duration: 500, easing: "easeOutBounce" },
            { id: "eid63", tween: [ "transform", "#Box5", "translateY", '350px', { valueTemplate: undefined, fromValue: '-146px'}], position: 1143, duration: 500, easing: "easeOutBounce" },
            { id: "eid93", tween: [ "transform", "#Box8", "translateY", '394px', { valueTemplate: undefined, fromValue: '-143px'}], position: 1436, duration: 426, easing: "easeOutBounce" },
            { id: "eid29", tween: [ "transform", "#Box1", "translateX", '440px', { valueTemplate: undefined, fromValue: '440px'}], position: 250, duration: 0, easing: "linear" },
            { id: "eid88", tween: [ "transform", "#Box7", "translateY", '393px', { valueTemplate: undefined, fromValue: '-150px'}], position: 1376, duration: 425, easing: "easeOutBounce" },
            { id: "eid55", tween: [ "transform", "#Box4", "translateY", '350px', { valueTemplate: undefined, fromValue: '-145px'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "transform", "#BigCubeBack", "translateY", '47px', { valueTemplate: undefined, fromValue: '-555px'}], position: 0, duration: 500, easing: "easeOutBounce" },
            { id: "eid78", tween: [ "transform", "#Box5", "translateX", '304px', { valueTemplate: undefined, fromValue: '310px'}], position: 1143, duration: 0, easing: "linear" },
            { id: "eid2", tween: [ "transform", "#BigCubeBack", "rotateZ", '180deg', { valueTemplate: undefined, fromValue: '180deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid89", tween: [ "transform", "#Box7", "translateX", '350px', { valueTemplate: undefined, fromValue: '350px'}], position: 1376, duration: 0, easing: "linear" },
            { id: "eid75", tween: [ "transform", "#Box6", "translateY", '350px', { valueTemplate: undefined, fromValue: '-144px'}], position: 1302, duration: 500, easing: "easeOutBounce" },
            { id: "eid46", tween: [ "transform", "#Box3", "translateY", '305px', { valueTemplate: undefined, fromValue: '-145px'}], position: 750, duration: 500, easing: "easeOutBounce" },
            { id: "eid73", tween: [ "transform", "#Box6", "translateX", '214px', { valueTemplate: undefined, fromValue: '214px'}], position: 1302, duration: 0, easing: "linear" },
            { id: "eid14", tween: [ "transform", "#BigCubeFront", "translateY", '22px', { valueTemplate: undefined, fromValue: '-580px'}], position: 0, duration: 500, easing: "easeOutBounce" },
            { id: "eid38", tween: [ "transform", "#Box2", "translateX", '350px', { valueTemplate: undefined, fromValue: '350px'}], position: 500, duration: 0, easing: "easeOutBounce" },
            { id: "eid56", tween: [ "transform", "#Box4", "translateX", '394px', { valueTemplate: undefined, fromValue: '394px'}], position: 1000, duration: 0, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "transform", "#Box1", "translateY", '305px', { valueTemplate: undefined, fromValue: '-141px'}], position: 250, duration: 500, easing: "easeOutBounce" },
            { id: "eid97", tween: [ "transform", "#Box9", "translateY", '394px', { valueTemplate: undefined, fromValue: '-144px'}], position: 1524, duration: 364, easing: "easeOutBounce" }]
      }
   },
}};

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     $.Edge.initialize(symbols);
});
/**
 * Adobe Edge Timeline Launch
 */
$(window).load(function() {
    $.Edge.play();
});
