$(document).ready(function() {
  var history = $("#history");
  var mainWeather = $("#main-weather");
  var days = $("#days");
  console.log(days, mainWeather, history);

  $("#search-button").click(function() {
    var citySearch = $("#search").val();
    console.log(citySearch);
  });
});
