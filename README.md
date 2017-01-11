<a name="module_ifnotundef"></a>

## ifnotundef
A set of helper functions that simplify the (is a undefined ? b : c) syntax

**Author:** Loic Formont  
**License**: MIT Licensed  
**Copyright**: Copyright (C) 2017 Loic Formont  
**Example**  
```javascript

* [ifnotundef](#module_ifnotundef)
    * [.if(a, b, [c])](#module_ifnotundef.if) ⇒ <code>\*</code>
    * [.child(a, b, c, [d])](#module_ifnotundef.child) ⇒ <code>\*</code>

<a name="module_ifnotundef.if"></a>

### undef.if(a, b, [c]) ⇒ <code>\*</code>
Two parameters mode

**Kind**: static method of <code>[ifnotundef](#module_ifnotundef)</code>  
**Returns**: <code>\*</code> - a, b or c depending on their undefined status  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | the first parameter |
| b | <code>\*</code> | the second parameter |
| [c] | <code>\*</code> | the third parameter |

**Example**  
Two ways to use if. Either with two parameters (a||b):
<a name="module_ifnotundef.child"></a>

### undef.child(a, b, c, [d]) ⇒ <code>\*</code>
Three parameters mode

**Kind**: static method of <code>[ifnotundef](#module_ifnotundef)</code>  
**Returns**: <code>\*</code> - a[b] or c or d depending on their undefined status  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | the object |
| b | <code>\*</code> | the child path |
| c | <code>\*</code> | the first value |
| [d] | <code>\*</code> | the second value |

**Example**  
Two ways to use child. Either with three parameters (a[b]||c):