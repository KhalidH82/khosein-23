"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b4f78d592028\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI0Zjc4ZDU5MjAyOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_constants_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/constants/data */ \"(app-client)/./app/constants/data.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setScrolled(window.scrollY > 0);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar fixed top-0 left-0 w-full py-2 transition-colors duration-100 ease-in-out z-50 \".concat(scrolled ? \"bg-ship-cove-600 text-ship-cove-100\" : \"bg-transparent text-ship-cove-600\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"logo\",\n                        href: \"/\",\n                        target: \"_self\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/1.png\",\n                            width: 50,\n                            height: 50,\n                            alt: \"Khalid Hosein\"\n                        }, void 0, false, {\n                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                tabIndex: 0,\n                                className: \"btn btn-ghost lg:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"#4b5588\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"#4b5588\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M4 6h16M4 12h8m-8 6h16\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                tabIndex: 0,\n                                className: \"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold text-base tracking-tight\",\n                                children: [\n                                    _app_constants_data__WEBPACK_IMPORTED_MODULE_3__.navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\".concat(link.id),\n                                                    className: \"link-underline link-underline-black border-none hover:bg-transparent\",\n                                                    children: link.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, link.id, true, {\n                                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/K.Hosein.pdf\",\n                                            alt: \"Khalid Hosein resume\",\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"Resume\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center hidden lg:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu menu-horizontal px-1 uppercase font-bold text-base tracking-tight\",\n                    children: [\n                        _app_constants_data__WEBPACK_IMPORTED_MODULE_3__.navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\".concat(link.id),\n                                        className: \"link-underline link-underline-black border-none hover:bg-transparent\",\n                                        children: link.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, link.id, true, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/K.Hosein.pdf\",\n                                alt: \"Khalid Hosein resume\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"Resume\"\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end gap-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(scrolled ? \"hidden\" : \"block\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:flex hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat-bubble\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Hello! It's nice to meet you!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"avatar online\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-full hover:ring-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"rounded-full\",\n                                        src: \"/images/khavatar.png\",\n                                        width: 50,\n                                        height: 200,\n                                        alt: \"Khalid Hosein\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"tQtW9FyKD+Ut/6k+f0BCbABprL4=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQUNrQjtBQUNiO0FBQ2tCO0FBRWpELE1BQU1LLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGVBQWU7WUFDbkJELFlBQVlFLE9BQU9DLFVBQVU7UUFDL0I7UUFFQUQsT0FBT0UsaUJBQWlCLFVBQVVIO1FBRWxDLE9BQU87WUFDTEMsT0FBT0csb0JBQW9CLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVcseUZBSVYsT0FIQ1IsV0FDSSx3Q0FDQTs7MEJBR04sOERBQUNPO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVU7d0JBQU9FLE1BQUs7d0JBQUlDLFFBQU87a0NBQ2xDLDRFQUFDZCxtREFBS0E7NEJBQ0plLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDUjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFNQyxVQUFVO2dDQUFHVCxXQUFVOzBDQUM1Qiw0RUFBQ1U7b0NBQ0NDLE9BQU07b0NBQ05YLFdBQVU7b0NBQ1ZZLE1BQUs7b0NBQ0xDLFNBQVE7b0NBQ1JDLFFBQU87OENBRVAsNEVBQUNDO3dDQUNDQyxlQUFjO3dDQUNkQyxnQkFBZTt3Q0FDZkMsYUFBWTt3Q0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJUiw4REFBQ0M7Z0NBQ0NYLFVBQVU7Z0NBQ1ZULFdBQVU7O29DQUVUVix5REFBUUEsQ0FBQytCLElBQUksQ0FBQ0MscUJBQ2IsOERBQUNDOztnREFDRTs4REFDRCw4REFBQ3RCO29EQUNDQyxNQUFNLElBQVksT0FBUm9CLEtBQUtFO29EQUNmeEIsV0FBVTs4REFFVHNCLEtBQUtHOzs7Ozs7OzJDQU5ESCxLQUFLRTs7Ozs7a0RBVWhCLDhEQUFDRDtrREFDQyw0RUFBQ3RCOzRDQUNDQyxNQUFLOzRDQUNMSyxLQUFJOzRDQUNKSixRQUFPOzRDQUNQdUIsS0FBSTtzREFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1QsOERBQUMzQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ29CO29CQUFHcEIsV0FBVTs7d0JBQ1hWLHlEQUFRQSxDQUFDK0IsSUFBSSxDQUFDQyxxQkFDYiw4REFBQ0M7O29DQUNFO2tEQUNELDhEQUFDdEI7d0NBQ0NDLE1BQU0sSUFBWSxPQUFSb0IsS0FBS0U7d0NBQ2Z4QixXQUFVO2tEQUVUc0IsS0FBS0c7Ozs7Ozs7K0JBTkRILEtBQUtFOzs7OztzQ0FVaEIsOERBQUNEO3NDQUNDLDRFQUFDdEI7Z0NBQ0NDLE1BQUs7Z0NBQ0xLLEtBQUk7Z0NBQ0pKLFFBQU87Z0NBQ1B1QixLQUFJOzBDQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1QLDhEQUFDM0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFXLEdBQWlDLE9BQTlCUixXQUFXLFdBQVc7OEJBQ3ZDLDRFQUFDTzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQzJCO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdQLDhEQUFDNUI7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDWCxtREFBS0E7d0NBQ0pXLFdBQVU7d0NBQ1ZJLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBOUhNaEI7S0FBQUE7QUFnSU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4P2ZiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG5hdkxpbmtzIH0gZnJvbSBcIi4uL2FwcC9jb25zdGFudHMvZGF0YVwiO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgcHktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xMDAgZWFzZS1pbi1vdXQgei01MCAke1xuICAgICAgICBzY3JvbGxlZFxuICAgICAgICAgID8gXCJiZy1zaGlwLWNvdmUtNjAwIHRleHQtc2hpcC1jb3ZlLTEwMFwiXG4gICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IHRleHQtc2hpcC1jb3ZlLTYwMFwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIi9cIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy8xLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgYWx0PVwiS2hhbGlkIEhvc2VpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGxnOmhpZGRlblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjNGI1NTg4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiM0YjU1ODhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDhtLTggNmgxNlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51IG1lbnUtc20gZHJvcGRvd24tY29udGVudCBtdC0zIHotWzFdIHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MiB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtYmFzZSB0cmFja2luZy10aWdodFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtsaW5rLmlkfT5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtsaW5rLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLXVuZGVybGluZSBsaW5rLXVuZGVybGluZS1ibGFjayBib3JkZXItbm9uZSBob3ZlcjpiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9LLkhvc2Vpbi5wZGZcIlxuICAgICAgICAgICAgICAgIGFsdD1cIktoYWxpZCBIb3NlaW4gcmVzdW1lXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVzdW1lXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNlbnRlciBoaWRkZW4gbGc6ZmxleFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBtZW51LWhvcml6b250YWwgcHgtMSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtYmFzZSB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2xpbmsuaWR9PlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCMke2xpbmsuaWR9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLXVuZGVybGluZSBsaW5rLXVuZGVybGluZS1ibGFjayBib3JkZXItbm9uZSBob3ZlcjpiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL0suSG9zZWluLnBkZlwiXG4gICAgICAgICAgICAgIGFsdD1cIktoYWxpZCBIb3NlaW4gcmVzdW1lXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZCBnYXAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2Nyb2xsZWQgPyBcImhpZGRlblwiIDogXCJibG9ja1wifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleCBoaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdCBjaGF0LWVuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlXCI+XG4gICAgICAgICAgICAgICAgPHA+SGVsbG8hIEl0J3MgbmljZSB0byBtZWV0IHlvdSE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhciBvbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgaG92ZXI6cmluZy00XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9raGF2YXRhci5wbmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJLaGFsaWQgSG9zZWluXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIm5hdkxpbmtzIiwiTmF2QmFyIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJsYWJlbCIsInRhYkluZGV4Iiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJ1bCIsIm1hcCIsImxpbmsiLCJsaSIsImlkIiwidGl0bGUiLCJyZWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/NavBar.jsx\n"));

/***/ })

});