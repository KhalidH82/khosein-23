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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3470e676da85\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjM0NzBlNjc2ZGE4NVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_constants_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/constants/data */ \"(app-client)/./app/constants/data.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setScrolled(window.scrollY > 0);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar fixed top-0 left-0 w-full py-2 transition-colors duration-100 ease-in-out z-50 \".concat(scrolled ? \"bg-ship-cove-600 text-ship-cove-100\" : \"bg-transparent text-ship-cove-600\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"logo\",\n                        href: \"/\",\n                        target: \"_self\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/1.png\",\n                            width: 50,\n                            height: 50,\n                            alt: \"Khalid Hosein\"\n                        }, void 0, false, {\n                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                tabIndex: 0,\n                                className: \"btn btn-ghost lg:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"#4b5588\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M4 6h16M4 12h8m-8 6h16\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                tabIndex: 0,\n                                className: \"menu menu-sm dropdown-content flex flex-col gap-2 mt-3 z-[1] p-2 shadow bg-ship-cove-600 rounded-box w-52 uppercase font-bold text-base text-white tracking-tight\",\n                                children: [\n                                    _app_constants_data__WEBPACK_IMPORTED_MODULE_3__.navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\".concat(link.id),\n                                                    className: \"link-underline link-underline-black border-none hover:bg-transparent\",\n                                                    children: link.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, link.id, true, {\n                                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/K.Hosein.pdf\",\n                                            alt: \"Khalid Hosein resume\",\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"Resume\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center hidden lg:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu menu-horizontal px-1 uppercase font-bold text-base tracking-tight\",\n                    children: [\n                        _app_constants_data__WEBPACK_IMPORTED_MODULE_3__.navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\".concat(link.id),\n                                        className: \"link-underline link-underline-black border-none hover:bg-transparent\",\n                                        children: link.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, link.id, true, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/K.Hosein.pdf\",\n                                alt: \"Khalid Hosein resume\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"Resume\"\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end gap-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(scrolled ? \"hidden\" : \"block\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:flex hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat-bubble\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Hello! It's nice to meet you!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"avatar online\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hover:ring-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"rounded-full\",\n                                        src: \"/images/khavatar.png\",\n                                        width: 60,\n                                        height: 60,\n                                        alt: \"Khalid Hosein\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/khalidhosein/Desktop/khosein-23/components/NavBar.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"tQtW9FyKD+Ut/6k+f0BCbABprL4=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQUNrQjtBQUNiO0FBQ2tCO0FBRWpELE1BQU1LLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGVBQWU7WUFDbkJELFlBQVlFLE9BQU9DLFVBQVU7UUFDL0I7UUFFQUQsT0FBT0UsaUJBQWlCLFVBQVVIO1FBRWxDLE9BQU87WUFDTEMsT0FBT0csb0JBQW9CLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVcseUZBSVYsT0FIQ1IsV0FDSSx3Q0FDQTs7MEJBR04sOERBQUNPO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVU7d0JBQU9FLE1BQUs7d0JBQUlDLFFBQU87a0NBQ2xDLDRFQUFDZCxtREFBS0E7NEJBQ0plLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDUjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFNQyxVQUFVO2dDQUFHVCxXQUFVOzBDQUM1Qiw0RUFBQ1U7b0NBQ0NDLE9BQU07b0NBQ05YLFdBQVU7b0NBQ1ZZLFNBQVE7b0NBQ1JDLFFBQU87OENBRVAsNEVBQUNDO3dDQUNDQyxlQUFjO3dDQUNkQyxnQkFBZTt3Q0FDZkMsYUFBWTt3Q0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJUiw4REFBQ0M7Z0NBQ0NWLFVBQVU7Z0NBQ1ZULFdBQVU7O29DQUVUVix5REFBUUEsQ0FBQzhCLElBQUksQ0FBQ0MscUJBQ2IsOERBQUNDOztnREFDRTs4REFDRCw4REFBQ3JCO29EQUNDQyxNQUFNLElBQVksT0FBUm1CLEtBQUtFO29EQUNmdkIsV0FBVTs4REFFVHFCLEtBQUtHOzs7Ozs7OzJDQU5ESCxLQUFLRTs7Ozs7a0RBVWhCLDhEQUFDRDtrREFDQyw0RUFBQ3JCOzRDQUNDQyxNQUFLOzRDQUNMSyxLQUFJOzRDQUNKSixRQUFPOzRDQUNQc0IsS0FBSTtzREFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1QsOERBQUMxQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ21CO29CQUFHbkIsV0FBVTs7d0JBQ1hWLHlEQUFRQSxDQUFDOEIsSUFBSSxDQUFDQyxxQkFDYiw4REFBQ0M7O29DQUNFO2tEQUNELDhEQUFDckI7d0NBQ0NDLE1BQU0sSUFBWSxPQUFSbUIsS0FBS0U7d0NBQ2Z2QixXQUFVO2tEQUVUcUIsS0FBS0c7Ozs7Ozs7K0JBTkRILEtBQUtFOzs7OztzQ0FVaEIsOERBQUNEO3NDQUNDLDRFQUFDckI7Z0NBQ0NDLE1BQUs7Z0NBQ0xLLEtBQUk7Z0NBQ0pKLFFBQU87Z0NBQ1BzQixLQUFJOzBDQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1QLDhEQUFDMUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFXLEdBQWlDLE9BQTlCUixXQUFXLFdBQVc7OEJBQ3ZDLDRFQUFDTzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQzBCO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdQLDhEQUFDM0I7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDWCxtREFBS0E7d0NBQ0pXLFdBQVU7d0NBQ1ZJLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBN0hNaEI7S0FBQUE7QUErSE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4P2ZiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG5hdkxpbmtzIH0gZnJvbSBcIi4uL2FwcC9jb25zdGFudHMvZGF0YVwiO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgcHktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xMDAgZWFzZS1pbi1vdXQgei01MCAke1xuICAgICAgICBzY3JvbGxlZFxuICAgICAgICAgID8gXCJiZy1zaGlwLWNvdmUtNjAwIHRleHQtc2hpcC1jb3ZlLTEwMFwiXG4gICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IHRleHQtc2hpcC1jb3ZlLTYwMFwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIi9cIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy8xLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgYWx0PVwiS2hhbGlkIEhvc2VpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGxnOmhpZGRlblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCIjNGI1NTg4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmg4bS04IDZoMTZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudSBtZW51LXNtIGRyb3Bkb3duLWNvbnRlbnQgZmxleCBmbGV4LWNvbCBnYXAtMiBtdC0zIHotWzFdIHAtMiBzaGFkb3cgYmctc2hpcC1jb3ZlLTYwMCByb3VuZGVkLWJveCB3LTUyIHVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1iYXNlIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17bGluay5pZH0+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgIyR7bGluay5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluay11bmRlcmxpbmUgbGluay11bmRlcmxpbmUtYmxhY2sgYm9yZGVyLW5vbmUgaG92ZXI6YmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvSy5Ib3NlaW4ucGRmXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJLaGFsaWQgSG9zZWluIHJlc3VtZVwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jZW50ZXIgaGlkZGVuIGxnOmZsZXhcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUgbWVudS1ob3Jpem9udGFsIHB4LTEgdXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LWJhc2UgdHJhY2tpbmctdGlnaHRcIj5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtsaW5rLmlkfT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtsaW5rLmlkfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluay11bmRlcmxpbmUgbGluay11bmRlcmxpbmUtYmxhY2sgYm9yZGVyLW5vbmUgaG92ZXI6YmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cIi9LLkhvc2Vpbi5wZGZcIlxuICAgICAgICAgICAgICBhbHQ9XCJLaGFsaWQgSG9zZWluIHJlc3VtZVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmQgZ2FwLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3Njcm9sbGVkID8gXCJoaWRkZW5cIiA6IFwiYmxvY2tcIn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsZXggaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQgY2hhdC1lbmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJ1YmJsZVwiPlxuICAgICAgICAgICAgICAgIDxwPkhlbGxvISBJdCdzIG5pY2UgdG8gbWVldCB5b3UhPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXIgb25saW5lXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6cmluZy00XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9raGF2YXRhci5wbmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezYwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIktoYWxpZCBIb3NlaW5cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwibmF2TGlua3MiLCJOYXZCYXIiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImxhYmVsIiwidGFiSW5kZXgiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwidWwiLCJtYXAiLCJsaW5rIiwibGkiLCJpZCIsInRpdGxlIiwicmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/NavBar.jsx\n"));

/***/ })

});