var userGuesss;
var computerChoices = ['r', 'p' , 's'];

function computer(){
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var wins = 0;
var losses = 0;
var ties = 0;


computer();
console.log(computerGuess);



$(".paper").on("click",function(){
	userGuess = 'p';
	console.log(userGuess);
	game();
})

$(".rock").on("click",function(){
	userGuess = 'r';
	console.log(userGuess);
	game();
});

$(".scissors").on("click",function() {
	userGuess = 's';
	console.log(userGuess);
	game();
})



function game(){

   if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
          console.log(wins);
          $(".wins").html("wins: " + wins);
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
          console.log(losses);
          $(".losses").html("losses: " + losses);
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
          console.log(losses);
          $(".losses").html("losses: " + losses);
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
          console.log(wins);
          $(".wins").html("wins: " + wins);
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
          console.log(wins);
          $(".wins").html("wins: " + wins);
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
          console.log(losses);
          $(".losses").html("losses: " + losses);
        } else if (userGuess === computerGuess) {
          ties++;
          console.log(ties)
          $(".ties").html("ties: " + ties);

        }
}
}
$(".wins").html("wins: " + wins);
$(".losses").html("losses: " + losses);
$(".ties").html("ties: " + ties);

