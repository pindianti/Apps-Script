function nyobaMila() {
  let sheet = SpreadsheetApp.getActive().getSheetByName("mila");

  let nama = sheet.getRange('K1')
  nama.setValue('nyoba');
  
  let coba = sheet.getRange('K2');
  coba.setFormula('=ARRAYFORMULA(IF(A2:A="",,J2:J))')
}
function myFunction() {
  var s = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  var a = s.getRange('A1');
  a.setValue('umur anda');
  var b = s.getRange('B1');
  b.setValue(':');
  var c = s.getRange('C1');
  if(c.getValue()!=''){

  var d = s.getRange('A2');
  d.setValue('umur saia');
  var e = s.getRange('B2');
  e.setValue(':');
  var f = s.getRange('C2');
  f.setFormula('=ROW(A2)&ROW(A3)-1&"th"&" "&ROW(A1)&ROW(A1)-1&"bln"');
  }
}
