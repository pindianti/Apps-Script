function Mila() {
  var m = SpreadsheetApp.getActiveSheet();
  if(m.getName() == "melmel"){ //nama sheet-nya melmel
    var i = m.getActiveCell();
    if(i.getColumn() == 1){ //kolom pertama
      if(i.getValue() == 'Mila Pindianti'){ //jika ditulis "Mila Pindianti", maka...
        var lanjutnya = i.offset(0,1); //kolom selanjutnya
        if(lanjutnya.getValue() == '')
        lanjutnya.setValue(new Date()); //bakal diisi sm date
      }
    }
    }
  }
