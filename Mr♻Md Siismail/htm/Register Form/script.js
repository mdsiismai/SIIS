
function doGet(e) {

  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;

}

function AddRecord(name,email,Password,phone) {

  var url = 'https://docs.google.com/spreadsheets/d/1YIbbRzwJPaIcmVLIYaIhX0ZKdLwS_hhvQrpDkWEcv3I/edit?gid=0#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("Sheet");
  webAppSheet.appendRow([name,email,Password,phone]);
  
}