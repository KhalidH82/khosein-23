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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResponsiveCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var _app_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/fonts */ \"(app-pages-browser)/./app/fonts.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction ResponsiveCarousel(param) {\n    let { projects } = param;\n    // Customized arrow component for the previous slide\n    const CustomPrevArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            style: {\n                position: \"absolute\",\n                left: -75,\n                top: \"50%\",\n                zIndex: 2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/arrow-left.svg\",\n                className: \"h-12 w-12 object-contain px-5\"\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this);\n    // Customized arrow component for the next slide\n    const CustomNextArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            style: {\n                position: \"absolute\",\n                right: -75,\n                top: \"50%\",\n                zIndex: 2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/arrow-right.svg\",\n                className: \"h-12 w-12 object-contain px-5\"\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            showIndicators: true,\n            showArrows: true,\n            infiniteLoop: true,\n            renderArrowPrev: (onClickHandler, hasPrev, label)=>hasPrev && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomPrevArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            renderArrowNext: (onClickHandler, hasNext, label)=>hasNext && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomNextArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            children: projects.filter((project)=>project.featured === true) // Filter projects with the 'featured' key set to true\n            .map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.link,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mockup-window bg-ship-cove-100 border border-base-100 shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center -mt-5 mb-2 uppercase \".concat(_app_fonts__WEBPACK_IMPORTED_MODULE_3__.prompt.className),\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-4 py-3 border-t border-base-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.image,\n                                    alt: \"\",\n                                    className: \"h-full w-full object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                        lineNumber: 47,\n                        columnNumber: 15\n                    }, this)\n                }, project.link, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = ResponsiveCarousel;\nvar _c;\n$RefreshReg$(_c, \"ResponsiveCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3FEO0FBQ1U7QUFDMUI7QUFFdEIsU0FBU0UsbUJBQW1CLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjtJQUN6QyxvREFBb0Q7SUFDcEQsTUFBTUMsa0JBQWtCLENBQUNDLHNCQUN2Qiw4REFBQ0M7WUFDQ0MsU0FBU0YsTUFBTUUsT0FBTztZQUN0QkMsT0FBTztnQkFBRUMsVUFBVTtnQkFBWUMsTUFBTSxDQUFDO2dCQUFJQyxLQUFLO2dCQUFPQyxRQUFRO1lBQUU7c0JBRWhFLDRFQUFDQztnQkFBSUMsS0FBSTtnQkFBeUJDLFdBQVU7Ozs7Ozs7Ozs7O0lBSWhELGdEQUFnRDtJQUNoRCxNQUFNQyxrQkFBa0IsQ0FBQ1gsc0JBQ3ZCLDhEQUFDQztZQUNDQyxTQUFTRixNQUFNRSxPQUFPO1lBQ3RCQyxPQUFPO2dCQUFFQyxVQUFVO2dCQUFZUSxPQUFPLENBQUM7Z0JBQUlOLEtBQUs7Z0JBQU9DLFFBQVE7WUFBRTtzQkFFakUsNEVBQUNDO2dCQUNDQyxLQUFJO2dCQUNKQyxXQUFVOzs7Ozs7Ozs7OztJQUtoQixxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNsQiwrREFBUUE7WUFDUG1CLGNBQWM7WUFDZEMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLGlCQUFpQixDQUFDQyxnQkFBZ0JDLFNBQVNDLFFBQ3pDRCx5QkFBVyw4REFBQ3BCO29CQUFnQkcsU0FBU2dCOztZQUV2Q0csaUJBQWlCLENBQUNILGdCQUFnQkksU0FBU0YsUUFDekNFLHlCQUFXLDhEQUFDWDtvQkFBZ0JULFNBQVNnQjs7c0JBR3RDcEIsU0FDRXlCLE1BQU0sQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxRQUFRLEtBQUssTUFBTSxzREFBc0Q7YUFDckdDLEdBQUcsQ0FBQyxDQUFDRix3QkFDSiw4REFBQ0c7b0JBQUVDLE1BQU1KLFFBQVFLLElBQUk7OEJBQ25CLDRFQUFDaEI7d0JBQUlILFdBQVU7OzBDQUNiLDhEQUFDb0I7Z0NBQUVwQixXQUFXLG9DQUFxRCxPQUFqQmQsOENBQU1BLENBQUNjLFNBQVM7MENBQUtjLFFBQVFPLElBQUk7Ozs7OzswQ0FDbkYsOERBQUNsQjtnQ0FBSUgsV0FBVTswQ0FDYiw0RUFBQ0Y7b0NBQ0NDLEtBQUtlLFFBQVFRLEtBQUs7b0NBQ2xCQyxLQUFJO29DQUNKdkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBUFVjLFFBQVFLLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQWdCcEQ7S0F4RHdCaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcz8yN2I5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCB7IHByb21wdCB9IGZyb20gJy4uL2FwcC9mb250cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzcG9uc2l2ZUNhcm91c2VsKHsgcHJvamVjdHMgfSkge1xuICAvLyBDdXN0b21pemVkIGFycm93IGNvbXBvbmVudCBmb3IgdGhlIHByZXZpb3VzIHNsaWRlXG4gIGNvbnN0IEN1c3RvbVByZXZBcnJvdyA9IChwcm9wcykgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAtNzUsIHRvcDogXCI1MCVcIiwgekluZGV4OiAyIH19XG4gICAgPlxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Fycm93LWxlZnQuc3ZnXCIgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIG9iamVjdC1jb250YWluIHB4LTVcIiAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIC8vIEN1c3RvbWl6ZWQgYXJyb3cgY29tcG9uZW50IGZvciB0aGUgbmV4dCBzbGlkZVxuICBjb25zdCBDdXN0b21OZXh0QXJyb3cgPSAocHJvcHMpID0+IChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IC03NSwgdG9wOiBcIjUwJVwiLCB6SW5kZXg6IDIgfX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvYXJyb3ctcmlnaHQuc3ZnXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIG9iamVjdC1jb250YWluIHB4LTVcIlxuICAgICAgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgc2hvd0luZGljYXRvcnNcbiAgICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cbiAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxuICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhvbkNsaWNrSGFuZGxlciwgaGFzUHJldiwgbGFiZWwpID0+XG4gICAgICAgICAgaGFzUHJldiAmJiA8Q3VzdG9tUHJldkFycm93IG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSAvPlxuICAgICAgICB9XG4gICAgICAgIHJlbmRlckFycm93TmV4dD17KG9uQ2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbCkgPT5cbiAgICAgICAgICBoYXNOZXh0ICYmIDxDdXN0b21OZXh0QXJyb3cgb25DbGljaz17b25DbGlja0hhbmRsZXJ9IC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge3Byb2plY3RzXG4gICAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5mZWF0dXJlZCA9PT0gdHJ1ZSkgLy8gRmlsdGVyIHByb2plY3RzIHdpdGggdGhlICdmZWF0dXJlZCcga2V5IHNldCB0byB0cnVlXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5saW5rfSBrZXk9e3Byb2plY3QubGlua30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwLXdpbmRvdyBiZy1zaGlwLWNvdmUtMTAwIGJvcmRlciBib3JkZXItYmFzZS0xMDAgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIC1tdC01IG1iLTIgdXBwZXJjYXNlICR7cHJvbXB0LmNsYXNzTmFtZX1gfT57cHJvamVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHgtNCBweS0zIGJvcmRlci10IGJvcmRlci1iYXNlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwicHJvbXB0IiwiUmVzcG9uc2l2ZUNhcm91c2VsIiwicHJvamVjdHMiLCJDdXN0b21QcmV2QXJyb3ciLCJwcm9wcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInpJbmRleCIsImltZyIsInNyYyIsImNsYXNzTmFtZSIsIkN1c3RvbU5leHRBcnJvdyIsInJpZ2h0IiwiZGl2Iiwic2hvd0luZGljYXRvcnMiLCJzaG93QXJyb3dzIiwiaW5maW5pdGVMb29wIiwicmVuZGVyQXJyb3dQcmV2Iiwib25DbGlja0hhbmRsZXIiLCJoYXNQcmV2IiwibGFiZWwiLCJyZW5kZXJBcnJvd05leHQiLCJoYXNOZXh0IiwiZmlsdGVyIiwicHJvamVjdCIsImZlYXR1cmVkIiwibWFwIiwiYSIsImhyZWYiLCJsaW5rIiwicCIsIm5hbWUiLCJpbWFnZSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Carousel.js\n"));

/***/ })

});