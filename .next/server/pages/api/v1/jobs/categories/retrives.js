"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/jobs/categories/retrives";
exports.ids = ["pages/api/v1/jobs/categories/retrives"];
exports.modules = {

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/assign":
/*!********************************!*\
  !*** external "lodash/assign" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ "lodash/at":
/*!****************************!*\
  !*** external "lodash/at" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("lodash/at");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "lodash/compact":
/*!*********************************!*\
  !*** external "lodash/compact" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ "lodash/difference":
/*!************************************!*\
  !*** external "lodash/difference" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/difference");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/filter");

/***/ }),

/***/ "lodash/first":
/*!*******************************!*\
  !*** external "lodash/first" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ "lodash/functions":
/*!***********************************!*\
  !*** external "lodash/functions" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/functions");

/***/ }),

/***/ "lodash/identity":
/*!**********************************!*\
  !*** external "lodash/identity" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/identity");

/***/ }),

/***/ "lodash/includes":
/*!**********************************!*\
  !*** external "lodash/includes" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isElement":
/*!***********************************!*\
  !*** external "lodash/isElement" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/isElement");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ "lodash/take":
/*!******************************!*\
  !*** external "lodash/take" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/take");

/***/ }),

/***/ "lodash/trim":
/*!******************************!*\
  !*** external "lodash/trim" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(api)/./pages/api/v1/jobs/categories/retrives.ts":
/*!**************************************************!*\
  !*** ./pages/api/v1/jobs/categories/retrives.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _metajob_api_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @metajob/api-connector */ \"(api)/../../packages/api-connector/dist/index.js\");\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const connect = await _metajob_api_connector__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    // connect to database\n    await connect.connectDB();\n    switch(req.method){\n        case \"GET\":\n            try {\n                const categories = await connect.getCategories();\n                res.status(200).send({\n                    message: \"Successfully fetched all categories\",\n                    data: categories\n                });\n            } catch (e) {\n                res.status(500).send({\n                    message: e.message,\n                    error: \"Server Error\"\n                });\n            }\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvam9icy9jYXRlZ29yaWVzL3JldHJpdmVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBR2xELDZCQUFlLDBDQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN0RSxNQUFNQyxPQUFPLEdBQUcsTUFBTUgsOERBQVk7SUFDbEMsc0JBQXNCO0lBQ3RCLE1BQU1HLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFLENBQUM7SUFFMUIsT0FBUUgsR0FBRyxDQUFDSSxNQUFNO1FBQ2QsS0FBSyxLQUFLO1lBQ04sSUFBSTtnQkFDQSxNQUFNQyxVQUFVLEdBQUcsTUFBTUgsT0FBTyxDQUFDSSxhQUFhLEVBQUU7Z0JBRWhETCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUNqQkMsT0FBTyxFQUFFLHFDQUFxQztvQkFDOUNDLElBQUksRUFBRUwsVUFBVTtpQkFDbkIsQ0FBQyxDQUFDO1lBQ1AsRUFBRSxPQUFPTSxDQUFDLEVBQU87Z0JBQ2JWLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQ2pCQyxPQUFPLEVBQUVFLENBQUMsQ0FBQ0YsT0FBTztvQkFDbEJHLEtBQUssRUFBRSxjQUFjO2lCQUN4QixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsTUFBTTtLQUNiO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUvLi9wYWdlcy9hcGkvdjEvam9icy9jYXRlZ29yaWVzL3JldHJpdmVzLnRzP2NiZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaUNvbm5lY3RvciBmcm9tICdAbWV0YWpvYi9hcGktY29ubmVjdG9yJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBjb25uZWN0ID0gYXdhaXQgYXBpQ29ubmVjdG9yO1xuICAgIC8vIGNvbm5lY3QgdG8gZGF0YWJhc2VcbiAgICBhd2FpdCBjb25uZWN0LmNvbm5lY3REQigpO1xuXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBjb25uZWN0LmdldENhdGVnb3JpZXMoKTtcblxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBmZXRjaGVkIGFsbCBjYXRlZ29yaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1NlcnZlciBFcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiYXBpQ29ubmVjdG9yIiwicmVxIiwicmVzIiwiY29ubmVjdCIsImNvbm5lY3REQiIsIm1ldGhvZCIsImNhdGVnb3JpZXMiLCJnZXRDYXRlZ29yaWVzIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJkYXRhIiwiZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/jobs/categories/retrives.ts\n");

/***/ }),

/***/ "(api)/../../packages/api-connector/dist/index.js":
/*!**************************************************!*\
  !*** ../../packages/api-connector/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst PATH = process.env.PROVIDER || \"@metajob/next-local\";\nasync function Provider() {\n    if (PATH === \"@metajob/next-mongo\") {\n        const { apiProvider  } = await __webpack_require__.e(/*! import() */ \"_api_packages_next-mongo_dist_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! @metajob/next-mongo */ \"(api)/../../packages/next-mongo/dist/index.js\"));\n        return apiProvider;\n    }\n    if (PATH === \"@metajob/next-local\") {\n        const { apiProvider: apiProvider1  } = await __webpack_require__.e(/*! import() */ \"_api_packages_next-local_dist_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! @metajob/next-local */ \"(api)/../../packages/next-local/dist/index.js\"));\n        return apiProvider1;\n    }\n    throw new Error(`Unknown provider: ${PATH}`);\n}\nconst apiConnector = Provider().then((connection)=>{\n    return connection;\n}).catch((err)=>{\n    throw err;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiConnector);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vLi4vcGFja2FnZXMvYXBpLWNvbm5lY3Rvci9kaXN0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZSxRQUFRLCtNQUE2QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkJBQTZCLFFBQVEsK01BQTZCO0FBQ2xGO0FBQ0E7QUFDQSx5Q0FBeUMsS0FBSztBQUM5QztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS8uLi8uLi9wYWNrYWdlcy9hcGktY29ubmVjdG9yL2Rpc3QvaW5kZXguanM/MjhlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQQVRIID0gcHJvY2Vzcy5lbnYuUFJPVklERVIgfHwgXCJAbWV0YWpvYi9uZXh0LWxvY2FsXCI7XG5hc3luYyBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICBpZiAoUEFUSCA9PT0gXCJAbWV0YWpvYi9uZXh0LW1vbmdvXCIpIHtcbiAgICAgICAgY29uc3QgeyBhcGlQcm92aWRlciAgfSA9IGF3YWl0IGltcG9ydChcIkBtZXRham9iL25leHQtbW9uZ29cIik7XG4gICAgICAgIHJldHVybiBhcGlQcm92aWRlcjtcbiAgICB9XG4gICAgaWYgKFBBVEggPT09IFwiQG1ldGFqb2IvbmV4dC1sb2NhbFwiKSB7XG4gICAgICAgIGNvbnN0IHsgYXBpUHJvdmlkZXI6IGFwaVByb3ZpZGVyMSAgfSA9IGF3YWl0IGltcG9ydChcIkBtZXRham9iL25leHQtbG9jYWxcIik7XG4gICAgICAgIHJldHVybiBhcGlQcm92aWRlcjE7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwcm92aWRlcjogJHtQQVRIfWApO1xufVxuY29uc3QgYXBpQ29ubmVjdG9yID0gUHJvdmlkZXIoKS50aGVuKChjb25uZWN0aW9uKT0+e1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xufSkuY2F0Y2goKGVycik9PntcbiAgICB0aHJvdyBlcnI7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGFwaUNvbm5lY3RvcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/../../packages/api-connector/dist/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/jobs/categories/retrives.ts"));
module.exports = __webpack_exports__;

})();