(function() {
    // Use jQuery to make an AJAX request to the URL
    $.get("https://swapi-api.alx-tools.com/api/films/?format=json", function(data) {
      // Extract the movie titles from the response
      const movies = data.results;

      // Use jQuery to select the #list_movies element and add movie titles to it
      const listMovies = $("#list_movies");
      $.each(movies, function(index, movie) {
        listMovies.append("<li>" + movie.title + "</li>");
      });
    });
  });