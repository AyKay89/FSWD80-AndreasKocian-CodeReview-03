// 20) Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

// For Austria : insurance = horse_power x 100 / age   + 50;

// For Hungary: insurance = horse_power x 120 / age  + 100;

// For Greece: insurance = horse_power x 150 / (age+3)  + 50;


function calculateInsurance() {

var country = ["Austria", "Hungary", "Greece"];

var horsepower = document.getElementById("horsepower").value;
var age = document.getElementById("age").value;

var austria = document.getElementById("inputfield");
var hungary = document.getElementById("inputfield");
var greece = document.getElementById("inputfield");


	if("Austria" == country[0]){
		calculation = Number(horsepower) * 100 / Number(age) + 50;
		document.getElementById("calculation").innerHTML = "Your insurance costs " + Math.round(calculation) + " €.";
	} else
	if("Hungary" == country[1]){
		calculation = Number(horsepower) * 120 / Number(age)+ 100;
		document.getElementById("calculation").innerHTML = "Your insurance costs " + Math.round(calculation) + " €.";
	} else
	("Greece" == country[2])
		calculation = Number(horsepower) * 150 / (Number(age) +3) + 100;
		document.getElementById("calculation").innerHTML = "Your insurance costs " + Math.round(calculation) + " €.";
	}


