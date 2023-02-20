function onOpen() {
  var submenu = [{name:"Create PDF and Send", functionName:"gajI"}];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Create PDF', submenu);  
}

function gajI() {
  // Sheet yang dibutuhkan, sheet ini yg bakal ditembak ke email, 
  // karena sheet aslinya mengandung formula jadi nanti bakal #REF
  var originalSheet = SpreadsheetApp.getActive().getSheetByName("copas2");
  
  // address (ini rumus vlookup dari tab list)
  // di list ini buat ngisi di syarat email (alamat, subject, massage, body)
  var search = SpreadsheetApp.getActive().getSheetByName("Lembar Gaji");
  var hasil = SpreadsheetApp.getActive().getSheetByName("list");

  var hasil2 = hasil.getRange (2,1,hasil.getLastRow()-1,6).getValues();

  var searchValues = search.getRange("H5").getValues();

  var matchingHasil = searchValues.map(seachRow => {
    var matchRow = hasil2.find(r => r[0] == seachRow[0]);
    return matchRow ? matchRow[2] : [null];
  });

  //subject
    var matchingHasilSubject = searchValues.map(seachRowSub => {
    var matchRowSubject = hasil2.find(r => r[0] == seachRowSub[0]);
    return matchRowSubject ? matchRowSubject[3] : [null];
  });

  //nama pdf
    var matchingHasilPdf = searchValues.map(seachRowpdf => {
    var matchRowPdf = hasil2.find(r => r[0] == seachRowpdf[0]);
    return matchRowPdf ? matchRowPdf[4] : [null];
  });

  //massage
    var matchingHasilMassage = searchValues.map(seachRowMassage => {
    var matchRowMassage = hasil2.find(r => r[0] == seachRowMassage[0]);
    return matchRowMassage ? matchRowMassage[5] : [null];
  });

  var massageString = matchingHasilMassage.toString();
  var namaString = matchingHasilPdf.toString();
  var massage = massageString;
  


  // Karena google gabisa nge-export tab tertentu ke pdf langsung (harus berupa link)
  // Maka penyelesaiannya pakai sheet fiktif buat ngopas tab yg skrg terus diambil linknya

  // Buat sheet baru dengan isinya dari sheet yg skrg
  var newSpreadsheet = SpreadsheetApp.create("Spreadsheet to export");
  // var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheet = originalSheet;
  sheet.copyTo(newSpreadsheet);
  
  // Cari Sheet 1 kemudian delete
  newSpreadsheet.getSheetByName('Sheet1').activate();
  newSpreadsheet.deleteActiveSheet();
  
  // Ambil link pake getId terus jadiin format pdf, terus kasih nama pdf-nya pake variabel namaString
  var pdf = DriveApp.getFileById(newSpreadsheet.getId()).getAs('application/pdf').getBytes();
  var attach = {fileName:namaString,content:pdf, mimeType:'application/pdf'};

  // Kirim ke email pake perintah GmailApp
  
  GmailApp.sendEmail(matchingHasil,matchingHasilSubject, massage,{
    attachments: [attach]});
    
  // Delete file yang ada biar ga menuhin folder :)
  DriveApp.getFileById(newSpreadsheet.getId()).setTrashed(true);  
}

 // DONE
