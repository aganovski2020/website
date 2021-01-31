//write the hilfe


var anna = localStorage.getItem("aktuelleanzahleins");
var aktuelleanzahl = parseInt(anna, 10);


function onload(){
	currentplayerswitch(aktuelleanzahl);
	//getplayers();
	scoreboard();
	setpositions();

}
function hilfe(){
	alert("Hier ist deine Hilfe. (Würfel du Lappen)")
}

function würfeln(){

	
	if (aktuelleanzahl<=dieanzahl) {
		var a = Math.floor(Math.random() * 6); 
		a= a+1;
		alert("Du hast eine "+a+" gewuerfelt");
		laufen(a);
		aktuelleanzahl = aktuelleanzahl+1;
		if(aktuelleanzahl<=dieanzahl){
		currentplayerswitch(aktuelleanzahl);}
		else{
			var neue = aktuelleanzahl-dieanzahl;
			currentplayerswitch(neue);
		}

	}
	else{
	aktuelleanzahl=aktuelleanzahl - dieanzahl;
	würfeln();
	}

var philip = aktuelleanzahl.toString();
localStorage.setItem("aktuelleanzahleins", philip);
}


var dieanzahl = localStorage.getItem("dieanzahl");

function currentplayerswitch(b){

for (var i = 1; i <= 10; i++) {
	var img = document.getElementById(i);
    img.style.visibility = "hidden";
}

if(b<=dieanzahl){
	var player = JSON.parse(localStorage.getItem("player"+b));
	var a = player.charackternumber;
	var img = document.getElementById(a);
    img.style.visibility = "visible";
}
else{

	b = b-dieanzahl;
	currentplayerswitch(b);
}

}





/* the diffrent players */
var player1 = getplayers(1);
var player2 = getplayers(2);
var player3 = getplayers(3);
var player4 = getplayers(4);
var player5 = getplayers(5);
var player6 = getplayers(6);
var player7 = getplayers(7);
var player8 = getplayers(8);
var player9 = getplayers(9);
var player10 = getplayers(10);



function getplayers(a){ 


	if (checkifexist(a)) {
		var charackter = JSON.parse(localStorage.getItem("player"+a)); 
		return charackter;
	}
	else{
		var emtyplayer = {charackternumber: 0, playernumber: a, fieldposition:"" , pointsblue:"" , pointspink:"" , pointsyellow:"" , pointspurple:"" , pointsgreen:"" , pointsorange:"" };
		return emtyplayer;

	}
}	



function checkifexist(a){
	var charackter = JSON.parse(localStorage.getItem("player"+a));
	if(charackter==undefined){
		return false
	}
	else{
		return true
	}
}

function scoreboard() {
	column1();
	column2();
	column3();
	column4();
	column5();
	column6();
	column7();
	column8();
	column9();
	column10();
}



function column1(){
	 		var char1 = document.getElementById("char1");
            var a = player1.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column2(){
	 		var char1 = document.getElementById("char2");
            var a = player2.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column3(){
	 		var char1 = document.getElementById("char3");
            var a = player3.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column4(){
	 		var char1 = document.getElementById("char4");
            var a = player4.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column5(){
	 		var char1 = document.getElementById("char5");
            var a = player5.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column6(){
	 		var char1 = document.getElementById("char6");
            var a = player6.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column7(){
	 		var char1 = document.getElementById("char7");
            var a = player7.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column8(){
	 		var char1 = document.getElementById("char8");
            var a = player8.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column9(){
	 		var char1 = document.getElementById("char9");
            var a = player9.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}
function column10(){
	 		var char1 = document.getElementById("char10");
            var a = player10.charackternumber;
            if(a==0){char1.setAttribute("class", "columnpic2")}
            if(a==1){char1.src = "rollerblades.jpeg";}
            if(a==2){char1.src = "tom.jpeg";}
            if(a==3){char1.src = "typ.jpeg";}
            if(a==4){char1.src = "car.jpeg";}
            if(a==5){char1.src = "skatergirl.jpg";}
            if(a==6){char1.src = "drink.jpeg";}
            if(a==7){char1.src = "esel.jpg";}
            if(a==8){char1.src = "cars.jpeg";}
            if(a==9){char1.src = "snowboard.png";}
            if(a==10){char1.src = "musik.jpg";}
}

 

	
function laufen(a){
	//alert("laufen");
	var nowplayer = getnowplayer();
	var nowcharackternumber = nowplayer.charackternumber;
	var x= nowplayer.fieldposition;
	x= x+a;
	if (x<25) {
	nowplayer.fieldposition = x;
	var b = document.getElementById("charackter"+nowcharackternumber);
	b.setAttribute("class", "field"+x);
	nowplayer.fieldposition = x;
	var philip = nowplayer.playernumber;
	localStorage.setItem("player"+philip, JSON.stringify(nowplayer));

	}
	else{
		y= x-24;
		nowplayer.fieldposition = y;
		var b = document.getElementById("charackter"+nowcharackternumber);
		b.setAttribute("class", "field"+y);
		nowplayer.fieldposition = y;
		var philip = nowplayer.playernumber;
		localStorage.setItem("player"+philip, JSON.stringify(nowplayer));
	}

getcolor(nowplayer.fieldposition);



}



function getnowplayer(){
	if(aktuelleanzahl==1){return player1;}
	if(aktuelleanzahl==2){return player2;}
	if(aktuelleanzahl==3){return player3;}
	if(aktuelleanzahl==4){return player4;}
	if(aktuelleanzahl==5){return player5;}
	if(aktuelleanzahl==6){return player6;}
	if(aktuelleanzahl==7){return player7;}
	if(aktuelleanzahl==8){return player8;}
	if(aktuelleanzahl==9){return player9;}
	if(aktuelleanzahl==10){return player10;}
}


function getcolor(l){

	if (l<7) {
		if(l==1){window.location.href="bluequestion.html";}
		if(l==2){window.location.href="redquestion.html";}
		if(l==3){window.location.href="yellowquestion.html";}
		if(l==4){window.location.href="purplequestion.html";}
		if(l==5){window.location.href="greenquestion.html";}
		if(l==6){window.location.href="orangequestion.html";}

	}
	else{
	l= l-6;
	getcolor(l);
}

}


function setpositions(){

var charackter = JSON.parse(localStorage.getItem("player1")); 
	//alert("setplayers");
	var y = charackter.fieldposition;
	var z = charackter.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player2.fieldposition;
	var z = player2.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player3.fieldposition;
	var z = player3.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player4.fieldposition;
	var z = player4.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player5.fieldposition;
	var z = player5.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player6.fieldposition;
	var z = player6.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player7.fieldposition;
	var z = player7.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player8.fieldposition;
	var z = player8.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player9.fieldposition;
	var z = player9.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
	var y = player10.fieldposition;
	var z = player10.charackternumber;
	var b = document.getElementById("charackter"+z);
	if(y.length <=0){b.setAttribute("class", "field0");}
	else{b.setAttribute("class", "field"+y);}
}


