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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResponsiveCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var _app_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/fonts */ \"(app-pages-browser)/./app/fonts.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction ResponsiveCarousel(param) {\n    let { projects } = param;\n    // Customized arrow component for the previous slide\n    const CustomPrevArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            className: \"custom-btn-left\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/arrow-left.svg\",\n                className: \"w-6 h-6 sm:h-12 sm:w-12 object-contain px-5\"\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this);\n    // Customized arrow component for the next slide\n    const CustomNextArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            className: \"custom-btn-right\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/arrow-right.svg\",\n                className: \"w-6 h-6 sm:h-12 sm:w-12 object-contain px-5\"\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            showIndicators: true,\n            showArrows: true,\n            infiniteLoop: true,\n            showThumbs: false,\n            renderArrowPrev: (onClickHandler, hasPrev, label)=>hasPrev && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomPrevArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            renderArrowNext: (onClickHandler, hasNext, label)=>hasNext && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomNextArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            children: projects.filter((project)=>project.featured === true) // Filter projects with the 'featured' key set to true\n            .map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.link,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mockup-window bg-ship-cove-100 border border-base-100 shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center -mt-5 mb-2 uppercase \".concat(_app_fonts__WEBPACK_IMPORTED_MODULE_3__.prompt.className),\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-4 py-3 border-t border-base-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.image,\n                                    alt: \"\",\n                                    className: \"h-full w-full object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                        lineNumber: 48,\n                        columnNumber: 15\n                    }, this)\n                }, project.link, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = ResponsiveCarousel;\nvar _c;\n$RefreshReg$(_c, \"ResponsiveCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3FEO0FBQ1U7QUFDMUI7QUFFdEIsU0FBU0UsbUJBQW1CLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjtJQUN6QyxvREFBb0Q7SUFDcEQsTUFBTUMsa0JBQWtCLENBQUNDLHNCQUN2Qiw4REFBQ0M7WUFDQ0MsU0FBU0YsTUFBTUUsT0FBTztZQUN0QkMsV0FBVTtzQkFFViw0RUFBQ0M7Z0JBQUlDLEtBQUk7Z0JBQXlCRixXQUFVOzs7Ozs7Ozs7OztJQUloRCxnREFBZ0Q7SUFDaEQsTUFBTUcsa0JBQWtCLENBQUNOLHNCQUN2Qiw4REFBQ0M7WUFDQ0MsU0FBU0YsTUFBTUUsT0FBTztZQUN0QkMsV0FBVTtzQkFFViw0RUFBQ0M7Z0JBQ0NDLEtBQUk7Z0JBQ0pGLFdBQVU7Ozs7Ozs7Ozs7O0lBS2hCLHFCQUNFLDhEQUFDSTtrQkFDQyw0RUFBQ1osK0RBQVFBO1lBQ1BhLGNBQWM7WUFDZEMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLFlBQVk7WUFDWkMsaUJBQWlCLENBQUNDLGdCQUFnQkMsU0FBU0MsUUFDekNELHlCQUFXLDhEQUFDZjtvQkFBZ0JHLFNBQVNXOztZQUV2Q0csaUJBQWlCLENBQUNILGdCQUFnQkksU0FBU0YsUUFDekNFLHlCQUFXLDhEQUFDWDtvQkFBZ0JKLFNBQVNXOztzQkFHdENmLFNBQ0VvQixNQUFNLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsUUFBUSxLQUFLLE1BQU0sc0RBQXNEO2FBQ3JHQyxHQUFHLENBQUMsQ0FBQ0Ysd0JBQ0osOERBQUNHO29CQUFFQyxNQUFNSixRQUFRSyxJQUFJOzhCQUNuQiw0RUFBQ2pCO3dCQUFJSixXQUFVOzswQ0FDYiw4REFBQ3NCO2dDQUFFdEIsV0FBVyxvQ0FBcUQsT0FBakJQLDhDQUFNQSxDQUFDTyxTQUFTOzBDQUFLZ0IsUUFBUU8sSUFBSTs7Ozs7OzBDQUNuRiw4REFBQ25CO2dDQUFJSixXQUFVOzBDQUNiLDRFQUFDQztvQ0FDQ0MsS0FBS2MsUUFBUVEsS0FBSztvQ0FDbEJDLEtBQUk7b0NBQ0p6QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzttQkFQVWdCLFFBQVFLLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQWdCcEQ7S0F6RHdCM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcz8yN2I5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCB7IHByb21wdCB9IGZyb20gJy4uL2FwcC9mb250cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzcG9uc2l2ZUNhcm91c2VsKHsgcHJvamVjdHMgfSkge1xuICAvLyBDdXN0b21pemVkIGFycm93IGNvbXBvbmVudCBmb3IgdGhlIHByZXZpb3VzIHNsaWRlXG4gIGNvbnN0IEN1c3RvbVByZXZBcnJvdyA9IChwcm9wcykgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBjbGFzc05hbWU9XCJjdXN0b20tYnRuLWxlZnRcIlxuICAgID5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hcnJvdy1sZWZ0LnN2Z1wiIGNsYXNzTmFtZT1cInctNiBoLTYgc206aC0xMiBzbTp3LTEyIG9iamVjdC1jb250YWluIHB4LTVcIiAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIC8vIEN1c3RvbWl6ZWQgYXJyb3cgY29tcG9uZW50IGZvciB0aGUgbmV4dCBzbGlkZVxuICBjb25zdCBDdXN0b21OZXh0QXJyb3cgPSAocHJvcHMpID0+IChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWJ0bi1yaWdodFwiXG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvaW1hZ2VzL2Fycm93LXJpZ2h0LnN2Z1wiXG4gICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgc206aC0xMiBzbTp3LTEyIG9iamVjdC1jb250YWluIHB4LTVcIlxuICAgICAgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgc2hvd0luZGljYXRvcnNcbiAgICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cbiAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cbiAgICAgICAgcmVuZGVyQXJyb3dQcmV2PXsob25DbGlja0hhbmRsZXIsIGhhc1ByZXYsIGxhYmVsKSA9PlxuICAgICAgICAgIGhhc1ByZXYgJiYgPEN1c3RvbVByZXZBcnJvdyBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gLz5cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJBcnJvd05leHQ9eyhvbkNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWwpID0+XG4gICAgICAgICAgaGFzTmV4dCAmJiA8Q3VzdG9tTmV4dEFycm93IG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSAvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHtwcm9qZWN0c1xuICAgICAgICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZmVhdHVyZWQgPT09IHRydWUpIC8vIEZpbHRlciBwcm9qZWN0cyB3aXRoIHRoZSAnZmVhdHVyZWQnIGtleSBzZXQgdG8gdHJ1ZVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QubGlua30ga2V5PXtwcm9qZWN0Lmxpbmt9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vY2t1cC13aW5kb3cgYmctc2hpcC1jb3ZlLTEwMCBib3JkZXIgYm9yZGVyLWJhc2UtMTAwIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciAtbXQtNSBtYi0yIHVwcGVyY2FzZSAke3Byb21wdC5jbGFzc05hbWV9YH0+e3Byb2plY3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB4LTQgcHktMyBib3JkZXItdCBib3JkZXItYmFzZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb21wdCIsIlJlc3BvbnNpdmVDYXJvdXNlbCIsInByb2plY3RzIiwiQ3VzdG9tUHJldkFycm93IiwicHJvcHMiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiQ3VzdG9tTmV4dEFycm93IiwiZGl2Iiwic2hvd0luZGljYXRvcnMiLCJzaG93QXJyb3dzIiwiaW5maW5pdGVMb29wIiwic2hvd1RodW1icyIsInJlbmRlckFycm93UHJldiIsIm9uQ2xpY2tIYW5kbGVyIiwiaGFzUHJldiIsImxhYmVsIiwicmVuZGVyQXJyb3dOZXh0IiwiaGFzTmV4dCIsImZpbHRlciIsInByb2plY3QiLCJmZWF0dXJlZCIsIm1hcCIsImEiLCJocmVmIiwibGluayIsInAiLCJuYW1lIiwiaW1hZ2UiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Carousel.js\n"));

/***/ })

});