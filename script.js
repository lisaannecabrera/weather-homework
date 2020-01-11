$(document).ready(function() {
  var history = $("#history");
  var mainWeather = $("#main-weather");
  var days = $("#days");

  $("#search-button").click(function() {
    var citySearch = $("#search").val().trim();
    var buttonElement = $("<button/>", {
      text: citySearch,
      class: "btn btn-outline-secondary btn-lg",
      click: function() {
        console.log(citySearch);
      }
    });
    history.append(buttonElement);
  });

});
