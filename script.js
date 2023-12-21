function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function determineMessage() {
    for (var i = 0; i < possibleCombos.length; i++) {
        if (combinedChoice === possibleCombos[i].short) {
            alertMessage += ("\n" + possibleCombos[i].message);
        }
    }
}

var playerChoice = "";
var computerChoice = "";
var combinedChoice = "";
var letters = [{ letter: "r", fullName: "Rock" },
               { letter: "p", fullName: "Paper" },
               { letter: "s", fullName: "Scissors"}];
var wins = 0;
var losses = 0;
var ties = 0;
var possibleCombos = [{ short: "sp", message: "Scissors cuts paper. Computer wins."},
                      { short: "ps", message: "Scissors cuts paper. You win!"},
                      { short: "pr", message: "Paper covers Rock. Computer wins."},
                      { short: "rp", message: "Paper covers Rock. You win!"},
                      { short: "rs", message: "Rock crushes Scissors. Computer wins."},
                      { short: "sr", message: "Rock crushes Scissors. You win!"},
                      { short: "rr", message: "Both picked Rock.  Tie game."},
                      { short: "pp", message: "Both picked Paper.  Tie game."},
                      { short: "ss", message: "Both picked Scissors.  Tie game."}]

var alertMessage = ""

while (playerChoice !== "x") {
    var playerChoice = prompt(
        "Do you want Rock(r), Paper(p), or Scissors(s), or End(x)? Enter a letter."
    );
    // Make sure player is selecting allowable letters
    if (playerChoice !== "r" && playerChoice !== "p" && playerChoice !== "s" && playerChoice !== "x"){
        alert("You have not chosen an allowed letter.  Stopping the game.");
        break;
    }
    // End the game gracefully if player chooses to stop playing.
    if (playerChoice === "x") {
        break;
    }
    //This next line finds which record in the letters object has the player's entered letter
    var result = letters.find(item => item.letter === playerChoice);
    alertMessage = ("You have chosen " + result.fullName);
    
    // Have randomly selected choice for Computer  
    var computerChoice = letters[random(0, 2)].letter;
    combinedChoice = (computerChoice + playerChoice);
    
    // Same as line 48
    var result = letters.find(item => item.letter === computerChoice);
    alertMessage += ("\nComputer has chosen " + result.fullName);

    if (combinedChoice[0] === combinedChoice[1]) {
        alertMessage += ("\nSince both picked the same, it's a tie.  Starting over.")
        ties++;
    }
    else if (combinedChoice === "sp" || combinedChoice === "pr" || combinedChoice === "rs") {
        determineMessage();
        losses++;
    }
    else {
        determineMessage();
        wins++;
    }

    alert(alertMessage + "\nYou have " + ties + " ties, " + wins + " wins and " + losses + " losses.");
}