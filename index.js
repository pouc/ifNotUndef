
/**
 * A set of helper functions that simplify the (is a undefined ? b : c) syntax
 * @namespace
 */
module.exports = {
	
	/**
     * Two parameters mode
     *  If a is undefined, return b else a
     * Three parameters mode
     *  If a is undefined, return c else b
     *
     * @example
     * Two ways to use ifNotUndef. Either with two parameters (a||b):
     *
     * ```javascript
     * var myHost = utils.Core.ifNotUndef(options.host, options.hostname);
     * ```
     *
     * or with three parameters (a?b:c):
     *
     * ```javascript
     * var myHost = utils.Core.ifNotUndef(options.host, options.hostname, 'localhost');
     * ```
     *
     * @param {*} a the first parameter
     * @param {*} b the second parameter
     * @param {*=} c the third parameter
     * @returns {*} a, b or c depending on their undefined status
     */
    ifNotUndef: function(a, b, c) {

        return (arguments.length <= 2) ?
            ((typeof a != 'undefined' && a != null) ? a : b) :  // 2 arguments mode: return b if a is undefined else return a
            ((typeof a != 'undefined' && a != null) ? b : c);   // 3 arguments mode: return c if a is undefined else return b

    },

    /**
     * Three parameters mode
     *  If a[b] is undefined, return c else a[b]
     * Four parameters mode
     *  If a[b] is undefined, return d else c
     *
     * @example
     * Two ways to use ifChildNotUndef. Either with three parameters (a[b]||c):
     *
     * ```javascript
     * var myHost = utils.Core.ifChildNotUndef(options, ['params', 'host'], 'localhost');
     * ```
     *
     * or with four parameters (a[b]?c:d):
     *
     * ```javascript
     * var myHost = utils.Core.ifChildNotUndef(options, ['params'], options.params.host, 'localhost');
     * ```
     *
     * @param {*} a the object
     * @param {*} a the children
     * @param {*} c the first value
     * @param {*=} d the second value
     * @returns {*} a[b] or c or d depending on their undefined status
     */
    ifChildNotUndef: function(a, b, c, d) {

        var mb = b;

        if (typeof b === 'undefined') {
            mb = [];
        }

        if (!Array.isArray(mb)) {
            mb = [mb];
        }

        if (arguments.length <= 3 && mb.length == 0) {
			return exports.Core.ifNotUndef(a, c);
		}
        else if (arguments.length > 3 && mb.length == 0) {
			return exports.Core.ifNotUndef(a, c, d);
		}
        else if (arguments.length <= 3 && typeof a !== 'undefined' && a != null && a.hasOwnProperty(mb[0])) {
			return exports.Core.ifChildNotUndef(a[mb[0]], mb.slice(1), c);
		}
        else if (arguments.length > 3 && typeof a !== 'undefined' && a != null && a.hasOwnProperty(mb[0])) {
			return exports.Core.ifChildNotUndef(a[mb[0]], mb.slice(1), c, d);
		}
        else if (arguments.length <= 3) {
			return c;
		}
        else if (arguments.length > 3) {
			return d;
		}
    }
	
}