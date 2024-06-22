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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Note: DOM elements should be created using JavaScript but styling can be done in a separate CSS file.\n\nconst content = document.querySelector('#content');\n\ndocument.addEventListener('DOMContentLoaded',function(){\n\n    const homeDiv = document.createElement('div');\n    homeDiv.classList.add('d-home');\n    const h11 = document.createElement('h1');\n    h11.innerHTML = 'The';\n    \n    const h12 = document.createElement('h2');\n    h12.innerHTML = 'RoadSide Cafe';\n\n    const btn = document.createElement('button');\n    btn.classList.add('menu-btn');\n    btn.innerHTML = 'Let Me Check the Menu ';\n\n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('d-menu');\n\n    const menuh1 = document.createElement('h1');\n    menuh1.innerHTML = 'Menu';\n\n    const contactDiv = document.createElement('div');\n    contactDiv.classList.add('d-contact');\n\n    const contacth1 = document.createElement('h1');\n    contacth1.innerHTML = 'Contact';\n\n    const AboutDiv = document.createElement('div');\n    AboutDiv.classList.add('d-about');\n\n    const abouth1 = document.createElement('h1');\n    abouth1.innerHTML = 'About';\n\n    homeDiv.appendChild(h11);\n    homeDiv.appendChild(h12);\n    homeDiv.appendChild(btn);\n    content.appendChild(homeDiv);\n\n    menuDiv.appendChild(menuh1);\n    content.appendChild(menuDiv);\n\n    contactDiv.appendChild(contacth1);\n    content.appendChild(contactDiv);\n\n    AboutDiv.appendChild(abouth1);\n    content.appendChild(AboutDiv);\n\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;