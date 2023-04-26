//your JS code here. If required.
let color = document.getElementById("colorSelect");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	color.remove(color.selectedIndex);
});