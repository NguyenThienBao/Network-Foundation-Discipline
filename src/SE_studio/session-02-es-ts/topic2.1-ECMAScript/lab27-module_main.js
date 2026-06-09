/**
 * * define main function (look like main.cpp in C Plus Plus)
 */

'use strict'
console.clear()

const {sayHi, response} = require('./lab26-module-sub')

sayHi()
console.log(response('This is data'))

const func = require('./lab27-module-calculate')

let a = 10
let b = 20

console.log(func.sum(a, b))
console.log(func.minus(a, b))
console.log(func.data)