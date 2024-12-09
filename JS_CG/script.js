let rand = Math.ceil(Math.random() * 100); 
let guessCount = 0;

function makeGuess(min,max) {
    const n = parseInt(document.getElementById("feed").value);

    
    if (isNaN(n) || n < min || n > max) {
        document.getElementById("output").innerText = "Enter only numbers between 1 and 100!";
        return;
    }

    
    guessCount++;

   
    if (n < rand) {
        document.getElementById("output").innerText = `Your guess is too low! Guess #${guessCount}. You have ${5 - guessCount} guesses remaining.`;
    } else if (n > rand) {
        document.getElementById("output").innerText = `Your guess is too high! Guess #${guessCount}. You have ${5 - guessCount} guesses remaining.`;
    } else {
        document.getElementById("output").innerText = `Great! You guessed it in ${guessCount} tries.`;
        document.getElementById("btn-guess").disabled = true;
        return;
    }

    if (guessCount >= 5) {
        document.getElementById("output").innerText = `No more guesses left. The secret number was ${rand}.`;
        document.getElementById("btn-guess").disabled = true;
    }
}
