(function () {
  // Use jQuery to select the #toggle_header element
  const toggleHeaderDiv = $('#toggle_header');

  // Add a click event handler
  toggleHeaderDiv.click(function () {
    // Use jQuery to select the <header> element by its tag name
    const headerElement = $('header');

    // Check the current class and toggle it
    if (headerElement.hasClass('red')) {
      headerElement.removeClass('red').addClass('green');
    } else {
      headerElement.removeClass('green').addClass('red');
    }
  });
});
