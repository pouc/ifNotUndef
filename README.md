<a name="module_ifnotundef"></a>

## ifnotundef
[![Build Status](https://travis-ci.org/pouc/ifnotundef.svg?branch=master)](https://travis-ci.org/pouc/ifnotundef)[![Dependency Status](https://gemnasium.com/badges/github.com/pouc/ifnotundef.svg)](https://gemnasium.com/github.com/pouc/ifnotundef)[![Coverage Status](https://coveralls.io/repos/github/pouc/ifnotundef/badge.svg?branch=master)](https://coveralls.io/github/pouc/ifnotundef?branch=master)A set of helper functions that simplify the (is a undefined ? b : c) syntax

**Author:** Lo&iuml;c Formont  
**License**: MIT Licensed  
**Example**  
```javascriptvar undef = require("ifnotundef");```

* [ifnotundef](#module_ifnotundef)
    * [.if(a, b, [c])](#module_ifnotundef.if) ⇒ <code>\*</code>
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
