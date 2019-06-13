// WHEN THE USER CLICKS ON THE BUTTON. 
//TOGGLE BETWEEN HIDING AND SHOWING THE DROPDOWN CONTENT


function myFunction(){
	document.getElementById("myDropdown").classList.toggle
	("show");
}


//CLOSE THE DROPDOWN MENU IF THE USER CLICKS OUTSIDE OF IT

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns =
	docuument.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
	  }
	}
  }
}