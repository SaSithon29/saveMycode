--- object : unordered collection
    ค้นหาข้อมูลด้วย Big o1 : ไม่ขึ้นกับ n=จำนวนข้อมูล ใช้เวลาเท่าเดิม
    เอา key เข้าไปหาก็จะเจอ
    เก็บ primitive ,object,function ได้
    Js:prototypeBase have top calss prototype : Object เป็นบรรพบุรุษทุก propotype

        prototypeBase กลไกในการจัดการ JS object(class property) & โครงสร้างข้อมูล (การสืบทอด)ที่ต่อเนื่องกัน
            prototype ถุงของ class ว่ามีอะไรบ้าง

--- simple object
// let stu = {
//     name: 'lol', age: 23, gender: 'male'
// }


--- object value is array
// let pro = {
//     id: 123, inter: ['music', 'skiing']
// }
// console.log(pro.inter) //=
// console.log(pro['inter'])
// pro.inter[pro.inter.length-1]='reading'
// console.log(pro['inter'])


--- aggregated  object
// let book = { 
//     isbn: 2345, 
//     title: 'JS', 
// author: { 
//     firstname: 'Umaporn', 
//     lastname: 'Sup' } }
// book.author.firstname='sasi'
// book.author.lastname='thon'
// console.log(book)



--- วิธีการสร้าง
-- object literal : dont have function

-- new operator to create object
-- constructor :special method use initial object 
            ถูกเรียกอัตโนมัติตอนที่ new constructor 
            หลัง()สามารถส่ง parametor ได้
// const per =new Object() //per={}
// const o =new Object(undefined) //o1={}
// const a =new Array() //a=[]
// const p1 =new point() //p1={x:0,y:0}
// const p2 =new point(10,20) //p2={x:10,y:20}
// console.log(p2.distance(p1)) 

-- สร้าง class เพื่อคลุม function ทั้งหมดไว้ เพื่อใช้codeเดียวกันได้ในหลาย object
    และใช้ new สร้าง object ทำงานเหมือนกัน
constructor ทำงานร่วมกับ new object และทำงานอยู่ใน class
ทุก class have prototype :keep property 

// class yuyu{
    // constructor(){
        // this.name='poo'
-- --this : keyword ที่ใช้แทน object ที่กำลังเรียก functionนั้นให้ทำงานอยู่ ; parametor ไม่แชร์กัน
    // }
// }

 - create object by 2.
// const you1 = new yuyu()
-- --this: keyword ที่เก็บ you1 ที่กำลังเรียก function yuyu
// const you2 = new yuyu()
-- --this: keyword ที่เก็บ you2 ที่กำลังเรียก function yuyu
// console.log(you1) //poo of you1
// console.log(you2) //poo of you2

// class yuy{
    // constructor(name){
    -- --  parameter of function parameter can set default
        // this.name=name
    -- --nameInyo1,2=nameParameter
    // }
// }
// const yo1 = new yuy('xx')
// const yo2 = new yuy('oo')
// console.log(yo1) //xx
// console.log(yo2) //oo

--- check prototype of class 
// console.log (Object.prototype.isPrototypeOf(yo1)) //true: Object is mainPrototype of object ที่สร้างขึ้น
// console.log (yuy.prototype.isPrototypeOf(yo1)) //true: yuy is subPrototype of object


--- สร้าง object.create() : can create object  ยืมโครงสร้าง object อื่นมาใช้ได้
    ==มีโครงสร้างของอีกและสามารถเติมของตัวเองใหม่ได้ด้วย
const o= Object.create({x:1,y:2})
const p= Object.create(o)
console.log(p) //{} show property ที่ได้สิทธิ์
p.x=o.x //p.x=1
p.y=5   //p.y=5
console.log(p)

------------------------------------------------------------------------
ข้อดีข้อเสีย
- literal

// let sq={
//  side:5,
//    area:function(){
//        return this.side*this.side
//    }
    //// == area(){ return this.side*this.side }
// }
//console.log(sq) //{ side: 5, area: [Function:area] }
// function in literal object == property area

let sq2={
//  side:3,
//    area:function(){
//        return this.side*this.side
//    }
    //// == area(){ return this.side*this.side }
// }
//console.log(sq1) //{ side: 3, area: [Function:area] }

---- ถ้าไม่ได้มีแต่value ต้องใช้อีกครั้งแต่เปลี่ยนตัวแปร=ต้องสร้างซ้ำอีก 
---- ถ้าต้องการแก้ไขต้องไปแก้ทีละ เกิดความซ้ำซ้อน

- class
