// Type Conversions
// implicit conversion
const conv1 = 10 + ' rooms'
const conv2 = '4' * 5
const conv3 = 'a' - 2
const conv4 = !'Hello'
console.log(conv1)
console.log(conv2)
console.log(conv3)
console.log(conv4)
console.log('---------------')
console.log('---------------')

console.log('explicit conversion')
// to Number type
console.log(Number('3'))
console.log(Number('-3'))
console.log(Number('1.5'))
console.log(Number(''))
console.log(Number(true))
console.log(Number(false))
console.log(Number(undefined))
console.log(Number(null))
console.log('---------------')
//to String type
console.log("true"+String(true))
console.log("false"+String(false))
console.log("-5"+String(-5))
console.log("1"+String(1))
console.log("0"+String(0))
console.log("undefined"+String(undefined))
console.log("null"+String(null))
console.log('---------------')
//to Boolean type
console.log("'abc'" + Boolean('abc'))
console.log("''"+ Boolean(''))
console.log('0'+Boolean(0))
console.log('1'+ Boolean(1))
console.log('[]'+Boolean([]))
console.log('[1]'+Boolean([1]))
console.log("['a']" + Boolean(['a']))
console.log('undefined'+ Boolean(undefined))
console.log('null'+ Boolean(null))