var t = 15;
var injuries = [];
var equip = [];

var exercises = ["flat_chest_press", "incline_chest_press", "flat_chest_flies", 
"seated_shoulder_presses", "lateral_raises", "reverse_flies",
"front_raises", "dead_lifts", "single_arm_row", "upright_rows",
"shrugs", "decline_seated_bicep_curls", "hammer_curls", "preacher_curls",
"concentration_curls", "overhead_triceps_extensions", "french_presses",
"triceps_kickbacks", "half_squats", "dumbbell_lunges", "seated_calf_raises"];

var constraints = ["elbow|shoulder|wrist|back", "elbow|shoulder|wrist|back", "elbow|shoulder|wrist|back",
"elbow|shoulder|wrist|back", "elbow|shoulder|wrist", "elbow|shoulder|wrist|back",
"elbow|shoulder|wrist|back", "shoulder|wrist|ankle", "knees|hamstring|elbow|back|shoulder|ankle|wrist",
"elbow|shoulder|back", "shoulder|elbow|back", "shoulder", 
"elbow|wrist", "elbow|wrist", "elbow|wrist", "elbow|wrist", "shoulder|elbow|wrist",
"elbow|shoulder|wrist", "knees|elbow|shoulder|wrist|ankle", "knees|ankle|hamstring", "knees|ankle|hamstring",
"ankle|knees"];

var objs = [];
var index = -1;

function parseURL(){
	var str = location.search.substring(1);
	var splitVals = str.split("&");
	for(var i = 0; i < splitVals.length; i++)
	{
		var param = splitVals[i].split("=");
		if(param[0] == "t")
		{
			t = Number(param[1]);
		}
		else if(param[0] == "equip")
		{
			equip = param[1];
			equip = equip.split("|");
		}
		else if(param[0] == "injury")
		{
			injuries = param[1];
			injuries = injuries.split("|");
		}
	}
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

function getExerciseName(n){
	var s = n.split("_");
	var name = "";
	for(var i = 0; i < s.length; i++)
	{
		var temp = s[i];
		var firstChar = temp.substring(0, 1).toUpperCase();
		var fix = firstChar + temp.substring(1, temp.length);
		if(i > 0)
		{
			name += " ";
		}

		name += fix;
	}

	return name;
}

function getExercisePath(n){
	return "Images/"+n+".gif";
}

function createObjs(){
	for(var i = 0; i < exercises.length; i++)
	{
		var n = exercises[i];
		var c = constraints[i];
		objs.push(new Exercise(getExerciseName(n), getExercisePath(n), 5, c));
	}
}


function next(){
	var newIndex = Math.floor((Math.random() * exercises.length));
	if(newIndex == index && newIndex < exercises.length)
	{
		return next();
	}

	var obj = objs[newIndex];
	for(var i = 0; i < injuries.length; i++)
	{
		if(obj.hasConstraint(injuries[i]))
		{
			return next();
		}
	}

	changeEverything(newIndex);
}

function changeEverything(i){
	if(index != -1)
	{
		t -= objs[index].getDuration();
	}

	if(t <= 0)
	{
		window.location = "Done.html";
	}
	else
	{
		index = i;
		var exerciseObj = objs[i];
		document.getElementById("title").innerHTML = exerciseObj.getName();
		document.getElementById("gif").src = exerciseObj.getPath();
		document.getElementById("duration").innerHTML = "Time Remaining: " + t + " minutes";
	}
}

function setUpPage(){
	parseURL();
	createObjs();
	next();
}