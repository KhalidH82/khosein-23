"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/agency-experience/page",{

/***/ "(app-pages-browser)/./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResponsiveCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _app_constants_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/constants/data */ \"(app-pages-browser)/./app/constants/data.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction ResponsiveCarousel() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            autoPlay: true,\n            showArrows: true,\n            infiniteLoop: true,\n            dynamicHeight: false,\n            children: _app_constants_data__WEBPACK_IMPORTED_MODULE_2__.thorium.filter((project)=>project.featured === true) // Filter projects with the 'featured' key set to true\n            .map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.link,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mockup-window h-full xl:h-[29rem] bg-ship-cove-100 border border-base-100 shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center -mt-5 mb-2\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-4 py-3 border-t border-base-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.image,\n                                    alt: \"\",\n                                    className: \"w-full h-96\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 21,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                        lineNumber: 19,\n                        columnNumber: 15\n                    }, this)\n                }, project.link, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = ResponsiveCarousel;\nvar _c;\n$RefreshReg$(_c, \"ResponsiveCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3FEO0FBQ0w7QUFDZTtBQUVoRCxTQUFTRTtJQUN0QixxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNILCtEQUFRQTtZQUNQSSxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsY0FBYztZQUNkQyxlQUFlO3NCQUVkTix3REFBT0EsQ0FDTE8sTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLFFBQVEsS0FBSyxNQUFNLHNEQUFzRDthQUNyR0MsR0FBRyxDQUFDLENBQUNGLHdCQUNKLDhEQUFDRztvQkFBRUMsTUFBTUosUUFBUUssSUFBSTs4QkFDbkIsNEVBQUNYO3dCQUFJWSxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUVELFdBQVU7MENBQTBCTixRQUFRUSxJQUFJOzs7Ozs7MENBQ25ELDhEQUFDZDtnQ0FBSVksV0FBVTswQ0FDYiw0RUFBQ0c7b0NBQUlDLEtBQUtWLFFBQVFXLEtBQUs7b0NBQUVDLEtBQUk7b0NBQUdOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUpwQk4sUUFBUUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FBWXBEO0tBeEJ3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcz8yN2I5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IHsgdGhvcml1bSB9IGZyb20gXCIuLi9hcHAvY29uc3RhbnRzL2RhdGFcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3BvbnNpdmVDYXJvdXNlbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIGF1dG9QbGF5XG4gICAgICAgIHNob3dBcnJvd3M9e3RydWV9XG4gICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cbiAgICAgICAgZHluYW1pY0hlaWdodD17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIHt0aG9yaXVtXG4gICAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5mZWF0dXJlZCA9PT0gdHJ1ZSkgLy8gRmlsdGVyIHByb2plY3RzIHdpdGggdGhlICdmZWF0dXJlZCcga2V5IHNldCB0byB0cnVlXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5saW5rfSBrZXk9e3Byb2plY3QubGlua30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwLXdpbmRvdyBoLWZ1bGwgeGw6aC1bMjlyZW1dIGJnLXNoaXAtY292ZS0xMDAgYm9yZGVyIGJvcmRlci1iYXNlLTEwMCBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgLW10LTUgbWItMlwiPntwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTMgYm9yZGVyLXQgYm9yZGVyLWJhc2UtMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5pbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtOTZcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJ0aG9yaXVtIiwiUmVzcG9uc2l2ZUNhcm91c2VsIiwiZGl2IiwiYXV0b1BsYXkiLCJzaG93QXJyb3dzIiwiaW5maW5pdGVMb29wIiwiZHluYW1pY0hlaWdodCIsImZpbHRlciIsInByb2plY3QiLCJmZWF0dXJlZCIsIm1hcCIsImEiLCJocmVmIiwibGluayIsImNsYXNzTmFtZSIsInAiLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Carousel.js\n"));

/***/ })

});