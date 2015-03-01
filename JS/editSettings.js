function save(){
	var g = document.getElementById("gender");
	var gStr = g.options[g.selectedIndex].value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var fit = document.getElementById("fitnessLevel");
    var ff = fit.options[fit.selectedIndex].value;
	window.location = "UserSettings.html?g=" + gStr 
    + "&age=" + age + "&height=" + height + "&weight=" + weight +
    "&fit="+ ff;
    console.log("g=" + gStr 
    + "&age=" + age + "&height=" + height + "&weight=" + weight +
    "&fit="+ ff);
}

