function validateForm () {
	var userEntry = document.getElementById("enter-item").value;
	if(userEntry == " " || userEntry == " " + " ") {
	alert("Please Enter Valid Item Name");
	}
	else {
		addItem();
	}

}

function addItem() {

	userEntry = document.getElementById("enter-item").value;
	paragraph = document.createElement("p");
	paragraph.className = "added";
	newItem = document.getElementById("items").appendChild(paragraph);
	newItem.innerHTML = userEntry;
	$('#items  p:last-child').append("<span class='delete-item' style='display:none;'>Delete</span>");

}



document.getElementById("add-item").addEventListener("click", validateForm, false);


		//"Enter" Key Assigned
		$('#enter-item').keypress(function (e)
		{
		    if(e.keyCode==13)
		    {
		        validateForm();
		        document.getElementById("enter-item").value = "";
		    }
		});


		//select added
		$("#items").on('click', 'p', function() {
			$(this).toggleClass("added").toggleClass("selected");
			$(this).find('.delete-item').toggle();	
	
		});
		
		//delete selected
		$("#items").on('click', '.delete-item', function() {
			$(this).parent().fadeOut(100);
		});

		//select all
		$("#select-all").click(function() {
			$("#items p").toggleClass("added").toggleClass("selected");
			$("#items p").find('.delete-item').toggle();	
	
		});



		//delete all
		$("#clear-all").click(function() {
			$("#items p").fadeOut(100);
		});

	
