"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-tilt";
exports.ids = ["vendor-chunks/react-tilt"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-tilt/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-tilt/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tilt: () => (/* binding */ Tilt)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __defProp = Object.defineProperty;\nvar __defProps = Object.defineProperties;\nvar __getOwnPropDescs = Object.getOwnPropertyDescriptors;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));\n\n// src/index.tsx\n\n\nvar Tilt = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.ref = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();\n    this.state = {\n      style: {}\n    };\n    const defaultSettings = {\n      reverse: false,\n      max: 35,\n      perspective: 1e3,\n      easing: \"cubic-bezier(.03,.98,.52,.99)\",\n      scale: \"1.1\",\n      speed: \"1000\",\n      transition: true,\n      axis: null,\n      reset: true\n    };\n    this.width = null;\n    this.height = null;\n    this.left = null;\n    this.top = null;\n    this.transitionTimeout = null;\n    this.updateCall = null;\n    this.element = null;\n    this.settings = Object.assign({}, defaultSettings, this.props.options);\n    this.reverse = this.settings.reverse ? -1 : 1;\n    this.onMouseEnter = this.onMouseEnter.bind(this, this.props.onMouseEnter);\n    this.onMouseMove = this.onMouseMove.bind(this, this.props.onMouseMove);\n    this.onMouseLeave = this.onMouseLeave.bind(this, this.props.onMouseLeave);\n  }\n  componentDidMount() {\n    this.element = this.ref.current;\n    setTimeout(() => {\n      if (this.element.parentElement.querySelector(\":hover\") === this.element) {\n        this.onMouseEnter();\n      }\n    }, 0);\n  }\n  componentWillUnmount() {\n    clearTimeout(this.transitionTimeout);\n    cancelAnimationFrame(this.updateCall);\n  }\n  onMouseEnter(cb = () => {\n  }, e) {\n    this.updateElementPosition();\n    this.setState(Object.assign({}, this.state, {\n      style: __spreadProps(__spreadValues({}, this.state.style), {\n        willChange: \"transform\"\n      })\n    }));\n    this.setTransition();\n    return cb(e);\n  }\n  reset() {\n    window.requestAnimationFrame(() => {\n      this.setState(Object.assign({}, this.state, {\n        style: __spreadProps(__spreadValues({}, this.state.style), {\n          transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`\n        })\n      }));\n    });\n  }\n  onMouseMove(cb = () => {\n  }, e) {\n    e.persist();\n    if (this.updateCall !== null) {\n      window.cancelAnimationFrame(this.updateCall);\n    }\n    this.event = e;\n    this.updateCall = requestAnimationFrame(this.update.bind(this, e));\n    return cb(e);\n  }\n  setTransition() {\n    clearTimeout(this.transitionTimeout);\n    this.setState(Object.assign({}, this.state, {\n      style: __spreadProps(__spreadValues({}, this.state.style), {\n        transition: `${this.settings.speed}ms ${this.settings.easing}`\n      })\n    }));\n    this.transitionTimeout = setTimeout(() => {\n      this.setState(Object.assign({}, this.state, {\n        style: __spreadProps(__spreadValues({}, this.state.style), {\n          transition: \"\"\n        })\n      }));\n    }, this.settings.speed);\n  }\n  onMouseLeave(cb = () => {\n  }, e) {\n    this.setTransition();\n    if (this.settings.reset) {\n      this.reset();\n    }\n    return cb(e);\n  }\n  getValues(e) {\n    const x = (e.nativeEvent.clientX - this.left) / this.width;\n    const y = (e.nativeEvent.clientY - this.top) / this.height;\n    const _x = Math.min(Math.max(x, 0), 1);\n    const _y = Math.min(Math.max(y, 0), 1);\n    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2);\n    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);\n    const percentageX = _x * 100;\n    const percentageY = _y * 100;\n    return {\n      tiltX,\n      tiltY,\n      percentageX,\n      percentageY\n    };\n  }\n  updateElementPosition() {\n    const rect = this.element.getBoundingClientRect();\n    this.width = this.element.offsetWidth;\n    this.height = this.element.offsetHeight;\n    this.left = rect.left;\n    this.top = rect.top;\n  }\n  update(e) {\n    const values = this.getValues(e);\n    this.setState(Object.assign({}, this.state, {\n      style: __spreadProps(__spreadValues({}, this.state.style), {\n        transform: `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === \"x\" ? 0 : values.tiltY}deg) rotateY(${this.settings.axis === \"y\" ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`\n      })\n    }));\n    this.updateCall = null;\n  }\n  render() {\n    const style = Object.assign({}, this.props.style, this.state.style);\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\n      \"div\",\n      {\n        style,\n        ref: this.ref,\n        className: this.props.className,\n        onMouseEnter: this.onMouseEnter,\n        onMouseMove: this.onMouseMove,\n        onMouseLeave: this.onMouseLeave,\n        children: this.props.children\n      }\n    );\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGlsdC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUN5QztBQUNEO0FBQ3hDLHlCQUF5Qiw0Q0FBUztBQUNsQztBQUNBO0FBQ0EsZUFBZSxzREFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQ0FBa0M7QUFDbEMsNENBQTRDO0FBQzVDO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDhDQUE4QztBQUM5QyxvQ0FBb0MsMEJBQTBCO0FBQzlELFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsNENBQTRDO0FBQzVDLHVCQUF1QixvQkFBb0IsS0FBSyxxQkFBcUI7QUFDckUsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLG9DQUFvQztBQUNwQyw4Q0FBOEM7QUFDOUM7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDRDQUE0QztBQUM1QyxrQ0FBa0MsMEJBQTBCLGNBQWMsOENBQThDLGVBQWUsOENBQThDLGVBQWUsb0JBQW9CLElBQUksb0JBQW9CLElBQUksb0JBQW9CO0FBQ3hRLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDJCQUEyQixzREFBRztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2hvc2VpbjIzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRpbHQvZGlzdC9pbmRleC5qcz8wZWIyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2NzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbnZhciBfX3NwcmVhZFByb3BzID0gKGEsIGIpID0+IF9fZGVmUHJvcHMoYSwgX19nZXRPd25Qcm9wRGVzY3MoYikpO1xuXG4vLyBzcmMvaW5kZXgudHN4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBUaWx0ID0gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgbWF4OiAzNSxcbiAgICAgIHBlcnNwZWN0aXZlOiAxZTMsXG4gICAgICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKC4wMywuOTgsLjUyLC45OSlcIixcbiAgICAgIHNjYWxlOiBcIjEuMVwiLFxuICAgICAgc3BlZWQ6IFwiMTAwMFwiLFxuICAgICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgIGF4aXM6IG51bGwsXG4gICAgICByZXNldDogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgdGhpcy50b3AgPSBudWxsO1xuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlQ2FsbCA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCB0aGlzLnByb3BzLm9wdGlvbnMpO1xuICAgIHRoaXMucmV2ZXJzZSA9IHRoaXMuc2V0dGluZ3MucmV2ZXJzZSA/IC0xIDogMTtcbiAgICB0aGlzLm9uTW91c2VFbnRlciA9IHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcywgdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5vbk1vdXNlTW92ZSk7XG4gICAgdGhpcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMsIHRoaXMucHJvcHMub25Nb3VzZUxlYXZlKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnJlZi5jdXJyZW50O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6aG92ZXJcIikgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLm9uTW91c2VFbnRlcigpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25UaW1lb3V0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpO1xuICB9XG4gIG9uTW91c2VFbnRlcihjYiA9ICgpID0+IHtcbiAgfSwgZSkge1xuICAgIHRoaXMudXBkYXRlRWxlbWVudFBvc2l0aW9uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICBzdHlsZTogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgdGhpcy5zdGF0ZS5zdHlsZSksIHtcbiAgICAgICAgd2lsbENoYW5nZTogXCJ0cmFuc2Zvcm1cIlxuICAgICAgfSlcbiAgICB9KSk7XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG4gICAgcmV0dXJuIGNiKGUpO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICAgIHN0eWxlOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCB0aGlzLnN0YXRlLnN0eWxlKSwge1xuICAgICAgICAgIHRyYW5zZm9ybTogYHBlcnNwZWN0aXZlKCR7dGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZX1weCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHNjYWxlM2QoMSwgMSwgMSlgXG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cbiAgb25Nb3VzZU1vdmUoY2IgPSAoKSA9PiB7XG4gIH0sIGUpIHtcbiAgICBlLnBlcnNpc3QoKTtcbiAgICBpZiAodGhpcy51cGRhdGVDYWxsICE9PSBudWxsKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKTtcbiAgICB9XG4gICAgdGhpcy5ldmVudCA9IGU7XG4gICAgdGhpcy51cGRhdGVDYWxsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcywgZSkpO1xuICAgIHJldHVybiBjYihlKTtcbiAgfVxuICBzZXRUcmFuc2l0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25UaW1lb3V0KTtcbiAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcbiAgICAgIHN0eWxlOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCB0aGlzLnN0YXRlLnN0eWxlKSwge1xuICAgICAgICB0cmFuc2l0aW9uOiBgJHt0aGlzLnNldHRpbmdzLnNwZWVkfW1zICR7dGhpcy5zZXR0aW5ncy5lYXNpbmd9YFxuICAgICAgfSlcbiAgICB9KSk7XG4gICAgdGhpcy50cmFuc2l0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICAgIHN0eWxlOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCB0aGlzLnN0YXRlLnN0eWxlKSwge1xuICAgICAgICAgIHRyYW5zaXRpb246IFwiXCJcbiAgICAgICAgfSlcbiAgICAgIH0pKTtcbiAgICB9LCB0aGlzLnNldHRpbmdzLnNwZWVkKTtcbiAgfVxuICBvbk1vdXNlTGVhdmUoY2IgPSAoKSA9PiB7XG4gIH0sIGUpIHtcbiAgICB0aGlzLnNldFRyYW5zaXRpb24oKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5yZXNldCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICByZXR1cm4gY2IoZSk7XG4gIH1cbiAgZ2V0VmFsdWVzKGUpIHtcbiAgICBjb25zdCB4ID0gKGUubmF0aXZlRXZlbnQuY2xpZW50WCAtIHRoaXMubGVmdCkgLyB0aGlzLndpZHRoO1xuICAgIGNvbnN0IHkgPSAoZS5uYXRpdmVFdmVudC5jbGllbnRZIC0gdGhpcy50b3ApIC8gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgX3ggPSBNYXRoLm1pbihNYXRoLm1heCh4LCAwKSwgMSk7XG4gICAgY29uc3QgX3kgPSBNYXRoLm1pbihNYXRoLm1heCh5LCAwKSwgMSk7XG4gICAgY29uc3QgdGlsdFggPSAodGhpcy5yZXZlcnNlICogKHRoaXMuc2V0dGluZ3MubWF4IC8gMiAtIF94ICogdGhpcy5zZXR0aW5ncy5tYXgpKS50b0ZpeGVkKDIpO1xuICAgIGNvbnN0IHRpbHRZID0gKHRoaXMucmV2ZXJzZSAqIChfeSAqIHRoaXMuc2V0dGluZ3MubWF4IC0gdGhpcy5zZXR0aW5ncy5tYXggLyAyKSkudG9GaXhlZCgyKTtcbiAgICBjb25zdCBwZXJjZW50YWdlWCA9IF94ICogMTAwO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2VZID0gX3kgKiAxMDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbHRYLFxuICAgICAgdGlsdFksXG4gICAgICBwZXJjZW50YWdlWCxcbiAgICAgIHBlcmNlbnRhZ2VZXG4gICAgfTtcbiAgfVxuICB1cGRhdGVFbGVtZW50UG9zaXRpb24oKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB0aGlzLmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgdGhpcy50b3AgPSByZWN0LnRvcDtcbiAgfVxuICB1cGRhdGUoZSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge1xuICAgICAgc3R5bGU6IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIHRoaXMuc3RhdGUuc3R5bGUpLCB7XG4gICAgICAgIHRyYW5zZm9ybTogYHBlcnNwZWN0aXZlKCR7dGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZX1weCkgcm90YXRlWCgke3RoaXMuc2V0dGluZ3MuYXhpcyA9PT0gXCJ4XCIgPyAwIDogdmFsdWVzLnRpbHRZfWRlZykgcm90YXRlWSgke3RoaXMuc2V0dGluZ3MuYXhpcyA9PT0gXCJ5XCIgPyAwIDogdmFsdWVzLnRpbHRYfWRlZykgc2NhbGUzZCgke3RoaXMuc2V0dGluZ3Muc2NhbGV9LCAke3RoaXMuc2V0dGluZ3Muc2NhbGV9LCAke3RoaXMuc2V0dGluZ3Muc2NhbGV9KWBcbiAgICAgIH0pXG4gICAgfSkpO1xuICAgIHRoaXMudXBkYXRlQ2FsbCA9IG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSk7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdHlsZSxcbiAgICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZU1vdmU6IHRoaXMub25Nb3VzZU1vdmUsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICB9XG4gICAgKTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIFRpbHRcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-tilt/dist/index.js\n");

/***/ })

};
;