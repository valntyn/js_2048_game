parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector(".game-score"),e=document.querySelector(".start"),r=document.querySelectorAll("td"),i=document.querySelector(".message-win"),t=document.querySelector(".message-lose"),o=document.querySelector(".message-start"),a=0;function c(){r.forEach(function(n){n.innerHTML="",i.classList.add("hidden"),t.classList.add("hidden"),o.classList.add("hidden")}),e.classList.remove("restart-lose"),e.className="button restart",e.innerHTML="Restart",L(),L(),l()}function L(){var n=Math.floor(Math.random()*r.length);""===r[n].innerHTML?(r[n].innerHTML=s(),y()):L()}function s(){return Math.random()>.9?4:2}function M(){for(var n=0;n<16;n++)if(n%4==0){var e=[+r[n].innerHTML,+r[n+1].innerHTML,+r[n+2].innerHTML,+r[n+3].innerHTML].filter(function(n){return n}),i=4-e.length,t=Array(i).fill("").concat(e);r[n].innerHTML=t[0],r[n+1].innerHTML=t[1],r[n+2].innerHTML=t[2],r[n+3].innerHTML=t[3]}}function T(){for(var n=0;n<16;n++)if(n%4==0){var e=[+r[n].innerHTML,+r[n+1].innerHTML,+r[n+2].innerHTML,+r[n+3].innerHTML].filter(function(n){return n}),i=4-e.length,t=Array(i).fill(""),o=e.concat(t);r[n].innerHTML=o[0],r[n+1].innerHTML=o[1],r[n+2].innerHTML=o[2],r[n+3].innerHTML=o[3]}}function H(){for(var e=0;e<15;e++)if(e%4!=3&&r[e].innerHTML===r[e+1].innerHTML){var i=parseInt(r[e].innerHTML)+parseInt(r[e+1].innerHTML);r[e+1].innerHTML=i,r[e].innerHTML=0,isNaN(i)||(a+=i,n.innerHTML=a)}g()}function f(){for(var e=0;e<12;e++)if(r[e].innerHTML===r[e+4].innerHTML){var i=parseInt(r[e].innerHTML)+parseInt(r[e+4].innerHTML);r[e+4].innerHTML=i,r[e].innerHTML=0,isNaN(i)||(a+=i,n.innerHTML=a)}g()}function u(){for(var n=0;n<4;n++){var e=[+r[n].innerHTML,+r[n+4].innerHTML,+r[n+8].innerHTML,+r[n+12].innerHTML].filter(function(n){return n}),i=4-e.length,t=Array(i).fill("").concat(e);r[n].innerHTML=t[0],r[n+4].innerHTML=t[1],r[n+8].innerHTML=t[2],r[n+12].innerHTML=t[3]}}function d(){for(var n=0;n<4;n++){var e=[+r[n].innerHTML,+r[n+4].innerHTML,+r[n+8].innerHTML,+r[n+12].innerHTML].filter(function(n){return n}),i=4-e.length,t=Array(i).fill(""),o=e.concat(t);r[n].innerHTML=o[0],r[n+4].innerHTML=o[1],r[n+8].innerHTML=o[2],r[n+12].innerHTML=o[3]}}function l(){r.forEach(function(n){var e="field-cell--".concat(n.innerHTML);n.className="",n.classList.add("field-cell"),n.innerText>0&&n.classList.add(e)})}function v(n){"ArrowRight"===n.code?(M(),H(),M(),L(),l()):"ArrowLeft"===n.code?(T(),H(),T(),L(),l()):"ArrowDown"===n.code?(u(),f(),u(),L(),l()):"ArrowUp"===n.code&&(d(),f(),d(),L(),l())}function m(){for(var n=0;n<r.length-1;n++)if(r[n].innerHTML===r[n+1].innerHTML)return!0;return!1}function h(){for(var n=0;n<12;n++)if(r[n].innerHTML===r[n+4].innerHTML)return!0;return!1}function y(){var n=0;r.forEach(function(e){""===e.innerHTML&&n++}),0!==n||m()||h()||(o.classList.add("hidden"),t.classList.remove("hidden"),e.classList.remove("restart"),e.classList.add("restart-lose"),document.removeEventListener("keyup",v))}function g(){r.forEach(function(n){2048==n.innerHTML&&(o.classList.add("hidden"),i.classList.remove("hidden"),document.removeEventListener("keyup",v))})}e.addEventListener("click",function(e){c(),a=0,n.innerHTML=0,document.addEventListener("keyup",v)}),l();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1859d45c.js.map