!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function i(e,t,n){e.set(t-1,n),e.set(t,n+2),e.set(t+1,n-1),e.set(t+1,n),e.set(t+1,n+3),e.set(t+1,n+4),e.set(t+1,n+5)}function r(e,t,n){e.set(t-1,n),e.set(t,n-1),e.set(t,n),e.set(t,n+1),e.set(t+1,n)}function o(e,t,n){e.set(t-1,n-1,0),e.set(t-1,n,0),e.set(t-1,n+1,0),e.set(t,n-1,0),e.set(t,n,0),e.set(t,n+1,0),e.set(t+1,n-1,0),e.set(t+1,n,0),e.set(t+1,n+1,0)}Object.defineProperty(t,"__esModule",{value:!0}),t.acorn=i,t.cross=r,t.erase=o},function(e,t,n){"use strict";function i(e){switch(e.arrayFormat){case"index":return function(t,n,i){return null===n?[o(t,e),"[",i,"]"].join(""):[o(t,e),"[",o(i,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}function r(e){var t;switch(e.arrayFormat){case"index":return function(e,n,i){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(i[e]=n);void 0===i[e]&&(i[e]={}),i[e][t[1]]=n};case"bracket":return function(e,n,i){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===i[e]?void(i[e]=[n]):void(i[e]=[].concat(i[e],n)):void(i[e]=n)};default:return function(e,t,n){if(void 0===n[e])return void(n[e]=t);n[e]=[].concat(n[e],t)}}}function o(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function s(e){return Array.isArray(e)?e.sort():"object"===(void 0===e?"undefined":l(e))?s(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(6),a=n(5);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=a({arrayFormat:"none"},t);var n=r(t),i=Object.create(null);return"string"!=typeof e?i:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(r),o,i)}),Object.keys(i).sort().reduce(function(e,t){var n=i[t];return Boolean(n)&&"object"===(void 0===n?"undefined":l(n))&&!Array.isArray(n)?e[t]=s(n):e[t]=n,e},Object.create(null))):i},t.stringify=function(e,t){t=a({encode:!0,strict:!0,arrayFormat:"none"},t);var n=i(t);return e?Object.keys(e).sort().map(function(i){var r=e[i];if(void 0===r)return"";if(null===r)return o(i,t);if(Array.isArray(r)){var s=[];return r.slice().forEach(function(e){void 0!==e&&s.push(n(i,e,s.length))}),s.join("&")}return o(i,t)+"="+o(r,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n){i(this,e),this.width=t,this.height=n;var r=new ArrayBuffer(t*n);this._current=new Uint8Array(r);var o=new ArrayBuffer(t*n);this._next=new Uint8Array(o)}return r(e,[{key:"index",value:function(e,t){return-1===e?e=this.height-1:e===this.height&&(e=0),-1===t?t=this.width-1:t===this.width&&(t=0),e*this.width+t}},{key:"cell",value:function(e,t){return this._current[this.index(e,t)]}},{key:"next",value:function(e,t){return this._next[this.index(e,t)]}},{key:"computeNextState",value:function(){for(var e=void 0,t=0;t<this.height;t++)for(var n=0;n<this.width;n++)e=this.cell(t-1,n-1)+this.cell(t-1,n)+this.cell(t-1,n+1),e+=this.cell(t,n-1)+this.cell(t,n+1),e+=this.cell(t+1,n-1)+this.cell(t+1,n)+this.cell(t+1,n+1),this._next[t*this.width+n]=e<2||e>3?0:3===e?1:this._current[t*this.width+n];this._current.set(this._next)}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._current[this.index(e,t)]=n}},{key:"setNext",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._next[this.index(e,t)]=n}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),s=function(){function e(t,n,r){var o=this;i(this,e),this.canvas=t,this.engine=n,this.renderer=r,this.mouseDown=!1,this.listeners=[],this.addEvents([{eventType:"mousedown",callback:this.mouseIsDown.bind(this)},{eventType:"mouseup",callback:this.mouseIsUp.bind(this)},{eventType:"mousemove",callback:this.addCells.bind(this)},{eventType:"touchmove",callback:function(e){for(var t=0;t<e.touches.length;t++)o.addCells(e.touches[t],!0)}}])}return r(e,[{key:"addEvents",value:function(){var e=this;(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(t){e.listeners.push(t);var n=document;t.selector&&(n=document.querySelector(t.selector)),n.addEventListener(t.eventType,t.callback)})}},{key:"addCells",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.canvas.getBoundingClientRect(),i={x:(e.clientX-n.left)/(n.right-n.left)*this.canvas.clientWidth,y:(e.clientY-n.top)/(n.bottom-n.top)*this.canvas.clientHeight},r={i:~~(i.y/this.renderer.pixelsPerCell),j:~~(i.x/this.renderer.pixelsPerCell)};(this.mouseDown||t)&&(e.ctrlKey?(0,o.erase)(this.engine,r.i,r.j):(0,o.cross)(this.engine,r.i,r.j))}},{key:"mouseIsDown",value:function(e){0===e.button&&(this.mouseDown=!0,this.addCells(e))}},{key:"mouseIsUp",value:function(e){this.mouseDown=!1}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(this,e),this.canvas=t,this.context=t.getContext("2d"),this.engine=n,this.pixelsPerCell=r.pixelsPerCell||5,this.desiredFPS=r.desiredFPS||30,this.fpsNode=r.fpsNode||!1,this.strokeStyle=r.strokeStyle||"rgba(255,118,5,0.5)",this.fillStyle=r.fillStyle||"rgba(222,122,39,0.5)",this.play=!1,this.fpsTime=0,this.engineTime=0,this.fps=0,this.frameNumber=0,this.canvas.width=this.engine.width*this.pixelsPerCell,this.canvas.height=this.engine.height*this.pixelsPerCell}return r(e,[{key:"togglePlay",value:function(){this.play=!this.play}},{key:"draw",value:function(e){window.requestAnimationFrame(this.draw.bind(this)),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.strokeStyle=this.strokeStyle,this.context.fillStyle=this.fillStyle;for(var t=0;t<this.engine.height;t++)for(var n=0;n<this.engine.width;n++)this.engine.cell(t,n)&&(this.context.strokeRect(this.pixelsPerCell*n,this.pixelsPerCell*t,this.pixelsPerCell,this.pixelsPerCell),this.context.fillRect(this.pixelsPerCell*n,this.pixelsPerCell*t,this.pixelsPerCell,this.pixelsPerCell));var i=e-this.engineTime;if(i>1e3/this.desiredFPS&&this.play&&(this.engine.computeNextState(),this.frameNumber+=1,this.engineTime=e-i%(1e3/this.desiredFPS)),this.fpsNode){var r=e-this.fpsTime;r>500&&(this.fps=1e3/r*this.frameNumber,this.fpsNode.textContent=this.fps.toFixed(2)+" FPS",this.fpsTime=e,this.frameNumber=0)}}},{key:"start",value:function(){this.engine.computeNextState(),this.play=!0,window.requestAnimationFrame(this.draw.bind(this))}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var u in n)o.call(n,u)&&(c[u]=n[u]);if(r){l=r(n);for(var h=0;h<l.length;h++)s.call(n,l[h])&&(c[l[h]]=n[l[h]])}}return c}},function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(2),o=i(r),s=n(0),l=n(4),c=i(l),a=n(3),u=i(a),h=n(1),f=i(h),d={canvasSelector:"#universe",fpsNodeSelector:"#fps-info",playButtonSelector:"#ctrl-play-pause",hideButtonSelector:"#ctrl-hide-show",desiredFPS:30,pixelsPerCell:5,strokeStyle:"rgba(255,118,5,0.5)",fillStyle:"rgba(222,122,39,0.5)"},p=f.default.parse(window.location.search),v=Object.assign(d,p);v.desiredFPS=parseInt(v.desiredFPS,10),v.pixelsperCell=parseInt(v.pixelsperCell,10);var y=function(){var e=document.querySelector(v.canvasSelector),t=~~(e.clientWidth/v.pixelsPerCell),n=~~(e.clientHeight/v.pixelsPerCell),i=new o.default(t,n),r=new c.default(e,i,{desiredFPS:v.desiredFPS,pixelsPerCell:v.pixelsPerCell,fpsNode:document.querySelector(v.fpsNodeSelector),strokeStyle:v.strokeStyle,fillStyle:v.fillStyle});(0,s.acorn)(i,~~(n/2),~~(t/2)),(0,s.acorn)(i,0,0);var l=function(e){r.togglePlay(),e.target.textContent="Pause"===e.target.textContent?"Play":"Pause"},a=function(e){document.querySelector(".text-content").classList.toggle("hidden"),e.target.textContent="Hide text"===e.target.textContent?"Show text":"Hide text"};new u.default(e,i,r).addEvents([{selector:v.playButtonSelector,eventType:"click",callback:l},{selector:v.hideButtonSelector,eventType:"click",callback:a}]),r.start()};window.onload=y}]);