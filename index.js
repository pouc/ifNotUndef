var exports = {};

/**
 *
 * [![Build Status](https://travis-ci.org/pouc/ifnotundef.svg?branch=master)](https://travis-ci.org/pouc/ifnotundef)
 * [![Coverage Status](https://coveralls.io/repos/github/pouc/ifnotundef/badge.svg?branch=master)](https://coveralls.io/github/pouc/ifnotundef?branch=master)
 *
 * A set of helper functions that simplify the (is a undefined ? b : c) syntax
 *
 * @module ifnotundef
 * @typicalname undef
 * @author Loïc Formont
 *
 * @copyright Copyright (C) 2017 Loic Formont
 * @license MIT Licensed
 *
 * @example
 * ```javascript
 * var undef = require("ifnotundef");
 * ```
 */
module.exports = exports;

/**
 * Two parameters mode
 *  If a is undefined, return b else a
 * Three parameters mode
 *  If a is undefined, return c else b
 *
 * @example
 * Two ways to use if. Either with two parameters (a||b):
 *
 * ```javascript
 * var myHost = undef.if(options.host, options.hostname);
 * ```
 *
 * or with three parameters (a?b:c):
 *
 * ```javascript
 * var myHost = undef.if(options.host, options.hostname, 'localhost');
 * ```
 *
 * @param {*} a the first parameter
 * @param {*} b the second parameter
 * @param {*=} c the third parameter
 * @returns {*} a, b or c depending on their undefined status
 */
exports.if = function(a, b, c) {

    return (arguments.length <= 2) ?
        ((typeof a != 'undefined' && a != null) ? a : b) :  // 2 arguments mode: return b if a is undefined else return a
        ((typeof a != 'undefined' && a != null) ? b : c);   // 3 arguments mode: return c if a is undefined else return b

};

/**
 * Three parameters mode
 *  If a[b] is undefined, return c else a[b]
 * Four parameters mode
 *  If a[b] is undefined, return d else c
 *
 * @example
 * Two ways to use child. Either with three parameters (a[b]||c):
 *
 * ```javascript
 * var myHost = undef.child(options, ['params', 'host'], 'localhost');
 * ```
 *
 * or with four parameters (a[b]?c:d):
 *
 * ```javascript
 * var myHost = undef.child(options, ['params'], options.params.host, 'localhost');
 * ```
 *
 * @param {*} a the object
 * @param {*} b the child path
 * @param {*} c the first value
 * @param {*=} d the second value
 * @returns {*} a[b] or c or d depending on their undefined status
 */
exports.child = function(a, b, c, d) {

    var mb = b;

    if (typeof b === 'undefined') {
        mb = [];
    }

    if (!Array.isArray(mb)) {
        mb = [mb];
    }

    if (arguments.length <= 3 && mb.length == 0) {
        return exports.if(a, c);
    } else if (arguments.length > 3 && mb.length == 0) {
        return exports.if(a, c, d);
    } else if (arguments.length <= 3 && typeof a !== 'undefined' && a != null && a.hasOwnProperty(mb[0])) {
        return exports.child(a[mb[0]], mb.slice(1), c);
    } else if (arguments.length > 3 && typeof a !== 'undefined' && a != null && a.hasOwnProperty(mb[0])) {
        return exports.child(a[mb[0]], mb.slice(1), c, d);
    } else if (arguments.length <= 3) {
        return c;
    } else if (arguments.length > 3) {
        return d;
    }

};

