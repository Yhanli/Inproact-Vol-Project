(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./frontend/src/components/pages/aboutus/aboutus.css":
/*!***********************************************************!*\
  !*** ./frontend/src/components/pages/aboutus/aboutus.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./aboutus.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/aboutus/aboutus.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./frontend/src/components/pages/aboutus/aboutus.css?");

/***/ }),

/***/ "./frontend/src/components/pages/main.css":
/*!************************************************!*\
  !*** ./frontend/src/components/pages/main.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./frontend/src/components/pages/main.css?");

/***/ }),

/***/ "./frontend/src/components/pages/main.js":
/*!***********************************************!*\
  !*** ./frontend/src/components/pages/main.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_frontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/frontend */ \"./frontend/src/actions/frontend.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.css */ \"./frontend/src/components/pages/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _aboutus_aboutus_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus/aboutus.css */ \"./frontend/src/components/pages/aboutus/aboutus.css\");\n/* harmony import */ var _aboutus_aboutus_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aboutus_aboutus_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar Main = /*#__PURE__*/function (_Component) {\n  _inherits(Main, _Component);\n\n  var _super = _createSuper(Main);\n\n  function Main() {\n    var _temp, _this;\n\n    _classCallCheck(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.nextSlide = function () {\n      var height = document.getElementById(\"section2\").offsetHeight;\n      document.querySelector('html').scrollTo(0, height - 75);\n    }, _temp));\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, this.props.maincontent.slice(0).map(function (data) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          key: data.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"main-containers\",\n          value: _this2.props.maincontent[0] ? document.title = \"Home - \".concat(_this2.props.maincontent[0].site_name) : ''\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"section1\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"front-image\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: data.cover_image\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"main-section2\",\n          id: \"section2\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"main-subsection1\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-inner1\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-content left-content\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"title-num\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"line-through\"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"\"\n        }, \"01\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n          style: {\n            textAlign: \"left\"\n          }\n        }, data.section_1_heading1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-content left-content\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: \"\".concat(data.section_1_picture)\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-content right-content\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.section_1_paragraph1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          style: {\n            textAlign: 'right'\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"/aboutus\",\n          className: \"ReadMore\"\n        }, \"Read More\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"main-subsection-with-bg\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-inner1\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-content left-content\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"title-num\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"line-through\"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"\"\n        }, \"01\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n          style: {\n            textAlign: \"left\"\n          }\n        }, data.section_1_heading1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-content left-content\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: \"\".concat(data.section_1_picture)\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subsection-content right-content\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.section_1_paragraph1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          style: {\n            textAlign: 'right'\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"/aboutus\",\n          className: \"ReadMore\"\n        }, \"Read More\")))))))));\n      }));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nMain.propTypes = {\n  maincontent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    maincontent: state.maincontent.maincontent\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  getLandingContent: _actions_frontend__WEBPACK_IMPORTED_MODULE_3__[\"getLandingContent\"]\n})(Main));\n\n//# sourceURL=webpack:///./frontend/src/components/pages/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/aboutus/aboutus.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/aboutus/aboutus.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.main-container{\\n    width: 100vw;\\n    display: grid;\\n    grid-template-rows: repeat(auto-fit, minmax(240px,auto));\\n    /*margin-top: 50px;*/\\n\\n    /*justify-content: center;*/\\n    justify-items: center;\\n    align-items: center;\\n}\\n.section1{\\n    /*background-color: #88c540;*/\\n    text-align: center;\\n    position: relative;\\n}\\n\\n.section1 .front-image{\\n    /*padding: 50% 50%;*/\\n    width: 100vw;\\n    max-width: 100vw;\\n    height: 100vh;\\n    max-height: 100vh;\\n    overflow: hidden;\\n}\\n.section1 .front-image img{\\n    height:inherit;\\n    min-width:100%;\\n    max-width:none;\\n    margin:0 -100%;\\n}\\n@media screen and (min-aspect-ratio: 17/8){\\n    .section1 .front-image img{\\n        width: auto;\\n        min-width: 0%;\\n    }\\n    .front-image-name {\\n        padding: 6vh 11vh;\\n    }\\n}\\n@media screen and (max-aspect-ratio: 17/15){\\n    .section1 .front-image img{\\n        width: 100vw;\\n        min-width: 0;\\n        height: auto;\\n        transform: scale(1.5);\\n    }\\n    .section1{\\n        padding-top: 50px;\\n    }\\n    .section1 .front-image{\\n        /*padding: 50% 50%;*/\\n        height: auto;\\n        overflow: hidden;\\n    }\\n}\\n\\n.front-image-name{\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n\\n    border: 10px double #ffffff;\\n    border-radius: 20px;\\n    box-shadow: 0px 0px 30px 2px #282828;\\n    background-color: rgba(255, 255, 255, 0.5);\\n    text-align: center;\\n    padding: 6vw 11vw;\\n\\n\\n}\\n\\n.front-image-name span{\\n    color: #ffffff;\\n    font-size: 6vw;\\n    text-shadow: 0px 1px 20px #2b2b2b;\\n    white-space: nowrap;\\n}\\n.front-image-name span:hover{\\n    color: #626262;\\n    text-shadow: 0px 1px 10px #b0b0b0;\\n    transition: all 1s ease-in!important;\\n\\n}\\n\\n.front-image-name a{\\n    font-family: Georgia;\\n    color: #a27a44;\\n    font-size: 4vw;\\n    text-shadow: 0px 1px 2px rgb(0, 0, 0);\\n    border: 3px solid #cdcccc;\\n    border-radius: 10px;\\n    padding: 5px;\\n    background-color: rgba(255, 255, 255, 0.5);\\n    white-space: nowrap;\\n\\n}\\n.front-image-name a:hover{\\n    color: #1f1f1f;\\n    text-shadow: 0px 1px 20px #a27a44;\\n    transition: all 1s ease-in!important;\\n}\\n\\n\\n.content-section{\\n    width: 100%;\\n    height: auto;\\n    align-items: center;\\n    /*background-color: #436f59;*/\\n}\\n\\n@media screen and (min-width: 1100px){\\n    .content-section{\\n        width: 1100px;\\n    }\\n}\\n\\n\\n@media screen and (max-width: 768px) {\\n    .content-section{\\n        width: 100%;\\n        padding-top: 3em;\\n        align-items: center;\\n\\n    }\\n\\n    .subsection .first-text{\\n        padding-top: -5em;\\n        /*margin-top: 5em;*/\\n    }\\n\\n    .subsection-flex{\\n        align-items: center;\\n        text-align: center;\\n\\n    }\\n    .subsection-text{\\n        padding-top: 1rem;\\n    }\\n}\\n\\n\\n\\n/*.text-liner{*/\\n/*    height: 1.5em;*/\\n/*}*/\\n\\n\\n.content-section .subsection {\\n    text-align: center;\\n}\\n.content-section .subsection h2{\\n    padding-top: 3vw;\\n}\\n\\n.subsection-text img{\\n    width: auto;\\n    max-width: 95vw;\\n    background-color: rgba(255,255,255,0.7);\\n    border-radius: 20px;\\n}\\n\\n.famous-quote{\\n    font-weight: bold;\\n}\\n.famous-quote .quote{\\n    font-style: italic;\\n    color: grey;\\n}\\n.famous-quote .quote-by{\\n    color: #a27a44;\\n}\\n\\n.row-column{\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(340px,auto));\\n}\\n\\n@media screen and (min-width: 900px)  {\\n    .row-column .subsection-text p{\\n        padding: 0 20%;\\n    }\\n}\\n\\n.subsection-flex{\\n    align-items: center;\\n    /*background-color: #c4c4c4;*/\\n}\\n\\n.content-section-flex .subsection-body img{\\n    border-radius: 10px;\\n    box-shadow: 0px 0px 30px 2px #cecece;\\n    margin-bottom: 2rem;\\n}\\n.content-section-flex{\\n    max-width: 1100px;\\n}\\n.text-bg{\\n    padding-top: 1rem;\\n    margin: 2rem 1rem 1rem 1rem;\\n    background-color: rgba(167, 167, 167, 0.1);\\n    border-radius: 20px;\\n}\\n.subsection-tail .text-bg p{\\n    /*color: #828282;*/\\n    /*text-shadow: 2px 2px 5px #83b841;*/\\n}\\n\\n@media screen and (min-width: 769px){\\n    .subsection-flex .subsection-body{\\n        display: flex;\\n        align-items: center;\\n    }\\n    .subsection-flex{\\n        /*align-items: center;*/\\n        padding: 2rem 2rem 2rem 2rem;\\n        /*background-color: #c4c4c4;*/\\n    }\\n    .subsection-tail{\\n        display: flex;\\n        padding-top: 2rem;\\n        align-items: center;\\n    }\\n    .subsection-end{\\n        text-align: right;\\n    }\\n    .subsection-body2{\\n        padding-top: 2rem;\\n    }\\n    .subsection-body{\\n        padding-top: 2rem;\\n    }\\n    blockquote:before {\\n        padding-left: -5rem;\\n    }\\n}\\n\\nblockquote {\\n    font-family: Georgia, serif;\\n    position: relative;\\n    margin: 0;\\n    padding: 0.5em 2em 0.5em 3em;\\n}\\n\\n/* Thanks: http://callmenick.com/post/styling-blockquotes-with-css-pseudo-classes */\\nblockquote:before {\\n    font-family: Georgia, serif;\\n    position: absolute;\\n    font-size: 6em;\\n    line-height: 1;\\n    top: 0;\\n    left: 0;\\n    content: \\\"\\\\201C\\\";\\n    text-align: center;\\n    color: #a27a44;\\n}\\nblockquote:after {\\n    font-family: Georgia, serif;\\n    position: absolute;\\n    /* display: block; don't use this, it raised the quote too high from the bottom - defeated line-height? */\\n    float:right;\\n    font-size:6em;\\n    line-height: 1;\\n    right:0;\\n    bottom:-0.5em;\\n    content: \\\"\\\\201D\\\";\\n    color: #a27a44;\\n}\\nblockquote footer {\\n    padding: 0 2em 0 0;\\n    text-align:right;\\n}\\nblockquote cite:before {\\n    content: \\\"\\\\2013\\\";\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./frontend/src/components/pages/aboutus/aboutus.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/main.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/main.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".main-section2{\\n    width: 100vw;\\n    height: auto;\\n    padding: 5em 0;\\n    /*background-color: #436f59;*/\\n    /*border: 1px dotted black;*/\\n}\\n\\n.main-subsection1{\\n    /*height: 10vw;*/\\n    /*background-color: rgba(0,0,0,0.1);*/\\n    padding: 4rem 0;\\n}\\n\\n.main-subsection-with-bg{\\n\\n    /*height: 10vw;*/\\n    background-color: rgba(0,0,0,0.1);\\n    padding: 4rem 0;\\n}\\n.subsection-inner1{\\n    /*height: 10vw;*/\\n    margin: auto;\\n    padding: 0 2rem;\\n    max-width: 1100px;\\n    /*background-color: rgba(0,0,0,0.2);*/\\n\\n    justify-content: center;\\n    display: flex;\\n    flex-wrap: nowrap;\\n\\n}\\n\\n.subsection-content{\\n    margin: auto 0px ;\\n    position: relative;\\n    width: 32.5%;\\n    min-width: 300px;\\n    height: auto;\\n    /*background-color: #d6d6d6;*/\\n    text-align: center;\\n    display: block;\\n    text-align: left!important;\\n}\\n.subsection-inner1 .subsection-content img{\\n    width: inherit;\\n    min-width: 300px;\\n    height: auto;\\n    border-radius: 50%;\\n}\\n@media screen and (max-width: 768px) {\\n    .subsection-content{\\n        width: 95%;\\n    }\\n    .subsection-inner1 .subsection-content img{\\n        width: 50vw;\\n    }\\n    .subsection-inner1{\\n        flex-wrap: wrap;\\n\\n    }\\n}\\n@media screen and (min-width: 1100px){\\n    .subsection-inner1 .subsection-content img{\\n        width: inherit;\\n        height: auto;\\n    }\\n}\\n\\n.title-num{\\n    /*background-color: #8bc53f;*/\\n    min-width: 100%;\\n    width: inherit;\\n    padding-left: 1rem;\\n    padding-right: 1rem;\\n}\\n.title-num span{\\n    /*float: left;*/\\n    font-size: 3em;\\n    color: #a27b43;\\n    font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n\\n}\\n\\n.line-through{\\n    position: relative;\\n    background-color: #a27b43;\\n    height: 1px;\\n    width: 40%;\\n    top: 2.7em\\n}\\n/*.subsection-content .between-title{*/\\n/*    padding-left: 2rem;*/\\n/*    padding-right: 1rem;*/\\n/*    !*padding-bottom: 1em;*!*/\\n/*    font-weight: normal;*/\\n/*    font-size: 2em;*/\\n/*    color: #000000;*/\\n/*    font-family: Georgia;*/\\n/*}*/\\n.subsection-content h2{\\n    padding-left: 6rem;\\n    padding-right: 1rem;\\n    /*padding-bottom: 1em;*/\\n    font-weight: normal;\\n    font-size: 3em;\\n    color: #000000;\\n    font-family: Georgia\\n    /*text-shadow: 2px 2px 5px lightgrey;*/\\n\\n}\\n.subsection-content p{\\n    font-family: \\\"Poppins\\\", Helvetica, Arial, sans-serif;\\n    font-size: 1em;\\n    white-space: pre-wrap;\\n    padding-left: 1rem;\\n    padding-right: 1rem;\\n    text-shadow: 2px 2px 5px lightgrey;\\n    color: #000000;\\n    letter-spacing: 1px;\\n    padding-bottom: 2em;\\n\\n}\\n.subsection-inner1 .right-content{\\n    padding-top: 3rem;\\n}\\n.subsection-inner1 .right-content h2{\\n    padding-top: 3rem;\\n    white-space: pre-wrap;\\n}\\n.ReadMore{\\n    background-color: black;\\n    color: white;\\n    padding: 4px 12px;\\n    border: unset;\\n    text-decoration: unset;\\n}\\n.ReadMore:hover{\\n    color: white;\\n    background-color: #a27b43;\\n    transition: all 0.7s ease-in-out;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./frontend/src/components/pages/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ })

}]);