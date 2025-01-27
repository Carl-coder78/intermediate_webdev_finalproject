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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module) => {

eval("// Función para calcular el interés simple\nconst calculateSimpleInterest = (principal, rate, time) => {\n    return (principal * rate * time) / 100;\n  }\n  \n  // Función para calcular el monto total a pagar (actualmente restando en lugar de sumar)\n  const calculateTotalPayableAmount = (principal, interestAmount) => {\n    return principal + interestAmount; // Aquí está el error deliberado\n  }\n  \n  // Función calculate que usa las funciones anteriores\n  const calculate = () => {\n    let p = Number(document.getElementById(\"principal\").value);\n    let r = Number(document.getElementById(\"rate\").value);\n    let t = Number(document.getElementById(\"time\").value);\n    \n    let simpleInterest = calculateSimpleInterest(p, r, t);\n    let amount = calculateTotalPayableAmount(p, simpleInterest);\n    \n    let result = document.getElementById(\"result\");\n    result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>\n    <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>\n    <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;\n  };\n  \n  // Exportar funciones para pruebas en NodeJS con Jasmine\n  if (true)\n    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };\n  \n\n//# sourceURL=webpack:///./src/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;