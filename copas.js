function Overwrite() {
  var mila = SpreadsheetApp.getActive().getSheetByName("M");
  var maxrow = mila.getMaxRows();
  var maxcolumn = mila.getMaxColumns();
  var uidbackup = mila.getRange(2,3,maxrow,1).getValues();

  mila.getRange(2,4,maxrow,1).setValues(uidbackup);
}
//copas data di sheet yg sama (sheet M) dari kolom C ke D
