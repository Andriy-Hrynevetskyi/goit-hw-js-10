!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,l=f||s||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return l.Date.now()};function g(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=u.test(t);return f||a.test(t)?c(t.slice(2),f?2:8):r.test(t)?NaN:+t}t=function(n,t,e){var o,i,r,u,a,c,f=0,s=!1,l=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,r=i;return o=i=void 0,f=t,u=n.apply(r,e)}function _(n){return f=n,a=setTimeout(j,t),s?b(n):u}function h(n){var e=n-c;return void 0===c||e>=t||e<0||l&&n-f>=r}function j(){var n=y();if(h(n))return w(n);a=setTimeout(j,function(n){var e=t-(n-c);return l?v(e,r-(n-f)):e}(n))}function w(n){return a=void 0,d&&o?b(n):(o=i=void 0,u)}function T(){var n=y(),e=h(n);if(o=arguments,i=this,c=n,e){if(void 0===a)return _(c);if(l)return a=setTimeout(j,t),b(c)}return void 0===a&&(a=setTimeout(j,t)),u}return t=m(t)||0,g(e)&&(s=!!e.leading,r=(l="maxWait"in e)?p(m(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?u:w(y())},T};var b={input:document.querySelector("#search-box"),countriesList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};function _(n){!function(n){b.countryInfo.innerHTML=n}(n.map(h).join(""))}function h(n){var t=n.name,e=n.capital,o=n.population,i=n.flags.svg,r=n.languages;return'<div class="country-info__main">\n  <img src="'.concat(i,'" alt="').concat(t,' flag" width = 100/>\n  <p>').concat(t,'</p>\n</div>\n<div class="country-info__secondary">\n  <p class="country-info__value">\n    <span class="country-info__headding">Capital</span>').concat(e,'\n  </p>\n  <p class="country-info__value">\n    <span class="country-info__headding">Population</span>\n    ').concat(o,'\n  </p>\n  <p class="country-info__value">\n    <span class="country-info__headding">Languages</span>').concat(r,"\n  </p>\n</div>")}b.input.addEventListener("input",n(t)((function(n){(function(n){return fetch("https://restcountries.com/v2/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))})(n.target.value).then(_)}),300))}();
//# sourceMappingURL=index.6db19aa1.js.map
