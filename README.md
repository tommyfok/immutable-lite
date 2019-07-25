# immutable-lite

> 非常简单的，用于禁止用户（通常是低权限用户）修改对象或其属性的工具

## install

`npm install -S immutable-lite`

## use

```javascript
const immutable = require('immutable-lite')

// make the entire object immutable
immutable({
    obj: myObj
})

// make the entire object immutable, deeply
immutable({
    obj: myObj,
    deep: true
})

// make the prop "immu" of object immutable
immutable({
    obj: myObj,
    key: 'immu'
})

// make the prop "immu" of object immutable, deeply
immutable({
    obj: myObj,
    key: 'immu',
    deep: true
})
```
