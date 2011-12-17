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
            id:'RoundRect1',
            type:'rect',
            rect:[187,149,179,128],
            borderRadius:[10,10,10,10],
            fill:['rgba(192,192,192,1)'],
            stroke:[0,"rgba(0,0,0,1)","solid"],
            transform:[,[-114]],
        },
        {
            id:'RoundRect2',
            type:'rect',
            rect:[165,651,300.9512195122,237.24390243902],
            borderRadius:[31,52,31,31],
            opacity:0.76470588235294,
            fill:['rgba(55,93,48,1.00)'],
            stroke:[22,"rgba(166,25,159,1.00)","solid"],
            transform:[[166,7],[-25],[14,-28],[0.82,0.82]],
        },
        {
            id:'Text1',
            type:'text',
            rect:[326,107,80,101],
            text:"this is all jquery",
            align:"center",
            font:["Georgia, Times New Roman, Times, serif",[24,""],"rgba(0,0,0,1)","normal","none",""],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#Text1": [
            ["transform", "translateX", '-42px'],
            ["transform", "rotateZ", '15deg'],
            ["style", "opacity", '1'],
            ["style", "width", '80px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0'],
            ["style", "height", '101px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["transform", "translateY", '237px'],
            ["transform", "skewY", '0']
         ],
         "#stage": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '610px'],
            ["style", "width", '1035px']
         ],
         "#RoundRect2": [
            ["style", "opacity", '0.76470588235294'],
            ["style", "border-bottom-left-radius", [31,31],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "skewY", '-28deg'],
            ["color", "border-color", 'rgba(166,25,159,1.00)'],
            ["transform", "originY", '50%'],
            ["transform", "originX", '50%'],
            ["style", "border-top-left-radius", [31,31],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '166px'],
            ["transform", "rotateZ", '23deg'],
            ["transform", "scaleX", '0.82'],
            ["style", "border-top-right-radius", [52,124],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "width", '300.9512195122px'],
            ["style", "border-width", '22px'],
            ["color", "background-color", 'rgba(55,93,48,1.00)'],
            ["transform", "skewX", '14deg'],
            ["style", "height", '237.24390243902px'],
            ["style", "border-bottom-right-radius", [31,96],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateY", '7px'],
            ["transform", "scaleY", '0.82']
         ],
         "#RoundRect1": [
            ["style", "opacity", '0.48235294117647'],
            ["style", "border-bottom-left-radius", [31,31],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "skewY", '5deg'],
            ["color", "border-color", 'rgba(105,65,103,1.00)'],
            ["color", "background-color", 'rgba(66,148,52,1.00)'],
            ["style", "border-top-left-radius", [31,31],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-103px'],
            ["transform", "rotateZ", '-114deg'],
            ["transform", "scaleX", '0.64'],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [31,31],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "width", '179px'],
            ["style", "border-bottom-right-radius", [31,31],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "skewX", '-33deg'],
            ["style", "height", '128px'],
            ["style", "border-width", '22px'],
            ["transform", "translateY", '-73px'],
            ["transform", "scaleY", '0.64']
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
         duration: 4830,
         timeline: [
            { id: "eid38", tween: [ "transform", "#RoundRect2", "translateY", '-533px', { valueTemplate: undefined, fromValue: '7px'}], position: 500, duration: 590, easing: "easeOutBounce" },
            { id: "eid66", tween: [ "transform", "#RoundRect2", "translateY", '-608px', { valueTemplate: undefined, fromValue: '-533px'}], position: 1090, duration: 1480, easing: "easeInOutExpo" },
            { id: "eid69", tween: [ "style", "#RoundRect2", "height", '164.0731707317px', { valueTemplate: undefined, fromValue: '237.24390243902px'}], position: 875, duration: 1695, easing: "easeOutQuad" },
            { id: "eid19", tween: [ "transform", "#RoundRect1", "scaleY", '0.64', { valueTemplate: undefined, fromValue: '0.64'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid85", tween: [ "transform", "#RoundRect2", "originX", '50%', { valueTemplate: undefined, fromValue: '50%'}], position: 2700, duration: 0, easing: "linear" },
            { id: "eid106", tween: [ "style", "#Text1", "width", '159px', { valueTemplate: undefined, fromValue: '80px'}], position: 875, duration: 55, easing: "linear" },
            { id: "eid27", tween: [ "transform", "#RoundRect1", "translateX", '-32px', { valueTemplate: undefined, fromValue: '-103px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid57", tween: [ "transform", "#RoundRect1", "translateX", '203px', { valueTemplate: undefined, fromValue: '-32px'}], position: 1000, duration: 1570, easing: "easeOutBounce" },
            { id: "eid81", tween: [ "transform", "#RoundRect1", "translateX", '240px', { valueTemplate: undefined, fromValue: '203px'}], position: 2570, duration: 130, easing: "linear" },
            { id: "eid118", tween: [ "transform", "#RoundRect1", "translateX", '426px', { valueTemplate: undefined, fromValue: '240px'}], position: 2700, duration: 2130, easing: "easeInBounce" },
            { id: "eid48", tween: [ "style", "#RoundRect1", "width", '296.1875px', { valueTemplate: undefined, fromValue: '179px'}], position: 875, duration: 1125, easing: "easeInElastic" },
            { id: "eid93", tween: [ "transform", "#Text1", "translateX", '75.16px', { valueTemplate: undefined, fromValue: '-42px'}], position: 0, duration: 545, easing: "linear" },
            { id: "eid100", tween: [ "transform", "#Text1", "translateX", '0px', { valueTemplate: undefined, fromValue: '75.16px'}], position: 545, duration: 330, easing: "linear" },
            { id: "eid95", tween: [ "transform", "#Text1", "translateY", '169.28571px', { valueTemplate: undefined, fromValue: '237px'}], position: 0, duration: 250, easing: "linear" },
            { id: "eid97", tween: [ "transform", "#Text1", "translateY", '39.38285px', { valueTemplate: undefined, fromValue: '169.28571px'}], position: 250, duration: 295, easing: "linear" },
            { id: "eid101", tween: [ "transform", "#Text1", "translateY", '0px', { valueTemplate: undefined, fromValue: '39.38285px'}], position: 545, duration: 330, easing: "linear" },
            { id: "eid70", tween: [ "style", "#RoundRect2", "width", '92.414634146347px', { valueTemplate: undefined, fromValue: '300.9512195122px'}], position: 875, duration: 1695, easing: "easeInSine" },
            { id: "eid1", tween: [ "color", "#RoundRect1", "background-color", 'rgba(66,148,52,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(66,148,52,1.00)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid74", tween: [ "color", "#RoundRect1", "background-color", 'rgba(21,50,195,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(66,148,52,1)'}], position: 875, duration: 1695, easing: "linear" },
            { id: "eid7", tween: [ "style", "#RoundRect1", "border-top-left-radius", [31,31], { valueTemplate: '@@0@@px @@1@@px', fromValue: [31,31]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid29", tween: [ "transform", "#RoundRect1", "translateY", '93px', { valueTemplate: undefined, fromValue: '-73px'}], position: 0, duration: 1000, easing: "easeInOutBounce" },
            { id: "eid58", tween: [ "transform", "#RoundRect1", "translateY", '144px', { valueTemplate: undefined, fromValue: '93px'}], position: 1000, duration: 1570, easing: "linear" },
            { id: "eid82", tween: [ "transform", "#RoundRect1", "translateY", '80px', { valueTemplate: undefined, fromValue: '144px'}], position: 2570, duration: 130, easing: "linear" },
            { id: "eid119", tween: [ "transform", "#RoundRect1", "translateY", '-136px', { valueTemplate: undefined, fromValue: '80px'}], position: 2700, duration: 2130, easing: "easeInOutSine" },
            { id: "eid15", tween: [ "style", "#RoundRect1", "opacity", '1', { valueTemplate: undefined, fromValue: '0.48235294117647'}], position: 415, duration: 180, easing: "linear" },
            { id: "eid52", tween: [ "style", "#RoundRect1", "opacity", '0.51764705882353', { valueTemplate: undefined, fromValue: '1'}], position: 875, duration: 1695, easing: "linear" },
            { id: "eid76", tween: [ "style", "#RoundRect1", "opacity", '1', { valueTemplate: undefined, fromValue: '0.51764705882353'}], position: 2570, duration: 130, easing: "linear" },
            { id: "eid89", tween: [ "transform", "#RoundRect2", "skewX", '-24deg', { valueTemplate: undefined, fromValue: '14deg'}], position: 875, duration: 1825, easing: "linear" },
            { id: "eid88", tween: [ "transform", "#RoundRect2", "skewY", '-28deg', { valueTemplate: undefined, fromValue: '-28deg'}], position: 2700, duration: 0, easing: "linear" },
            { id: "eid99", tween: [ "transform", "#Text1", "rotateZ", '-45deg', { valueTemplate: undefined, fromValue: '15deg'}], position: 250, duration: 295, easing: "linear" },
            { id: "eid102", tween: [ "transform", "#Text1", "rotateZ", '0deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 545, duration: 330, easing: "linear" },
            { id: "eid110", tween: [ "transform", "#Text1", "rotateZ", '25deg', { valueTemplate: undefined, fromValue: '0deg'}], position: 875, duration: 1125, easing: "linear" },
            { id: "eid42", tween: [ "transform", "#RoundRect2", "rotateZ", '-51deg', { valueTemplate: undefined, fromValue: '23deg'}], position: 500, duration: 590, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "transform", "#RoundRect2", "rotateZ", '-92deg', { valueTemplate: undefined, fromValue: '-51deg'}], position: 1090, duration: 910, easing: "easeOutExpo" },
            { id: "eid72", tween: [ "transform", "#RoundRect2", "rotateZ", '-77deg', { valueTemplate: undefined, fromValue: '-92deg'}], position: 2000, duration: 570, easing: "linear" },
            { id: "eid84", tween: [ "transform", "#RoundRect2", "rotateZ", '-61deg', { valueTemplate: undefined, fromValue: '-77deg'}], position: 2570, duration: 130, easing: "linear" },
            { id: "eid135", tween: [ "transform", "#RoundRect2", "rotateZ", '-87deg', { valueTemplate: undefined, fromValue: '-61deg'}], position: 2700, duration: 855, easing: "linear" },
            { id: "eid136", tween: [ "transform", "#RoundRect2", "rotateZ", '-61deg', { valueTemplate: undefined, fromValue: '-87deg'}], position: 3555, duration: 395, easing: "easeInOutBounce" },
            { id: "eid132", tween: [ "color", "#RoundRect2", "border-color", 'rgba(166,25,159,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(166,25,159,1.00)'}], position: 4830, duration: 0, easing: "linear" },
            { id: "eid133", tween: [ "style", "#RoundRect2", "border-width", '80px', { valueTemplate: undefined, fromValue: '22px'}], position: 875, duration: 3955, easing: "linear" },
            { id: "eid129", tween: [ "style", "#RoundRect2", "border-bottom-left-radius", [89,141], { valueTemplate: '@@0@@px @@1@@px', fromValue: [31,31]}], position: 875, duration: 3955, easing: "linear" },
            { id: "eid34", tween: [ "transform", "#RoundRect1", "rotateZ", '-232deg', { valueTemplate: undefined, fromValue: '-114deg'}], position: 1000, duration: 90, easing: "linear" },
            { id: "eid54", tween: [ "transform", "#RoundRect1", "rotateZ", '-124deg', { valueTemplate: undefined, fromValue: '-232deg'}], position: 1090, duration: 1480, easing: "linear" },
            { id: "eid121", tween: [ "transform", "#RoundRect1", "rotateZ", '-160deg', { valueTemplate: undefined, fromValue: '-124deg'}], position: 2570, duration: 2260, easing: "linear" },
            { id: "eid128", tween: [ "style", "#RoundRect2", "border-bottom-right-radius", [89,96], { valueTemplate: '@@0@@px @@1@@px', fromValue: [31,96]}], position: 875, duration: 3955, easing: "linear" },
            { id: "eid125", tween: [ "style", "#RoundRect2", "border-top-right-radius", [52,124], { valueTemplate: '@@0@@px @@1@@px', fromValue: [52,124]}], position: 4830, duration: 0, easing: "linear" },
            { id: "eid130", tween: [ "style", "#RoundRect2", "border-top-left-radius", [31,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [31,31]}], position: 875, duration: 3955, easing: "linear" },
            { id: "eid6", tween: [ "style", "#RoundRect1", "border-bottom-left-radius", [31,31], { valueTemplate: '@@0@@px @@1@@px', fromValue: [31,31]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid37", tween: [ "transform", "#RoundRect2", "translateX", '392px', { valueTemplate: undefined, fromValue: '166px'}], position: 500, duration: 590, easing: "easeInOutElastic" },
            { id: "eid65", tween: [ "transform", "#RoundRect2", "translateX", '-103px', { valueTemplate: undefined, fromValue: '392px'}], position: 1090, duration: 1480, easing: "easeInElastic" },
            { id: "eid113", tween: [ "transform", "#Text1", "skewX", '-23deg', { valueTemplate: undefined, fromValue: '0deg'}], position: 875, duration: 1470, easing: "linear" },
            { id: "eid112", tween: [ "transform", "#Text1", "skewY", '0', { valueTemplate: undefined, fromValue: '0'}], position: 2345, duration: 0, easing: "linear" },
            { id: "eid86", tween: [ "transform", "#RoundRect2", "originY", '50%', { valueTemplate: undefined, fromValue: '50%'}], position: 2700, duration: 0, easing: "linear" },
            { id: "eid108", tween: [ "style", "#Text1", "opacity", '0.85882352941176', { valueTemplate: undefined, fromValue: '1'}], position: 875, duration: 775, easing: "linear" },
            { id: "eid115", tween: [ "style", "#Text1", "opacity", '0', { valueTemplate: undefined, fromValue: '0.85882352941176'}], position: 1650, duration: 3180, easing: "linear" },
            { id: "eid105", tween: [ "style", "#Text1", "height", '168px', { valueTemplate: undefined, fromValue: '101px'}], position: 875, duration: 55, easing: "linear" },
            { id: "eid4", tween: [ "color", "#RoundRect1", "border-color", 'rgba(132,189,190,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(105,65,103,1.00)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid18", tween: [ "transform", "#RoundRect1", "scaleX", '0.64', { valueTemplate: undefined, fromValue: '0.64'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid32", tween: [ "transform", "#RoundRect1", "skewX", '-18deg', { valueTemplate: undefined, fromValue: '-33deg'}], position: 320, duration: 680, easing: "linear" },
            { id: "eid77", tween: [ "transform", "#RoundRect1", "skewX", '-18deg', { valueTemplate: undefined, fromValue: '-18deg'}], position: 2700, duration: 0, easing: "linear" },
            { id: "eid60", tween: [ "color", "#RoundRect2", "background-color", 'rgba(44,129,28,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55,93,48,1)'}], position: 875, duration: 1695, easing: "linear" },
            { id: "eid123", tween: [ "color", "#RoundRect2", "background-color", 'rgba(63,169,134,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(44,129,28,1)'}], position: 2570, duration: 2260, easing: "linear" },
            { id: "eid9", tween: [ "style", "#RoundRect1", "border-bottom-right-radius", [31,31], { valueTemplate: '@@0@@px @@1@@px', fromValue: [31,31]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid11", tween: [ "transform", "#RoundRect1", "skewY", '5deg', { valueTemplate: undefined, fromValue: '5deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid78", tween: [ "transform", "#RoundRect1", "skewY", '5deg', { valueTemplate: undefined, fromValue: '5deg'}], position: 2700, duration: 0, easing: "linear" },
            { id: "eid44", tween: [ "style", "#RoundRect2", "opacity", '0.45882352941176', { valueTemplate: undefined, fromValue: '0.76470588235294'}], position: 875, duration: 215, easing: "linear" },
            { id: "eid62", tween: [ "style", "#RoundRect2", "opacity", '0.82941176470588', { valueTemplate: undefined, fromValue: '0.45882352941176'}], position: 1090, duration: 1480, easing: "linear" },
            { id: "eid8", tween: [ "style", "#RoundRect1", "border-top-right-radius", [31,31], { valueTemplate: '@@0@@px @@1@@px', fromValue: [31,31]}], position: 0, duration: 0, easing: "linear" },
            { id: "eid5", tween: [ "style", "#RoundRect1", "border-width", '22px', { valueTemplate: undefined, fromValue: '22px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid47", tween: [ "style", "#RoundRect1", "height", '196.75px', { valueTemplate: undefined, fromValue: '128px'}], position: 875, duration: 1125, easing: "easeOutCubic" }]
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


