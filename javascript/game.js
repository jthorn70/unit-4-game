$(document).ready(function() {
  //variables
  var blueCrystal = 1 + Math.floor(Math.random() * 12);
  var pinkCrystal = 1 + Math.floor(Math.random() * 12);
  var yellowCrystal = 1 + Math.floor(Math.random() * 12);
  var greenCrystal = 1 + Math.floor(Math.random() * 12);

  var losses = 0;
  var wins = 0;
  var score = 0;
  var targetNumber = 1 + Math.floor(Math.random() * 101);

  var targetText = $("#scoreTarget");
  var scoreText = $("#scoreBox");
  var winsText = $("#wins");
  var lossesText = $("#losses");

  $("#scoreBox").text(score);
  $("#scoreTarget").text(targetNumber);
  $("#wins").text(wins);
  $("#losses").text(losses);

  function gameInitializer() {
    score = ""
    targetNumber = ""


    
  }

  $("#button1").on("click", function() {
    score += pinkCrystal;
    scoreText.text(score);
    console.log(score);
    if (score === targetNumber) {
      alert("Congrats!");
      wins++;
      winsText.text(wins);
      gameInitializer();
    }
    if (score > targetNumber) {
      alert("Sorry! Try Again");
      losses++;
      lossesText.text(losses);
      gameInitializer();
    }
  });

  $("#button2").on("click", function() {
    score += greenCrystal;
    scoreText.text(score);
    console.log(score);
    if (score === targetNumber) {
      alert("Congrats!");
      wins++;
      winsText.text(wins);
      gameInitializer();
    }
    if (score > targetNumber) {
      alert("Sorry! Try Again");
      losses++;
      lossesText.text(losses);
      gameInitializer();
    }
  });

  $("#button3").on("click", function() {
    score += blueCrystal;
    scoreText.text(score);
    console.log(score);
    if (score === targetNumber) {
      alert("Congrats!");
      wins++;
      winsText.text(wins);
      gameInitializer();
    }
    if (score > targetNumber) {
      alert("Sorry! Try Again");
      losses++;
      lossesText.text(losses);
      gameInitializer();
    }
  });

  $("#button4").on("click", function() {
    score += yellowCrystal;
    scoreText.text(score);
    console.log(score);
    if (score === targetNumber) {
      alert("Congrats!");
      wins++;
      winsText.text(wins);
      gameInitializer();
    }
    if (score > targetNumber) {
      alert("Sorry! Try Again");
      losses++;
      lossesText.text(losses);
      gameInitializer();
    }
  });
});
