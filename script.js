// 20) Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

// For Austria : insurance = horse_power x 100 / age   + 50;

// For Hungary: insurance = horse_power x 120 / age  + 100;

// For Greece: insurance = horse_power x 150 / (age+3)  + 50;

var country = ["Austria", "Hungary", "Greece"];

var horsepower = document.getElementById("horsepower").value;
var age = document.getElementById("age").value;

var austria = document.getElementById("countryone");
var hungary = document.getElementById("countrytwo");
var greece = document.getElementById("countrythree");

var calculation = "";

function calculateInsurance() {
	if(austria=country[0]){
		calculation = parseInt(horsepower * 100 / age + 50);
		document.getElementById("calculation").innerHTML = "Your insurance costs " + calculation + " €.";
		return document.getElementById("calculation");
	} else
	if(hungary=country[1]{
		calculation = parseInt(horsepower *120 / age + 100);
		document.getElementById("calculation").innerHTML = "Your insurance costs " + calculation + " €.";
		return document.getElementById("calculation");
	} else
	if(greece=country[2]{
		calculation = parseInt(horsepower *120 / age + 100);
		document.getElementById("calculation").innerHTML = "Your insurance costs " + calculation + " €.";
		return document.getElementById("calculation");
	}
}
