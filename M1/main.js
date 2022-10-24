// // Synchronous Program บนลงล่าง ผิด1บรรทัด หยุดอ่านแจ้งerror
// งานก่อนหน้าต้องเสร็จก่อน
//  console.log('INT201')
//  console.log('Vanila JavaScript')
//  console.log('Section 1')
//  console.log('Good Bye')


// // Asynchronous Program 
// console.log('INT201')
// console.log('Vanila JavaScript')
// setTimeout(function cd(){
// console.log('Section 1')
// },5000)
// // setTimeout(function,millisecond)
// console.log('Good Bye')


// function JS is First-class citizens 
//function name 
function add (h1,h2){
    return h1+h2
}
function Subtract (h1,h2){
    return h1-h2
}
function Multiply (h1,h2){
    return h1*h2
}
function Divide (h1,h2){
    return h1/h2
}

// 1. we can assign function to variable
let sum=add //not let sum=add(10,20) 
console.log(sum)
console.log(typeof sum)
console.log(sum(10,40))
//function = can run

let sum2=add(10,20) 
//:()call function run > sum=Number 
// ประมวลผลฟังก์ชันแล้วเอาค่าไปเก็บ
console.log(sum2)
console.log(typeof sum2)
console.log(sum2(1,4))




// //output:excute function:call function & send parameter
// console.log(add(10,20))
// console.log(Subtract(10,20))
// console.log(Multiply(10,20))
// console.log(Divide(10,20))