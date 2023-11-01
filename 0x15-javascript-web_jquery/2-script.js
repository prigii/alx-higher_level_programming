(function() {
    // Use jQuery to select the #red_header element
    const redHeaderDiv = $("#red_header");

    // Add a click event handler
    redHeaderDiv.click(function() {
      // Use jQuery to select the <header> element by its tag name
      const headerElement = $("header");

      // Update the text color to red (#FF0000)
      headerElement.css("color", "#FF0000");
    });
  });