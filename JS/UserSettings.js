var showing = false;

function handleEdit(){
	showing = !showing;
	if(showing)
	{
		document.getElementById("ue").style.display = "initial";
		document.getElementById("us").style.display = "none";
		document.getElementById("editButton").innerHTML = "Save";
		document.getElementById("backButton").style.display = "none";
	}
	else
	{
		document.getElementById("ue").style.display = "none";
		document.getElementById("us").style.display = "initial";
		document.getElementById("backButton").style.display = "initial";
		document.getElementById("editButton").innerHTML = "Edit";
	}


}

var gender = "Male";
var age = "21";
var height ="5'11''";
var weight = "190lb";
var fitLevel = "Beginner";


function parseURL(){
	var str = location.search.substring(1);
	var splitVals = str.split("&");
	for(var i = 0; i < splitVals.length; i++)
	{
		var param = splitVals[i].split("=");
		if(param[0] == "g")
		{
			gender = param[1];
		}
		else if(param[0] == "age")
		{
			age = param[1];
		}
		else if(param[0] == "height")
		{
			height = decodeURIComponent(param[1]);
		}
		else if(param[0] == "weight")
		{
			weight = param[1];
		}
		else if(param[0] == "fit")
		{
			fitLevel = param[1];
		}
	}
	document.getElementById("genderField").innerHTML = "<b>Gender: </b>"+gender;
	document.getElementById("ageField").innerHTML = "<b>Age: </b>"+age;
	document.getElementById("heightField").innerHTML = "<b>Height: </b>"+height;
	document.getElementById("weightField").innerHTML = "<b>Weight: </b>"+weight;
	document.getElementById("fitnessField").innerHTML = "<b>Fitness Level: </b>"+fitLevel;
	

	
}