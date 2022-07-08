function changePageContent(fileName){
  $('#page-data').load(`html/${fileName}.html`)
}

$('#page-data').load('html/index.html');
$('#footer-data').load('html/footer.html');