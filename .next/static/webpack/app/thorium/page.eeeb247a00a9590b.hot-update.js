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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResponsiveCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction ResponsiveCarousel(param) {\n    let { projects } = param;\n    // Customized arrow component for the previous slide\n    const CustomPrevArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            style: {\n                position: \"absolute\",\n                left: -50,\n                top: \"50%\",\n                zIndex: 2\n            },\n            children: \"Previous\"\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, this);\n    // Customized arrow component for the next slide\n    const CustomNextArrow = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: props.onClick,\n            style: {\n                position: \"absolute\",\n                right: 10,\n                top: \"50%\",\n                zIndex: 2\n            },\n            children: \"Next\"\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            showIndicators: true,\n            showArrows: true,\n            infiniteLoop: true,\n            className: \"mx-auto overflow-visible\",\n            renderArrowPrev: (onClickHandler, hasPrev, label)=>hasPrev && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomPrevArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            renderArrowNext: (onClickHandler, hasNext, label)=>hasNext && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomNextArrow, {\n                    onClick: onClickHandler\n                }, void 0, false, void 0, void 0),\n            children: projects.filter((project)=>project.featured === true) // Filter projects with the 'featured' key set to true\n            .map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.link,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mockup-window bg-ship-cove-100 border border-base-100 shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center -mt-5 mb-2\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center px-4 py-3 border-t border-base-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.image,\n                                    alt: \"\",\n                                    className: \"h-full w-full object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                        lineNumber: 44,\n                        columnNumber: 15\n                    }, this)\n                }, project.link, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/khalidhosein/Desktop/Projects/khosein-23/components/Carousel.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = ResponsiveCarousel;\nvar _c;\n$RefreshReg$(_c, \"ResponsiveCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDcUQ7QUFDVTtBQUVoRCxTQUFTQyxtQkFBbUIsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaO0lBQ3pDLG9EQUFvRDtJQUNwRCxNQUFNQyxrQkFBa0IsQ0FBQ0Msc0JBQ3ZCLDhEQUFDQztZQUNDQyxTQUFTRixNQUFNRSxPQUFPO1lBQ3RCQyxPQUFPO2dCQUFFQyxVQUFVO2dCQUFZQyxNQUFNLENBQUM7Z0JBQUlDLEtBQUs7Z0JBQU9DLFFBQVE7WUFBRTtzQkFDakU7Ozs7OztJQUtILGdEQUFnRDtJQUNoRCxNQUFNQyxrQkFBa0IsQ0FBQ1Isc0JBQ3ZCLDhEQUFDQztZQUNDQyxTQUFTRixNQUFNRSxPQUFPO1lBQ3RCQyxPQUFPO2dCQUFFQyxVQUFVO2dCQUFZSyxPQUFPO2dCQUFJSCxLQUFLO2dCQUFPQyxRQUFRO1lBQUU7c0JBQ2pFOzs7Ozs7SUFLSCxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNkLCtEQUFRQTtZQUNQZSxjQUFjO1lBQ2RDLFlBQVk7WUFDWkMsY0FBYztZQUNkQyxXQUFVO1lBQ1ZDLGlCQUFpQixDQUFDQyxnQkFBZ0JDLFNBQVNDLFFBQ3pDRCx5QkFBVyw4REFBQ2xCO29CQUFnQkcsU0FBU2M7O1lBRXZDRyxpQkFBaUIsQ0FBQ0gsZ0JBQWdCSSxTQUFTRixRQUN6Q0UseUJBQVcsOERBQUNaO29CQUFnQk4sU0FBU2M7O3NCQUd0Q2xCLFNBQ0V1QixNQUFNLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsUUFBUSxLQUFLLE1BQU0sc0RBQXNEO2FBQ3JHQyxHQUFHLENBQUMsQ0FBQ0Ysd0JBQ0osOERBQUNHO29CQUFFQyxNQUFNSixRQUFRSyxJQUFJOzhCQUNuQiw0RUFBQ2pCO3dCQUFJSSxXQUFVOzswQ0FDYiw4REFBQ2M7Z0NBQUVkLFdBQVU7MENBQTBCUSxRQUFRTyxJQUFJOzs7Ozs7MENBQ25ELDhEQUFDbkI7Z0NBQUlJLFdBQVU7MENBQ2IsNEVBQUNnQjtvQ0FDQ0MsS0FBS1QsUUFBUVUsS0FBSztvQ0FDbEJDLEtBQUk7b0NBQ0puQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzttQkFQVVEsUUFBUUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JwRDtLQXREd0I5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzPzI3YjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNwb25zaXZlQ2Fyb3VzZWwoeyBwcm9qZWN0cyB9KSB7XG4gIC8vIEN1c3RvbWl6ZWQgYXJyb3cgY29tcG9uZW50IGZvciB0aGUgcHJldmlvdXMgc2xpZGVcbiAgY29uc3QgQ3VzdG9tUHJldkFycm93ID0gKHByb3BzKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IC01MCwgdG9wOiBcIjUwJVwiLCB6SW5kZXg6IDIgfX1cbiAgICA+XG4gICAgICBQcmV2aW91c1xuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIC8vIEN1c3RvbWl6ZWQgYXJyb3cgY29tcG9uZW50IGZvciB0aGUgbmV4dCBzbGlkZVxuICBjb25zdCBDdXN0b21OZXh0QXJyb3cgPSAocHJvcHMpID0+IChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IDEwLCB0b3A6IFwiNTAlXCIsIHpJbmRleDogMiB9fVxuICAgID5cbiAgICAgIE5leHRcbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgc2hvd0luZGljYXRvcnNcbiAgICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cbiAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxuICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG92ZXJmbG93LXZpc2libGVcIlxuICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhvbkNsaWNrSGFuZGxlciwgaGFzUHJldiwgbGFiZWwpID0+XG4gICAgICAgICAgaGFzUHJldiAmJiA8Q3VzdG9tUHJldkFycm93IG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSAvPlxuICAgICAgICB9XG4gICAgICAgIHJlbmRlckFycm93TmV4dD17KG9uQ2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbCkgPT5cbiAgICAgICAgICBoYXNOZXh0ICYmIDxDdXN0b21OZXh0QXJyb3cgb25DbGljaz17b25DbGlja0hhbmRsZXJ9IC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge3Byb2plY3RzXG4gICAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5mZWF0dXJlZCA9PT0gdHJ1ZSkgLy8gRmlsdGVyIHByb2plY3RzIHdpdGggdGhlICdmZWF0dXJlZCcga2V5IHNldCB0byB0cnVlXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5saW5rfSBrZXk9e3Byb2plY3QubGlua30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwLXdpbmRvdyBiZy1zaGlwLWNvdmUtMTAwIGJvcmRlciBib3JkZXItYmFzZS0xMDAgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIC1tdC01IG1iLTJcIj57cHJvamVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHgtNCBweS0zIGJvcmRlci10IGJvcmRlci1iYXNlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiUmVzcG9uc2l2ZUNhcm91c2VsIiwicHJvamVjdHMiLCJDdXN0b21QcmV2QXJyb3ciLCJwcm9wcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInpJbmRleCIsIkN1c3RvbU5leHRBcnJvdyIsInJpZ2h0IiwiZGl2Iiwic2hvd0luZGljYXRvcnMiLCJzaG93QXJyb3dzIiwiaW5maW5pdGVMb29wIiwiY2xhc3NOYW1lIiwicmVuZGVyQXJyb3dQcmV2Iiwib25DbGlja0hhbmRsZXIiLCJoYXNQcmV2IiwibGFiZWwiLCJyZW5kZXJBcnJvd05leHQiLCJoYXNOZXh0IiwiZmlsdGVyIiwicHJvamVjdCIsImZlYXR1cmVkIiwibWFwIiwiYSIsImhyZWYiLCJsaW5rIiwicCIsIm5hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Carousel.js\n"));

/***/ })

});