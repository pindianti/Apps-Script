function Overwrite() {
  var sheettobackup = SpreadsheetApp.getActive().getSheetByName("data");
  var maxrow = sheettobackup.getMaxRows();
  var maxcolumn = sheettobackup.getMaxColumns();
  
  var uidbackup = sheettobackup.getRange(2,1,maxrow,3).getValues();
  
  var backupfile = SpreadsheetApp.openById("masukan url");
  var sheettarget = backupfile.getSheetByName("coba");
  //var maxrow2 = sheettarget.getMaxRows();
  //var maxcolumn2 = sheettarget.getMaxColumns();
  
  sheettarget.getRange(2,1,maxrow,3).setValues(uidbackup);
}
