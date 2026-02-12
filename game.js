alert("Welcome to the number guessing game ");

let guess = Math.floor(Math.random() * 20) + 1;
let attempt = 0;
let totalAttempts = 0;

while (attempt !== guess) {

    attempt = parseInt(prompt("Guess the number from 1 to 20"));
    totalAttempts++;

    if (isNaN(attempt) || attempt < 1 || attempt > 20) {
        alert("Enter a valid number between 1 and 20");
        continue;
    }

    let difference = Math.abs(guess - attempt);

    if (attempt === guess) {
        alert("You guessed it in " + totalAttempts + " attempts");
    } 
    else if (difference <= 2) {
        alert("Hot");
    } 
    else {
        alert("Cold");
    }
}