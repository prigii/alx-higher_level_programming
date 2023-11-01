$(document).ready(function () {
  // Use jQuery to make an AJAX request to the URL with the specified language parameter
  $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function (data) {
    // Extract the translation from the response
    const translation = data.hello;

    // Use jQuery to select the #hello element and update its content
    const helloDiv = $('#hello');
    helloDiv.text('Translation: ' + translation);
  });
});
