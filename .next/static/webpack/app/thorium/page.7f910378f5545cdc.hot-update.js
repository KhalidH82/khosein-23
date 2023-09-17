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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResponsiveCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var _app_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/fonts */ \"(app-pages-browser)/./app/fonts.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction ResponsiveCarousel(param) {\n    let { projects } = param;\n    // Customized arrow component for the previous slide\n    const CustomPrevArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            style: {\n                position: \"absolute\",\n                left: 250,\n                top: \"100%\",\n                zIndex: 2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/arrow-left.svg\",\n                className: \"w-6 h-6 md:h-12 md:w-12 object-contain px-5\"\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this);\n    // Customized arrow component for the next slide\n    const CustomNextArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            style: {\n                position: \"absolute\",\n                right: 250,\n                top: \"100%\",\n                zIndex: 2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/arrow-right.svg\",\n                className: \"w-6 h-6 md:h-12 md:w-12 object-contain px-5\"\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            showIndicators: true,\n            showArrows: true,\n            infiniteLoop: true,\n            renderArrowPrev: (onClickHandler, hasPrev, label)=>hasPrev && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomPrevArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            renderArrowNext: (onClickHandler, hasNext, label)=>hasNext && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomNextArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            children: projects.filter((project)=>project.featured === true) // Filter projects with the 'featured' key set to true\n            .map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.link,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mockup-window bg-ship-cove-100 border border-base-100 shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center -mt-5 mb-2 uppercase \".concat(_app_fonts__WEBPACK_IMPORTED_MODULE_3__.prompt.className),\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-4 py-3 border-t border-base-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.image,\n                                    alt: \"\",\n                                    className: \"h-full w-full object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                        lineNumber: 47,\n                        columnNumber: 15\n                    }, this)\n                }, project.link, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = ResponsiveCarousel;\nvar _c;\n$RefreshReg$(_c, \"ResponsiveCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3FEO0FBQ1U7QUFDMUI7QUFFdEIsU0FBU0UsbUJBQW1CLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjtJQUN6QyxvREFBb0Q7SUFDcEQsTUFBTUMsa0JBQWtCLENBQUNDLHNCQUN2Qiw4REFBQ0M7WUFDQ0MsU0FBU0YsTUFBTUUsT0FBTztZQUN0QkMsT0FBTztnQkFBRUMsVUFBVTtnQkFBWUMsTUFBTTtnQkFBS0MsS0FBSztnQkFBUUMsUUFBUTtZQUFFO3NCQUVqRSw0RUFBQ0M7Z0JBQUlDLEtBQUk7Z0JBQXlCQyxXQUFVOzs7Ozs7Ozs7OztJQUloRCxnREFBZ0Q7SUFDaEQsTUFBTUMsa0JBQWtCLENBQUNYLHNCQUN2Qiw4REFBQ0M7WUFDQ0MsU0FBU0YsTUFBTUUsT0FBTztZQUN0QkMsT0FBTztnQkFBRUMsVUFBVTtnQkFBWVEsT0FBTztnQkFBS04sS0FBSztnQkFBUUMsUUFBUTtZQUFFO3NCQUVsRSw0RUFBQ0M7Z0JBQ0NDLEtBQUk7Z0JBQ0pDLFdBQVU7Ozs7Ozs7Ozs7O0lBS2hCLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ2xCLCtEQUFRQTtZQUNQbUIsY0FBYztZQUNkQyxZQUFZO1lBQ1pDLGNBQWM7WUFDZEMsaUJBQWlCLENBQUNDLGdCQUFnQkMsU0FBU0MsUUFDekNELHlCQUFXLDhEQUFDcEI7b0JBQWdCRyxTQUFTZ0I7O1lBRXZDRyxpQkFBaUIsQ0FBQ0gsZ0JBQWdCSSxTQUFTRixRQUN6Q0UseUJBQVcsOERBQUNYO29CQUFnQlQsU0FBU2dCOztzQkFHdENwQixTQUNFeUIsTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLFFBQVEsS0FBSyxNQUFNLHNEQUFzRDthQUNyR0MsR0FBRyxDQUFDLENBQUNGLHdCQUNKLDhEQUFDRztvQkFBRUMsTUFBTUosUUFBUUssSUFBSTs4QkFDbkIsNEVBQUNoQjt3QkFBSUgsV0FBVTs7MENBQ2IsOERBQUNvQjtnQ0FBRXBCLFdBQVcsb0NBQXFELE9BQWpCZCw4Q0FBTUEsQ0FBQ2MsU0FBUzswQ0FBS2MsUUFBUU8sSUFBSTs7Ozs7OzBDQUNuRiw4REFBQ2xCO2dDQUFJSCxXQUFVOzBDQUNiLDRFQUFDRjtvQ0FDQ0MsS0FBS2UsUUFBUVEsS0FBSztvQ0FDbEJDLEtBQUk7b0NBQ0p2QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzttQkFQVWMsUUFBUUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JwRDtLQXhEd0JoQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzPzI3YjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSAnLi4vYXBwL2ZvbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNwb25zaXZlQ2Fyb3VzZWwoeyBwcm9qZWN0cyB9KSB7XG4gIC8vIEN1c3RvbWl6ZWQgYXJyb3cgY29tcG9uZW50IGZvciB0aGUgcHJldmlvdXMgc2xpZGVcbiAgY29uc3QgQ3VzdG9tUHJldkFycm93ID0gKHByb3BzKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IDI1MCwgdG9wOiBcIjEwMCVcIiwgekluZGV4OiAyIH19XG4gICAgPlxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Fycm93LWxlZnQuc3ZnXCIgY2xhc3NOYW1lPVwidy02IGgtNiBtZDpoLTEyIG1kOnctMTIgb2JqZWN0LWNvbnRhaW4gcHgtNVwiIC8+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgLy8gQ3VzdG9taXplZCBhcnJvdyBjb21wb25lbnQgZm9yIHRoZSBuZXh0IHNsaWRlXG4gIGNvbnN0IEN1c3RvbU5leHRBcnJvdyA9IChwcm9wcykgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMjUwLCB0b3A6IFwiMTAwJVwiLCB6SW5kZXg6IDIgfX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvYXJyb3ctcmlnaHQuc3ZnXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBtZDpoLTEyIG1kOnctMTIgb2JqZWN0LWNvbnRhaW4gcHgtNVwiXG4gICAgICAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBzaG93SW5kaWNhdG9yc1xuICAgICAgICBzaG93QXJyb3dzPXt0cnVlfVxuICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XG4gICAgICAgIHJlbmRlckFycm93UHJldj17KG9uQ2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbCkgPT5cbiAgICAgICAgICBoYXNQcmV2ICYmIDxDdXN0b21QcmV2QXJyb3cgb25DbGljaz17b25DbGlja0hhbmRsZXJ9IC8+XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyQXJyb3dOZXh0PXsob25DbGlja0hhbmRsZXIsIGhhc05leHQsIGxhYmVsKSA9PlxuICAgICAgICAgIGhhc05leHQgJiYgPEN1c3RvbU5leHRBcnJvdyBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7cHJvamVjdHNcbiAgICAgICAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmZlYXR1cmVkID09PSB0cnVlKSAvLyBGaWx0ZXIgcHJvamVjdHMgd2l0aCB0aGUgJ2ZlYXR1cmVkJyBrZXkgc2V0IHRvIHRydWVcbiAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0Lmxpbmt9IGtleT17cHJvamVjdC5saW5rfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2NrdXAtd2luZG93IGJnLXNoaXAtY292ZS0xMDAgYm9yZGVyIGJvcmRlci1iYXNlLTEwMCBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgLW10LTUgbWItMiB1cHBlcmNhc2UgJHtwcm9tcHQuY2xhc3NOYW1lfWB9Pntwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTMgYm9yZGVyLXQgYm9yZGVyLWJhc2UtMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJwcm9tcHQiLCJSZXNwb25zaXZlQ2Fyb3VzZWwiLCJwcm9qZWN0cyIsIkN1c3RvbVByZXZBcnJvdyIsInByb3BzIiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiekluZGV4IiwiaW1nIiwic3JjIiwiY2xhc3NOYW1lIiwiQ3VzdG9tTmV4dEFycm93IiwicmlnaHQiLCJkaXYiLCJzaG93SW5kaWNhdG9ycyIsInNob3dBcnJvd3MiLCJpbmZpbml0ZUxvb3AiLCJyZW5kZXJBcnJvd1ByZXYiLCJvbkNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbCIsInJlbmRlckFycm93TmV4dCIsImhhc05leHQiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiZmVhdHVyZWQiLCJtYXAiLCJhIiwiaHJlZiIsImxpbmsiLCJwIiwibmFtZSIsImltYWdlIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Carousel.js\n"));

/***/ })

});