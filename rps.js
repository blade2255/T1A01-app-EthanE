var rockPaperScissors = function() {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
    var myOutput = document.getElementById("output");
    var lucky = 1;
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);

    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
            myOutput.innerHTML = "The result is a tie!";
        }
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                myOutput.innerHTML = "The Computer chose Scissors, you win with Rock. <br>";
            } else {
                myOutput.innerHTML = "The Computer chose Paper, you lose with Rock. <br>";
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                myOutput.innerHTML = "The Computer chose Rock, you win with Paper. <br>";
            } else {
                myOutput.innerHTML = "The Computer chose scissors, you lose with Paper. <br>";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                myOutput.innerHTML = "The Computer chose Rock, you lose with Scissors. <br>";
            } else {
                myOutput.innerHTML = "The Computer chose Paper, you win with Scissors. <br>";
            }
        }
    }
    compare(userChoice, computerChoice);
 for(i=0;i<5;i++){
    lucky *= Math.random()*100;
  }
  myOutput.innerHTML += "Your lucky number is: <br> " + lucky;
}
