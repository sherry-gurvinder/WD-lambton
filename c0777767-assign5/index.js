$(document).ready(function()
{
  var temp;
  $.get("https://api.exchangeratesapi.io/latest", function(data, status) {
    for (temp in data["rates"]) {
      $(".current1").append(`<option value="${temp}"> 
                                       ${temp} 
                                  </option>`);
    }
  });
  $("#convert").click(function() {
    document.getElementById("Amount").innerHTML = "";
    var origin_country_amount = $("#origin_amount").val();
    var currency_origin = $("#origin").val();
    var currency_destnation = $("#destination").val();
    var URL = "https://api.exchangeratesapi.io/latest?base=" + currency_origin;

    var temp;
    $.get(URL, function(data, status) {
      $.each(data["rates"], function(key, val) {
        if (key == currency_destnation) {
          $("#Amount").append(
            (origin_country_amount * val).toFixed(2) + " " + currency_destnation
          );
        }
      });
    });

    return false;
  });

  $("#season").click(function() {
    var season_output = document.getElementById("entered_season");
    var season_input = prompt("Please enter the season");
    if (!season_input == "") {
      if (season_input == null) {
        season_output.innerHTML = "Season: null";
      } else if (season_input.toUpperCase() == "WINTER") {
        season_output.innerHTML = "Season: Winter";
      } else if (season_input.toUpperCase() == "SPRING") {
        season_output.innerHTML = "Season: Spring";
      } else if (season_input.toUpperCase() == "SUMMER") {
        season_output.innerHTML = "Season: Summer";
      } else if (season_input.toUpperCase() == "FALL ") {
        season_output.innerHTML = "Season: Fall";
      } else {
        season_output.innerHTML =
          "Season: <span style='color:red'> Invalid</span>";
      }
    } else {
      season_output.innerHTML =
        "Season:<span style='color:red'> Empty Input</span>";
    }
  });
});

//End

setInterval(function() {
  currency_move();
}, 5000);
function currency_move() {
  $("#cur-head-move")
    .hide(2000)
    .animate({ left: "0%" });
  $("#cur-head-move")
    .show(5000)
    .animate({ right: "100%" });
}
