"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/Work.jsx":
/*!*****************************!*\
  !*** ./components/Work.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thorium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thorium */ \"(app-client)/./components/Thorium.jsx\");\n/* harmony import */ var _TMarcom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TMarcom */ \"(app-client)/./components/TMarcom.jsx\");\n/* harmony import */ var _app_constants_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/constants/data */ \"(app-client)/./app/constants/data.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Work = ()=>{\n    _s();\n    const [company, setcompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSwitch = (x)=>{\n        setcompany(x);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-4 mx-auto pb-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Current Work.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full flex flex-col lg:flex-row gap-10 justify-center items-center py-16\",\n                    children: _app_constants_data__WEBPACK_IMPORTED_MODULE_4__.experiences.map((experience)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card w-full h-[500px] bg-base-100 lg:w-1/2 text-ship-cove-800\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"card-title\",\n                                        children: experience.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: experience.company_name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: experience.date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-5\",\n                                        children: \"Technologies\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap gap-2\",\n                                        children: experience.technologies.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"badge badge-outline p-3 hover:bg-gradient-to-br hover:from-ship-cove-400 hover:to-ship-cove-600 hover:border-white hover:text-white\",\n                                                children: tech\n                                            }, tech, false, {\n                                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-5\",\n                                        children: \"Productivity\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap gap-2\",\n                                        children: experience.productivity.map((tool)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"badge badge-outline p-3 hover:bg-gradient-to-br hover:from-ship-cove-400 hover:to-ship-cove-600 hover:border-white hover:text-white\",\n                                                children: tool\n                                            }, tool, false, {\n                                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-actions justify-end mt-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn bg-gradient-to-b from-ship-cove-400 to-ship-cove-600 text-white border-none\",\n                                            onClick: ()=>handleSwitch(experience.company_name),\n                                            children: \"View Client Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, undefined)\n                        }, experience.company_name, false, {\n                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                company === \"T2 Marketing Communications\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TMarcom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined) : company === \"Thorium Digital\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Thorium__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/Work.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Work, \"O/zGZEWYldMrrWm0AjqiccXD33Q=\");\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Xb3JrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUM7QUFDUDtBQUNEO0FBQ3FCO0FBRXBELE1BQU1LLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1PLGVBQWdCLENBQUNDO1FBQ3JCRixXQUFXRTtJQUNiO0lBRUEscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7O3NDQUNDLDhEQUFDRTs7Ozs7c0NBQ0QsOERBQUNDO3NDQUFHOzs7Ozs7Ozs7Ozs7OEJBRU4sOERBQUNIO29CQUFJQyxXQUFVOzhCQUNaUCw0REFBV0EsQ0FBQ1UsSUFBSSxDQUFDQywyQkFDaEIsOERBQUNMOzRCQUNDQyxXQUFVO3NDQUdWLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUFjSSxXQUFXQzs7Ozs7O2tEQUN2Qyw4REFBQ0o7a0RBQUdHLFdBQVdFOzs7Ozs7a0RBQ2YsOERBQUNMO2tEQUFHRyxXQUFXRzs7Ozs7O2tEQUNmLDhEQUFDTjt3Q0FBRUQsV0FBVTtrREFBTzs7Ozs7O2tEQUNwQiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1pJLFdBQVdJLGFBQWFMLElBQUksQ0FBQ00scUJBQzVCLDhEQUFDVjtnREFDQ0MsV0FBVTswREFHVFM7K0NBRklBOzs7Ozs7Ozs7O2tEQU1YLDhEQUFDUjt3Q0FBRUQsV0FBVTtrREFBTzs7Ozs7O2tEQUNwQiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1pJLFdBQVdNLGFBQWFQLElBQUksQ0FBQ1EscUJBQzVCLDhEQUFDWjtnREFDQ0MsV0FBVTswREFHVFc7K0NBRklBOzs7Ozs7Ozs7O2tEQU1YLDhEQUFDWjt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ1k7NENBQ0NaLFdBQVU7NENBQ1ZhLFNBQVMsSUFBTWhCLGFBQWFPLFdBQVdFO3NEQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBaENBRixXQUFXRTs7Ozs7Ozs7OztnQkF3Q3JCWCxZQUFZLDhDQUNYLDhEQUFDSCxnREFBT0E7Ozs7Z0NBQ05HLFlBQVksa0NBQ2QsOERBQUNKLGdEQUFPQTs7OztnQ0FDTjs7Ozs7Ozs7Ozs7O0FBSVo7R0FsRU1HO0tBQUFBO0FBb0VOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29yay5qc3g/MDk3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRob3JpdW0gZnJvbSAnLi9UaG9yaXVtJztcbmltcG9ydCBUTWFyY29tIGZyb20gJy4vVE1hcmNvbSdcbmltcG9ydCB7IGV4cGVyaWVuY2VzIH0gZnJvbSBcIi4uL2FwcC9jb25zdGFudHMvZGF0YVwiO1xuXG5jb25zdCBXb3JrID0gKCkgPT4ge1xuICBjb25zdCBbY29tcGFueSwgc2V0Y29tcGFueV0gPSB1c2VTdGF0ZShudWxsKVxuICBcbiAgY29uc3QgaGFuZGxlU3dpdGNoICA9ICh4KSA9PiB7XG4gICAgc2V0Y29tcGFueSh4KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIHBiLTE2XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgIDxoMj5DdXJyZW50IFdvcmsuPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktMTZcIj5cbiAgICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKChleHBlcmllbmNlKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgdy1mdWxsIGgtWzUwMHB4XSBiZy1iYXNlLTEwMCBsZzp3LTEvMiB0ZXh0LXNoaXAtY292ZS04MDBcIlxuICAgICAgICAgICAgICBrZXk9e2V4cGVyaWVuY2UuY29tcGFueV9uYW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2V4cGVyaWVuY2UudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57ZXhwZXJpZW5jZS5jb21wYW55X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntleHBlcmllbmNlLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTVcIj5UZWNobm9sb2dpZXM8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UudGVjaG5vbG9naWVzLm1hcCgodGVjaCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utb3V0bGluZSBwLTMgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgaG92ZXI6ZnJvbS1zaGlwLWNvdmUtNDAwIGhvdmVyOnRvLXNoaXAtY292ZS02MDAgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGVjaH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTVcIj5Qcm9kdWN0aXZpdHk8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UucHJvZHVjdGl2aXR5Lm1hcCgodG9vbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utb3V0bGluZSBwLTMgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgaG92ZXI6ZnJvbS1zaGlwLWNvdmUtNDAwIGhvdmVyOnRvLXNoaXAtY292ZS02MDAgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dG9vbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0b29sfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGp1c3RpZnktZW5kIG10LTEwXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBiZy1ncmFkaWVudC10by1iIGZyb20tc2hpcC1jb3ZlLTQwMCB0by1zaGlwLWNvdmUtNjAwIHRleHQtd2hpdGUgYm9yZGVyLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTd2l0Y2goZXhwZXJpZW5jZS5jb21wYW55X25hbWUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IENsaWVudCBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Y29tcGFueSA9PT0gXCJUMiBNYXJrZXRpbmcgQ29tbXVuaWNhdGlvbnNcIiA/IChcbiAgICAgICAgICA8VE1hcmNvbSAvPlxuICAgICAgICApIDogY29tcGFueSA9PT0gXCJUaG9yaXVtIERpZ2l0YWxcIiA/IChcbiAgICAgICAgICA8VGhvcml1bSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUaG9yaXVtIiwiVE1hcmNvbSIsImV4cGVyaWVuY2VzIiwiV29yayIsImNvbXBhbnkiLCJzZXRjb21wYW55IiwiaGFuZGxlU3dpdGNoIiwieCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJoMiIsIm1hcCIsImV4cGVyaWVuY2UiLCJ0aXRsZSIsImNvbXBhbnlfbmFtZSIsImRhdGUiLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNoIiwicHJvZHVjdGl2aXR5IiwidG9vbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Work.jsx\n"));

/***/ })

});