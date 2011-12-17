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
            id:'SmallBox2Shadow',
            type:'rect',
            rect:[649,199,75,78],
            fill:['rgba(65,57,121,1)'],
            stroke:[1,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'BigBoxBack',
            type:'rect',
            rect:[505,146,240,254],
            fill:['rgba(0,0,0,0)'],
            stroke:[3,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'BigBoxBottom',
            type:'rect',
            rect:[533,232,198,206],
            fill:['rgba(0,0,0,0)'],
            stroke:[3,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'SmallBox1Shadow',
            type:'rect',
            rect:[518,384,35,28],
            borderRadius:[10,10,10,10],
            fill:['rgba(29,19,95,1)'],
            stroke:[1,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'SmallBox2Side',
            type:'rect',
            rect:[634,197,92,93],
            fill:['rgba(29,19,95,1)'],
            stroke:[1,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'SmallBox1Top',
            type:'rect',
            rect:[627,277,104,95],
            fill:['rgba(29,19,95,1)'],
            stroke:[1,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'SmallBox1Side',
            type:'rect',
            rect:[649,221,97,91],
            fill:['rgba(59,47,139,1)'],
            stroke:[1,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'SmallBox1Front',
            type:'rect',
            rect:[641,211,39,39],
            fill:['rgba(0,0,0,0)'],
            stroke:[3,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'BigBoxTop',
            type:'rect',
            rect:[510,152,245,253],
            fill:['rgba(0,0,0,0)'],
            stroke:[3,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'BigBoxFront',
            type:'rect',
            rect:[221,197,273,255],
            fill:['rgba(192,192,192,1)'],
            stroke:[0,"rgba(0,0,0,1)","solid"],
        },
        {
            id:'SmallBox2Front',
            type:'rect',
            rect:[631,315,88,86],
            fill:['rgba(101,98,120,1)'],
            stroke:[0,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'SmallBox2Top',
            type:'rect',
            rect:[663,270,79,83],
            fill:['rgba(65,57,121,1)'],
            stroke:[1,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'BigBoxSide',
            type:'rect',
            rect:[498,195,275,257],
            fill:['rgba(0,0,0,0)'],
            stroke:[3,"rgb(0, 0, 0)","solid"],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#BigBoxSide": [
            ["transform", "translateX", '-31px'],
            ["style", "height", '270px'],
            ["transform", "skewY", '-45deg'],
            ["transform", "translateY", '-29px'],
            ["style", "width", '130px']
         ],
         "#stage": [
            ["color", "background-color", 'rgba(197,223,255,1)'],
            ["style", "width", '790px'],
            ["style", "height", '550px'],
            ["style", "overflow", 'hidden']
         ],
         "#SmallBox2Front": [
            ["color", "background-color", 'rgba(29,19,95,1.00)'],
            ["transform", "translateX", '-261px'],
            ["style", "height", '90px'],
            ["transform", "translateY", '-397px'],
            ["style", "border-width", '1px'],
            ["style", "width", '90px']
         ],
         "#SmallBox1Side": [
            ["color", "background-color", 'rgba(65,57,121,1.00)'],
            ["transform", "skewY", '-45deg'],
            ["style", "height", '90px'],
            ["transform", "translateX", '-96px'],
            ["transform", "translateY", '-323px'],
            ["style", "width", '45px']
         ],
         "#SmallBox1Top": [
            ["color", "background-color", 'rgba(59,47,139,1.00)'],
            ["transform", "translateX", '-142px'],
            ["transform", "skewX", '-45deg'],
            ["style", "height", '45px'],
            ["transform", "translateY", '-401px'],
            ["style", "width", '90px']
         ],
         "#SmallBox2Shadow": [
            ["color", "background-color", 'rgba(95,90,126,1)'],
            ["style", "border-top-left-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-37px'],
            ["style", "border-bottom-right-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "border-width", '0px'],
            ["style", "width", '90px'],
            ["style", "border-bottom-left-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "scaleY", '0.5'],
            ["transform", "skewX", '-45deg'],
            ["style", "height", '45px'],
            ["transform", "translateY", '175px'],
            ["style", "border-top-right-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}]
         ],
         "#SmallBox1Front": [
            ["color", "background-color", 'rgba(29,19,95,1.00)'],
            ["transform", "translateX", '-180px'],
            ["style", "height", '90px'],
            ["style", "border-width", '1px'],
            ["transform", "translateY", '-288px'],
            ["style", "width", '90px']
         ],
         "#BigBoxBottom": [
            ["transform", "translateX", '-275px'],
            ["transform", "skewX", '-45deg'],
            ["style", "height", '130px'],
            ["transform", "translateY", '142px'],
            ["style", "width", '270px']
         ],
         "#BigBoxTop": [
            ["transform", "translateX", '-249px'],
            ["transform", "skewX", '-45deg'],
            ["style", "height", '130px'],
            ["transform", "translateY", '-51px'],
            ["style", "width", '270px']
         ],
         "#SmallBox2Top": [
            ["color", "background-color", 'rgba(59,47,139,1.00)'],
            ["transform", "translateX", '-142px'],
            ["transform", "skewX", '-45deg'],
            ["style", "height", '45px'],
            ["transform", "translateY", '-401px'],
            ["style", "width", '90px']
         ],
         "#BigBoxFront": [
            ["color", "background-color", 'transparent'],
            ["transform", "translateX", '-29px'],
            ["transform", "translateY", '36px'],
            ["style", "height", '270px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '270px']
         ],
         "#SmallBox1Shadow": [
            ["color", "background-color", 'rgba(95,90,126,1.00)'],
            ["style", "border-top-left-radius", [46,46],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-37px'],
            ["style", "border-bottom-right-radius", [46,46],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [46,46],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "width", '90px'],
            ["style", "border-bottom-left-radius", [46,46],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "scaleY", '0.5'],
            ["transform", "skewX", '-45deg'],
            ["style", "height", '45px'],
            ["transform", "translateY", '-8px'],
            ["style", "border-width", '0px']
         ],
         "#SmallBox2Side": [
            ["color", "background-color", 'rgba(65,57,121,1.00)'],
            ["transform", "skewY", '-45deg'],
            ["style", "height", '90px'],
            ["transform", "translateX", '-172px'],
            ["transform", "translateY", '-303px'],
            ["style", "width", '45px']
         ],
         "#BigBoxBack": [
            ["style", "height", '270px'],
            ["transform", "translateY", '-43px'],
            ["transform", "translateX", '-180px'],
            ["style", "width", '270px']
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
         duration: 2000,
         timeline: [
            { id: "eid82", tween: [ "style", "#BigBoxSide", "width", '130px', { valueTemplate: undefined, fromValue: '130px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid86", tween: [ "style", "#BigBoxTop", "height", '130px', { valueTemplate: undefined, fromValue: '130px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid263", tween: [ "style", "#SmallBox2Shadow", "border-bottom-left-radius", [45,45], { valueTemplate: '@@0@@px @@1@@px', fromValue: [45,45]}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid247", tween: [ "style", "#SmallBox2Top", "height", '45px', { valueTemplate: undefined, fromValue: '45px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid264", tween: [ "style", "#SmallBox2Shadow", "border-top-left-radius", [45,45], { valueTemplate: '@@0@@px @@1@@px', fromValue: [45,45]}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid167", tween: [ "style", "#SmallBox1Shadow", "border-width", '0px', { valueTemplate: undefined, fromValue: '0px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid194", tween: [ "transform", "#SmallBox2Front", "translateY", '14px', { valueTemplate: undefined, fromValue: '-397px'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid190", tween: [ "color", "#SmallBox2Front", "background-color", 'rgba(29,19,95,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(29,19,95,1.00)'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid57", tween: [ "transform", "#BigBoxFront", "translateY", '36px', { valueTemplate: undefined, fromValue: '36px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid101", tween: [ "style", "#SmallBox1Front", "border-width", '1px', { valueTemplate: undefined, fromValue: '1px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid246", tween: [ "color", "#SmallBox2Top", "background-color", 'rgba(59,47,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(59,47,139,1.00)'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid146", tween: [ "style", "#SmallBox1Shadow", "width", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid245", tween: [ "style", "#SmallBox2Top", "width", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid265", tween: [ "style", "#SmallBox2Shadow", "border-top-right-radius", [45,45], { valueTemplate: '@@0@@px @@1@@px', fromValue: [45,45]}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid187", tween: [ "transform", "#SmallBox1Shadow", "translateX", '-37px', { valueTemplate: undefined, fromValue: '-37px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid81", tween: [ "style", "#BigBoxSide", "height", '270px', { valueTemplate: undefined, fromValue: '270px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid259", tween: [ "transform", "#SmallBox2Shadow", "skewX", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid139", tween: [ "transform", "#SmallBox1Side", "translateY", '85px', { valueTemplate: undefined, fromValue: '-323px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid117", tween: [ "transform", "#SmallBox1Side", "skewY", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid96", tween: [ "transform", "#BigBoxBottom", "translateY", '142px', { valueTemplate: undefined, fromValue: '142px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid2", tween: [ "style", "#BigBoxFront", "border-width", '3px', { valueTemplate: undefined, fromValue: '3px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid193", tween: [ "style", "#SmallBox2Front", "height", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid238", tween: [ "transform", "#SmallBox2Side", "translateY", '112px', { valueTemplate: undefined, fromValue: '-303px'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid189", tween: [ "transform", "#SmallBox1Shadow", "translateY", '-8px', { valueTemplate: undefined, fromValue: '-8px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid191", tween: [ "style", "#SmallBox2Front", "width", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid267", tween: [ "transform", "#BigBoxSide", "translateX", '-31px', { valueTemplate: undefined, fromValue: '-31px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid268", tween: [ "transform", "#BigBoxSide", "translateY", '-29px', { valueTemplate: undefined, fromValue: '-29px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid244", tween: [ "transform", "#SmallBox2Top", "skewX", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid64", tween: [ "transform", "#BigBoxBottom", "translateX", '-275px', { valueTemplate: undefined, fromValue: '-275px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid235", tween: [ "style", "#SmallBox2Side", "height", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid185", tween: [ "transform", "#SmallBox1Shadow", "scaleY", '1', { valueTemplate: undefined, fromValue: '0.5'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid89", tween: [ "style", "#BigBoxBack", "width", '270px', { valueTemplate: undefined, fromValue: '270px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid243", tween: [ "transform", "#SmallBox2Top", "translateY", '12px', { valueTemplate: undefined, fromValue: '-401px'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid266", tween: [ "style", "#SmallBox2Shadow", "border-bottom-right-radius", [45,45], { valueTemplate: '@@0@@px @@1@@px', fromValue: [45,45]}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid147", tween: [ "style", "#SmallBox1Shadow", "height", '45px', { valueTemplate: undefined, fromValue: '45px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid184", tween: [ "transform", "#SmallBox1Shadow", "scaleX", '1', { valueTemplate: undefined, fromValue: '0.5'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid255", tween: [ "color", "#SmallBox2Shadow", "background-color", 'rgba(101,98,120,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(95,90,126,1)'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid92", tween: [ "transform", "#BigBoxBack", "translateX", '-180px', { valueTemplate: undefined, fromValue: '-180px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid91", tween: [ "style", "#BigBoxBack", "height", '270px', { valueTemplate: undefined, fromValue: '270px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid256", tween: [ "transform", "#SmallBox2Shadow", "scaleY", '1', { valueTemplate: undefined, fromValue: '0.5'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid269", tween: [ "transform", "#SmallBox2Shadow", "translateY", '175px', { valueTemplate: undefined, fromValue: '175px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid258", tween: [ "transform", "#SmallBox2Shadow", "scaleX", '1', { valueTemplate: undefined, fromValue: '0.5'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid251", tween: [ "style", "#SmallBox2Shadow", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid261", tween: [ "transform", "#SmallBox2Shadow", "translateX", '-263px', { valueTemplate: undefined, fromValue: '-263px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid104", tween: [ "color", "#SmallBox1Front", "background-color", 'rgba(29,19,95,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(29,19,95,1.00)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid257", tween: [ "style", "#SmallBox2Shadow", "height", '45px', { valueTemplate: undefined, fromValue: '45px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid42", tween: [ "transform", "#BigBoxTop", "skewX", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid79", tween: [ "style", "#BigBoxFront", "width", '270px', { valueTemplate: undefined, fromValue: '270px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid94", tween: [ "style", "#BigBoxBottom", "width", '270px', { valueTemplate: undefined, fromValue: '270px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid260", tween: [ "style", "#SmallBox2Shadow", "border-width", '0px', { valueTemplate: undefined, fromValue: '0px'}], position: 2000, duration: 0, easing: "linear" },
            { id: "eid242", tween: [ "transform", "#SmallBox2Side", "translateX", '-172px', { valueTemplate: undefined, fromValue: '-172px'}], position: 2000, duration: 0, easing: "linear" },
            { id: "eid239", tween: [ "transform", "#SmallBox2Side", "skewY", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid171", tween: [ "transform", "#SmallBox1Side", "translateX", '-96px', { valueTemplate: undefined, fromValue: '-96px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid56", tween: [ "transform", "#BigBoxFront", "translateX", '-29px', { valueTemplate: undefined, fromValue: '-29px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid141", tween: [ "transform", "#SmallBox1Front", "translateY", '118px', { valueTemplate: undefined, fromValue: '-288px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid161", tween: [ "style", "#SmallBox1Shadow", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid236", tween: [ "style", "#SmallBox2Side", "width", '45px', { valueTemplate: undefined, fromValue: '45px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid114", tween: [ "style", "#SmallBox1Side", "width", '45px', { valueTemplate: undefined, fromValue: '45px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid1", tween: [ "color", "#BigBoxFront", "background-color", 'transparent', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'transparent'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid148", tween: [ "transform", "#SmallBox1Shadow", "skewX", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid116", tween: [ "style", "#SmallBox1Side", "height", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid80", tween: [ "style", "#BigBoxFront", "height", '270px', { valueTemplate: undefined, fromValue: '270px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid237", tween: [ "color", "#SmallBox2Side", "background-color", 'rgba(65,57,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(65,57,121,1.00)'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid109", tween: [ "transform", "#SmallBox1Top", "skewX", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid85", tween: [ "style", "#BigBoxTop", "width", '270px', { valueTemplate: undefined, fromValue: '270px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid192", tween: [ "style", "#SmallBox2Front", "border-width", '1px', { valueTemplate: undefined, fromValue: '1px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid93", tween: [ "transform", "#BigBoxBack", "translateY", '-43px', { valueTemplate: undefined, fromValue: '-43px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid100", tween: [ "style", "#SmallBox1Front", "height", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid162", tween: [ "color", "#SmallBox1Shadow", "background-color", 'rgba(101,98,120,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(95,90,126,1)'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid95", tween: [ "style", "#BigBoxBottom", "height", '130px', { valueTemplate: undefined, fromValue: '130px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid99", tween: [ "style", "#SmallBox1Front", "width", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid143", tween: [ "transform", "#SmallBox1Top", "translateY", '5px', { valueTemplate: undefined, fromValue: '-401px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid249", tween: [ "transform", "#SmallBox2Top", "translateX", '-269px', { valueTemplate: undefined, fromValue: '-269px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid87", tween: [ "transform", "#BigBoxTop", "translateX", '-249px', { valueTemplate: undefined, fromValue: '-249px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid170", tween: [ "transform", "#SmallBox1Top", "translateX", '-142px', { valueTemplate: undefined, fromValue: '-142px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid252", tween: [ "style", "#SmallBox2Shadow", "width", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid118", tween: [ "color", "#SmallBox1Side", "background-color", 'rgba(65,57,121,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(65,57,121,1.00)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid108", tween: [ "style", "#SmallBox1Top", "height", '45px', { valueTemplate: undefined, fromValue: '45px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid107", tween: [ "style", "#SmallBox1Top", "width", '90px', { valueTemplate: undefined, fromValue: '90px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid112", tween: [ "color", "#SmallBox1Top", "background-color", 'rgba(59,47,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(59,47,139,1.00)'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid168", tween: [ "transform", "#SmallBox1Front", "translateX", '-180px', { valueTemplate: undefined, fromValue: '-180px'}], position: 1000, duration: 0, easing: "linear" },
            { id: "eid54", tween: [ "transform", "#BigBoxBottom", "skewX", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid19", tween: [ "transform", "#BigBoxSide", "skewY", '-45deg', { valueTemplate: undefined, fromValue: '-45deg'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid88", tween: [ "transform", "#BigBoxTop", "translateY", '-51px', { valueTemplate: undefined, fromValue: '-51px'}], position: 0, duration: 0, easing: "linear" }]
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
