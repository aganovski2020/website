function getanzahl(){
		
	let anzahl = localStorage.getItem("dieanzahl")
	return anzahl;
		
}

function getneededscore(){

	let neededscore = localStorage.getItem("neededscore")
	return neededscore;
}


var aktuelleanzahl = 0;

function changeplayer(){

	aktuelleanzahl = aktuelleanzahl+1;
	return aktuelleanzahl;
}

function doDisplay(a) {
	var x = document.getElementById(a).value;
   document.getElementById("currentplayerdisplay").innerHTML = x;
} 

function start(){
	anzahl = getanzahl();
	if(aktuelleanzahl<anzahl){
		changeplayer();
		doDisplay(aktuelleanzahl);
	}
	else{
		alert("Das sind alle Spieler, startet das Spiel")
	}
}

function displaycurrentplayer(){

	var checkplayer = JSON.parse(localStorage.getItem("player"+aktuelleanzahl)); 
	if(checkplayer==undefined){
	alert("Wähle erst ein Character aus")
	}
	else{
	displaycurrentplayer2();
	}
}

function displaycurrentplayer2(){
	
	anzahl = getanzahl();
	if(aktuelleanzahl<anzahl){
		changeplayer();
		doDisplay(aktuelleanzahl);
	}
	else{
		alert("Das sind alle Spieler, startet das Spiel")
	}
	
	
}


	var one=1;
	var two=2;
	var three=3;
	var four=4;
	var five=5;
	var six=6;
	var seven=7;
	var eight=8;
	var nine=9;
	var ten=10;


function switchübergabe(b){
	if (b==1) {one=false}
	else if (b==2) {two=false}
	else if (b==3) {three=false}
	else if (b==4) {four=false}
	else if (b==5) {five=false}
	else if (b==6) {six=false}
	else if (b==7) {seven=false}
	else if (b==8) {eight=false}
	else if (b==9) {nine=false}
	else if (b==10) {ten=false}

	
}
// works with aktuelleanzahl, reurn true or false
function checkifexists(){
	if(aktuelleanzahl==1){var charackter = JSON.parse(localStorage.getItem("player1")); }
	if(aktuelleanzahl==2){var charackter = JSON.parse(localStorage.getItem("player2")); }
	if(aktuelleanzahl==3){var charackter = JSON.parse(localStorage.getItem("player3")); }
	if(aktuelleanzahl==4){var charackter = JSON.parse(localStorage.getItem("player4")); }
	if(aktuelleanzahl==5){var charackter = JSON.parse(localStorage.getItem("player5")); }
	if(aktuelleanzahl==6){var charackter = JSON.parse(localStorage.getItem("player6")); }
	if(aktuelleanzahl==7){var charackter = JSON.parse(localStorage.getItem("player7")); }
	if(aktuelleanzahl==8){var charackter = JSON.parse(localStorage.getItem("player8")); }
	if(aktuelleanzahl==9){var charackter = JSON.parse(localStorage.getItem("player9")); }
	if(aktuelleanzahl==10){var charackter = JSON.parse(localStorage.getItem("player10")); }
	if(charackter==undefined){
		return false
	}
	else{
		return true
	}
}

function creatplayer(a, b){




if(checkifexists()){
	alert("Du kannst nicht zwei Character wählen");
}
else{
	

	if(aktuelleanzahl==1 && Boolean(b)){
		
			var player1 = {charackternumber: a, playernumber: 1, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player1", JSON.stringify(player1));

	}

	else if(aktuelleanzahl==2 && Boolean(b)){
			var player2 = {charackternumber: a, playernumber: 2, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player2", JSON.stringify(player2));

	}

	else if(aktuelleanzahl==3 && Boolean(b)){
			
			var player3 = {charackternumber: a, playernumber: 3, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player3", JSON.stringify(player3));

	}

	else if(aktuelleanzahl==4 && Boolean(b)){
			
			var player4 = {charackternumber: a, playernumber: 4, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player4", JSON.stringify(player4));

	}

	else if(aktuelleanzahl==5 && Boolean(b)){
			
			var player5 = {charackternumber: a, playernumber: 5, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player5", JSON.stringify(player5));

	}

	else if(aktuelleanzahl==6 && Boolean(b)){
	 		
	 		var player6 = {charackternumber: a, playernumber: 6, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player6", JSON.stringify(player6));

	}

	else if(aktuelleanzahl==7 && Boolean(b)){
			
			var player7 = {charackternumber: a, playernumber: 7, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player7", JSON.stringify(player7));

	}

	else if(aktuelleanzahl==8 && Boolean(b)){
			
			var player8 = {charackternumber: a, playernumber: 8, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player8", JSON.stringify(player8));

	}

	else if(aktuelleanzahl==9 && Boolean(b)){
			
			var player9 = {charackternumber: a, playernumber: 9, fieldposition: 0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player9", JSON.stringify(player9));

	}
	
	else if(aktuelleanzahl==10 && Boolean(b)){
			
			var player10 = {charackternumber: a, playernumber: 10, fieldposition: 
			0, pointsblue: 0, pointspink: 0, pointsyellow: 0, pointspurple: 0, pointsgreen: 0, pointsorange: 0};
			switchübergabe(b);
			document.getElementById("char"+a).setAttribute("class", "style2");
			localStorage.setItem("player10", JSON.stringify(player10));

	}
	else{
		alert("Dieser Charakter wurde bereits vergeben");
	}


}
}


function weiter(){
	
	if(aktuelleanzahl==getanzahl()){
		if (checkifexists()) {
		location.href = "spielfeld.html";
	}
	else{alert("Character fehlen noch");}
	}
	else{
	alert("Character fehlen noch");
	}
}

localStorage.setItem("aktuelleanzahleins", 1);