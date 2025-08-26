const ListItems = document.querySelectorAll("li");


function ToggleButton(e) {
	console.log("test")
	if(!e.target.className){
		e.target.className="done";
	} else{
		e.target.className = "";
	}

}

ListItems.forEach((item) => {
	item.addEventListener("click", ToggleButton);
});
