// if try to nevigate to other page then redirect to home page 
if(location.href != "https://govindpotdar.github.io/hey/" && location.host == "govindpotdar.github.io"){
  location.replace("https://govindpotdar.github.io/hey/")
}


// page loader funation
function changePageContent(fileName){
  $('#page-data').load(`html/${fileName}.html`)
}

// default home page loader
$('#page-data').load('html/index.html');
$('#footer-data').load('html/footer.html');

