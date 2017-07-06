var Movie = require('./../js/movie-trivia.js').movieModule;

var displayMovie = function(title, movieTitle, movieDirector, movieYear, movieActors) {
  $('.showMovie').text(movieTitle + " by " + movieDirector + ": " + movieYear + " starring ");
  var movieActorArray = movieActors.split(",");
  movieActorArray.forEach(function(actor){
    $('.showMovie').append(actor + ", ");
  });
};

$(document).ready(function() {
  var currentMovieObject = new Movie();
  $('#movieButton').click(function() {
    var movieObject = new Movie();
    var movie = $('#movie').val();
    $('#movie').val("");
    currentMovieObject = movieObject.getMovie(movie, displayMovie);
    debugger;
  });
});
