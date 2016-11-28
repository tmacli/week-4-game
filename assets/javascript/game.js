var wins = 0;
var losses = 0;
var counter = 0;

var numberOptions = [10, 5, 3, 7];

  // Next we create a for loop to create Yoshis for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageYoshi
    var imageYoshi = $("<img>").addClass("yoshiImage").attr("src", "assets/images/Yoshi_PMCS.png").attr("data-yoshivalue", numberOptions[i]);

    // Lastly, each Yoshi image (with all it classes and attributes) will get added to the page.
    $("#yoshis").append(imageYoshi);
  }

function displayResults(results) {
    var string = "";
    string += "<p>Wins: " + wins; + "</p>";
    string += "<p>Losses: " + losses; + "</p>";
    display.innerHTML = string;
  }