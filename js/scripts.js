
function newItem(){

//javascript
//1. Adding a new item to the list of items:

   //you can store the <li> element in the same way we target elements
   let li = $('<li></li>');
   //.value gets the value for the input field
   let inputValue = $('#input').val();
   //Create a text for the input field
   li.append(inputValue);
   // It appends to the li the value in input field


   if (inputValue === '') {
     alert("You must write something!");
   } else {
     //goes to the <ol> (ordered list)
     let list = $('#list');
     list.append(li);
   }

 //2. Crossing out an item from the list of items:
 // The toggle() method toggles between hide() and show()
 function crossOut() {
   li.toggleClass("strike");
 }

 li.on("dblclick", function crossOut(){
   li.toggleClass("strike");
 	});


 //3(i). Adding the delete button "X":
   let crossOutButton = $("<crossOutButton></crossOutButton>");
 	crossOutButton.append(document.createTextNode("X"));
 	li.append(crossOutButton);

 	crossOutButton.on("click", function(){
    deleteListItem();
  });


//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
 function deleteListItem(){
 		li.addClass("delete")
 	}

  //This Is another way: nesting the functions
  //   crossOutButton.on("click", deleteListItem);
  //   function deleteListItem(){
  // 		li.addClass("delete")
  // 	}

 // 4. Reordering the items:
   $('#list').sortable();

}
