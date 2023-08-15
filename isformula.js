//script di bawah untuk mengecek suatu cell apakah didapati formula atau tidak
//jika didapati formula akan muncul pernyataan "Formula" di next cell, jika tidak maka sebaliknya yaitu "Not a Formula"

function checkFormulas() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("try 2");
  var columnToCheck = 1; // Kolom yang akan diperiksa
  
  var lastRow = sheet.getLastRow();
  
  for (var row = 1; row <= lastRow; row++) {
    var cell = sheet.getRange(row, columnToCheck);
    var formula = cell.getFormula();
    
    var resultCell = sheet.getRange(row, columnToCheck + 1); // Kolom selanjutnya
    if (formula !== "") {
      resultCell.setValue("Formula");
    } else {
      resultCell.setValue("Not a Formula");
    }
  }
}
