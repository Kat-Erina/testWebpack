/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"me\": () => (/* binding */ me)\n/* harmony export */ });\n// \"use strict\";\r\n// let date = document.querySelector(\".date\");\r\n// let age = document.querySelector(\".age\");\r\n// let relationshipStatus = document.getElementsByName(\"answer\");\r\n// console.log(relationshipStatus);\r\n// let hobbies = document.querySelector(\".hobbies\");\r\n// let finalResult = document.querySelector(\".finalResult\");\r\n// let finalSubmitBtn = document.querySelector(\".finalSubmit\");\r\n// let currentAge;\r\n\r\n// let fullName = window.localStorage.getItem(\"person\");\r\n\r\n// date.addEventListener(\"change\", () => {\r\n//   let currentYear = new Date().getFullYear();\r\n//   let selectedYear = new Date(date.value).getFullYear();\r\n\r\n//   age.value = currentYear - selectedYear;\r\n// });\r\n\r\n// finalSubmitBtn.addEventListener(\"click\", (e) => {\r\n//   let me;\r\n//   e.preventDefault();\r\n//   for (let i = 0; i < relationshipStatus.length; i++) {\r\n//     if (relationshipStatus[i].checked) {\r\n//       me = relationshipStatus[i].value;\r\n//       console.log(me);\r\n//     }\r\n//   }\r\n\r\n//   finalResult.innerHTML = `<p>Name: ${fullName} </p>\r\n//   <p>Age: ${age.value} </p>\r\n//   <p>Hobbies: ${hobbies.value}</p>\r\n//   <p>Married? - ${me} </p>`;\r\n\r\n//   window.localStorage.setItem(\"extraInto\", finalResult.innerText);\r\n// });\r\n\r\n//ვტესტავ index.html istvis 2 js is bundle-s\r\n\r\nfunction me() {\r\n  return window.localStorage.getItem(\"person\");\r\n}\r\n\n\n//# sourceURL=webpack://bundlingtest/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nlet firstName = document.querySelector(\".name\");\r\nlet lastName = document.querySelector(\".lastname\");\r\nlet submitBtn = document.querySelector(\".submit a\");\r\nlet result = document.querySelector(\".output\");\r\n\r\nsubmitBtn.addEventListener(\"click\", (e) => {\r\n  let fullName = `${firstName.value} ${lastName.value}`;\r\n  result.innerText = fullName;\r\n  window.localStorage.setItem(\"person\", fullName.toString());\r\n  console.log((0,_about_js__WEBPACK_IMPORTED_MODULE_0__.me)());\r\n});\r\n\n\n//# sourceURL=webpack://bundlingtest/./src/index.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/about.js");
/******/ 	
/******/ })()
;