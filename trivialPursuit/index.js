
var players = 0;
var score = 0;
function setplayer(a){

	if(players==0){
		players = a;
		localStorage.setItem("dieanzahl", a)
		document.getElementById(a).setAttribute("class", "style21");
	}
	else{
		alert("Du kannst nicht zwei mal waehlen. Wenn du ein Fehler gemacht hast, starte die Seite neu")
	}
}

function setscore(a){

	if (score==0) {
	score = a;
	localStorage.setItem("neededscore", a)
	document.getElementById("P"+a).setAttribute("class", "style21");
	}
	else{
		alert("Du kannst nicht zwei mal waehlen. Wenn du ein Fehler gemacht hast, starte die Seite neu")
	}
}

function index(){
	localStorage.clear();
}

function weiter(){
	if(players==0){
		alert("Spieler fehlen noch");
	}

	else if (score==0) {
		alert("Punkte fehlen noch");
	}
	else{
	location.href = "spielerauswahl.html";
	}
}
