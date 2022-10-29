function ShouDesuka() {
  var data = SpreadsheetApp.getActive().getSheetByName("M");
  var maxrow = data.getMaxRows();
  var maxcolumn = data.getMaxColumns();
  var range = data.getRange(2,3,maxrow,2).getValues();

  var tujuan = SpreadsheetApp.openById("1c38asYcuVcChbqoVc6dLNvtSCTCI5s9RSiTAMDKQme4"); //sheet tujuan yg pertama
  var sheet = tujuan.getSheetByName("melmel");
  sheet.getRange(2,5,maxrow,2).setValues(range);
  
  var tujuandua = SpreadsheetApp.openById("1809KdM3gyLXo5loShA2msdl4rCzizW8fNJ-hmBg9C6w"); //sheet tujuan kedua
  var sheetdua = tujuandua.getSheetByName("lalala");
  sheetdua.getRange(2,1,maxrow,2).setValues(range);
}
