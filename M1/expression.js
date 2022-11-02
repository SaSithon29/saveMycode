//Expression นิพจน์ ให้ผลลัพธ์เป็น "ค่าหนึ่งเสมอ"
//simple_form อ้างถึง literal/variable หนึ่งตัว
//Assingment Statement : let result=expression



// //Conditional Operator ( ? Expression :Expression )
let num=6
let b=num%2===0?"even":"odd"

// ===
if(num%2===0){
    b="even"
}else {
    b="odd"
}
console.log(b)



//Optional chaining (?.) หลักใช้กับObject & Array DataType
//กันปัญหาการ show error when Object & Array is null/undefined
//ถ้าเป็น null/undefined จะreturn undefined ให้
let obj1={Name:'Sasi',ID: 201,Date:23}
let obj2
console.log(obj1)
console.log(obj2.ID) //Cannot read properties of undefined (reading 'ID')
console.log(obj2?.ID) //undefined

let arr1=[5,10,15]
let arr2
let arr3=null
console.log(arr1[0])
console.log(arr2?.[0]) //Cannot read properties of undefine //?. =undefined
console.log(arr3?.[0]) //?. =undefined



//Nullish Coalescing binary ต้องการ 2 operand
//if left not Null/Undefined > return left operand
                      //else > return right operand
let arr
let arr11=[5,10,15] 
let newArr =arr??[]
console.log(newArr) // []/empty array

let student={id:123,sex:"male"}
student.sex=student.sex?? 'N/A'
console.log(student.sex)



//Math 
// let a = Math.pow(5,2) //pow(base,power) //ยกกำลัง = 25

Math.random() //0 - <1 
//Math.floor((1)Math.random()*(2)(max-min+1)+(3)min))
console.log(Math.floor(Math.random()*((6-1+1)+1)))

Math.floor //ปัดลง
Math.ceil //ปัดขึ้น



//String เรียงตาม ASCII Table:ASCII code 
//         ; เปรียบเทียบกันได้จากตัวอักษรแรก