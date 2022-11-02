function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems ===null||allItems===undefined){
  return undefined
 }
 if(allItems.length===0||allItems.length<(currentPage-1)*rowsPerPage){  
   return []

 }
 if(rowsPerPage<=0||currentPage<=0){
  return allItems
 }
 return allItems.slice((currentPage-1)*rowsPerPage,currentPage*rowsPerPage)

}
const codeId='US1001'
function doSomething(){ return 'di it' }
module.exports = {getItemsOfCurrentPage ,codeId,doSomething}
//ฝึกหาปัญหา
//หาโจทย์มานั่งคิดวิธีการแก้ปัญหา-คิดแนวทางปัญหา