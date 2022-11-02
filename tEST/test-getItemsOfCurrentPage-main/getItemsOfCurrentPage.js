const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
// กรณี allItems เป็น null หรือ undefined ให้ return เป็น undefined
  if(allItems ===null||allItems===undefined){
  return undefined
 }
// กรณี คำนวณแล้วไม่มีจำนวน items ของ page ที่ระบุ หรือ กรณี allItems เป็น empty array 
// [ ] ให้ return เป็น empty array [ ]


 if(allItems.length===0||allItems.length<(currentPage-1)*rowsPerPage){ 
  //(currentPage-1) จำนวนไอเทมของหน้าก่อนหน้า
  return []
   // const itemsOnCurrentPage=allItems.slice(rowsPerPage*(currentPage-1), 
  // rowsPerPage*currentPage)
  // return itemsOnCurrentPage.length===0?[]:itemsOnCurrentPage

 }


//  กรณี rowsPerPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems 
// || กรณี currentPage เป็น 0 หรือ เป็นตัวเลขติดลบ ให้ return allItems
 if(rowsPerPage<=0||currentPage<=0){
  return allItems
 }
 return allItems.slice((currentPage-1)*rowsPerPage,currentPage*rowsPerPage)
 //slice(startArray,endArray)

}
module.exports = getItemsOfCurrentPage
//ฝึกหาปัญหา
//หาโจทย์มานั่งคิดวิธีการแก้ปัญหา-คิดแนวทางปัญหา