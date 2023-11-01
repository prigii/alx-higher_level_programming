(function () {
  // Use jQuery to select the #update_header element
  const updateHeaderDiv = $('#update_header');

  // Add a click event handler
  updateHeaderDiv.click(function () {
    // Use jQuery to select the <header> element by its tag name
    const headerElement = $('header');

    // Update the text of the <header> element
    headerElement.find('h1').text('New Header!!!');
  });
});
