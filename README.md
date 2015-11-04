# Key Mirror Namespaced

> Produces an enumerable with string literal values, each equal to the concatenation of it's ascendant keys.

This is especially useful for flux/redux implementations where namespaced action types can be in the form of property accessors, which can be referenced through dot notation.

```js
const keyMirror = require('key-mirror-namespaced');

const keyMirror({
  a: {
    b: {
      c: {
        d: null
      }
    }
  },
  e: null
})

keyMirror.a.b.c.d // 'a.b.c.d'
keyMirror.e // 'e'
```
