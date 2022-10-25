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
// function add (h1,h2){
//     return h1+h2
// }
// function Subtract (h1,h2){
//     return h1-h2
// }
// function Multiply (h1,h2){
//     return h1*h2
// }
// function Divide (h1,h2){
//     return h1/h2
// }

// 1. we can assign function to variable
// let sum=add //not let sum=add(10,20) 
// console.log(sum)
// console.log(typeof sum)
// console.log(sum(10,40))
// //function = can run

// let sum2=add(10,20) 
// //:()call function run > sum=Number 
// // ประมวลผลฟังก์ชันแล้วเอาค่าไปเก็บ
// console.log(sum2)
// console.log(typeof sum2)
// console.log(sum2(1,4)) //sum2 is not function




// //output:excute function:call function & send parameter
// console.log(add(10,20))
// console.log(Subtract(10,20))
// console.log(Multiply(10,20))
// console.log(Divide(10,20))


// 2. we can send function as parameter 
// ช่วยให้ขยายความสามารถของฟังก์ชันหลัก โดยไม่ต้องเมนเทน 
// แค่เปลี่ยน pr 3 ไปตาม function ที่ต้องการใช้งาน
// function calculator (n1,n2,op){
//     return op(n1,n2)
// }
// console.log(calculator(10,5,add)) //pr 3 is name of function  ที่ส่งมาเฉยๆ
// console.log(calculator(10,5,Subtract))
// console.log(calculator(10,5,Multiply))
// console.log(calculator(10,5,Divide))
// // parameter op=> function ; function(-,-);

//// 3. we can return function as a result of another function
// function saySomething(){
//     return 'Good Morning'  }
// function doSomething(){
//     return saySomething // return function
// } 
// let doIt =doSomething() //doIt=saySomething
// // look like: let sum=add
// console.log(doIt())

// // add is pr => return anything value
// function saySomething2(msg) {
//     return msg 
// }
// function doSomething2(){
//     return saySomething2 
// }
// let doIt2 =doSomething2() 
// console.log(doIt2('Hello Test'))
// console.log(doIt2('Pass Sure'))
// console.log(doIt2('Plz'))

