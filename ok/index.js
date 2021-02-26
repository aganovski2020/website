function start(){
		
	myClick();
		
}


function myClick() {
  setTimeout(
    function() {
      document.getElementById('div').setAttribute("class", "style");
      document.getElementById('text').setAttribute("class", "style2");
    }, 8000);
}