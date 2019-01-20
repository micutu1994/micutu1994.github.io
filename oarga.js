document.getElementById("id_business_version").innerHTML = "Business version =2018.01.20";
window.addEventListener("deviceorientation",on_device_orientation);
window.addEventListener("devicemotion",on_device_motion);
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML ="z " + Math.round(e.alpha * 100)/100;
	document.getElementById("id_y").innerHTML ="y " + Math.round(e.gamma * 100)/100;
	document.getElementById("id_x").innerHTML ="x " + Math.round(e.beta * 100)/100;
}

