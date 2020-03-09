
window.onload=function(){
	setlanguage();
}

//sets the language based on the paramer 'lang' in the URL. If lang=de the language is set to german, otherwise to english.
function setlanguage(){
	if (getRequestParam("lang") == "de") {
		showGer()
	}
	else {
		showEn()
	}
}

function showGer(){
	showText(document.querySelectorAll('#de'), document.querySelectorAll('#de').length);
	hideText(document.querySelectorAll('#en'), document.querySelectorAll('#en').length);
}

function showEn(){
	showText(document.querySelectorAll('#en'), document.querySelectorAll('#en').length);
	hideText(document.querySelectorAll('#de'), document.querySelectorAll('#de').length);
}

function showText(txt,nb){
	for(var i=0; i < nb; i++){
		txt[i].style.display = 'block';
	}
}

function hideText(txt,nb){
	for(var i=0; i < nb; i++){
		txt[i].style.display = 'none';
	}
}

function getRequestParam(name){
  const parts = window.location.href.split('?');
  if (parts.length > 1) {
    name = encodeURIComponent(name);
    const params = parts[1].split('&');
    const found = params.filter(el => (el.split('=')[0] === name) && el);
    if (found.length) return decodeURIComponent(found[0].split('=')[1]);
  }
}

function showRandomTipp(counter) {
	randomNumber = Math.floor(Math.random()*counter+1);
	console.log(randomNumber);

	for(var i=1; i < randomNumber; i++){
		document.getElementById("rd"+counter).style.display = "none";
	}

	for(var i=randomNumber+1; i <= counter; i++){
		document.getElementById("rd"+counter).style.display = "none";
	}

    document.getElementById("rd"+randomNumber).style.display = "inline";
}
