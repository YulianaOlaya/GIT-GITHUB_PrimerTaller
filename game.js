let guess = Math.floor(Math.random() * 10) + 1;
let attempt = 0;

while (attempt !== guess) {

    attempt = parseInt(prompt("Guess the number from 1 to 10"));

    if (isNaN(attempt) || attempt < 1 || attempt > 10) {
        alert("Enter a valid number between 1 and 10");
        continue;
    }

    let difference = Math.abs(guess - attempt);

    if (attempt === guess) {
        alert("guessed");
    } 
    else if (difference <= 2) {
        alert("Hot");
    } 
    else {
        alert("Cold");
    }
}