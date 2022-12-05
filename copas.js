function Overwrite() {
  var mila = SpreadsheetApp.getActive().getSheetByName("M");
  var maxrow = mila.getMaxRows();
  var maxcolumn = mila.getMaxColumns();
  var uidbackup = mila.getRange(2,3,maxrow,1).getValues();

  mila.getRange(2,4,maxrow,1).setValues(uidbackup);
}
//copas data di sheet yg sama (sheet M) dari kolom C ke D
//copas beda sheet, seperti berikut:
function Sugee() {
  var s = SpreadsheetApp.getActive();
  var ambil = s.getSheetByName("M");
  var maxrow = ambil.getMaxRows();
  var maxcolumn = ambil.getMaxColumns();
  var backup = ambil.getRange(1,1,maxrow,3).getValues();

  var baru = s.getSheetByName("khusus fee");
  baru.getRange(2,1,maxrow,3).setValues(backup);
}
//copas dengan if cell di sheet asal tidak kosong (ada value-nya)
function Yabaii() {
  var s = SpreadsheetApp.getActive();
  var ambil = s.getSheetByName("M");
  var maxrow = ambil.getMaxRows();
  var maxcolumn = ambil.getMaxColumns();
  var cek = ambil.getRange('A1');
  var backup = ambil.getRange(1,1,maxrow,3).getValues();
  var baru = s.getSheetByName("khusus fee");
  
  if(cek.getValue() !== ''){
    baru.getRange(2,1,maxrow,3).setValues(backup);
  }
}
