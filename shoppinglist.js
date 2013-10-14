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

		//select added
		$(".added").click(function() {
			$(this).removeClass("added").addClass("selected");	
						

		//delete selected
		$( "<span class='delete-item'>Delete</span>" ).appendTo( ".selected" ).click(function () {
			$(this).parent().fadeOut(100);
		});

		});
	
}


document.getElementById("add-item").addEventListener("click", validateForm, false);

$('#enter-item').keypress(function (e)
{
    if(e.keyCode==13)
    {
        validateForm();
        document.getElementById("enter-item").value = "";
    }
});