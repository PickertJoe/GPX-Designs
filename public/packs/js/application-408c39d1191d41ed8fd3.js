/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js").start();

__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js").start();

__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'lat_longs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (input.closest('fieldset[disabled]')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v7.2.0 (2019-09-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (P, N) {
  "object" === ( false ? undefined : _typeof(module)) && module.exports ? (N["default"] = N, module.exports = P.document ? N(P) : N) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return N(P);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})("undefined" !== typeof window ? window : this, function (P) {
  function N(c, n, A, D) {
    c.hasOwnProperty(n) || (c[n] = D.apply(null, A));
  }

  var H = {};
  N(H, "parts/Globals.js", [], function () {
    var c = "undefined" !== typeof P ? P : "undefined" !== typeof window ? window : {},
        n = c.document,
        A = c.navigator && c.navigator.userAgent || "",
        D = n && n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        F = /(edge|msie|trident)/i.test(A) && !c.opera,
        z = -1 !== A.indexOf("Firefox"),
        u = -1 !== A.indexOf("Chrome"),
        L = z && 4 > parseInt(A.split("Firefox/")[1], 10);
    return {
      product: "Highcharts",
      version: "7.2.0",
      deg2rad: 2 * Math.PI / 360,
      doc: n,
      hasBidiBug: L,
      hasTouch: !!c.TouchEvent,
      isMS: F,
      isWebKit: -1 !== A.indexOf("AppleWebKit"),
      isFirefox: z,
      isChrome: u,
      isSafari: !u && -1 !== A.indexOf("Safari"),
      isTouchDevice: /(Mobile|Android|Windows Phone)/.test(A),
      SVG_NS: "http://www.w3.org/2000/svg",
      chartCount: 0,
      seriesTypes: {},
      symbolSizes: {},
      svg: D,
      win: c,
      marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
      noop: function noop() {},
      charts: [],
      dateFormats: {}
    };
  });
  N(H, "parts/Utilities.js", [H["parts/Globals.js"]], function (c) {
    function n(b, a) {
      return parseInt(b, a || 10);
    }

    function A(b) {
      return "string" === typeof b;
    }

    function D(b) {
      b = Object.prototype.toString.call(b);
      return "[object Array]" === b || "[object Array Iterator]" === b;
    }

    function F(b, a) {
      return !!b && "object" === _typeof(b) && (!a || !D(b));
    }

    function z(b) {
      return F(b) && "number" === typeof b.nodeType;
    }

    function u(b) {
      var a = b && b.constructor;
      return !(!F(b, !0) || z(b) || !a || !a.name || "Object" === a.name);
    }

    function L(b) {
      return "number" === typeof b && !isNaN(b) && Infinity > b && -Infinity < b;
    }

    function y(b) {
      return "undefined" !== typeof b && null !== b;
    }

    function C(b, a, d) {
      var f;
      A(a) ? y(d) ? b.setAttribute(a, d) : b && b.getAttribute && ((f = b.getAttribute(a)) || "class" !== a || (f = b.getAttribute(a + "Name"))) : x(a, function (a, d) {
        b.setAttribute(d, a);
      });
      return f;
    }

    function x(b, a, d) {
      for (var f in b) {
        Object.hasOwnProperty.call(b, f) && a.call(d || b[f], b[f], f, b);
      }
    }

    c.timers = [];
    var m = c.charts,
        p = c.doc,
        g = c.win;

    c.error = function (b, a, d) {
      var f = L(b) ? "Highcharts error #" + b + ": www.highcharts.com/errors/" + b : b,
          e = function e() {
        if (a) throw Error(f);
        g.console && console.log(f);
      };

      d ? c.fireEvent(d, "displayError", {
        code: b,
        message: f
      }, e) : e();
    };

    c.Fx = function (b, a, d) {
      this.options = a;
      this.elem = b;
      this.prop = d;
    };

    c.Fx.prototype = {
      dSetter: function dSetter() {
        var b = this.paths[0],
            a = this.paths[1],
            d = [],
            f = this.now,
            e = b.length;
        if (1 === f) d = this.toD;else if (e === a.length && 1 > f) for (; e--;) {
          var c = parseFloat(b[e]);
          d[e] = isNaN(c) ? a[e] : f * parseFloat("" + (a[e] - c)) + c;
        } else d = a;
        this.elem.attr("d", d, null, !0);
      },
      update: function update() {
        var b = this.elem,
            a = this.prop,
            d = this.now,
            f = this.options.step;
        if (this[a + "Setter"]) this[a + "Setter"]();else b.attr ? b.element && b.attr(a, d, null, !0) : b.style[a] = d + this.unit;
        f && f.call(b, d, this);
      },
      run: function run(b, a, d) {
        var f = this,
            e = f.options,
            h = function h(a) {
          return h.stopped ? !1 : f.step(a);
        },
            r = g.requestAnimationFrame || function (a) {
          setTimeout(a, 13);
        },
            E = function E() {
          for (var a = 0; a < c.timers.length; a++) {
            c.timers[a]() || c.timers.splice(a--, 1);
          }

          c.timers.length && r(E);
        };

        b !== a || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = b, this.end = a, this.unit = d, this.now = this.start, this.pos = 0, h.elem = this.elem, h.prop = this.prop, h() && 1 === c.timers.push(h) && r(E)) : (delete e.curAnim[this.prop], e.complete && 0 === Object.keys(e.curAnim).length && e.complete.call(this.elem));
      },
      step: function step(b) {
        var a = +new Date(),
            d = this.options,
            f = this.elem,
            e = d.complete,
            c = d.duration,
            r = d.curAnim;
        if (f.attr && !f.element) b = !1;else if (b || a >= c + this.startTime) {
          this.now = this.end;
          this.pos = 1;
          this.update();
          var E = r[this.prop] = !0;
          x(r, function (a) {
            !0 !== a && (E = !1);
          });
          E && e && e.call(f);
          b = !1;
        } else this.pos = d.easing((a - this.startTime) / c), this.now = this.start + (this.end - this.start) * this.pos, this.update(), b = !0;
        return b;
      },
      initPath: function initPath(b, a, d) {
        function f(a) {
          for (t = a.length; t--;) {
            var b = "M" === a[t] || "L" === a[t];
            var d = /[a-zA-Z]/.test(a[t + 3]);
            b && d && a.splice(t + 1, 0, a[t + 1], a[t + 2], a[t + 1], a[t + 2]);
          }
        }

        function e(a, b) {
          for (; a.length < J;) {
            a[0] = b[J - a.length];
            var d = a.slice(0, v);
            [].splice.apply(a, [0, 0].concat(d));
            B && (d = a.slice(a.length - v), [].splice.apply(a, [a.length, 0].concat(d)), t--);
          }

          a[0] = "M";
        }

        function c(a, b) {
          for (var d = (J - a.length) / v; 0 < d && d--;) {
            k = a.slice().splice(a.length / I - v, v * I), k[0] = b[J - v - d * v], q && (k[v - 6] = k[v - 2], k[v - 5] = k[v - 1]), [].splice.apply(a, [a.length / I, 0].concat(k)), B && d--;
          }
        }

        a = a || "";
        var r = b.startX,
            E = b.endX,
            q = -1 < a.indexOf("C"),
            v = q ? 7 : 3,
            k,
            t;
        a = a.split(" ");
        d = d.slice();
        var B = b.isArea,
            I = B ? 2 : 1;
        q && (f(a), f(d));

        if (r && E) {
          for (t = 0; t < r.length; t++) {
            if (r[t] === E[0]) {
              var w = t;
              break;
            } else if (r[0] === E[E.length - r.length + t]) {
              w = t;
              var l = !0;
              break;
            } else if (r[r.length - 1] === E[E.length - r.length + t]) {
              w = r.length - t;
              break;
            }
          }

          "undefined" === typeof w && (a = []);
        }

        if (a.length && L(w)) {
          var J = d.length + w * I * v;
          l ? (e(a, d), c(d, a)) : (e(d, a), c(a, d));
        }

        return [a, d];
      },
      fillSetter: function fillSetter() {
        c.Fx.prototype.strokeSetter.apply(this, arguments);
      },
      strokeSetter: function strokeSetter() {
        this.elem.attr(this.prop, c.color(this.start).tweenTo(c.color(this.end), this.pos), null, !0);
      }
    };

    c.merge = function () {
      var b,
          a = arguments,
          d = {},
          f = function f(a, b) {
        "object" !== _typeof(a) && (a = {});
        x(b, function (d, e) {
          !F(d, !0) || u(d) || z(d) ? a[e] = b[e] : a[e] = f(a[e] || {}, d);
        });
        return a;
      };

      !0 === a[0] && (d = a[1], a = Array.prototype.slice.call(a, 2));
      var e = a.length;

      for (b = 0; b < e; b++) {
        d = f(d, a[b]);
      }

      return d;
    };

    c.syncTimeout = function (b, a, d) {
      if (a) return setTimeout(b, a, d);
      b.call(0, d);
    };

    c.clearTimeout = function (b) {
      y(b) && clearTimeout(b);
    };

    c.extend = function (b, a) {
      var d;
      b || (b = {});

      for (d in a) {
        b[d] = a[d];
      }

      return b;
    };

    c.pick = function () {
      var b = arguments,
          a,
          d = b.length;

      for (a = 0; a < d; a++) {
        var f = b[a];
        if ("undefined" !== typeof f && null !== f) return f;
      }
    };

    c.css = function (b, a) {
      c.isMS && !c.svg && a && "undefined" !== typeof a.opacity && (a.filter = "alpha(opacity=" + 100 * a.opacity + ")");
      c.extend(b.style, a);
    };

    c.createElement = function (b, a, d, f, e) {
      b = p.createElement(b);
      var h = c.css;
      a && c.extend(b, a);
      e && h(b, {
        padding: "0",
        border: "none",
        margin: "0"
      });
      d && h(b, d);
      f && f.appendChild(b);
      return b;
    };

    c.extendClass = function (b, a) {
      var d = function d() {};

      d.prototype = new b();
      c.extend(d.prototype, a);
      return d;
    };

    c.pad = function (b, a, d) {
      return Array((a || 2) + 1 - String(b).replace("-", "").length).join(d || "0") + b;
    };

    c.relativeLength = function (b, a, d) {
      return /%$/.test(b) ? a * parseFloat(b) / 100 + (d || 0) : parseFloat(b);
    };

    c.wrap = function (b, a, d) {
      var f = b[a];

      b[a] = function () {
        var a = Array.prototype.slice.call(arguments),
            b = arguments,
            c = this;

        c.proceed = function () {
          f.apply(c, arguments.length ? arguments : b);
        };

        a.unshift(f);
        a = d.apply(this, a);
        c.proceed = null;
        return a;
      };
    };

    c.datePropsToTimestamps = function (b) {
      x(b, function (a, d) {
        F(a) && "function" === typeof a.getTime ? b[d] = a.getTime() : (F(a) || D(a)) && c.datePropsToTimestamps(a);
      });
    };

    c.formatSingle = function (b, a, d) {
      var f = /\.([0-9])/,
          e = c.defaultOptions.lang;
      /f$/.test(b) ? (d = (d = b.match(f)) ? d[1] : -1, null !== a && (a = c.numberFormat(a, d, e.decimalPoint, -1 < b.indexOf(",") ? e.thousandsSep : ""))) : a = (d || c.time).dateFormat(b, a);
      return a;
    };

    c.format = function (b, a, d) {
      for (var f = "{", e = !1, h, r, E, q, v = [], k; b;) {
        f = b.indexOf(f);
        if (-1 === f) break;
        h = b.slice(0, f);

        if (e) {
          h = h.split(":");
          r = h.shift().split(".");
          q = r.length;
          k = a;

          for (E = 0; E < q; E++) {
            k && (k = k[r[E]]);
          }

          h.length && (k = c.formatSingle(h.join(":"), k, d));
          v.push(k);
        } else v.push(h);

        b = b.slice(f + 1);
        f = (e = !e) ? "}" : "{";
      }

      v.push(b);
      return v.join("");
    };

    c.getMagnitude = function (b) {
      return Math.pow(10, Math.floor(Math.log(b) / Math.LN10));
    };

    c.normalizeTickInterval = function (b, a, d, f, e) {
      var h = b;
      d = c.pick(d, 1);
      var r = b / d;
      a || (a = e ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === f && (1 === d ? a = a.filter(function (a) {
        return 0 === a % 1;
      }) : .1 >= d && (a = [1 / d])));

      for (f = 0; f < a.length && !(h = a[f], e && h * d >= b || !e && r <= (a[f] + (a[f + 1] || a[f])) / 2); f++) {
        ;
      }

      return h = c.correctFloat(h * d, -Math.round(Math.log(.001) / Math.LN10));
    };

    c.stableSort = function (b, a) {
      var d = b.length,
          f,
          e;

      for (e = 0; e < d; e++) {
        b[e].safeI = e;
      }

      b.sort(function (b, d) {
        f = a(b, d);
        return 0 === f ? b.safeI - d.safeI : f;
      });

      for (e = 0; e < d; e++) {
        delete b[e].safeI;
      }
    };

    c.arrayMin = function (b) {
      for (var a = b.length, d = b[0]; a--;) {
        b[a] < d && (d = b[a]);
      }

      return d;
    };

    c.arrayMax = function (b) {
      for (var a = b.length, d = b[0]; a--;) {
        b[a] > d && (d = b[a]);
      }

      return d;
    };

    c.destroyObjectProperties = function (b, a) {
      x(b, function (d, f) {
        d && d !== a && d.destroy && d.destroy();
        delete b[f];
      });
    };

    c.discardElement = function (b) {
      var a = c.garbageBin;
      a || (a = c.createElement("div"));
      b && a.appendChild(b);
      a.innerHTML = "";
    };

    c.correctFloat = function (b, a) {
      return parseFloat(b.toPrecision(a || 14));
    };

    c.setAnimation = function (b, a) {
      a.renderer.globalAnimation = c.pick(b, a.options.chart.animation, !0);
    };

    c.animObject = function (b) {
      return F(b) ? c.merge(b) : {
        duration: b ? 500 : 0
      };
    };

    c.timeUnits = {
      millisecond: 1,
      second: 1E3,
      minute: 6E4,
      hour: 36E5,
      day: 864E5,
      week: 6048E5,
      month: 24192E5,
      year: 314496E5
    };

    c.numberFormat = function (b, a, d, f) {
      b = +b || 0;
      a = +a;
      var e = c.defaultOptions.lang,
          h = (b.toString().split(".")[1] || "").split("e")[0].length,
          r = b.toString().split("e");
      if (-1 === a) a = Math.min(h, 20);else if (!L(a)) a = 2;else if (a && r[1] && 0 > r[1]) {
        var m = a + +r[1];
        0 <= m ? (r[0] = (+r[0]).toExponential(m).split("e")[0], a = m) : (r[0] = r[0].split(".")[0] || 0, b = 20 > a ? (r[0] * Math.pow(10, r[1])).toFixed(a) : 0, r[1] = 0);
      }
      var q = (Math.abs(r[1] ? r[0] : b) + Math.pow(10, -Math.max(a, h) - 1)).toFixed(a);
      h = String(n(q));
      m = 3 < h.length ? h.length % 3 : 0;
      d = c.pick(d, e.decimalPoint);
      f = c.pick(f, e.thousandsSep);
      b = (0 > b ? "-" : "") + (m ? h.substr(0, m) + f : "");
      b += h.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + f);
      a && (b += d + q.slice(-a));
      r[1] && 0 !== +b && (b += "e" + r[1]);
      return b;
    };

    Math.easeInOutSine = function (b) {
      return -.5 * (Math.cos(Math.PI * b) - 1);
    };

    c.getStyle = function (b, a, d) {
      if ("width" === a) return a = Math.min(b.offsetWidth, b.scrollWidth), d = b.getBoundingClientRect && b.getBoundingClientRect().width, d < a && d >= a - 1 && (a = Math.floor(d)), Math.max(0, a - c.getStyle(b, "padding-left") - c.getStyle(b, "padding-right"));
      if ("height" === a) return Math.max(0, Math.min(b.offsetHeight, b.scrollHeight) - c.getStyle(b, "padding-top") - c.getStyle(b, "padding-bottom"));
      g.getComputedStyle || c.error(27, !0);
      if (b = g.getComputedStyle(b, void 0)) b = b.getPropertyValue(a), c.pick(d, "opacity" !== a) && (b = n(b));
      return b;
    };

    c.inArray = function (b, a, d) {
      return a.indexOf(b, d);
    };

    c.find = Array.prototype.find ? function (b, a) {
      return b.find(a);
    } : function (b, a) {
      var d,
          f = b.length;

      for (d = 0; d < f; d++) {
        if (a(b[d], d)) return b[d];
      }
    };
    c.keys = Object.keys;

    c.offset = function (b) {
      var a = p.documentElement;
      b = b.parentElement || b.parentNode ? b.getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: b.top + (g.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        left: b.left + (g.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
      };
    };

    c.stop = function (b, a) {
      for (var d = c.timers.length; d--;) {
        c.timers[d].elem !== b || a && a !== c.timers[d].prop || (c.timers[d].stopped = !0);
      }
    };

    x({
      map: "map",
      each: "forEach",
      grep: "filter",
      reduce: "reduce",
      some: "some"
    }, function (b, a) {
      c[a] = function (a) {
        return Array.prototype[b].apply(a, [].slice.call(arguments, 1));
      };
    });

    c.addEvent = function (b, a, d, f) {
      void 0 === f && (f = {});
      var e = b.addEventListener || c.addEventListenerPolyfill;
      var h = "function" === typeof b && b.prototype ? b.prototype.protoEvents = b.prototype.protoEvents || {} : b.hcEvents = b.hcEvents || {};
      c.Point && b instanceof c.Point && b.series && b.series.chart && (b.series.chart.runTrackerClick = !0);
      e && e.call(b, a, d, !1);
      h[a] || (h[a] = []);
      h[a].push({
        fn: d,
        order: "number" === typeof f.order ? f.order : Infinity
      });
      h[a].sort(function (a, b) {
        return a.order - b.order;
      });
      return function () {
        c.removeEvent(b, a, d);
      };
    };

    c.removeEvent = function (b, a, d) {
      function f(a, d) {
        var e = b.removeEventListener || c.removeEventListenerPolyfill;
        e && e.call(b, a, d, !1);
      }

      function e(d) {
        var e;

        if (b.nodeName) {
          if (a) {
            var c = {};
            c[a] = !0;
          } else c = d;

          x(c, function (a, b) {
            if (d[b]) for (e = d[b].length; e--;) {
              f(b, d[b][e].fn);
            }
          });
        }
      }

      var h;
      ["protoEvents", "hcEvents"].forEach(function (c) {
        var r = b[c];
        r && (a ? (h = r[a] || [], d ? (r[a] = h.filter(function (a) {
          return d !== a.fn;
        }), f(a, d)) : (e(r), r[a] = [])) : (e(r), b[c] = {}));
      });
    };

    c.fireEvent = function (b, a, d, f) {
      var e;
      d = d || {};

      if (p.createEvent && (b.dispatchEvent || b.fireEvent)) {
        var h = p.createEvent("Events");
        h.initEvent(a, !0, !0);
        c.extend(h, d);
        b.dispatchEvent ? b.dispatchEvent(h) : b.fireEvent(a, h);
      } else d.target || c.extend(d, {
        preventDefault: function preventDefault() {
          d.defaultPrevented = !0;
        },
        target: b,
        type: a
      }), function (a, f) {
        void 0 === a && (a = []);
        void 0 === f && (f = []);
        var c = 0,
            h = 0,
            k = a.length + f.length;

        for (e = 0; e < k; e++) {
          !1 === (a[c] ? f[h] ? a[c].order <= f[h].order ? a[c++] : f[h++] : a[c++] : f[h++]).fn.call(b, d) && d.preventDefault();
        }
      }(b.protoEvents && b.protoEvents[a], b.hcEvents && b.hcEvents[a]);

      f && !d.defaultPrevented && f.call(b, d);
    };

    c.animate = function (b, a, d) {
      var f,
          e = "",
          h,
          r;

      if (!F(d)) {
        var m = arguments;
        d = {
          duration: m[2],
          easing: m[3],
          complete: m[4]
        };
      }

      L(d.duration) || (d.duration = 400);
      d.easing = "function" === typeof d.easing ? d.easing : Math[d.easing] || Math.easeInOutSine;
      d.curAnim = c.merge(a);
      x(a, function (q, v) {
        c.stop(b, v);
        r = new c.Fx(b, d, v);
        h = null;
        "d" === v ? (r.paths = r.initPath(b, b.d, a.d), r.toD = a.d, f = 0, h = 1) : b.attr ? f = b.attr(v) : (f = parseFloat(c.getStyle(b, v)) || 0, "opacity" !== v && (e = "px"));
        h || (h = q);
        h && h.match && h.match("px") && (h = h.replace(/px/g, ""));
        r.run(f, h, e);
      });
    };

    c.seriesType = function (b, a, d, f, e) {
      var h = c.getOptions(),
          r = c.seriesTypes;
      h.plotOptions[b] = c.merge(h.plotOptions[a], d);
      r[b] = c.extendClass(r[a] || function () {}, f);
      r[b].prototype.type = b;
      e && (r[b].prototype.pointClass = c.extendClass(c.Point, e));
      return r[b];
    };

    c.uniqueKey = function () {
      var b = Math.random().toString(36).substring(2, 9),
          a = 0;
      return function () {
        return "highcharts-" + b + "-" + a++;
      };
    }();

    c.isFunction = function (b) {
      return "function" === typeof b;
    };

    g.jQuery && (g.jQuery.fn.highcharts = function () {
      var b = [].slice.call(arguments);
      if (this[0]) return b[0] ? (new c[A(b[0]) ? b.shift() : "Chart"](this[0], b[0], b[1]), this) : m[C(this[0], "data-highcharts-chart")];
    });
    return {
      attr: C,
      defined: y,
      erase: function erase(b, a) {
        for (var d = b.length; d--;) {
          if (b[d] === a) {
            b.splice(d, 1);
            break;
          }
        }
      },
      isArray: D,
      isClass: u,
      isDOMElement: z,
      isNumber: L,
      isObject: F,
      isString: A,
      objectEach: x,
      pInt: n,
      splat: function splat(b) {
        return D(b) ? b : [b];
      }
    };
  });
  N(H, "parts/Color.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isNumber,
        D = n.pInt,
        F = c.merge;

    c.Color = function (z) {
      if (!(this instanceof c.Color)) return new c.Color(z);
      this.init(z);
    };

    c.Color.prototype = {
      parsers: [{
        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        parse: function parse(c) {
          return [D(c[1]), D(c[2]), D(c[3]), parseFloat(c[4], 10)];
        }
      }, {
        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        parse: function parse(c) {
          return [D(c[1]), D(c[2]), D(c[3]), 1];
        }
      }],
      names: {
        white: "#ffffff",
        black: "#000000"
      },
      init: function init(z) {
        var u, n;
        if ((this.input = z = this.names[z && z.toLowerCase ? z.toLowerCase() : ""] || z) && z.stops) this.stops = z.stops.map(function (x) {
          return new c.Color(x[1]);
        });else {
          if (z && z.charAt && "#" === z.charAt()) {
            var y = z.length;
            z = parseInt(z.substr(1), 16);
            7 === y ? u = [(z & 16711680) >> 16, (z & 65280) >> 8, z & 255, 1] : 4 === y && (u = [(z & 3840) >> 4 | (z & 3840) >> 8, (z & 240) >> 4 | z & 240, (z & 15) << 4 | z & 15, 1]);
          }

          if (!u) for (n = this.parsers.length; n-- && !u;) {
            var C = this.parsers[n];
            (y = C.regex.exec(z)) && (u = C.parse(y));
          }
        }
        this.rgba = u || [];
      },
      get: function get(c) {
        var u = this.input,
            z = this.rgba;

        if (this.stops) {
          var y = F(u);
          y.stops = [].concat(y.stops);
          this.stops.forEach(function (u, x) {
            y.stops[x] = [y.stops[x][0], u.get(c)];
          });
        } else y = z && A(z[0]) ? "rgb" === c || !c && 1 === z[3] ? "rgb(" + z[0] + "," + z[1] + "," + z[2] + ")" : "a" === c ? z[3] : "rgba(" + z.join(",") + ")" : u;

        return y;
      },
      brighten: function brighten(c) {
        var u,
            z = this.rgba;
        if (this.stops) this.stops.forEach(function (u) {
          u.brighten(c);
        });else if (A(c) && 0 !== c) for (u = 0; 3 > u; u++) {
          z[u] += D(255 * c), 0 > z[u] && (z[u] = 0), 255 < z[u] && (z[u] = 255);
        }
        return this;
      },
      setOpacity: function setOpacity(c) {
        this.rgba[3] = c;
        return this;
      },
      tweenTo: function tweenTo(c, u) {
        var z = this.rgba,
            y = c.rgba;
        y.length && z && z.length ? (c = 1 !== y[3] || 1 !== z[3], u = (c ? "rgba(" : "rgb(") + Math.round(y[0] + (z[0] - y[0]) * (1 - u)) + "," + Math.round(y[1] + (z[1] - y[1]) * (1 - u)) + "," + Math.round(y[2] + (z[2] - y[2]) * (1 - u)) + (c ? "," + (y[3] + (z[3] - y[3]) * (1 - u)) : "") + ")") : u = c.input || "none";
        return u;
      }
    };

    c.color = function (z) {
      return new c.Color(z);
    };
  });
  N(H, "parts/SvgRenderer.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.erase,
        z = n.isArray,
        u = n.isNumber,
        L = n.isObject,
        y = n.isString,
        C = n.objectEach,
        x = n.pInt,
        m = n.splat,
        p = c.addEvent,
        g = c.animate,
        b = c.charts,
        a = c.color,
        d = c.css,
        f = c.createElement,
        e = c.deg2rad,
        h = c.destroyObjectProperties,
        r = c.doc,
        E = c.extend,
        q = c.hasTouch,
        v = c.isFirefox,
        k = c.isMS,
        t = c.isWebKit,
        B = c.merge,
        I = c.noop,
        w = c.pick,
        l = c.removeEvent,
        J = c.stop,
        K = c.svg,
        T = c.SVG_NS,
        R = c.symbolSizes,
        S = c.win;

    var M = c.SVGElement = function () {
      return this;
    };

    E(M.prototype, {
      opacity: 1,
      SVG_NS: T,
      textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
      init: function init(a, b) {
        this.element = "span" === b ? f(b) : r.createElementNS(this.SVG_NS, b);
        this.renderer = a;
        c.fireEvent(this, "afterInit");
      },
      animate: function animate(a, b, d) {
        var G = c.animObject(w(b, this.renderer.globalAnimation, !0));
        w(r.hidden, r.msHidden, r.webkitHidden, !1) && (G.duration = 0);
        0 !== G.duration ? (d && (G.complete = d), g(this, a, G)) : (this.attr(a, void 0, d), C(a, function (a, b) {
          G.step && G.step.call(this, a, {
            prop: b,
            pos: 1
          });
        }, this));
        return this;
      },
      complexColor: function complexColor(a, b, d) {
        var G = this.renderer,
            l,
            w,
            e,
            f,
            k,
            O,
            t,
            h,
            J,
            K,
            r,
            Q = [],
            M;
        c.fireEvent(this.renderer, "complexColor", {
          args: arguments
        }, function () {
          a.radialGradient ? w = "radialGradient" : a.linearGradient && (w = "linearGradient");
          w && (e = a[w], k = G.gradients, t = a.stops, K = d.radialReference, z(e) && (a[w] = e = {
            x1: e[0],
            y1: e[1],
            x2: e[2],
            y2: e[3],
            gradientUnits: "userSpaceOnUse"
          }), "radialGradient" === w && K && !D(e.gradientUnits) && (f = e, e = B(e, G.getRadialAttr(K, f), {
            gradientUnits: "userSpaceOnUse"
          })), C(e, function (a, G) {
            "id" !== G && Q.push(G, a);
          }), C(t, function (a) {
            Q.push(a);
          }), Q = Q.join(","), k[Q] ? r = k[Q].attr("id") : (e.id = r = c.uniqueKey(), k[Q] = O = G.createElement(w).attr(e).add(G.defs), O.radAttr = f, O.stops = [], t.forEach(function (a) {
            0 === a[1].indexOf("rgba") ? (l = c.color(a[1]), h = l.get("rgb"), J = l.get("a")) : (h = a[1], J = 1);
            a = G.createElement("stop").attr({
              offset: a[0],
              "stop-color": h,
              "stop-opacity": J
            }).add(O);
            O.stops.push(a);
          })), M = "url(" + G.url + "#" + r + ")", d.setAttribute(b, M), d.gradient = Q, a.toString = function () {
            return M;
          });
        });
      },
      applyTextOutline: function applyTextOutline(a) {
        var b = this.element,
            G;
        -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
        a = a.split(" ");
        var d = a[a.length - 1];

        if ((G = a[0]) && "none" !== G && c.svg) {
          this.fakeTS = !0;
          a = [].slice.call(b.getElementsByTagName("tspan"));
          this.ySetter = this.xSetter;
          G = G.replace(/(^[\d\.]+)(.*?)$/g, function (a, b, G) {
            return 2 * b + G;
          });
          this.removeTextOutline(a);
          var w = b.firstChild;
          a.forEach(function (a, l) {
            0 === l && (a.setAttribute("x", b.getAttribute("x")), l = b.getAttribute("y"), a.setAttribute("y", l || 0), null === l && b.setAttribute("y", 0));
            a = a.cloneNode(1);
            A(a, {
              "class": "highcharts-text-outline",
              fill: d,
              stroke: d,
              "stroke-width": G,
              "stroke-linejoin": "round"
            });
            b.insertBefore(a, w);
          });
        }
      },
      removeTextOutline: function removeTextOutline(a) {
        for (var b = a.length, G; b--;) {
          G = a[b], "highcharts-text-outline" === G.getAttribute("class") && F(a, this.element.removeChild(G));
        }
      },
      symbolCustomAttribs: "x y width height r start end innerR anchorX anchorY rounded".split(" "),
      attr: function attr(a, b, d, l) {
        var G = this.element,
            w,
            e = this,
            f,
            k,
            O = this.symbolCustomAttribs;

        if ("string" === typeof a && void 0 !== b) {
          var t = a;
          a = {};
          a[t] = b;
        }

        "string" === typeof a ? e = (this[a + "Getter"] || this._defaultGetter).call(this, a, G) : (C(a, function (b, d) {
          f = !1;
          l || J(this, d);
          this.symbolName && -1 !== c.inArray(d, O) && (w || (this.symbolAttr(a), w = !0), f = !0);
          !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0);
          f || (k = this[d + "Setter"] || this._defaultSetter, k.call(this, b, d, G), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, k));
        }, this), this.afterSetters());
        d && d.call(this);
        return e;
      },
      afterSetters: function afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      },
      updateShadows: function updateShadows(a, b, d) {
        for (var G = this.shadows, l = G.length; l--;) {
          d.call(G[l], "height" === a ? Math.max(b - (G[l].cutHeight || 0), 0) : "d" === a ? this.d : b, a, G[l]);
        }
      },
      addClass: function addClass(a, b) {
        var d = this.attr("class") || "";
        b || (a = (a || "").split(/ /g).reduce(function (a, b) {
          -1 === d.indexOf(b) && a.push(b);
          return a;
        }, d ? [d] : []).join(" "));
        a !== d && this.attr("class", a);
        return this;
      },
      hasClass: function hasClass(a) {
        return -1 !== (this.attr("class") || "").split(" ").indexOf(a);
      },
      removeClass: function removeClass(a) {
        return this.attr("class", (this.attr("class") || "").replace(a, ""));
      },
      symbolAttr: function symbolAttr(a) {
        var b = this;
        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (d) {
          b[d] = w(a[d], b[d]);
        });
        b.attr({
          d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
        });
      },
      clip: function clip(a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      },
      crisp: function crisp(a, b) {
        b = b || a.strokeWidth || 0;
        var d = Math.round(b) % 2 / 2;
        a.x = Math.floor(a.x || this.x || 0) + d;
        a.y = Math.floor(a.y || this.y || 0) + d;
        a.width = Math.floor((a.width || this.width || 0) - 2 * d);
        a.height = Math.floor((a.height || this.height || 0) - 2 * d);
        D(a.strokeWidth) && (a.strokeWidth = b);
        return a;
      },
      css: function css(a) {
        var b = this.styles,
            G = {},
            l = this.element,
            w = "",
            e = !b,
            f = ["textOutline", "textOverflow", "width"];
        a && a.color && (a.fill = a.color);
        b && C(a, function (a, d) {
          a !== b[d] && (G[d] = a, e = !0);
        });

        if (e) {
          b && (a = E(b, G));
          if (a) if (null === a.width || "auto" === a.width) delete this.textWidth;else if ("text" === l.nodeName.toLowerCase() && a.width) var k = this.textWidth = x(a.width);
          this.styles = a;
          k && !K && this.renderer.forExport && delete a.width;

          if (l.namespaceURI === this.SVG_NS) {
            var c = function c(a, b) {
              return "-" + b.toLowerCase();
            };

            C(a, function (a, b) {
              -1 === f.indexOf(b) && (w += b.replace(/([A-Z])/g, c) + ":" + a + ";");
            });
            w && A(l, "style", w);
          } else d(l, a);

          this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline));
        }

        return this;
      },
      getStyle: function getStyle(a) {
        return S.getComputedStyle(this.element || this, "").getPropertyValue(a);
      },
      strokeWidth: function strokeWidth() {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        var a = this.getStyle("stroke-width");
        if (a.indexOf("px") === a.length - 2) a = x(a);else {
          var b = r.createElementNS(T, "rect");
          A(b, {
            width: a,
            "stroke-width": 0
          });
          this.element.parentNode.appendChild(b);
          a = b.getBBox().width;
          b.parentNode.removeChild(b);
        }
        return a;
      },
      on: function on(a, b) {
        var d = this,
            l = d.element;
        q && "click" === a ? (l.ontouchstart = function (a) {
          d.touchEventFired = Date.now();
          a.preventDefault();
          b.call(l, a);
        }, l.onclick = function (a) {
          (-1 === S.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (d.touchEventFired || 0)) && b.call(l, a);
        }) : l["on" + a] = b;
        return this;
      },
      setRadialReference: function setRadialReference(a) {
        var b = this.renderer.gradients[this.element.gradient];
        this.element.radialReference = a;
        b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
        return this;
      },
      translate: function translate(a, b) {
        return this.attr({
          translateX: a,
          translateY: b
        });
      },
      invert: function invert(a) {
        this.inverted = a;
        this.updateTransform();
        return this;
      },
      updateTransform: function updateTransform() {
        var a = this.translateX || 0,
            b = this.translateY || 0,
            d = this.scaleX,
            l = this.scaleY,
            e = this.inverted,
            f = this.rotation,
            k = this.matrix,
            c = this.element;
        e && (a += this.width, b += this.height);
        a = ["translate(" + a + "," + b + ")"];
        D(k) && a.push("matrix(" + k.join(",") + ")");
        e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + w(this.rotationOriginX, c.getAttribute("x"), 0) + " " + w(this.rotationOriginY, c.getAttribute("y") || 0) + ")");
        (D(d) || D(l)) && a.push("scale(" + w(d, 1) + " " + w(l, 1) + ")");
        a.length && c.setAttribute("transform", a.join(" "));
      },
      toFront: function toFront() {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this;
      },
      align: function align(a, b, d) {
        var l,
            G = {};
        var e = this.renderer;
        var f = e.alignedObjects;
        var k, c;

        if (a) {
          if (this.alignOptions = a, this.alignByTranslate = b, !d || y(d)) this.alignTo = l = d || "renderer", F(f, this), f.push(this), d = null;
        } else a = this.alignOptions, b = this.alignByTranslate, l = this.alignTo;

        d = w(d, e[l], e);
        l = a.align;
        e = a.verticalAlign;
        f = (d.x || 0) + (a.x || 0);
        var t = (d.y || 0) + (a.y || 0);
        "right" === l ? k = 1 : "center" === l && (k = 2);
        k && (f += (d.width - (a.width || 0)) / k);
        G[b ? "translateX" : "x"] = Math.round(f);
        "bottom" === e ? c = 1 : "middle" === e && (c = 2);
        c && (t += (d.height - (a.height || 0)) / c);
        G[b ? "translateY" : "y"] = Math.round(t);
        this[this.placed ? "animate" : "attr"](G);
        this.placed = !0;
        this.alignAttr = G;
        return this;
      },
      getBBox: function getBBox(a, b) {
        var d,
            l = this.renderer,
            G = this.element,
            f = this.styles,
            k = this.textStr,
            c,
            t = l.cache,
            h = l.cacheKeys,
            O = G.namespaceURI === this.SVG_NS;
        b = w(b, this.rotation);
        var B = b * e;
        var J = l.styledMode ? G && M.prototype.getStyle.call(G, "font-size") : f && f.fontSize;

        if (D(k)) {
          var K = k.toString();
          -1 === K.indexOf("<") && (K = K.replace(/[0-9]/g, "0"));
          K += ["", b || 0, J, this.textWidth, f && f.textOverflow].join();
        }

        K && !a && (d = t[K]);

        if (!d) {
          if (O || l.forExport) {
            try {
              (c = this.fakeTS && function (a) {
                [].forEach.call(G.querySelectorAll(".highcharts-text-outline"), function (b) {
                  b.style.display = a;
                });
              }) && c("none"), d = G.getBBox ? E({}, G.getBBox()) : {
                width: G.offsetWidth,
                height: G.offsetHeight
              }, c && c("");
            } catch (Z) {
              "";
            }

            if (!d || 0 > d.width) d = {
              width: 0,
              height: 0
            };
          } else d = this.htmlGetBBox();

          l.isSVG && (a = d.width, l = d.height, O && (d.height = l = {
            "11px,17": 14,
            "13px,20": 16
          }[f && f.fontSize + "," + Math.round(l)] || l), b && (d.width = Math.abs(l * Math.sin(B)) + Math.abs(a * Math.cos(B)), d.height = Math.abs(l * Math.cos(B)) + Math.abs(a * Math.sin(B))));

          if (K && 0 < d.height) {
            for (; 250 < h.length;) {
              delete t[h.shift()];
            }

            t[K] || h.push(K);
            t[K] = d;
          }
        }

        return d;
      },
      show: function show(a) {
        return this.attr({
          visibility: a ? "inherit" : "visible"
        });
      },
      hide: function hide(a) {
        a ? this.attr({
          y: -9999
        }) : this.attr({
          visibility: "hidden"
        });
        return this;
      },
      fadeOut: function fadeOut(a) {
        var b = this;
        b.animate({
          opacity: 0
        }, {
          duration: a || 150,
          complete: function complete() {
            b.attr({
              y: -9999
            });
          }
        });
      },
      add: function add(a) {
        var b = this.renderer,
            d = this.element;
        a && (this.parentGroup = a);
        this.parentInverted = a && a.inverted;
        void 0 !== this.textStr && b.buildText(this);
        this.added = !0;
        if (!a || a.handleZ || this.zIndex) var l = this.zIndexSetter();
        l || (a ? a.element : b.box).appendChild(d);
        if (this.onAdd) this.onAdd();
        return this;
      },
      safeRemoveChild: function safeRemoveChild(a) {
        var b = a.parentNode;
        b && b.removeChild(a);
      },
      destroy: function destroy() {
        var a = this,
            b = a.element || {},
            d = a.renderer,
            l = d.isSVG && "SPAN" === b.nodeName && a.parentGroup,
            w = b.ownerSVGElement,
            e = a.clipPath;
        b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
        J(a);
        e && w && ([].forEach.call(w.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
          -1 < a.getAttribute("clip-path").indexOf(e.element.id) && a.removeAttribute("clip-path");
        }), a.clipPath = e.destroy());

        if (a.stops) {
          for (w = 0; w < a.stops.length; w++) {
            a.stops[w] = a.stops[w].destroy();
          }

          a.stops = null;
        }

        a.safeRemoveChild(b);

        for (d.styledMode || a.destroyShadows(); l && l.div && 0 === l.div.childNodes.length;) {
          b = l.parentGroup, a.safeRemoveChild(l.div), delete l.div, l = b;
        }

        a.alignTo && F(d.alignedObjects, a);
        C(a, function (b, d) {
          a[d] && a[d].parentGroup === a && a[d].destroy && a[d].destroy();
          delete a[d];
        });
      },
      shadow: function shadow(a, b, d) {
        var l = [],
            e,
            f = this.element;
        if (!a) this.destroyShadows();else if (!this.shadows) {
          var G = w(a.width, 3);
          var k = (a.opacity || .15) / G;
          var c = this.parentInverted ? "(-1,-1)" : "(" + w(a.offsetX, 1) + ", " + w(a.offsetY, 1) + ")";

          for (e = 1; e <= G; e++) {
            var t = f.cloneNode(0);
            var h = 2 * G + 1 - 2 * e;
            A(t, {
              stroke: a.color || "#000000",
              "stroke-opacity": k * e,
              "stroke-width": h,
              transform: "translate" + c,
              fill: "none"
            });
            t.setAttribute("class", (t.getAttribute("class") || "") + " highcharts-shadow");
            d && (A(t, "height", Math.max(A(t, "height") - h, 0)), t.cutHeight = h);
            b ? b.element.appendChild(t) : f.parentNode && f.parentNode.insertBefore(t, f);
            l.push(t);
          }

          this.shadows = l;
        }
        return this;
      },
      destroyShadows: function destroyShadows() {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);
        this.shadows = void 0;
      },
      xGetter: function xGetter(a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
        return this._defaultGetter(a);
      },
      _defaultGetter: function _defaultGetter(a) {
        a = w(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
        /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
        return a;
      },
      dSetter: function dSetter(a, b, d) {
        a && a.join && (a = a.join(" "));
        /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
        this[b] !== a && (d.setAttribute(b, a), this[b] = a);
      },
      dashstyleSetter: function dashstyleSetter(a) {
        var b,
            d = this["stroke-width"];
        "inherit" === d && (d = 1);

        if (a = a && a.toLowerCase()) {
          a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

          for (b = a.length; b--;) {
            a[b] = x(a[b]) * d;
          }

          a = a.join(",").replace(/NaN/g, "none");
          this.element.setAttribute("stroke-dasharray", a);
        }
      },
      alignSetter: function alignSetter(a) {
        var b = {
          left: "start",
          center: "middle",
          right: "end"
        };
        b[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", b[a]));
      },
      opacitySetter: function opacitySetter(a, b, d) {
        this[b] = a;
        d.setAttribute(b, a);
      },
      titleSetter: function titleSetter(a) {
        var b = this.element.getElementsByTagName("title")[0];
        b || (b = r.createElementNS(this.SVG_NS, "title"), this.element.appendChild(b));
        b.firstChild && b.removeChild(b.firstChild);
        b.appendChild(r.createTextNode(String(w(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
      },
      textSetter: function textSetter(a) {
        a !== this.textStr && (delete this.bBox, delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this));
      },
      setTextPath: function setTextPath(a, b) {
        var d = this.element,
            l = {
          textAnchor: "text-anchor"
        },
            w = !1,
            e = this.textPathWrapper,
            f = !e;
        b = B(!0, {
          enabled: !0,
          attributes: {
            dy: -5,
            startOffset: "50%",
            textAnchor: "middle"
          }
        }, b);
        var k = b.attributes;

        if (a && b && b.enabled) {
          this.options && this.options.padding && (k.dx = -this.options.padding);
          e || (this.textPathWrapper = e = this.renderer.createElement("textPath"), w = !0);
          var G = e.element;
          (b = a.element.getAttribute("id")) || a.element.setAttribute("id", b = c.uniqueKey());
          if (f) for (a = d.getElementsByTagName("tspan"); a.length;) {
            a[0].setAttribute("y", 0), G.appendChild(a[0]);
          }
          w && e.add({
            element: this.text ? this.text.element : d
          });
          G.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + b);
          D(k.dy) && (G.parentNode.setAttribute("dy", k.dy), delete k.dy);
          D(k.dx) && (G.parentNode.setAttribute("dx", k.dx), delete k.dx);
          C(k, function (a, b) {
            G.setAttribute(l[b] || b, a);
          });
          d.removeAttribute("transform");
          this.removeTextOutline.call(e, [].slice.call(d.getElementsByTagName("tspan")));
          this.text && !this.renderer.styledMode && this.attr({
            fill: "none",
            "stroke-width": 0
          });
          this.applyTextOutline = this.updateTransform = I;
        } else e && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(d, a));

        return this;
      },
      destroyTextPath: function destroyTextPath(a, b) {
        var d;
        b.element.setAttribute("id", "");

        for (d = this.textPathWrapper.element.childNodes; d.length;) {
          a.firstChild.appendChild(d[0]);
        }

        a.firstChild.removeChild(this.textPathWrapper.element);
        delete b.textPathWrapper;
      },
      fillSetter: function fillSetter(a, b, d) {
        "string" === typeof a ? d.setAttribute(b, a) : a && this.complexColor(a, b, d);
      },
      visibilitySetter: function visibilitySetter(a, b, d) {
        "inherit" === a ? d.removeAttribute(b) : this[b] !== a && d.setAttribute(b, a);
        this[b] = a;
      },
      zIndexSetter: function zIndexSetter(a, b) {
        var d = this.renderer,
            l = this.parentGroup,
            w = (l || d).element || d.box,
            e = this.element,
            f = !1;
        d = w === d.box;
        var k = this.added;
        var c;
        D(a) ? (e.setAttribute("data-z-index", a), a = +a, this[b] === a && (k = !1)) : D(this[b]) && e.removeAttribute("data-z-index");
        this[b] = a;

        if (k) {
          (a = this.zIndex) && l && (l.handleZ = !0);
          b = w.childNodes;

          for (c = b.length - 1; 0 <= c && !f; c--) {
            l = b[c];
            k = l.getAttribute("data-z-index");
            var G = !D(k);
            if (l !== e) if (0 > a && G && !d && !c) w.insertBefore(e, b[c]), f = !0;else if (x(k) <= a || G && (!D(a) || 0 <= a)) w.insertBefore(e, b[c + 1] || null), f = !0;
          }

          f || (w.insertBefore(e, b[d ? 3 : 0] || null), f = !0);
        }

        return f;
      },
      _defaultSetter: function _defaultSetter(a, b, d) {
        d.setAttribute(b, a);
      }
    });
    M.prototype.yGetter = M.prototype.xGetter;

    M.prototype.translateXSetter = M.prototype.translateYSetter = M.prototype.rotationSetter = M.prototype.verticalAlignSetter = M.prototype.rotationOriginXSetter = M.prototype.rotationOriginYSetter = M.prototype.scaleXSetter = M.prototype.scaleYSetter = M.prototype.matrixSetter = function (a, b) {
      this[b] = a;
      this.doTransform = !0;
    };

    M.prototype["stroke-widthSetter"] = M.prototype.strokeSetter = function (a, b, d) {
      this[b] = a;
      this.stroke && this["stroke-width"] ? (M.prototype.fillSetter.call(this, this.stroke, "stroke", d), d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke ? (d.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
    };

    n = c.SVGRenderer = function () {
      this.init.apply(this, arguments);
    };

    E(n.prototype, {
      Element: M,
      SVG_NS: T,
      init: function init(a, b, l, w, e, f, k) {
        var c = this.createElement("svg").attr({
          version: "1.1",
          "class": "highcharts-root"
        });
        k || c.css(this.getStyle(w));
        w = c.element;
        a.appendChild(w);
        A(a, "dir", "ltr");
        -1 === a.innerHTML.indexOf("xmlns") && A(w, "xmlns", this.SVG_NS);
        this.isSVG = !0;
        this.box = w;
        this.boxWrapper = c;
        this.alignedObjects = [];
        this.url = (v || t) && r.getElementsByTagName("base").length ? S.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
        this.createElement("desc").add().element.appendChild(r.createTextNode("Created with Highcharts 7.2.0"));
        this.defs = this.createElement("defs").add();
        this.allowHTML = f;
        this.forExport = e;
        this.styledMode = k;
        this.gradients = {};
        this.cache = {};
        this.cacheKeys = [];
        this.imgCount = 0;
        this.setSize(b, l, !1);
        var G;
        v && a.getBoundingClientRect && (b = function b() {
          d(a, {
            left: 0,
            top: 0
          });
          G = a.getBoundingClientRect();
          d(a, {
            left: Math.ceil(G.left) - G.left + "px",
            top: Math.ceil(G.top) - G.top + "px"
          });
        }, b(), this.unSubPixelFix = p(S, "resize", b));
      },
      definition: function definition(a) {
        function b(a, l) {
          var w;
          m(a).forEach(function (a) {
            var e = d.createElement(a.tagName),
                f = {};
            C(a, function (a, b) {
              "tagName" !== b && "children" !== b && "textContent" !== b && (f[b] = a);
            });
            e.attr(f);
            e.add(l || d.defs);
            a.textContent && e.element.appendChild(r.createTextNode(a.textContent));
            b(a.children || [], e);
            w = e;
          });
          return w;
        }

        var d = this;
        return b(a);
      },
      getStyle: function getStyle(a) {
        return this.style = E({
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: "12px"
        }, a);
      },
      setStyle: function setStyle(a) {
        this.boxWrapper.css(this.getStyle(a));
      },
      isHidden: function isHidden() {
        return !this.boxWrapper.getBBox().width;
      },
      destroy: function destroy() {
        var a = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        h(this.gradients || {});
        this.gradients = null;
        a && (this.defs = a.destroy());
        this.unSubPixelFix && this.unSubPixelFix();
        return this.alignedObjects = null;
      },
      createElement: function createElement(a) {
        var b = new this.Element();
        b.init(this, a);
        return b;
      },
      draw: I,
      getRadialAttr: function getRadialAttr(a, b) {
        return {
          cx: a[0] - a[2] / 2 + b.cx * a[2],
          cy: a[1] - a[2] / 2 + b.cy * a[2],
          r: b.r * a[2]
        };
      },
      truncate: function truncate(a, b, d, l, w, e, f) {
        var k = this,
            c = a.rotation,
            t,
            G = l ? 1 : 0,
            h = (d || l).length,
            B = h,
            J = [],
            K = function K(a) {
          b.firstChild && b.removeChild(b.firstChild);
          a && b.appendChild(r.createTextNode(a));
        },
            M = function M(e, c) {
          c = c || e;
          if (void 0 === J[c]) if (b.getSubStringLength) try {
            J[c] = w + b.getSubStringLength(0, l ? c + 1 : c);
          } catch (aa) {
            "";
          } else k.getSpanWidth && (K(f(d || l, e)), J[c] = w + k.getSpanWidth(a, b));
          return J[c];
        },
            O;

        a.rotation = 0;
        var q = M(b.textContent.length);

        if (O = w + q > e) {
          for (; G <= h;) {
            B = Math.ceil((G + h) / 2), l && (t = f(l, B)), q = M(B, t && t.length - 1), G === h ? G = h + 1 : q > e ? h = B - 1 : G = B;
          }

          0 === h ? K("") : d && h === d.length - 1 || K(t || f(d || l, B));
        }

        l && l.splice(0, B);
        a.actualWidth = q;
        a.rotation = c;
        return O;
      },
      escapes: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      },
      buildText: function buildText(a) {
        var b = a.element,
            l = this,
            e = l.forExport,
            f = w(a.textStr, "").toString(),
            k = -1 !== f.indexOf("<"),
            c = b.childNodes,
            t,
            h = A(b, "x"),
            G = a.styles,
            B = a.textWidth,
            J = G && G.lineHeight,
            M = G && G.textOutline,
            q = G && "ellipsis" === G.textOverflow,
            v = G && "nowrap" === G.whiteSpace,
            I = G && G.fontSize,
            m,
            g = c.length;
        G = B && !a.added && this.box;

        var E = function E(a) {
          var d;
          l.styledMode || (d = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : I || l.style.fontSize || 12);
          return J ? x(J) : l.fontMetrics(d, a.getAttribute("style") ? a : b).h;
        },
            p = function p(a, b) {
          C(l.escapes, function (d, l) {
            b && -1 !== b.indexOf(d) || (a = a.toString().replace(new RegExp(d, "g"), l));
          });
          return a;
        },
            R = function R(a, b) {
          var d = a.indexOf("<");
          a = a.substring(d, a.indexOf(">") - d);
          d = a.indexOf(b + "=");
          if (-1 !== d && (d = d + b.length + 1, b = a.charAt(d), '"' === b || "'" === b)) return a = a.substring(d + 1), a.substring(0, a.indexOf(b));
        },
            S = /<br.*?>/g;

        var u = [f, q, v, J, M, I, B].join();

        if (u !== a.textCache) {
          for (a.textCache = u; g--;) {
            b.removeChild(c[g]);
          }

          k || M || q || B || -1 !== f.indexOf(" ") && (!v || S.test(f)) ? (G && G.appendChild(b), k ? (f = l.styledMode ? f.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : f.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), f = f.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(S)) : f = [f], f = f.filter(function (a) {
            return "" !== a;
          }), f.forEach(function (w, f) {
            var k = 0,
                c = 0;
            w = w.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
            var G = w.split("|||");
            G.forEach(function (w) {
              if ("" !== w || 1 === G.length) {
                var J = {},
                    M = r.createElementNS(l.SVG_NS, "tspan"),
                    O,
                    g;
                (O = R(w, "class")) && A(M, "class", O);
                if (O = R(w, "style")) O = O.replace(/(;| |^)color([ :])/, "$1fill$2"), A(M, "style", O);
                (g = R(w, "href")) && !e && (A(M, "onclick", 'location.href="' + g + '"'), A(M, "class", "highcharts-anchor"), l.styledMode || d(M, {
                  cursor: "pointer"
                }));
                w = p(w.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");

                if (" " !== w) {
                  M.appendChild(r.createTextNode(w));
                  k ? J.dx = 0 : f && null !== h && (J.x = h);
                  A(M, J);
                  b.appendChild(M);
                  !k && m && (!K && e && d(M, {
                    display: "block"
                  }), A(M, "dy", E(M)));

                  if (B) {
                    var Q = w.replace(/([^\^])-/g, "$1- ").split(" ");
                    J = !v && (1 < G.length || f || 1 < Q.length);
                    g = 0;
                    var x = E(M);
                    if (q) t = l.truncate(a, M, w, void 0, 0, Math.max(0, B - parseInt(I || 12, 10)), function (a, b) {
                      return a.substring(0, b) + "\u2026";
                    });else if (J) for (; Q.length;) {
                      Q.length && !v && 0 < g && (M = r.createElementNS(T, "tspan"), A(M, {
                        dy: x,
                        x: h
                      }), O && A(M, "style", O), M.appendChild(r.createTextNode(Q.join(" ").replace(/- /g, "-"))), b.appendChild(M)), l.truncate(a, M, null, Q, 0 === g ? c : 0, B, function (a, b) {
                        return Q.slice(0, b).join(" ").replace(/- /g, "-");
                      }), c = a.actualWidth, g++;
                    }
                  }

                  k++;
                }
              }
            });
            m = m || b.childNodes.length;
          }), q && t && a.attr("title", p(a.textStr, ["&lt;", "&gt;"])), G && G.removeChild(b), M && a.applyTextOutline && a.applyTextOutline(M)) : b.appendChild(r.createTextNode(p(f)));
        }
      },
      getContrast: function getContrast(b) {
        b = a(b).rgba;
        b[0] *= 1;
        b[1] *= 1.2;
        b[2] *= .5;
        return 459 < b[0] + b[1] + b[2] ? "#000000" : "#FFFFFF";
      },
      button: function button(a, b, d, l, w, e, f, c, t, h) {
        var G = this.label(a, b, d, t, null, null, h, null, "button"),
            J = 0,
            K = this.styledMode;
        G.attr(B({
          padding: 8,
          r: 2
        }, w));

        if (!K) {
          w = B({
            fill: "#f7f7f7",
            stroke: "#cccccc",
            "stroke-width": 1,
            style: {
              color: "#333333",
              cursor: "pointer",
              fontWeight: "normal"
            }
          }, w);
          var M = w.style;
          delete w.style;
          e = B(w, {
            fill: "#e6e6e6"
          }, e);
          var r = e.style;
          delete e.style;
          f = B(w, {
            fill: "#e6ebf5",
            style: {
              color: "#000000",
              fontWeight: "bold"
            }
          }, f);
          var q = f.style;
          delete f.style;
          c = B(w, {
            style: {
              color: "#cccccc"
            }
          }, c);
          var O = c.style;
          delete c.style;
        }

        p(G.element, k ? "mouseover" : "mouseenter", function () {
          3 !== J && G.setState(1);
        });
        p(G.element, k ? "mouseout" : "mouseleave", function () {
          3 !== J && G.setState(J);
        });

        G.setState = function (a) {
          1 !== a && (G.state = J = a);
          G.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
          K || G.attr([w, e, f, c][a || 0]).css([M, r, q, O][a || 0]);
        };

        K || G.attr(w).css(E({
          cursor: "default"
        }, M));
        return G.on("click", function (a) {
          3 !== J && l.call(G, a);
        });
      },
      crispLine: function crispLine(a, b) {
        a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - b % 2 / 2);
        a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + b % 2 / 2);
        return a;
      },
      path: function path(a) {
        var b = this.styledMode ? {} : {
          fill: "none"
        };
        z(a) ? b.d = a : L(a) && E(b, a);
        return this.createElement("path").attr(b);
      },
      circle: function circle(a, b, d) {
        a = L(a) ? a : void 0 === a ? {} : {
          x: a,
          y: b,
          r: d
        };
        b = this.createElement("circle");

        b.xSetter = b.ySetter = function (a, b, d) {
          d.setAttribute("c" + b, a);
        };

        return b.attr(a);
      },
      arc: function arc(a, b, d, l, w, e) {
        L(a) ? (l = a, b = l.y, d = l.r, a = l.x) : l = {
          innerR: l,
          start: w,
          end: e
        };
        a = this.symbol("arc", a, b, d, d, l);
        a.r = d;
        return a;
      },
      rect: function rect(a, b, d, l, w, e) {
        w = L(a) ? a.r : w;
        var f = this.createElement("rect");
        a = L(a) ? a : void 0 === a ? {} : {
          x: a,
          y: b,
          width: Math.max(d, 0),
          height: Math.max(l, 0)
        };
        this.styledMode || (void 0 !== e && (a.strokeWidth = e, a = f.crisp(a)), a.fill = "none");
        w && (a.r = w);

        f.rSetter = function (a, b, d) {
          f.r = a;
          A(d, {
            rx: a,
            ry: a
          });
        };

        f.rGetter = function () {
          return f.r;
        };

        return f.attr(a);
      },
      setSize: function setSize(a, b, d) {
        var l = this.alignedObjects,
            e = l.length;
        this.width = a;
        this.height = b;

        for (this.boxWrapper.animate({
          width: a,
          height: b
        }, {
          step: function step() {
            this.attr({
              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
            });
          },
          duration: w(d, !0) ? void 0 : 0
        }); e--;) {
          l[e].align();
        }
      },
      g: function g(a) {
        var b = this.createElement("g");
        return a ? b.attr({
          "class": "highcharts-" + a
        }) : b;
      },
      image: function image(a, b, d, l, w, e) {
        var f = {
          preserveAspectRatio: "none"
        },
            k = function k(a, b) {
          a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", b) : a.setAttribute("hc-svg-href", b);
        },
            c = function c(b) {
          k(t.element, a);
          e.call(t, b);
        };

        1 < arguments.length && E(f, {
          x: b,
          y: d,
          width: l,
          height: w
        });
        var t = this.createElement("image").attr(f);
        e ? (k(t.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), f = new S.Image(), p(f, "load", c), f.src = a, f.complete && c({})) : k(t.element, a);
        return t;
      },
      symbol: function symbol(a, l, e, k, c, t) {
        var h = this,
            B = /^url\((.*?)\)$/,
            G = B.test(a),
            J = !G && (this.symbols[a] ? a : "circle"),
            K = J && this.symbols[J],
            M = D(l) && K && K.call(this.symbols, Math.round(l), Math.round(e), k, c, t);

        if (K) {
          var q = this.path(M);
          h.styledMode || q.attr("fill", "none");
          E(q, {
            symbolName: J,
            x: l,
            y: e,
            width: k,
            height: c
          });
          t && E(q, t);
        } else if (G) {
          var v = a.match(B)[1];
          q = this.image(v);
          q.imgwidth = w(R[v] && R[v].width, t && t.width);
          q.imgheight = w(R[v] && R[v].height, t && t.height);

          var I = function I() {
            q.attr({
              width: q.width,
              height: q.height
            });
          };

          ["width", "height"].forEach(function (a) {
            q[a + "Setter"] = function (a, b) {
              var d = {},
                  l = this["img" + b],
                  w = "width" === b ? "translateX" : "translateY";
              this[b] = a;
              D(l) && (t && "within" === t.backgroundSize && this.width && this.height && (l = Math.round(l * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(b, l), this.alignByTranslate || (d[w] = ((this[b] || 0) - l) / 2, this.attr(d)));
            };
          });
          D(l) && q.attr({
            x: l,
            y: e
          });
          q.isImg = !0;
          D(q.imgwidth) && D(q.imgheight) ? I() : (q.attr({
            width: 0,
            height: 0
          }), f("img", {
            onload: function onload() {
              var a = b[h.chartIndex];
              0 === this.width && (d(this, {
                position: "absolute",
                top: "-999em"
              }), r.body.appendChild(this));
              R[v] = {
                width: this.width,
                height: this.height
              };
              q.imgwidth = this.width;
              q.imgheight = this.height;
              q.element && I();
              this.parentNode && this.parentNode.removeChild(this);
              h.imgCount--;
              if (!h.imgCount && a && a.onload) a.onload();
            },
            src: v
          }), this.imgCount++);
        }

        return q;
      },
      symbols: {
        circle: function circle(a, b, d, l) {
          return this.arc(a + d / 2, b + l / 2, d / 2, l / 2, {
            start: .5 * Math.PI,
            end: 2.5 * Math.PI,
            open: !1
          });
        },
        square: function square(a, b, d, l) {
          return ["M", a, b, "L", a + d, b, a + d, b + l, a, b + l, "Z"];
        },
        triangle: function triangle(a, b, d, l) {
          return ["M", a + d / 2, b, "L", a + d, b + l, a, b + l, "Z"];
        },
        "triangle-down": function triangleDown(a, b, d, l) {
          return ["M", a, b, "L", a + d, b, a + d / 2, b + l, "Z"];
        },
        diamond: function diamond(a, b, d, l) {
          return ["M", a + d / 2, b, "L", a + d, b + l / 2, a + d / 2, b + l, a, b + l / 2, "Z"];
        },
        arc: function arc(a, b, d, l, e) {
          var f = e.start,
              k = e.r || d,
              c = e.r || l || d,
              t = e.end - .001;
          d = e.innerR;
          l = w(e.open, .001 > Math.abs(e.end - e.start - 2 * Math.PI));
          var h = Math.cos(f),
              B = Math.sin(f),
              J = Math.cos(t);
          t = Math.sin(t);
          f = .001 > e.end - f - Math.PI ? 0 : 1;
          e = ["M", a + k * h, b + c * B, "A", k, c, 0, f, w(e.clockwise, 1), a + k * J, b + c * t];
          D(d) && e.push(l ? "M" : "L", a + d * J, b + d * t, "A", d, d, 0, f, 0, a + d * h, b + d * B);
          e.push(l ? "" : "Z");
          return e;
        },
        callout: function callout(a, b, d, l, w) {
          var e = Math.min(w && w.r || 0, d, l),
              f = e + 6,
              k = w && w.anchorX;
          w = w && w.anchorY;
          var c = ["M", a + e, b, "L", a + d - e, b, "C", a + d, b, a + d, b, a + d, b + e, "L", a + d, b + l - e, "C", a + d, b + l, a + d, b + l, a + d - e, b + l, "L", a + e, b + l, "C", a, b + l, a, b + l, a, b + l - e, "L", a, b + e, "C", a, b, a, b, a + e, b];
          k && k > d ? w > b + f && w < b + l - f ? c.splice(13, 3, "L", a + d, w - 6, a + d + 6, w, a + d, w + 6, a + d, b + l - e) : c.splice(13, 3, "L", a + d, l / 2, k, w, a + d, l / 2, a + d, b + l - e) : k && 0 > k ? w > b + f && w < b + l - f ? c.splice(33, 3, "L", a, w + 6, a - 6, w, a, w - 6, a, b + e) : c.splice(33, 3, "L", a, l / 2, k, w, a, l / 2, a, b + e) : w && w > l && k > a + f && k < a + d - f ? c.splice(23, 3, "L", k + 6, b + l, k, b + l + 6, k - 6, b + l, a + e, b + l) : w && 0 > w && k > a + f && k < a + d - f && c.splice(3, 3, "L", k - 6, b, k, b - 6, k + 6, b, d - e, b);
          return c;
        }
      },
      clipRect: function clipRect(a, b, d, l) {
        var w = c.uniqueKey() + "-",
            e = this.createElement("clipPath").attr({
          id: w
        }).add(this.defs);
        a = this.rect(a, b, d, l, 0).add(e);
        a.id = w;
        a.clipPath = e;
        a.count = 0;
        return a;
      },
      text: function text(a, b, d, l) {
        var w = {};
        if (l && (this.allowHTML || !this.forExport)) return this.html(a, b, d);
        w.x = Math.round(b || 0);
        d && (w.y = Math.round(d));
        D(a) && (w.text = a);
        a = this.createElement("text").attr(w);
        l || (a.xSetter = function (a, b, d) {
          var l = d.getElementsByTagName("tspan"),
              w = d.getAttribute(b),
              e;

          for (e = 0; e < l.length; e++) {
            var f = l[e];
            f.getAttribute(b) === w && f.setAttribute(b, a);
          }

          d.setAttribute(b, a);
        });
        return a;
      },
      fontMetrics: function fontMetrics(a, b) {
        a = !this.styledMode && /px/.test(a) || !S.getComputedStyle ? a || b && b.style && b.style.fontSize || this.style && this.style.fontSize : b && M.prototype.getStyle.call(b, "font-size");
        a = /px/.test(a) ? x(a) : 12;
        b = 24 > a ? a + 3 : Math.round(1.2 * a);
        return {
          h: b,
          b: Math.round(.8 * b),
          f: a
        };
      },
      rotCorr: function rotCorr(a, b, d) {
        var l = a;
        b && d && (l = Math.max(l * Math.cos(b * e), 4));
        return {
          x: -a / 3 * Math.sin(b * e),
          y: l
        };
      },
      label: function label(a, b, d, w, e, f, k, c, t) {
        var h = this,
            J = h.styledMode,
            K = h.g("button" !== t && "label"),
            q = K.text = h.text("", 0, 0, k).attr({
          zIndex: 1
        }),
            r,
            v,
            G = 0,
            I = 3,
            m = 0,
            g,
            p,
            O,
            T,
            x,
            Q = {},
            R,
            S,
            z = /^url\((.*?)\)$/.test(w),
            y = J || z,
            n = function n() {
          return J ? r.strokeWidth() % 2 / 2 : (R ? parseInt(R, 10) : 0) % 2 / 2;
        };

        t && K.addClass("highcharts-" + t);

        var L = function L() {
          var a = q.element.style,
              b = {};
          v = (void 0 === g || void 0 === p || x) && D(q.textStr) && q.getBBox();
          K.width = (g || v.width || 0) + 2 * I + m;
          K.height = (p || v.height || 0) + 2 * I;
          S = I + Math.min(h.fontMetrics(a && a.fontSize, q).b, v ? v.height : Infinity);
          y && (r || (K.box = r = h.symbols[w] || z ? h.symbol(w) : h.rect(), r.addClass(("button" === t ? "" : "highcharts-label-box") + (t ? " highcharts-" + t + "-box" : "")), r.add(K), a = n(), b.x = a, b.y = (c ? -S : 0) + a), b.width = Math.round(K.width), b.height = Math.round(K.height), r.attr(E(b, Q)), Q = {});
        };

        var C = function C() {
          var a = m + I;
          var b = c ? 0 : S;
          D(g) && v && ("center" === x || "right" === x) && (a += {
            center: .5,
            right: 1
          }[x] * (g - v.width));
          if (a !== q.x || b !== q.y) q.attr("x", a), q.hasBoxWidthChanged && (v = q.getBBox(!0), L()), void 0 !== b && q.attr("y", b);
          q.x = a;
          q.y = b;
        };

        var A = function A(a, b) {
          r ? r.attr(a, b) : Q[a] = b;
        };

        K.onAdd = function () {
          q.add(K);
          K.attr({
            text: a || 0 === a ? a : "",
            x: b,
            y: d
          });
          r && D(e) && K.attr({
            anchorX: e,
            anchorY: f
          });
        };

        K.widthSetter = function (a) {
          g = u(a) ? a : null;
        };

        K.heightSetter = function (a) {
          p = a;
        };

        K["text-alignSetter"] = function (a) {
          x = a;
        };

        K.paddingSetter = function (a) {
          D(a) && a !== I && (I = K.padding = a, C());
        };

        K.paddingLeftSetter = function (a) {
          D(a) && a !== m && (m = a, C());
        };

        K.alignSetter = function (a) {
          a = {
            left: 0,
            center: .5,
            right: 1
          }[a];
          a !== G && (G = a, v && K.attr({
            x: O
          }));
        };

        K.textSetter = function (a) {
          void 0 !== a && q.attr({
            text: a
          });
          L();
          C();
        };

        K["stroke-widthSetter"] = function (a, b) {
          a && (y = !0);
          R = this["stroke-width"] = a;
          A(b, a);
        };

        J ? K.rSetter = function (a, b) {
          A(b, a);
        } : K.strokeSetter = K.fillSetter = K.rSetter = function (a, b) {
          "r" !== b && ("fill" === b && a && (y = !0), K[b] = a);
          A(b, a);
        };

        K.anchorXSetter = function (a, b) {
          e = K.anchorX = a;
          A(b, Math.round(a) - n() - O);
        };

        K.anchorYSetter = function (a, b) {
          f = K.anchorY = a;
          A(b, a - T);
        };

        K.xSetter = function (a) {
          K.x = a;
          G && (a -= G * ((g || v.width) + 2 * I), K["forceAnimate:x"] = !0);
          O = Math.round(a);
          K.attr("translateX", O);
        };

        K.ySetter = function (a) {
          T = K.y = Math.round(a);
          K.attr("translateY", T);
        };

        var U = K.css;
        k = {
          css: function css(a) {
            if (a) {
              var b = {};
              a = B(a);
              K.textProps.forEach(function (d) {
                void 0 !== a[d] && (b[d] = a[d], delete a[d]);
              });
              q.css(b);
              "width" in b && L();
              "fontSize" in b && (L(), C());
            }

            return U.call(K, a);
          },
          getBBox: function getBBox() {
            return {
              width: v.width + 2 * I,
              height: v.height + 2 * I,
              x: v.x - I,
              y: v.y - I
            };
          },
          destroy: function destroy() {
            l(K.element, "mouseenter");
            l(K.element, "mouseleave");
            q && (q = q.destroy());
            r && (r = r.destroy());
            M.prototype.destroy.call(K);
            K = h = L = C = A = null;
          }
        };
        J || (k.shadow = function (a) {
          a && (L(), r && r.shadow(a));
          return K;
        });
        return E(K, k);
      }
    });
    c.Renderer = n;
  });
  N(H, "parts/Html.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.pInt,
        z = c.createElement,
        u = c.css,
        L = c.extend,
        y = c.isFirefox,
        C = c.isMS,
        x = c.isWebKit,
        m = c.pick,
        p = c.SVGElement;
    n = c.SVGRenderer;
    var g = c.win;
    L(p.prototype, {
      htmlCss: function htmlCss(b) {
        var a = "SPAN" === this.element.tagName && b && "width" in b,
            d = m(a && b.width, void 0);

        if (a) {
          delete b.width;
          this.textWidth = d;
          var f = !0;
        }

        b && "ellipsis" === b.textOverflow && (b.whiteSpace = "nowrap", b.overflow = "hidden");
        this.styles = L(this.styles, b);
        u(this.element, b);
        f && this.htmlUpdateTransform();
        return this;
      },
      htmlGetBBox: function htmlGetBBox() {
        var b = this.element;
        return {
          x: b.offsetLeft,
          y: b.offsetTop,
          width: b.offsetWidth,
          height: b.offsetHeight
        };
      },
      htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var b = this.renderer,
              a = this.element,
              d = this.translateX || 0,
              f = this.translateY || 0,
              e = this.x || 0,
              c = this.y || 0,
              r = this.textAlign || "left",
              m = {
            left: 0,
            center: .5,
            right: 1
          }[r],
              q = this.styles,
              v = q && q.whiteSpace;
          u(a, {
            marginLeft: d,
            marginTop: f
          });
          !b.styledMode && this.shadows && this.shadows.forEach(function (a) {
            u(a, {
              marginLeft: d + 1,
              marginTop: f + 1
            });
          });
          this.inverted && [].forEach.call(a.childNodes, function (d) {
            b.invertChild(d, a);
          });

          if ("SPAN" === a.tagName) {
            q = this.rotation;
            var k = this.textWidth && F(this.textWidth),
                t = [q, r, a.innerHTML, this.textWidth, this.textAlign].join(),
                B;
            (B = k !== this.oldTextWidth) && !(B = k > this.oldTextWidth) && ((B = this.textPxLength) || (u(a, {
              width: "",
              whiteSpace: v || "nowrap"
            }), B = a.offsetWidth), B = B > k);
            B && (/[ \-]/.test(a.textContent || a.innerText) || "ellipsis" === a.style.textOverflow) ? (u(a, {
              width: k + "px",
              display: "block",
              whiteSpace: v || "normal"
            }), this.oldTextWidth = k, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
            t !== this.cTT && (v = b.fontMetrics(a.style.fontSize, a).b, !D(q) || q === (this.oldRotation || 0) && r === this.oldAlign || this.setSpanRotation(q, m, v), this.getSpanCorrection(!D(q) && this.textPxLength || a.offsetWidth, v, m, q, r));
            u(a, {
              left: e + (this.xCorr || 0) + "px",
              top: c + (this.yCorr || 0) + "px"
            });
            this.cTT = t;
            this.oldRotation = q;
            this.oldAlign = r;
          }
        } else this.alignOnAdd = !0;
      },
      setSpanRotation: function setSpanRotation(b, a, d) {
        var f = {},
            e = this.renderer.getTransformKey();
        f[e] = f.transform = "rotate(" + b + "deg)";
        f[e + (y ? "Origin" : "-origin")] = f.transformOrigin = 100 * a + "% " + d + "px";
        u(this.element, f);
      },
      getSpanCorrection: function getSpanCorrection(b, a, d) {
        this.xCorr = -b * d;
        this.yCorr = -a;
      }
    });
    L(n.prototype, {
      getTransformKey: function getTransformKey() {
        return C && !/Edge/.test(g.navigator.userAgent) ? "-ms-transform" : x ? "-webkit-transform" : y ? "MozTransform" : g.opera ? "-o-transform" : "";
      },
      html: function html(b, a, d) {
        var f = this.createElement("span"),
            e = f.element,
            c = f.renderer,
            r = c.isSVG,
            g = function g(a, b) {
          ["opacity", "visibility"].forEach(function (d) {
            a[d + "Setter"] = function (e, f, k) {
              var w = a.div ? a.div.style : b;
              p.prototype[d + "Setter"].call(this, e, f, k);
              w && (w[f] = e);
            };
          });
          a.addedSetters = !0;
        };

        f.textSetter = function (a) {
          a !== e.innerHTML && (delete this.bBox, delete this.oldTextWidth);
          this.textStr = a;
          e.innerHTML = m(a, "");
          f.doTransform = !0;
        };

        r && g(f, f.element.style);

        f.xSetter = f.ySetter = f.alignSetter = f.rotationSetter = function (a, b) {
          "align" === b && (b = "textAlign");
          f[b] = a;
          f.doTransform = !0;
        };

        f.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };

        f.attr({
          text: b,
          x: Math.round(a),
          y: Math.round(d)
        }).css({
          position: "absolute"
        });
        c.styledMode || f.css({
          fontFamily: this.style.fontFamily,
          fontSize: this.style.fontSize
        });
        e.style.whiteSpace = "nowrap";
        f.css = f.htmlCss;
        r && (f.add = function (a) {
          var b = c.box.parentNode,
              d = [];

          if (this.parentGroup = a) {
            var t = a.div;

            if (!t) {
              for (; a;) {
                d.push(a), a = a.parentGroup;
              }

              d.reverse().forEach(function (a) {
                function e(b, d) {
                  a[d] = b;
                  "translateX" === d ? l.left = b + "px" : l.top = b + "px";
                  a.doTransform = !0;
                }

                var w = A(a.element, "class");
                t = a.div = a.div || z("div", w ? {
                  className: w
                } : void 0, {
                  position: "absolute",
                  left: (a.translateX || 0) + "px",
                  top: (a.translateY || 0) + "px",
                  display: a.display,
                  opacity: a.opacity,
                  pointerEvents: a.styles && a.styles.pointerEvents
                }, t || b);
                var l = t.style;
                L(a, {
                  classSetter: function (a) {
                    return function (b) {
                      this.element.setAttribute("class", b);
                      a.className = b;
                    };
                  }(t),
                  on: function on() {
                    d[0].div && f.on.apply({
                      element: d[0].div
                    }, arguments);
                    return a;
                  },
                  translateXSetter: e,
                  translateYSetter: e
                });
                a.addedSetters || g(a);
              });
            }
          } else t = b;

          t.appendChild(e);
          f.added = !0;
          f.alignOnAdd && f.htmlUpdateTransform();
          return f;
        });
        return f;
      }
    });
  });
  N(H, "parts/Time.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isObject,
        F = n.objectEach,
        z = n.splat,
        u = c.extend,
        L = c.merge,
        y = c.pick,
        C = c.timeUnits,
        x = c.win;

    c.Time = function (c) {
      this.update(c, !1);
    };

    c.Time.prototype = {
      defaultOptions: {},
      update: function update(c) {
        var m = y(c && c.useUTC, !0),
            g = this;
        this.options = c = L(!0, this.options || {}, c);
        this.Date = c.Date || x.Date || Date;
        this.timezoneOffset = (this.useUTC = m) && c.timezoneOffset;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        (this.variableTimezone = !(m && !c.getTimezoneOffset && !c.timezone)) || this.timezoneOffset ? (this.get = function (b, a) {
          var d = a.getTime(),
              f = d - g.getTimezoneOffset(a);
          a.setTime(f);
          b = a["getUTC" + b]();
          a.setTime(d);
          return b;
        }, this.set = function (b, a, d) {
          if ("Milliseconds" === b || "Seconds" === b || "Minutes" === b && 0 === a.getTimezoneOffset() % 60) a["set" + b](d);else {
            var f = g.getTimezoneOffset(a);
            f = a.getTime() - f;
            a.setTime(f);
            a["setUTC" + b](d);
            b = g.getTimezoneOffset(a);
            f = a.getTime() + b;
            a.setTime(f);
          }
        }) : m ? (this.get = function (b, a) {
          return a["getUTC" + b]();
        }, this.set = function (b, a, d) {
          return a["setUTC" + b](d);
        }) : (this.get = function (b, a) {
          return a["get" + b]();
        }, this.set = function (b, a, d) {
          return a["set" + b](d);
        });
      },
      makeTime: function makeTime(m, p, g, b, a, d) {
        if (this.useUTC) {
          var f = this.Date.UTC.apply(0, arguments);
          var e = this.getTimezoneOffset(f);
          f += e;
          var h = this.getTimezoneOffset(f);
          e !== h ? f += h - e : e - 36E5 !== this.getTimezoneOffset(f - 36E5) || c.isSafari || (f -= 36E5);
        } else f = new this.Date(m, p, y(g, 1), y(b, 0), y(a, 0), y(d, 0)).getTime();

        return f;
      },
      timezoneOffsetFunction: function timezoneOffsetFunction() {
        var m = this,
            p = this.options,
            g = x.moment;
        if (!this.useUTC) return function (b) {
          return 6E4 * new Date(b).getTimezoneOffset();
        };

        if (p.timezone) {
          if (g) return function (b) {
            return 6E4 * -g.tz(b, p.timezone).utcOffset();
          };
          c.error(25);
        }

        return this.useUTC && p.getTimezoneOffset ? function (b) {
          return 6E4 * p.getTimezoneOffset(b);
        } : function () {
          return 6E4 * (m.timezoneOffset || 0);
        };
      },
      dateFormat: function dateFormat(m, p, g) {
        if (!A(p) || isNaN(p)) return c.defaultOptions.lang.invalidDate || "";
        m = c.pick(m, "%Y-%m-%d %H:%M:%S");
        var b = this,
            a = new this.Date(p),
            d = this.get("Hours", a),
            f = this.get("Day", a),
            e = this.get("Date", a),
            h = this.get("Month", a),
            r = this.get("FullYear", a),
            E = c.defaultOptions.lang,
            q = E.weekdays,
            v = E.shortWeekdays,
            k = c.pad;
        a = c.extend({
          a: v ? v[f] : q[f].substr(0, 3),
          A: q[f],
          d: k(e),
          e: k(e, 2, " "),
          w: f,
          b: E.shortMonths[h],
          B: E.months[h],
          m: k(h + 1),
          o: h + 1,
          y: r.toString().substr(2, 2),
          Y: r,
          H: k(d),
          k: d,
          I: k(d % 12 || 12),
          l: d % 12 || 12,
          M: k(b.get("Minutes", a)),
          p: 12 > d ? "AM" : "PM",
          P: 12 > d ? "am" : "pm",
          S: k(a.getSeconds()),
          L: k(Math.floor(p % 1E3), 3)
        }, c.dateFormats);
        F(a, function (a, d) {
          for (; -1 !== m.indexOf("%" + d);) {
            m = m.replace("%" + d, "function" === typeof a ? a.call(b, p) : a);
          }
        });
        return g ? m.substr(0, 1).toUpperCase() + m.substr(1) : m;
      },
      resolveDTLFormat: function resolveDTLFormat(c) {
        return D(c, !0) ? c : (c = z(c), {
          main: c[0],
          from: c[1],
          to: c[2]
        });
      },
      getTimeTicks: function getTimeTicks(c, p, g, b) {
        var a = this,
            d = [],
            f = {};
        var e = new a.Date(p);
        var h = c.unitRange,
            r = c.count || 1,
            m;
        b = y(b, 1);

        if (A(p)) {
          a.set("Milliseconds", e, h >= C.second ? 0 : r * Math.floor(a.get("Milliseconds", e) / r));
          h >= C.second && a.set("Seconds", e, h >= C.minute ? 0 : r * Math.floor(a.get("Seconds", e) / r));
          h >= C.minute && a.set("Minutes", e, h >= C.hour ? 0 : r * Math.floor(a.get("Minutes", e) / r));
          h >= C.hour && a.set("Hours", e, h >= C.day ? 0 : r * Math.floor(a.get("Hours", e) / r));
          h >= C.day && a.set("Date", e, h >= C.month ? 1 : Math.max(1, r * Math.floor(a.get("Date", e) / r)));

          if (h >= C.month) {
            a.set("Month", e, h >= C.year ? 0 : r * Math.floor(a.get("Month", e) / r));
            var q = a.get("FullYear", e);
          }

          h >= C.year && a.set("FullYear", e, q - q % r);
          h === C.week && (q = a.get("Day", e), a.set("Date", e, a.get("Date", e) - q + b + (q < b ? -7 : 0)));
          q = a.get("FullYear", e);
          b = a.get("Month", e);
          var v = a.get("Date", e),
              k = a.get("Hours", e);
          p = e.getTime();
          a.variableTimezone && (m = g - p > 4 * C.month || a.getTimezoneOffset(p) !== a.getTimezoneOffset(g));
          p = e.getTime();

          for (e = 1; p < g;) {
            d.push(p), p = h === C.year ? a.makeTime(q + e * r, 0) : h === C.month ? a.makeTime(q, b + e * r) : !m || h !== C.day && h !== C.week ? m && h === C.hour && 1 < r ? a.makeTime(q, b, v, k + e * r) : p + h * r : a.makeTime(q, b, v + e * r * (h === C.day ? 1 : 7)), e++;
          }

          d.push(p);
          h <= C.hour && 1E4 > d.length && d.forEach(function (b) {
            0 === b % 18E5 && "000000000" === a.dateFormat("%H%M%S%L", b) && (f[b] = "day");
          });
        }

        d.info = u(c, {
          higherRanks: f,
          totalRange: h * r
        });
        return d;
      }
    };
  });
  N(H, "parts/Options.js", [H["parts/Globals.js"]], function (c) {
    var n = c.color,
        A = c.merge;
    c.defaultOptions = {
      colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        loading: "Loading...",
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".",
        numericSymbols: "kMGTPE".split(""),
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1",
        thousandsSep: " "
      },
      global: {},
      time: c.Time.prototype.defaultOptions,
      chart: {
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        defaultSeriesType: "line",
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {
            zIndex: 6
          },
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        width: null,
        height: null,
        borderColor: "#335cad",
        backgroundColor: "#ffffff",
        plotBorderColor: "#cccccc"
      },
      title: {
        text: "Chart title",
        align: "center",
        margin: 15,
        widthAdjust: -44
      },
      subtitle: {
        text: "",
        align: "center",
        widthAdjust: -44
      },
      caption: {
        margin: 15,
        text: "",
        align: "left",
        verticalAlign: "bottom"
      },
      plotOptions: {},
      labels: {
        style: {
          position: "absolute",
          color: "#333333"
        }
      },
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        layout: "horizontal",
        labelFormatter: function labelFormatter() {
          return this.name;
        },
        borderColor: "#999999",
        borderRadius: 0,
        navigation: {
          activeColor: "#003399",
          inactiveColor: "#cccccc"
        },
        itemStyle: {
          color: "#333333",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: "#000000"
        },
        itemHiddenStyle: {
          color: "#cccccc"
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: !0,
        animation: c.svg,
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%A, %b %e, %H:%M:%S.%L",
          second: "%A, %b %e, %H:%M:%S",
          minute: "%A, %b %e, %H:%M",
          hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y",
          week: "Week from %A, %b %e, %Y",
          month: "%B %Y",
          year: "%Y"
        },
        footerFormat: "",
        padding: 8,
        snap: c.isTouchDevice ? 25 : 10,
        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
        backgroundColor: n("#f7f7f7").setOpacity(.85).get(),
        borderWidth: 1,
        shadow: !0,
        style: {
          color: "#333333",
          cursor: "default",
          fontSize: "12px",
          pointerEvents: "none",
          whiteSpace: "nowrap"
        }
      },
      credits: {
        enabled: !0,
        href: "https://www.highcharts.com?credits",
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: "#999999",
          fontSize: "9px"
        },
        text: "Highcharts.com"
      }
    };

    c.setOptions = function (n) {
      c.defaultOptions = A(!0, c.defaultOptions, n);
      c.time.update(A(c.defaultOptions.global, c.defaultOptions.time), !1);
      return c.defaultOptions;
    };

    c.getOptions = function () {
      return c.defaultOptions;
    };

    c.defaultPlotOptions = c.defaultOptions.plotOptions;
    c.time = new c.Time(A(c.defaultOptions.global, c.defaultOptions.time));

    c.dateFormat = function (n, A, z) {
      return c.time.dateFormat(n, A, z);
    };

    "";
  });
  N(H, "parts/Tick.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.correctFloat,
        z = c.destroyObjectProperties,
        u = c.fireEvent,
        L = c.merge,
        y = c.pick,
        C = c.deg2rad;

    c.Tick = function (c, m, p, g, b) {
      this.axis = c;
      this.pos = m;
      this.type = p || "";
      this.isNewLabel = this.isNew = !0;
      this.parameters = b || {};
      this.tickmarkOffset = this.parameters.tickmarkOffset;
      this.options = this.parameters.options;
      p || g || this.addLabel();
    };

    c.Tick.prototype = {
      addLabel: function addLabel() {
        var x = this,
            m = x.axis,
            p = m.options,
            g = m.chart,
            b = m.categories,
            a = m.names,
            d = x.pos,
            f = y(x.options && x.options.labels, p.labels),
            e = m.tickPositions,
            h = d === e[0],
            r = d === e[e.length - 1];
        b = this.parameters.category || (b ? y(b[d], a[d], d) : d);
        var E = x.label;
        e = e.info;
        var q, v;

        if (m.isDatetimeAxis && e) {
          var k = g.time.resolveDTLFormat(p.dateTimeLabelFormats[!p.grid && e.higherRanks[d] || e.unitName]);
          var t = k.main;
        }

        x.isFirst = h;
        x.isLast = r;
        x.formatCtx = {
          axis: m,
          chart: g,
          isFirst: h,
          isLast: r,
          dateTimeLabelFormat: t,
          tickPositionInfo: e,
          value: m.isLog ? F(m.lin2log(b)) : b,
          pos: d
        };
        p = m.labelFormatter.call(x.formatCtx, this.formatCtx);
        if (v = k && k.list) x.shortenLabel = function () {
          for (q = 0; q < v.length; q++) {
            if (E.attr({
              text: m.labelFormatter.call(c.extend(x.formatCtx, {
                dateTimeLabelFormat: v[q]
              }))
            }), E.getBBox().width < m.getSlotWidth(x) - 2 * y(f.padding, 5)) return;
          }

          E.attr({
            text: ""
          });
        };
        if (A(E)) E && E.textStr !== p && (!E.textWidth || f.style && f.style.width || E.styles.width || E.css({
          width: null
        }), E.attr({
          text: p
        }), E.textPxLength = E.getBBox().width);else {
          if (x.label = E = A(p) && f.enabled ? g.renderer.text(p, 0, 0, f.useHTML).add(m.labelGroup) : null) g.styledMode || E.css(L(f.style)), E.textPxLength = E.getBBox().width;
          x.rotation = 0;
        }
      },
      getLabelSize: function getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      },
      handleOverflow: function handleOverflow(c) {
        var m = this.axis,
            p = m.options.labels,
            g = c.x,
            b = m.chart.chartWidth,
            a = m.chart.spacing,
            d = y(m.labelLeft, Math.min(m.pos, a[3]));
        a = y(m.labelRight, Math.max(m.isRadial ? 0 : m.pos + m.len, b - a[1]));
        var f = this.label,
            e = this.rotation,
            h = {
          left: 0,
          center: .5,
          right: 1
        }[m.labelAlign || f.attr("align")],
            r = f.getBBox().width,
            E = m.getSlotWidth(this),
            q = E,
            v = 1,
            k,
            t = {};
        if (e || "justify" !== y(p.overflow, "justify")) 0 > e && g - h * r < d ? k = Math.round(g / Math.cos(e * C) - d) : 0 < e && g + h * r > a && (k = Math.round((b - g) / Math.cos(e * C)));else if (b = g + (1 - h) * r, g - h * r < d ? q = c.x + q * (1 - h) - d : b > a && (q = a - c.x + q * h, v = -1), q = Math.min(E, q), q < E && "center" === m.labelAlign && (c.x += v * (E - q - h * (E - Math.min(r, q)))), r > q || m.autoRotation && (f.styles || {}).width) k = q;
        k && (this.shortenLabel ? this.shortenLabel() : (t.width = Math.floor(k), (p.style || {}).textOverflow || (t.textOverflow = "ellipsis"), f.css(t)));
      },
      getPosition: function getPosition(x, m, p, g) {
        var b = this.axis,
            a = b.chart,
            d = g && a.oldChartHeight || a.chartHeight;
        x = {
          x: x ? c.correctFloat(b.translate(m + p, null, null, g) + b.transB) : b.left + b.offset + (b.opposite ? (g && a.oldChartWidth || a.chartWidth) - b.right - b.left : 0),
          y: x ? d - b.bottom + b.offset - (b.opposite ? b.height : 0) : c.correctFloat(d - b.translate(m + p, null, null, g) - b.transB)
        };
        x.y = Math.max(Math.min(x.y, 1E5), -1E5);
        u(this, "afterGetPosition", {
          pos: x
        });
        return x;
      },
      getLabelPosition: function getLabelPosition(c, m, p, g, b, a, d, f) {
        var e = this.axis,
            h = e.transA,
            r = e.isLinked && e.linkedParent ? e.linkedParent.reversed : e.reversed,
            E = e.staggerLines,
            q = e.tickRotCorr || {
          x: 0,
          y: 0
        },
            v = b.y,
            k = g || e.reserveSpaceDefault ? 0 : -e.labelOffset * ("center" === e.labelAlign ? .5 : 1),
            t = {};
        A(v) || (v = 0 === e.side ? p.rotation ? -8 : -p.getBBox().height : 2 === e.side ? q.y + 8 : Math.cos(p.rotation * C) * (q.y - p.getBBox(!1, 0).height / 2));
        c = c + b.x + k + q.x - (a && g ? a * h * (r ? -1 : 1) : 0);
        m = m + v - (a && !g ? a * h * (r ? 1 : -1) : 0);
        E && (p = d / (f || 1) % E, e.opposite && (p = E - p - 1), m += e.labelOffset / E * p);
        t.x = c;
        t.y = Math.round(m);
        u(this, "afterGetLabelPosition", {
          pos: t,
          tickmarkOffset: a,
          index: d
        });
        return t;
      },
      getMarkPath: function getMarkPath(c, m, p, g, b, a) {
        return a.crispLine(["M", c, m, "L", c + (b ? 0 : -p), m + (b ? p : 0)], g);
      },
      renderGridLine: function renderGridLine(c, m, p) {
        var g = this.axis,
            b = g.options,
            a = this.gridLine,
            d = {},
            f = this.pos,
            e = this.type,
            h = y(this.tickmarkOffset, g.tickmarkOffset),
            r = g.chart.renderer,
            E = e ? e + "Grid" : "grid",
            q = b[E + "LineWidth"],
            v = b[E + "LineColor"];
        b = b[E + "LineDashStyle"];
        a || (g.chart.styledMode || (d.stroke = v, d["stroke-width"] = q, b && (d.dashstyle = b)), e || (d.zIndex = 1), c && (m = 0), this.gridLine = a = r.path().attr(d).addClass("highcharts-" + (e ? e + "-" : "") + "grid-line").add(g.gridGroup));
        if (a && (p = g.getPlotLinePath({
          value: f + h,
          lineWidth: a.strokeWidth() * p,
          force: "pass",
          old: c
        }))) a[c || this.isNew ? "attr" : "animate"]({
          d: p,
          opacity: m
        });
      },
      renderMark: function renderMark(c, m, p) {
        var g = this.axis,
            b = g.options,
            a = g.chart.renderer,
            d = this.type,
            f = d ? d + "Tick" : "tick",
            e = g.tickSize(f),
            h = this.mark,
            r = !h,
            E = c.x;
        c = c.y;
        var q = y(b[f + "Width"], !d && g.isXAxis ? 1 : 0);
        b = b[f + "Color"];
        e && (g.opposite && (e[0] = -e[0]), r && (this.mark = h = a.path().addClass("highcharts-" + (d ? d + "-" : "") + "tick").add(g.axisGroup), g.chart.styledMode || h.attr({
          stroke: b,
          "stroke-width": q
        })), h[r ? "attr" : "animate"]({
          d: this.getMarkPath(E, c, e[0], h.strokeWidth() * p, g.horiz, a),
          opacity: m
        }));
      },
      renderLabel: function renderLabel(c, m, p, g) {
        var b = this.axis,
            a = b.horiz,
            d = b.options,
            f = this.label,
            e = d.labels,
            h = e.step;
        b = y(this.tickmarkOffset, b.tickmarkOffset);
        var r = !0,
            E = c.x;
        c = c.y;
        f && D(E) && (f.xy = c = this.getLabelPosition(E, c, f, a, e, b, g, h), this.isFirst && !this.isLast && !y(d.showFirstLabel, 1) || this.isLast && !this.isFirst && !y(d.showLastLabel, 1) ? r = !1 : !a || e.step || e.rotation || m || 0 === p || this.handleOverflow(c), h && g % h && (r = !1), r && D(c.y) ? (c.opacity = p, f[this.isNewLabel ? "attr" : "animate"](c), this.isNewLabel = !1) : (f.attr("y", -9999), this.isNewLabel = !0));
      },
      render: function render(x, m, p) {
        var g = this.axis,
            b = g.horiz,
            a = this.pos,
            d = y(this.tickmarkOffset, g.tickmarkOffset);
        a = this.getPosition(b, a, d, m);
        d = a.x;
        var f = a.y;
        g = b && d === g.pos + g.len || !b && f === g.pos ? -1 : 1;
        p = y(p, 1);
        this.isActive = !0;
        this.renderGridLine(m, p, g);
        this.renderMark(a, p, g);
        this.renderLabel(a, m, p, x);
        this.isNew = !1;
        c.fireEvent(this, "afterRender");
      },
      destroy: function destroy() {
        z(this, this.axis);
      }
    };
  });
  N(H, "parts/Axis.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isArray,
        F = n.isNumber,
        z = n.isString,
        u = n.objectEach,
        L = n.splat,
        y = c.addEvent,
        C = c.animObject,
        x = c.arrayMax,
        m = c.arrayMin,
        p = c.color,
        g = c.correctFloat,
        b = c.defaultOptions,
        a = c.deg2rad,
        d = c.destroyObjectProperties,
        f = c.extend,
        e = c.fireEvent,
        h = c.format,
        r = c.getMagnitude,
        E = c.merge,
        q = c.normalizeTickInterval,
        v = c.pick,
        k = c.removeEvent,
        t = c.seriesTypes,
        B = c.syncTimeout,
        I = c.Tick;

    n = function n() {
      this.init.apply(this, arguments);
    };

    c.extend(n.prototype, {
      defaultOptions: {
        dateTimeLabelFormats: {
          millisecond: {
            main: "%H:%M:%S.%L",
            range: !1
          },
          second: {
            main: "%H:%M:%S",
            range: !1
          },
          minute: {
            main: "%H:%M",
            range: !1
          },
          hour: {
            main: "%H:%M",
            range: !1
          },
          day: {
            main: "%e. %b"
          },
          week: {
            main: "%e. %b"
          },
          month: {
            main: "%b '%y"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        labels: {
          enabled: !0,
          indentation: 10,
          x: 0,
          style: {
            color: "#666666",
            cursor: "default",
            fontSize: "11px"
          }
        },
        maxPadding: .01,
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: .01,
        showEmpty: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          style: {
            color: "#666666"
          }
        },
        type: "linear",
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#ccd6eb",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        tickColor: "#ccd6eb"
      },
      defaultYAxisOptions: {
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: -8
        },
        startOnTick: !0,
        title: {
          rotation: 270,
          text: "Values"
        },
        stackLabels: {
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function formatter() {
            return c.numberFormat(this.total, -1);
          },
          style: {
            color: "#000000",
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      defaultLeftAxisOptions: {
        labels: {
          x: -15
        },
        title: {
          rotation: 270
        }
      },
      defaultRightAxisOptions: {
        labels: {
          x: 15
        },
        title: {
          rotation: 90
        }
      },
      defaultBottomAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      },
      defaultTopAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      },
      init: function init(a, b) {
        var d = b.isX,
            l = this;
        l.chart = a;
        l.horiz = a.inverted && !l.isZAxis ? !d : d;
        l.isXAxis = d;
        l.coll = l.coll || (d ? "xAxis" : "yAxis");
        e(this, "init", {
          userOptions: b
        });
        l.opposite = b.opposite;
        l.side = b.side || (l.horiz ? l.opposite ? 0 : 2 : l.opposite ? 1 : 3);
        l.setOptions(b);
        var w = this.options,
            f = w.type;
        l.labelFormatter = w.labels.formatter || l.defaultLabelFormatter;
        l.userOptions = b;
        l.minPixelPadding = 0;
        l.reversed = w.reversed;
        l.visible = !1 !== w.visible;
        l.zoomEnabled = !1 !== w.zoomEnabled;
        l.hasNames = "category" === f || !0 === w.categories;
        l.categories = w.categories || l.hasNames;
        l.names || (l.names = [], l.names.keys = {});
        l.plotLinesAndBandsGroups = {};
        l.isLog = "logarithmic" === f;
        l.isDatetimeAxis = "datetime" === f;
        l.positiveValuesOnly = l.isLog && !l.allowNegativeLog;
        l.isLinked = A(w.linkedTo);
        l.ticks = {};
        l.labelEdge = [];
        l.minorTicks = {};
        l.plotLinesAndBands = [];
        l.alternateBands = {};
        l.len = 0;
        l.minRange = l.userMinRange = w.minRange || w.maxZoom;
        l.range = w.range;
        l.offset = w.offset || 0;
        l.stacks = {};
        l.oldStacks = {};
        l.stacksTouched = 0;
        l.max = null;
        l.min = null;
        l.crosshair = v(w.crosshair, L(a.options.tooltip.crosshairs)[d ? 0 : 1], !1);
        b = l.options.events;
        -1 === a.axes.indexOf(l) && (d ? a.axes.splice(a.xAxis.length, 0, l) : a.axes.push(l), a[l.coll].push(l));
        l.series = l.series || [];
        a.inverted && !l.isZAxis && d && void 0 === l.reversed && (l.reversed = !0);
        u(b, function (a, b) {
          c.isFunction(a) && y(l, b, a);
        });
        l.lin2log = w.linearToLogConverter || l.lin2log;
        l.isLog && (l.val2lin = l.log2lin, l.lin2val = l.lin2log);
        e(this, "afterInit");
      },
      setOptions: function setOptions(a) {
        this.options = E(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], E(b[this.coll], a));
        e(this, "afterSetOptions", {
          userOptions: a
        });
      },
      defaultLabelFormatter: function defaultLabelFormatter() {
        var a = this.axis,
            d = this.value,
            e = a.chart.time,
            f = a.categories,
            k = this.dateTimeLabelFormat,
            t = b.lang,
            B = t.numericSymbols;
        t = t.numericSymbolMagnitude || 1E3;
        var r = B && B.length,
            q = a.options.labels.format;
        a = a.isLog ? Math.abs(d) : a.tickInterval;
        if (q) var v = h(q, this, e);else if (f) v = d;else if (k) v = e.dateFormat(k, d);else if (r && 1E3 <= a) for (; r-- && void 0 === v;) {
          e = Math.pow(t, r + 1), a >= e && 0 === 10 * d % e && null !== B[r] && 0 !== d && (v = c.numberFormat(d / e, -1) + B[r]);
        }
        void 0 === v && (v = 1E4 <= Math.abs(d) ? c.numberFormat(d, -1) : c.numberFormat(d, -1, void 0, ""));
        return v;
      },
      getSeriesExtremes: function getSeriesExtremes() {
        var a = this,
            b = a.chart,
            d;
        e(this, "getSeriesExtremes", null, function () {
          a.hasVisibleSeries = !1;
          a.dataMin = a.dataMax = a.threshold = null;
          a.softThreshold = !a.isXAxis;
          a.buildStacks && a.buildStacks();
          a.series.forEach(function (l) {
            if (l.visible || !b.options.chart.ignoreHiddenSeries) {
              var e = l.options,
                  w = e.threshold;
              a.hasVisibleSeries = !0;
              a.positiveValuesOnly && 0 >= w && (w = null);

              if (a.isXAxis) {
                if (e = l.xData, e.length) {
                  d = l.getXExtremes(e);
                  var f = d.min;
                  var c = d.max;
                  F(f) || f instanceof Date || (e = e.filter(F), d = l.getXExtremes(e), f = d.min, c = d.max);
                  e.length && (a.dataMin = Math.min(v(a.dataMin, f), f), a.dataMax = Math.max(v(a.dataMax, c), c));
                }
              } else if (l.getExtremes(), c = l.dataMax, f = l.dataMin, A(f) && A(c) && (a.dataMin = Math.min(v(a.dataMin, f), f), a.dataMax = Math.max(v(a.dataMax, c), c)), A(w) && (a.threshold = w), !e.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
            }
          });
        });
        e(this, "afterGetSeriesExtremes");
      },
      translate: function translate(a, b, d, e, f, c) {
        var l = this.linkedParent || this,
            w = 1,
            k = 0,
            t = e ? l.oldTransA : l.transA;
        e = e ? l.oldMin : l.min;
        var h = l.minPixelPadding;
        f = (l.isOrdinal || l.isBroken || l.isLog && f) && l.lin2val;
        t || (t = l.transA);
        d && (w *= -1, k = l.len);
        l.reversed && (w *= -1, k -= w * (l.sector || l.len));
        b ? (a = (a * w + k - h) / t + e, f && (a = l.lin2val(a))) : (f && (a = l.val2lin(a)), a = F(e) ? w * (a - e) * t + k + w * h + (F(c) ? t * c : 0) : void 0);
        return a;
      },
      toPixels: function toPixels(a, b) {
        return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
      },
      toValue: function toValue(a, b) {
        return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
      },
      getPlotLinePath: function getPlotLinePath(a) {
        var b = this,
            d = b.chart,
            f = b.left,
            w = b.top,
            c = a.old,
            k = a.value,
            t = a.translatedValue,
            h = a.lineWidth,
            B = a.force,
            r,
            q,
            I,
            m,
            g = c && d.oldChartHeight || d.chartHeight,
            p = c && d.oldChartWidth || d.chartWidth,
            E,
            x = b.transB,
            u = function u(a, b, d) {
          if ("pass" !== B && a < b || a > d) B ? a = Math.min(Math.max(b, a), d) : E = !0;
          return a;
        };

        a = {
          value: k,
          lineWidth: h,
          old: c,
          force: B,
          acrossPanes: a.acrossPanes,
          translatedValue: t
        };
        e(this, "getPlotLinePath", a, function (a) {
          t = v(t, b.translate(k, null, null, c));
          t = Math.min(Math.max(-1E5, t), 1E5);
          r = I = Math.round(t + x);
          q = m = Math.round(g - t - x);
          F(t) ? b.horiz ? (q = w, m = g - b.bottom, r = I = u(r, f, f + b.width)) : (r = f, I = p - b.right, q = m = u(q, w, w + b.height)) : (E = !0, B = !1);
          a.path = E && !B ? null : d.renderer.crispLine(["M", r, q, "L", I, m], h || 1);
        });
        return a.path;
      },
      getLinearTickPositions: function getLinearTickPositions(a, b, d) {
        var l = g(Math.floor(b / a) * a);
        d = g(Math.ceil(d / a) * a);
        var e = [],
            f;
        g(l + a) === l && (f = 20);
        if (this.single) return [b];

        for (b = l; b <= d;) {
          e.push(b);
          b = g(b + a, f);
          if (b === w) break;
          var w = b;
        }

        return e;
      },
      getMinorTickInterval: function getMinorTickInterval() {
        var a = this.options;
        return !0 === a.minorTicks ? v(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      },
      getMinorTickPositions: function getMinorTickPositions() {
        var a = this,
            b = a.options,
            d = a.tickPositions,
            e = a.minorTickInterval,
            f = [],
            c = a.pointRangePadding || 0,
            k = a.min - c;
        c = a.max + c;
        var t = c - k;
        if (t && t / e < a.len / 3) if (a.isLog) this.paddedTicks.forEach(function (b, d, l) {
          d && f.push.apply(f, a.getLogTickPositions(e, l[d - 1], l[d], !0));
        });else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) f = f.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e), k, c, b.startOfWeek));else for (b = k + (d[0] - k) % e; b <= c && b !== f[0]; b += e) {
          f.push(b);
        }
        0 !== f.length && a.trimTicks(f);
        return f;
      },
      adjustForMinRange: function adjustForMinRange() {
        var a = this.options,
            b = this.min,
            d = this.max,
            e,
            f,
            c,
            k,
            t;
        this.isXAxis && void 0 === this.minRange && !this.isLog && (A(a.min) || A(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
          k = a.xData;

          for (f = t = a.xIncrement ? 1 : k.length - 1; 0 < f; f--) {
            if (c = k[f] - k[f - 1], void 0 === e || c < e) e = c;
          }
        }), this.minRange = Math.min(5 * e, this.dataMax - this.dataMin)));

        if (d - b < this.minRange) {
          var h = this.dataMax - this.dataMin >= this.minRange;
          var B = this.minRange;
          var r = (B - d + b) / 2;
          r = [b - r, v(a.min, b - r)];
          h && (r[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin);
          b = x(r);
          d = [b + B, v(a.max, b + B)];
          h && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax);
          d = m(d);
          d - b < B && (r[0] = d - B, r[1] = v(a.min, d - B), b = x(r));
        }

        this.min = b;
        this.max = d;
      },
      getClosest: function getClosest() {
        var a;
        this.categories ? a = 1 : this.series.forEach(function (b) {
          var d = b.closestPointRange,
              l = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
          !b.noSharedTooltip && A(d) && l && (a = A(a) ? Math.min(a, d) : d);
        });
        return a;
      },
      nameToX: function nameToX(a) {
        var b = D(this.categories),
            d = b ? this.categories : this.names,
            e = a.options.x;
        a.series.requireSorting = !1;
        A(e) || (e = !1 === this.options.uniqueNames ? a.series.autoIncrement() : b ? d.indexOf(a.name) : v(d.keys[a.name], -1));

        if (-1 === e) {
          if (!b) var f = d.length;
        } else f = e;

        void 0 !== f && (this.names[f] = a.name, this.names.keys[a.name] = f);
        return f;
      },
      updateNames: function updateNames() {
        var a = this,
            b = this.names;
        0 < b.length && (Object.keys(b.keys).forEach(function (a) {
          delete b.keys[a];
        }), b.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (b) {
          b.xIncrement = null;
          if (!b.points || b.isDirtyData) a.max = Math.max(a.max, b.xData.length - 1), b.processData(), b.generatePoints();
          b.data.forEach(function (d, l) {
            if (d && d.options && void 0 !== d.name) {
              var e = a.nameToX(d);
              void 0 !== e && e !== d.x && (d.x = e, b.xData[l] = e);
            }
          });
        }));
      },
      setAxisTranslation: function setAxisTranslation(a) {
        var b = this,
            d = b.max - b.min,
            f = b.axisPointRange || 0,
            c = 0,
            w = 0,
            k = b.linkedParent,
            h = !!b.categories,
            B = b.transA,
            r = b.isXAxis;

        if (r || h || f) {
          var q = b.getClosest();
          k ? (c = k.minPointOffset, w = k.pointRangePadding) : b.series.forEach(function (a) {
            var d = h ? 1 : r ? v(a.options.pointRange, q, 0) : b.axisPointRange || 0,
                l = a.options.pointPlacement;
            f = Math.max(f, d);
            if (!b.single || h) a = t.xrange && a instanceof t.xrange ? !r : r, c = Math.max(c, a && z(l) ? 0 : d / 2), w = Math.max(w, a && "on" === l ? 0 : d);
          });
          k = b.ordinalSlope && q ? b.ordinalSlope / q : 1;
          b.minPointOffset = c *= k;
          b.pointRangePadding = w *= k;
          b.pointRange = Math.min(f, d);
          r && (b.closestPointRange = q);
        }

        a && (b.oldTransA = B);
        b.translationSlope = b.transA = B = b.staticScale || b.len / (d + w || 1);
        b.transB = b.horiz ? b.left : b.bottom;
        b.minPixelPadding = B * c;
        e(this, "afterSetAxisTranslation");
      },
      minFromRange: function minFromRange() {
        return this.max - this.range;
      },
      setTickInterval: function setTickInterval(a) {
        var b = this,
            d = b.chart,
            f = b.options,
            w = b.isLog,
            k = b.isDatetimeAxis,
            t = b.isXAxis,
            h = b.isLinked,
            B = f.maxPadding,
            I = f.minPadding,
            m = f.tickInterval,
            p = f.tickPixelInterval,
            E = b.categories,
            x = F(b.threshold) ? b.threshold : null,
            u = b.softThreshold;
        k || E || h || this.getTickAmount();
        var z = v(b.userMin, f.min);
        var y = v(b.userMax, f.max);

        if (h) {
          b.linkedParent = d[b.coll][f.linkedTo];
          var n = b.linkedParent.getExtremes();
          b.min = v(n.min, n.dataMin);
          b.max = v(n.max, n.dataMax);
          f.type !== b.linkedParent.options.type && c.error(11, 1, d);
        } else {
          if (!u && A(x)) if (b.dataMin >= x) n = x, I = 0;else if (b.dataMax <= x) {
            var L = x;
            B = 0;
          }
          b.min = v(z, n, b.dataMin);
          b.max = v(y, L, b.dataMax);
        }

        w && (b.positiveValuesOnly && !a && 0 >= Math.min(b.min, v(b.dataMin, b.min)) && c.error(10, 1, d), b.min = g(b.log2lin(b.min), 15), b.max = g(b.log2lin(b.max), 15));
        b.range && A(b.max) && (b.userMin = b.min = z = Math.max(b.dataMin, b.minFromRange()), b.userMax = y = b.max, b.range = null);
        e(b, "foundExtremes");
        b.beforePadding && b.beforePadding();
        b.adjustForMinRange();
        !(E || b.axisPointRange || b.usePercentage || h) && A(b.min) && A(b.max) && (d = b.max - b.min) && (!A(z) && I && (b.min -= d * I), !A(y) && B && (b.max += d * B));
        F(f.softMin) && !F(b.userMin) && f.softMin < b.min && (b.min = z = f.softMin);
        F(f.softMax) && !F(b.userMax) && f.softMax > b.max && (b.max = y = f.softMax);
        F(f.floor) && (b.min = Math.min(Math.max(b.min, f.floor), Number.MAX_VALUE));
        F(f.ceiling) && (b.max = Math.max(Math.min(b.max, f.ceiling), v(b.userMax, -Number.MAX_VALUE)));
        u && A(b.dataMin) && (x = x || 0, !A(z) && b.min < x && b.dataMin >= x ? b.min = b.options.minRange ? Math.min(x, b.max - b.minRange) : x : !A(y) && b.max > x && b.dataMax <= x && (b.max = b.options.minRange ? Math.max(x, b.min + b.minRange) : x));
        b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : h && !m && p === b.linkedParent.options.tickPixelInterval ? m = b.linkedParent.tickInterval : v(m, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, E ? 1 : (b.max - b.min) * p / Math.max(b.len, p));
        t && !a && b.series.forEach(function (a) {
          a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
        });
        b.setAxisTranslation(!0);
        b.beforeSetTickPositions && b.beforeSetTickPositions();
        b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
        b.pointRange && !m && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));
        a = v(f.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
        !m && b.tickInterval < a && (b.tickInterval = a);
        k || w || m || (b.tickInterval = q(b.tickInterval, null, r(b.tickInterval), v(f.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
        this.tickAmount || (b.tickInterval = b.unsquish());
        this.setTickPositions();
      },
      setTickPositions: function setTickPositions() {
        var a = this.options,
            b = a.tickPositions;
        var d = this.getMinorTickInterval();
        var f = a.tickPositioner,
            k = a.startOnTick,
            t = a.endOnTick;
        this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
        this.minorTickInterval = "auto" === d && this.tickInterval ? this.tickInterval / 5 : d;
        this.single = this.min === this.max && A(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
        this.tickPositions = d = b && b.slice();
        !d && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (d = [this.min, this.max], c.error(19, !1, this.chart)) : d = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), d.length > this.len && (d = [d[0], d.pop()], d[0] === d[1] && (d.length = 1)), this.tickPositions = d, f && (f = f.apply(this, [this.min, this.max]))) && (this.tickPositions = d = f);
        this.paddedTicks = d.slice(0);
        this.trimTicks(d, k, t);
        this.isLinked || (this.single && 2 > d.length && !this.categories && (this.min -= .5, this.max += .5), b || f || this.adjustTickAmount());
        e(this, "afterSetTickPositions");
      },
      trimTicks: function trimTicks(a, b, d) {
        var f = a[0],
            c = a[a.length - 1],
            l = this.minPointOffset || 0;
        e(this, "trimTicks");

        if (!this.isLinked) {
          if (b && -Infinity !== f) this.min = f;else for (; this.min - l > a[0];) {
            a.shift();
          }
          if (d) this.max = c;else for (; this.max + l < a[a.length - 1];) {
            a.pop();
          }
          0 === a.length && A(f) && !this.options.tickPositions && a.push((c + f) / 2);
        }
      },
      alignToOthers: function alignToOthers() {
        var a = {},
            b,
            d = this.options;
        !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || !1 === d.startOnTick || !1 === d.endOnTick || this.isLog || this.chart[this.coll].forEach(function (d) {
          var f = d.options;
          f = [d.horiz ? f.left : f.top, f.width, f.height, f.pane].join();
          d.series.length && (a[f] ? b = !0 : a[f] = 1);
        });
        return b;
      },
      getTickAmount: function getTickAmount() {
        var a = this.options,
            b = a.tickAmount,
            d = a.tickPixelInterval;
        !A(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
        !b && this.alignToOthers() && (b = Math.ceil(this.len / d) + 1);
        4 > b && (this.finalTickAmt = b, b = 5);
        this.tickAmount = b;
      },
      adjustTickAmount: function adjustTickAmount() {
        var a = this.options,
            b = this.tickInterval,
            d = this.tickPositions,
            f = this.tickAmount,
            e = this.finalTickAmt,
            c = d && d.length,
            k = v(this.threshold, this.softThreshold ? 0 : null),
            t;

        if (this.hasData()) {
          if (c < f) {
            for (t = this.min; d.length < f;) {
              d.length % 2 || t === k ? d.push(g(d[d.length - 1] + b)) : d.unshift(g(d[0] - b));
            }

            this.transA *= (c - 1) / (f - 1);
            this.min = a.startOnTick ? d[0] : Math.min(this.min, d[0]);
            this.max = a.endOnTick ? d[d.length - 1] : Math.max(this.max, d[d.length - 1]);
          } else c > f && (this.tickInterval *= 2, this.setTickPositions());

          if (A(e)) {
            for (b = a = d.length; b--;) {
              (3 === e && 1 === b % 2 || 2 >= e && 0 < b && b < a - 1) && d.splice(b, 1);
            }

            this.finalTickAmt = void 0;
          }
        }
      },
      setScale: function setScale() {
        var a = this.series.some(function (a) {
          return a.isDirtyData || a.isDirty || a.xAxis && a.xAxis.isDirty;
        }),
            b;
        this.oldMin = this.min;
        this.oldMax = this.max;
        this.oldAxisLength = this.len;
        this.setAxisSize();
        (b = this.len !== this.oldAxisLength) || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();
        e(this, "afterSetScale");
      },
      setExtremes: function setExtremes(a, b, d, c, k) {
        var l = this,
            w = l.chart;
        d = v(d, !0);
        l.series.forEach(function (a) {
          delete a.kdTree;
        });
        k = f(k, {
          min: a,
          max: b
        });
        e(l, "setExtremes", k, function () {
          l.userMin = a;
          l.userMax = b;
          l.eventArgs = k;
          d && w.redraw(c);
        });
      },
      zoom: function zoom(a, b) {
        var d = this.dataMin,
            f = this.dataMax,
            c = this.options,
            k = Math.min(d, v(c.min, d)),
            l = Math.max(f, v(c.max, f));
        a = {
          newMin: a,
          newMax: b
        };
        e(this, "zoom", a, function (a) {
          var b = a.newMin,
              e = a.newMax;
          if (b !== this.min || e !== this.max) this.allowZoomOutside || (A(d) && (b < k && (b = k), b > l && (b = l)), A(f) && (e < k && (e = k), e > l && (e = l))), this.displayBtn = void 0 !== b || void 0 !== e, this.setExtremes(b, e, !1, void 0, {
            trigger: "zoom"
          });
          a.zoomed = !0;
        });
        return a.zoomed;
      },
      setAxisSize: function setAxisSize() {
        var a = this.chart,
            b = this.options,
            d = b.offsets || [0, 0, 0, 0],
            f = this.horiz,
            e = this.width = Math.round(c.relativeLength(v(b.width, a.plotWidth - d[3] + d[1]), a.plotWidth)),
            k = this.height = Math.round(c.relativeLength(v(b.height, a.plotHeight - d[0] + d[2]), a.plotHeight)),
            t = this.top = Math.round(c.relativeLength(v(b.top, a.plotTop + d[0]), a.plotHeight, a.plotTop));
        b = this.left = Math.round(c.relativeLength(v(b.left, a.plotLeft + d[3]), a.plotWidth, a.plotLeft));
        this.bottom = a.chartHeight - k - t;
        this.right = a.chartWidth - e - b;
        this.len = Math.max(f ? e : k, 0);
        this.pos = f ? b : t;
      },
      getExtremes: function getExtremes() {
        var a = this.isLog;
        return {
          min: a ? g(this.lin2log(this.min)) : this.min,
          max: a ? g(this.lin2log(this.max)) : this.max,
          dataMin: this.dataMin,
          dataMax: this.dataMax,
          userMin: this.userMin,
          userMax: this.userMax
        };
      },
      getThreshold: function getThreshold(a) {
        var b = this.isLog,
            d = b ? this.lin2log(this.min) : this.min;
        b = b ? this.lin2log(this.max) : this.max;
        null === a || -Infinity === a ? a = d : Infinity === a ? a = b : d > a ? a = d : b < a && (a = b);
        return this.translate(a, 0, 1, 0, 1);
      },
      autoLabelAlign: function autoLabelAlign(a) {
        var b = (v(a, 0) - 90 * this.side + 720) % 360;
        a = {
          align: "center"
        };
        e(this, "autoLabelAlign", a, function (a) {
          15 < b && 165 > b ? a.align = "right" : 195 < b && 345 > b && (a.align = "left");
        });
        return a.align;
      },
      tickSize: function tickSize(a) {
        var b = this.options,
            d = b[a + "Length"],
            f = v(b[a + "Width"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0);

        if (f && d) {
          "inside" === b[a + "Position"] && (d = -d);
          var c = [d, f];
        }

        a = {
          tickSize: c
        };
        e(this, "afterTickSize", a);
        return a.tickSize;
      },
      labelMetrics: function labelMetrics() {
        var a = this.tickPositions && this.tickPositions[0] || 0;
        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      },
      unsquish: function unsquish() {
        var b = this.options.labels,
            d = this.horiz,
            f = this.tickInterval,
            e = f,
            c = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / f),
            k,
            t = b.rotation,
            h = this.labelMetrics(),
            B,
            r = Number.MAX_VALUE,
            q,
            I = this.max - this.min,
            m = function m(a) {
          var b = a / (c || 1);
          b = 1 < b ? Math.ceil(b) : 1;
          b * f > I && Infinity !== a && Infinity !== c && I && (b = Math.ceil(I / f));
          return g(b * f);
        };

        d ? (q = !b.staggerLines && !b.step && (A(t) ? [t] : c < v(b.autoRotationLimit, 80) && b.autoRotation)) && q.forEach(function (b) {
          if (b === t || b && -90 <= b && 90 >= b) {
            B = m(Math.abs(h.h / Math.sin(a * b)));
            var d = B + Math.abs(b / 360);
            d < r && (r = d, k = b, e = B);
          }
        }) : b.step || (e = m(h.h));
        this.autoRotation = q;
        this.labelRotation = v(k, t);
        return e;
      },
      getSlotWidth: function getSlotWidth(a) {
        var b = this.chart,
            d = this.horiz,
            f = this.options.labels,
            e = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            c = b.margin[3];
        return a && a.slotWidth || d && 2 > (f.step || 0) && !f.rotation && (this.staggerLines || 1) * this.len / e || !d && (f.style && parseInt(f.style.width, 10) || c && c - b.spacing[3] || .33 * b.chartWidth);
      },
      renderUnsquish: function renderUnsquish() {
        var a = this.chart,
            b = a.renderer,
            d = this.tickPositions,
            f = this.ticks,
            e = this.options.labels,
            c = e && e.style || {},
            k = this.horiz,
            t = this.getSlotWidth(),
            h = Math.max(1, Math.round(t - 2 * (e.padding || 5))),
            B = {},
            r = this.labelMetrics(),
            q = e.style && e.style.textOverflow,
            v = 0;
        z(e.rotation) || (B.rotation = e.rotation || 0);
        d.forEach(function (a) {
          (a = f[a]) && a.label && a.label.textPxLength > v && (v = a.label.textPxLength);
        });
        this.maxLabelLength = v;
        if (this.autoRotation) v > h && v > r.h ? B.rotation = this.labelRotation : this.labelRotation = 0;else if (t) {
          var I = h;

          if (!q) {
            var m = "clip";

            for (h = d.length; !k && h--;) {
              var g = d[h];
              if (g = f[g].label) g.styles && "ellipsis" === g.styles.textOverflow ? g.css({
                textOverflow: "clip"
              }) : g.textPxLength > t && g.css({
                width: t + "px"
              }), g.getBBox().height > this.len / d.length - (r.h - r.f) && (g.specificTextOverflow = "ellipsis");
            }
          }
        }
        B.rotation && (I = v > .5 * a.chartHeight ? .33 * a.chartHeight : v, q || (m = "ellipsis"));
        if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) B.align = this.labelAlign;
        d.forEach(function (a) {
          var b = (a = f[a]) && a.label,
              d = c.width,
              e = {};
          b && (b.attr(B), a.shortenLabel ? a.shortenLabel() : I && !d && "nowrap" !== c.whiteSpace && (I < b.textPxLength || "SPAN" === b.element.tagName) ? (e.width = I, q || (e.textOverflow = b.specificTextOverflow || m), b.css(e)) : b.styles && b.styles.width && !e.width && !d && b.css({
            width: null
          }), delete b.specificTextOverflow, a.rotation = B.rotation);
        }, this);
        this.tickRotCorr = b.rotCorr(r.b, this.labelRotation || 0, 0 !== this.side);
      },
      hasData: function hasData() {
        return this.series.some(function (a) {
          return a.hasData();
        }) || this.options.showEmpty && A(this.min) && A(this.max);
      },
      addTitle: function addTitle(a) {
        var b = this.chart.renderer,
            d = this.horiz,
            f = this.opposite,
            e = this.options.title,
            c,
            k = this.chart.styledMode;
        this.axisTitle || ((c = e.textAlign) || (c = (d ? {
          low: "left",
          middle: "center",
          high: "right"
        } : {
          low: f ? "right" : "left",
          middle: "center",
          high: f ? "left" : "right"
        })[e.align]), this.axisTitle = b.text(e.text, 0, 0, e.useHTML).attr({
          zIndex: 7,
          rotation: e.rotation || 0,
          align: c
        }).addClass("highcharts-axis-title"), k || this.axisTitle.css(E(e.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
        k || e.style.width || this.isRadial || this.axisTitle.css({
          width: this.len
        });
        this.axisTitle[a ? "show" : "hide"](a);
      },
      generateTick: function generateTick(a) {
        var b = this.ticks;
        b[a] ? b[a].addLabel() : b[a] = new I(this, a);
      },
      getOffset: function getOffset() {
        var a = this,
            b = a.chart,
            d = b.renderer,
            f = a.options,
            c = a.tickPositions,
            k = a.ticks,
            t = a.horiz,
            h = a.side,
            B = b.inverted && !a.isZAxis ? [1, 0, 3, 2][h] : h,
            r,
            q = 0,
            I = 0,
            m = f.title,
            g = f.labels,
            p = 0,
            E = b.axisOffset;
        b = b.clipOffset;
        var x = [-1, 1, 1, -1][h],
            z = f.className,
            y = a.axisParent;
        var n = a.hasData();
        a.showAxis = r = n || v(f.showEmpty, !0);
        a.staggerLines = a.horiz && g.staggerLines;
        a.axisGroup || (a.gridGroup = d.g("grid").attr({
          zIndex: f.gridZIndex || 1
        }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (z || "")).add(y), a.axisGroup = d.g("axis").attr({
          zIndex: f.zIndex || 2
        }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (z || "")).add(y), a.labelGroup = d.g("axis-labels").attr({
          zIndex: g.zIndex || 7
        }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (z || "")).add(y));
        n || a.isLinked ? (c.forEach(function (b, d) {
          a.generateTick(b, d);
        }), a.renderUnsquish(), a.reserveSpaceDefault = 0 === h || 2 === h || {
          1: "left",
          3: "right"
        }[h] === a.labelAlign, v(g.reserveSpace, "center" === a.labelAlign ? !0 : null, a.reserveSpaceDefault) && c.forEach(function (a) {
          p = Math.max(k[a].getLabelSize(), p);
        }), a.staggerLines && (p *= a.staggerLines), a.labelOffset = p * (a.opposite ? -1 : 1)) : u(k, function (a, b) {
          a.destroy();
          delete k[b];
        });

        if (m && m.text && !1 !== m.enabled && (a.addTitle(r), r && !1 !== m.reserveSpace)) {
          a.titleOffset = q = a.axisTitle.getBBox()[t ? "height" : "width"];
          var L = m.offset;
          I = A(L) ? 0 : v(m.margin, t ? 5 : 10);
        }

        a.renderLine();
        a.offset = x * v(f.offset, E[h] ? E[h] + (f.margin || 0) : 0);
        a.tickRotCorr = a.tickRotCorr || {
          x: 0,
          y: 0
        };
        d = 0 === h ? -a.labelMetrics().h : 2 === h ? a.tickRotCorr.y : 0;
        I = Math.abs(p) + I;
        p && (I = I - d + x * (t ? v(g.y, a.tickRotCorr.y + 8 * x) : g.x));
        a.axisTitleMargin = v(L, I);
        a.getMaxLabelDimensions && (a.maxLabelDimensions = a.getMaxLabelDimensions(k, c));
        t = this.tickSize("tick");
        E[h] = Math.max(E[h], a.axisTitleMargin + q + x * a.offset, I, c && c.length && t ? t[0] + x * a.offset : 0);
        f = f.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
        b[B] = Math.max(b[B], f);
        e(this, "afterGetOffset");
      },
      getLinePath: function getLinePath(a) {
        var b = this.chart,
            d = this.opposite,
            f = this.offset,
            e = this.horiz,
            c = this.left + (d ? this.width : 0) + f;
        f = b.chartHeight - this.bottom - (d ? this.height : 0) + f;
        d && (a *= -1);
        return b.renderer.crispLine(["M", e ? this.left : c, e ? f : this.top, "L", e ? b.chartWidth - this.right : c, e ? f : b.chartHeight - this.bottom], a);
      },
      renderLine: function renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
          stroke: this.options.lineColor,
          "stroke-width": this.options.lineWidth,
          zIndex: 7
        }));
      },
      getTitlePosition: function getTitlePosition() {
        var a = this.horiz,
            b = this.left,
            d = this.top,
            f = this.len,
            c = this.options.title,
            k = a ? b : d,
            t = this.opposite,
            h = this.offset,
            B = c.x || 0,
            r = c.y || 0,
            q = this.axisTitle,
            v = this.chart.renderer.fontMetrics(c.style && c.style.fontSize, q);
        q = Math.max(q.getBBox(null, 0).height - v.h - 1, 0);
        f = {
          low: k + (a ? 0 : f),
          middle: k + f / 2,
          high: k + (a ? f : 0)
        }[c.align];
        b = (a ? d + this.height : b) + (a ? 1 : -1) * (t ? -1 : 1) * this.axisTitleMargin + [-q, q, v.f, -q][this.side];
        a = {
          x: a ? f + B : b + (t ? this.width : 0) + h + B,
          y: a ? b + r - (t ? this.height : 0) + h : f + r
        };
        e(this, "afterGetTitlePosition", {
          titlePosition: a
        });
        return a;
      },
      renderMinorTick: function renderMinorTick(a) {
        var b = this.chart.hasRendered && F(this.oldMin),
            d = this.minorTicks;
        d[a] || (d[a] = new I(this, a, "minor"));
        b && d[a].isNew && d[a].render(null, !0);
        d[a].render(null, !1, 1);
      },
      renderTick: function renderTick(a, b) {
        var d = this.isLinked,
            f = this.ticks,
            e = this.chart.hasRendered && F(this.oldMin);
        if (!d || a >= this.min && a <= this.max) f[a] || (f[a] = new I(this, a)), e && f[a].isNew && f[a].render(b, !0, -1), f[a].render(b);
      },
      render: function render() {
        var a = this,
            b = a.chart,
            d = a.options,
            f = a.isLog,
            k = a.isLinked,
            t = a.tickPositions,
            h = a.axisTitle,
            r = a.ticks,
            q = a.minorTicks,
            v = a.alternateBands,
            m = d.stackLabels,
            g = d.alternateGridColor,
            p = a.tickmarkOffset,
            E = a.axisLine,
            x = a.showAxis,
            z = C(b.renderer.globalAnimation),
            y,
            n;
        a.labelEdge.length = 0;
        a.overlap = !1;
        [r, q, v].forEach(function (a) {
          u(a, function (a) {
            a.isActive = !1;
          });
        });
        if (a.hasData() || k) a.minorTickInterval && !a.categories && a.getMinorTickPositions().forEach(function (b) {
          a.renderMinorTick(b);
        }), t.length && (t.forEach(function (b, d) {
          a.renderTick(b, d);
        }), p && (0 === a.min || a.single) && (r[-1] || (r[-1] = new I(a, -1, null, !0)), r[-1].render(-1))), g && t.forEach(function (d, e) {
          n = void 0 !== t[e + 1] ? t[e + 1] + p : a.max - p;
          0 === e % 2 && d < a.max && n <= a.max + (b.polar ? -p : p) && (v[d] || (v[d] = new c.PlotLineOrBand(a)), y = d + p, v[d].options = {
            from: f ? a.lin2log(y) : y,
            to: f ? a.lin2log(n) : n,
            color: g
          }, v[d].render(), v[d].isActive = !0);
        }), a._addedPlotLB || ((d.plotLines || []).concat(d.plotBands || []).forEach(function (b) {
          a.addPlotBandOrLine(b);
        }), a._addedPlotLB = !0);
        [r, q, v].forEach(function (a) {
          var d,
              f = [],
              e = z.duration;
          u(a, function (a, b) {
            a.isActive || (a.render(b, !1, 0), a.isActive = !1, f.push(b));
          });
          B(function () {
            for (d = f.length; d--;) {
              a[f[d]] && !a[f[d]].isActive && (a[f[d]].destroy(), delete a[f[d]]);
            }
          }, a !== v && b.hasRendered && e ? e : 0);
        });
        E && (E[E.isPlaced ? "animate" : "attr"]({
          d: this.getLinePath(E.strokeWidth())
        }), E.isPlaced = !0, E[x ? "show" : "hide"](x));
        h && x && (d = a.getTitlePosition(), F(d.y) ? (h[h.isNew ? "attr" : "animate"](d), h.isNew = !1) : (h.attr("y", -9999), h.isNew = !0));
        m && m.enabled && a.renderStackTotals();
        a.isDirty = !1;
        e(this, "afterRender");
      },
      redraw: function redraw() {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
          a.render();
        }));
        this.series.forEach(function (a) {
          a.isDirty = !0;
        });
      },
      keepProps: "extKey hcEvents names series userMax userMin".split(" "),
      destroy: function destroy(a) {
        var b = this,
            f = b.stacks,
            c = b.plotLinesAndBands,
            t;
        e(this, "destroy", {
          keepEvents: a
        });
        a || k(b);
        u(f, function (a, b) {
          d(a);
          f[b] = null;
        });
        [b.ticks, b.minorTicks, b.alternateBands].forEach(function (a) {
          d(a);
        });
        if (c) for (a = c.length; a--;) {
          c[a].destroy();
        }
        "stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
          b[a] && (b[a] = b[a].destroy());
        });

        for (t in b.plotLinesAndBandsGroups) {
          b.plotLinesAndBandsGroups[t] = b.plotLinesAndBandsGroups[t].destroy();
        }

        u(b, function (a, d) {
          -1 === b.keepProps.indexOf(d) && delete b[d];
        });
      },
      drawCrosshair: function drawCrosshair(a, b) {
        var d,
            f = this.crosshair,
            c = v(f.snap, !0),
            k,
            l = this.cross;
        e(this, "drawCrosshair", {
          e: a,
          point: b
        });
        a || (a = this.cross && this.cross.e);

        if (this.crosshair && !1 !== (A(b) || !c)) {
          c ? A(b) && (k = v("colorAxis" !== this.coll ? b.crosshairPos : null, this.isXAxis ? b.plotX : this.len - b.plotY)) : k = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos);
          A(k) && (d = this.getPlotLinePath({
            value: b && (this.isXAxis ? b.x : v(b.stackY, b.y)),
            translatedValue: k
          }) || null);

          if (!A(d)) {
            this.hideCrosshair();
            return;
          }

          c = this.categories && !this.isRadial;
          l || (this.cross = l = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c ? "category " : "thin ") + f.className).attr({
            zIndex: v(f.zIndex, 2)
          }).add(), this.chart.styledMode || (l.attr({
            stroke: f.color || (c ? p("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
            "stroke-width": v(f.width, 1)
          }).css({
            "pointer-events": "none"
          }), f.dashStyle && l.attr({
            dashstyle: f.dashStyle
          })));
          l.show().attr({
            d: d
          });
          c && !f.width && l.attr({
            "stroke-width": this.transA
          });
          this.cross.e = a;
        } else this.hideCrosshair();

        e(this, "afterDrawCrosshair", {
          e: a,
          point: b
        });
      },
      hideCrosshair: function hideCrosshair() {
        this.cross && this.cross.hide();
        e(this, "afterHideCrosshair");
      }
    });
    return c.Axis = n;
  });
  N(H, "parts/DateTimeAxis.js", [H["parts/Globals.js"]], function (c) {
    var n = c.Axis,
        A = c.getMagnitude,
        D = c.normalizeTickInterval,
        F = c.timeUnits;

    n.prototype.getTimeTicks = function () {
      return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    };

    n.prototype.normalizeTimeTickInterval = function (c, u) {
      var z = u || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
      u = z[z.length - 1];
      var y = F[u[0]],
          n = u[1],
          x;

      for (x = 0; x < z.length && !(u = z[x], y = F[u[0]], n = u[1], z[x + 1] && c <= (y * n[n.length - 1] + F[z[x + 1][0]]) / 2); x++) {
        ;
      }

      y === F.year && c < 5 * y && (n = [1, 2, 5]);
      c = D(c / y, n, "year" === u[0] ? Math.max(A(c / y), 1) : 1);
      return {
        unitRange: y,
        count: c,
        unitName: u[0]
      };
    };
  });
  N(H, "parts/LogarithmicAxis.js", [H["parts/Globals.js"]], function (c) {
    var n = c.Axis,
        A = c.getMagnitude,
        D = c.normalizeTickInterval,
        F = c.pick;

    n.prototype.getLogTickPositions = function (c, u, n, y) {
      var z = this.options,
          x = this.len,
          m = [];
      y || (this._minorAutoInterval = null);
      if (.5 <= c) c = Math.round(c), m = this.getLinearTickPositions(c, u, n);else if (.08 <= c) {
        x = Math.floor(u);
        var p, g;

        for (z = .3 < c ? [1, 2, 4] : .15 < c ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; x < n + 1 && !g; x++) {
          var b = z.length;

          for (p = 0; p < b && !g; p++) {
            var a = this.log2lin(this.lin2log(x) * z[p]);
            a > u && (!y || d <= n) && void 0 !== d && m.push(d);
            d > n && (g = !0);
            var d = a;
          }
        }
      } else u = this.lin2log(u), n = this.lin2log(n), c = y ? this.getMinorTickInterval() : z.tickInterval, c = F("auto" === c ? null : c, this._minorAutoInterval, z.tickPixelInterval / (y ? 5 : 1) * (n - u) / ((y ? x / this.tickPositions.length : x) || 1)), c = D(c, null, A(c)), m = this.getLinearTickPositions(c, u, n).map(this.log2lin), y || (this._minorAutoInterval = c / 5);
      y || (this.tickInterval = c);
      return m;
    };

    n.prototype.log2lin = function (c) {
      return Math.log(c) / Math.LN10;
    };

    n.prototype.lin2log = function (c) {
      return Math.pow(10, c);
    };
  });
  N(H, "parts/PlotLineOrBand.js", [H["parts/Globals.js"], H["parts/Axis.js"], H["parts/Utilities.js"]], function (c, n, A) {
    var D = A.defined,
        F = A.erase,
        z = A.objectEach,
        u = c.arrayMax,
        L = c.arrayMin,
        y = c.destroyObjectProperties,
        C = c.merge,
        x = c.pick;

    c.PlotLineOrBand = function (c, p) {
      this.axis = c;
      p && (this.options = p, this.id = p.id);
    };

    c.PlotLineOrBand.prototype = {
      render: function render() {
        c.fireEvent(this, "render");
        var m = this,
            p = m.axis,
            g = p.horiz,
            b = m.options,
            a = b.label,
            d = m.label,
            f = b.to,
            e = b.from,
            h = b.value,
            r = D(e) && D(f),
            E = D(h),
            q = m.svgElem,
            v = !q,
            k = [],
            t = b.color,
            B = x(b.zIndex, 0),
            I = b.events;
        k = {
          "class": "highcharts-plot-" + (r ? "band " : "line ") + (b.className || "")
        };
        var w = {},
            l = p.chart.renderer,
            J = r ? "bands" : "lines";
        p.isLog && (e = p.log2lin(e), f = p.log2lin(f), h = p.log2lin(h));
        p.chart.styledMode || (E ? (k.stroke = t || "#999999", k["stroke-width"] = x(b.width, 1), b.dashStyle && (k.dashstyle = b.dashStyle)) : r && (k.fill = t || "#e6ebf5", b.borderWidth && (k.stroke = b.borderColor, k["stroke-width"] = b.borderWidth)));
        w.zIndex = B;
        J += "-" + B;
        (t = p.plotLinesAndBandsGroups[J]) || (p.plotLinesAndBandsGroups[J] = t = l.g("plot-" + J).attr(w).add());
        v && (m.svgElem = q = l.path().attr(k).add(t));
        if (E) k = p.getPlotLinePath({
          value: h,
          lineWidth: q.strokeWidth(),
          acrossPanes: b.acrossPanes
        });else if (r) k = p.getPlotBandPath(e, f, b);else return;
        (v || !q.d) && k && k.length ? (q.attr({
          d: k
        }), I && z(I, function (a, b) {
          q.on(b, function (a) {
            I[b].apply(m, [a]);
          });
        })) : q && (k ? (q.show(!0), q.animate({
          d: k
        })) : q.d && (q.hide(), d && (m.label = d = d.destroy())));
        a && (D(a.text) || D(a.formatter)) && k && k.length && 0 < p.width && 0 < p.height && !k.isFlat ? (a = C({
          align: g && r && "center",
          x: g ? !r && 4 : 10,
          verticalAlign: !g && r && "middle",
          y: g ? r ? 16 : 10 : r ? 6 : -4,
          rotation: g && !r && 90
        }, a), this.renderLabel(a, k, r, B)) : d && d.hide();
        return m;
      },
      renderLabel: function renderLabel(c, p, g, b) {
        var a = this.label,
            d = this.axis.chart.renderer;
        a || (a = {
          align: c.textAlign || c.align,
          rotation: c.rotation,
          "class": "highcharts-plot-" + (g ? "band" : "line") + "-label " + (c.className || "")
        }, a.zIndex = b, b = this.getLabelText(c), this.label = a = d.text(b, 0, 0, c.useHTML).attr(a).add(), this.axis.chart.styledMode || a.css(c.style));
        d = p.xBounds || [p[1], p[4], g ? p[6] : p[1]];
        p = p.yBounds || [p[2], p[5], g ? p[7] : p[2]];
        g = L(d);
        b = L(p);
        a.align(c, !1, {
          x: g,
          y: b,
          width: u(d) - g,
          height: u(p) - b
        });
        a.show(!0);
      },
      getLabelText: function getLabelText(c) {
        return D(c.formatter) ? c.formatter.call(this) : c.text;
      },
      destroy: function destroy() {
        F(this.axis.plotLinesAndBands, this);
        delete this.axis;
        y(this);
      }
    };
    c.extend(n.prototype, {
      getPlotBandPath: function getPlotBandPath(c, p) {
        var g = this.getPlotLinePath({
          value: p,
          force: !0,
          acrossPanes: this.options.acrossPanes
        }),
            b = this.getPlotLinePath({
          value: c,
          force: !0,
          acrossPanes: this.options.acrossPanes
        }),
            a = [],
            d = this.horiz,
            f = 1;
        c = c < this.min && p < this.min || c > this.max && p > this.max;

        if (b && g) {
          if (c) {
            var e = b.toString() === g.toString();
            f = 0;
          }

          for (c = 0; c < b.length; c += 6) {
            d && g[c + 1] === b[c + 1] ? (g[c + 1] += f, g[c + 4] += f) : d || g[c + 2] !== b[c + 2] || (g[c + 2] += f, g[c + 5] += f), a.push("M", b[c + 1], b[c + 2], "L", b[c + 4], b[c + 5], g[c + 4], g[c + 5], g[c + 1], g[c + 2], "z"), a.isFlat = e;
          }
        }

        return a;
      },
      addPlotBand: function addPlotBand(c) {
        return this.addPlotBandOrLine(c, "plotBands");
      },
      addPlotLine: function addPlotLine(c) {
        return this.addPlotBandOrLine(c, "plotLines");
      },
      addPlotBandOrLine: function addPlotBandOrLine(m, p) {
        var g = new c.PlotLineOrBand(this, m).render(),
            b = this.userOptions;

        if (g) {
          if (p) {
            var a = b[p] || [];
            a.push(m);
            b[p] = a;
          }

          this.plotLinesAndBands.push(g);
        }

        return g;
      },
      removePlotBandOrLine: function removePlotBandOrLine(c) {
        for (var m = this.plotLinesAndBands, g = this.options, b = this.userOptions, a = m.length; a--;) {
          m[a].id === c && m[a].destroy();
        }

        [g.plotLines || [], b.plotLines || [], g.plotBands || [], b.plotBands || []].forEach(function (b) {
          for (a = b.length; a--;) {
            b[a].id === c && F(b, b[a]);
          }
        });
      },
      removePlotBand: function removePlotBand(c) {
        this.removePlotBandOrLine(c);
      },
      removePlotLine: function removePlotLine(c) {
        this.removePlotBandOrLine(c);
      }
    });
  });
  N(H, "parts/Tooltip.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = n.isString,
        z = n.splat;
    "";
    var u = c.doc,
        L = c.extend,
        y = c.format,
        C = c.merge,
        x = c.pick,
        m = c.syncTimeout,
        p = c.timeUnits;

    c.Tooltip = function () {
      this.init.apply(this, arguments);
    };

    c.Tooltip.prototype = {
      init: function init(c, b) {
        this.chart = c;
        this.options = b;
        this.crosshairs = [];
        this.now = {
          x: 0,
          y: 0
        };
        this.isHidden = !0;
        this.split = b.split && !c.inverted;
        this.shared = b.shared || this.split;
        this.outside = x(b.outside, !(!c.scrollablePixelsX && !c.scrollablePixelsY)) && !this.split;
      },
      cleanSplit: function cleanSplit(c) {
        this.chart.series.forEach(function (b) {
          var a = b && b.tt;
          a && (!a.isActive || c ? b.tt = a.destroy() : a.isActive = !1);
        });
      },
      applyFilter: function applyFilter() {
        var c = this.chart;
        c.renderer.definition({
          tagName: "filter",
          id: "drop-shadow-" + c.index,
          opacity: .5,
          children: [{
            tagName: "feGaussianBlur",
            "in": "SourceAlpha",
            stdDeviation: 1
          }, {
            tagName: "feOffset",
            dx: 1,
            dy: 1
          }, {
            tagName: "feComponentTransfer",
            children: [{
              tagName: "feFuncA",
              type: "linear",
              slope: .3
            }]
          }, {
            tagName: "feMerge",
            children: [{
              tagName: "feMergeNode"
            }, {
              tagName: "feMergeNode",
              "in": "SourceGraphic"
            }]
          }]
        });
        c.renderer.definition({
          tagName: "style",
          textContent: ".highcharts-tooltip-" + c.index + "{filter:url(#drop-shadow-" + c.index + ")}"
        });
      },
      getLabel: function getLabel() {
        var g = this,
            b = this.chart.renderer,
            a = this.chart.styledMode,
            d = this.options,
            f = "tooltip" + (A(d.className) ? " " + d.className : ""),
            e;

        if (!this.label) {
          this.outside && (this.container = e = c.doc.createElement("div"), e.className = "highcharts-tooltip-container", c.css(e, {
            position: "absolute",
            top: "1px",
            pointerEvents: d.style && d.style.pointerEvents,
            zIndex: 3
          }), c.doc.body.appendChild(e), this.renderer = b = new c.Renderer(e, 0, 0, {}, void 0, void 0, b.styledMode));
          this.split ? this.label = b.g(f) : (this.label = b.label("", 0, 0, d.shape || "callout", null, null, d.useHTML, null, f).attr({
            padding: d.padding,
            r: d.borderRadius
          }), a || this.label.attr({
            fill: d.backgroundColor,
            "stroke-width": d.borderWidth
          }).css(d.style).shadow(d.shadow));
          a && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

          if (this.outside) {
            var h = {
              x: this.label.xSetter,
              y: this.label.ySetter
            };

            this.label.xSetter = function (a, b) {
              h[b].call(this.label, g.distance);
              e.style.left = a + "px";
            };

            this.label.ySetter = function (a, b) {
              h[b].call(this.label, g.distance);
              e.style.top = a + "px";
            };
          }

          this.label.attr({
            zIndex: 8
          }).add();
        }

        return this.label;
      },
      update: function update(c) {
        this.destroy();
        C(!0, this.chart.options.tooltip.userOptions, c);
        this.init(this.chart, C(!0, this.options, c));
      },
      destroy: function destroy() {
        this.label && (this.label = this.label.destroy());
        this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
        this.renderer && (this.renderer = this.renderer.destroy(), c.discardElement(this.container));
        c.clearTimeout(this.hideTimer);
        c.clearTimeout(this.tooltipTimeout);
      },
      move: function move(g, b, a, d) {
        var f = this,
            e = f.now,
            h = !1 !== f.options.animation && !f.isHidden && (1 < Math.abs(g - e.x) || 1 < Math.abs(b - e.y)),
            r = f.followPointer || 1 < f.len;
        L(e, {
          x: h ? (2 * e.x + g) / 3 : g,
          y: h ? (e.y + b) / 2 : b,
          anchorX: r ? void 0 : h ? (2 * e.anchorX + a) / 3 : a,
          anchorY: r ? void 0 : h ? (e.anchorY + d) / 2 : d
        });
        f.getLabel().attr(e);
        h && (c.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          f && f.move(g, b, a, d);
        }, 32));
      },
      hide: function hide(g) {
        var b = this;
        c.clearTimeout(this.hideTimer);
        g = x(g, this.options.hideDelay, 500);
        this.isHidden || (this.hideTimer = m(function () {
          b.getLabel()[g ? "fadeOut" : "hide"]();
          b.isHidden = !0;
        }, g));
      },
      getAnchor: function getAnchor(c, b) {
        var a = this.chart,
            d = a.pointer,
            f = a.inverted,
            e = a.plotTop,
            h = a.plotLeft,
            r = 0,
            g = 0,
            q,
            v;
        c = z(c);
        this.followPointer && b ? (void 0 === b.chartX && (b = d.normalize(b)), c = [b.chartX - a.plotLeft, b.chartY - e]) : c[0].tooltipPos ? c = c[0].tooltipPos : (c.forEach(function (a) {
          q = a.series.yAxis;
          v = a.series.xAxis;
          r += a.plotX + (!f && v ? v.left - h : 0);
          g += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!f && q ? q.top - e : 0);
        }), r /= c.length, g /= c.length, c = [f ? a.plotWidth - g : r, this.shared && !f && 1 < c.length && b ? b.chartY - e : f ? a.plotHeight - r : g]);
        return c.map(Math.round);
      },
      getPosition: function getPosition(c, b, a) {
        var d = this.chart,
            f = this.distance,
            e = {},
            h = d.inverted && a.h || 0,
            r,
            g = this.outside,
            q = g ? u.documentElement.clientWidth - 2 * f : d.chartWidth,
            v = g ? Math.max(u.body.scrollHeight, u.documentElement.scrollHeight, u.body.offsetHeight, u.documentElement.offsetHeight, u.documentElement.clientHeight) : d.chartHeight,
            k = d.pointer.chartPosition,
            t = d.containerScaling,
            B = function B(a) {
          return t ? a * t.scaleX : a;
        },
            I = function I(a) {
          return t ? a * t.scaleY : a;
        },
            w = function w(e) {
          var l = "x" === e;
          return [e, l ? q : v, l ? c : b].concat(g ? [l ? B(c) : I(b), l ? k.left - f + B(a.plotX + d.plotLeft) : k.top - f + I(a.plotY + d.plotTop), 0, l ? q : v] : [l ? c : b, l ? a.plotX + d.plotLeft : a.plotY + d.plotTop, l ? d.plotLeft : d.plotTop, l ? d.plotLeft + d.plotWidth : d.plotTop + d.plotHeight]);
        },
            l = w("y"),
            m = w("x"),
            p = !this.followPointer && x(a.ttBelow, !d.inverted === !!a.negative),
            n = function n(a, b, d, c, k, l, t) {
          var w = "y" === a ? I(f) : B(f),
              r = (d - c) / 2,
              q = c < k - f,
              v = k + f + c < b,
              g = k - w - d + r;
          k = k + w - r;
          if (p && v) e[a] = k;else if (!p && q) e[a] = g;else if (q) e[a] = Math.min(t - c, 0 > g - h ? g : g - h);else if (v) e[a] = Math.max(l, k + h + d > b ? k : k + h);else return !1;
        },
            y = function y(a, b, d, c, k) {
          var l;
          k < f || k > b - f ? l = !1 : e[a] = k < d / 2 ? 1 : k > b - c / 2 ? b - c - 2 : k - d / 2;
          return l;
        },
            z = function z(a) {
          var b = l;
          l = m;
          m = b;
          r = a;
        },
            M = function M() {
          !1 !== n.apply(0, l) ? !1 !== y.apply(0, m) || r || (z(!0), M()) : r ? e.x = e.y = 0 : (z(!0), M());
        };

        (d.inverted || 1 < this.len) && z();
        M();
        return e;
      },
      defaultFormatter: function defaultFormatter(c) {
        var b = this.points || z(this);
        var a = [c.tooltipFooterHeaderFormatter(b[0])];
        a = a.concat(c.bodyFormatter(b));
        a.push(c.tooltipFooterHeaderFormatter(b[0], !0));
        return a;
      },
      refresh: function refresh(g, b) {
        var a = this.chart,
            d = this.options,
            f = g,
            e = {},
            h = [];
        var r = d.formatter || this.defaultFormatter;
        e = this.shared;
        var m = a.styledMode;

        if (d.enabled) {
          c.clearTimeout(this.hideTimer);
          this.followPointer = z(f)[0].series.tooltipOptions.followPointer;
          var q = this.getAnchor(f, b);
          b = q[0];
          var v = q[1];
          !e || f.series && f.series.noSharedTooltip ? e = f.getLabelConfig() : (a.pointer.applyInactiveState(f), f.forEach(function (a) {
            a.setState("hover");
            h.push(a.getLabelConfig());
          }), e = {
            x: f[0].category,
            y: f[0].y
          }, e.points = h, f = f[0]);
          this.len = h.length;
          r = r.call(e, this);
          e = f.series;
          this.distance = x(e.tooltipOptions.distance, 16);
          !1 === r ? this.hide() : (a = this.getLabel(), this.isHidden && a.attr({
            opacity: 1
          }).show(), this.split ? this.renderSplit(r, z(g)) : (d.style.width && !m || a.css({
            width: this.chart.spacingBox.width
          }), a.attr({
            text: r && r.join ? r.join("") : r
          }), a.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + x(f.colorIndex, e.colorIndex)), m || a.attr({
            stroke: d.borderColor || f.color || e.color || "#666666"
          }), this.updatePosition({
            plotX: b,
            plotY: v,
            negative: f.negative,
            ttBelow: f.ttBelow,
            h: q[2] || 0
          })), this.isHidden = !1);
          c.fireEvent(this, "refresh");
        }
      },
      renderSplit: function renderSplit(g, b) {
        var a = this,
            d = [],
            f = this.chart,
            e = f.renderer,
            h = !0,
            r = this.options,
            m = 0,
            q,
            v = this.getLabel(),
            k = f.plotTop;
        F(g) && (g = [!1, g]);
        g.slice(0, b.length + 1).forEach(function (c, B) {
          if (!1 !== c && "" !== c) {
            B = b[B - 1] || {
              isHeader: !0,
              plotX: b[0].plotX,
              plotY: f.plotHeight
            };
            var t = B.series || a,
                w = t.tt,
                l = B.series || {},
                g = "highcharts-color-" + x(B.colorIndex, l.colorIndex, "none");
            w || (w = {
              padding: r.padding,
              r: r.borderRadius
            }, f.styledMode || (w.fill = r.backgroundColor, w["stroke-width"] = r.borderWidth), t.tt = w = e.label(null, null, null, (B.isHeader ? r.headerShape : r.shape) || "callout", null, null, r.useHTML).addClass("highcharts-tooltip-box " + g).attr(w).add(v));
            w.isActive = !0;
            w.attr({
              text: c
            });
            f.styledMode || w.css(r.style).shadow(r.shadow).attr({
              stroke: r.borderColor || B.color || l.color || "#333333"
            });
            c = w.getBBox();
            g = c.width + w.strokeWidth();
            B.isHeader ? (m = c.height, f.xAxis[0].opposite && (q = !0, k -= m), c = Math.max(0, Math.min(B.plotX + f.plotLeft - g / 2, f.chartWidth + (f.scrollablePixelsX ? f.scrollablePixelsX - f.marginRight : 0) - g))) : c = B.plotX + f.plotLeft - x(r.distance, 16) - g;
            0 > c && (h = !1);
            B.isHeader ? l = q ? -m : f.plotHeight + m : (l = l.yAxis, l = l.pos - k + Math.max(0, Math.min(B.plotY || 0, l.len)));
            d.push({
              target: l,
              rank: B.isHeader ? 1 : 0,
              size: t.tt.getBBox().height + 1,
              point: B,
              x: c,
              tt: w
            });
          }
        });
        this.cleanSplit();
        r.positioner && d.forEach(function (b) {
          var d = r.positioner.call(a, b.tt.getBBox().width, b.size, b.point);
          b.x = d.x;
          b.align = 0;
          b.target = d.y;
          b.rank = x(d.rank, b.rank);
        });
        c.distribute(d, f.plotHeight + m);
        d.forEach(function (b) {
          var d = b.point,
              c = d.series,
              e = c && c.yAxis;
          b.tt.attr({
            visibility: void 0 === b.pos ? "hidden" : "inherit",
            x: h || d.isHeader || r.positioner ? b.x : d.plotX + f.plotLeft + a.distance,
            y: b.pos + k,
            anchorX: d.isHeader ? d.plotX + f.plotLeft : d.plotX + c.xAxis.pos,
            anchorY: d.isHeader ? f.plotTop + f.plotHeight / 2 : e.pos + Math.max(0, Math.min(d.plotY, e.len))
          });
        });
      },
      updatePosition: function updatePosition(g) {
        var b = this.chart,
            a = b.pointer,
            d = this.getLabel(),
            f = g.plotX + b.plotLeft,
            e = g.plotY + b.plotTop;
        a.chartPosition || (a.chartPosition = c.offset(b.container));
        g = (this.options.positioner || this.getPosition).call(this, d.width, d.height, g);

        if (this.outside) {
          var h = (this.options.borderWidth || 0) + 2 * this.distance;
          this.renderer.setSize(d.width + h, d.height + h, !1);
          if (b = b.containerScaling) c.css(this.container, {
            transform: "scale(" + b.scaleX + ", " + b.scaleY + ")"
          }), f *= b.scaleX, e *= b.scaleY;
          f += a.chartPosition.left - g.x;
          e += a.chartPosition.top - g.y;
        }

        this.move(Math.round(g.x), Math.round(g.y || 0), f, e);
      },
      getDateFormat: function getDateFormat(c, b, a, d) {
        var f = this.chart.time,
            e = f.dateFormat("%m-%d %H:%M:%S.%L", b),
            h = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
            r = "millisecond";

        for (g in p) {
          if (c === p.week && +f.dateFormat("%w", b) === a && "00:00:00.000" === e.substr(6)) {
            var g = "week";
            break;
          }

          if (p[g] > c) {
            g = r;
            break;
          }

          if (h[g] && e.substr(h[g]) !== "01-01 00:00:00.000".substr(h[g])) break;
          "week" !== g && (r = g);
        }

        if (g) var q = f.resolveDTLFormat(d[g]).main;
        return q;
      },
      getXDateFormat: function getXDateFormat(c, b, a) {
        b = b.dateTimeLabelFormats;
        var d = a && a.closestPointRange;
        return (d ? this.getDateFormat(d, c.x, a.options.startOfWeek, b) : b.day) || b.year;
      },
      tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(g, b) {
        var a = b ? "footer" : "header",
            d = g.series,
            f = d.tooltipOptions,
            e = f.xDateFormat,
            h = d.xAxis,
            r = h && "datetime" === h.options.type && D(g.key),
            m = f[a + "Format"];
        b = {
          isFooter: b,
          labelConfig: g
        };
        c.fireEvent(this, "headerFormatter", b, function (a) {
          r && !e && (e = this.getXDateFormat(g, f, h));
          r && e && (g.point && g.point.tooltipDateKeys || ["key"]).forEach(function (a) {
            m = m.replace("{point." + a + "}", "{point." + a + ":" + e + "}");
          });
          d.chart.styledMode && (m = this.styledModeFormat(m));
          a.text = y(m, {
            point: g,
            series: d
          }, this.chart.time);
        });
        return b.text;
      },
      bodyFormatter: function bodyFormatter(c) {
        return c.map(function (b) {
          var a = b.series.tooltipOptions;
          return (a[(b.point.formatPrefix || "point") + "Formatter"] || b.point.tooltipFormatter).call(b.point, a[(b.point.formatPrefix || "point") + "Format"] || "");
        });
      },
      styledModeFormat: function styledModeFormat(c) {
        return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
      }
    };
  });
  N(H, "parts/Pointer.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.isNumber,
        z = n.isObject,
        u = n.objectEach,
        L = n.splat,
        y = c.addEvent,
        C = c.charts,
        x = c.color,
        m = c.css,
        p = c.extend,
        g = c.find,
        b = c.fireEvent,
        a = c.offset,
        d = c.pick,
        f = c.Tooltip;

    c.Pointer = function (a, b) {
      this.init(a, b);
    };

    c.Pointer.prototype = {
      init: function init(a, b) {
        this.options = b;
        this.chart = a;
        this.runChartClick = b.chart.events && !!b.chart.events.click;
        this.pinchDown = [];
        this.lastValidTouch = {};
        f && (a.tooltip = new f(a, b.tooltip), this.followTouchMove = d(b.tooltip.followTouchMove, !0));
        this.setDOMEvents();
      },
      zoomOption: function zoomOption(a) {
        var b = this.chart,
            c = b.options.chart,
            f = c.zoomType || "";
        b = b.inverted;
        /touch/.test(a.type) && (f = d(c.pinchType, f));
        this.zoomX = a = /x/.test(f);
        this.zoomY = f = /y/.test(f);
        this.zoomHor = a && !b || f && b;
        this.zoomVert = f && !b || a && b;
        this.hasZoom = a || f;
      },
      normalize: function normalize(b, d) {
        var c = b.touches ? b.touches.length ? b.touches.item(0) : b.changedTouches[0] : b;
        d || (this.chartPosition = d = a(this.chart.container));
        var f = c.pageX - d.left;
        d = c.pageY - d.top;
        if (c = this.chart.containerScaling) f /= c.scaleX, d /= c.scaleY;
        return p(b, {
          chartX: Math.round(f),
          chartY: Math.round(d)
        });
      },
      getCoordinates: function getCoordinates(a) {
        var b = {
          xAxis: [],
          yAxis: []
        };
        this.chart.axes.forEach(function (d) {
          b[d.isXAxis ? "xAxis" : "yAxis"].push({
            axis: d,
            value: d.toValue(a[d.horiz ? "chartX" : "chartY"])
          });
        });
        return b;
      },
      findNearestKDPoint: function findNearestKDPoint(a, b, d) {
        var c;
        a.forEach(function (a) {
          var f = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y");
          a = a.searchPoint(d, f);

          if ((f = z(a, !0)) && !(f = !z(c, !0))) {
            f = c.distX - a.distX;
            var e = c.dist - a.dist,
                t = (a.series.group && a.series.group.zIndex) - (c.series.group && c.series.group.zIndex);
            f = 0 < (0 !== f && b ? f : 0 !== e ? e : 0 !== t ? t : c.series.index > a.series.index ? -1 : 1);
          }

          f && (c = a);
        });
        return c;
      },
      getPointFromEvent: function getPointFromEvent(a) {
        a = a.target;

        for (var b; a && !b;) {
          b = a.point, a = a.parentNode;
        }

        return b;
      },
      getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, b) {
        var c = a.series,
            f = c.xAxis;
        c = c.yAxis;
        var e = d(a.clientX, a.plotX),
            h = a.shapeArgs;
        if (f && c) return b ? {
          chartX: f.len + f.pos - e,
          chartY: c.len + c.pos - a.plotY
        } : {
          chartX: e + f.pos,
          chartY: a.plotY + c.pos
        };
        if (h && h.x && h.y) return {
          chartX: h.x,
          chartY: h.y
        };
      },
      getHoverData: function getHoverData(a, b, c, f, q, v) {
        var e,
            t = [];
        f = !(!f || !a);
        var h = b && !b.stickyTracking ? [b] : c.filter(function (a) {
          return a.visible && !(!q && a.directTouch) && d(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });
        b = (e = f || !v ? a : this.findNearestKDPoint(h, q, v)) && e.series;
        e && (q && !b.noSharedTooltip ? (h = c.filter(function (a) {
          return a.visible && !(!q && a.directTouch) && d(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), h.forEach(function (a) {
          var b = g(a.points, function (a) {
            return a.x === e.x && !a.isNull;
          });
          z(b) && (a.chart.isBoosting && (b = a.getPoint(b)), t.push(b));
        })) : t.push(e));
        return {
          hoverPoint: e,
          hoverSeries: b,
          hoverPoints: t
        };
      },
      runPointActions: function runPointActions(a, b) {
        var f = this.chart,
            e = f.tooltip && f.tooltip.options.enabled ? f.tooltip : void 0,
            h = e ? e.shared : !1,
            v = b || f.hoverPoint,
            k = v && v.series || f.hoverSeries;
        k = this.getHoverData(v, k, f.series, (!a || "touchmove" !== a.type) && (!!b || k && k.directTouch && this.isDirectTouch), h, a);
        v = k.hoverPoint;
        var t = k.hoverPoints;
        b = (k = k.hoverSeries) && k.tooltipOptions.followPointer;
        h = h && k && !k.noSharedTooltip;

        if (v && (v !== f.hoverPoint || e && e.isHidden)) {
          (f.hoverPoints || []).forEach(function (a) {
            -1 === t.indexOf(a) && a.setState();
          });
          if (f.hoverSeries !== k) k.onMouseOver();
          this.applyInactiveState(t);
          (t || []).forEach(function (a) {
            a.setState("hover");
          });
          f.hoverPoint && f.hoverPoint.firePointEvent("mouseOut");
          if (!v.series) return;
          v.firePointEvent("mouseOver");
          f.hoverPoints = t;
          f.hoverPoint = v;
          e && e.refresh(h ? t : v, a);
        } else b && e && !e.isHidden && (v = e.getAnchor([{}], a), e.updatePosition({
          plotX: v[0],
          plotY: v[1]
        }));

        this.unDocMouseMove || (this.unDocMouseMove = y(f.container.ownerDocument, "mousemove", function (a) {
          var b = C[c.hoverChartIndex];
          if (b) b.pointer.onDocumentMouseMove(a);
        }));
        f.axes.forEach(function (b) {
          var f = d(b.crosshair.snap, !0),
              e = f ? c.find(t, function (a) {
            return a.series[b.coll] === b;
          }) : void 0;
          e || !f ? b.drawCrosshair(a, e) : b.hideCrosshair();
        });
      },
      applyInactiveState: function applyInactiveState(a) {
        var b = [],
            d;
        (a || []).forEach(function (a) {
          d = a.series;
          b.push(d);
          d.linkedParent && b.push(d.linkedParent);
          d.linkedSeries && (b = b.concat(d.linkedSeries));
          d.navigatorSeries && b.push(d.navigatorSeries);
        });
        this.chart.series.forEach(function (a) {
          -1 === b.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive");
        });
      },
      reset: function reset(a, b) {
        var d = this.chart,
            c = d.hoverSeries,
            f = d.hoverPoint,
            e = d.hoverPoints,
            k = d.tooltip,
            t = k && k.shared ? e : f;
        a && t && L(t).forEach(function (b) {
          b.series.isCartesian && void 0 === b.plotX && (a = !1);
        });
        if (a) k && t && L(t).length && (k.refresh(t), k.shared && e ? e.forEach(function (a) {
          a.setState(a.state, !0);
          a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : f && (f.setState(f.state, !0), d.axes.forEach(function (a) {
          a.crosshair && a.drawCrosshair(null, f);
        })));else {
          if (f) f.onMouseOut();
          e && e.forEach(function (a) {
            a.setState();
          });
          if (c) c.onMouseOut();
          k && k.hide(b);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
          d.axes.forEach(function (a) {
            a.hideCrosshair();
          });
          this.hoverX = d.hoverPoints = d.hoverPoint = null;
        }
      },
      scaleGroups: function scaleGroups(a, b) {
        var d = this.chart,
            c;
        d.series.forEach(function (f) {
          c = a || f.getPlotBox();
          f.xAxis && f.xAxis.zoomEnabled && f.group && (f.group.attr(c), f.markerGroup && (f.markerGroup.attr(c), f.markerGroup.clip(b ? d.clipRect : null)), f.dataLabelsGroup && f.dataLabelsGroup.attr(c));
        });
        d.clipRect.attr(b || d.clipBox);
      },
      dragStart: function dragStart(a) {
        var b = this.chart;
        b.mouseIsDown = a.type;
        b.cancelClick = !1;
        b.mouseDownX = this.mouseDownX = a.chartX;
        b.mouseDownY = this.mouseDownY = a.chartY;
      },
      drag: function drag(a) {
        var b = this.chart,
            d = b.options.chart,
            c = a.chartX,
            f = a.chartY,
            e = this.zoomHor,
            k = this.zoomVert,
            t = b.plotLeft,
            B = b.plotTop,
            I = b.plotWidth,
            w = b.plotHeight,
            l = this.selectionMarker,
            g = this.mouseDownX,
            m = this.mouseDownY,
            p = d.panKey && a[d.panKey + "Key"];
        if (!l || !l.touch) if (c < t ? c = t : c > t + I && (c = t + I), f < B ? f = B : f > B + w && (f = B + w), this.hasDragged = Math.sqrt(Math.pow(g - c, 2) + Math.pow(m - f, 2)), 10 < this.hasDragged) {
          var u = b.isInsidePlot(g - t, m - B);
          b.hasCartesianSeries && (this.zoomX || this.zoomY) && u && !p && !l && (this.selectionMarker = l = b.renderer.rect(t, B, e ? 1 : I, k ? 1 : w, 0).attr({
            "class": "highcharts-selection-marker",
            zIndex: 7
          }).add(), b.styledMode || l.attr({
            fill: d.selectionMarkerFill || x("#335cad").setOpacity(.25).get()
          }));
          l && e && (c -= g, l.attr({
            width: Math.abs(c),
            x: (0 < c ? 0 : c) + g
          }));
          l && k && (c = f - m, l.attr({
            height: Math.abs(c),
            y: (0 < c ? 0 : c) + m
          }));
          u && !l && d.panning && b.pan(a, d.panning);
        }
      },
      drop: function drop(a) {
        var d = this,
            c = this.chart,
            f = this.hasPinched;

        if (this.selectionMarker) {
          var e = {
            originalEvent: a,
            xAxis: [],
            yAxis: []
          },
              v = this.selectionMarker,
              k = v.attr ? v.attr("x") : v.x,
              t = v.attr ? v.attr("y") : v.y,
              B = v.attr ? v.attr("width") : v.width,
              I = v.attr ? v.attr("height") : v.height,
              w;
          if (this.hasDragged || f) c.axes.forEach(function (b) {
            if (b.zoomEnabled && D(b.min) && (f || d[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[b.coll]])) {
              var c = b.horiz,
                  l = "touchend" === a.type ? b.minPixelPadding : 0,
                  h = b.toValue((c ? k : t) + l);
              c = b.toValue((c ? k + B : t + I) - l);
              e[b.coll].push({
                axis: b,
                min: Math.min(h, c),
                max: Math.max(h, c)
              });
              w = !0;
            }
          }), w && b(c, "selection", e, function (a) {
            c.zoom(p(a, f ? {
              animation: !1
            } : null));
          });
          F(c.index) && (this.selectionMarker = this.selectionMarker.destroy());
          f && this.scaleGroups();
        }

        c && F(c.index) && (m(c.container, {
          cursor: c._cursor
        }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      },
      onContainerMouseDown: function onContainerMouseDown(a) {
        a = this.normalize(a);
        2 !== a.button && (this.zoomOption(a), a.preventDefault && a.preventDefault(), this.dragStart(a));
      },
      onDocumentMouseUp: function onDocumentMouseUp(a) {
        C[c.hoverChartIndex] && C[c.hoverChartIndex].pointer.drop(a);
      },
      onDocumentMouseMove: function onDocumentMouseMove(a) {
        var b = this.chart,
            d = this.chartPosition;
        a = this.normalize(a, d);
        !d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
      },
      onContainerMouseLeave: function onContainerMouseLeave(a) {
        var b = C[c.hoverChartIndex];
        b && (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = null);
      },
      onContainerMouseMove: function onContainerMouseMove(a) {
        var b = this.chart;
        D(c.hoverChartIndex) && C[c.hoverChartIndex] && C[c.hoverChartIndex].mouseIsDown || (c.hoverChartIndex = b.index);
        a = this.normalize(a);
        a.preventDefault || (a.returnValue = !1);
        "mousedown" === b.mouseIsDown && this.drag(a);
        !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a);
      },
      inClass: function inClass(a, b) {
        for (var d; a;) {
          if (d = A(a, "class")) {
            if (-1 !== d.indexOf(b)) return !0;
            if (-1 !== d.indexOf("highcharts-container")) return !1;
          }

          a = a.parentNode;
        }
      },
      onTrackerMouseOut: function onTrackerMouseOut(a) {
        var b = this.chart.hoverSeries;
        a = a.relatedTarget || a.toElement;
        this.isDirectTouch = !1;
        if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
      },
      onContainerClick: function onContainerClick(a) {
        var d = this.chart,
            c = d.hoverPoint,
            f = d.plotLeft,
            e = d.plotTop;
        a = this.normalize(a);
        d.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (b(c.series, "click", p(a, {
          point: c
        })), d.hoverPoint && c.firePointEvent("click", a)) : (p(a, this.getCoordinates(a)), d.isInsidePlot(a.chartX - f, a.chartY - e) && b(d, "click", a)));
      },
      setDOMEvents: function setDOMEvents() {
        var a = this,
            b = a.chart.container,
            d = b.ownerDocument;

        b.onmousedown = function (b) {
          a.onContainerMouseDown(b);
        };

        b.onmousemove = function (b) {
          a.onContainerMouseMove(b);
        };

        b.onclick = function (b) {
          a.onContainerClick(b);
        };

        this.unbindContainerMouseLeave = y(b, "mouseleave", a.onContainerMouseLeave);
        c.unbindDocumentMouseUp || (c.unbindDocumentMouseUp = y(d, "mouseup", a.onDocumentMouseUp));
        c.hasTouch && (y(b, "touchstart", function (b) {
          a.onContainerTouchStart(b);
        }), y(b, "touchmove", function (b) {
          a.onContainerTouchMove(b);
        }), c.unbindDocumentTouchEnd || (c.unbindDocumentTouchEnd = y(d, "touchend", a.onDocumentTouchEnd)));
      },
      destroy: function destroy() {
        var a = this;
        a.unDocMouseMove && a.unDocMouseMove();
        this.unbindContainerMouseLeave();
        c.chartCount || (c.unbindDocumentMouseUp && (c.unbindDocumentMouseUp = c.unbindDocumentMouseUp()), c.unbindDocumentTouchEnd && (c.unbindDocumentTouchEnd = c.unbindDocumentTouchEnd()));
        clearInterval(a.tooltipTimeout);
        u(a, function (b, d) {
          a[d] = null;
        });
      }
    };
  });
  N(H, "parts/TouchPointer.js", [H["parts/Globals.js"]], function (c) {
    var n = c.charts,
        A = c.extend,
        D = c.noop,
        F = c.pick;
    A(c.Pointer.prototype, {
      pinchTranslate: function pinchTranslate(c, u, n, y, A, x) {
        this.zoomHor && this.pinchTranslateDirection(!0, c, u, n, y, A, x);
        this.zoomVert && this.pinchTranslateDirection(!1, c, u, n, y, A, x);
      },
      pinchTranslateDirection: function pinchTranslateDirection(c, u, n, y, A, x, m, p) {
        var g = this.chart,
            b = c ? "x" : "y",
            a = c ? "X" : "Y",
            d = "chart" + a,
            f = c ? "width" : "height",
            e = g["plot" + (c ? "Left" : "Top")],
            h,
            r,
            E = p || 1,
            q = g.inverted,
            v = g.bounds[c ? "h" : "v"],
            k = 1 === u.length,
            t = u[0][d],
            B = n[0][d],
            I = !k && u[1][d],
            w = !k && n[1][d];

        n = function n() {
          !k && 20 < Math.abs(t - I) && (E = p || Math.abs(B - w) / Math.abs(t - I));
          r = (e - B) / E + t;
          h = g["plot" + (c ? "Width" : "Height")] / E;
        };

        n();
        u = r;

        if (u < v.min) {
          u = v.min;
          var l = !0;
        } else u + h > v.max && (u = v.max - h, l = !0);

        l ? (B -= .8 * (B - m[b][0]), k || (w -= .8 * (w - m[b][1])), n()) : m[b] = [B, w];
        q || (x[b] = r - e, x[f] = h);
        x = q ? 1 / E : E;
        A[f] = h;
        A[b] = u;
        y[q ? c ? "scaleY" : "scaleX" : "scale" + a] = E;
        y["translate" + a] = x * e + (B - x * t);
      },
      pinch: function pinch(c) {
        var u = this,
            n = u.chart,
            y = u.pinchDown,
            z = c.touches,
            x = z.length,
            m = u.lastValidTouch,
            p = u.hasZoom,
            g = u.selectionMarker,
            b = {},
            a = 1 === x && (u.inClass(c.target, "highcharts-tracker") && n.runTrackerClick || u.runChartClick),
            d = {};
        1 < x && (u.initiated = !0);
        p && u.initiated && !a && c.preventDefault();
        [].map.call(z, function (a) {
          return u.normalize(a);
        });
        "touchstart" === c.type ? ([].forEach.call(z, function (a, b) {
          y[b] = {
            chartX: a.chartX,
            chartY: a.chartY
          };
        }), m.x = [y[0].chartX, y[1] && y[1].chartX], m.y = [y[0].chartY, y[1] && y[1].chartY], n.axes.forEach(function (a) {
          if (a.zoomEnabled) {
            var b = n.bounds[a.horiz ? "h" : "v"],
                d = a.minPixelPadding,
                c = a.toPixels(Math.min(F(a.options.min, a.dataMin), a.dataMin)),
                f = a.toPixels(Math.max(F(a.options.max, a.dataMax), a.dataMax)),
                q = Math.max(c, f);
            b.min = Math.min(a.pos, Math.min(c, f) - d);
            b.max = Math.max(a.pos + a.len, q + d);
          }
        }), u.res = !0) : u.followTouchMove && 1 === x ? this.runPointActions(u.normalize(c)) : y.length && (g || (u.selectionMarker = g = A({
          destroy: D,
          touch: !0
        }, n.plotBox)), u.pinchTranslate(y, z, b, g, d, m), u.hasPinched = p, u.scaleGroups(b, d), u.res && (u.res = !1, this.reset(!1, 0)));
      },
      touch: function touch(n, u) {
        var z = this.chart,
            y;
        if (z.index !== c.hoverChartIndex) this.onContainerMouseLeave({
          relatedTarget: !0
        });
        c.hoverChartIndex = z.index;
        if (1 === n.touches.length) {
          if (n = this.normalize(n), (y = z.isInsidePlot(n.chartX - z.plotLeft, n.chartY - z.plotTop)) && !z.openMenu) {
            u && this.runPointActions(n);

            if ("touchmove" === n.type) {
              u = this.pinchDown;
              var A = u[0] ? 4 <= Math.sqrt(Math.pow(u[0].chartX - n.chartX, 2) + Math.pow(u[0].chartY - n.chartY, 2)) : !1;
            }

            F(A, !0) && this.pinch(n);
          } else u && this.reset();
        } else 2 === n.touches.length && this.pinch(n);
      },
      onContainerTouchStart: function onContainerTouchStart(c) {
        this.zoomOption(c);
        this.touch(c, !0);
      },
      onContainerTouchMove: function onContainerTouchMove(c) {
        this.touch(c);
      },
      onDocumentTouchEnd: function onDocumentTouchEnd(z) {
        n[c.hoverChartIndex] && n[c.hoverChartIndex].pointer.drop(z);
      }
    });
  });
  N(H, "parts/MSPointer.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.objectEach,
        D = c.addEvent,
        F = c.charts,
        z = c.css,
        u = c.doc;
    n = c.extend;
    var L = c.noop,
        y = c.Pointer,
        C = c.removeEvent,
        x = c.win,
        m = c.wrap;

    if (!c.hasTouch && (x.PointerEvent || x.MSPointerEvent)) {
      var p = {},
          g = !!x.PointerEvent,
          b = function b() {
        var a = [];

        a.item = function (a) {
          return this[a];
        };

        A(p, function (b) {
          a.push({
            pageX: b.pageX,
            pageY: b.pageY,
            target: b.target
          });
        });
        return a;
      },
          a = function a(_a, f, e, h) {
        "touch" !== _a.pointerType && _a.pointerType !== _a.MSPOINTER_TYPE_TOUCH || !F[c.hoverChartIndex] || (h(_a), h = F[c.hoverChartIndex].pointer, h[f]({
          type: e,
          target: _a.currentTarget,
          preventDefault: L,
          touches: b()
        }));
      };

      n(y.prototype, {
        onContainerPointerDown: function onContainerPointerDown(b) {
          a(b, "onContainerTouchStart", "touchstart", function (a) {
            p[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY,
              target: a.currentTarget
            };
          });
        },
        onContainerPointerMove: function onContainerPointerMove(b) {
          a(b, "onContainerTouchMove", "touchmove", function (a) {
            p[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY
            };
            p[a.pointerId].target || (p[a.pointerId].target = a.currentTarget);
          });
        },
        onDocumentPointerUp: function onDocumentPointerUp(b) {
          a(b, "onDocumentTouchEnd", "touchend", function (a) {
            delete p[a.pointerId];
          });
        },
        batchMSEvents: function batchMSEvents(a) {
          a(this.chart.container, g ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
          a(this.chart.container, g ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
          a(u, g ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        }
      });
      m(y.prototype, "init", function (a, b, c) {
        a.call(this, b, c);
        this.hasZoom && z(b.container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });
      });
      m(y.prototype, "setDOMEvents", function (a) {
        a.apply(this);
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(D);
      });
      m(y.prototype, "destroy", function (a) {
        this.batchMSEvents(C);
        a.call(this);
      });
    }
  });
  N(H, "parts/Legend.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.addEvent,
        z = c.css,
        u = c.discardElement,
        L = c.fireEvent;
    n = c.isFirefox;
    var y = c.marginNames,
        C = c.merge,
        x = c.pick,
        m = c.setAnimation,
        p = c.stableSort,
        g = c.win,
        b = c.wrap;

    c.Legend = function (a, b) {
      this.init(a, b);
    };

    c.Legend.prototype = {
      init: function init(a, b) {
        this.chart = a;
        this.setOptions(b);
        b.enabled && (this.render(), F(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = F(this.chart, "render", function () {
          this.legend.proximatePositions();
          this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      },
      setOptions: function setOptions(a) {
        var b = x(a.padding, 8);
        this.options = a;
        this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = C(this.itemStyle, a.itemHiddenStyle));
        this.itemMarginTop = a.itemMarginTop || 0;
        this.padding = b;
        this.initialItemY = b - 5;
        this.symbolWidth = x(a.symbolWidth, 16);
        this.pages = [];
        this.proximate = "proximate" === a.layout && !this.chart.inverted;
      },
      update: function update(a, b) {
        var d = this.chart;
        this.setOptions(C(!0, this.options, a));
        this.destroy();
        d.isDirtyLegend = d.isDirtyBox = !0;
        x(b, !0) && d.redraw();
        L(this, "afterUpdate");
      },
      colorizeItem: function colorizeItem(a, b) {
        a.legendGroup[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

        if (!this.chart.styledMode) {
          var d = this.options,
              c = a.legendItem,
              h = a.legendLine,
              r = a.legendSymbol,
              g = this.itemHiddenStyle.color;
          d = b ? d.itemStyle.color : g;
          var q = b ? a.color || g : g,
              v = a.options && a.options.marker,
              k = {
            fill: q
          };
          c && c.css({
            fill: d,
            color: d
          });
          h && h.attr({
            stroke: q
          });
          r && (v && r.isMarker && (k = a.pointAttribs(), b || (k.stroke = k.fill = g)), r.attr(k));
        }

        L(this, "afterColorizeItem", {
          item: a,
          visible: b
        });
      },
      positionItems: function positionItems() {
        this.allItems.forEach(this.positionItem, this);
        this.chart.isResizing || this.positionCheckboxes();
      },
      positionItem: function positionItem(a) {
        var b = this.options,
            c = b.symbolPadding;
        b = !b.rtl;
        var e = a._legendItemPos,
            h = e[0];
        e = e[1];
        var r = a.checkbox;
        if ((a = a.legendGroup) && a.element) a[A(a.translateY) ? "animate" : "attr"]({
          translateX: b ? h : this.legendWidth - h - 2 * c - 4,
          translateY: e
        });
        r && (r.x = h, r.y = e);
      },
      destroyItem: function destroyItem(a) {
        var b = a.checkbox;
        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (b) {
          a[b] && (a[b] = a[b].destroy());
        });
        b && u(a.checkbox);
      },
      destroy: function destroy() {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }

        this.getAllItems().forEach(function (b) {
          ["legendItem", "legendGroup"].forEach(a, b);
        });
        "clipRect up down pager nav box title group".split(" ").forEach(a, this);
        this.display = null;
      },
      positionCheckboxes: function positionCheckboxes() {
        var a = this.group && this.group.alignAttr,
            b = this.clipHeight || this.legendHeight,
            c = this.titleHeight;

        if (a) {
          var e = a.translateY;
          this.allItems.forEach(function (d) {
            var f = d.checkbox;

            if (f) {
              var h = e + c + f.y + (this.scrollOffset || 0) + 3;
              z(f, {
                left: a.translateX + d.checkboxOffset + f.x - 20 + "px",
                top: h + "px",
                display: this.proximate || h > e - 6 && h < e + b - 6 ? "" : "none"
              });
            }
          }, this);
        }
      },
      renderTitle: function renderTitle() {
        var a = this.options,
            b = this.padding,
            c = a.title,
            e = 0;
        c.text && (this.title || (this.title = this.chart.renderer.label(c.text, b - 3, b - 4, null, null, null, a.useHTML, null, "legend-title").attr({
          zIndex: 1
        }), this.chart.styledMode || this.title.css(c.style), this.title.add(this.group)), c.width || this.title.css({
          width: this.maxLegendWidth + "px"
        }), a = this.title.getBBox(), e = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
          translateY: e
        }));
        this.titleHeight = e;
      },
      setText: function setText(a) {
        var b = this.options;
        a.legendItem.attr({
          text: b.labelFormat ? c.format(b.labelFormat, a, this.chart.time) : b.labelFormatter.call(a)
        });
      },
      renderItem: function renderItem(a) {
        var b = this.chart,
            c = b.renderer,
            e = this.options,
            h = this.symbolWidth,
            r = e.symbolPadding,
            g = this.itemStyle,
            q = this.itemHiddenStyle,
            v = "horizontal" === e.layout ? x(e.itemDistance, 20) : 0,
            k = !e.rtl,
            t = a.legendItem,
            B = !a.series,
            I = !B && a.series.drawLegendSymbol ? a.series : a,
            w = I.options;
        w = this.createCheckboxForItem && w && w.showCheckbox;
        v = h + r + v + (w ? 20 : 0);
        var l = e.useHTML,
            m = a.options.className;
        t || (a.legendGroup = c.g("legend-item").addClass("highcharts-" + I.type + "-series highcharts-color-" + a.colorIndex + (m ? " " + m : "") + (B ? " highcharts-series-" + a.index : "")).attr({
          zIndex: 1
        }).add(this.scrollGroup), a.legendItem = t = c.text("", k ? h + r : -r, this.baseline || 0, l), b.styledMode || t.css(C(a.visible ? g : q)), t.attr({
          align: k ? "left" : "right",
          zIndex: 2
        }).add(a.legendGroup), this.baseline || (this.fontMetrics = c.fontMetrics(b.styledMode ? 12 : g.fontSize, t), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, t.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, I.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, t, l));
        w && !a.checkbox && this.createCheckboxForItem(a);
        this.colorizeItem(a, a.visible);
        !b.styledMode && g.width || t.css({
          width: (e.itemWidth || this.widthOption || b.spacingBox.width) - v
        });
        this.setText(a);
        b = t.getBBox();
        a.itemWidth = a.checkboxOffset = e.itemWidth || a.legendItemWidth || b.width + v;
        this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);
        this.totalItemWidth += a.itemWidth;
        this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || b.height || this.symbolHeight);
      },
      layoutItem: function layoutItem(a) {
        var b = this.options,
            c = this.padding,
            e = "horizontal" === b.layout,
            h = a.itemHeight,
            g = b.itemMarginBottom || 0,
            m = this.itemMarginTop,
            q = e ? x(b.itemDistance, 20) : 0,
            v = this.maxLegendWidth;
        b = b.alignColumns && this.totalItemWidth > v ? this.maxItemWidth : a.itemWidth;
        e && this.itemX - c + b > v && (this.itemX = c, this.lastLineHeight && (this.itemY += m + this.lastLineHeight + g), this.lastLineHeight = 0);
        this.lastItemY = m + this.itemY + g;
        this.lastLineHeight = Math.max(h, this.lastLineHeight);
        a._legendItemPos = [this.itemX, this.itemY];
        e ? this.itemX += b : (this.itemY += m + h + g, this.lastLineHeight = h);
        this.offsetWidth = this.widthOption || Math.max((e ? this.itemX - c - (a.checkbox ? 0 : q) : b) + c, this.offsetWidth);
      },
      getAllItems: function getAllItems() {
        var a = [];
        this.chart.series.forEach(function (b) {
          var d = b && b.options;
          b && x(d.showInLegend, A(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === d.legendType ? b.data : b)));
        });
        L(this, "afterGetAllItems", {
          allItems: a
        });
        return a;
      },
      getAlignment: function getAlignment() {
        var a = this.options;
        return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
      },
      adjustMargins: function adjustMargins(a, b) {
        var d = this.chart,
            c = this.options,
            h = this.getAlignment();
        h && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (f, e) {
          f.test(h) && !A(a[e]) && (d[y[e]] = Math.max(d[y[e]], d.legend[(e + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][e] * c[e % 2 ? "x" : "y"] + x(c.margin, 12) + b[e] + (d.titleOffset[e] || 0)));
        });
      },
      proximatePositions: function proximatePositions() {
        var a = this.chart,
            b = [],
            f = "left" === this.options.align;
        this.allItems.forEach(function (d) {
          var e = f;

          if (d.yAxis && d.points) {
            d.xAxis.options.reversed && (e = !e);
            var g = c.find(e ? d.points : d.points.slice(0).reverse(), function (a) {
              return D(a.plotY);
            });
            e = d.legendGroup.getBBox().height;
            var m = d.yAxis.top - a.plotTop;
            d.visible ? (g = g ? g.plotY : d.yAxis.height, g += m - .3 * e) : g = m + d.yAxis.height;
            b.push({
              target: g,
              size: e,
              item: d
            });
          }
        }, this);
        c.distribute(b, a.plotHeight);
        b.forEach(function (b) {
          b.item._legendItemPos[1] = a.plotTop - a.spacing[0] + b.pos;
        });
      },
      render: function render() {
        var a = this.chart,
            b = a.renderer,
            f = this.group,
            e,
            h = this.box,
            g = this.options,
            m = this.padding;
        this.itemX = m;
        this.itemY = this.initialItemY;
        this.lastItemY = this.offsetWidth = 0;
        this.widthOption = c.relativeLength(g.width, a.spacingBox.width - m);
        var q = a.spacingBox.width - 2 * m - g.x;
        -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (q /= 2);
        this.maxLegendWidth = this.widthOption || q;
        f || (this.group = f = b.g("legend").attr({
          zIndex: 7
        }).add(), this.contentGroup = b.g().attr({
          zIndex: 1
        }).add(f), this.scrollGroup = b.g().add(this.contentGroup));
        this.renderTitle();
        q = this.getAllItems();
        p(q, function (a, b) {
          return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
        });
        g.reversed && q.reverse();
        this.allItems = q;
        this.display = e = !!q.length;
        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
        q.forEach(this.renderItem, this);
        q.forEach(this.layoutItem, this);
        q = (this.widthOption || this.offsetWidth) + m;
        var v = this.lastItemY + this.lastLineHeight + this.titleHeight;
        v = this.handleOverflow(v);
        v += m;
        h || (this.box = h = b.rect().addClass("highcharts-legend-box").attr({
          r: g.borderRadius
        }).add(f), h.isNew = !0);
        a.styledMode || h.attr({
          stroke: g.borderColor,
          "stroke-width": g.borderWidth || 0,
          fill: g.backgroundColor || "none"
        }).shadow(g.shadow);
        0 < q && 0 < v && (h[h.isNew ? "attr" : "animate"](h.crisp.call({}, {
          x: 0,
          y: 0,
          width: q,
          height: v
        }, h.strokeWidth())), h.isNew = !1);
        h[e ? "show" : "hide"]();
        a.styledMode && "none" === f.getStyle("display") && (q = v = 0);
        this.legendWidth = q;
        this.legendHeight = v;
        e && (b = a.spacingBox, h = b.y, /(lth|ct|rth)/.test(this.getAlignment()) && 0 < a.titleOffset[0] ? h += a.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < a.titleOffset[2] && (h -= a.titleOffset[2]), h !== b.y && (b = C(b, {
          y: h
        })), f.align(C(g, {
          width: q,
          height: v,
          verticalAlign: this.proximate ? "top" : g.verticalAlign
        }), !0, b));
        this.proximate || this.positionItems();
        L(this, "afterRender");
      },
      handleOverflow: function handleOverflow(a) {
        var b = this,
            c = this.chart,
            e = c.renderer,
            h = this.options,
            g = h.y,
            m = this.padding;
        g = c.spacingBox.height + ("top" === h.verticalAlign ? -g : g) - m;

        var q = h.maxHeight,
            v,
            k = this.clipRect,
            t = h.navigation,
            B = x(t.animation, !0),
            I = t.arrowSize || 12,
            w = this.nav,
            l = this.pages,
            p,
            K = this.allItems,
            n = function n(a) {
          "number" === typeof a ? k.attr({
            height: a
          }) : k && (b.clipRect = k.destroy(), b.contentGroup.clip());
          b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + m + "px,9999px," + (m + a) + "px,0)" : "auto");
        },
            u = function u(a) {
          b[a] = e.circle(0, 0, 1.3 * I).translate(I / 2, I / 2).add(w);
          c.styledMode || b[a].attr("fill", "rgba(0,0,0,0.0001)");
          return b[a];
        };

        "horizontal" !== h.layout || "middle" === h.verticalAlign || h.floating || (g /= 2);
        q && (g = Math.min(g, q));
        l.length = 0;
        a > g && !1 !== t.enabled ? (this.clipHeight = v = Math.max(g - 20 - this.titleHeight - m, 0), this.currentPage = x(this.currentPage, 1), this.fullHeight = a, K.forEach(function (a, b) {
          var d = a._legendItemPos[1],
              c = Math.round(a.legendItem.getBBox().height),
              f = l.length;
          if (!f || d - l[f - 1] > v && (p || d) !== l[f - 1]) l.push(p || d), f++;
          a.pageIx = f - 1;
          p && (K[b - 1].pageIx = f - 1);
          b === K.length - 1 && d + c - l[f - 1] > v && d !== p && (l.push(d), a.pageIx = f);
          d !== p && (p = d);
        }), k || (k = b.clipRect = e.clipRect(0, m, 9999, 0), b.contentGroup.clip(k)), n(v), w || (this.nav = w = e.g().attr({
          zIndex: 1
        }).add(this.group), this.up = e.symbol("triangle", 0, 0, I, I).add(w), u("upTracker").on("click", function () {
          b.scroll(-1, B);
        }), this.pager = e.text("", 15, 10).addClass("highcharts-legend-navigation"), c.styledMode || this.pager.css(t.style), this.pager.add(w), this.down = e.symbol("triangle-down", 0, 0, I, I).add(w), u("downTracker").on("click", function () {
          b.scroll(1, B);
        })), b.scroll(0), a = g) : w && (n(), this.nav = w.destroy(), this.scrollGroup.attr({
          translateY: 1
        }), this.clipHeight = 0);
        return a;
      },
      scroll: function scroll(a, b) {
        var d = this.pages,
            c = d.length,
            h = this.currentPage + a;
        a = this.clipHeight;
        var g = this.options.navigation,
            p = this.pager,
            q = this.padding;
        h > c && (h = c);
        0 < h && (void 0 !== b && m(b, this.chart), this.nav.attr({
          translateX: q,
          translateY: a + this.padding + 7 + this.titleHeight,
          visibility: "visible"
        }), [this.up, this.upTracker].forEach(function (a) {
          a.attr({
            "class": 1 === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }), p.attr({
          text: h + "/" + c
        }), [this.down, this.downTracker].forEach(function (a) {
          a.attr({
            x: 18 + this.pager.getBBox().width,
            "class": h === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }, this), this.chart.styledMode || (this.up.attr({
          fill: 1 === h ? g.inactiveColor : g.activeColor
        }), this.upTracker.css({
          cursor: 1 === h ? "default" : "pointer"
        }), this.down.attr({
          fill: h === c ? g.inactiveColor : g.activeColor
        }), this.downTracker.css({
          cursor: h === c ? "default" : "pointer"
        })), this.scrollOffset = -d[h - 1] + this.initialItemY, this.scrollGroup.animate({
          translateY: this.scrollOffset
        }), this.currentPage = h, this.positionCheckboxes());
      }
    };
    c.LegendSymbolMixin = {
      drawRectangle: function drawRectangle(a, b) {
        var d = a.symbolHeight,
            c = a.options.squareSymbol;
        b.legendSymbol = this.chart.renderer.rect(c ? (a.symbolWidth - d) / 2 : 0, a.baseline - d + 1, c ? d : a.symbolWidth, d, x(a.options.symbolRadius, d / 2)).addClass("highcharts-point").attr({
          zIndex: 3
        }).add(b.legendGroup);
      },
      drawLineMarker: function drawLineMarker(a) {
        var b = this.options,
            c = b.marker,
            e = a.symbolWidth,
            h = a.symbolHeight,
            g = h / 2,
            m = this.chart.renderer,
            q = this.legendGroup;
        a = a.baseline - Math.round(.3 * a.fontMetrics.b);
        var v = {};
        this.chart.styledMode || (v = {
          "stroke-width": b.lineWidth || 0
        }, b.dashStyle && (v.dashstyle = b.dashStyle));
        this.legendLine = m.path(["M", 0, a, "L", e, a]).addClass("highcharts-graph").attr(v).add(q);
        c && !1 !== c.enabled && e && (b = Math.min(x(c.radius, g), g), 0 === this.symbol.indexOf("url") && (c = C(c, {
          width: h,
          height: h
        }), b = 0), this.legendSymbol = c = m.symbol(this.symbol, e / 2 - b, a - b, 2 * b, 2 * b, c).addClass("highcharts-point").add(q), c.isMarker = !0);
      }
    };
    (/Trident\/7\.0/.test(g.navigator && g.navigator.userAgent) || n) && b(c.Legend.prototype, "positionItem", function (a, b) {
      var d = this,
          c = function c() {
        b._legendItemPos && a.call(d, b);
      };

      c();
      d.bubbleLegend || setTimeout(c);
    });
  });
  N(H, "parts/Chart.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.erase,
        z = n.isArray,
        u = n.isNumber,
        L = n.isObject,
        y = n.isString,
        C = n.objectEach,
        x = n.pInt,
        m = n.splat,
        p = c.addEvent,
        g = c.animate,
        b = c.animObject,
        a = c.doc,
        d = c.Axis,
        f = c.createElement,
        e = c.defaultOptions,
        h = c.discardElement,
        r = c.charts,
        E = c.css,
        q = c.extend,
        v = c.find,
        k = c.fireEvent,
        t = c.Legend,
        B = c.marginNames,
        I = c.merge,
        w = c.Pointer,
        l = c.pick,
        J = c.removeEvent,
        K = c.seriesTypes,
        T = c.syncTimeout,
        R = c.win,
        S = c.Chart = function () {
      this.getArgs.apply(this, arguments);
    };

    c.chart = function (a, b, d) {
      return new S(a, b, d);
    };

    q(S.prototype, {
      callbacks: [],
      getArgs: function getArgs() {
        var a = [].slice.call(arguments);
        if (y(a[0]) || a[0].nodeName) this.renderTo = a.shift();
        this.init(a[0], a[1]);
      },
      init: function init(a, b) {
        var d,
            f = a.series,
            l = a.plotOptions || {};
        k(this, "init", {
          args: arguments
        }, function () {
          a.series = null;
          d = I(e, a);
          C(d.plotOptions, function (a, b) {
            L(a) && (a.tooltip = l[b] && I(l[b].tooltip) || void 0);
          });
          d.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
          d.series = a.series = f;
          this.userOptions = a;
          var t = d.chart,
              B = t.events;
          this.margin = [];
          this.spacing = [];
          this.bounds = {
            h: {},
            v: {}
          };
          this.labelCollectors = [];
          this.callback = b;
          this.isResizing = 0;
          this.options = d;
          this.axes = [];
          this.series = [];
          this.time = a.time && Object.keys(a.time).length ? new c.Time(a.time) : c.time;
          this.styledMode = t.styledMode;
          this.hasCartesianSeries = t.showAxes;
          var h = this;
          h.index = r.length;
          r.push(h);
          c.chartCount++;
          B && C(B, function (a, b) {
            c.isFunction(a) && p(h, b, a);
          });
          h.xAxis = [];
          h.yAxis = [];
          h.pointCount = h.colorCounter = h.symbolCounter = 0;
          k(h, "afterInit");
          h.firstRender();
        });
      },
      initSeries: function initSeries(a) {
        var b = this.options.chart;
        (b = K[a.type || b.type || b.defaultSeriesType]) || c.error(17, !0, this);
        b = new b();
        b.init(this, a);
        return b;
      },
      orderSeries: function orderSeries(a) {
        var b = this.series;

        for (a = a || 0; a < b.length; a++) {
          b[a] && (b[a].index = a, b[a].name = b[a].getName());
        }
      },
      isInsidePlot: function isInsidePlot(a, b, d) {
        var c = d ? b : a;
        a = d ? a : b;
        return 0 <= c && c <= this.plotWidth && 0 <= a && a <= this.plotHeight;
      },
      redraw: function redraw(a) {
        k(this, "beforeRedraw");
        var b = this.axes,
            d = this.series,
            f = this.pointer,
            e = this.legend,
            l = this.userOptions.legend,
            t = this.isDirtyLegend,
            h = this.hasCartesianSeries,
            B = this.isDirtyBox,
            w = this.renderer,
            g = w.isHidden(),
            v = [];
        this.setResponsive && this.setResponsive(!1);
        c.setAnimation(a, this);
        g && this.temporaryDisplay();
        this.layOutTitles();

        for (a = d.length; a--;) {
          var m = d[a];

          if (m.options.stacking) {
            var I = !0;

            if (m.isDirty) {
              var p = !0;
              break;
            }
          }
        }

        if (p) for (a = d.length; a--;) {
          m = d[a], m.options.stacking && (m.isDirty = !0);
        }
        d.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? (a.updateTotals && a.updateTotals(), t = !0) : l && (l.labelFormatter || l.labelFormat) && (t = !0));
          a.isDirtyData && k(a, "updatedData");
        });
        t && e && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
        I && this.getStacks();
        h && b.forEach(function (a) {
          a.updateNames();
          a.setScale();
        });
        this.getMargins();
        h && (b.forEach(function (a) {
          a.isDirty && (B = !0);
        }), b.forEach(function (a) {
          var b = a.min + "," + a.max;
          a.extKey !== b && (a.extKey = b, v.push(function () {
            k(a, "afterSetExtremes", q(a.eventArgs, a.getExtremes()));
            delete a.eventArgs;
          }));
          (B || I) && a.redraw();
        }));
        B && this.drawChartBox();
        k(this, "predraw");
        d.forEach(function (a) {
          (B || a.isDirty) && a.visible && a.redraw();
          a.isDirtyData = !1;
        });
        f && f.reset(!0);
        w.draw();
        k(this, "redraw");
        k(this, "render");
        g && this.temporaryDisplay(!0);
        v.forEach(function (a) {
          a.call();
        });
      },
      get: function get(a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }

        var d = this.series,
            c;
        var f = v(this.axes, b) || v(this.series, b);

        for (c = 0; !f && c < d.length; c++) {
          f = v(d[c].points || [], b);
        }

        return f;
      },
      getAxes: function getAxes() {
        var a = this,
            b = this.options,
            c = b.xAxis = m(b.xAxis || {});
        b = b.yAxis = m(b.yAxis || {});
        k(this, "getAxes");
        c.forEach(function (a, b) {
          a.index = b;
          a.isX = !0;
        });
        b.forEach(function (a, b) {
          a.index = b;
        });
        c.concat(b).forEach(function (b) {
          new d(a, b);
        });
        k(this, "afterGetAxes");
      },
      getSelectedPoints: function getSelectedPoints() {
        var a = [];
        this.series.forEach(function (b) {
          a = a.concat((b[b.hasGroupedData ? "points" : "data"] || []).filter(function (a) {
            return l(a.selectedStaging, a.selected);
          }));
        });
        return a;
      },
      getSelectedSeries: function getSelectedSeries() {
        return this.series.filter(function (a) {
          return a.selected;
        });
      },
      setTitle: function setTitle(a, b, d) {
        this.applyDescription("title", a);
        this.applyDescription("subtitle", b);
        this.applyDescription("caption", void 0);
        this.layOutTitles(d);
      },
      applyDescription: function applyDescription(a, b) {
        var d = this,
            c = "title" === a ? {
          color: "#333333",
          fontSize: this.options.isStock ? "16px" : "18px"
        } : {
          color: "#666666"
        };
        c = this.options[a] = I(!this.styledMode && {
          style: c
        }, this.options[a], b);
        var f = this[a];
        f && b && (this[a] = f = f.destroy());
        c && !f && (f = this.renderer.text(c.text, 0, 0, c.useHTML).attr({
          align: c.align,
          "class": "highcharts-" + a,
          zIndex: c.zIndex || 4
        }).add(), f.update = function (b) {
          d[{
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }[a]](b);
        }, this.styledMode || f.css(c.style), this[a] = f);
      },
      layOutTitles: function layOutTitles(a) {
        var b = [0, 0, 0],
            d = this.renderer,
            c = this.spacingBox;
        ["title", "subtitle", "caption"].forEach(function (a) {
          var f = this[a],
              e = this.options[a],
              k = e.verticalAlign || "top";
          a = "title" === a ? -3 : "top" === k ? b[0] + 2 : 0;

          if (f) {
            if (!this.styledMode) var l = e.style.fontSize;
            l = d.fontMetrics(l, f).b;
            f.css({
              width: (e.width || c.width + (e.widthAdjust || 0)) + "px"
            });
            var t = f.getBBox(e.useHTML).height;
            f.align(q({
              y: "bottom" === k ? l : a + l,
              height: t
            }, e), !1, "spacingBox");
            e.floating || ("top" === k ? b[0] = Math.ceil(b[0] + t) : "bottom" === k && (b[2] = Math.ceil(b[2] + t)));
          }
        }, this);
        b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin);
        b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin);
        var f = !this.titleOffset || this.titleOffset.join(",") !== b.join(",");
        this.titleOffset = b;
        !this.isDirtyBox && f && (this.isDirtyBox = this.isDirtyLegend = f, this.hasRendered && l(a, !0) && this.isDirtyBox && this.redraw());
      },
      getChartSize: function getChartSize() {
        var a = this.options.chart,
            b = a.width;
        a = a.height;
        var d = this.renderTo;
        D(b) || (this.containerWidth = c.getStyle(d, "width"));
        D(a) || (this.containerHeight = c.getStyle(d, "height"));
        this.chartWidth = Math.max(0, b || this.containerWidth || 600);
        this.chartHeight = Math.max(0, c.relativeLength(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      },
      temporaryDisplay: function temporaryDisplay(b) {
        var d = this.renderTo;
        if (b) for (; d && d.style;) {
          d.hcOrigStyle && (c.css(d, d.hcOrigStyle), delete d.hcOrigStyle), d.hcOrigDetached && (a.body.removeChild(d), d.hcOrigDetached = !1), d = d.parentNode;
        } else for (; d && d.style;) {
          a.body.contains(d) || d.parentNode || (d.hcOrigDetached = !0, a.body.appendChild(d));
          if ("none" === c.getStyle(d, "display", !1) || d.hcOricDetached) d.hcOrigStyle = {
            display: d.style.display,
            height: d.style.height,
            overflow: d.style.overflow
          }, b = {
            display: "block",
            overflow: "hidden"
          }, d !== this.renderTo && (b.height = 0), c.css(d, b), d.offsetWidth || d.style.setProperty("display", "block", "important");
          d = d.parentNode;
          if (d === a.body) break;
        }
      },
      setClassName: function setClassName(a) {
        this.container.className = "highcharts-container " + (a || "");
      },
      getContainer: function getContainer() {
        var b = this.options,
            d = b.chart;
        var e = this.renderTo;
        var l = c.uniqueKey(),
            t,
            h;
        e || (this.renderTo = e = d.renderTo);
        y(e) && (this.renderTo = e = a.getElementById(e));
        e || c.error(13, !0, this);
        var B = x(A(e, "data-highcharts-chart"));
        u(B) && r[B] && r[B].hasRendered && r[B].destroy();
        A(e, "data-highcharts-chart", this.index);
        e.innerHTML = "";
        d.skipClone || e.offsetWidth || this.temporaryDisplay();
        this.getChartSize();
        B = this.chartWidth;
        var w = this.chartHeight;
        E(e, {
          overflow: "hidden"
        });
        this.styledMode || (t = q({
          position: "relative",
          overflow: "hidden",
          width: B + "px",
          height: w + "px",
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
        }, d.style));
        this.container = e = f("div", {
          id: l
        }, t, e);
        this._cursor = e.style.cursor;
        this.renderer = new (c[d.renderer] || c.Renderer)(e, B, w, null, d.forExport, b.exporting && b.exporting.allowHTML, this.styledMode);
        this.setClassName(d.className);
        if (this.styledMode) for (h in b.defs) {
          this.renderer.definition(b.defs[h]);
        } else this.renderer.setStyle(d.style);
        this.renderer.chartIndex = this.index;
        k(this, "afterGetContainer");
      },
      getMargins: function getMargins(a) {
        var b = this.spacing,
            d = this.margin,
            c = this.titleOffset;
        this.resetMargins();
        c[0] && !D(d[0]) && (this.plotTop = Math.max(this.plotTop, c[0] + b[0]));
        c[2] && !D(d[2]) && (this.marginBottom = Math.max(this.marginBottom, c[2] + b[2]));
        this.legend && this.legend.display && this.legend.adjustMargins(d, b);
        k(this, "getMargins");
        a || this.getAxisMargins();
      },
      getAxisMargins: function getAxisMargins() {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            d = a.colorAxis,
            c = a.margin,
            f = function f(a) {
          a.forEach(function (a) {
            a.visible && a.getOffset();
          });
        };

        a.hasCartesianSeries ? f(a.axes) : d && d.length && f(d);
        B.forEach(function (d, f) {
          D(c[f]) || (a[d] += b[f]);
        });
        a.setChartSize();
      },
      reflow: function reflow(b) {
        var d = this,
            f = d.options.chart,
            e = d.renderTo,
            k = D(f.width) && D(f.height),
            l = f.width || c.getStyle(e, "width");
        f = f.height || c.getStyle(e, "height");
        e = b ? b.target : R;

        if (!k && !d.isPrinting && l && f && (e === R || e === a)) {
          if (l !== d.containerWidth || f !== d.containerHeight) c.clearTimeout(d.reflowTimeout), d.reflowTimeout = T(function () {
            d.container && d.setSize(void 0, void 0, !1);
          }, b ? 100 : 0);
          d.containerWidth = l;
          d.containerHeight = f;
        }
      },
      setReflow: function setReflow(a) {
        var b = this;
        !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = p(R, "resize", function (a) {
          b.options && b.reflow(a);
        }), p(this, "destroy", this.unbindReflow));
      },
      setSize: function setSize(a, d, f) {
        var e = this,
            l = e.renderer;
        e.isResizing += 1;
        c.setAnimation(f, e);
        e.oldChartHeight = e.chartHeight;
        e.oldChartWidth = e.chartWidth;
        void 0 !== a && (e.options.chart.width = a);
        void 0 !== d && (e.options.chart.height = d);
        e.getChartSize();

        if (!e.styledMode) {
          var t = l.globalAnimation;
          (t ? g : E)(e.container, {
            width: e.chartWidth + "px",
            height: e.chartHeight + "px"
          }, t);
        }

        e.setChartSize(!0);
        l.setSize(e.chartWidth, e.chartHeight, f);
        e.axes.forEach(function (a) {
          a.isDirty = !0;
          a.setScale();
        });
        e.isDirtyLegend = !0;
        e.isDirtyBox = !0;
        e.layOutTitles();
        e.getMargins();
        e.redraw(f);
        e.oldChartHeight = null;
        k(e, "resize");
        T(function () {
          e && k(e, "endResize", null, function () {
            --e.isResizing;
          });
        }, b(t).duration);
      },
      setChartSize: function setChartSize(a) {
        var b = this.inverted,
            d = this.renderer,
            c = this.chartWidth,
            f = this.chartHeight,
            e = this.options.chart,
            l = this.spacing,
            t = this.clipOffset,
            B,
            h,
            w,
            g;
        this.plotLeft = B = Math.round(this.plotLeft);
        this.plotTop = h = Math.round(this.plotTop);
        this.plotWidth = w = Math.max(0, Math.round(c - B - this.marginRight));
        this.plotHeight = g = Math.max(0, Math.round(f - h - this.marginBottom));
        this.plotSizeX = b ? g : w;
        this.plotSizeY = b ? w : g;
        this.plotBorderWidth = e.plotBorderWidth || 0;
        this.spacingBox = d.spacingBox = {
          x: l[3],
          y: l[0],
          width: c - l[3] - l[1],
          height: f - l[0] - l[2]
        };
        this.plotBox = d.plotBox = {
          x: B,
          y: h,
          width: w,
          height: g
        };
        c = 2 * Math.floor(this.plotBorderWidth / 2);
        b = Math.ceil(Math.max(c, t[3]) / 2);
        d = Math.ceil(Math.max(c, t[0]) / 2);
        this.clipBox = {
          x: b,
          y: d,
          width: Math.floor(this.plotSizeX - Math.max(c, t[1]) / 2 - b),
          height: Math.max(0, Math.floor(this.plotSizeY - Math.max(c, t[2]) / 2 - d))
        };
        a || this.axes.forEach(function (a) {
          a.setAxisSize();
          a.setAxisTranslation();
        });
        k(this, "afterSetChartSize", {
          skipAxes: a
        });
      },
      resetMargins: function resetMargins() {
        k(this, "resetMargins");
        var a = this,
            b = a.options.chart;
        ["margin", "spacing"].forEach(function (d) {
          var c = b[d],
              f = L(c) ? c : [c, c, c, c];
          ["Top", "Right", "Bottom", "Left"].forEach(function (c, e) {
            a[d][e] = l(b[d + c], f[e]);
          });
        });
        B.forEach(function (b, d) {
          a[b] = l(a.margin[d], a.spacing[d]);
        });
        a.axisOffset = [0, 0, 0, 0];
        a.clipOffset = [0, 0, 0, 0];
      },
      drawChartBox: function drawChartBox() {
        var a = this.options.chart,
            b = this.renderer,
            d = this.chartWidth,
            c = this.chartHeight,
            f = this.chartBackground,
            e = this.plotBackground,
            l = this.plotBorder,
            t = this.styledMode,
            B = this.plotBGImage,
            h = a.backgroundColor,
            w = a.plotBackgroundColor,
            g = a.plotBackgroundImage,
            q,
            v = this.plotLeft,
            m = this.plotTop,
            I = this.plotWidth,
            p = this.plotHeight,
            r = this.plotBox,
            K = this.clipRect,
            x = this.clipBox,
            J = "animate";
        f || (this.chartBackground = f = b.rect().addClass("highcharts-background").add(), J = "attr");
        if (t) var n = q = f.strokeWidth();else {
          n = a.borderWidth || 0;
          q = n + (a.shadow ? 8 : 0);
          h = {
            fill: h || "none"
          };
          if (n || f["stroke-width"]) h.stroke = a.borderColor, h["stroke-width"] = n;
          f.attr(h).shadow(a.shadow);
        }
        f[J]({
          x: q / 2,
          y: q / 2,
          width: d - q - n % 2,
          height: c - q - n % 2,
          r: a.borderRadius
        });
        J = "animate";
        e || (J = "attr", this.plotBackground = e = b.rect().addClass("highcharts-plot-background").add());
        e[J](r);
        t || (e.attr({
          fill: w || "none"
        }).shadow(a.plotShadow), g && (B ? B.animate(r) : this.plotBGImage = b.image(g, v, m, I, p).add()));
        K ? K.animate({
          width: x.width,
          height: x.height
        }) : this.clipRect = b.clipRect(x);
        J = "animate";
        l || (J = "attr", this.plotBorder = l = b.rect().addClass("highcharts-plot-border").attr({
          zIndex: 1
        }).add());
        t || l.attr({
          stroke: a.plotBorderColor,
          "stroke-width": a.plotBorderWidth || 0,
          fill: "none"
        });
        l[J](l.crisp({
          x: v,
          y: m,
          width: I,
          height: p
        }, -l.strokeWidth()));
        this.isDirtyBox = !1;
        k(this, "afterDrawChartBox");
      },
      propFromSeries: function propFromSeries() {
        var a = this,
            b = a.options.chart,
            d,
            c = a.options.series,
            f,
            e;
        ["inverted", "angular", "polar"].forEach(function (k) {
          d = K[b.type || b.defaultSeriesType];
          e = b[k] || d && d.prototype[k];

          for (f = c && c.length; !e && f--;) {
            (d = K[c[f].type]) && d.prototype[k] && (e = !0);
          }

          a[k] = e;
        });
      },
      linkSeries: function linkSeries() {
        var a = this,
            b = a.series;
        b.forEach(function (a) {
          a.linkedSeries.length = 0;
        });
        b.forEach(function (b) {
          var d = b.options.linkedTo;
          y(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && d.linkedParent !== b && (d.linkedSeries.push(b), b.linkedParent = d, b.visible = l(b.options.visible, d.options.visible, b.visible));
        });
        k(this, "afterLinkSeries");
      },
      renderSeries: function renderSeries() {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      },
      renderLabels: function renderLabels() {
        var a = this,
            b = a.options.labels;
        b.items && b.items.forEach(function (d) {
          var c = q(b.style, d.style),
              f = x(c.left) + a.plotLeft,
              e = x(c.top) + a.plotTop + 12;
          delete c.left;
          delete c.top;
          a.renderer.text(d.html, f, e).attr({
            zIndex: 2
          }).css(c).add();
        });
      },
      render: function render() {
        var a = this.axes,
            b = this.colorAxis,
            d = this.renderer,
            c = this.options,
            f = 0,
            e = function e(a) {
          a.forEach(function (a) {
            a.visible && a.render();
          });
        };

        this.setTitle();
        this.legend = new t(this, c.legend);
        this.getStacks && this.getStacks();
        this.getMargins(!0);
        this.setChartSize();
        c = this.plotWidth;
        a.some(function (a) {
          if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return f = 21, !0;
        });
        var k = this.plotHeight = Math.max(this.plotHeight - f, 0);
        a.forEach(function (a) {
          a.setScale();
        });
        this.getAxisMargins();
        var l = 1.1 < c / this.plotWidth;
        var h = 1.05 < k / this.plotHeight;
        if (l || h) a.forEach(function (a) {
          (a.horiz && l || !a.horiz && h) && a.setTickInterval(!0);
        }), this.getMargins();
        this.drawChartBox();
        this.hasCartesianSeries ? e(a) : b && b.length && e(b);
        this.seriesGroup || (this.seriesGroup = d.g("series-group").attr({
          zIndex: 3
        }).add());
        this.renderSeries();
        this.renderLabels();
        this.addCredits();
        this.setResponsive && this.setResponsive();
        this.updateContainerScaling();
        this.hasRendered = !0;
      },
      addCredits: function addCredits(a) {
        var b = this;
        a = I(!0, this.options.credits, a);
        a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          a.href && (R.location.href = a.href);
        }).attr({
          align: a.position.align,
          zIndex: 8
        }), b.styledMode || this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (a) {
          b.credits = b.credits.destroy();
          b.addCredits(a);
        });
      },
      updateContainerScaling: function updateContainerScaling() {
        var a = this.container;

        if (a.offsetWidth && a.offsetHeight && a.getBoundingClientRect) {
          var b = a.getBoundingClientRect(),
              d = b.width / a.offsetWidth;
          a = b.height / a.offsetHeight;
          1 !== d || 1 !== a ? this.containerScaling = {
            scaleX: d,
            scaleY: a
          } : delete this.containerScaling;
        }
      },
      destroy: function destroy() {
        var a = this,
            b = a.axes,
            d = a.series,
            f = a.container,
            e,
            l = f && f.parentNode;
        k(a, "destroy");
        a.renderer.forExport ? F(r, a) : r[a.index] = void 0;
        c.chartCount--;
        a.renderTo.removeAttribute("data-highcharts-chart");
        J(a);

        for (e = b.length; e--;) {
          b[e] = b[e].destroy();
        }

        this.scroller && this.scroller.destroy && this.scroller.destroy();

        for (e = d.length; e--;) {
          d[e] = d[e].destroy();
        }

        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) {
          var d = a[b];
          d && d.destroy && (a[b] = d.destroy());
        });
        f && (f.innerHTML = "", J(f), l && h(f));
        C(a, function (b, d) {
          delete a[d];
        });
      },
      firstRender: function firstRender() {
        var a = this,
            b = a.options;

        if (!a.isReadyToRender || a.isReadyToRender()) {
          a.getContainer();
          a.resetMargins();
          a.setChartSize();
          a.propFromSeries();
          a.getAxes();
          (z(b.series) ? b.series : []).forEach(function (b) {
            a.initSeries(b);
          });
          a.linkSeries();
          k(a, "beforeRender");
          w && (a.pointer = new w(a, b));
          a.render();
          if (!a.renderer.imgCount && a.onload) a.onload();
          a.temporaryDisplay(!0);
        }
      },
      onload: function onload() {
        this.callbacks.concat([this.callback]).forEach(function (a) {
          a && void 0 !== this.index && a.apply(this, [this]);
        }, this);
        k(this, "load");
        k(this, "render");
        D(this.index) && this.setReflow(this.options.chart.reflow);
        this.onload = null;
      }
    });
  });
  N(H, "parts/ScrollablePlotArea.js", [H["parts/Globals.js"]], function (c) {
    var n = c.addEvent,
        A = c.Chart;
    "";
    n(A, "afterSetChartSize", function (n) {
      var A = this.options.chart.scrollablePlotArea,
          z = A && A.minWidth;
      A = A && A.minHeight;

      if (!this.renderer.forExport) {
        if (z) {
          if (this.scrollablePixelsX = z = Math.max(0, z - this.chartWidth)) {
            this.plotWidth += z;
            this.inverted ? (this.clipBox.height += z, this.plotBox.height += z) : (this.clipBox.width += z, this.plotBox.width += z);
            var u = {
              1: {
                name: "right",
                value: z
              }
            };
          }
        } else A && (this.scrollablePixelsY = z = Math.max(0, A - this.chartHeight)) && (this.plotHeight += z, this.inverted ? (this.clipBox.width += z, this.plotBox.width += z) : (this.clipBox.height += z, this.plotBox.height += z), u = {
          2: {
            name: "bottom",
            value: z
          }
        });

        u && !n.skipAxes && this.axes.forEach(function (n) {
          u[n.side] ? n.getPlotLinePath = function () {
            var y = u[n.side].name,
                z = this[y];
            this[y] = z - u[n.side].value;
            var x = c.Axis.prototype.getPlotLinePath.apply(this, arguments);
            this[y] = z;
            return x;
          } : (n.setAxisSize(), n.setAxisTranslation());
        });
      }
    });
    n(A, "render", function () {
      this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });

    A.prototype.setUpScrolling = function () {
      var n = {
        WebkitOverflowScrolling: "touch",
        overflowX: "hidden",
        overflowY: "hidden"
      };
      this.scrollablePixelsX && (n.overflowX = "auto");
      this.scrollablePixelsY && (n.overflowY = "auto");
      this.scrollingContainer = c.createElement("div", {
        className: "highcharts-scrolling"
      }, n, this.renderTo);
      this.innerContainer = c.createElement("div", {
        className: "highcharts-inner-container"
      }, null, this.scrollingContainer);
      this.innerContainer.appendChild(this.container);
      this.setUpScrolling = null;
    };

    A.prototype.moveFixedElements = function () {
      var c = this.container,
          n = this.fixedRenderer,
          z = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-reset-zoom .highcharts-subtitle .highcharts-title .highcharts-legend-checkbox".split(" "),
          u;
      this.scrollablePixelsX && !this.inverted ? u = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? u = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? u = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (u = ".highcharts-yaxis");
      z.push(u, u + "-labels");
      z.forEach(function (u) {
        [].forEach.call(c.querySelectorAll(u), function (c) {
          (c.namespaceURI === n.SVG_NS ? n.box : n.box.parentNode).appendChild(c);
          c.style.pointerEvents = "auto";
        });
      });
    };

    A.prototype.applyFixed = function () {
      var A,
          F = !this.fixedDiv,
          z = this.options.chart.scrollablePlotArea;
      F ? (this.fixedDiv = c.createElement("div", {
        className: "highcharts-fixed"
      }, {
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2
      }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = A = new c.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight), this.scrollableMask = A.path().attr({
        fill: c.color(this.options.chart.backgroundColor || "#fff").setOpacity(c.pick(z.opacity, .85)).get(),
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), n(this, "afterShowResetZoom", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
      A = this.chartWidth + (this.scrollablePixelsX || 0);
      var u = this.chartHeight + (this.scrollablePixelsY || 0);
      c.stop(this.container);
      this.container.style.width = A + "px";
      this.container.style.height = u + "px";
      this.renderer.boxWrapper.attr({
        width: A,
        height: u,
        viewBox: [0, 0, A, u].join(" ")
      });
      this.chartBackground.attr({
        width: A,
        height: u
      });
      this.scrollablePixelsY && (this.scrollingContainer.style.height = this.chartHeight + "px");
      F && (z.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * z.scrollPositionX), z.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * z.scrollPositionY));
      u = this.axisOffset;
      F = this.plotTop - u[0] - 1;
      z = this.plotLeft - u[3] - 1;
      A = this.plotTop + this.plotHeight + u[2] + 1;
      u = this.plotLeft + this.plotWidth + u[1] + 1;
      var L = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
          y = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
      F = this.scrollablePixelsX ? ["M", 0, F, "L", this.plotLeft - 1, F, "L", this.plotLeft - 1, A, "L", 0, A, "Z", "M", L, F, "L", this.chartWidth, F, "L", this.chartWidth, A, "L", L, A, "Z"] : this.scrollablePixelsY ? ["M", z, 0, "L", z, this.plotTop - 1, "L", u, this.plotTop - 1, "L", u, 0, "Z", "M", z, y, "L", z, this.chartHeight, "L", u, this.chartHeight, "L", u, y, "Z"] : ["M", 0, 0];
      "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
        d: F
      });
    };
  });
  N(H, "parts/Point.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.erase,
        F = n.isArray,
        z = n.isNumber,
        u = n.isObject,
        L,
        y = c.extend,
        C = c.fireEvent,
        x = c.format,
        m = c.pick,
        p = c.uniqueKey,
        g = c.removeEvent;

    c.Point = L = function L() {};

    c.Point.prototype = {
      init: function init(b, a, d) {
        this.series = b;
        this.applyOptions(a, d);
        this.id = A(this.id) ? this.id : p();
        this.resolveColor();
        b.chart.pointCount++;
        C(this, "afterInit");
        return this;
      },
      resolveColor: function resolveColor() {
        var b = this.series;
        var a = b.chart.options.chart.colorCount;
        var d = b.chart.styledMode;
        d || this.options.color || (this.color = b.color);
        b.options.colorByPoint ? (d || (a = b.options.colors || b.chart.options.colors, this.color = this.color || a[b.colorCounter], a = a.length), d = b.colorCounter, b.colorCounter++, b.colorCounter === a && (b.colorCounter = 0)) : d = b.colorIndex;
        this.colorIndex = m(this.colorIndex, d);
      },
      applyOptions: function applyOptions(b, a) {
        var d = this.series,
            c = d.options.pointValKey || d.pointValKey;
        b = L.prototype.optionsToObject.call(this, b);
        y(this, b);
        this.options = this.options ? y(this.options, b) : b;
        b.group && delete this.group;
        b.dataLabels && delete this.dataLabels;
        c && (this.y = this[c]);
        this.formatPrefix = (this.isNull = m(this.isValid && !this.isValid(), null === this.x || !z(this.y))) ? "null" : "point";
        this.selected && (this.state = "select");
        "name" in this && void 0 === a && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
        void 0 === this.x && d && (this.x = void 0 === a ? d.autoIncrement(this) : a);
        return this;
      },
      setNestedProperty: function setNestedProperty(b, a, d) {
        d.split(".").reduce(function (b, d, c, g) {
          b[d] = g.length - 1 === c ? a : u(b[d], !0) ? b[d] : {};
          return b[d];
        }, b);
        return b;
      },
      optionsToObject: function optionsToObject(b) {
        var a = {},
            d = this.series,
            f = d.options.keys,
            e = f || d.pointArrayMap || ["y"],
            h = e.length,
            g = 0,
            m = 0;
        if (z(b) || null === b) a[e[0]] = b;else if (F(b)) for (!f && b.length > h && (d = _typeof(b[0]), "string" === d ? a.name = b[0] : "number" === d && (a.x = b[0]), g++); m < h;) {
          f && void 0 === b[g] || (0 < e[m].indexOf(".") ? c.Point.prototype.setNestedProperty(a, b[g], e[m]) : a[e[m]] = b[g]), g++, m++;
        } else "object" === _typeof(b) && (a = b, b.dataLabels && (d._hasPointLabels = !0), b.marker && (d._hasPointMarkers = !0));
        return a;
      },
      getClassName: function getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      },
      getZone: function getZone() {
        var b = this.series,
            a = b.zones;
        b = b.zoneAxis || "y";
        var d = 0,
            c;

        for (c = a[d]; this[b] >= c.value;) {
          c = a[++d];
        }

        this.nonZonedColor || (this.nonZonedColor = this.color);
        this.color = c && c.color && !this.options.color ? c.color : this.nonZonedColor;
        return c;
      },
      destroy: function destroy() {
        var b = this.series.chart,
            a = b.hoverPoints,
            d;
        b.pointCount--;
        a && (this.setState(), D(a, this), a.length || (b.hoverPoints = null));
        if (this === b.hoverPoint) this.onMouseOut();
        if (this.graphic || this.dataLabel || this.dataLabels) g(this), this.destroyElements();
        this.legendItem && b.legend.destroyItem(this);

        for (d in this) {
          this[d] = null;
        }
      },
      destroyElements: function destroyElements(b) {
        var a = this,
            d = [],
            c;
        b = b || {
          graphic: 1,
          dataLabel: 1
        };
        b.graphic && d.push("graphic", "shadowGroup");
        b.dataLabel && d.push("dataLabel", "dataLabelUpper", "connector");

        for (c = d.length; c--;) {
          var e = d[c];
          a[e] && (a[e] = a[e].destroy());
        }

        ["dataLabel", "connector"].forEach(function (d) {
          var c = d + "s";
          b[d] && a[c] && (a[c].forEach(function (a) {
            a.element && a.destroy();
          }), delete a[c]);
        });
      },
      getLabelConfig: function getLabelConfig() {
        return {
          x: this.category,
          y: this.y,
          color: this.color,
          colorIndex: this.colorIndex,
          key: this.name || this.category,
          series: this.series,
          point: this,
          percentage: this.percentage,
          total: this.total || this.stackTotal
        };
      },
      tooltipFormatter: function tooltipFormatter(b) {
        var a = this.series,
            d = a.tooltipOptions,
            c = m(d.valueDecimals, ""),
            e = d.valuePrefix || "",
            h = d.valueSuffix || "";
        a.chart.styledMode && (b = a.chart.tooltip.styledModeFormat(b));
        (a.pointArrayMap || ["y"]).forEach(function (a) {
          a = "{point." + a;
          if (e || h) b = b.replace(RegExp(a + "}", "g"), e + a + "}" + h);
          b = b.replace(RegExp(a + "}", "g"), a + ":,." + c + "f}");
        });
        return x(b, {
          point: this,
          series: this.series
        }, a.chart.time);
      },
      firePointEvent: function firePointEvent(b, a, d) {
        var c = this,
            e = this.series.options;
        (e.point.events[b] || c.options && c.options.events && c.options.events[b]) && this.importEvents();
        "click" === b && e.allowPointSelect && (d = function d(a) {
          c.select && c.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });
        C(this, b, a, d);
      },
      visible: !0
    };
  });
  N(H, "parts/Series.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.erase,
        F = n.isArray,
        z = n.isNumber,
        u = n.isString,
        L = n.objectEach,
        y = n.splat,
        C = c.addEvent,
        x = c.animObject,
        m = c.arrayMax,
        p = c.arrayMin,
        g = c.correctFloat,
        b = c.defaultOptions,
        a = c.defaultPlotOptions,
        d = c.extend,
        f = c.fireEvent,
        e = c.merge,
        h = c.pick,
        r = c.removeEvent,
        E = c.SVGElement,
        q = c.syncTimeout,
        v = c.win;
    c.Series = c.seriesType("line", null, {
      lineWidth: 2,
      allowPointSelect: !1,
      showCheckbox: !1,
      animation: {
        duration: 1E3
      },
      events: {},
      marker: {
        lineWidth: 0,
        lineColor: "#ffffff",
        enabledThreshold: 2,
        radius: 4,
        states: {
          normal: {
            animation: !0
          },
          hover: {
            animation: {
              duration: 50
            },
            enabled: !0,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: {
            fillColor: "#cccccc",
            lineColor: "#000000",
            lineWidth: 2
          }
        }
      },
      point: {
        events: {}
      },
      dataLabels: {
        align: "center",
        formatter: function formatter() {
          return null === this.y ? "" : c.numberFormat(this.y, -1);
        },
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: !0,
      states: {
        normal: {
          animation: !0
        },
        hover: {
          animation: {
            duration: 50
          },
          lineWidthPlus: 1,
          marker: {},
          halo: {
            size: 10,
            opacity: .25
          }
        },
        select: {
          animation: {
            duration: 0
          }
        },
        inactive: {
          animation: {
            duration: 50
          },
          opacity: .2
        }
      },
      stickyTracking: !0,
      turboThreshold: 1E3,
      findNearestPointBy: "x"
    }, {
      axisTypes: ["xAxis", "yAxis"],
      coll: "series",
      colorCounter: 0,
      cropShoulder: 1,
      directTouch: !1,
      isCartesian: !0,
      parallelArrays: ["x", "y"],
      pointClass: c.Point,
      requireSorting: !0,
      sorted: !0,
      init: function init(a, b) {
        f(this, "init", {
          options: b
        });
        var e = this,
            k = a.series,
            t;
        this.eventOptions = this.eventOptions || {};
        e.chart = a;
        e.options = b = e.setOptions(b);
        e.linkedSeries = [];
        e.bindAxes();
        d(e, {
          name: b.name,
          state: "",
          visible: !1 !== b.visible,
          selected: !0 === b.selected
        });
        var l = b.events;
        L(l, function (a, b) {
          c.isFunction(a) && e.eventOptions[b] !== a && (c.isFunction(e.eventOptions[b]) && r(e, b, e.eventOptions[b]), e.eventOptions[b] = a, C(e, b, a));
        });
        if (l && l.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
        e.getColor();
        e.getSymbol();
        e.parallelArrays.forEach(function (a) {
          e[a + "Data"] || (e[a + "Data"] = []);
        });
        e.points || e.data || e.setData(b.data, !1);
        e.isCartesian && (a.hasCartesianSeries = !0);
        k.length && (t = k[k.length - 1]);
        e._i = h(t && t._i, -1) + 1;
        a.orderSeries(this.insert(k));
        f(this, "afterInit");
      },
      insert: function insert(a) {
        var b = this.options.index,
            d;

        if (z(b)) {
          for (d = a.length; d--;) {
            if (b >= h(a[d].options.index, a[d]._i)) {
              a.splice(d + 1, 0, this);
              break;
            }
          }

          -1 === d && a.unshift(this);
          d += 1;
        } else a.push(this);

        return h(d, a.length - 1);
      },
      bindAxes: function bindAxes() {
        var a = this,
            b = a.options,
            d = a.chart,
            e;
        f(this, "bindAxes", null, function () {
          (a.axisTypes || []).forEach(function (f) {
            d[f].forEach(function (d) {
              e = d.options;
              if (b[f] === e.index || void 0 !== b[f] && b[f] === e.id || void 0 === b[f] && 0 === e.index) a.insert(d.series), a[f] = d, d.isDirty = !0;
            });
            a[f] || a.optionalAxis === f || c.error(18, !0, d);
          });
        });
      },
      updateParallelArrays: function updateParallelArrays(a, b) {
        var d = a.series,
            c = arguments,
            f = z(b) ? function (c) {
          var f = "y" === c && d.toYData ? d.toYData(a) : a[c];
          d[c + "Data"][b] = f;
        } : function (a) {
          Array.prototype[b].apply(d[a + "Data"], Array.prototype.slice.call(c, 2));
        };
        d.parallelArrays.forEach(f);
      },
      hasData: function hasData() {
        return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && 0 < this.yData.length;
      },
      autoIncrement: function autoIncrement() {
        var a = this.options,
            b = this.xIncrement,
            d,
            c = a.pointIntervalUnit,
            f = this.chart.time;
        b = h(b, a.pointStart, 0);
        this.pointInterval = d = h(this.pointInterval, a.pointInterval, 1);
        c && (a = new f.Date(b), "day" === c ? f.set("Date", a, f.get("Date", a) + d) : "month" === c ? f.set("Month", a, f.get("Month", a) + d) : "year" === c && f.set("FullYear", a, f.get("FullYear", a) + d), d = a.getTime() - b);
        this.xIncrement = b + d;
        return b;
      },
      setOptions: function setOptions(a) {
        var d = this.chart,
            c = d.options,
            k = c.plotOptions,
            w = d.userOptions || {};
        a = e(a);
        d = d.styledMode;
        var l = {
          plotOptions: k,
          userOptions: a
        };
        f(this, "setOptions", l);
        var g = l.plotOptions[this.type],
            q = w.plotOptions || {};
        this.userOptions = l.userOptions;
        w = e(g, k.series, w.plotOptions && w.plotOptions[this.type], a);
        this.tooltipOptions = e(b.tooltip, b.plotOptions.series && b.plotOptions.series.tooltip, b.plotOptions[this.type].tooltip, c.tooltip.userOptions, k.series && k.series.tooltip, k[this.type].tooltip, a.tooltip);
        this.stickyTracking = h(a.stickyTracking, q[this.type] && q[this.type].stickyTracking, q.series && q.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : w.stickyTracking);
        null === g.marker && delete w.marker;
        this.zoneAxis = w.zoneAxis;
        c = this.zones = (w.zones || []).slice();
        !w.negativeColor && !w.negativeFillColor || w.zones || (k = {
          value: w[this.zoneAxis + "Threshold"] || w.threshold || 0,
          className: "highcharts-negative"
        }, d || (k.color = w.negativeColor, k.fillColor = w.negativeFillColor), c.push(k));
        c.length && A(c[c.length - 1].value) && c.push(d ? {} : {
          color: this.color,
          fillColor: this.fillColor
        });
        f(this, "afterSetOptions", {
          options: w
        });
        return w;
      },
      getName: function getName() {
        return h(this.options.name, "Series " + (this.index + 1));
      },
      getCyclic: function getCyclic(a, b, d) {
        var c = this.chart,
            f = this.userOptions,
            e = a + "Index",
            k = a + "Counter",
            t = d ? d.length : h(c.options.chart[a + "Count"], c[a + "Count"]);

        if (!b) {
          var B = h(f[e], f["_" + e]);
          A(B) || (c.series.length || (c[k] = 0), f["_" + e] = B = c[k] % t, c[k] += 1);
          d && (b = d[B]);
        }

        void 0 !== B && (this[e] = B);
        this[a] = b;
      },
      getColor: function getColor() {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || a[this.type].color, this.chart.options.colors);
      },
      getSymbol: function getSymbol() {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      },
      findPointIndex: function findPointIndex(a, b) {
        var d = a.id;
        a = a.x;
        var c = this.points,
            f;

        if (d) {
          var e = (d = this.chart.get(d)) && d.index;
          void 0 !== e && (f = !0);
        }

        void 0 === e && z(a) && (e = this.xData.indexOf(a, b));
        -1 !== e && void 0 !== e && this.cropped && (e = e >= this.cropStart ? e - this.cropStart : e);
        !f && c[e] && c[e].touched && (e = void 0);
        return e;
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawLineMarker,
      updateData: function updateData(a) {
        var b = this.options,
            d = this.points,
            c = [],
            f,
            e,
            k,
            h = this.requireSorting,
            g = a.length === d.length,
            q = !0;
        this.xIncrement = null;
        a.forEach(function (a, e) {
          var l = A(a) && this.pointClass.prototype.optionsToObject.call({
            series: this
          }, a) || {};
          var t = l.x;
          if (l.id || z(t)) if (t = this.findPointIndex(l, k), -1 === t || void 0 === t ? c.push(a) : d[t] && a !== b.data[t] ? (d[t].update(a, !1, null, !1), d[t].touched = !0, h && (k = t + 1)) : d[t] && (d[t].touched = !0), !g || e !== t || this.hasDerivedData) f = !0;
        }, this);
        if (f) for (a = d.length; a--;) {
          (e = d[a]) && !e.touched && e.remove(!1);
        } else g ? a.forEach(function (a, b) {
          d[b].update && a !== d[b].y && d[b].update(a, !1, null, !1);
        }) : q = !1;
        d.forEach(function (a) {
          a && (a.touched = !1);
        });
        if (!q) return !1;
        c.forEach(function (a) {
          this.addPoint(a, !1, null, null, !1);
        }, this);
        return !0;
      },
      setData: function setData(a, b, d, f) {
        var e = this,
            k = e.points,
            t = k && k.length || 0,
            g,
            q = e.options,
            v = e.chart,
            m = null,
            B = e.xAxis,
            p = q.turboThreshold,
            I = this.xData,
            r = this.yData,
            x = (g = e.pointArrayMap) && g.length,
            n = q.keys,
            y = 0,
            E = 1,
            A;
        a = a || [];
        g = a.length;
        b = h(b, !0);
        !1 !== f && g && t && !e.cropped && !e.hasGroupedData && e.visible && !e.isSeriesBoosting && (A = this.updateData(a));

        if (!A) {
          e.xIncrement = null;
          e.colorCounter = 0;
          this.parallelArrays.forEach(function (a) {
            e[a + "Data"].length = 0;
          });

          if (p && g > p) {
            for (d = 0; null === m && d < g;) {
              m = a[d], d++;
            }

            if (z(m)) for (d = 0; d < g; d++) {
              I[d] = this.autoIncrement(), r[d] = a[d];
            } else if (F(m)) {
              if (x) for (d = 0; d < g; d++) {
                m = a[d], I[d] = m[0], r[d] = m.slice(1, x + 1);
              } else for (n && (y = n.indexOf("x"), E = n.indexOf("y"), y = 0 <= y ? y : 0, E = 0 <= E ? E : 1), d = 0; d < g; d++) {
                m = a[d], I[d] = m[y], r[d] = m[E];
              }
            } else c.error(12, !1, v);
          } else for (d = 0; d < g; d++) {
            void 0 !== a[d] && (m = {
              series: e
            }, e.pointClass.prototype.applyOptions.apply(m, [a[d]]), e.updateParallelArrays(m, d));
          }

          r && u(r[0]) && c.error(14, !0, v);
          e.data = [];
          e.options.data = e.userOptions.data = a;

          for (d = t; d--;) {
            k[d] && k[d].destroy && k[d].destroy();
          }

          B && (B.minRange = B.userMinRange);
          e.isDirty = v.isDirtyBox = !0;
          e.isDirtyData = !!k;
          d = !1;
        }

        "point" === q.legendType && (this.processData(), this.generatePoints());
        b && v.redraw(d);
      },
      processData: function processData(a) {
        var b = this.xData,
            d = this.yData,
            f = b.length;
        var e = 0;
        var k = this.xAxis,
            h = this.options;
        var g = h.cropThreshold;
        var q = this.getExtremesFromAll || h.getExtremesFromAll,
            m = this.isCartesian;
        h = k && k.val2lin;
        var v = k && k.isLog,
            p = this.requireSorting;
        if (m && !this.isDirty && !k.isDirty && !this.yAxis.isDirty && !a) return !1;

        if (k) {
          a = k.getExtremes();
          var r = a.min;
          var x = a.max;
        }

        if (m && this.sorted && !q && (!g || f > g || this.forceCrop)) if (b[f - 1] < r || b[0] > x) b = [], d = [];else if (this.yData && (b[0] < r || b[f - 1] > x)) {
          e = this.cropData(this.xData, this.yData, r, x);
          b = e.xData;
          d = e.yData;
          e = e.start;
          var n = !0;
        }

        for (g = b.length || 1; --g;) {
          if (f = v ? h(b[g]) - h(b[g - 1]) : b[g] - b[g - 1], 0 < f && (void 0 === u || f < u)) var u = f;else 0 > f && p && (c.error(15, !1, this.chart), p = !1);
        }

        this.cropped = n;
        this.cropStart = e;
        this.processedXData = b;
        this.processedYData = d;
        this.closestPointRange = this.basePointRange = u;
      },
      cropData: function cropData(a, b, d, c, f) {
        var e = a.length,
            k = 0,
            t = e,
            g;
        f = h(f, this.cropShoulder);

        for (g = 0; g < e; g++) {
          if (a[g] >= d) {
            k = Math.max(0, g - f);
            break;
          }
        }

        for (d = g; d < e; d++) {
          if (a[d] > c) {
            t = d + f;
            break;
          }
        }

        return {
          xData: a.slice(k, t),
          yData: b.slice(k, t),
          start: k,
          end: t
        };
      },
      generatePoints: function generatePoints() {
        var a = this.options,
            b = a.data,
            c = this.data,
            e,
            h = this.processedXData,
            l = this.processedYData,
            g = this.pointClass,
            q = h.length,
            m = this.cropStart || 0,
            v = this.hasGroupedData;
        a = a.keys;
        var p = [],
            r;
        c || v || (c = [], c.length = b.length, c = this.data = c);
        a && v && (this.options.keys = !1);

        for (r = 0; r < q; r++) {
          var x = m + r;

          if (v) {
            var n = new g().init(this, [h[r]].concat(y(l[r])));
            n.dataGroup = this.groupMap[r];
            n.dataGroup.options && (n.options = n.dataGroup.options, d(n, n.dataGroup.options), delete n.dataLabels);
          } else (n = c[x]) || void 0 === b[x] || (c[x] = n = new g().init(this, b[x], h[r]));

          n && (n.index = x, p[r] = n);
        }

        this.options.keys = a;
        if (c && (q !== (e = c.length) || v)) for (r = 0; r < e; r++) {
          r !== m || v || (r += q), c[r] && (c[r].destroyElements(), c[r].plotX = void 0);
        }
        this.data = c;
        this.points = p;
        f(this, "afterGeneratePoints");
      },
      getXExtremes: function getXExtremes(a) {
        return {
          min: p(a),
          max: m(a)
        };
      },
      getExtremes: function getExtremes(a) {
        var b = this.xAxis,
            d = this.yAxis,
            c = this.processedXData || this.xData,
            e = [],
            k = 0,
            h = 0;
        var g = 0;
        var q = this.requireSorting ? this.cropShoulder : 0,
            v = d ? d.positiveValuesOnly : !1,
            r;
        a = a || this.stackedYData || this.processedYData || [];
        d = a.length;
        b && (g = b.getExtremes(), h = g.min, g = g.max);

        for (r = 0; r < d; r++) {
          var x = c[r];
          var n = a[r];
          var u = (z(n) || F(n)) && (n.length || 0 < n || !v);
          x = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !b || (c[r + q] || x) >= h && (c[r - q] || x) <= g;
          if (u && x) if (u = n.length) for (; u--;) {
            z(n[u]) && (e[k++] = n[u]);
          } else e[k++] = n;
        }

        this.dataMin = p(e);
        this.dataMax = m(e);
        f(this, "afterGetExtremes");
      },
      translate: function translate() {
        this.processedXData || this.processData();
        this.generatePoints();
        var a = this.options,
            b = a.stacking,
            d = this.xAxis,
            c = d.categories,
            e = this.yAxis,
            l = this.points,
            q = l.length,
            m = !!this.modifyValue,
            v,
            p = this.pointPlacementToXValue(),
            r = z(p),
            n = a.threshold,
            x = a.startFromThreshold ? n : 0,
            u,
            y = this.zoneAxis || "y",
            E = Number.MAX_VALUE;

        for (v = 0; v < q; v++) {
          var C = l[v],
              L = C.x;
          var D = C.y;
          var H = C.low,
              N = b && e.stacks[(this.negStacks && D < (x ? 0 : n) ? "-" : "") + this.stackKey];
          e.positiveValuesOnly && null !== D && 0 >= D && (C.isNull = !0);
          C.plotX = u = g(Math.min(Math.max(-1E5, d.translate(L, 0, 0, 0, 1, p, "flags" === this.type)), 1E5));

          if (b && this.visible && N && N[L]) {
            var W = this.getStackIndicator(W, L, this.index);

            if (!C.isNull) {
              var P = N[L];
              var X = P.points[W.key];
            }
          }

          F(X) && (H = X[0], D = X[1], H === x && W.key === N[L].base && (H = h(z(n) && n, e.min)), e.positiveValuesOnly && 0 >= H && (H = null), C.total = C.stackTotal = P.total, C.percentage = P.total && C.y / P.total * 100, C.stackY = D, this.irregularWidths || P.setOffset(this.pointXOffset || 0, this.barW || 0));
          C.yBottom = A(H) ? Math.min(Math.max(-1E5, e.translate(H, 0, 1, 0, 1)), 1E5) : null;
          m && (D = this.modifyValue(D, C));
          C.plotY = D = "number" === typeof D && Infinity !== D ? Math.min(Math.max(-1E5, e.translate(D, 0, 1, 0, 1)), 1E5) : void 0;
          C.isInside = void 0 !== D && 0 <= D && D <= e.len && 0 <= u && u <= d.len;
          C.clientX = r ? g(d.translate(L, 0, 0, 0, 1, p)) : u;
          C.negative = C[y] < (a[y + "Threshold"] || n || 0);
          C.category = c && void 0 !== c[C.x] ? c[C.x] : C.x;

          if (!C.isNull) {
            void 0 !== Y && (E = Math.min(E, Math.abs(u - Y)));
            var Y = u;
          }

          C.zone = this.zones.length && C.getZone();
        }

        this.closestPointRangePx = E;
        f(this, "afterTranslate");
      },
      getValidPoints: function getValidPoints(a, b, d) {
        var c = this.chart;
        return (a || this.points || []).filter(function (a) {
          return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : d || !a.isNull;
        });
      },
      getClipBox: function getClipBox(a, b) {
        var d = this.options,
            c = this.chart,
            f = c.inverted,
            e = this.xAxis,
            k = e && this.yAxis;
        a && !1 === d.clip && k ? a = f ? {
          y: -c.chartWidth + k.len + k.pos,
          height: c.chartWidth,
          width: c.chartHeight,
          x: -c.chartHeight + e.len + e.pos
        } : {
          y: -k.pos,
          height: c.chartHeight,
          width: c.chartWidth,
          x: -e.pos
        } : (a = this.clipBox || c.clipBox, b && (a.width = c.plotSizeX, a.x = 0));
        return b ? {
          width: a.width,
          x: a.x
        } : a;
      },
      setClip: function setClip(a) {
        var b = this.chart,
            d = this.options,
            c = b.renderer,
            f = b.inverted,
            e = this.clipBox,
            k = this.getClipBox(a),
            h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, k.height, d.xAxis, d.yAxis].join(),
            g = b[h],
            q = b[h + "m"];
        g || (a && (k.width = 0, f && (k.x = b.plotSizeX + (!1 !== d.clip ? 0 : b.plotTop)), b[h + "m"] = q = c.clipRect(f ? b.plotSizeX + 99 : -99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), b[h] = g = c.clipRect(k), g.count = {
          length: 0
        });
        a && !g.count[this.index] && (g.count[this.index] = !0, g.count.length += 1);
        if (!1 !== d.clip || a) this.group.clip(a || e ? g : b.clipRect), this.markerGroup.clip(q), this.sharedClipKey = h;
        a || (g.count[this.index] && (delete g.count[this.index], --g.count.length), 0 === g.count.length && h && b[h] && (e || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())));
      },
      animate: function animate(a) {
        var b = this.chart,
            d = x(this.options.animation);
        if (a) this.setClip(d);else {
          var c = this.sharedClipKey;
          a = b[c];
          var f = this.getClipBox(d, !0);
          a && a.animate(f, d);
          b[c + "m"] && b[c + "m"].animate({
            width: f.width + 99,
            x: f.x - (b.inverted ? 0 : 99)
          }, d);
          this.animate = null;
        }
      },
      afterAnimate: function afterAnimate() {
        this.setClip();
        f(this, "afterAnimate");
        this.finishedAnimating = !0;
      },
      drawPoints: function drawPoints() {
        var a = this.points,
            b = this.chart,
            d,
            c = this.options.marker,
            f = this[this.specialGroup] || this.markerGroup;
        var e = this.xAxis;
        var g = h(c.enabled, !e || e.isRadial ? !0 : null, this.closestPointRangePx >= c.enabledThreshold * c.radius);
        if (!1 !== c.enabled || this._hasPointMarkers) for (e = 0; e < a.length; e++) {
          var q = a[e];
          var m = (d = q.graphic) ? "animate" : "attr";
          var v = q.marker || {};
          var p = !!q.marker;
          var r = g && void 0 === v.enabled || v.enabled;
          var n = !1 !== q.isInside;

          if (r && !q.isNull) {
            r = h(v.symbol, this.symbol);
            var x = this.markerAttribs(q, q.selected && "select");
            d ? d[n ? "show" : "hide"](n).animate(x) : n && (0 < x.width || q.hasImage) && (q.graphic = d = b.renderer.symbol(r, x.x, x.y, x.width, x.height, p ? v : c).add(f));
            if (d && !b.styledMode) d[m](this.pointAttribs(q, q.selected && "select"));
            d && d.addClass(q.getClassName(), !0);
          } else d && (q.graphic = d.destroy());
        }
      },
      markerAttribs: function markerAttribs(a, b) {
        var d = this.options.marker,
            c = a.marker || {},
            f = c.symbol || d.symbol,
            e = h(c.radius, d.radius);
        b && (d = d.states[b], b = c.states && c.states[b], e = h(b && b.radius, d && d.radius, e + (d && d.radiusPlus || 0)));
        a.hasImage = f && 0 === f.indexOf("url");
        a.hasImage && (e = 0);
        a = {
          x: Math.floor(a.plotX) - e,
          y: a.plotY - e
        };
        e && (a.width = a.height = 2 * e);
        return a;
      },
      pointAttribs: function pointAttribs(a, b) {
        var d = this.options.marker,
            c = a && a.options,
            f = c && c.marker || {},
            e = this.color,
            k = c && c.color,
            t = a && a.color;
        c = h(f.lineWidth, d.lineWidth);
        var g = a && a.zone && a.zone.color;
        a = 1;
        e = k || g || t || e;
        k = f.fillColor || d.fillColor || e;
        e = f.lineColor || d.lineColor || e;
        b = b || "normal";
        d = d.states[b];
        b = f.states && f.states[b] || {};
        c = h(b.lineWidth, d.lineWidth, c + h(b.lineWidthPlus, d.lineWidthPlus, 0));
        k = b.fillColor || d.fillColor || k;
        e = b.lineColor || d.lineColor || e;
        a = h(b.opacity, d.opacity, a);
        return {
          stroke: e,
          "stroke-width": c,
          fill: k,
          opacity: a
        };
      },
      destroy: function destroy(a) {
        var b = this,
            d = b.chart,
            e = /AppleWebKit\/533/.test(v.navigator.userAgent),
            k,
            l,
            h = b.data || [],
            g,
            q;
        f(b, "destroy");
        a || r(b);
        (b.axisTypes || []).forEach(function (a) {
          (q = b[a]) && q.series && (D(q.series, b), q.isDirty = q.forceRedraw = !0);
        });
        b.legendItem && b.chart.legend.destroyItem(b);

        for (l = h.length; l--;) {
          (g = h[l]) && g.destroy && g.destroy();
        }

        b.points = null;
        c.clearTimeout(b.animationTimeout);
        L(b, function (a, b) {
          a instanceof E && !a.survive && (k = e && "group" === b ? "hide" : "destroy", a[k]());
        });
        d.hoverSeries === b && (d.hoverSeries = null);
        D(d.series, b);
        d.orderSeries();
        L(b, function (d, c) {
          a && "hcEvents" === c || delete b[c];
        });
      },
      getGraphPath: function getGraphPath(a, b, d) {
        var c = this,
            f = c.options,
            e = f.step,
            k,
            h = [],
            t = [],
            g;
        a = a || c.points;
        (k = a.reversed) && a.reverse();
        (e = {
          right: 1,
          center: 2
        }[e] || e && 3) && k && (e = 4 - e);
        !f.connectNulls || b || d || (a = this.getValidPoints(a));
        a.forEach(function (k, l) {
          var q = k.plotX,
              v = k.plotY,
              m = a[l - 1];
          (k.leftCliff || m && m.rightCliff) && !d && (g = !0);
          k.isNull && !A(b) && 0 < l ? g = !f.connectNulls : k.isNull && !b ? g = !0 : (0 === l || g ? l = ["M", k.plotX, k.plotY] : c.getPointSpline ? l = c.getPointSpline(a, k, l) : e ? (l = 1 === e ? ["L", m.plotX, v] : 2 === e ? ["L", (m.plotX + q) / 2, m.plotY, "L", (m.plotX + q) / 2, v] : ["L", q, m.plotY], l.push("L", q, v)) : l = ["L", q, v], t.push(k.x), e && (t.push(k.x), 2 === e && t.push(k.x)), h.push.apply(h, l), g = !1);
        });
        h.xMap = t;
        return c.graphPath = h;
      },
      drawGraph: function drawGraph() {
        var a = this,
            b = this.options,
            d = (this.gappedPath || this.getGraphPath).call(this),
            c = this.chart.styledMode,
            f = [["graph", "highcharts-graph"]];
        c || f[0].push(b.lineColor || this.color || "#cccccc", b.dashStyle);
        f = a.getZonesGraphs(f);
        f.forEach(function (f, e) {
          var k = f[0],
              l = a[k],
              h = l ? "animate" : "attr";
          l ? (l.endX = a.preventGraphAnimation ? null : d.xMap, l.animate({
            d: d
          })) : d.length && (a[k] = l = a.chart.renderer.path(d).addClass(f[1]).attr({
            zIndex: 1
          }).add(a.group));
          l && !c && (k = {
            stroke: f[2],
            "stroke-width": b.lineWidth,
            fill: a.fillGraph && a.color || "none"
          }, f[3] ? k.dashstyle = f[3] : "square" !== b.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), l[h](k).shadow(2 > e && b.shadow));
          l && (l.startX = d.xMap, l.isArea = d.isArea);
        });
      },
      getZonesGraphs: function getZonesGraphs(a) {
        this.zones.forEach(function (b, d) {
          d = ["zone-graph-" + d, "highcharts-graph highcharts-zone-graph-" + d + " " + (b.className || "")];
          this.chart.styledMode || d.push(b.color || this.color, b.dashStyle || this.options.dashStyle);
          a.push(d);
        }, this);
        return a;
      },
      applyZones: function applyZones() {
        var a = this,
            b = this.chart,
            d = b.renderer,
            c = this.zones,
            f,
            e,
            g = this.clips || [],
            q,
            m = this.graph,
            v = this.area,
            p = Math.max(b.chartWidth, b.chartHeight),
            r = this[(this.zoneAxis || "y") + "Axis"],
            n = b.inverted,
            x,
            u,
            y,
            E = !1;

        if (c.length && (m || v) && r && void 0 !== r.min) {
          var z = r.reversed;
          var A = r.horiz;
          m && !this.showLine && m.hide();
          v && v.hide();
          var C = r.getExtremes();
          c.forEach(function (c, k) {
            f = z ? A ? b.plotWidth : 0 : A ? 0 : r.toPixels(C.min) || 0;
            f = Math.min(Math.max(h(e, f), 0), p);
            e = Math.min(Math.max(Math.round(r.toPixels(h(c.value, C.max), !0) || 0), 0), p);
            E && (f = e = r.toPixels(C.max));
            x = Math.abs(f - e);
            u = Math.min(f, e);
            y = Math.max(f, e);
            r.isXAxis ? (q = {
              x: n ? y : u,
              y: 0,
              width: x,
              height: p
            }, A || (q.x = b.plotHeight - q.x)) : (q = {
              x: 0,
              y: n ? y : u,
              width: p,
              height: x
            }, A && (q.y = b.plotWidth - q.y));
            n && d.isVML && (q = r.isXAxis ? {
              x: 0,
              y: z ? u : y,
              height: q.width,
              width: b.chartWidth
            } : {
              x: q.y - b.plotLeft - b.spacingBox.x,
              y: 0,
              width: q.height,
              height: b.chartHeight
            });
            g[k] ? g[k].animate(q) : g[k] = d.clipRect(q);
            m && a["zone-graph-" + k].clip(g[k]);
            v && a["zone-area-" + k].clip(g[k]);
            E = c.value > C.max;
            a.resetZones && 0 === e && (e = void 0);
          });
          this.clips = g;
        } else a.visible && (m && m.show(!0), v && v.show(!0));
      },
      invertGroups: function invertGroups(a) {
        function b() {
          ["group", "markerGroup"].forEach(function (b) {
            d[b] && (c.renderer.isVML && d[b].attr({
              width: d.yAxis.len,
              height: d.xAxis.len
            }), d[b].width = d.yAxis.len, d[b].height = d.xAxis.len, d[b].invert(a));
          });
        }

        var d = this,
            c = d.chart;

        if (d.xAxis) {
          var f = C(c, "resize", b);
          C(d, "destroy", f);
          b(a);
          d.invertGroups = b;
        }
      },
      plotGroup: function plotGroup(a, b, d, c, f) {
        var e = this[a],
            k = !e;
        k && (this[a] = e = this.chart.renderer.g().attr({
          zIndex: c || .1
        }).add(f));
        e.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (A(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (e.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
        e.attr({
          visibility: d
        })[k ? "attr" : "animate"](this.getPlotBox());
        return e;
      },
      getPlotBox: function getPlotBox() {
        var a = this.chart,
            b = this.xAxis,
            d = this.yAxis;
        a.inverted && (b = d, d = this.xAxis);
        return {
          translateX: b ? b.left : a.plotLeft,
          translateY: d ? d.top : a.plotTop,
          scaleX: 1,
          scaleY: 1
        };
      },
      render: function render() {
        var a = this,
            b = a.chart,
            d = a.options,
            c = !!a.animate && b.renderer.isSVG && x(d.animation).duration,
            e = a.visible ? "inherit" : "hidden",
            l = d.zIndex,
            h = a.hasRendered,
            g = b.seriesGroup,
            m = b.inverted;
        f(this, "render");
        var v = a.plotGroup("group", "series", e, l, g);
        a.markerGroup = a.plotGroup("markerGroup", "markers", e, l, g);
        c && a.animate(!0);
        v.inverted = a.isCartesian || a.invertable ? m : !1;
        a.drawGraph && (a.drawGraph(), a.applyZones());
        a.visible && a.drawPoints();
        a.drawDataLabels && a.drawDataLabels();
        a.redrawPoints && a.redrawPoints();
        a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
        a.invertGroups(m);
        !1 === d.clip || a.sharedClipKey || h || v.clip(b.clipRect);
        c && a.animate();
        h || (a.animationTimeout = q(function () {
          a.afterAnimate();
        }, c));
        a.isDirty = !1;
        a.hasRendered = !0;
        f(a, "afterRender");
      },
      redraw: function redraw() {
        var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            d = this.group,
            c = this.xAxis,
            f = this.yAxis;
        d && (a.inverted && d.attr({
          width: a.plotWidth,
          height: a.plotHeight
        }), d.animate({
          translateX: h(c && c.left, a.plotLeft),
          translateY: h(f && f.top, a.plotTop)
        }));
        this.translate();
        this.render();
        b && delete this.kdTree;
      },
      kdAxisArray: ["clientX", "plotY"],
      searchPoint: function searchPoint(a, b) {
        var d = this.xAxis,
            c = this.yAxis,
            f = this.chart.inverted;
        return this.searchKDTree({
          clientX: f ? d.len - a.chartY + d.pos : a.chartX - d.pos,
          plotY: f ? c.len - a.chartX + c.pos : a.chartY - c.pos
        }, b, a);
      },
      buildKDTree: function buildKDTree(a) {
        function b(a, c, f) {
          var e;

          if (e = a && a.length) {
            var k = d.kdAxisArray[c % f];
            a.sort(function (a, b) {
              return a[k] - b[k];
            });
            e = Math.floor(e / 2);
            return {
              point: a[e],
              left: b(a.slice(0, e), c + 1, f),
              right: b(a.slice(e + 1), c + 1, f)
            };
          }
        }

        this.buildingKdTree = !0;
        var d = this,
            c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        delete d.kdTree;
        q(function () {
          d.kdTree = b(d.getValidPoints(null, !d.directTouch), c, c);
          d.buildingKdTree = !1;
        }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
      },
      searchKDTree: function searchKDTree(a, b, d) {
        function c(a, b, d, l) {
          var g = b.point,
              q = f.kdAxisArray[d % l],
              t = g;
          var m = A(a[e]) && A(g[e]) ? Math.pow(a[e] - g[e], 2) : null;
          var v = A(a[k]) && A(g[k]) ? Math.pow(a[k] - g[k], 2) : null;
          v = (m || 0) + (v || 0);
          g.dist = A(v) ? Math.sqrt(v) : Number.MAX_VALUE;
          g.distX = A(m) ? Math.sqrt(m) : Number.MAX_VALUE;
          q = a[q] - g[q];
          v = 0 > q ? "left" : "right";
          m = 0 > q ? "right" : "left";
          b[v] && (v = c(a, b[v], d + 1, l), t = v[h] < t[h] ? v : g);
          b[m] && Math.sqrt(q * q) < t[h] && (a = c(a, b[m], d + 1, l), t = a[h] < t[h] ? a : t);
          return t;
        }

        var f = this,
            e = this.kdAxisArray[0],
            k = this.kdAxisArray[1],
            h = b ? "distX" : "dist";
        b = -1 < f.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        this.kdTree || this.buildingKdTree || this.buildKDTree(d);
        if (this.kdTree) return c(a, this.kdTree, b, b);
      },
      pointPlacementToXValue: function pointPlacementToXValue() {
        var a = this.options.pointPlacement;
        "between" === a && (a = .5);
        z(a) && (a *= h(this.options.pointRange || this.xAxis.pointRange));
        return a;
      }
    });
    "";
  });
  N(H, "parts/Stacking.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.objectEach;
    n = c.Axis;
    var F = c.Chart,
        z = c.correctFloat,
        u = c.destroyObjectProperties,
        L = c.format,
        y = c.pick,
        C = c.Series;

    c.StackItem = function (c, m, p, g, b) {
      var a = c.chart.inverted;
      this.axis = c;
      this.isNegative = p;
      this.options = m = m || {};
      this.x = g;
      this.total = null;
      this.points = {};
      this.stack = b;
      this.rightCliff = this.leftCliff = 0;
      this.alignOptions = {
        align: m.align || (a ? p ? "left" : "right" : "center"),
        verticalAlign: m.verticalAlign || (a ? "middle" : p ? "bottom" : "top"),
        y: m.y,
        x: m.x
      };
      this.textAlign = m.textAlign || (a ? p ? "right" : "left" : "center");
    };

    c.StackItem.prototype = {
      destroy: function destroy() {
        u(this, this.axis);
      },
      render: function render(c) {
        var m = this.axis.chart,
            p = this.options,
            g = p.format;
        g = g ? L(g, this, m.time) : p.formatter.call(this);
        this.label ? this.label.attr({
          text: g,
          visibility: "hidden"
        }) : (this.label = m.renderer.label(g, null, null, p.shape, null, null, p.useHTML, !1, "stack-labels"), g = {
          text: g,
          align: this.textAlign,
          rotation: p.rotation,
          padding: y(p.padding, 0),
          visibility: "hidden"
        }, this.label.attr(g), m.styledMode || this.label.css(p.style), this.label.added || this.label.add(c));
        this.label.labelrank = m.plotHeight;
      },
      setOffset: function setOffset(c, m, p, g, b) {
        var a = this.axis,
            d = a.chart;
        g = a.translate(a.usePercentage ? 100 : g ? g : this.total, 0, 0, 0, 1);
        p = a.translate(p ? p : 0);
        p = A(g) && Math.abs(g - p);
        c = y(b, d.xAxis[0].translate(this.x)) + c;
        a = A(g) && this.getStackBox(d, this, c, g, m, p, a);
        m = this.label;
        c = this.isNegative;
        b = "justify" === y(this.options.overflow, "justify");

        if (m && a) {
          p = m.getBBox();
          var f = d.inverted ? c ? p.width : 0 : p.width / 2,
              e = d.inverted ? p.height / 2 : c ? -4 : p.height + 4;
          this.alignOptions.x = y(this.options.x, 0);
          m.align(this.alignOptions, null, a);
          g = m.alignAttr;
          m.show();
          g.y -= e;
          b && (g.x -= f, C.prototype.justifyDataLabel.call(this.axis, m, this.alignOptions, g, p, a), g.x += f);
          g.x = m.alignAttr.x;
          m.attr({
            x: g.x,
            y: g.y
          });
          y(!b && this.options.crop, !0) && ((d = d.isInsidePlot(m.x + (d.inverted ? 0 : -p.width / 2), m.y) && d.isInsidePlot(m.x + (d.inverted ? c ? -p.width : p.width : p.width / 2), m.y + p.height)) || m.hide());
        }
      },
      getStackBox: function getStackBox(c, m, p, g, b, a, d) {
        var f = m.axis.reversed,
            e = c.inverted;
        c = d.height + d.pos - (e ? c.plotLeft : c.plotTop);
        m = m.isNegative && !f || !m.isNegative && f;
        return {
          x: e ? m ? g : g - a : p,
          y: e ? c - p - b : m ? c - g - a : c - g,
          width: e ? a : b,
          height: e ? b : a
        };
      }
    };

    F.prototype.getStacks = function () {
      var c = this,
          m = c.inverted;
      c.yAxis.forEach(function (c) {
        c.stacks && c.hasVisibleSeries && (c.oldStacks = c.stacks);
      });
      c.series.forEach(function (p) {
        var g = p.xAxis && p.xAxis.options || {};
        !p.options.stacking || !0 !== p.visible && !1 !== c.options.chart.ignoreHiddenSeries || (p.stackKey = [p.type, y(p.options.stack, ""), m ? g.top : g.left, m ? g.height : g.width].join());
      });
    };

    n.prototype.buildStacks = function () {
      var c = this.series,
          m = y(this.options.reversedStacks, !0),
          p = c.length,
          g;

      if (!this.isXAxis) {
        this.usePercentage = !1;

        for (g = p; g--;) {
          c[m ? g : p - g - 1].setStackedPoints();
        }

        for (g = 0; g < p; g++) {
          c[g].modifyStacks();
        }
      }
    };

    n.prototype.renderStackTotals = function () {
      var c = this.chart,
          m = c.renderer,
          p = this.stacks,
          g = this.stackTotalGroup;
      g || (this.stackTotalGroup = g = m.g("stack-labels").attr({
        visibility: "visible",
        zIndex: 6
      }).add());
      g.translate(c.plotLeft, c.plotTop);
      D(p, function (b) {
        D(b, function (a) {
          a.render(g);
        });
      });
    };

    n.prototype.resetStacks = function () {
      var c = this,
          m = c.stacks;
      c.isXAxis || D(m, function (m) {
        D(m, function (g, b) {
          g.touched < c.stacksTouched ? (g.destroy(), delete m[b]) : (g.total = null, g.cumulative = null);
        });
      });
    };

    n.prototype.cleanStacks = function () {
      if (!this.isXAxis) {
        if (this.oldStacks) var c = this.stacks = this.oldStacks;
        D(c, function (c) {
          D(c, function (c) {
            c.cumulative = c.total;
          });
        });
      }
    };

    C.prototype.setStackedPoints = function () {
      if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var n = this.processedXData,
            m = this.processedYData,
            p = [],
            g = m.length,
            b = this.options,
            a = b.threshold,
            d = y(b.startFromThreshold && a, 0),
            f = b.stack;
        b = b.stacking;
        var e = this.stackKey,
            h = "-" + e,
            r = this.negStacks,
            u = this.yAxis,
            q = u.stacks,
            v = u.oldStacks,
            k,
            t;
        u.stacksTouched += 1;

        for (t = 0; t < g; t++) {
          var B = n[t];
          var I = m[t];
          var w = this.getStackIndicator(w, B, this.index);
          var l = w.key;
          var J = (k = r && I < (d ? 0 : a)) ? h : e;
          q[J] || (q[J] = {});
          q[J][B] || (v[J] && v[J][B] ? (q[J][B] = v[J][B], q[J][B].total = null) : q[J][B] = new c.StackItem(u, u.options.stackLabels, k, B, f));
          J = q[J][B];
          null !== I ? (J.points[l] = J.points[this.index] = [y(J.cumulative, d)], A(J.cumulative) || (J.base = l), J.touched = u.stacksTouched, 0 < w.index && !1 === this.singleStacks && (J.points[l][0] = J.points[this.index + "," + B + ",0"][0])) : J.points[l] = J.points[this.index] = null;
          "percent" === b ? (k = k ? e : h, r && q[k] && q[k][B] ? (k = q[k][B], J.total = k.total = Math.max(k.total, J.total) + Math.abs(I) || 0) : J.total = z(J.total + (Math.abs(I) || 0))) : J.total = z(J.total + (I || 0));
          J.cumulative = y(J.cumulative, d) + (I || 0);
          null !== I && (J.points[l].push(J.cumulative), p[t] = J.cumulative);
        }

        "percent" === b && (u.usePercentage = !0);
        this.stackedYData = p;
        u.oldStacks = {};
      }
    };

    C.prototype.modifyStacks = function () {
      var c = this,
          m = c.stackKey,
          p = c.yAxis.stacks,
          g = c.processedXData,
          b,
          a = c.options.stacking;
      c[a + "Stacker"] && [m, "-" + m].forEach(function (d) {
        for (var f = g.length, e, h; f--;) {
          if (e = g[f], b = c.getStackIndicator(b, e, c.index, d), h = (e = p[d] && p[d][e]) && e.points[b.key]) c[a + "Stacker"](h, e, f);
        }
      });
    };

    C.prototype.percentStacker = function (c, m, p) {
      m = m.total ? 100 / m.total : 0;
      c[0] = z(c[0] * m);
      c[1] = z(c[1] * m);
      this.stackedYData[p] = c[1];
    };

    C.prototype.getStackIndicator = function (c, m, p, g) {
      !A(c) || c.x !== m || g && c.key !== g ? c = {
        x: m,
        index: 0,
        key: g
      } : c.index++;
      c.key = [p, m, c.index].join();
      return c;
    };
  });
  N(H, "parts/Dynamics.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.erase,
        F = n.isArray,
        z = n.isNumber,
        u = n.isObject,
        L = n.isString,
        y = n.objectEach,
        C = n.splat,
        x = c.addEvent,
        m = c.animate,
        p = c.Axis;
    n = c.Chart;
    var g = c.createElement,
        b = c.css,
        a = c.extend,
        d = c.fireEvent,
        f = c.merge,
        e = c.pick,
        h = c.Point,
        r = c.Series,
        E = c.seriesTypes,
        q = c.setAnimation;

    c.cleanRecursively = function (a, b) {
      var d = {};
      y(a, function (f, e) {
        if (u(a[e], !0) && !a.nodeType && b[e]) f = c.cleanRecursively(a[e], b[e]), Object.keys(f).length && (d[e] = f);else if (u(a[e]) || a[e] !== b[e]) d[e] = a[e];
      });
      return d;
    };

    a(n.prototype, {
      addSeries: function addSeries(a, b, c) {
        var f,
            k = this;
        a && (b = e(b, !0), d(k, "addSeries", {
          options: a
        }, function () {
          f = k.initSeries(a);
          k.isDirtyLegend = !0;
          k.linkSeries();
          d(k, "afterAddSeries", {
            series: f
          });
          b && k.redraw(c);
        }));
        return f;
      },
      addAxis: function addAxis(a, b, d, c) {
        return this.createAxis(b ? "xAxis" : "yAxis", {
          axis: a,
          redraw: d,
          animation: c
        });
      },
      addColorAxis: function addColorAxis(a, b, d) {
        return this.createAxis("colorAxis", {
          axis: a,
          redraw: b,
          animation: d
        });
      },
      createAxis: function createAxis(a, b) {
        var d = this.options,
            k = "colorAxis" === a,
            h = b.redraw,
            g = b.animation;
        b = f(b.axis, {
          index: this[a].length,
          isX: "xAxis" === a
        });
        var l = k ? new c.ColorAxis(this, b) : new p(this, b);
        d[a] = C(d[a] || {});
        d[a].push(b);
        k && (this.isDirtyLegend = !0);
        e(h, !0) && this.redraw(g);
        return l;
      },
      showLoading: function showLoading(d) {
        var c = this,
            f = c.options,
            h = c.loadingDiv,
            q = f.loading,
            v = function v() {
          h && b(h, {
            left: c.plotLeft + "px",
            top: c.plotTop + "px",
            width: c.plotWidth + "px",
            height: c.plotHeight + "px"
          });
        };

        h || (c.loadingDiv = h = g("div", {
          className: "highcharts-loading highcharts-loading-hidden"
        }, null, c.container), c.loadingSpan = g("span", {
          className: "highcharts-loading-inner"
        }, null, h), x(c, "redraw", v));
        h.className = "highcharts-loading";
        c.loadingSpan.innerHTML = e(d, f.lang.loading, "");
        c.styledMode || (b(h, a(q.style, {
          zIndex: 10
        })), b(c.loadingSpan, q.labelStyle), c.loadingShown || (b(h, {
          opacity: 0,
          display: ""
        }), m(h, {
          opacity: q.style.opacity || .5
        }, {
          duration: q.showDuration || 0
        })));
        c.loadingShown = !0;
        v();
      },
      hideLoading: function hideLoading() {
        var a = this.options,
            d = this.loadingDiv;
        d && (d.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || m(d, {
          opacity: 0
        }, {
          duration: a.loading.hideDuration || 100,
          complete: function complete() {
            b(d, {
              display: "none"
            });
          }
        }));
        this.loadingShown = !1;
      },
      propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
      collectionsWithUpdate: "xAxis yAxis zAxis series colorAxis pane".split(" "),
      update: function update(a, b, h, g) {
        var k = this,
            q = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle",
          caption: "setCaption"
        },
            l,
            m,
            t,
            v = a.isResponsiveOptions,
            r = [];
        d(k, "update", {
          options: a
        });
        v || k.setResponsive(!1, !0);
        a = c.cleanRecursively(a, k.options);
        f(!0, k.userOptions, a);

        if (l = a.chart) {
          f(!0, k.options.chart, l);
          "className" in l && k.setClassName(l.className);
          "reflow" in l && k.setReflow(l.reflow);

          if ("inverted" in l || "polar" in l || "type" in l) {
            k.propFromSeries();
            var p = !0;
          }

          "alignTicks" in l && (p = !0);
          y(l, function (a, b) {
            -1 !== k.propsRequireUpdateSeries.indexOf("chart." + b) && (m = !0);
            -1 !== k.propsRequireDirtyBox.indexOf(b) && (k.isDirtyBox = !0);
            v || -1 === k.propsRequireReflow.indexOf(b) || (t = !0);
          });
          !k.styledMode && "style" in l && k.renderer.setStyle(l.style);
        }

        !k.styledMode && a.colors && (this.options.colors = a.colors);
        a.plotOptions && f(!0, this.options.plotOptions, a.plotOptions);
        a.time && this.time === c.time && (this.time = new c.Time(a.time));
        y(a, function (a, b) {
          if (k[b] && "function" === typeof k[b].update) k[b].update(a, !1);else if ("function" === typeof k[q[b]]) k[q[b]](a);
          "chart" !== b && -1 !== k.propsRequireUpdateSeries.indexOf(b) && (m = !0);
        });
        this.collectionsWithUpdate.forEach(function (b) {
          if (a[b]) {
            if ("series" === b) {
              var d = [];
              k[b].forEach(function (a, b) {
                a.options.isInternal || d.push(e(a.options.index, b));
              });
            }

            C(a[b]).forEach(function (a, c) {
              (c = A(a.id) && k.get(a.id) || k[b][d ? d[c] : c]) && c.coll === b && (c.update(a, !1), h && (c.touched = !0));
              !c && h && k.collectionsWithInit[b] && (k.collectionsWithInit[b][0].apply(k, [a].concat(k.collectionsWithInit[b][1] || []).concat([!1])).touched = !0);
            });
            h && k[b].forEach(function (a) {
              a.touched || a.options.isInternal ? delete a.touched : r.push(a);
            });
          }
        });
        r.forEach(function (a) {
          a.remove && a.remove(!1);
        });
        p && k.axes.forEach(function (a) {
          a.update({}, !1);
        });
        m && k.series.forEach(function (a) {
          a.update({}, !1);
        });
        a.loading && f(!0, k.options.loading, a.loading);
        p = l && l.width;
        l = l && l.height;
        L(l) && (l = c.relativeLength(l, p || k.chartWidth));
        t || z(p) && p !== k.chartWidth || z(l) && l !== k.chartHeight ? k.setSize(p, l, g) : e(b, !0) && k.redraw(g);
        d(k, "afterUpdate", {
          options: a,
          redraw: b,
          animation: g
        });
      },
      setSubtitle: function setSubtitle(a, b) {
        this.applyDescription("subtitle", a);
        this.layOutTitles(b);
      },
      setCaption: function setCaption(a, b) {
        this.applyDescription("caption", a);
        this.layOutTitles(b);
      }
    });
    n.prototype.collectionsWithInit = {
      xAxis: [n.prototype.addAxis, [!0]],
      yAxis: [n.prototype.addAxis, [!1]],
      colorAxis: [n.prototype.addColorAxis, [!1]],
      series: [n.prototype.addSeries]
    };
    a(h.prototype, {
      update: function update(a, b, d, c) {
        function f() {
          k.applyOptions(a);
          null === k.y && h && (k.graphic = h.destroy());
          u(a, !0) && (h && h.element && a && a.marker && void 0 !== a.marker.symbol && (k.graphic = h.destroy()), a && a.dataLabels && k.dataLabel && (k.dataLabel = k.dataLabel.destroy()), k.connector && (k.connector = k.connector.destroy()));
          g = k.index;
          l.updateParallelArrays(k, g);
          m.data[g] = u(m.data[g], !0) || u(a, !0) ? k.options : e(a, m.data[g]);
          l.isDirty = l.isDirtyData = !0;
          !l.fixedBox && l.hasCartesianSeries && (q.isDirtyBox = !0);
          "point" === m.legendType && (q.isDirtyLegend = !0);
          b && q.redraw(d);
        }

        var k = this,
            l = k.series,
            h = k.graphic,
            g,
            q = l.chart,
            m = l.options;
        b = e(b, !0);
        !1 === c ? f() : k.firePointEvent("update", {
          options: a
        }, f);
      },
      remove: function remove(a, b) {
        this.series.removePoint(this.series.data.indexOf(this), a, b);
      }
    });
    a(r.prototype, {
      addPoint: function addPoint(a, b, c, f, h) {
        var k = this.options,
            l = this.data,
            g = this.chart,
            q = this.xAxis;
        q = q && q.hasNames && q.names;
        var m = k.data,
            t = this.xData,
            v;
        b = e(b, !0);
        var r = {
          series: this
        };
        this.pointClass.prototype.applyOptions.apply(r, [a]);
        var p = r.x;
        var n = t.length;
        if (this.requireSorting && p < t[n - 1]) for (v = !0; n && t[n - 1] > p;) {
          n--;
        }
        this.updateParallelArrays(r, "splice", n, 0, 0);
        this.updateParallelArrays(r, n);
        q && r.name && (q[p] = r.name);
        m.splice(n, 0, a);
        v && (this.data.splice(n, 0, null), this.processData());
        "point" === k.legendType && this.generatePoints();
        c && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(r, "shift"), m.shift()));
        !1 !== h && d(this, "addPoint", {
          point: r
        });
        this.isDirtyData = this.isDirty = !0;
        b && g.redraw(f);
      },
      removePoint: function removePoint(a, b, d) {
        var c = this,
            f = c.data,
            k = f[a],
            l = c.points,
            h = c.chart,
            g = function g() {
          l && l.length === f.length && l.splice(a, 1);
          f.splice(a, 1);
          c.options.data.splice(a, 1);
          c.updateParallelArrays(k || {
            series: c
          }, "splice", a, 1);
          k && k.destroy();
          c.isDirty = !0;
          c.isDirtyData = !0;
          b && h.redraw();
        };

        q(d, h);
        b = e(b, !0);
        k ? k.firePointEvent("remove", null, g) : g();
      },
      remove: function remove(a, b, c, f) {
        function k() {
          h.destroy(f);
          h.remove = null;
          l.isDirtyLegend = l.isDirtyBox = !0;
          l.linkSeries();
          e(a, !0) && l.redraw(b);
        }

        var h = this,
            l = h.chart;
        !1 !== c ? d(h, "remove", null, k) : k();
      },
      update: function update(b, k) {
        b = c.cleanRecursively(b, this.userOptions);
        d(this, "update", {
          options: b
        });
        var h = this,
            g = h.chart,
            q = h.userOptions,
            m = h.initialType || h.type,
            l = b.type || q.type || g.options.chart.type,
            r = !(this.hasDerivedData || b.dataGrouping || l && l !== this.type || void 0 !== b.pointStart || b.pointInterval || b.pointIntervalUnit || b.keys),
            p = E[m].prototype,
            v,
            n = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"],
            u = ["eventOptions", "navigatorSeries", "baseSeries"],
            x = h.finishedAnimating && {
          animation: !1
        },
            y = {};
        r && (u.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== b.visible && u.push("area", "graph"), h.parallelArrays.forEach(function (a) {
          u.push(a + "Data");
        }), b.data && this.setData(b.data, !1));
        b = f(q, x, {
          index: void 0 === q.index ? h.index : q.index,
          pointStart: e(q.pointStart, h.xData[0])
        }, !r && {
          data: h.options.data
        }, b);
        r && b.data && (b.data = h.options.data);
        u = n.concat(u);
        u.forEach(function (a) {
          u[a] = h[a];
          delete h[a];
        });
        h.remove(!1, null, !1, !0);

        for (v in p) {
          h[v] = void 0;
        }

        E[l || m] ? a(h, E[l || m].prototype) : c.error(17, !0, g);
        u.forEach(function (a) {
          h[a] = u[a];
        });
        h.init(g, b);

        if (r && this.points) {
          var z = h.options;
          !1 === z.visible ? (y.graphic = 1, y.dataLabel = 1) : h._hasPointLabels || (l = z.marker, p = z.dataLabels, l && (!1 === l.enabled || "symbol" in l) && (y.graphic = 1), p && !1 === p.enabled && (y.dataLabel = 1));
          this.points.forEach(function (a) {
            a && a.series && (a.resolveColor(), Object.keys(y).length && a.destroyElements(y), !1 === z.showInLegend && a.legendItem && g.legend.destroyItem(a));
          }, this);
        }

        b.zIndex !== q.zIndex && n.forEach(function (a) {
          h[a] && h[a].attr({
            zIndex: b.zIndex
          });
        });
        h.initialType = m;
        g.linkSeries();
        d(this, "afterUpdate");
        e(k, !0) && g.redraw(r ? void 0 : !1);
      },
      setName: function setName(a) {
        this.name = this.options.name = this.userOptions.name = a;
        this.chart.isDirtyLegend = !0;
      }
    });
    a(p.prototype, {
      update: function update(b, d) {
        var c = this.chart,
            k = b && b.events || {};
        b = f(this.userOptions, b);
        c.options[this.coll].indexOf && (c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)] = b);
        y(c.options[this.coll].events, function (a, b) {
          "undefined" === typeof k[b] && (k[b] = void 0);
        });
        this.destroy(!0);
        this.init(c, a(b, {
          events: k
        }));
        c.isDirtyBox = !0;
        e(d, !0) && c.redraw();
      },
      remove: function remove(a) {
        for (var b = this.chart, d = this.coll, c = this.series, f = c.length; f--;) {
          c[f] && c[f].remove(!1);
        }

        D(b.axes, this);
        D(b[d], this);
        F(b.options[d]) ? b.options[d].splice(this.options.index, 1) : delete b.options[d];
        b[d].forEach(function (a, b) {
          a.options.index = a.userOptions.index = b;
        });
        this.destroy();
        b.isDirtyBox = !0;
        e(a, !0) && b.redraw();
      },
      setTitle: function setTitle(a, b) {
        this.update({
          title: a
        }, b);
      },
      setCategories: function setCategories(a, b) {
        this.update({
          categories: a
        }, b);
      }
    });
  });
  N(H, "parts/AreaSeries.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.objectEach,
        D = c.color,
        F = c.pick,
        z = c.Series;
    n = c.seriesType;
    n("area", "line", {
      softThreshold: !1,
      threshold: 0
    }, {
      singleStacks: !1,
      getStackPoints: function getStackPoints(c) {
        var n = [],
            u = [],
            z = this.xAxis,
            x = this.yAxis,
            m = x.stacks[this.stackKey],
            p = {},
            g = this.index,
            b = x.series,
            a = b.length,
            d = F(x.options.reversedStacks, !0) ? 1 : -1,
            f;
        c = c || this.points;

        if (this.options.stacking) {
          for (f = 0; f < c.length; f++) {
            c[f].leftNull = c[f].rightNull = null, p[c[f].x] = c[f];
          }

          A(m, function (a, b) {
            null !== a.total && u.push(b);
          });
          u.sort(function (a, b) {
            return a - b;
          });
          var e = b.map(function (a) {
            return a.visible;
          });
          u.forEach(function (b, c) {
            var h = 0,
                q,
                r;
            if (p[b] && !p[b].isNull) n.push(p[b]), [-1, 1].forEach(function (k) {
              var h = 1 === k ? "rightNull" : "leftNull",
                  v = 0,
                  n = m[u[c + k]];
              if (n) for (f = g; 0 <= f && f < a;) {
                q = n.points[f], q || (f === g ? p[b][h] = !0 : e[f] && (r = m[b].points[f]) && (v -= r[1] - r[0])), f += d;
              }
              p[b][1 === k ? "rightCliff" : "leftCliff"] = v;
            });else {
              for (f = g; 0 <= f && f < a;) {
                if (q = m[b].points[f]) {
                  h = q[1];
                  break;
                }

                f += d;
              }

              h = x.translate(h, 0, 1, 0, 1);
              n.push({
                isNull: !0,
                plotX: z.translate(b, 0, 0, 0, 1),
                x: b,
                plotY: h,
                yBottom: h
              });
            }
          });
        }

        return n;
      },
      getGraphPath: function getGraphPath(n) {
        var u = z.prototype.getGraphPath,
            y = this.options,
            A = y.stacking,
            x = this.yAxis,
            m,
            p = [],
            g = [],
            b = this.index,
            a = x.stacks[this.stackKey],
            d = y.threshold,
            f = Math.round(x.getThreshold(y.threshold));
        y = c.pick(y.connectNulls, "percent" === A);

        var e = function e(c, _e, k) {
          var h = n[c];
          c = A && a[h.x].points[b];
          var q = h[k + "Null"] || 0;
          k = h[k + "Cliff"] || 0;
          h = !0;

          if (k || q) {
            var m = (q ? c[0] : c[1]) + k;
            var v = c[0] + k;
            h = !!q;
          } else !A && n[_e] && n[_e].isNull && (m = v = d);

          void 0 !== m && (g.push({
            plotX: r,
            plotY: null === m ? f : x.getThreshold(m),
            isNull: h,
            isCliff: !0
          }), p.push({
            plotX: r,
            plotY: null === v ? f : x.getThreshold(v),
            doCurve: !1
          }));
        };

        n = n || this.points;
        A && (n = this.getStackPoints(n));

        for (m = 0; m < n.length; m++) {
          var h = n[m].isNull;
          var r = F(n[m].rectPlotX, n[m].plotX);
          var E = F(n[m].yBottom, f);
          if (!h || y) y || e(m, m - 1, "left"), h && !A && y || (g.push(n[m]), p.push({
            x: m,
            plotX: r,
            plotY: E
          })), y || e(m, m + 1, "right");
        }

        m = u.call(this, g, !0, !0);
        p.reversed = !0;
        h = u.call(this, p, !0, !0);
        h.length && (h[0] = "L");
        h = m.concat(h);
        u = u.call(this, g, !1, y);
        h.xMap = m.xMap;
        this.areaPath = h;
        return u;
      },
      drawGraph: function drawGraph() {
        this.areaPath = [];
        z.prototype.drawGraph.apply(this);
        var c = this,
            n = this.areaPath,
            y = this.options,
            A = [["area", "highcharts-area", this.color, y.fillColor]];
        this.zones.forEach(function (n, m) {
          A.push(["zone-area-" + m, "highcharts-area highcharts-zone-area-" + m + " " + n.className, n.color || c.color, n.fillColor || y.fillColor]);
        });
        A.forEach(function (u) {
          var m = u[0],
              p = c[m],
              g = p ? "animate" : "attr",
              b = {};
          p ? (p.endX = c.preventGraphAnimation ? null : n.xMap, p.animate({
            d: n
          })) : (b.zIndex = 0, p = c[m] = c.chart.renderer.path(n).addClass(u[1]).add(c.group), p.isArea = !0);
          c.chart.styledMode || (b.fill = F(u[3], D(u[2]).setOpacity(F(y.fillOpacity, .75)).get()));
          p[g](b);
          p.startX = n.xMap;
          p.shiftUnit = y.step ? 2 : 1;
        });
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
    });
    "";
  });
  N(H, "parts/SplineSeries.js", [H["parts/Globals.js"]], function (c) {
    var n = c.pick;
    c = c.seriesType;
    c("spline", "line", {}, {
      getPointSpline: function getPointSpline(c, D, F) {
        var z = D.plotX,
            u = D.plotY,
            A = c[F - 1];
        F = c[F + 1];

        if (A && !A.isNull && !1 !== A.doCurve && !D.isCliff && F && !F.isNull && !1 !== F.doCurve && !D.isCliff) {
          c = A.plotY;
          var y = F.plotX;
          F = F.plotY;
          var C = 0;
          var x = (1.5 * z + A.plotX) / 2.5;
          var m = (1.5 * u + c) / 2.5;
          y = (1.5 * z + y) / 2.5;
          var p = (1.5 * u + F) / 2.5;
          y !== x && (C = (p - m) * (y - z) / (y - x) + u - p);
          m += C;
          p += C;
          m > c && m > u ? (m = Math.max(c, u), p = 2 * u - m) : m < c && m < u && (m = Math.min(c, u), p = 2 * u - m);
          p > F && p > u ? (p = Math.max(F, u), m = 2 * u - p) : p < F && p < u && (p = Math.min(F, u), m = 2 * u - p);
          D.rightContX = y;
          D.rightContY = p;
        }

        D = ["C", n(A.rightContX, A.plotX), n(A.rightContY, A.plotY), n(x, z), n(m, u), z, u];
        A.rightContX = A.rightContY = null;
        return D;
      }
    });
    "";
  });
  N(H, "parts/AreaSplineSeries.js", [H["parts/Globals.js"]], function (c) {
    var n = c.seriesTypes.area.prototype,
        A = c.seriesType;
    A("areaspline", "spline", c.defaultPlotOptions.area, {
      getStackPoints: n.getStackPoints,
      getGraphPath: n.getGraphPath,
      drawGraph: n.drawGraph,
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
    });
    "";
  });
  N(H, "parts/ColumnSeries.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.animObject,
        z = c.color,
        u = c.extend,
        L = c.merge,
        y = c.pick,
        C = c.Series;
    n = c.seriesType;
    var x = c.svg;
    n("column", "line", {
      borderRadius: 0,
      crisp: !0,
      groupPadding: .2,
      marker: null,
      pointPadding: .1,
      minPointLength: 0,
      cropThreshold: 50,
      pointRange: null,
      states: {
        hover: {
          halo: !1,
          brightness: .1
        },
        select: {
          color: "#cccccc",
          borderColor: "#000000"
        }
      },
      dataLabels: {
        align: null,
        verticalAlign: null,
        y: null
      },
      softThreshold: !1,
      startFromThreshold: !0,
      stickyTracking: !1,
      tooltip: {
        distance: 6
      },
      threshold: 0,
      borderColor: "#ffffff"
    }, {
      cropShoulder: 0,
      directTouch: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      negStacks: !0,
      init: function init() {
        C.prototype.init.apply(this, arguments);
        var c = this,
            p = c.chart;
        p.hasRendered && p.series.forEach(function (g) {
          g.type === c.type && (g.isDirty = !0);
        });
      },
      getColumnMetrics: function getColumnMetrics() {
        var c = this,
            p = c.options,
            g = c.xAxis,
            b = c.yAxis,
            a = g.options.reversedStacks;
        a = g.reversed && !a || !g.reversed && a;
        var d,
            f = {},
            e = 0;
        !1 === p.grouping ? e = 1 : c.chart.series.forEach(function (a) {
          var h = a.yAxis,
              k = a.options;

          if (a.type === c.type && (a.visible || !c.chart.options.chart.ignoreHiddenSeries) && b.len === h.len && b.pos === h.pos) {
            if (k.stacking) {
              d = a.stackKey;
              void 0 === f[d] && (f[d] = e++);
              var g = f[d];
            } else !1 !== k.grouping && (g = e++);

            a.columnIndex = g;
          }
        });
        var h = Math.min(Math.abs(g.transA) * (g.ordinalSlope || p.pointRange || g.closestPointRange || g.tickInterval || 1), g.len),
            r = h * p.groupPadding,
            n = (h - 2 * r) / (e || 1);
        p = Math.min(p.maxPointWidth || g.len, y(p.pointWidth, n * (1 - 2 * p.pointPadding)));
        c.columnMetrics = {
          width: p,
          offset: (n - p) / 2 + (r + ((c.columnIndex || 0) + (a ? 1 : 0)) * n - h / 2) * (a ? -1 : 1)
        };
        return c.columnMetrics;
      },
      crispCol: function crispCol(c, p, g, b) {
        var a = this.chart,
            d = this.borderWidth,
            f = -(d % 2 ? .5 : 0);
        d = d % 2 ? .5 : 1;
        a.inverted && a.renderer.isVML && (d += 1);
        this.options.crisp && (g = Math.round(c + g) + f, c = Math.round(c) + f, g -= c);
        b = Math.round(p + b) + d;
        f = .5 >= Math.abs(p) && .5 < b;
        p = Math.round(p) + d;
        b -= p;
        f && b && (--p, b += 1);
        return {
          x: c,
          y: p,
          width: g,
          height: b
        };
      },
      translate: function translate() {
        var c = this,
            p = c.chart,
            g = c.options,
            b = c.dense = 2 > c.closestPointRange * c.xAxis.transA;
        b = c.borderWidth = y(g.borderWidth, b ? 0 : 1);
        var a = c.yAxis,
            d = g.threshold,
            f = c.translatedThreshold = a.getThreshold(d),
            e = y(g.minPointLength, 5),
            h = c.getColumnMetrics(),
            r = h.width,
            n = c.barW = Math.max(r, 1 + 2 * b),
            q = c.pointXOffset = h.offset,
            v = c.dataMin,
            k = c.dataMax;
        p.inverted && (f -= .5);
        g.pointPadding && (n = Math.ceil(n));
        C.prototype.translate.apply(c);
        c.points.forEach(function (b) {
          var h = y(b.yBottom, f),
              g = 999 + Math.abs(h),
              m = r;
          g = Math.min(Math.max(-g, b.plotY), a.len + g);
          var l = b.plotX + q,
              t = n,
              u = Math.min(g, h),
              x = Math.max(g, h) - u;

          if (e && Math.abs(x) < e) {
            x = e;
            var z = !a.reversed && !b.negative || a.reversed && b.negative;
            b.y === d && c.dataMax <= d && a.min < d && v !== k && (z = !z);
            u = Math.abs(u - f) > e ? h - e : f - (z ? e : 0);
          }

          A(b.options.pointWidth) && (m = t = Math.ceil(b.options.pointWidth), l -= Math.round((m - r) / 2));
          b.barX = l;
          b.pointWidth = m;
          b.tooltipPos = p.inverted ? [a.len + a.pos - p.plotLeft - g, c.xAxis.len - l - t / 2, x] : [l + t / 2, g + a.pos - p.plotTop, x];
          b.shapeType = c.pointClass.prototype.shapeType || "rect";
          b.shapeArgs = c.crispCol.apply(c, b.isNull ? [l, f, t, 0] : [l, u, t, x]);
        });
      },
      getSymbol: c.noop,
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
      drawGraph: function drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      },
      pointAttribs: function pointAttribs(c, p) {
        var g = this.options,
            b = this.pointAttrToOptions || {};
        var a = b.stroke || "borderColor";
        var d = b["stroke-width"] || "borderWidth",
            f = c && c.color || this.color,
            e = c && c[a] || g[a] || this.color || f,
            h = c && c[d] || g[d] || this[d] || 0;
        b = c && c.options.dashStyle || g.dashStyle;
        var m = y(g.opacity, 1);

        if (c && this.zones.length) {
          var n = c.getZone();
          f = c.options.color || n && (n.color || c.nonZonedColor) || this.color;
          n && (e = n.borderColor || e, b = n.dashStyle || b, h = n.borderWidth || h);
        }

        p && (c = L(g.states[p], c.options.states && c.options.states[p] || {}), p = c.brightness, f = c.color || void 0 !== p && z(f).brighten(c.brightness).get() || f, e = c[a] || e, h = c[d] || h, b = c.dashStyle || b, m = y(c.opacity, m));
        a = {
          fill: f,
          stroke: e,
          "stroke-width": h,
          opacity: m
        };
        b && (a.dashstyle = b);
        return a;
      },
      drawPoints: function drawPoints() {
        var c = this,
            p = this.chart,
            g = c.options,
            b = p.renderer,
            a = g.animationLimit || 250,
            d;
        c.points.forEach(function (f) {
          var e = f.graphic,
              h = e && p.pointCount < a ? "animate" : "attr";

          if (D(f.plotY) && null !== f.y) {
            d = f.shapeArgs;
            e && e.element.nodeName !== f.shapeType && (e = e.destroy());
            if (e) e[h](L(d));else f.graphic = e = b[f.shapeType](d).add(f.group || c.group);
            if (g.borderRadius) e[h]({
              r: g.borderRadius
            });
            p.styledMode || e[h](c.pointAttribs(f, f.selected && "select")).shadow(!1 !== f.allowShadow && g.shadow, null, g.stacking && !g.borderRadius);
            e.addClass(f.getClassName(), !0);
          } else e && (f.graphic = e.destroy());
        });
      },
      animate: function animate(c) {
        var m = this,
            g = this.yAxis,
            b = m.options,
            a = this.chart.inverted,
            d = {},
            f = a ? "translateX" : "translateY";
        if (x) if (c) d.scaleY = .001, c = Math.min(g.pos + g.len, Math.max(g.pos, g.toPixels(b.threshold))), a ? d.translateX = c - g.len : d.translateY = c, m.clipBox && m.setClip(), m.group.attr(d);else {
          var e = m.group.attr(f);
          m.group.animate({
            scaleY: 1
          }, u(F(m.options.animation), {
            step: function step(a, b) {
              d[f] = e + b.pos * (g.pos - e);
              m.group.attr(d);
            }
          }));
          m.animate = null;
        }
      },
      remove: function remove() {
        var c = this,
            p = c.chart;
        p.hasRendered && p.series.forEach(function (g) {
          g.type === c.type && (g.isDirty = !0);
        });
        C.prototype.remove.apply(c, arguments);
      }
    });
    "";
  });
  N(H, "parts/BarSeries.js", [H["parts/Globals.js"]], function (c) {
    c = c.seriesType;
    c("bar", "column", null, {
      inverted: !0
    });
    "";
  });
  N(H, "parts/ScatterSeries.js", [H["parts/Globals.js"]], function (c) {
    var n = c.Series,
        A = c.seriesType;
    A("scatter", "line", {
      lineWidth: 0,
      findNearestPointBy: "xy",
      jitter: {
        x: 0,
        y: 0
      },
      marker: {
        enabled: !0
      },
      tooltip: {
        headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
        pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
      }
    }, {
      sorted: !1,
      requireSorting: !1,
      noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
      takeOrdinalPosition: !1,
      drawGraph: function drawGraph() {
        this.options.lineWidth && n.prototype.drawGraph.call(this);
      },
      applyJitter: function applyJitter() {
        var c = this,
            n = this.options.jitter,
            z = this.points.length;
        n && this.points.forEach(function (u, A) {
          ["x", "y"].forEach(function (y, C) {
            var x = "plot" + y.toUpperCase();

            if (n[y] && !u.isNull) {
              var m = c[y + "Axis"];
              var p = n[y] * m.transA;

              if (m && !m.isLog) {
                var g = Math.max(0, u[x] - p);
                m = Math.min(m.len, u[x] + p);
                C = 1E4 * Math.sin(A + C * z);
                u[x] = g + (m - g) * (C - Math.floor(C));
                "x" === y && (u.clientX = u.plotX);
              }
            }
          });
        });
      }
    });
    c.addEvent(n, "afterTranslate", function () {
      this.applyJitter && this.applyJitter();
    });
    "";
  });
  N(H, "mixins/centered-series.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isNumber,
        D = c.deg2rad,
        F = c.pick,
        z = c.relativeLength;
    c.CenteredSeriesMixin = {
      getCenter: function getCenter() {
        var c = this.options,
            n = this.chart,
            y = 2 * (c.slicedOffset || 0),
            A = n.plotWidth - 2 * y;
        n = n.plotHeight - 2 * y;
        var x = c.center;
        x = [F(x[0], "50%"), F(x[1], "50%"), c.size || "100%", c.innerSize || 0];
        var m = Math.min(A, n),
            p;

        for (p = 0; 4 > p; ++p) {
          var g = x[p];
          c = 2 > p || 2 === p && /%$/.test(g);
          x[p] = z(g, [A, n, m, x[2]][p]) + (c ? y : 0);
        }

        x[3] > x[2] && (x[3] = x[2]);
        return x;
      },
      getStartAndEndRadians: function getStartAndEndRadians(c, n) {
        c = A(c) ? c : 0;
        n = A(n) && n > c && 360 > n - c ? n : c + 360;
        return {
          start: D * (c + -90),
          end: D * (n + -90)
        };
      }
    };
  });
  N(H, "parts/PieSeries.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.addEvent;
    n = c.CenteredSeriesMixin;
    var z = n.getStartAndEndRadians,
        u = c.merge,
        H = c.noop,
        y = c.pick,
        C = c.Point,
        x = c.Series,
        m = c.seriesType,
        p = c.fireEvent,
        g = c.setAnimation;
    m("pie", "line", {
      center: [null, null],
      clip: !1,
      colorByPoint: !0,
      dataLabels: {
        allowOverlap: !0,
        connectorPadding: 5,
        distance: 30,
        enabled: !0,
        formatter: function formatter() {
          return this.point.isNull ? void 0 : this.point.name;
        },
        softConnector: !0,
        x: 0,
        connectorShape: "fixedOffset",
        crookDistance: "70%"
      },
      fillColor: void 0,
      ignoreHiddenPoint: !0,
      inactiveOtherPoints: !0,
      legendType: "point",
      marker: null,
      size: null,
      showInLegend: !1,
      slicedOffset: 10,
      stickyTracking: !1,
      tooltip: {
        followPointer: !0
      },
      borderColor: "#ffffff",
      borderWidth: 1,
      states: {
        hover: {
          brightness: .1
        }
      }
    }, {
      isCartesian: !1,
      requireSorting: !1,
      directTouch: !0,
      noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      axisTypes: [],
      pointAttribs: c.seriesTypes.column.prototype.pointAttribs,
      animate: function animate(b) {
        var a = this,
            d = a.points,
            c = a.startAngleRad;
        b || (d.forEach(function (b) {
          var d = b.graphic,
              f = b.shapeArgs;
          d && (d.attr({
            r: b.startR || a.center[3] / 2,
            start: c,
            end: c
          }), d.animate({
            r: f.r,
            start: f.start,
            end: f.end
          }, a.options.animation));
        }), a.animate = null);
      },
      hasData: function hasData() {
        return !!this.processedXData.length;
      },
      updateTotals: function updateTotals() {
        var b,
            a = 0,
            d = this.points,
            c = d.length,
            e = this.options.ignoreHiddenPoint;

        for (b = 0; b < c; b++) {
          var h = d[b];
          a += e && !h.visible ? 0 : h.isNull ? 0 : h.y;
        }

        this.total = a;

        for (b = 0; b < c; b++) {
          h = d[b], h.percentage = 0 < a && (h.visible || !e) ? h.y / a * 100 : 0, h.total = a;
        }
      },
      generatePoints: function generatePoints() {
        x.prototype.generatePoints.call(this);
        this.updateTotals();
      },
      getX: function getX(b, a, d) {
        var c = this.center,
            e = this.radii ? this.radii[d.index] : c[2] / 2;
        return c[0] + (a ? -1 : 1) * Math.cos(Math.asin(Math.max(Math.min((b - c[1]) / (e + d.labelDistance), 1), -1))) * (e + d.labelDistance) + (0 < d.labelDistance ? (a ? -1 : 1) * this.options.dataLabels.padding : 0);
      },
      translate: function translate(b) {
        this.generatePoints();
        var a = 0,
            d = this.options,
            f = d.slicedOffset,
            e = f + (d.borderWidth || 0),
            h = z(d.startAngle, d.endAngle),
            g = this.startAngleRad = h.start;
        h = (this.endAngleRad = h.end) - g;
        var m = this.points,
            q = d.dataLabels.distance;
        d = d.ignoreHiddenPoint;
        var v,
            k = m.length;
        b || (this.center = b = this.getCenter());

        for (v = 0; v < k; v++) {
          var t = m[v];
          var n = g + a * h;
          if (!d || t.visible) a += t.percentage / 100;
          var u = g + a * h;
          t.shapeType = "arc";
          t.shapeArgs = {
            x: b[0],
            y: b[1],
            r: b[2] / 2,
            innerR: b[3] / 2,
            start: Math.round(1E3 * n) / 1E3,
            end: Math.round(1E3 * u) / 1E3
          };
          t.labelDistance = y(t.options.dataLabels && t.options.dataLabels.distance, q);
          t.labelDistance = c.relativeLength(t.labelDistance, t.shapeArgs.r);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, t.labelDistance);
          u = (u + n) / 2;
          u > 1.5 * Math.PI ? u -= 2 * Math.PI : u < -Math.PI / 2 && (u += 2 * Math.PI);
          t.slicedTranslation = {
            translateX: Math.round(Math.cos(u) * f),
            translateY: Math.round(Math.sin(u) * f)
          };
          var w = Math.cos(u) * b[2] / 2;
          var l = Math.sin(u) * b[2] / 2;
          t.tooltipPos = [b[0] + .7 * w, b[1] + .7 * l];
          t.half = u < -Math.PI / 2 || u > Math.PI / 2 ? 1 : 0;
          t.angle = u;
          n = Math.min(e, t.labelDistance / 5);
          t.labelPosition = {
            natural: {
              x: b[0] + w + Math.cos(u) * t.labelDistance,
              y: b[1] + l + Math.sin(u) * t.labelDistance
            },
            "final": {},
            alignment: 0 > t.labelDistance ? "center" : t.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: b[0] + w + Math.cos(u) * n,
                y: b[1] + l + Math.sin(u) * n
              },
              touchingSliceAt: {
                x: b[0] + w,
                y: b[1] + l
              }
            }
          };
        }

        p(this, "afterTranslate");
      },
      drawEmpty: function drawEmpty() {
        var b = this.options;

        if (0 === this.total) {
          var a = this.center[0];
          var d = this.center[1];
          this.graph || (this.graph = this.chart.renderer.circle(a, d, 0).addClass("highcharts-graph").add(this.group));
          this.graph.animate({
            "stroke-width": b.borderWidth,
            cx: a,
            cy: d,
            r: this.center[2] / 2,
            fill: b.fillColor || "none",
            stroke: b.color || "#cccccc"
          });
        } else this.graph && (this.graph = this.graph.destroy());
      },
      redrawPoints: function redrawPoints() {
        var b = this,
            a = b.chart,
            d = a.renderer,
            c,
            e,
            h,
            g,
            m = b.options.shadow;
        this.drawEmpty();
        !m || b.shadowGroup || a.styledMode || (b.shadowGroup = d.g("shadow").attr({
          zIndex: -1
        }).add(b.group));
        b.points.forEach(function (f) {
          var q = {};
          e = f.graphic;

          if (!f.isNull && e) {
            g = f.shapeArgs;
            c = f.getTranslate();

            if (!a.styledMode) {
              var k = f.shadowGroup;
              m && !k && (k = f.shadowGroup = d.g("shadow").add(b.shadowGroup));
              k && k.attr(c);
              h = b.pointAttribs(f, f.selected && "select");
            }

            f.delayedRendering ? (e.setRadialReference(b.center).attr(g).attr(c), a.styledMode || e.attr(h).attr({
              "stroke-linejoin": "round"
            }).shadow(m, k), f.delayedRendering = !1) : (e.setRadialReference(b.center), a.styledMode || u(!0, q, h), u(!0, q, g, c), e.animate(q));
            e.attr({
              visibility: f.visible ? "inherit" : "hidden"
            });
            e.addClass(f.getClassName());
          } else e && (f.graphic = e.destroy());
        });
      },
      drawPoints: function drawPoints() {
        var b = this.chart.renderer;
        this.points.forEach(function (a) {
          a.graphic || (a.graphic = b[a.shapeType](a.shapeArgs).add(a.series.group), a.delayedRendering = !0);
        });
      },
      searchPoint: H,
      sortByAngle: function sortByAngle(b, a) {
        b.sort(function (b, c) {
          return void 0 !== b.angle && (c.angle - b.angle) * a;
        });
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
      getCenter: n.getCenter,
      getSymbol: H,
      drawGraph: null
    }, {
      init: function init() {
        C.prototype.init.apply(this, arguments);
        var b = this;
        b.name = y(b.name, "Slice");

        var a = function a(_a2) {
          b.slice("select" === _a2.type);
        };

        F(b, "select", a);
        F(b, "unselect", a);
        return b;
      },
      isValid: function isValid() {
        return D(this.y) && 0 <= this.y;
      },
      setVisible: function setVisible(b, a) {
        var c = this,
            f = c.series,
            e = f.chart,
            h = f.options.ignoreHiddenPoint;
        a = y(a, h);
        b !== c.visible && (c.visible = c.options.visible = b = void 0 === b ? !c.visible : b, f.options.data[f.data.indexOf(c)] = c.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (a) {
          if (c[a]) c[a][b ? "show" : "hide"](!0);
        }), c.legendItem && e.legend.colorizeItem(c, b), b || "hover" !== c.state || c.setState(""), h && (f.isDirty = !0), a && e.redraw());
      },
      slice: function slice(b, a, c) {
        var d = this.series;
        g(c, d.chart);
        y(a, !0);
        this.sliced = this.options.sliced = A(b) ? b : !this.sliced;
        d.options.data[d.data.indexOf(this)] = this.options;
        this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      },
      getTranslate: function getTranslate() {
        return this.sliced ? this.slicedTranslation : {
          translateX: 0,
          translateY: 0
        };
      },
      haloPath: function haloPath(b) {
        var a = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(a.x, a.y, a.r + b, a.r + b, {
          innerR: a.r - 1,
          start: a.start,
          end: a.end
        });
      },
      connectorShapes: {
        fixedOffset: function fixedOffset(b, a, c) {
          var d = a.breakAt;
          a = a.touchingSliceAt;
          return ["M", b.x, b.y].concat(c.softConnector ? ["C", b.x + ("left" === b.alignment ? -5 : 5), b.y, 2 * d.x - a.x, 2 * d.y - a.y, d.x, d.y] : ["L", d.x, d.y]).concat(["L", a.x, a.y]);
        },
        straight: function straight(b, a) {
          a = a.touchingSliceAt;
          return ["M", b.x, b.y, "L", a.x, a.y];
        },
        crookedLine: function crookedLine(b, a, d) {
          a = a.touchingSliceAt;
          var f = this.series,
              e = f.center[0],
              h = f.chart.plotWidth,
              g = f.chart.plotLeft;
          f = b.alignment;
          var m = this.shapeArgs.r;
          d = c.relativeLength(d.crookDistance, 1);
          d = "left" === f ? e + m + (h + g - e - m) * (1 - d) : g + (e - m) * d;
          e = ["L", d, b.y];
          if ("left" === f ? d > b.x || d < a.x : d < b.x || d > a.x) e = [];
          return ["M", b.x, b.y].concat(e).concat(["L", a.x, a.y]);
        }
      },
      getConnectorPath: function getConnectorPath() {
        var b = this.labelPosition,
            a = this.series.options.dataLabels,
            c = a.connectorShape,
            f = this.connectorShapes;
        f[c] && (c = f[c]);
        return c.call(this, {
          x: b["final"].x,
          y: b["final"].y,
          alignment: b.alignment
        }, b.connectorPosition, a);
      }
    });
    "";
  });
  N(H, "parts/DataLabels.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isArray,
        F = n.objectEach,
        z = n.splat,
        u = c.arrayMax,
        H = c.extend,
        y = c.format,
        C = c.merge;
    n = c.noop;
    var x = c.pick,
        m = c.relativeLength,
        p = c.Series,
        g = c.seriesTypes,
        b = c.stableSort;

    c.distribute = function (a, d, f) {
      function e(a, b) {
        return a.target - b.target;
      }

      var h,
          g = !0,
          m = a,
          q = [];
      var p = 0;
      var k = m.reducedLen || d;

      for (h = a.length; h--;) {
        p += a[h].size;
      }

      if (p > k) {
        b(a, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });

        for (p = h = 0; p <= k;) {
          p += a[h].size, h++;
        }

        q = a.splice(h - 1, a.length);
      }

      b(a, e);

      for (a = a.map(function (a) {
        return {
          size: a.size,
          targets: [a.target],
          align: x(a.align, .5)
        };
      }); g;) {
        for (h = a.length; h--;) {
          g = a[h], p = (Math.min.apply(0, g.targets) + Math.max.apply(0, g.targets)) / 2, g.pos = Math.min(Math.max(0, p - g.size * g.align), d - g.size);
        }

        h = a.length;

        for (g = !1; h--;) {
          0 < h && a[h - 1].pos + a[h - 1].size > a[h].pos && (a[h - 1].size += a[h].size, a[h - 1].targets = a[h - 1].targets.concat(a[h].targets), a[h - 1].align = .5, a[h - 1].pos + a[h - 1].size > d && (a[h - 1].pos = d - a[h - 1].size), a.splice(h, 1), g = !0);
        }
      }

      m.push.apply(m, q);
      h = 0;
      a.some(function (a) {
        var b = 0;
        if (a.targets.some(function () {
          m[h].pos = a.pos + b;
          if (Math.abs(m[h].pos - m[h].target) > f) return m.slice(0, h + 1).forEach(function (a) {
            delete a.pos;
          }), m.reducedLen = (m.reducedLen || d) - .1 * d, m.reducedLen > .1 * d && c.distribute(m, d, f), !0;
          b += m[h].size;
          h++;
        })) return !0;
      });
      b(m, e);
    };

    p.prototype.drawDataLabels = function () {
      function a(a, b) {
        var c = b.filter;
        return c ? (b = c.operator, a = a[c.property], c = c.value, ">" === b && a > c || "<" === b && a < c || ">=" === b && a >= c || "<=" === b && a <= c || "==" === b && a == c || "===" === b && a === c ? !0 : !1) : !0;
      }

      function b(a, b) {
        var c = [],
            d;
        if (D(a) && !D(b)) c = a.map(function (a) {
          return C(a, b);
        });else if (D(b) && !D(a)) c = b.map(function (b) {
          return C(a, b);
        });else if (D(a) || D(b)) for (d = Math.max(a.length, b.length); d--;) {
          c[d] = C(a[d], b[d]);
        } else c = C(a, b);
        return c;
      }

      var f = this,
          e = f.chart,
          h = f.options,
          g = h.dataLabels,
          m = f.points,
          q,
          p = f.hasRendered || 0,
          k = c.animObject(h.animation).duration,
          t = Math.min(k, 200),
          n = !e.renderer.forExport && x(g.defer, 0 < t),
          u = e.renderer;
      g = b(b(e.options.plotOptions && e.options.plotOptions.series && e.options.plotOptions.series.dataLabels, e.options.plotOptions && e.options.plotOptions[f.type] && e.options.plotOptions[f.type].dataLabels), g);
      c.fireEvent(this, "drawDataLabels");

      if (D(g) || g.enabled || f._hasPointLabels) {
        var w = f.plotGroup("dataLabelsGroup", "data-labels", n && !p ? "hidden" : "inherit", g.zIndex || 6);
        n && (w.attr({
          opacity: +p
        }), p || setTimeout(function () {
          var a = f.dataLabelsGroup;
          a && (f.visible && w.show(!0), a[h.animation ? "animate" : "attr"]({
            opacity: 1
          }, {
            duration: t
          }));
        }, k - t));
        m.forEach(function (c) {
          q = z(b(g, c.dlOptions || c.options && c.options.dataLabels));
          q.forEach(function (b, d) {
            var k = b.enabled && (!c.isNull || c.dataLabelOnNull) && a(c, b),
                g = c.dataLabels ? c.dataLabels[d] : c.dataLabel,
                l = c.connectors ? c.connectors[d] : c.connector,
                q = x(b.distance, c.labelDistance),
                m = !g;

            if (k) {
              var t = c.getLabelConfig();
              var p = x(b[c.formatPrefix + "Format"], b.format);
              t = A(p) ? y(p, t, e.time) : (b[c.formatPrefix + "Formatter"] || b.formatter).call(t, b);
              p = b.style;
              var n = b.rotation;
              e.styledMode || (p.color = x(b.color, p.color, f.color, "#000000"), "contrast" === p.color && (c.contrastColor = u.getContrast(c.color || f.color), p.color = !A(q) && b.inside || 0 > q || h.stacking ? c.contrastColor : "#000000"), h.cursor && (p.cursor = h.cursor));
              var r = {
                r: b.borderRadius || 0,
                rotation: n,
                padding: b.padding,
                zIndex: 1
              };
              e.styledMode || (r.fill = b.backgroundColor, r.stroke = b.borderColor, r["stroke-width"] = b.borderWidth);
              F(r, function (a, b) {
                void 0 === a && delete r[b];
              });
            }

            !g || k && A(t) ? k && A(t) && (g ? r.text = t : (c.dataLabels = c.dataLabels || [], g = c.dataLabels[d] = n ? u.text(t, 0, -9999).addClass("highcharts-data-label") : u.label(t, 0, -9999, b.shape, null, null, b.useHTML, null, "data-label"), d || (c.dataLabel = g), g.addClass(" highcharts-data-label-color-" + c.colorIndex + " " + (b.className || "") + (b.useHTML ? " highcharts-tracker" : ""))), g.options = b, g.attr(r), e.styledMode || g.css(p).shadow(b.shadow), g.added || g.add(w), b.textPath && !b.useHTML && g.setTextPath(c.getDataLabelPath && c.getDataLabelPath(g) || c.graphic, b.textPath), f.alignDataLabel(c, g, b, null, m)) : (c.dataLabel = c.dataLabel && c.dataLabel.destroy(), c.dataLabels && (1 === c.dataLabels.length ? delete c.dataLabels : delete c.dataLabels[d]), d || delete c.dataLabel, l && (c.connector = c.connector.destroy(), c.connectors && (1 === c.connectors.length ? delete c.connectors : delete c.connectors[d])));
          });
        });
      }

      c.fireEvent(this, "afterDrawDataLabels");
    };

    p.prototype.alignDataLabel = function (a, b, c, e, h) {
      var d = this.chart,
          f = this.isCartesian && d.inverted,
          g = x(a.dlBox && a.dlBox.centerX, a.plotX, -9999),
          m = x(a.plotY, -9999),
          k = b.getBBox(),
          p = c.rotation,
          n = c.align,
          u = this.visible && (a.series.forceDL || d.isInsidePlot(g, Math.round(m), f) || e && d.isInsidePlot(g, f ? e.x + 1 : e.y + e.height - 1, f)),
          w = "justify" === x(c.overflow, "justify");

      if (u) {
        var l = d.renderer.fontMetrics(d.styledMode ? void 0 : c.style.fontSize, b).b;
        e = H({
          x: f ? this.yAxis.len - m : g,
          y: Math.round(f ? this.xAxis.len - g : m),
          width: 0,
          height: 0
        }, e);
        H(c, {
          width: k.width,
          height: k.height
        });
        p ? (w = !1, g = d.renderer.rotCorr(l, p), g = {
          x: e.x + c.x + e.width / 2 + g.x,
          y: e.y + c.y + {
            top: 0,
            middle: .5,
            bottom: 1
          }[c.verticalAlign] * e.height
        }, b[h ? "attr" : "animate"](g).attr({
          align: n
        }), m = (p + 720) % 360, m = 180 < m && 360 > m, "left" === n ? g.y -= m ? k.height : 0 : "center" === n ? (g.x -= k.width / 2, g.y -= k.height / 2) : "right" === n && (g.x -= k.width, g.y -= m ? 0 : k.height), b.placed = !0, b.alignAttr = g) : (b.align(c, null, e), g = b.alignAttr);
        w && 0 <= e.height ? this.justifyDataLabel(b, c, g, k, e, h) : x(c.crop, !0) && (u = d.isInsidePlot(g.x, g.y) && d.isInsidePlot(g.x + k.width, g.y + k.height));
        if (c.shape && !p) b[h ? "attr" : "animate"]({
          anchorX: f ? d.plotWidth - a.plotY : a.plotX,
          anchorY: f ? d.plotHeight - a.plotX : a.plotY
        });
      }

      u || (b.hide(!0), b.placed = !1);
    };

    p.prototype.justifyDataLabel = function (a, b, c, e, g, m) {
      var d = this.chart,
          f = b.align,
          h = b.verticalAlign,
          k = a.box ? 0 : a.padding || 0;
      var p = c.x + k;

      if (0 > p) {
        "right" === f ? (b.align = "left", b.inside = !0) : b.x = -p;
        var n = !0;
      }

      p = c.x + e.width - k;
      p > d.plotWidth && ("left" === f ? (b.align = "right", b.inside = !0) : b.x = d.plotWidth - p, n = !0);
      p = c.y + k;
      0 > p && ("bottom" === h ? (b.verticalAlign = "top", b.inside = !0) : b.y = -p, n = !0);
      p = c.y + e.height - k;
      p > d.plotHeight && ("top" === h ? (b.verticalAlign = "bottom", b.inside = !0) : b.y = d.plotHeight - p, n = !0);
      n && (a.placed = !m, a.align(b, null, g));
      return n;
    };

    g.pie && (g.pie.prototype.dataLabelPositioners = {
      radialDistributionY: function radialDistributionY(a) {
        return a.top + a.distributeBox.pos;
      },
      radialDistributionX: function radialDistributionX(a, b, c, e) {
        return a.getX(c < b.top + 2 || c > b.bottom - 2 ? e : c, b.half, b);
      },
      justify: function justify(a, b, c) {
        return c[0] + (a.half ? -1 : 1) * (b + a.labelDistance);
      },
      alignToPlotEdges: function alignToPlotEdges(a, b, c, e) {
        a = a.getBBox().width;
        return b ? a + e : c - a - e;
      },
      alignToConnectors: function alignToConnectors(a, b, c, e) {
        var d = 0,
            f;
        a.forEach(function (a) {
          f = a.dataLabel.getBBox().width;
          f > d && (d = f);
        });
        return b ? d + e : c - d - e;
      }
    }, g.pie.prototype.drawDataLabels = function () {
      var a = this,
          b = a.data,
          f,
          e = a.chart,
          g = a.options.dataLabels,
          m = g.connectorPadding,
          n,
          q = e.plotWidth,
          v = e.plotHeight,
          k = e.plotLeft,
          t = Math.round(e.chartWidth / 3),
          y,
          z = a.center,
          w = z[2] / 2,
          l = z[1],
          J,
          D,
          F,
          H,
          L = [[], []],
          M,
          G,
          N,
          Q,
          P = [0, 0, 0, 0],
          U = a.dataLabelPositioners,
          V;
      a.visible && (g.enabled || a._hasPointLabels) && (b.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
          width: "auto"
        }).css({
          width: "auto",
          textOverflow: "clip"
        }), a.dataLabel.shortened = !1);
      }), p.prototype.drawDataLabels.apply(a), b.forEach(function (a) {
        a.dataLabel && (a.visible ? (L[a.half].push(a), a.dataLabel._pos = null, !A(g.style.width) && !A(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > t && (a.dataLabel.css({
          width: .7 * t
        }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
      }), L.forEach(function (b, d) {
        var h = b.length,
            p = [],
            n;

        if (h) {
          a.sortByAngle(b, d - .5);

          if (0 < a.maxLabelDistance) {
            var t = Math.max(0, l - w - a.maxLabelDistance);
            var r = Math.min(l + w + a.maxLabelDistance, e.plotHeight);
            b.forEach(function (a) {
              0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, l - w - a.labelDistance), a.bottom = Math.min(l + w + a.labelDistance, e.plotHeight), n = a.dataLabel.getBBox().height || 21, a.distributeBox = {
                target: a.labelPosition.natural.y - a.top + n / 2,
                size: n,
                rank: a.y
              }, p.push(a.distributeBox));
            });
            t = r + n - t;
            c.distribute(p, t, t / 5);
          }

          for (Q = 0; Q < h; Q++) {
            f = b[Q];
            F = f.labelPosition;
            J = f.dataLabel;
            N = !1 === f.visible ? "hidden" : "inherit";
            G = t = F.natural.y;
            p && A(f.distributeBox) && (void 0 === f.distributeBox.pos ? N = "hidden" : (H = f.distributeBox.size, G = U.radialDistributionY(f)));
            delete f.positionIndex;
            if (g.justify) M = U.justify(f, w, z);else switch (g.alignTo) {
              case "connectors":
                M = U.alignToConnectors(b, d, q, k);
                break;

              case "plotEdges":
                M = U.alignToPlotEdges(J, d, q, k);
                break;

              default:
                M = U.radialDistributionX(a, f, G, t);
            }
            J._attr = {
              visibility: N,
              align: F.alignment
            };
            J._pos = {
              x: M + g.x + ({
                left: m,
                right: -m
              }[F.alignment] || 0),
              y: G + g.y - 10
            };
            F["final"].x = M;
            F["final"].y = G;
            x(g.crop, !0) && (D = J.getBBox().width, t = null, M - D < m && 1 === d ? (t = Math.round(D - M + m), P[3] = Math.max(t, P[3])) : M + D > q - m && 0 === d && (t = Math.round(M + D - q + m), P[1] = Math.max(t, P[1])), 0 > G - H / 2 ? P[0] = Math.max(Math.round(-G + H / 2), P[0]) : G + H / 2 > v && (P[2] = Math.max(Math.round(G + H / 2 - v), P[2])), J.sideOverflow = t);
          }
        }
      }), 0 === u(P) || this.verifyDataLabelOverflow(P)) && (this.placeDataLabels(), this.points.forEach(function (b) {
        V = C(g, b.options.dataLabels);

        if (n = x(V.connectorWidth, 1)) {
          var c;
          y = b.connector;

          if ((J = b.dataLabel) && J._pos && b.visible && 0 < b.labelDistance) {
            N = J._attr.visibility;
            if (c = !y) b.connector = y = e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + b.colorIndex + (b.className ? " " + b.className : "")).add(a.dataLabelsGroup), e.styledMode || y.attr({
              "stroke-width": n,
              stroke: V.connectorColor || b.color || "#666666"
            });
            y[c ? "attr" : "animate"]({
              d: b.getConnectorPath()
            });
            y.attr("visibility", N);
          } else y && (b.connector = y.destroy());
        }
      }));
    }, g.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (a) {
        var b = a.dataLabel,
            c;
        b && a.visible && ((c = b._pos) ? (b.sideOverflow && (b._attr.width = Math.max(b.getBBox().width - b.sideOverflow, 0), b.css({
          width: b._attr.width + "px",
          textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
        }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](c), b.moved = !0) : b && b.attr({
          y: -9999
        }));
        delete a.distributeBox;
      }, this);
    }, g.pie.prototype.alignDataLabel = n, g.pie.prototype.verifyDataLabelOverflow = function (a) {
      var b = this.center,
          c = this.options,
          e = c.center,
          g = c.minSize || 80,
          p = null !== c.size;

      if (!p) {
        if (null !== e[0]) var n = Math.max(b[2] - Math.max(a[1], a[3]), g);else n = Math.max(b[2] - a[1] - a[3], g), b[0] += (a[3] - a[1]) / 2;
        null !== e[1] ? n = Math.max(Math.min(n, b[2] - Math.max(a[0], a[2])), g) : (n = Math.max(Math.min(n, b[2] - a[0] - a[2]), g), b[1] += (a[0] - a[2]) / 2);
        n < b[2] ? (b[2] = n, b[3] = Math.min(m(c.innerSize || 0, n), n), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : p = !0;
      }

      return p;
    });
    g.column && (g.column.prototype.alignDataLabel = function (a, b, c, e, g) {
      var d = this.chart.inverted,
          f = a.series,
          h = a.dlBox || a.shapeArgs,
          m = x(a.below, a.plotY > x(this.translatedThreshold, f.yAxis.len)),
          k = x(c.inside, !!this.options.stacking);
      h && (e = C(h), 0 > e.y && (e.height += e.y, e.y = 0), h = e.y + e.height - f.yAxis.len, 0 < h && (e.height -= h), d && (e = {
        x: f.yAxis.len - e.y - e.height,
        y: f.xAxis.len - e.x - e.width,
        width: e.height,
        height: e.width
      }), k || (d ? (e.x += m ? 0 : e.width, e.width = 0) : (e.y += m ? e.height : 0, e.height = 0)));
      c.align = x(c.align, !d || k ? "center" : m ? "right" : "left");
      c.verticalAlign = x(c.verticalAlign, d || k ? "middle" : m ? "top" : "bottom");
      p.prototype.alignDataLabel.call(this, a, b, c, e, g);
      c.inside && a.contrastColor && b.css({
        color: a.contrastColor
      });
    });
  });
  N(H, "modules/overlapping-datalabels.src.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isArray,
        D = n.objectEach;
    n = c.Chart;
    var F = c.pick,
        z = c.addEvent,
        u = c.fireEvent;
    z(n, "render", function () {
      var c = [];
      (this.labelCollectors || []).forEach(function (n) {
        c = c.concat(n());
      });
      (this.yAxis || []).forEach(function (n) {
        n.options.stackLabels && !n.options.stackLabels.allowOverlap && D(n.stacks, function (n) {
          D(n, function (n) {
            c.push(n.label);
          });
        });
      });
      (this.series || []).forEach(function (n) {
        var u = n.options.dataLabels;
        n.visible && (!1 !== u.enabled || n._hasPointLabels) && n.points.forEach(function (n) {
          n.visible && (A(n.dataLabels) ? n.dataLabels : n.dataLabel ? [n.dataLabel] : []).forEach(function (m) {
            var p = m.options;
            m.labelrank = F(p.labelrank, n.labelrank, n.shapeArgs && n.shapeArgs.height);
            p.allowOverlap || c.push(m);
          });
        });
      });
      this.hideOverlappingLabels(c);
    });

    n.prototype.hideOverlappingLabels = function (c) {
      var n = this,
          z = c.length,
          x = n.renderer,
          m,
          p,
          g;

      var b = function b(a) {
        var b = a.box ? 0 : a.padding || 0;
        var c = 0;

        if (a && (!a.alignAttr || a.placed)) {
          var d = a.alignAttr || {
            x: a.attr("x"),
            y: a.attr("y")
          };
          var f = a.parentGroup;
          a.width || (c = a.getBBox(), a.width = c.width, a.height = c.height, c = x.fontMetrics(null, a.element).h);
          return {
            x: d.x + (f.translateX || 0) + b,
            y: d.y + (f.translateY || 0) + b - c,
            width: a.width - 2 * b,
            height: a.height - 2 * b
          };
        }
      };

      for (p = 0; p < z; p++) {
        if (m = c[p]) m.oldOpacity = m.opacity, m.newOpacity = 1, m.absoluteBox = b(m);
      }

      c.sort(function (a, b) {
        return (b.labelrank || 0) - (a.labelrank || 0);
      });

      for (p = 0; p < z; p++) {
        var a = (b = c[p]) && b.absoluteBox;

        for (m = p + 1; m < z; ++m) {
          var d = (g = c[m]) && g.absoluteBox;
          !a || !d || b === g || 0 === b.newOpacity || 0 === g.newOpacity || d.x > a.x + a.width || d.x + d.width < a.x || d.y > a.y + a.height || d.y + d.height < a.y || ((b.labelrank < g.labelrank ? b : g).newOpacity = 0);
        }
      }

      c.forEach(function (a) {
        var b;

        if (a) {
          var c = a.newOpacity;
          a.oldOpacity !== c && (a.alignAttr && a.placed ? (c ? a.show(!0) : b = function b() {
            a.hide(!0);
            a.placed = !1;
          }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b), u(n, "afterHideOverlappingLabels")) : a.attr({
            opacity: c
          }));
          a.isOld = !0;
        }
      });
    };
  });
  N(H, "parts/Interaction.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isArray,
        F = n.isObject,
        z = n.objectEach,
        u = c.addEvent;
    n = c.Chart;
    var H = c.createElement,
        y = c.css,
        C = c.defaultOptions,
        x = c.defaultPlotOptions,
        m = c.extend,
        p = c.fireEvent,
        g = c.hasTouch,
        b = c.Legend,
        a = c.merge,
        d = c.pick,
        f = c.Point,
        e = c.Series,
        h = c.seriesTypes,
        r = c.svg;
    var E = c.TrackerMixin = {
      drawTrackerPoint: function drawTrackerPoint() {
        var a = this,
            b = a.chart,
            c = b.pointer,
            d = function d(a) {
          var b = c.getPointFromEvent(a);
          void 0 !== b && (c.isDirectTouch = !0, b.onMouseOver(a));
        },
            e;

        a.points.forEach(function (a) {
          e = D(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [];
          a.graphic && (a.graphic.element.point = a);
          e.forEach(function (b) {
            b.div ? b.div.point = a : b.element.point = a;
          });
        });
        a._hasTracking || (a.trackerGroups.forEach(function (e) {
          if (a[e]) {
            a[e].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function (a) {
              c.onTrackerMouseOut(a);
            });
            if (g) a[e].on("touchstart", d);
            !b.styledMode && a.options.cursor && a[e].css(y).css({
              cursor: a.options.cursor
            });
          }
        }), a._hasTracking = !0);
        p(this, "afterDrawTracker");
      },
      drawTrackerGraph: function drawTrackerGraph() {
        var a = this,
            b = a.options,
            c = b.trackByArea,
            d = [].concat(c ? a.areaPath : a.graphPath),
            e = d.length,
            f = a.chart,
            h = f.pointer,
            l = f.renderer,
            m = f.options.tooltip.snap,
            n = a.tracker,
            u,
            x = function x() {
          if (f.hoverSeries !== a) a.onMouseOver();
        },
            y = "rgba(192,192,192," + (r ? .0001 : .002) + ")";

        if (e && !c) for (u = e + 1; u--;) {
          "M" === d[u] && d.splice(u + 1, 0, d[u + 1] - m, d[u + 2], "L"), (u && "M" === d[u] || u === e) && d.splice(u, 0, "L", d[u - 2] + m, d[u - 1]);
        }
        n ? n.attr({
          d: d
        }) : a.graph && (a.tracker = l.path(d).attr({
          visibility: a.visible ? "visible" : "hidden",
          zIndex: 2
        }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), f.styledMode || a.tracker.attr({
          "stroke-linejoin": "round",
          stroke: y,
          fill: c ? y : "none",
          "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * m)
        }), [a.tracker, a.markerGroup].forEach(function (a) {
          a.addClass("highcharts-tracker").on("mouseover", x).on("mouseout", function (a) {
            h.onTrackerMouseOut(a);
          });
          b.cursor && !f.styledMode && a.css({
            cursor: b.cursor
          });
          if (g) a.on("touchstart", x);
        }));
        p(this, "afterDrawTracker");
      }
    };
    h.column && (h.column.prototype.drawTracker = E.drawTrackerPoint);
    h.pie && (h.pie.prototype.drawTracker = E.drawTrackerPoint);
    h.scatter && (h.scatter.prototype.drawTracker = E.drawTrackerPoint);
    m(b.prototype, {
      setItemEvents: function setItemEvents(b, c, d) {
        var e = this,
            g = e.chart.renderer.boxWrapper,
            k = b instanceof f,
            h = "highcharts-legend-" + (k ? "point" : "series") + "-active",
            l = e.chart.styledMode;
        (d ? c : b.legendGroup).on("mouseover", function () {
          b.visible && e.allItems.forEach(function (a) {
            b !== a && a.setState("inactive", !k);
          });
          b.setState("hover");
          b.visible && g.addClass(h);
          l || c.css(e.options.itemHoverStyle);
        }).on("mouseout", function () {
          e.chart.styledMode || c.css(a(b.visible ? e.itemStyle : e.itemHiddenStyle));
          e.allItems.forEach(function (a) {
            b !== a && a.setState("", !k);
          });
          g.removeClass(h);
          b.setState();
        }).on("click", function (a) {
          var c = function c() {
            b.setVisible && b.setVisible();
            e.allItems.forEach(function (a) {
              b !== a && a.setState(b.visible ? "inactive" : "", !k);
            });
          };

          g.removeClass(h);
          a = {
            browserEvent: a
          };
          b.firePointEvent ? b.firePointEvent("legendItemClick", a, c) : p(b, "legendItemClick", a, c);
        });
      },
      createCheckboxForItem: function createCheckboxForItem(a) {
        a.checkbox = H("input", {
          type: "checkbox",
          className: "highcharts-legend-checkbox",
          checked: a.selected,
          defaultChecked: a.selected
        }, this.options.itemCheckboxStyle, this.chart.container);
        u(a.checkbox, "click", function (b) {
          p(a.series || a, "checkboxClick", {
            checked: b.target.checked,
            item: a
          }, function () {
            a.select();
          });
        });
      }
    });
    m(n.prototype, {
      showResetZoom: function showResetZoom() {
        function a() {
          b.zoomOut();
        }

        var b = this,
            c = C.lang,
            d = b.options.chart.resetZoomButton,
            e = d.theme,
            f = e.states,
            g = "chart" === d.relativeTo || "spaceBox" === d.relativeTo ? null : "plotBox";
        p(this, "beforeShowResetZoom", null, function () {
          b.resetZoomButton = b.renderer.button(c.resetZoom, null, null, a, e, f && f.hover).attr({
            align: d.position.align,
            title: c.resetZoomTitle
          }).addClass("highcharts-reset-zoom").add().align(d.position, !1, g);
        });
        p(this, "afterShowResetZoom");
      },
      zoomOut: function zoomOut() {
        p(this, "selection", {
          resetSelection: !0
        }, this.zoom);
      },
      zoom: function zoom(a) {
        var b = this,
            c,
            e = b.pointer,
            f = !1,
            g = b.inverted ? e.mouseDownX : e.mouseDownY;
        !a || a.resetSelection ? (b.axes.forEach(function (a) {
          c = a.zoom();
        }), e.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var d = a.axis,
              k = b.inverted ? d.left : d.top,
              h = b.inverted ? k + d.width : k + d.height,
              l = d.isXAxis,
              m = !1;
          if (!l && g >= k && g <= h || l || !A(g)) m = !0;
          e[l ? "zoomX" : "zoomY"] && m && (c = d.zoom(a.min, a.max), d.displayBtn && (f = !0));
        });
        var h = b.resetZoomButton;
        f && !h ? b.showResetZoom() : !f && F(h) && (b.resetZoomButton = h.destroy());
        c && b.redraw(d(b.options.chart.animation, a && a.animation, 100 > b.pointCount));
      },
      pan: function pan(a, b) {
        var c = this,
            d = c.hoverPoints,
            e;
        p(this, "pan", {
          originalEvent: a
        }, function () {
          d && d.forEach(function (a) {
            a.setState();
          });
          ("xy" === b ? [1, 0] : [1]).forEach(function (b) {
            b = c[b ? "xAxis" : "yAxis"][0];
            var d = b.horiz,
                f = a[d ? "chartX" : "chartY"];
            d = d ? "mouseDownX" : "mouseDownY";
            var g = c[d],
                k = (b.pointRange || 0) / 2,
                h = b.reversed && !c.inverted || !b.reversed && c.inverted ? -1 : 1,
                m = b.getExtremes(),
                n = b.toValue(g - f, !0) + k * h;
            h = b.toValue(g + b.len - f, !0) - k * h;
            var p = h < n;
            g = p ? h : n;
            n = p ? n : h;
            h = Math.min(m.dataMin, k ? m.min : b.toValue(b.toPixels(m.min) - b.minPixelPadding));
            k = Math.max(m.dataMax, k ? m.max : b.toValue(b.toPixels(m.max) + b.minPixelPadding));
            p = h - g;
            0 < p && (n += p, g = h);
            p = n - k;
            0 < p && (n = k, g -= p);
            b.series.length && g !== m.min && n !== m.max && (b.setExtremes(g, n, !1, !1, {
              trigger: "pan"
            }), e = !0);
            c[d] = f;
          });
          e && c.redraw(!1);
          y(c.container, {
            cursor: "move"
          });
        });
      }
    });
    m(f.prototype, {
      select: function select(a, b) {
        var c = this,
            e = c.series,
            f = e.chart;
        this.selectedStaging = a = d(a, !c.selected);
        c.firePointEvent(a ? "select" : "unselect", {
          accumulate: b
        }, function () {
          c.selected = c.options.selected = a;
          e.options.data[e.data.indexOf(c)] = c.options;
          c.setState(a && "select");
          b || f.getSelectedPoints().forEach(function (a) {
            var b = a.series;
            a.selected && a !== c && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options, a.setState(f.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"));
          });
        });
        delete this.selectedStaging;
      },
      onMouseOver: function onMouseOver(a) {
        var b = this.series.chart,
            c = b.pointer;
        a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);
        c.runPointActions(a, this);
      },
      onMouseOut: function onMouseOut() {
        var a = this.series.chart;
        this.firePointEvent("mouseOut");
        this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });
        a.hoverPoints = a.hoverPoint = null;
      },
      importEvents: function importEvents() {
        if (!this.hasImportedEvents) {
          var b = this,
              d = a(b.series.options.point, b.options).events;
          b.events = d;
          z(d, function (a, d) {
            c.isFunction(a) && u(b, d, a);
          });
          this.hasImportedEvents = !0;
        }
      },
      setState: function setState(a, b) {
        var c = this.series,
            e = this.state,
            f = c.options.states[a || "normal"] || {},
            g = x[c.type].marker && c.options.marker,
            h = g && !1 === g.enabled,
            l = g && g.states && g.states[a || "normal"] || {},
            n = !1 === l.enabled,
            q = c.stateMarkerGraphic,
            r = this.marker || {},
            v = c.chart,
            u = c.halo,
            y,
            z = g && c.markerAttribs;
        a = a || "";

        if (!(a === this.state && !b || this.selected && "select" !== a || !1 === f.enabled || a && (n || h && !1 === l.enabled) || a && r.states && r.states[a] && !1 === r.states[a].enabled)) {
          this.state = a;
          z && (y = c.markerAttribs(this, a));

          if (this.graphic) {
            e && this.graphic.removeClass("highcharts-point-" + e);
            a && this.graphic.addClass("highcharts-point-" + a);

            if (!v.styledMode) {
              var A = c.pointAttribs(this, a);
              var C = d(v.options.chart.animation, f.animation);
              c.options.inactiveOtherPoints && ((this.dataLabels || []).forEach(function (a) {
                a && a.animate({
                  opacity: A.opacity
                }, C);
              }), this.connector && this.connector.animate({
                opacity: A.opacity
              }, C));
              this.graphic.animate(A, C);
            }

            y && this.graphic.animate(y, d(v.options.chart.animation, l.animation, g.animation));
            q && q.hide();
          } else {
            if (a && l) {
              e = r.symbol || c.symbol;
              q && q.currentSymbol !== e && (q = q.destroy());
              if (y) if (q) q[b ? "animate" : "attr"]({
                x: y.x,
                y: y.y
              });else e && (c.stateMarkerGraphic = q = v.renderer.symbol(e, y.x, y.y, y.width, y.height).add(c.markerGroup), q.currentSymbol = e);
              !v.styledMode && q && q.attr(c.pointAttribs(this, a));
            }

            q && (q[a && this.isInside ? "show" : "hide"](), q.element.point = this);
          }

          a = f.halo;
          f = (q = this.graphic || q) && q.visibility || "inherit";
          a && a.size && q && "hidden" !== f ? (u || (c.halo = u = v.renderer.path().add(q.parentGroup)), u.show()[b ? "animate" : "attr"]({
            d: this.haloPath(a.size)
          }), u.attr({
            "class": "highcharts-halo highcharts-color-" + d(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""),
            visibility: f,
            zIndex: -1
          }), u.point = this, v.styledMode || u.attr(m({
            fill: this.color || c.color,
            "fill-opacity": a.opacity
          }, a.attributes))) : u && u.point && u.point.haloPath && u.animate({
            d: u.point.haloPath(0)
          }, null, u.hide);
          p(this, "afterSetState");
        }
      },
      haloPath: function haloPath(a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      }
    });
    m(e.prototype, {
      onMouseOver: function onMouseOver() {
        var a = this.chart,
            b = a.hoverSeries;
        if (b && b !== this) b.onMouseOut();
        this.options.events.mouseOver && p(this, "mouseOver");
        this.setState("hover");
        a.hoverSeries = this;
      },
      onMouseOut: function onMouseOut() {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;
        b.hoverSeries = null;
        if (d) d.onMouseOut();
        this && a.events.mouseOut && p(this, "mouseOut");
        !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
        b.series.forEach(function (a) {
          a.setState("", !0);
        });
      },
      setState: function setState(a, b) {
        var c = this,
            e = c.options,
            f = c.graph,
            g = e.inactiveOtherPoints,
            h = e.states,
            l = e.lineWidth,
            m = e.opacity,
            n = d(h[a || "normal"] && h[a || "normal"].animation, c.chart.options.chart.animation);
        e = 0;
        a = a || "";

        if (c.state !== a && ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) {
          b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a));
        }), c.state = a, !c.chart.styledMode)) {
          if (h[a] && !1 === h[a].enabled) return;
          a && (l = h[a].lineWidth || l + (h[a].lineWidthPlus || 0), m = d(h[a].opacity, m));
          if (f && !f.dashstyle) for (h = {
            "stroke-width": l
          }, f.animate(h, n); c["zone-graph-" + e];) {
            c["zone-graph-" + e].attr(h), e += 1;
          }
          g || [c.group, c.markerGroup, c.dataLabelsGroup, c.labelBySeries].forEach(function (a) {
            a && a.animate({
              opacity: m
            }, n);
          });
        }

        b && g && c.points && c.setAllPointsToState(a);
      },
      setAllPointsToState: function setAllPointsToState(a) {
        this.points.forEach(function (b) {
          b.setState && b.setState(a);
        });
      },
      setVisible: function setVisible(a, b) {
        var c = this,
            d = c.chart,
            e = c.legendItem,
            f = d.options.chart.ignoreHiddenSeries,
            g = c.visible;
        var h = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !g : a) ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (c[a]) c[a][h]();
        });
        if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
        e && d.legend.colorizeItem(c, a);
        c.isDirty = !0;
        c.options.stacking && d.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });
        c.linkedSeries.forEach(function (b) {
          b.setVisible(a, !1);
        });
        f && (d.isDirtyBox = !0);
        p(c, h);
        !1 !== b && d.redraw();
      },
      show: function show() {
        this.setVisible(!0);
      },
      hide: function hide() {
        this.setVisible(!1);
      },
      select: function select(a) {
        this.selected = a = this.options.selected = void 0 === a ? !this.selected : a;
        this.checkbox && (this.checkbox.checked = a);
        p(this, a ? "select" : "unselect");
      },
      drawTracker: E.drawTrackerGraph
    });
  });
  N(H, "parts/Responsive.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isArray,
        D = n.isObject,
        F = n.objectEach,
        z = n.splat;
    n = c.Chart;
    var u = c.pick;

    n.prototype.setResponsive = function (n, u) {
      var y = this.options.responsive,
          x = [],
          m = this.currentResponsive;
      !u && y && y.rules && y.rules.forEach(function (m) {
        void 0 === m._id && (m._id = c.uniqueKey());
        this.matchResponsiveRule(m, x);
      }, this);
      u = c.merge.apply(0, x.map(function (m) {
        return c.find(y.rules, function (c) {
          return c._id === m;
        }).chartOptions;
      }));
      u.isResponsiveOptions = !0;
      x = x.toString() || void 0;
      x !== (m && m.ruleIds) && (m && this.update(m.undoOptions, n, !0), x ? (m = this.currentOptions(u), m.isResponsiveOptions = !0, this.currentResponsive = {
        ruleIds: x,
        mergedOptions: u,
        undoOptions: m
      }, this.update(u, n, !0)) : this.currentResponsive = void 0);
    };

    n.prototype.matchResponsiveRule = function (c, n) {
      var y = c.condition;
      (y.callback || function () {
        return this.chartWidth <= u(y.maxWidth, Number.MAX_VALUE) && this.chartHeight <= u(y.maxHeight, Number.MAX_VALUE) && this.chartWidth >= u(y.minWidth, 0) && this.chartHeight >= u(y.minHeight, 0);
      }).call(this) && n.push(c._id);
    };

    n.prototype.currentOptions = function (c) {
      function n(c, p, g, b) {
        var a;
        F(c, function (c, f) {
          if (!b && -1 < u.collectionsWithUpdate.indexOf(f)) for (c = z(c), g[f] = [], a = 0; a < c.length; a++) {
            p[f][a] && (g[f][a] = {}, n(c[a], p[f][a], g[f][a], b + 1));
          } else D(c) ? (g[f] = A(c) ? [] : {}, n(c, p[f] || {}, g[f], b + 1)) : g[f] = void 0 === p[f] ? null : p[f];
        });
      }

      var u = this,
          x = {};
      n(c, this.options, x, 0);
      return x;
    };
  });
  N(H, "masters/highcharts.src.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = c.extend;
    A(c, {
      attr: n.attr,
      defined: n.defined,
      erase: n.erase,
      isArray: n.isArray,
      isClass: n.isClass,
      isDOMElement: n.isDOMElement,
      isNumber: n.isNumber,
      isObject: n.isObject,
      isString: n.isString,
      objectEach: n.objectEach,
      pInt: n.pInt,
      splat: n.splat
    });
    return c;
  });
  H["masters/highcharts.src.js"]._modules = H;
  return H["masters/highcharts.src.js"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.4.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a global context
    globalEval: function globalEval(code, options) {
      DOMEval(code, {
        nonce: options && options.nonce
      });
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // Support: Android <=4.0 only
    trim: function trim(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.4
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2019-04-08
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function funescape(_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"

      return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
      String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && rdescend.test(selector)) {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(","); // Expand context for sibling selectors

              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)


      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document


        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }

          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function CHILD(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (typeof elem.contentDocument !== "undefined") {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  var swap = function swap(elem, options, callback, args) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  }; // Support: IE <=9 only

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      // Make a writable jQuery.Event from the native event object
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;

      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  });
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    // Support: IE 9-11 only
    // Also use offsetWidth/offsetHeight for when box sizing is unreliable
    // We use getClientRects() to check for hidden/disconnected.
    // In those cases, the computed value can be trusted to be border-box


    if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = Date.now();
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url, options) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  }); // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=application-408c39d1191d41ed8fd3.js.map