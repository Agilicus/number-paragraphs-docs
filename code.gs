function onOpen() {
  DocumentApp.getUi().createMenu('Paragraph Tools')
  .addItem('Auto Number Paragraphs', 'numberParaAdd')
  .addItem('Clear Paragraph Numbers', 'numberParaClear')
  .addToUi();
}

function numberParaAdd(){
  numberPara(true);
}

function numberParaClear(){
  numberPara(false);
}

function numberPara(add){
  var document = DocumentApp.getActiveDocument();
  var body = document.getBody();
  var paragraphs = document.getParagraphs();
  var numbers = 0;
  for (var i in paragraphs) {
    var element = paragraphs[i];
    var text = element.getText()+'';
    var type = element.getHeading()+'';
    
    // exclude everything but headings
    if (!type.match(/^NORMAL$/)) {
      continue;
    }
    
    // exclude empty headings (e.g. page breaks generate these)
    if( text.match(/^\s*$/)){
      continue;
    }

    if (add == true) {
      var numbering = '';
      
      numbers++;
      numbering = Utilities.formatString("[%04d]", numbers);
      var newText = numbering + ' ' + text.replace(/^\[[0-9\.\s]+\]/, '');
      element.setText(newText);
    } else {
      element.setText(text.replace(/^\[[0-9\.\s]+\] /, ''));
    }
  }
}
