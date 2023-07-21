/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");

var form = document.getElementById('form');
var username = document.getElementById('name');
var password = document.getElementById('password');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  inputValidate();
});
function inputValidate() {
  var usernameVal = username.value.trim();
  var passwordVal = password.value.trim();
  if (usernameVal === '') {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (passwordVal === '') {
    setError(password, "password is required");
  } else if (passwordVal.length < 8) {
    setError(password, "Password must be atleast 8 characters required");
  } else {
    setSuccess(password);
  }
}
function setError(element, message) {
  var groupElement = element.parentElement;
  var errorElement = groupElement.querySelector('.error');
  errorElement.innerHTML = message;
  groupElement.classList.add('error');
  groupElement.classList.remove('success');
}
function setSuccess(element) {
  var groupElement = element.parentElement;
  var errorElement = groupElement.querySelector('.error');
  errorElement.innerHTML = ' ';
  groupElement.classList.add('success');
  groupElement.classList.remove('error');
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map