/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/alert.js":
/*!*************************!*\
  !*** ./src/js/alert.js ***!
  \*************************/
/***/ (() => {

eval("window.addEventListener('click', function (e) {\n  return e.target.classList.contains('alert-icon') ? e.target.parentElement.classList.add('d-none') : '';\n});\n\n//# sourceURL=webpack://orsoppgave/./src/js/alert.js?");

/***/ }),

/***/ "./src/js/collapse.js":
/*!****************************!*\
  !*** ./src/js/collapse.js ***!
  \****************************/
/***/ (() => {

eval("window.addEventListener('click', function (e) {\n  var collapseHeading;\n  if (e.target.classList.contains('collapse-heading')) collapseHeading = e.target;else if (e.target.parentElement.classList.contains('collapse-heading')) collapseHeading = e.target.parentElement;\n  if (collapseHeading) collapseHeading.parentElement.classList.toggle('toggled');\n});\n\n//# sourceURL=webpack://orsoppgave/./src/js/collapse.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ (() => {

eval("var footer = document.querySelector('footer');\n\nvar hasScrollbar = function hasScrollbar() {\n  // rootElem for quirksmode\n  var rootElem = document.documentElement || document.body;\n  var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;\n  var overflowShown;\n  var alwaysShowScroll;\n  var overflowStyle;\n  var overflowYStyle;\n  if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth;\n  if (typeof rootElem.currentStyle !== 'undefined') overflowStyle = rootElem.currentStyle.overflow;\n  if (typeof rootElem.currentStyle !== 'undefined') overflowYStyle = rootElem.currentStyle.overflowY; // Check overflow style property on body for fauxscrollbars\n\n  overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow; // Check the Y axis overflow\n\n  overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY;\n  overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);\n  alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';\n  return contentOverflows && overflowShown || alwaysShowScroll;\n};\n\nvar setFooter = function setFooter(_) {\n  return !hasScrollbar() ? footer.classList.add('footer-bottom') : footer.classList.remove('footer-bottom');\n};\n\nwindow.addEventListener('load', setFooter);\nwindow.addEventListener('resize', setFooter);\n\n//# sourceURL=webpack://orsoppgave/./src/js/footer.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ \"./src/js/navbar.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/js/footer.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse.js */ \"./src/js/collapse.js\");\n/* harmony import */ var _collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_collapse_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.js */ \"./src/js/alert.js\");\n/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_alert_js__WEBPACK_IMPORTED_MODULE_4__);\n// Stylesheet\n // Scripts\n\n\n\n\n\n\n//# sourceURL=webpack://orsoppgave/./src/js/index.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

eval("var body = document.querySelector('body');\nvar menuBtn = document.querySelector('#menu-btn');\nmenuBtn.addEventListener('click', function (_) {\n  menuBtn.classList.toggle('open');\n  body.classList.toggle('overflow-hidden');\n});\n\n//# sourceURL=webpack://orsoppgave/./src/js/navbar.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Baloo+Chettan+2&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container{max-width:1100px;width:80%}.overflow-hidden{overflow:hidden}.primary{color:crimson}.text-start{text-align:start}.text-center{text-align:center}.text-end{text-align:end}.d-block{display:block !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-flex{display:-webkit-box !important;display:-webkit-flex !important;display:-moz-box !important;display:-ms-flexbox !important;display:flex !important}.d-grid{display:grid !important}.d-none{display:none !important}.position-static{position:static}.position-relative{position:relative}.position-absolute{position:absolute}.position-sticky{position:-webkit-sticky;position:sticky}.position-fixed{position:fixed}.justify-content-flex-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-content-center{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-content-flex-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-content-space-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.justify-content-space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.align-items-flex-start{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.align-items-center{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.align-items-flex-end{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end}.m-1{margin:1rem}.mx-1{margin:0 1rem}.my-1{margin:1rem 0}.mt-1{margin-top:1rem}.mb-1{margin-bottom:1rem}.ml-1{margin-left:1rem}.mr-1{margin-right:1rem}.p-1{padding:1rem}.px-1{padding:0 1rem}.py-1{padding:1rem 0}.pt-1{padding-top:1rem}.pb-1{padding-bottom:1rem}.pl-1{padding-left:1rem}.pr-1{padding-right:1rem}.m-2{margin:2rem}.mx-2{margin:0 2rem}.my-2{margin:2rem 0}.mt-2{margin-top:2rem}.mb-2{margin-bottom:2rem}.ml-2{margin-left:2rem}.mr-2{margin-right:2rem}.p-2{padding:2rem}.px-2{padding:0 2rem}.py-2{padding:2rem 0}.pt-2{padding-top:2rem}.pb-2{padding-bottom:2rem}.pl-2{padding-left:2rem}.pr-2{padding-right:2rem}.m-3{margin:3rem}.mx-3{margin:0 3rem}.my-3{margin:3rem 0}.mt-3{margin-top:3rem}.mb-3{margin-bottom:3rem}.ml-3{margin-left:3rem}.mr-3{margin-right:3rem}.p-3{padding:3rem}.px-3{padding:0 3rem}.py-3{padding:3rem 0}.pt-3{padding-top:3rem}.pb-3{padding-bottom:3rem}.pl-3{padding-left:3rem}.pr-3{padding-right:3rem}.m-4{margin:4rem}.mx-4{margin:0 4rem}.my-4{margin:4rem 0}.mt-4{margin-top:4rem}.mb-4{margin-bottom:4rem}.ml-4{margin-left:4rem}.mr-4{margin-right:4rem}.p-4{padding:4rem}.px-4{padding:0 4rem}.py-4{padding:4rem 0}.pt-4{padding-top:4rem}.pb-4{padding-bottom:4rem}.pl-4{padding-left:4rem}.pr-4{padding-right:4rem}.m-5{margin:5rem}.mx-5{margin:0 5rem}.my-5{margin:5rem 0}.mt-5{margin-top:5rem}.mb-5{margin-bottom:5rem}.ml-5{margin-left:5rem}.mr-5{margin-right:5rem}.p-5{padding:5rem}.px-5{padding:0 5rem}.py-5{padding:5rem 0}.pt-5{padding-top:5rem}.pb-5{padding-bottom:5rem}.pl-5{padding-left:5rem}.pr-5{padding-right:5rem}.m-auto{margin:auto}.mx-auto{margin:0 auto}.my-auto{margin:auto 0}.mt-auto{margin-top:auto}.mb-auto{margin-bottom:auto}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.p-auto{padding:auto}.px-auto{padding:0 auto}.py-auto{padding:auto 0}.pt-auto{padding-top:auto}.pb-auto{padding-bottom:auto}.pl-auto{padding-left:auto}.pr-auto{padding-right:auto}.collapse{margin:25px 0px;padding:15px 20px;border-radius:10px;-webkit-box-shadow:2px 0px 10px 2px #d3d3d3;box-shadow:2px 0px 10px 2px #d3d3d3;background-color:#fff;color:#000}.collapse.toggled .collapse-heading i{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.collapse.toggled .collapse-inner{max-height:100%;padding:15px 0px 5px 0px}.collapse-heading{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer}.collapse-heading :first-child{font-size:1.5rem}.collapse-heading i{font-size:1.5rem;-webkit-transition:transform .2s;-o-transition:transform .2s;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;-o-transition:-o-transform .2s;transition:transform .2s;transition:transform .2s, -webkit-transform .2s, -o-transform .2s}.collapse-inner{padding:0px;max-height:0;overflow:hidden;-webkit-transition:max-height .2s,padding .4s;-o-transition:max-height .2s,padding .4s;transition:max-height .2s,padding .4s}.cards-wrapper{display:grid;grid-template-columns:repeat(3, 1fr);gap:30px}@media(max-width: 768px){.cards-wrapper{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 500px){.cards-wrapper{grid-template-columns:repeat(1, 1fr)}}.card{background-color:#fff;border-radius:10px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-shadow:2px 0px 10px 2px #d3d3d3;box-shadow:2px 0px 10px 2px #d3d3d3}.card img{width:100%;border-top-left-radius:10px;border-top-right-radius:10px}.card-heading{text-align:center;padding:10px 15px}.card-body{padding:10px 15px}.form-container{margin:auto;padding:30px 60px;max-width:700px;border-radius:10px;background-color:#fff;-webkit-box-shadow:2px 0px 10px 2px #d3d3d3;box-shadow:2px 0px 10px 2px #d3d3d3}.form-container form .form-field{margin:10px 0px}.form-container form .form-field *{display:block}.form-container form .form-field label{margin:10px 0px;font-size:1.1rem}.form-container form .form-field input{width:100%;padding:10px 15px;border-radius:3px;outline:0;border:1.5px solid #d3d3d3}.form-container form [type=submit]{cursor:pointer;text-align:center;padding:10px 15px;font-size:1.2rem;border:0;outline:0;width:100%;margin-top:5px;border-radius:3px;background-color:crimson;color:#fff;-webkit-transition:transform .3s;-o-transition:transform .3s;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:-o-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s, -o-transform .3s}.form-container form [type=submit]:hover,.form-container form [type=submit]:focus{-webkit-transform:scale(0.995);-ms-transform:scale(0.995);-o-transform:scale(0.995);transform:scale(0.995)}.alert{padding:10px 15px;margin:10px 0px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-radius:5px}.alert.error{background-color:red;color:#fff}.alert.success{background-color:green;color:#fff}.alert-icon{cursor:pointer}.btn-github,.btn-primary-lightend,.btn-primary-rounded,.btn-primary{display:inline-block;cursor:pointer;text-align:center;border-radius:5px;padding:10px 15px;margin:5px;font-size:1.2rem;-webkit-transition:transform .3s;-o-transition:transform .3s;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:-o-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s, -o-transform .3s}.btn-github:hover,.btn-primary-lightend:hover,.btn-primary-rounded:hover,.btn-primary:hover,.btn-github:focus,.btn-primary-lightend:focus,.btn-primary-rounded:focus,.btn-primary:focus{-webkit-transform:scale(0.97);-ms-transform:scale(0.97);-o-transform:scale(0.97);transform:scale(0.97)}.btn-primary{border:2px solid crimson;background-color:crimson;color:#fff}.btn-primary-rounded{border:2px solid crimson;background-color:#fff;color:#000;-webkit-transition:color .3s,background-color .3s,transform .3s;-o-transition:color .3s,background-color .3s,transform .3s;-webkit-transition:color .3s,background-color .3s,-webkit-transform .3s;transition:color .3s,background-color .3s,-webkit-transform .3s;-o-transition:color .3s,background-color .3s,-o-transform .3s;transition:color .3s,background-color .3s,transform .3s;transition:color .3s,background-color .3s,transform .3s,-webkit-transform .3s,-o-transform .3s}.btn-primary-rounded:hover,.btn-primary-rounded:focus{background-color:crimson;color:#fff}.btn-primary-lightend{background-color:#ed365b;color:#fff}.btn-github{border:2px solid purple;background-color:purple;color:#fff}.btn-github i{margin-right:2px}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}body{font-family:\\\"Baloo Chettan 2\\\",cursive;background-color:#fff}a{text-decoration:none}ul{list-style:none}i{cursor:pointer}nav{background-color:crimson;top:0;left:0;padding:10px 0px}nav a{color:#fff;font-size:1.15rem}@media(max-width: 768px){nav .container #menu-btn{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:45px;height:45px;cursor:pointer;z-index:100;-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}nav .container #menu-btn div{width:30px;height:6px;background:#fff;border-radius:5px;-webkit-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;-webkit-transition:-webkit-transform .5s ease-in-out;transition:-webkit-transform .5s ease-in-out;-o-transition:-o-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out, -webkit-transform .5s ease-in-out, -o-transform .5s ease-in-out}nav .container #menu-btn div::before,nav .container #menu-btn div::after{content:\\\"\\\";position:absolute;width:45px;height:6px;background-color:#fff;border-radius:5px;-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}nav .container #menu-btn div::before{-webkit-transform:translateY(-16px);-ms-transform:translateY(-16px);-o-transform:translateY(-16px);transform:translateY(-16px)}nav .container #menu-btn div::after{-webkit-transform:translateY(16px);-ms-transform:translateY(16px);-o-transform:translateY(16px);transform:translateY(16px)}nav .container #menu-btn.open div{background-color:#000}nav .container #menu-btn.open div::before,nav .container #menu-btn.open div::after{background-color:#000}nav .container #menu-btn.open div{-webkit-transform:translateX(-50px);-ms-transform:translateX(-50px);-o-transform:translateX(-50px);transform:translateX(-50px);background-color:transparent}nav .container #menu-btn.open div::before{-webkit-transform:rotate(45deg) translate(35px, -35px);-ms-transform:rotate(45deg) translate(35px, -35px);-o-transform:rotate(45deg) translate(35px, -35px);transform:rotate(45deg) translate(35px, -35px)}nav .container #menu-btn.open div::after{-webkit-transform:rotate(-45deg) translate(35px, 35px);-ms-transform:rotate(-45deg) translate(35px, 35px);-o-transform:rotate(-45deg) translate(35px, 35px);transform:rotate(-45deg) translate(35px, 35px)}nav .container #menu-btn.open+ul{left:0%}nav .container ul{position:absolute;top:0;left:-200%;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;-webkit-transition:left .5s;-o-transition:left .5s;transition:left .5s}nav .container ul li{margin:5px 0px}nav .container ul li a{color:#000;font-size:2.3rem}}#home section h1{font-size:8rem;line-height:3.3cm}#home img{border-radius:50%}@media(max-width: 768px){#home{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-moz-box-orient:vertical;-moz-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}#home section h1{font-size:2.7rem;line-height:normal;text-align:center;margin:5px 0px}#home section h1 br{display:none}#home section div{margin-top:0}#home section div a{display:block;text-align:center;margin:10px 0px}#home img{width:80%}}#job-experience h1{font-size:2.4rem}#education h1{font-size:2.4rem}#projects section>h1{font-size:2.4rem}#projects .card-body a{display:block;width:100%}footer{background-color:crimson;color:#fff;font-size:1.15rem}footer.footer-bottom{position:fixed;width:100%;bottom:0;left:0}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://orsoppgave/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://orsoppgave/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://orsoppgave/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://orsoppgave/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://orsoppgave/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://orsoppgave/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://orsoppgave/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://orsoppgave/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://orsoppgave/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://orsoppgave/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;