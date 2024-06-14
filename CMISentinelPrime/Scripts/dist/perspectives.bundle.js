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

/***/ "./Scripts/pages-2/perspectives.js":
/*!*****************************************!*\
  !*** ./Scripts/pages-2/perspectives.js ***!
  \*****************************************/
/***/ (() => {

eval("const initializePerspectivesComponents = () => {\r\n  // Table Collapse\r\n  window.tableCollapse = new Accordion(\r\n    document.querySelector(\"#table-collapse\"),\r\n    {\r\n      onlyChildNodes: true,\r\n      duration: 200,\r\n      showMultiple: true,\r\n    }\r\n  );\r\n\r\n  // Table for Objetives\r\n  window.tableCollapseObjetive = new Accordion(\r\n    document.querySelector(\"#table-collapse-objetive\"),\r\n    {\r\n      onlyChildNodes: false,\r\n      duration: 200,\r\n      showMultiple: true,\r\n      elementClass: 'ac-objetive',\r\n      triggerClass: 'ac-trigger-objetive',\r\n      activeClass: 'is-active-objetive'\r\n    }\r\n  );\r\n\r\n  // Watchlist 3 Chart\r\n  const watchlist3Config = {\r\n    colors: [\"#3AC5BC\"],\r\n    chart: {\r\n      height: 30,\r\n      width: 60,\r\n      type: \"line\",\r\n      parentHeightOffset: 0,\r\n      toolbar: {\r\n        show: false,\r\n      },\r\n    },\r\n    series: [\r\n      {\r\n        name: \"Stat\",\r\n        data: [654, 820, 102, 540, 154, 614],\r\n      },\r\n    ],\r\n\r\n    dataLabels: {\r\n      enabled: false,\r\n    },\r\n    stroke: {\r\n      curve: \"smooth\",\r\n      width: 3,\r\n    },\r\n\r\n    grid: {\r\n      padding: {\r\n        left: 0,\r\n        right: 0,\r\n        top: -28,\r\n        bottom: 0,\r\n      },\r\n    },\r\n    xaxis: {\r\n      show: false,\r\n      axisBorder: {\r\n        show: false,\r\n      },\r\n      axisTicks: {\r\n        show: false,\r\n      },\r\n      labels: {\r\n        show: false,\r\n      },\r\n    },\r\n    yaxis: {\r\n      show: false,\r\n      axisBorder: {\r\n        show: false,\r\n      },\r\n      axisTicks: {\r\n        show: false,\r\n      },\r\n      labels: {\r\n        show: false,\r\n      },\r\n    },\r\n  };\r\n  const watchlist2El = document.querySelector(\"#watchlist-2-chart\");\r\n\r\n  setTimeout(() => {\r\n    watchlist2El._chart = new ApexCharts(watchlist2El, watchlist3Config);\r\n    watchlist2El._chart.render();\r\n  });\r\n};\r\n\r\n/**\r\n * Inicializa los poppers para los dropdowns al observar cambios en el DOM y en la carga inicial.\r\n *\r\n * Esta función configura y observa elementos especificados dentro del contenedor con ID \"cmi-container\",\r\n * inicializando poppers para los elementos que corresponden a referencias de dropdowns. Utiliza Popper.js para\r\n * gestionar la colocación y comportamiento visual de los dropdowns asociados.\r\n *\r\n * @function initializeDropdownPoppers\r\n */\r\nconst initializeDropdownPoppers = () => {\r\n  const initPoppers = () => {\r\n    document.querySelectorAll(\".popper-ref\").forEach((button) => {\r\n      if (!button.dataset.popperInitialized) {\r\n        const dropdownId = button.closest('[id^=\"dropdown-wrapper-\"]').id;\r\n        const popperConfig = {\r\n          placement: \"bottom-start\",\r\n          modifiers: [\r\n            {\r\n              name: \"offset\",\r\n              options: {\r\n                offset: [0, 4],\r\n              },\r\n            },\r\n          ],\r\n        };\r\n\r\n        new Popper(\r\n          `#${dropdownId}`,\r\n          \".popper-ref\",\r\n          \".popper-root\",\r\n          popperConfig\r\n        );\r\n\r\n        button.dataset.popperInitialized = \"true\";\r\n      }\r\n    });\r\n  };\r\n\r\n  const observer = new MutationObserver((mutations) => {\r\n    mutations.forEach((mutation) => {\r\n      if (mutation.type == \"childList\") {\r\n        initPoppers();\r\n      }\r\n    });\r\n  });\r\n\r\n  const configObserver = { childList: true, subtree: true };\r\n  const targetNode = document.getElementById(\"table-collapse\");\r\n  observer.observe(targetNode, configObserver);\r\n\r\n  initPoppers();\r\n};\r\n\r\nwindow.addEventListener(\"app:mounted\", initializePerspectivesComponents, {\r\n  once: true,\r\n});\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  initializeDropdownPoppers();\r\n});\r\n\n\n//# sourceURL=webpack://cmisentinelprime/./Scripts/pages-2/perspectives.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Scripts/pages-2/perspectives.js"]();
/******/ 	
/******/ })()
;