(function() {
    // Use jQuery to select the #add_item element
    const addItemDiv = $("#add_item");

    // Add a click event handler
    addItemDiv.click(function() {
      // Create a new <li> element with the text "Item"
      const newItem = $("<li>Item</li>");

      // Append the new <li> element to UL.my_list
      $("ul.my_list").append(newItem);
    });
  });