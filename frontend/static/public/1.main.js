(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./frontend/src/components/pages/aboutus/aboutus.css":
/*!***********************************************************!*\
  !*** ./frontend/src/components/pages/aboutus/aboutus.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./aboutus.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/aboutus/aboutus.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./frontend/src/components/pages/aboutus/aboutus.css?");

/***/ }),

/***/ "./frontend/src/components/pages/services.css":
/*!****************************************************!*\
  !*** ./frontend/src/components/pages/services.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./services.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/services.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./frontend/src/components/pages/services.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/aboutus/aboutus.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/aboutus/aboutus.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.main-container{\\n    width: 100vw;\\n    display: grid;\\n    grid-template-rows: repeat(auto-fit, minmax(240px,auto));\\n    /*margin-top: 50px;*/\\n\\n    /*justify-content: center;*/\\n    justify-items: center;\\n    align-items: center;\\n}\\n.section1{\\n    /*background-color: #88c540;*/\\n    text-align: center;\\n    position: relative;\\n}\\n\\n.section1 .front-image{\\n    /*padding: 50% 50%;*/\\n    width: 100vw;\\n    max-width: 100vw;\\n    height: 100vh;\\n    max-height: 100vh;\\n    overflow: hidden;\\n}\\n.section1 .front-image img{\\n    height:inherit;\\n    min-width:100%;\\n    max-width:none;\\n    margin:0 -100%;\\n}\\n@media screen and (min-aspect-ratio: 17/8){\\n    .section1 .front-image img{\\n        width: auto;\\n        min-width: 0%;\\n    }\\n    .front-image-name {\\n        padding: 6vh 11vh;\\n    }\\n}\\n@media screen and (max-aspect-ratio: 17/15){\\n    .section1 .front-image img{\\n        width: 100vw;\\n        min-width: 0;\\n        height: auto;\\n        transform: scale(1.5);\\n    }\\n    .section1{\\n        padding-top: 50px;\\n    }\\n    .section1 .front-image{\\n        /*padding: 50% 50%;*/\\n        height: auto;\\n        overflow: hidden;\\n    }\\n}\\n\\n.front-image-name{\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n\\n    border: 10px double #ffffff;\\n    border-radius: 20px;\\n    box-shadow: 0px 0px 30px 2px #282828;\\n    background-color: rgba(255, 255, 255, 0.5);\\n    text-align: center;\\n    padding: 6vw 11vw;\\n\\n\\n}\\n\\n.front-image-name span{\\n    color: #ffffff;\\n    font-size: 6vw;\\n    text-shadow: 0px 1px 20px #2b2b2b;\\n    white-space: nowrap;\\n}\\n.front-image-name span:hover{\\n    color: #626262;\\n    text-shadow: 0px 1px 10px #b0b0b0;\\n    transition: all 1s ease-in!important;\\n\\n}\\n\\n.front-image-name a{\\n    font-family: Georgia;\\n    color: #a27a44;\\n    font-size: 4vw;\\n    text-shadow: 0px 1px 2px rgb(0, 0, 0);\\n    border: 3px solid #cdcccc;\\n    border-radius: 10px;\\n    padding: 5px;\\n    background-color: rgba(255, 255, 255, 0.5);\\n    white-space: nowrap;\\n\\n}\\n.front-image-name a:hover{\\n    color: #1f1f1f;\\n    text-shadow: 0px 1px 20px #a27a44;\\n    transition: all 1s ease-in!important;\\n}\\n\\n\\n.content-section{\\n    width: 100%;\\n    height: auto;\\n    align-items: center;\\n    /*background-color: #436f59;*/\\n}\\n\\n@media screen and (min-width: 1100px){\\n    .content-section{\\n        width: 1100px;\\n    }\\n}\\n\\n\\n@media screen and (max-width: 768px) {\\n    .content-section{\\n        width: 100%;\\n        padding-top: 3em;\\n        align-items: center;\\n\\n    }\\n\\n    .subsection .first-text{\\n        padding-top: -5em;\\n        /*margin-top: 5em;*/\\n    }\\n\\n    .subsection-flex{\\n        align-items: center;\\n        text-align: center;\\n\\n    }\\n    .subsection-text{\\n        padding-top: 1rem;\\n    }\\n}\\n\\n\\n\\n/*.text-liner{*/\\n/*    height: 1.5em;*/\\n/*}*/\\n\\n\\n.content-section .subsection {\\n    text-align: center;\\n}\\n.content-section .subsection h2{\\n    padding-top: 3vw;\\n}\\n\\n.subsection-text img{\\n    width: auto;\\n    max-width: 95vw;\\n    background-color: rgba(255,255,255,0.7);\\n    border-radius: 20px;\\n}\\n\\n.famous-quote{\\n    font-weight: bold;\\n}\\n.famous-quote .quote{\\n    font-style: italic;\\n    color: grey;\\n}\\n.famous-quote .quote-by{\\n    color: #a27a44;\\n}\\n\\n.row-column{\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(340px,auto));\\n}\\n\\n@media screen and (min-width: 900px)  {\\n    .row-column .subsection-text p{\\n        padding: 0 20%;\\n    }\\n}\\n\\n.subsection-flex{\\n    align-items: center;\\n    /*background-color: #c4c4c4;*/\\n}\\n\\n.content-section-flex .subsection-body img{\\n    border-radius: 10px;\\n    box-shadow: 0px 0px 30px 2px #cecece;\\n    margin-bottom: 2rem;\\n}\\n.content-section-flex{\\n    max-width: 1100px;\\n}\\n.text-bg{\\n    padding-top: 1rem;\\n    margin: 2rem 1rem 1rem 1rem;\\n    background-color: rgba(167, 167, 167, 0.1);\\n    border-radius: 20px;\\n}\\n.subsection-tail .text-bg p{\\n    /*color: #828282;*/\\n    /*text-shadow: 2px 2px 5px #83b841;*/\\n}\\n\\n@media screen and (min-width: 769px){\\n    .subsection-flex .subsection-body{\\n        display: flex;\\n        align-items: center;\\n    }\\n    .subsection-flex{\\n        /*align-items: center;*/\\n        padding: 2rem 2rem 2rem 2rem;\\n        /*background-color: #c4c4c4;*/\\n    }\\n    .subsection-tail{\\n        display: flex;\\n        padding-top: 2rem;\\n        align-items: center;\\n    }\\n    .subsection-end{\\n        text-align: right;\\n    }\\n    .subsection-body2{\\n        padding-top: 2rem;\\n    }\\n    .subsection-body{\\n        padding-top: 2rem;\\n    }\\n    blockquote:before {\\n        padding-left: -5rem;\\n    }\\n}\\n\\nblockquote {\\n    font-family: Georgia, serif;\\n    position: relative;\\n    margin: 0;\\n    padding: 0.5em 2em 0.5em 3em;\\n}\\n\\n/* Thanks: http://callmenick.com/post/styling-blockquotes-with-css-pseudo-classes */\\nblockquote:before {\\n    font-family: Georgia, serif;\\n    position: absolute;\\n    font-size: 6em;\\n    line-height: 1;\\n    top: 0;\\n    left: 0;\\n    content: \\\"\\\\201C\\\";\\n    text-align: center;\\n    color: #a27a44;\\n}\\nblockquote:after {\\n    font-family: Georgia, serif;\\n    position: absolute;\\n    /* display: block; don't use this, it raised the quote too high from the bottom - defeated line-height? */\\n    float:right;\\n    font-size:6em;\\n    line-height: 1;\\n    right:0;\\n    bottom:-0.5em;\\n    content: \\\"\\\\201D\\\";\\n    color: #a27a44;\\n}\\nblockquote footer {\\n    padding: 0 2em 0 0;\\n    text-align:right;\\n}\\nblockquote cite:before {\\n    content: \\\"\\\\2013\\\";\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./frontend/src/components/pages/aboutus/aboutus.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/services.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/pages/services.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".main-containers{\\n    width: 100vw;\\n    display: grid;\\n    grid-template-rows: repeat(auto-fit, minmax(240px,auto));\\n    align-items: center;\\n\\n}\\n.main-section{\\n    /*background-color: #88c540;*/\\n    width: 100vw;\\n    max-width: 100vw;\\n    margin-top: 50px;\\n}\\n\\n\\n.section2{\\n    width: 90%;\\n    height: auto;\\n    padding-top: 5em;\\n    padding-bottom: 5em;\\n}\\n\\n\\n@media screen and (min-width: 1100px){\\n    .section2{\\n        width: 1100px;\\n    }\\n}\\n\\n\\n@media screen and (max-width: 768px) {\\n    .section2{\\n        width: 100%;\\n        padding-top: 3em;\\n        align-items: center;\\n        padding-left: 5vw;\\n        padding-right: 5vw;\\n    }\\n    .section2 .subsection2{\\n        text-align: center;\\n    }\\n}\\n\\n.subsection1{\\n    display: grid;\\n    grid-template-columns: 0.9fr 0.1fr;\\n    align-items: center;\\n}\\n\\n@media screen and (max-width: 668px){\\n    .subsection1{\\n        display: grid;\\n        grid-template-columns: none;\\n        grid-template-areas:\\n                \\\"subsection-text\\\"\\n                \\\"subsection-img\\\";\\n        text-align: center;\\n        align-items: center;\\n    }\\n    .subsection1 .subsection-text{\\n        grid-area: subsection-text;\\n        width: 100%;\\n    }\\n    .subsection1 .subsection-text h2{\\n        padding-bottom: 1em;\\n    }\\n    .subsection-img{\\n        width: 100vw;\\n        height: auto;\\n        grid-area: subsection-img;\\n    }\\n\\n}\\n\\n\\n.inspire-photo{\\n    max-width: 200px;\\n    width: auto;\\n}\\n.subsection-text h2{\\n    padding-left: 1rem;\\n    padding-right: 1rem;\\n    padding-bottom: 1em;\\n    font-weight: normal;\\n    font-size: 2em;\\n    color: #8bc53f;\\n    font-family: Georgia\\n    /*text-shadow: 2px 2px 5px lightgrey;*/\\n\\n}\\n.subsection-text p{\\n    font-family: \\\"Poppins\\\", Helvetica, Arial, sans-serif;\\n    font-size: 1em;\\n    white-space: pre-wrap;\\n    padding-left: 1rem;\\n    padding-right: 1rem;\\n    text-shadow: 2px 2px 5px lightgrey;\\n    color: #626262;\\n    letter-spacing: 1px;\\n    padding-bottom: 2em;\\n\\n}\\n\\n.subsection-img{\\n    width: 100%;\\n    /*background-color: #8bc540;*/\\n}\\n\\n.subsection1 .inspire-photo{\\n    border-bottom-color: #cdcdcd;\\n    border-radius: 10px;\\n    box-shadow: 0px 0px 10px 2px #a27a44;\\n}\\n\\n.subsection2{\\n    display: grid;\\n    grid-template-rows: repeat(auto-fit, minmax(240px,auto));\\n    align-items: center;\\n}\\n\\n.subsection2 .subsection-row{\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(340px,auto));\\n\\n}\\n\\n.subsection2 .subsection-last_row{\\n    display: grid;\\n    grid-template-rows: repeat(auto-fit, minmax(240px,auto));\\n\\n}\\n.subsection2 img{\\n    width: auto;\\n    max-width: 80%;\\n    border-bottom-color: #cdcdcd;\\n    border-radius: 10px;\\n    /*box-shadow: 0px 0px 100px 2px #87be40;*/\\n\\n}\\n.subsection2 .subsection-text{\\n    /*max-width: 100%;*/\\n    /*border-bottom-color: #cdcdcd;*/\\n    border-radius: 10px;\\n    /*box-shadow: 0px 0px 30px 2px #87be40;*/\\n\\n}\\n\\n@media screen and (max-width: 700px){\\n    .subsection-row .subsection-img {\\n        visibility: hidden;\\n        /*height: 0px;*/\\n    }\\n    .subsection2 .subsection-last_row{\\n        width: 90vw;\\n\\n    }\\n}\\n\\n.subsection-divider{\\n    font-family: \\\"Roboto\\\", \\\"Lucida Grande\\\", \\\"DejaVu Sans\\\", \\\"Bitstream Vera Sans\\\", Verdana, Arial, sans-serif;\\n    padding-left: 1rem;\\n    padding-right: 1rem;\\n    text-shadow: 2px 2px 5px lightgrey;\\n}\\n\\n.subsection-divider-line{\\n    background-color: #a27a44;\\n    border-radius: 20px;\\n    width: 60%;\\n    height: 4px;\\n    margin-left: 1rem;\\n    margin-right: 1rem;\\n    margin-bottom: 50px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./frontend/src/components/pages/services.css?./node_modules/css-loader/dist/cjs.js");

/***/ })

}]);