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

eval("window.addEventListener('click', function (e) {\n  return e.target.classList.contains('alert-icon') ? e.target.parentElement.classList.add('d-none-important') : '';\n});\n\n//# sourceURL=webpack://orsoppgave/./src/js/alert.js?");

/***/ }),

/***/ "./src/js/classes/Particle.js":
/*!************************************!*\
  !*** ./src/js/classes/Particle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Particle = /*#__PURE__*/function () {\n  function Particle(x, y, radius, color) {\n    _classCallCheck(this, Particle);\n\n    _defineProperty(this, \"x\", void 0);\n\n    _defineProperty(this, \"y\", void 0);\n\n    _defineProperty(this, \"radius\", void 0);\n\n    _defineProperty(this, \"color\", void 0);\n\n    _defineProperty(this, \"xSpeed\", this.getRandomSpeed());\n\n    _defineProperty(this, \"ySpeed\", this.getRandomSpeed());\n\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.color = color;\n  }\n\n  _createClass(Particle, [{\n    key: \"getRandomSpeed\",\n    value: function getRandomSpeed() {\n      return Math.random() > .5 ? 1 : -1;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx, canvas) {\n      this.update();\n      this.detectCollision(canvas);\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n      ctx.closePath();\n      ctx.fill();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.x += this.xSpeed;\n      this.y += this.ySpeed;\n    }\n  }, {\n    key: \"updatePos\",\n    value: function updatePos(x, y) {\n      if (x) this.xSpeed = x * this.xSpeed;\n      if (y) this.ySpeed = y * this.ySpeed;\n    }\n  }, {\n    key: \"detectCollision\",\n    value: function detectCollision(canvas) {\n      if (this.y <= 0 || this.y + this.radius >= canvas.height) this.updatePos(0, -1);\n      if (this.x <= 0 || this.x + this.radius >= canvas.width) this.updatePos(-1, 0);\n    }\n  }]);\n\n  return Particle;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);\n\n//# sourceURL=webpack://orsoppgave/./src/js/classes/Particle.js?");

/***/ }),

/***/ "./src/js/classes/ParticleSystem.js":
/*!******************************************!*\
  !*** ./src/js/classes/ParticleSystem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ParticleSystem = /*#__PURE__*/function () {\n  function ParticleSystem(width, height, particles, canvas) {\n    _classCallCheck(this, ParticleSystem);\n\n    _defineProperty(this, \"width\", void 0);\n\n    _defineProperty(this, \"height\", void 0);\n\n    _defineProperty(this, \"particles\", void 0);\n\n    _defineProperty(this, \"canvas\", void 0);\n\n    _defineProperty(this, \"ctx\", void 0);\n\n    this.width = width;\n    this.height = height;\n    this.particles = particles;\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n    canvas.width = width;\n    canvas.height = height;\n  }\n\n  _createClass(ParticleSystem, [{\n    key: \"run\",\n    value: function run() {\n      var _this = this;\n\n      this.clear();\n      this.drawParticles();\n      this.connectParticles();\n      requestAnimationFrame(function () {\n        return _this.run();\n      });\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }, {\n    key: \"drawParticles\",\n    value: function drawParticles() {\n      var _this2 = this;\n\n      this.particles.forEach(function (particle) {\n        return particle.draw(_this2.ctx, _this2.canvas);\n      });\n    }\n  }, {\n    key: \"connectParticles\",\n    value: function connectParticles() {\n      for (var i = 0; i < this.particles.length; i++) {\n        for (var j = i; j < this.particles.length; j++) {\n          var distance = (this.particles[i].x - this.particles[j].x) * (this.particles[i].x - this.particles[j].x) + (this.particles[i].y - this.particles[j].y) * (this.particles[i].y - this.particles[j].y);\n\n          if (distance < this.canvas.width / 10 * (this.canvas.height / 30)) {\n            this.ctx.strokeStyle = this.particles[i].color;\n            this.ctx.lineWidth = 1;\n            this.ctx.beginPath();\n            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);\n            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);\n            this.ctx.stroke();\n          }\n        }\n      }\n    }\n  }]);\n\n  return ParticleSystem;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParticleSystem);\n\n//# sourceURL=webpack://orsoppgave/./src/js/classes/ParticleSystem.js?");

/***/ }),

/***/ "./src/js/collapse.js":
/*!****************************!*\
  !*** ./src/js/collapse.js ***!
  \****************************/
/***/ (() => {

eval("window.addEventListener('click', function (e) {\n  var collapseHeading;\n\n  if (e.target.tagName !== 'HTML') {\n    if (e.target.classList.contains('collapse-heading')) collapseHeading = e.target;else if (e.target.parentElement.classList.contains('collapse-heading')) collapseHeading = e.target.parentElement;\n    if (collapseHeading) collapseHeading.parentElement.classList.toggle('toggled');\n  }\n});\n\n//# sourceURL=webpack://orsoppgave/./src/js/collapse.js?");

/***/ }),

/***/ "./src/js/dashboard.js":
/*!*****************************!*\
  !*** ./src/js/dashboard.js ***!
  \*****************************/
/***/ (() => {

eval("var dashboard = document.querySelector('#dashboard');\n\nif (dashboard) {\n  dashboard.addEventListener('click', function (e) {\n    if (e.target.tagName === 'I') {\n      var parentEl = e.target.parentElement;\n      var userID = parentEl.getAttribute('data-userId');\n      var isAdmin = parentEl.getAttribute('data-isAdmin');\n      var request = {\n        endpoint: '',\n        method: ''\n      };\n\n      if (e.target.classList.contains('delete-user')) {\n        if (isAdmin) request.endpoint = \"/admin/delete/\".concat(userID);else request.endpoint = \"/user/delete/\".concat(userID);\n        request.method = 'DELETE';\n      } else if (e.target.classList.contains('promote-user')) {\n        request.endpoint = \"/user/promote/\".concat(userID);\n        request.method = 'PUT';\n      }\n\n      fetch(request.endpoint, {\n        method: request.method\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        var currTableRow = parentEl.parentElement;\n        var parentTable = currTableRow.parentElement;\n        var tableRowsInTable;\n\n        if (request.method === 'PUT') {\n          var adminTable = document.querySelector('#admin-table');\n          var tableRow = document.createElement('DIV');\n          var _data$user = data.user,\n              username = _data$user.username,\n              email = _data$user.email,\n              _isAdmin = _data$user.isAdmin,\n              id = _data$user.id;\n          tableRow.className = 'table-row text-center';\n          tableRow.innerHTML = \"\\n                            <p>\".concat(username, \"</p>\\n                            <p>\").concat(email, \"</p>\\n                            <p data-userId=\\\"\").concat(id, \"\\\" data-isAdmin=\\\"\").concat(_isAdmin, \"\\\"><i class=\\\"fa-solid fa-trash delete delete-user\\\"></i></p>\\n                        \");\n          adminTable.appendChild(tableRow);\n        }\n\n        currTableRow.remove();\n        tableRowsInTable = Array.from(parentTable.children).filter(function (child) {\n          return child.classList.contains('table-row');\n        });\n        console.log(tableRowsInTable.length);\n\n        if (tableRowsInTable.length === 1) {\n          console.log(tableRowsInTable); // console.log(currTableRow)\n\n          parentTable.remove();\n        }\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      }); // .then(res => res.json())\n      // .then(data => window.location.href = data.redirect)\n      // .catch(err => console.log(err));\n    }\n  });\n}\n\n//# sourceURL=webpack://orsoppgave/./src/js/dashboard.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_hasScrollbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/hasScrollbar.js */ \"./src/js/utilities/hasScrollbar.js\");\n\nvar footer = document.querySelector('footer');\n\nvar setFooter = function setFooter(_) {\n  return !(0,_utilities_hasScrollbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() ? footer.classList.add('footer-bottom') : footer.classList.remove('footer-bottom');\n};\n\nwindow.addEventListener('DOMContentLoaded', setFooter);\nwindow.addEventListener('resize', setFooter);\nwindow.addEventListener('click', function (e) {\n  return setTimeout(setFooter, 1);\n});\n\n//# sourceURL=webpack://orsoppgave/./src/js/footer.js?");

/***/ }),

/***/ "./src/js/inbox.js":
/*!*************************!*\
  !*** ./src/js/inbox.js ***!
  \*************************/
/***/ (() => {

eval("console.log('TEST');\n\n//# sourceURL=webpack://orsoppgave/./src/js/inbox.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ \"./src/js/navbar.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/js/footer.js\");\n/* harmony import */ var _particleEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particleEffect.js */ \"./src/js/particleEffect.js\");\n/* harmony import */ var _collapse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collapse.js */ \"./src/js/collapse.js\");\n/* harmony import */ var _collapse_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_collapse_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.js */ \"./src/js/alert.js\");\n/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_alert_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _profileDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profileDropdown */ \"./src/js/profileDropdown.js\");\n/* harmony import */ var _profileDropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_profileDropdown__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _inbox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox.js */ \"./src/js/inbox.js\");\n/* harmony import */ var _inbox_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inbox_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings.js */ \"./src/js/settings.js\");\n/* harmony import */ var _dashboard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.js */ \"./src/js/dashboard.js\");\n/* harmony import */ var _dashboard_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dashboard_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./keys.js */ \"./src/js/keys.js\");\n/* harmony import */ var _utilities_updateRootTheme_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/updateRootTheme.js */ \"./src/js/utilities/updateRootTheme.js\");\n// Stylesheet\n // Scripts\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function (e) {\n  var body = document.querySelector('body');\n  var userTheme = body.getAttribute('data-theme');\n  sessionStorage.setItem(userTheme, _keys_js__WEBPACK_IMPORTED_MODULE_10__.THEME_STORAGE_KEY);\n  (0,_utilities_updateRootTheme_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(userTheme);\n});\n\n//# sourceURL=webpack://orsoppgave/./src/js/index.js?");

/***/ }),

/***/ "./src/js/keys.js":
/*!************************!*\
  !*** ./src/js/keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"THEME_STORAGE_KEY\": () => (/* binding */ THEME_STORAGE_KEY),\n/* harmony export */   \"SETTINGS_SECTION_SESSION_KEY\": () => (/* binding */ SETTINGS_SECTION_SESSION_KEY)\n/* harmony export */ });\nvar THEME_STORAGE_KEY = 'theme';\nvar SETTINGS_SECTION_SESSION_KEY = 'settings-section';\n\n\n//# sourceURL=webpack://orsoppgave/./src/js/keys.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

eval("var body = document.querySelector('body');\nvar menuBtn = document.querySelector('#menu-btn');\n\nif (menuBtn) {\n  menuBtn.addEventListener('click', function (_) {\n    menuBtn.classList.toggle('open');\n    body.classList.toggle('overflow-hidden');\n  });\n}\n\n//# sourceURL=webpack://orsoppgave/./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/particleEffect.js":
/*!**********************************!*\
  !*** ./src/js/particleEffect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_ParticleSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/ParticleSystem.js */ \"./src/js/classes/ParticleSystem.js\");\n/* harmony import */ var _classes_Particle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Particle.js */ \"./src/js/classes/Particle.js\");\n/* harmony import */ var _utilities_hasScrollbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/hasScrollbar.js */ \"./src/js/utilities/hasScrollbar.js\");\n\n\n\nvar particleCanvas = document.querySelector('#particle-canvas');\n\nvar getParticleColor = function getParticleColor(_) {\n  // TODO: return bg-primary css variable color\n  // TEMP:\n  var THEME_STORAGE_KEY = 'theme';\n  var themeInStorage = localStorage.getItem(THEME_STORAGE_KEY);\n  var result;\n  if (themeInStorage === 'light' || !themeInStorage) result = '#f98181';else if (themeInStorage === 'dark') result = '#777777';\n  return result;\n};\n\nif (particleCanvas) {\n  var scrollbarWidth = (0,_utilities_hasScrollbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])() ? 17 : 0;\n  var PARTICLE_SYSTEM_WIDTH = window.innerWidth - scrollbarWidth;\n  var PARTICLE_SYSTEM_HEIGHT = window.innerHeight;\n  var PARTICLE_COLOR = getParticleColor();\n  var particles = [];\n\n  var createParticles = function createParticles(array) {\n    var NUMBER_OF_PARTICLES = 80;\n\n    for (var i = 0; i < NUMBER_OF_PARTICLES; i++) {\n      var PARTICLE_RADIUS = 2;\n      var x = Math.round(Math.random() * PARTICLE_SYSTEM_WIDTH);\n      var y = Math.round(Math.random() * PARTICLE_SYSTEM_HEIGHT);\n      var particle = new _classes_Particle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, PARTICLE_RADIUS, PARTICLE_COLOR);\n      array.push(particle);\n    }\n  };\n\n  createParticles(particles);\n  var particleSystem = new _classes_ParticleSystem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](PARTICLE_SYSTEM_WIDTH, PARTICLE_SYSTEM_HEIGHT, particles, particleCanvas);\n  particleSystem.run(); // TODO: handle particle effect on resize\n}\n\n//# sourceURL=webpack://orsoppgave/./src/js/particleEffect.js?");

/***/ }),

/***/ "./src/js/profileDropdown.js":
/*!***********************************!*\
  !*** ./src/js/profileDropdown.js ***!
  \***********************************/
/***/ (() => {

eval("var profileDropdownBtn = document.querySelector('#profile-dropdown-btn');\nvar profileDropdownContent = document.querySelector('#profile-dropdown-content');\n\nif (profileDropdownBtn && profileDropdownContent) {\n  profileDropdownBtn.addEventListener('click', function (_) {\n    return profileDropdownContent.classList.toggle('d-none');\n  });\n  window.addEventListener('click', function (e) {\n    var isVisible = !profileDropdownContent.classList.contains('d-none');\n\n    if (e.target.tagName !== 'HTML') {\n      var isNotDropdown = e.target.id !== profileDropdownContent.id && e.target.parentElement.id !== profileDropdownBtn.id && e.target.id !== profileDropdownBtn.id;\n      if (isNotDropdown && isVisible) profileDropdownContent.classList.add('d-none');\n    } else if (isVisible) {\n      profileDropdownContent.classList.add('d-none');\n    }\n  });\n}\n\n//# sourceURL=webpack://orsoppgave/./src/js/profileDropdown.js?");

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./src/js/keys.js\");\n/* harmony import */ var _utilities_updateRootTheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/updateRootTheme.js */ \"./src/js/utilities/updateRootTheme.js\");\n\n\nvar settings = document.querySelector('#settings');\nvar settingsAside = document.querySelector('#settings-aside');\nvar settingsSections = document.querySelectorAll('#settings section');\nvar themeSelect = document.querySelector('#theme-select');\nvar deleteAccountBtn = document.querySelector('#delete-account-btn');\n\nvar showSelectedSection = function showSelectedSection(sectionId) {\n  if (sectionId) {\n    // Hide All Sections\n    settingsSections.forEach(function (section) {\n      var isVisible = !section.classList.contains('d-none');\n      if (isVisible) section.classList.add('d-none');\n    }); // Show Selected Section\n\n    settingsSections.forEach(function (section) {\n      var isSameId = section.id === sectionId;\n      if (isSameId) section.classList.remove('d-none');\n    });\n  }\n};\n\nif (settings) {\n  settings.addEventListener('click', function (e) {\n    var isAsideElement = e.target.parentElement === settingsAside;\n    var isThemeSelectElement = e.target === themeSelect;\n    var isDeleteAccountBtn = e.target === deleteAccountBtn;\n\n    if (isAsideElement) {\n      var link = e.target;\n      var linkTarget = link.dataset.target;\n      var isLink = link.classList.contains('aside-link');\n\n      if (isLink) {\n        showSelectedSection(linkTarget);\n        sessionStorage.setItem(_keys_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_SECTION_SESSION_KEY, linkTarget);\n      }\n    }\n\n    if (isThemeSelectElement) {\n      var themeInStorage = sessionStorage.getItem(_keys_js__WEBPACK_IMPORTED_MODULE_0__.THEME_STORAGE_KEY);\n      var selectedTheme = e.target.value;\n      if (!themeInStorage || themeInStorage && themeInStorage !== selectedTheme) sessionStorage.setItem(_keys_js__WEBPACK_IMPORTED_MODULE_0__.THEME_STORAGE_KEY, selectedTheme); // Update Theme In Storage\n\n      (0,_utilities_updateRootTheme_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selectedTheme);\n    }\n\n    if (isDeleteAccountBtn) {\n      fetch('/user/delete', {\n        method: 'DELETE'\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return window.location.href = data.redirect;\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  });\n  window.addEventListener('DOMContentLoaded', function (e) {\n    var themeInStorage = sessionStorage.getItem(_keys_js__WEBPACK_IMPORTED_MODULE_0__.THEME_STORAGE_KEY);\n    var settingsSectionInSession = sessionStorage.getItem(_keys_js__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_SECTION_SESSION_KEY);\n    showSelectedSection(settingsSectionInSession); // Update Select Storage Value If Theme In Storage\n\n    if (themeInStorage) themeSelect.value = themeInStorage;\n  });\n}\n\n//# sourceURL=webpack://orsoppgave/./src/js/settings.js?");

/***/ }),

/***/ "./src/js/utilities/hasScrollbar.js":
/*!******************************************!*\
  !*** ./src/js/utilities/hasScrollbar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar hasScrollbar = function hasScrollbar() {\n  // rootElem for quirksmode\n  var rootElem = document.documentElement || document.body;\n  var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;\n  var overflowShown;\n  var alwaysShowScroll;\n  var overflowStyle;\n  var overflowYStyle;\n  if (typeof window.innerWidth === 'number') return window.innerWidth > document.documentElement.clientWidth;\n  if (typeof rootElem.currentStyle !== 'undefined') overflowStyle = rootElem.currentStyle.overflow;\n  if (typeof rootElem.currentStyle !== 'undefined') overflowYStyle = rootElem.currentStyle.overflowY; // Check overflow style property on body for fauxscrollbars\n\n  overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow; // Check the Y axis overflow\n\n  overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY;\n  overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);\n  alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';\n  return contentOverflows && overflowShown || alwaysShowScroll;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasScrollbar);\n\n//# sourceURL=webpack://orsoppgave/./src/js/utilities/hasScrollbar.js?");

/***/ }),

/***/ "./src/js/utilities/updateRootTheme.js":
/*!*********************************************!*\
  !*** ./src/js/utilities/updateRootTheme.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar root = document.querySelector(':root');\n\nvar updateRootTheme = function updateRootTheme(className) {\n  return root.className = className;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateRootTheme);\n\n//# sourceURL=webpack://orsoppgave/./src/js/utilities/updateRootTheme.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Baloo+Chettan+2&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root.light{--bg-primary: crimson;--bg-secondary: white;--text-primary: white;--text-secondary: black}:root.dark{--bg-primary: rgb(114, 56, 114);--bg-secondary: black;--text-primary: white;--text-secondary: white}.container{max-width:1100px;width:80%}.overflow-hidden{overflow:hidden}.lighten{filter:brightness(165%)}.bg-primary{background-color:var(--bg-primary)}.bg-secondary{background-color:var(--bg-secondary)}.text-primary{color:var(--text-primary)}.text-secondary{color:var(--text-secondary)}.contrast-primary{background-color:var(--bg-primary);color:var(--text-primary)}.contrast-secondary{background-color:var(--bg-secondary);color:var(--text-secondary)}.text-start{text-align:start}.text-center{text-align:center}.text-end{text-align:end}.d-block{display:block}.d-inline{display:inline}.d-inline-block{display:inline-block}.d-flex{display:flex}.d-grid{display:grid}.d-none{display:none}.d-block-important{display:block !important}.d-inline-important{display:inline !important}.d-inline-block-important{display:inline-block !important}.d-flex-important{display:flex !important}.d-grid-important{display:grid !important}.d-none-important{display:none !important}.position-static{position:static}.position-relative{position:relative}.position-absolute{position:absolute}.position-sticky{position:sticky}.position-fixed{position:fixed}.justify-content-flex-start{justify-content:flex-start}.justify-content-center{justify-content:center}.justify-content-flex-end{justify-content:flex-end}.justify-content-space-around{justify-content:space-around}.justify-content-space-between{justify-content:space-between}.align-items-flex-start{align-items:flex-start}.align-items-center{align-items:center}.align-items-flex-end{align-items:flex-end}.m-1{margin:1rem}.mx-1{margin:0 1rem}.my-1{margin:1rem 0}.mt-1{margin-top:1rem}.mb-1{margin-bottom:1rem}.ml-1{margin-left:1rem}.mr-1{margin-right:1rem}.p-1{padding:1rem}.px-1{padding:0 1rem}.py-1{padding:1rem 0}.pt-1{padding-top:1rem}.pb-1{padding-bottom:1rem}.pl-1{padding-left:1rem}.pr-1{padding-right:1rem}.m-2{margin:2rem}.mx-2{margin:0 2rem}.my-2{margin:2rem 0}.mt-2{margin-top:2rem}.mb-2{margin-bottom:2rem}.ml-2{margin-left:2rem}.mr-2{margin-right:2rem}.p-2{padding:2rem}.px-2{padding:0 2rem}.py-2{padding:2rem 0}.pt-2{padding-top:2rem}.pb-2{padding-bottom:2rem}.pl-2{padding-left:2rem}.pr-2{padding-right:2rem}.m-3{margin:3rem}.mx-3{margin:0 3rem}.my-3{margin:3rem 0}.mt-3{margin-top:3rem}.mb-3{margin-bottom:3rem}.ml-3{margin-left:3rem}.mr-3{margin-right:3rem}.p-3{padding:3rem}.px-3{padding:0 3rem}.py-3{padding:3rem 0}.pt-3{padding-top:3rem}.pb-3{padding-bottom:3rem}.pl-3{padding-left:3rem}.pr-3{padding-right:3rem}.m-4{margin:4rem}.mx-4{margin:0 4rem}.my-4{margin:4rem 0}.mt-4{margin-top:4rem}.mb-4{margin-bottom:4rem}.ml-4{margin-left:4rem}.mr-4{margin-right:4rem}.p-4{padding:4rem}.px-4{padding:0 4rem}.py-4{padding:4rem 0}.pt-4{padding-top:4rem}.pb-4{padding-bottom:4rem}.pl-4{padding-left:4rem}.pr-4{padding-right:4rem}.m-5{margin:5rem}.mx-5{margin:0 5rem}.my-5{margin:5rem 0}.mt-5{margin-top:5rem}.mb-5{margin-bottom:5rem}.ml-5{margin-left:5rem}.mr-5{margin-right:5rem}.p-5{padding:5rem}.px-5{padding:0 5rem}.py-5{padding:5rem 0}.pt-5{padding-top:5rem}.pb-5{padding-bottom:5rem}.pl-5{padding-left:5rem}.pr-5{padding-right:5rem}.m-auto{margin:auto}.mx-auto{margin:0 auto}.my-auto{margin:auto 0}.mt-auto{margin-top:auto}.mb-auto{margin-bottom:auto}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.p-auto{padding:auto}.px-auto{padding:0 auto}.py-auto{padding:auto 0}.pt-auto{padding-top:auto}.pb-auto{padding-bottom:auto}.pl-auto{padding-left:auto}.pr-auto{padding-right:auto}.btn-github,.btn-primary-transparent,.btn-primary{display:inline-block;cursor:pointer;text-align:center;border-radius:5px;padding:10px 15px;margin:5px;font-size:1.2rem !important;outline:0;border:0;-webkit-transition:transform .3s;-o-transition:transform .3s;transition:transform .3s}.btn-github:hover,.btn-primary-transparent:hover,.btn-primary:hover,.btn-github:focus,.btn-primary-transparent:focus,.btn-primary:focus{-webkit-transform:scale(0.97);-ms-transform:scale(0.97);-o-transform:scale(0.97);transform:scale(0.97)}.btn-primary{border:2px solid var(--bg-primary);background-color:var(--bg-primary);color:var(--text-primary)}.btn-primary-transparent{border:2px solid var(--bg-primary);background-color:#fff;color:#000;-webkit-transition:color .3s,background-color .3s,transform .3s;-o-transition:color .3s,background-color .3s,transform .3s;transition:color .3s,background-color .3s,transform .3s}.btn-primary-transparent:hover,.btn-primary-transparent:focus{background-color:var(--bg-primary);color:var(--text-primary)}.btn-github{border:2px solid purple;background-color:purple;color:#fff}.btn-github i{margin-right:2px}.form-container{margin:auto;padding:30px 60px;max-width:700px;border-radius:10px;-webkit-box-shadow:2px 0px 10px 2px #d3d3d3;box-shadow:2px 0px 10px 2px #d3d3d3}.form-field{margin:10px 0px}.form-field *{display:block}.form-field label{margin:10px 0px;font-size:1.1rem}.form-field input:not([type=checkbox]){width:100%;padding:10px 15px;border-radius:3px;outline:0;border:1.5px solid #d3d3d3}.form-field.checkbox{display:flex;align-items:center;justify-content:flex-start}.form-field.checkbox input[type=checkbox]{margin-right:10px;width:15px;height:15px}.form-btn{cursor:pointer;text-align:center;padding:10px 15px;font-size:1.2rem;border:0;outline:0;width:100%;margin-top:5px;border-radius:3px;-webkit-transition:transform .3s;-o-transition:transform .3s;transition:transform .3s}.form-btn:hover,.form-btn:focus{-webkit-transform:scale(0.995);-ms-transform:scale(0.995);-o-transform:scale(0.995);transform:scale(0.995)}.alert{padding:10px 15px;margin:10px 0px;display:flex;justify-content:space-between;align-items:center;border-radius:5px}.alert.error{background-color:red;color:#fff}.alert.success{background-color:green;color:#fff}.alert-icon{cursor:pointer}.collapse{margin:25px 0px;padding:15px 20px;border-radius:10px;-webkit-box-shadow:2px 0px 10px 2px #d3d3d3;box-shadow:2px 0px 10px 2px #d3d3d3;background-color:#fff;color:#000}.collapse.toggled .collapse-heading i{transform:rotate(180deg)}.collapse.toggled .collapse-inner{max-height:100%;padding:15px 0px 5px 0px}.collapse-heading{display:flex;align-items:center;justify-content:space-between;cursor:pointer}.collapse-heading :first-child{font-size:1.5rem}.collapse-heading i{cursor:pointer;font-size:1.5rem;-webkit-transition:transform .2s;-o-transition:transform .2s;transition:transform .2s}.collapse-inner{padding:0px;max-height:0;overflow:hidden;-webkit-transition:max-height .2s,padding .4s;-o-transition:max-height .2s,padding .4s;transition:max-height .2s,padding .4s}.collapse-inner img{width:100%}.cards-wrapper{display:grid;grid-template-columns:repeat(3, 1fr);gap:30px}@media(max-width: 768px){.cards-wrapper{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 500px){.cards-wrapper{grid-template-columns:repeat(1, 1fr)}}.card{border-radius:10px;display:flex;flex-direction:column;justify-content:space-between;background-color:#fff;color:#000;-webkit-box-shadow:2px 0px 10px 2px #d3d3d3;box-shadow:2px 0px 10px 2px #d3d3d3}.card img{width:100%;border-top-left-radius:10px;border-top-right-radius:10px}.card-heading{text-align:center;padding:10px 15px}.card-body{padding:10px 15px}*{box-sizing:border-box;margin:0;padding:0}body{font-family:\\\"Baloo Chettan 2\\\",cursive;background-color:var(--bg-secondary)}a{text-decoration:none}ul{list-style:none}body>nav{padding:15px 0px}body>nav .container div .btn-primary-lightend{margin-top:0;margin-bottom:0;font-size:.9rem}body>nav .container a{font-size:1.15rem}body>nav .container #inbox-icon-wrapper a{font-size:1.5rem}body>nav .container #inbox-icon-wrapper a span{bottom:-9px;font-size:.6rem}body>nav .container #inbox-icon-wrapper a span._1-digit{left:0px}body>nav .container #inbox-icon-wrapper a span._2-digit{left:-5px}body>nav .container #inbox-icon-wrapper a span._3-digit{left:-10px}body>nav .container #profile-dropdown-wrapper #profile-dropdown-btn{cursor:pointer;font-size:1.15rem}body>nav .container #profile-dropdown-wrapper #profile-dropdown-content{padding:5px 10px;border-radius:5px;bottom:-70px;left:0;width:100%;min-width:95px}body>nav .container #profile-dropdown-wrapper #profile-dropdown-content.is-admin{bottom:-95px}body>nav .container #profile-dropdown-wrapper #profile-dropdown-content .profile-dropdown-item{cursor:pointer;font-size:1rem;margin:3px 0px}body>nav .container #profile-dropdown-wrapper #profile-dropdown-content .profile-dropdown-item>*{font-size:1rem}body>nav .container #profile-dropdown-wrapper #profile-dropdown-content [type=submit]{background:transparent;border:0;cursor:pointer;color:var(--text-primary);font-size:1rem}@media(max-width: 768px){body>nav.authenticated .container #menu-btn{display:flex;width:45px;height:45px;cursor:pointer;z-index:10;-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}body>nav.authenticated .container #menu-btn div{width:30px;height:6px;border-radius:5px;-webkit-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}body>nav.authenticated .container #menu-btn div::before,body>nav.authenticated .container #menu-btn div::after{content:\\\"\\\";position:absolute;width:45px;height:6px;background-color:var(--bg-secondary);border-radius:5px;-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}body>nav.authenticated .container #menu-btn div::before{-webkit-transform:translateY(-16px);-ms-transform:translateY(-16px);-o-transform:translateY(-16px);transform:translateY(-16px)}body>nav.authenticated .container #menu-btn div::after{-webkit-transform:translateY(16px);-ms-transform:translateY(16px);-o-transform:translateY(16px);transform:translateY(16px)}body>nav.authenticated .container #menu-btn.open div{background-color:var(--bg-primary)}body>nav.authenticated .container #menu-btn.open div::before,body>nav.authenticated .container #menu-btn.open div::after{background-color:var(--bg-primary)}body>nav.authenticated .container #menu-btn.open div{-webkit-transform:translateX(-50px);-ms-transform:translateX(-50px);-o-transform:translateX(-50px);transform:translateX(-50px);background-color:transparent}body>nav.authenticated .container #menu-btn.open div::before{-webkit-transform:rotate(45deg) translate(35px, -35px);-ms-transform:rotate(45deg) translate(35px, -35px);-o-transform:rotate(45deg) translate(35px, -35px);transform:rotate(45deg) translate(35px, -35px)}body>nav.authenticated .container #menu-btn.open div::after{-webkit-transform:rotate(-45deg) translate(35px, 35px);-ms-transform:rotate(-45deg) translate(35px, 35px);-o-transform:rotate(-45deg) translate(35px, 35px);transform:rotate(-45deg) translate(35px, 35px)}body>nav.authenticated .container #menu-btn.open+ul{left:0%}body>nav.authenticated .container ul{position:absolute;top:0;left:-200%;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--bg-secondary);color:var(--text-secondary);z-index:5;-webkit-transition:left .5s;-o-transition:left .5s;transition:left .5s}body>nav.authenticated .container ul li{margin:5px 0px}body>nav.authenticated .container ul li a{color:var(--text-secondary);font-size:2.3rem}}#particle-canvas{top:0;left:0;z-index:-10}#home section h1{font-size:8rem;line-height:3.3cm}#home section h1 span{color:var(--bg-primary)}#home img{border-radius:50%}@media(max-width: 768px){#home{flex-direction:column-reverse}#home section h1{font-size:2.7rem;line-height:normal;text-align:center;margin:5px 0px}#home section h1 br{display:none}#home section div{margin-top:0}#home section div a{display:block;text-align:center;margin:10px 0px}#home img{width:80%}}#job-experience h1{font-size:2.4rem}#education h1{font-size:2.4rem}#projects section>h1{font-size:2.4rem}#projects .card-body a{display:block;width:100%}#settings{grid-template-columns:30% 70%}#settings aside .aside-link{padding:5px 0px 5px 10px;border-radius:5px;margin:1px 0px;border:1px solid #fff;cursor:pointer}#settings #account .form-field i{margin-left:5px;color:red}#settings #account .form-field i.admin{color:green}#settings #account :last-child #delete-account-btn{transform:scale(1)}#settings #preferences .form-field select,#settings #preferences .form-field select>*{padding:3px 5px;outline:0;cursor:pointer}@media(min-width: 768px){#settings #account{margin-left:3rem}}@media(max-width: 768px){#settings{grid-template-columns:100%;row-gap:30px}}#dashboard .table{width:100%;margin:20px 0px}#dashboard .table-row{display:grid;grid-template-columns:repeat(3, 1fr);padding:5px 10px;border:1.3px solid var(--text-secondary)}#dashboard .table-row:first-child p{font-weight:bold}#dashboard .table-row:not(:first-child) p{margin:6px 0px}#dashboard .table-row i{margin:0px 10px;cursor:pointer}#dashboard .table-row i.delete{color:red}#dashboard .table-row i.promote{color:green}@media(max-width: 768px){#dashboard .table-row{grid-template-columns:1fr}}footer{font-size:1.15rem}footer.footer-bottom{position:fixed;width:100%;bottom:0;left:0}footer i{color:var(--text-primary);font-size:24px}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://orsoppgave/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

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