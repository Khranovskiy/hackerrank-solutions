/* eslint max-len: ["error", { "ignoreComments": true }] */
/* eslint func-style: ["error", "declaration", { "allowArrowFunctions": true }] */
'use strict'

// http://raganwald.com/2017/04/10/foldl-foldr.html
// http://matthewodette.com/map-filter-and-fold-in-javascript

const waterfall = (...functions) => (callback, ...args) =>
    functions.reduceRight(
        (composition, fn) => (...results) => fn(composition, ...results),
        callback
    )(...args)

const randInt = max => Math.floor(Math.random() * max)

const add5 = (callback, x) => {
    setTimeout(callback, randInt(1000), x + 5)
}
const mult3 = (callback, x) => {
    setTimeout(callback, randInt(1000), x * 3)
}
const sub2 = (callback, x) => {
    setTimeout(callback, randInt(1000), x - 2)
}
const split = (callback, x) => {
    setTimeout(callback, randInt(1000), x, x)
}
const add = (callback, x, y) => {
    setTimeout(callback, randInt(1000), x + y)
}
const div4 = (callback, x) => {
    setTimeout(callback, randInt(1000), x / 4)
}

const computation = waterfall(add5, mult3, sub2, split, add, div4)
computation(console.log, 5) // -> 14

const computation2 = (input, cb) => {
    const f6 = x => div4(cb, x)
    const f5 = (x, y) => add(f6, x, y)
    const f4 = x => split(f5, x)
    const f3 = x => sub2(f4, x)
    const f2 = x => mult3(f3, x)
    add5(f2, input)

    // Production steps of ECMA-262, Edition 5, 15.4.4.22
    // Reference: http://es5.github.io/#x15.4.4.22
    /* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
    if (typeof Array.prototype.reduceRight !== 'function') {
        Array.prototype.reduceRight = function (callback, ...args) {
            if (this === null || typeof this === 'undefined') {
                throw new TypeError('Array.prototype.reduce called on null or undefined')
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function')
            }
            let t = Object(this)
            let len = t.length >>> 0
            let k = len - 1
            let value
            if (args.length >= 2) {
                value = args[1]
            } else {
                while (k >= 0 && !(k in t)) {
                    k--
                }
                if (k < 0) {
                    throw new TypeError('Reduce of empty array with no initial value')
                }
                value = t[k--]
            }
            for (; k >= 0; k--) {
                if (k in t) {
                    value = callback(value, t[k], k, t)
                }
            }
            return value
        }
    }
}

computation2(console.log, 5) // -> 14
