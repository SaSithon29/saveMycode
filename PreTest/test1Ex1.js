//Test1 EX 1

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {

    if (allItems === null || allItems === undefined){
       return undefined
      }
     
      
    if (rowsPerPage <0||rowsPerPage==0){
       return allItems
      }
  
    if(currentPage< 0 ||currentPage==0){
       return allItems
      }
  
    let nowPage=[]
    for (const items of allItems) {
      if(allItems.indexOf(items)>(currentPage*rowsPerPage) -rowsPerPage -1     //indexก่อนหน้าพอดี
  
      && allItems.indexOf(items)<(currentPage*rowsPerPage)) nowPage.push(items)
        
      //indexOf fine number of item
    }
    return nowPage
}