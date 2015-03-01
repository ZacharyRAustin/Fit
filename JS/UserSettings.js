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