// // Primitive
// //NumBer รวมที่เป็นทศนิยม
// let num1 =100
// let num2=20.25
// //แนะนำใช้ทางการเงิน bigInt =(NUMBER)n
// let num3=1n
// console.log(typeof num1)
// console.log(typeof num2)


// // String
// let str1='Hello'
// let str2="Hello"
//    //backticks ข้อดี แสดงข้อความ String ร่วม variableตัวแปรได้ด้วยผ่าน ${} แสดงString ร่วม variable
// let str3=`Hello with ${str1}`
// console.log(str1)
// console.log(str2)
// console.log(str3)

// //String = Array of character
// let str='Hello Servlet'
// console.log(str[1])



// //Boolean
// let isHoliday = true
// let absent = false
// console.log(typeof isHoliday)
// console.log(absent)


// //Symbol property key ที่อาจจะใช้ร่วมหลายงาน 
// //คีย์ String เปลี่ยนเมื่อใส่ = ความหมายเปลี่ยน กลายเป็นคนละค่า
// let sym1=Symbol('id')
// let sym2=Symbol('id')
// console.log(typeof sym1)
// console.log(sym2)
// console.log(sym1==sym2) //false


// // Nullเดี๋ยวมีค่า รอค่า=unKnown
// let unknownObj=null
// console.log(typeof unknownObj)//type Object
// console.log(unknownObj)  // content null
//                         // null=object
// if(unknownObj === null) 
//     console.log('unknowNuller')


// // // undefined ไม่มีค่าอะไรเลย=unAssinge
// let unAssingedObj
// console.log(typeof unAssingedObj) //type String undefined
// console.log(unAssingedObj) //content undefined
// if(typeof unAssingedObj === 'undefined') //String ''
//     console.log('unknowVar')
// if( unAssingedObj === undefined) //String ''
//     console.log('unknowVar content')


//Object

// // Object {} is a collection of property
//     //1 property contain(มี) key and value
// let student={stusentId:64130500001,name:'Sasithon'} 
//             // {key: value,key: value}
// console.log(typeof student)
// console.log(student)


// Array Object [] is collection of elements ,index begin:0 end:length-1
    //property of Array important is .Length
//let students=['stusentId:64130500001','name:Sasithon','BD:29052002']
            // ['Item' , 'Item']
// console.log(typeof students) //type Object
// console.log(students)
// console.log(students.length) //if 0 = empty
//console.log(students.length-1)
// console.log(`the first students history is ${students[0]}`)
// console.log(`the last students history is ${students[students.length-1]}`)

