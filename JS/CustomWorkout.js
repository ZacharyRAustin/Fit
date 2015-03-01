function start(){
	var injuries = getValues("injury");
	var equip = getValues("equipment");
	var t = document.getElementById("time");
	var tStr = t.options[t.selectedIndex].value;
	window.location = "Start.html?t=" + tStr + "&equip=" + equip + "&injury=" + injuries;
}

function getValues(name){
	var selected = [];
	var s = document.getElementById(name);
    for (var i = 0; i < s.options.length; i++) {
        if (s.options[i].selected == true) {
            var injury = s.options[i].value;
            selected.push(injury);
        }
    }

    var s ="";
    for(var j = 0; j <  selected.length; j++)
    {
    	if(j != 0)
    	{
    		s += "|";
    	}
    	s += selected[j];
    }
    return s;
}