(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./frontend/src/components/pages/services.js":
/*!***************************************************!*\
  !*** ./frontend/src/components/pages/services.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_frontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/frontend */ \"./frontend/src/actions/frontend.js\");\n/* harmony import */ var _services_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services.css */ \"./frontend/src/components/pages/services.css\");\n/* harmony import */ var _services_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_services_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _aboutus_aboutus_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus/aboutus.css */ \"./frontend/src/components/pages/aboutus/aboutus.css\");\n/* harmony import */ var _aboutus_aboutus_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aboutus_aboutus_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\nvar Services = /*#__PURE__*/function (_Component) {\n  _inherits(Services, _Component);\n\n  var _super = _createSuper(Services);\n\n  function Services() {\n    var _temp, _this;\n\n    _classCallCheck(this, Services);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.nextSlide = function () {\n      var element = document.getElementById(\"section2\");\n      smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6___default.a.polyfill();\n      window.scroll({\n        top: element.offsetTop,\n        behavior: \"smooth\"\n      });\n    }, _temp));\n  }\n\n  _createClass(Services, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getAboutUs();\n      this.props.getLandingContent();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, this.props.aboutus.slice(0).map(function (data) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          key: data.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"main-containers\",\n          value: _this2.props.maincontent[0] ? document.title = \"Home - \".concat(_this2.props.maincontent[0].site_name) : ''\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"section1\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"front-image\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: data.services.cover_image\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"front-image-name\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Our Service\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          onClick: _this2.nextSlide\n        }, data.services.button_name))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"container-fluid section2\",\n          id: \"section2\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"subsection1\",\n          className: \"subsection1\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, data.services.section_1_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.services.section_1_words)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-img\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: data.services.section_1_picture,\n          className: \"inspire-photo\",\n          alt: \"inspire\"\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-divider\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, data.services.section_1_2_divider)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-divider-line\"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"subsection2\",\n          className: \"subsection2\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-row\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, data.services.section_2_text_1_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.services.section_2_text_1_paragraph)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, data.services.section_2_text_2_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.services.section_2_text_2_paragraph))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-row\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-last_row \"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, data.services.section_2_text_4_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.services.section_2_text_4_paragraph)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, data.services.section_2_text_3_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.services.section_2_text_3_paragraph))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-img\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: data.services.section_2_picture,\n          className: \"inspire-photo\",\n          alt: \"inspire\"\n        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"subsections3\"\n        }))));\n      }));\n    }\n  }]);\n\n  return Services;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nServices.propTypes = {\n  aboutus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,\n  maincontent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    aboutus: state.aboutus.aboutus,\n    maincontent: state.maincontent.maincontent\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  getAboutUs: _actions_frontend__WEBPACK_IMPORTED_MODULE_3__[\"getAboutUs\"],\n  getLandingContent: _actions_frontend__WEBPACK_IMPORTED_MODULE_3__[\"getLandingContent\"]\n})(Services));\n\n//# sourceURL=webpack:///./frontend/src/components/pages/services.js?");

/***/ })

}]);