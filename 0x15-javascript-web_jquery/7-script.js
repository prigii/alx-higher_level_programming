(function() {
    // Use jQuery to make an AJAX request to the URL
    $.get("https://swapi-api.alx-tools.com/api/people/5/?format=json", function(data) {
      // Extract the character name from the response
      const characterName = data.name;

      // Use jQuery to select the #character element and update its content
      const characterDiv = $("#character");
      characterDiv.text("Character Name: " + characterName);
    });
  });