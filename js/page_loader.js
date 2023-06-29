// if try to nevigate to other page then redirect to home page 
if(location.href != "https://govindpotdar.github.io/hey/" && location.host == "govindpotdar.github.io"){
  location.replace("https://govindpotdar.github.io/hey/")
}


// page loader funation
function changePageContent(fileName){
  const sidebarElement = document.getElementById(fileName);
  $("a").removeClass("current_nav_link");
  sidebarElement.classList.add('current_nav_link');
  $('#page-data').load(`html/${fileName}.html`, function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $(this).hide().fadeIn(700);
  });
}

// default home page loader
$('#page-data').load('html/index.html');
$('#footer-data').load('html/footer.html');

