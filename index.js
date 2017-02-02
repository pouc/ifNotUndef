var dotProp = require('dot-prop');

var exports = {};

/**
 *
 * [![GitHub version](https://badge.fury.io/gh/pouc%2Fifnotundef.svg)](https://badge.fury.io/gh/pouc%2Fifnotundef)
 * [![npm version](https://badge.fury.io/js/ifnotundef.svg)](https://badge.fury.io/js/ifnotundef)
 * [![NPM monthly downloads](https://img.shields.io/npm/dm/ifnotundef.svg?style=flat)](https://npmjs.org/package/ifnotundef)
 * [![Build Status](https://travis-ci.org/pouc/ifnotundef.svg?branch=master)](https://travis-ci.org/pouc/ifnotundef)
 * [![Coverage Status](https://coveralls.io/repos/github/pouc/ifnotundef/badge.svg?branch=master)](https://coveralls.io/github/pouc/ifnotundef?branch=master)
 *
 * A set of helper functions that simplify the (is a undefined ? b : c) syntax
 *
 * @module ifnotundef
 * @typicalname undef
 * @author Lo&iuml;c Formont
 *
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
        (exports.check(a) ? a : b) :  // 2 arguments mode: return b if a is undefined else return a
        (exports.check(a) ? b : c);   // 3 arguments mode: return c if a is undefined else return b

};

/**
 * Invert of "check"
 *
 * @example
 *
 * ```javascript
 * if(undef.is(options.host)) console.log('Deal with it');
 * ```
 *
 * @param {*} a the variable to check
 * @param {*} b the child path
 * @returns {boolean} a or a[b]'s undefined status
 */
exports.is = function(a, b) {

    return !exports.check(a, b);

};

/**
 * Alias of "check"
 *
 * @example
 *
 * ```javascript
 * if(undef.isnot(options.host)) console.log('Great');
 * ```
 *
 * @param {*} a the variable to check
 * @param {*} b the child path
 * @returns {boolean} a or a[b]'s undefined status
 */
exports.isnot = function(a, b) {

    return exports.check(a, b);

};

/**
 * One parameters mode
 *  If a is undefined, false else true
 * Two parameters mode
 *  If a[b] is undefined, false else true
 *
 * @example
 *
 * ```javascript
 * if(!undef.check(options.host)) console.log('Deal with it');
 * ```
 *
 * @param {*} a the variable to check
 * @param {*} b the child path
 * @returns {boolean} a or a[b]'s undefined status
 */
exports.check = function(a, b) {

    if (arguments.length == 1) {

        return (typeof a != 'undefined' && a != null);

    } else {

        var mb = b;

        if (typeof b === 'undefined') {
            mb = [];
        }

        if (!Array.isArray(mb)) {
            mb = [mb];
        }

        if (mb.length == 0) {
            return exports.check(a);
        } else {
            return exports.check(a) && exports.check(dotProp.get(a, mb));
        }

    }

};

/**
 * One parameters mode
 *  If a is undefined, throw a else return a
 * Two parameters mode
 *  If a is undefined, throw b else return a
 *
 * @example
 * Two ways to use if. Either with one parameter:
 *
 * ```javascript
 * var myHost = undef.try(options.host);
 * ```
 *
 * or with two parameters:
 *
 * ```javascript
 * var myUndefined = undef.try(undefined, 'undefined is not defined ... ;-)');
 * // Exeption raised above
 * ```
 *
 * @param {*} a the parameter to try
 * @param {*=} b the error message
 * @returns {*} a or exception depending on a's undefined status
 */
exports.try = function(a, b) {

    if (exports.isnot(a)) return a;
    if (arguments.length == 1) throw new TypeError('undefined');
    throw new TypeError(b);

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

    if (arguments.length <= 3) {

        if (mb.length == 0) {
            return exports.if(a, c);
        } else if (!exports.is(a, mb)) {
            return dotProp.get(a, mb);
        } else {
            return c;
        }

    } else {

        if (mb.length == 0) {
            return exports.if(a, c, d);
        } else if (!exports.is(a, mb)) {
            return c;
        } else {
            return d;
        }

    }

};

