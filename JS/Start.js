var t = "15";
var injuries = "none";
var equip = "none";

function parseURL(){
	var str = location.search.substring(1);
	var splitVals = str.split("&");
	for(var i = 0; i < splitVals.length; i++)
	{
		var param = splitVals[i].split("=");
		if(param[0] == "t")
		{
			t = param[1];
		}
		else if(param[0] == "equip")
		{
			equip = param[1];
		}
		else if(param[0] == "injury")
		{
			injuries = param[1];
		}
	}

	injuries = injuries.split("|");
	equip = equip.split("|");
}

function chooseWorkout(){
	//Task 1, 30 min workout
	if(time == "30")
	{

	}
	//Task 2 injured Ankle 15 min (nice gifs)
	else if(injuries.contains("ankle"))
	{

	}
	//Task 3 New to exersise 15 min with dumbbell (nice gifs )
	else{

	}
}
