<a name="module_ifnotundef"></a>

## ifnotundef
[![GitHub version](https://badge.fury.io/gh/pouc%2Fifnotundef.svg)](https://badge.fury.io/gh/pouc%2Fifnotundef)[![npm version](https://badge.fury.io/js/ifnotundef.svg)](https://badge.fury.io/js/ifnotundef)[![NPM monthly downloads](https://img.shields.io/npm/dm/ifnotundef.svg?style=flat)](https://npmjs.org/package/ifnotundef)[![Build Status](https://travis-ci.org/pouc/ifnotundef.svg?branch=master)](https://travis-ci.org/pouc/ifnotundef)[![Coverage Status](https://coveralls.io/repos/github/pouc/ifnotundef/badge.svg?branch=master)](https://coveralls.io/github/pouc/ifnotundef?branch=master)A set of helper functions that simplify the (is a undefined ? b : c) syntax

**Author:** Lo&iuml;c Formont  
**License**: MIT Licensed  
**Example**  
```javascriptvar undef = require("ifnotundef");```

* [ifnotundef](#module_ifnotundef)
    * [.if(a, b, [c])](#module_ifnotundef.if) ⇒ <code>\*</code>
    * [.check(a, b)](#module_ifnotundef.check) ⇒ <code>boolean</code>
    * [.try(a, [b])](#module_ifnotundef.try) ⇒ <code>\*</code>
    * [.child(a, b, c, [d])](#module_ifnotundef.child) ⇒ <code>\*</code>

<a name="module_ifnotundef.if"></a>

### undef.if(a, b, [c]) ⇒ <code>\*</code>
Two parameters mode If a is undefined, return b else aThree parameters mode If a is undefined, return c else b

**Kind**: static method of <code>[ifnotundef](#module_ifnotundef)</code>  
**Returns**: <code>\*</code> - a, b or c depending on their undefined status  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | the first parameter |
| b | <code>\*</code> | the second parameter |
| [c] | <code>\*</code> | the third parameter |

**Example**  
Two ways to use if. Either with two parameters (a||b):```javascriptvar myHost = undef.if(options.host, options.hostname);```or with three parameters (a?b:c):```javascriptvar myHost = undef.if(options.host, options.hostname, 'localhost');```
<a name="module_ifnotundef.check"></a>

### undef.check(a, b) ⇒ <code>boolean</code>
One parameters mode If a is undefined, false else trueTwo parameters mode If a[b] is undefined, throw b else return a

**Kind**: static method of <code>[ifnotundef](#module_ifnotundef)</code>  
**Returns**: <code>boolean</code> - a or a[b]'s undefined status  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | the variable to check |
| b | <code>\*</code> | the child path |

**Example**  
```javascriptif(undef.check(options.host)) console.log('Deal with it');```
<a name="module_ifnotundef.try"></a>

### undef.try(a, [b]) ⇒ <code>\*</code>
One parameters mode If a is undefined, throw a else return aTwo parameters mode If a is undefined, throw b else return a

**Kind**: static method of <code>[ifnotundef](#module_ifnotundef)</code>  
**Returns**: <code>\*</code> - a or exception depending on a's undefined status  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | the parameter to try |
| [b] | <code>\*</code> | the error message |

**Example**  
Two ways to use if. Either with one parameter:```javascriptvar myHost = undef.try(options.host);```or with two parameters:```javascriptvar myUndefined = undef.try(undefined, 'undefined is not defined ... ;-)');// Exeption raised above```
<a name="module_ifnotundef.child"></a>

### undef.child(a, b, c, [d]) ⇒ <code>\*</code>
Three parameters mode If a[b] is undefined, return c else a[b]Four parameters mode If a[b] is undefined, return d else c

**Kind**: static method of <code>[ifnotundef](#module_ifnotundef)</code>  
**Returns**: <code>\*</code> - a[b] or c or d depending on their undefined status  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | the object |
| b | <code>\*</code> | the child path |
| c | <code>\*</code> | the first value |
| [d] | <code>\*</code> | the second value |

**Example**  
Two ways to use child. Either with three parameters (a[b]||c):```javascriptvar myHost = undef.child(options, ['params', 'host'], 'localhost');```or with four parameters (a[b]?c:d):```javascriptvar myHost = undef.child(options, ['params'], options.params.host, 'localhost');```
