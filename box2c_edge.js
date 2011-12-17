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
        {
            id:'Text3',
            type:'text',
            rect:[623,194,0,0],
            text:"0",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text4',
            type:'text',
            rect:[621,192,0,0],
            text:"1",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text5',
            type:'text',
            rect:[620,191,0,0],
            text:"2",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text6',
            type:'text',
            rect:[619,190,0,0],
            text:"3",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text7',
            type:'text',
            rect:[619,189,0,0],
            text:"4",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text8',
            type:'text',
            rect:[618,188,0,0],
            text:"5",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text9',
            type:'text',
            rect:[616,186,0,0],
            text:"6",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text11',
            type:'text',
            rect:[625,213,0,0],
            text:"7",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text12',
            type:'text',
            rect:[624,212,0,0],
            text:"8",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
        },
        {
            id:'Text13',
            type:'text',
            rect:[622,209,0,0],
            text:"9",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",88.5,"rgba(0,0,0,1)","normal","none","normal"],
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
         "#stage": [
            ["color", "background-color", 'rgba(197,223,255,1)'],
            ["style", "width", '790px'],
            ["style", "height", '550px'],
            ["style", "overflow", 'hidden']
         ],
         "#Text8": [
            ["style", "opacity", '0']
         ],
         "#Text9": [
            ["style", "opacity", '0']
         ],
         "#Text5": [
            ["style", "opacity", '0']
         ],
         "#Text13": [
            ["style", "opacity", '0']
         ],
         "#Box7": [
            ["transform", "translateX", '350px'],
            ["transform", "translateY", '-150px']
         ],
         "#Text3": [
            ["style", "opacity", '1']
         ],
         "#Box2": [
            ["transform", "translateX", '350px'],
            ["transform", "translateY", '-147px']
         ],
         "#Box1": [
            ["transform", "translateX", '440px'],
            ["transform", "translateY", '-141px']
         ],
         "#Text4": [
            ["style", "opacity", '0']
         ],
         "#Box8": [
            ["transform", "translateX", '259px'],
            ["transform", "translateY", '-143px']
         ],
         "#Box5": [
            ["transform", "translateX", '310px'],
            ["transform", "translateY", '-146px']
         ],
         "#Text6": [
            ["style", "opacity", '0']
         ],
         "#Box6": [
            ["transform", "translateX", '214px'],
            ["transform", "translateY", '-144px']
         ],
         "#Text12": [
            ["style", "opacity", '0']
         ],
         "#Box4": [
            ["transform", "translateX", '394px'],
            ["transform", "translateY", '-145px']
         ],
         "#Box9": [
            ["transform", "translateX", '171px'],
            ["transform", "translateY", '-144px']
         ],
         "#Text7": [
            ["style", "opacity", '0']
         ],
         "#Box3": [
            ["transform", "translateX", '260px'],
            ["transform", "translateY", '-145px']
         ],
         "#BigCubeBack": [
            ["transform", "translateY", '-555px'],
            ["transform", "translateX", '-64px'],
            ["transform", "rotateZ", '180deg']
         ],
         "#Text11": [
            ["style", "opacity", '0']
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
         duration: 6166.8066609507,
         timeline: [
            { id: "eid18", tween: [ "transform", "#BigCubeBack", "translateX", '-64px', { valueTemplate: undefined, fromValue: '-64px'}], position: 2401, duration: 0, easing: "linear" },
            { id: "eid188", tween: [ "style", "#Text11", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 4940, duration: 238, easing: "linear" },
            { id: "eid162", tween: [ "style", "#Text11", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 5179, duration: 111, easing: "linear" },
            { id: "eid56", tween: [ "transform", "#Box4", "translateX", '394px', { valueTemplate: undefined, fromValue: '394px'}], position: 3757, duration: 0, easing: "easeOutBounce" },
            { id: "eid73", tween: [ "transform", "#Box6", "translateX", '214px', { valueTemplate: undefined, fromValue: '214px'}], position: 4577, duration: 0, easing: "linear" },
            { id: "eid182", tween: [ "style", "#Text7", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 4259, duration: 317, easing: "linear" },
            { id: "eid154", tween: [ "style", "#Text7", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 4577, duration: 103, easing: "linear" },
            { id: "eid193", tween: [ "style", "#Text13", "opacity", '0', { valueTemplate: undefined, fromValue: '0'}], position: 1045, duration: 0, easing: "linear" },
            { id: "eid196", tween: [ "style", "#Text13", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 5290, duration: 211, easing: "linear" },
            { id: "eid97", tween: [ "transform", "#Box9", "translateY", '394px', { valueTemplate: undefined, fromValue: '-144px'}], position: 5179, duration: 987, easing: "easeOutBounce" },
            { id: "eid93", tween: [ "transform", "#Box8", "translateY", '394px', { valueTemplate: undefined, fromValue: '-143px'}], position: 4940, duration: 1155, easing: "easeOutBounce" },
            { id: "eid75", tween: [ "transform", "#Box6", "translateY", '350px', { valueTemplate: undefined, fromValue: '-144px'}], position: 4577, duration: 1356, easing: "easeOutBounce" },
            { id: "eid88", tween: [ "transform", "#Box7", "translateY", '393px', { valueTemplate: undefined, fromValue: '-150px'}], position: 4777, duration: 1152, easing: "easeOutBounce" },
            { id: "eid38", tween: [ "transform", "#Box2", "translateX", '350px', { valueTemplate: undefined, fromValue: '350px'}], position: 2401, duration: 0, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "transform", "#Box1", "translateY", '305px', { valueTemplate: undefined, fromValue: '-141px'}], position: 1723, duration: 1356, easing: "easeOutBounce" },
            { id: "eid14", tween: [ "transform", "#BigCubeFront", "translateY", '22px', { valueTemplate: undefined, fromValue: '-580px'}], position: 1045, duration: 1356, easing: "easeOutBounce" },
            { id: "eid178", tween: [ "style", "#Text5", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 2930, duration: 569, easing: "linear" },
            { id: "eid149", tween: [ "style", "#Text5", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 3500, duration: 122, easing: "linear" },
            { id: "eid29", tween: [ "transform", "#Box1", "translateX", '440px', { valueTemplate: undefined, fromValue: '440px'}], position: 1723, duration: 0, easing: "linear" },
            { id: "eid63", tween: [ "transform", "#Box5", "translateY", '350px', { valueTemplate: undefined, fromValue: '-146px'}], position: 4145, duration: 1356, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "transform", "#BigCubeBack", "translateY", '47px', { valueTemplate: undefined, fromValue: '-555px'}], position: 1045, duration: 1356, easing: "easeOutBounce" },
            { id: "eid89", tween: [ "transform", "#Box7", "translateX", '350px', { valueTemplate: undefined, fromValue: '350px'}], position: 4777, duration: 0, easing: "linear" },
            { id: "eid186", tween: [ "style", "#Text9", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 4777, duration: 290, easing: "linear" },
            { id: "eid159", tween: [ "style", "#Text9", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 5068, duration: 108, easing: "linear" },
            { id: "eid2", tween: [ "transform", "#BigCubeBack", "rotateZ", '180deg', { valueTemplate: undefined, fromValue: '180deg'}], position: 1045, duration: 0, easing: "linear" },
            { id: "eid184", tween: [ "style", "#Text8", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 4680, duration: 260, easing: "linear" },
            { id: "eid157", tween: [ "style", "#Text8", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 4940, duration: 173, easing: "linear" },
            { id: "eid166", tween: [ "style", "#Text3", "opacity", '1', { valueTemplate: undefined, fromValue: '1'}], position: 1045, duration: 0, easing: "linear" },
            { id: "eid143", tween: [ "style", "#Text3", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 2157, duration: 108, easing: "linear" },
            { id: "eid78", tween: [ "transform", "#Box5", "translateX", '304px', { valueTemplate: undefined, fromValue: '310px'}], position: 4145, duration: 0, easing: "linear" },
            { id: "eid176", tween: [ "style", "#Text4", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 2265, duration: 542, easing: "linear" },
            { id: "eid146", tween: [ "style", "#Text4", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 2808, duration: 122, easing: "linear" },
            { id: "eid180", tween: [ "style", "#Text6", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 3622, duration: 523, easing: "linear" },
            { id: "eid151", tween: [ "style", "#Text6", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 4145, duration: 113, easing: "linear" },
            { id: "eid55", tween: [ "transform", "#Box4", "translateY", '350px', { valueTemplate: undefined, fromValue: '-145px'}], position: 3757, duration: 1356, easing: "easeOutBounce" },
            { id: "eid46", tween: [ "transform", "#Box3", "translateY", '305px', { valueTemplate: undefined, fromValue: '-145px'}], position: 3079, duration: 1356, easing: "easeOutBounce" },
            { id: "eid37", tween: [ "transform", "#Box2", "translateY", '305px', { valueTemplate: undefined, fromValue: '-147px'}], position: 2401, duration: 1356, easing: "easeOutBounce" },
            { id: "eid191", tween: [ "style", "#Text12", "opacity", '0', { valueTemplate: undefined, fromValue: '0'}], position: 1045, duration: 0, easing: "linear" },
            { id: "eid190", tween: [ "style", "#Text12", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 5068, duration: 219, easing: "linear" },
            { id: "eid165", tween: [ "style", "#Text12", "opacity", '0', { valueTemplate: undefined, fromValue: '1'}], position: 5290, duration: 108, easing: "linear" }]
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
