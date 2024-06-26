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

/***/ "./Scripts/pages-2/dashboards-home.js":
/*!********************************************!*\
  !*** ./Scripts/pages-2/dashboards-home.js ***!
  \********************************************/
/***/ (() => {

eval("const initializeDashboardComponents = () => {};\r\n\r\nwindow.addEventListener(\"app:mounted\", initializeDashboardComponents, {\r\n  once: true,\r\n});\r\n\r\nconst loadCounters = async (tab = \"monthly\") => {\r\n  try {\r\n    const response = await fetch(\r\n      `http://localhost:8000/bsc-dashboard/counters?tab=${tab}`\r\n    );\r\n    if (!response.ok) {\r\n      throw new Error(`HTTP error! status: ${response.status}`);\r\n    }\r\n    const data = await response.json();\r\n\r\n    for (const [key, value] of Object.entries(data)) {\r\n      const stateClass = `status-${key.toLowerCase().replace(/\\s+/g, \"-\")}`;\r\n      const element = document.querySelector(`.${stateClass}`);\r\n      if (element) {\r\n        element.textContent = value;\r\n      } else {\r\n        console.log(`No element found for ${stateClass}`);\r\n      }\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error loading counter\", error);\r\n  }\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  window.loadCounters = loadCounters;\r\n  loadCounters();\r\n});\r\n\n\n//# sourceURL=webpack://cmisentinelprime/./Scripts/pages-2/dashboards-home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Scripts/pages-2/dashboards-home.js"]();
/******/ 	
/******/ })()
;