/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

// import Teste from './modules/module.js'
// import style from '../css/app.css'

// const teste = 'a';
console.log(a);
console.log(Teste);

// jQuery(document).ready(function($) {
//  	$.ajax({
//  		url: 'https://api.github.com/users/mikejavier/starred',
//  		type: 'GET'
//  	})
//  	.done(function(data) {

//  		for (var i = 0; i < data.length; i++) {

//  			if(data[i].open_issues_count > 0 && data[i].language !== null){

// 		        $('.projetos .wrap').append(
// 		    		'<article class="projeto-item">'+
// 		                '<h1 class="projeto-item-title">' + data[i].name + ' <br> <small>Issues Abertas: ' + data[i].open_issues_count + '</small></h1>'+
// 		                '<p class="projeto-item-excerpt">' + data[i].description + '</p>'+
// 		                '<div class="projeto-item-action">'+
// 		                	'<a href="' + data[i].html_url + '/issues?q=is%3Aopen+is%3Aissue" class="flat-button md-effect-color">Ver Issues</a>'+
// 		                '</div>'+
// 		            '</article>'
// 		    	);
// 	    	}

//  		};

//  		Waves.init();
//  		Waves.attach('.md-effect-light',['waves-light']);
//  		Waves.attach('.md-effect-color',['waves-color']);
//  	})
//  	.fail(function() {
//  		console.log("error");
//  	});
// });

/***/ },
/* 1 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _app3 = __webpack_require__(0);

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }
/******/ ]);
//# sourceMappingURL=script.bundle.js.map