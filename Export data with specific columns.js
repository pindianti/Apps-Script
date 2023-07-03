function copySheet() {
  // Opens the spreadsheet where the data is stored
  var sourceTable = SpreadsheetApp.openById("Source URL"); // Source file
  var srcSheet = sourceTable.getSheetByName("Name of Sheet Source");

  // Inserts the data into the target file
  var targetTable = SpreadsheetApp.openById("Target Table URL"); // Target file
  var tarSheet = targetTable.getSheetByName("Name of Sheet Target");

  // Gets the last row in the source file
  var lastRowSource = srcSheet.getLastRow();
  var originColumns = [1, 14]; //Col A and N
  var destColumns = [1, 2];  // to Col A and B

  // Loop through each column to copy:
  for(var i = 0; i < originColumns.length; i++) {
    var originColumn = originColumns[i]; // Origin column index
    var destColumn = destColumns[i]; // Destination column index
    var originRange = srcSheet.getRange(2, originColumn, lastRowSource); // Origin range to copy
    var destRange = tarSheet.getRange(3, destColumn, lastRowSource); // Destination range to be copied to
    var values = originRange.getValues(); // Getting values from origin column
    destRange.setValues(values); // Setting values to destination column
  }
}
