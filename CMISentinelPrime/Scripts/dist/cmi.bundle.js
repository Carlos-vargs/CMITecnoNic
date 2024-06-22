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

/***/ "./Scripts/pages-2/cmi.js":
/*!********************************!*\
  !*** ./Scripts/pages-2/cmi.js ***!
  \********************************/
/***/ (() => {

eval("const initializeCMIComponents = () => {\r\n  // Modal para crear un CMI\r\n  new Modal(\"#cmiModal\");\r\n\r\n  // Datepricker for time period CMI\r\n  const cmiDatePicker = document.querySelector(\"#cmiDatePicker\");\r\n\r\n  cmiDatePicker._datepicker = flatpickr(cmiDatePicker);\r\n};\r\n\r\n/**\r\n * Inicializa los poppers para los dropdowns al observar cambios en el DOM y en la carga inicial.\r\n *\r\n * Esta función configura y observa elementos especificados dentro del contenedor con ID \"cmi-container\",\r\n * inicializando poppers para los elementos que corresponden a referencias de dropdowns. Utiliza Popper.js para\r\n * gestionar la colocación y comportamiento visual de los dropdowns asociados.\r\n *\r\n * @function initializeDropdownPoppers\r\n */\r\nconst initializeDropdownPoppers = () => {\r\n  const initPoppers = () => {\r\n    document.querySelectorAll(\".popper-ref\").forEach((button) => {\r\n      if (!button.dataset.popperInitialized) {\r\n        const dropdownId = button.closest('[id^=\"dropdown-wrapper-\"]').id;\r\n        const popperConfig = {\r\n          placement: \"bottom-start\",\r\n          modifiers: [\r\n            {\r\n              name: \"offset\",\r\n              options: {\r\n                offset: [0, 4],\r\n              },\r\n            },\r\n          ],\r\n        };\r\n\r\n        new Popper(\r\n          `#${dropdownId}`,\r\n          \".popper-ref\",\r\n          \".popper-root\",\r\n          popperConfig\r\n        );\r\n\r\n        button.dataset.popperInitialized = \"true\";\r\n      }\r\n    });\r\n  };\r\n\r\n  const observer = new MutationObserver((mutations) => {\r\n    mutations.forEach((mutation) => {\r\n      if (mutation.type == \"childList\") {\r\n        initPoppers();\r\n      }\r\n    });\r\n  });\r\n\r\n  const configObserver = { childList: true, subtree: true };\r\n  const targetNode = document.getElementById(\"cmi-container\");\r\n  observer.observe(targetNode, configObserver);\r\n\r\n  initPoppers();\r\n};\r\n\r\nwindow.addEventListener(\"app:mounted\", initializeCMIComponents, { once: true });\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  initializeDropdownPoppers();\r\n});\r\n\n\n//# sourceURL=webpack://cmisentinelprime/./Scripts/pages-2/cmi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Scripts/pages-2/cmi.js"]();
/******/ 	
/******/ })()
;