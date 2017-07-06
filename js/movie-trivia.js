function Movie(){
}
function Movie(title, director, year, actors) {
  this.movieTitle = title;
  this.director = director;
  this.year = year;
  this.actors = actors;
}
var currentMovie = new Movie();
Movie.prototype.getMovie = function(title, displayFunction) {
  $.get('http://www.omdbapi.com/?t=' + title).then(function(response) {
    console.log(response);
    if(response.Response == "True") {
      displayFunction(title, response.Title, response.Director, response.Year, response.Actors);
      movieObject = new Movie(response.Title, response.Director, response.Year, response.Actors);
      currentMovie = movieObject;
      return movieObject;
    } else if(response.Response == "False") {
      $('.showMovie').text(response.Error);
    } else {
      $('.showMovie').text("Unknown Error");
    }
  });
};

exports.movieModule = Movie;
