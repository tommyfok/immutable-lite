function immutable({
    obj,
    key,
    deep = false
}) {
    if (key && key in obj) {
        _immu(obj, key, deep)
    } else {
        for (let k in obj) {
            _immu(obj, k, deep)
        }
    }
}

function _immu(o, k, deep) {
    if (deep === true) {
        if (isArr(o[k])) {
            o[k].forEach(item => {
                immutable({
                    obj: item,
                    deep
                })
            })
        } else if (isObj(o[k])) {
            immutable({
                obj: o[k],
                deep
            })
        }
    }
    Object.defineProperty(o, k, {
        configurable: false,
        writable: false
    })
}

function isObj(obj) {
    return Object.prototype.toString.call(obj).split(' ')[1].replace(']', '') === 'Object'
}

function isArr(arr) {
    return Array.isArray(arr)
}

module.exports = immutable
