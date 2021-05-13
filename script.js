window.addEventListener("load", function(event){
	var cursor = document.createElement("span");
	document.body.appendChild(cursor);
	document.addEventListener("mousemove",function(event){
		cursor.style.left = (event.clientX+5)+"px";
		cursor.style.top = (event.clientY+5)+"px";
	});

	document.addEventListener("mouseout",function(event){
		cursor.style.display = "none";
	});

	document.addEventListener("mouseover",function(event){
		cursor.style.display = "block";
	});
});
