/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _module = __webpack_require__(/*! ./modules/module.js */ 2);\n\nvar _module2 = _interopRequireDefault(_module);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import style from '../css/app.css'\n\n// const teste = 'a';\n// console.log(a);\nconsole.log(_module2.default);\n\n// jQuery(document).ready(function($) {\n//  \t$.ajax({\n//  \t\turl: 'https://api.github.com/users/mikejavier/starred',\n//  \t\ttype: 'GET'\n//  \t})\n//  \t.done(function(data) {\n\n//  \t\tfor (var i = 0; i < data.length; i++) {\n\n//  \t\t\tif(data[i].open_issues_count > 0 && data[i].language !== null){\n\n// \t\t        $('.projetos .wrap').append(\n// \t\t    \t\t'<article class=\"projeto-item\">'+\n// \t\t                '<h1 class=\"projeto-item-title\">' + data[i].name + ' <br> <small>Issues Abertas: ' + data[i].open_issues_count + '</small></h1>'+\n// \t\t                '<p class=\"projeto-item-excerpt\">' + data[i].description + '</p>'+\n// \t\t                '<div class=\"projeto-item-action\">'+\n// \t\t                \t'<a href=\"' + data[i].html_url + '/issues?q=is%3Aopen+is%3Aissue\" class=\"flat-button md-effect-color\">Ver Issues</a>'+\n// \t\t                '</div>'+\n// \t\t            '</article>'\n// \t\t    \t);\n// \t    \t}\n\n//  \t\t};\n\n//  \t\tWaves.init();\n//  \t\tWaves.attach('.md-effect-light',['waves-light']);\n//  \t\tWaves.attach('.md-effect-color',['waves-color']);\n//  \t})\n//  \t.fail(function() {\n//  \t\tconsole.log(\"error\");\n//  \t});\n// });//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlc3RlIGZyb20gJy4vbW9kdWxlcy9tb2R1bGUuanMnXG4vLyBpbXBvcnQgc3R5bGUgZnJvbSAnLi4vY3NzL2FwcC5jc3MnXG5cbi8vIGNvbnN0IHRlc3RlID0gJ2EnO1xuLy8gY29uc29sZS5sb2coYSk7XG5jb25zb2xlLmxvZyhUZXN0ZSk7XG5cbi8vIGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuLy8gIFx0JC5hamF4KHtcbi8vICBcdFx0dXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9taWtlamF2aWVyL3N0YXJyZWQnLFxuLy8gIFx0XHR0eXBlOiAnR0VUJ1xuLy8gIFx0fSlcbi8vICBcdC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcblxuLy8gIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblxuLy8gIFx0XHRcdGlmKGRhdGFbaV0ub3Blbl9pc3N1ZXNfY291bnQgPiAwICYmIGRhdGFbaV0ubGFuZ3VhZ2UgIT09IG51bGwpe1xuXG4vLyBcdFx0ICAgICAgICAkKCcucHJvamV0b3MgLndyYXAnKS5hcHBlbmQoXG4vLyBcdFx0ICAgIFx0XHQnPGFydGljbGUgY2xhc3M9XCJwcm9qZXRvLWl0ZW1cIj4nK1xuLy8gXHRcdCAgICAgICAgICAgICAgICAnPGgxIGNsYXNzPVwicHJvamV0by1pdGVtLXRpdGxlXCI+JyArIGRhdGFbaV0ubmFtZSArICcgPGJyPiA8c21hbGw+SXNzdWVzIEFiZXJ0YXM6ICcgKyBkYXRhW2ldLm9wZW5faXNzdWVzX2NvdW50ICsgJzwvc21hbGw+PC9oMT4nK1xuLy8gXHRcdCAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJwcm9qZXRvLWl0ZW0tZXhjZXJwdFwiPicgKyBkYXRhW2ldLmRlc2NyaXB0aW9uICsgJzwvcD4nK1xuLy8gXHRcdCAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByb2pldG8taXRlbS1hY3Rpb25cIj4nK1xuLy8gXHRcdCAgICAgICAgICAgICAgICBcdCc8YSBocmVmPVwiJyArIGRhdGFbaV0uaHRtbF91cmwgKyAnL2lzc3Vlcz9xPWlzJTNBb3BlbitpcyUzQWlzc3VlXCIgY2xhc3M9XCJmbGF0LWJ1dHRvbiBtZC1lZmZlY3QtY29sb3JcIj5WZXIgSXNzdWVzPC9hPicrXG4vLyBcdFx0ICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xuLy8gXHRcdCAgICAgICAgICAgICc8L2FydGljbGU+J1xuLy8gXHRcdCAgICBcdCk7XG4vLyBcdCAgICBcdH1cblxuLy8gIFx0XHR9O1xuXG4vLyAgXHRcdFdhdmVzLmluaXQoKTtcbi8vICBcdFx0V2F2ZXMuYXR0YWNoKCcubWQtZWZmZWN0LWxpZ2h0JyxbJ3dhdmVzLWxpZ2h0J10pO1xuLy8gIFx0XHRXYXZlcy5hdHRhY2goJy5tZC1lZmZlY3QtY29sb3InLFsnd2F2ZXMtY29sb3InXSk7XG4vLyAgXHR9KVxuLy8gIFx0LmZhaWwoZnVuY3Rpb24oKSB7XG4vLyAgXHRcdGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4vLyAgXHR9KTtcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jc3MvYXBwLmNzcz9hNTY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2FwcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/js/modules/module.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar teste = function teste() {\n  _classCallCheck(this, teste);\n};\n\nexports.default = teste;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy9tb2R1bGUuanM/Mjc3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0ZSB7XG5cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tb2R1bGVzL21vZHVsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app = __webpack_require__(/*! ./css/app.css */ 1);\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _app3 = __webpack_require__(/*! ./js/app.js */ 0);\n\nvar _app4 = _interopRequireDefault(_app3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICcuL2Nzcy9hcHAuY3NzJ1xuaW1wb3J0IHNjcmlwdCBmcm9tICcuL2pzL2FwcC5qcydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);