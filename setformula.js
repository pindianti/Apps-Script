function nyobaMila() {
  let sheet = SpreadsheetApp.getActive().getSheetByName("mila");

  let nama = sheet.getRange('K1')
  nama.setValue('nyoba');
  
  let coba = sheet.getRange('K2');
  coba.setFormula('=ARRAYFORMULA(IF(A2:A="",,J2:J))')
}
