"use strict";function _createForOfIteratorHelper(r,e){var t,n,o,a,i="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(i)return n=!(t=!0),{s:function(){i=i.call(r)},n:function(){var r=i.next();return t=r.done,r},e:function(r){n=!0,o=r},f:function(){try{t||null==i.return||i.return()}finally{if(n)throw o}}};if(Array.isArray(r)||(i=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length)return i&&(r=i),a=0,{s:e=function(){},n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(r){throw r},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){var t;if(r)return"string"==typeof r?_arrayLikeToArray(r,e):"Map"===(t="Object"===(t=Object.prototype.toString.call(r).slice(8,-1))&&r.constructor?r.constructor.name:t)||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=domBfs;var noop=function(){};function domBfs(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:noop;if(r){if("function"!=typeof e)throw new TypeError("callback must be a function");for(var t=[r];t.length;)for(var n=t.length,o=0;o<n;o+=1){var a=t.shift();if(e(a))return a;var i,f=_createForOfIteratorHelper(a.childNodes);try{for(f.s();!(i=f.n()).done;){var u=i.value;t.push(u)}}catch(r){f.e(r)}finally{f.f()}}}return null}"undefined"!=typeof window&&(window.$domBfs=domBfs);