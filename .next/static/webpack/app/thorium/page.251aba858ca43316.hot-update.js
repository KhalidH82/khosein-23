"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/thorium/page",{

/***/ "(app-pages-browser)/./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResponsiveCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction ResponsiveCarousel(param) {\n    let { projects } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            showIndicators: true,\n            showArrows: true,\n            infiniteLoop: true,\n            dynamicHeight: true,\n            children: projects.filter((project)=>project.featured === true) // Filter projects with the 'featured' key set to true\n            .map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.link,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mockup-window bg-ship-cove-100 border border-base-100 shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center -mt-5 mb-2\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-4 py-3 border-t border-base-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.image,\n                                    alt: \"\",\n                                    className: \"h-full w-full object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                        lineNumber: 18,\n                        columnNumber: 15\n                    }, this)\n                }, project.link, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = ResponsiveCarousel;\nvar _c;\n$RefreshReg$(_c, \"ResponsiveCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDcUQ7QUFDVTtBQUVoRCxTQUFTQyxtQkFBbUIsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaO0lBQ3pDLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0gsK0RBQVFBO1lBQ1BJLGNBQWM7WUFDZEMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLGVBQWU7c0JBRWRMLFNBQ0VNLE1BQU0sQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxRQUFRLEtBQUssTUFBTSxzREFBc0Q7YUFDckdDLEdBQUcsQ0FBQyxDQUFDRix3QkFDSiw4REFBQ0c7b0JBQUVDLE1BQU1KLFFBQVFLLElBQUk7OEJBQ25CLDRFQUFDWDt3QkFBSVksV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFFRCxXQUFVOzBDQUEwQk4sUUFBUVEsSUFBSTs7Ozs7OzBDQUNuRCw4REFBQ2Q7Z0NBQUlZLFdBQVU7MENBQ2IsNEVBQUNHO29DQUFJQyxLQUFLVixRQUFRVyxLQUFLO29DQUFFQyxLQUFJO29DQUFHTixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzttQkFKcEJOLFFBQVFLLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQVlwRDtLQXhCd0JiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/MjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3BvbnNpdmVDYXJvdXNlbCh7IHByb2plY3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIHNob3dJbmRpY2F0b3JzXG4gICAgICAgIHNob3dBcnJvd3M9e3RydWV9XG4gICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cbiAgICAgICAgZHluYW1pY0hlaWdodD17dHJ1ZX1cbiAgICAgID5cbiAgICAgICAge3Byb2plY3RzXG4gICAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5mZWF0dXJlZCA9PT0gdHJ1ZSkgLy8gRmlsdGVyIHByb2plY3RzIHdpdGggdGhlICdmZWF0dXJlZCcga2V5IHNldCB0byB0cnVlXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5saW5rfSBrZXk9e3Byb2plY3QubGlua30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwLXdpbmRvdyBiZy1zaGlwLWNvdmUtMTAwIGJvcmRlciBib3JkZXItYmFzZS0xMDAgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIC1tdC01IG1iLTJcIj57cHJvamVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHgtNCBweS0zIGJvcmRlci10IGJvcmRlci1iYXNlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJSZXNwb25zaXZlQ2Fyb3VzZWwiLCJwcm9qZWN0cyIsImRpdiIsInNob3dJbmRpY2F0b3JzIiwic2hvd0Fycm93cyIsImluZmluaXRlTG9vcCIsImR5bmFtaWNIZWlnaHQiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiZmVhdHVyZWQiLCJtYXAiLCJhIiwiaHJlZiIsImxpbmsiLCJjbGFzc05hbWUiLCJwIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Carousel.js\n"));

/***/ })

});