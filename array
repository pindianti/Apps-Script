function YAJ_Date() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  var cell = ss.getRange('C2');
  var col = cell.getColumn();
  if(cell.getFormula() !== ""){
      var destination = ss.getRange(2,col,ss.getLastRow()-1,1);
      cell.copyTo(destination);
  }
}
 
//opsional, karena bisa ditrigger manual
/*function onEdit(e){
  var ss = e.source.getActiveSheet();
  var cell = e.range;
  var col = cell.getColumn();
  if(cell.getFormula() !== ""){
    var destination = ss.getRange(2,col,ss.getLastRow()-1,1);
    cell.copyTo(destination);
  }
  var destination = ss.getRange(2,col,ss.getLastRow()-1,1);
}*/
