const characters = ['dobby', 'harry', 'hermoine', 'ron', 'hedwig', 'draco', 'dumbledore', 'voldemort']
let wins = 0;
let losses = 0;
let guesses = [];
let guessesRemaining = 9;
let answer = [];

//Loops through word and displays underscores instead of actual letters
let word = characters[Math.floor(Math.random() * characters.length)];
let guessedWord;

for (let i = 0; i < word.length; i++) {
    answer[i] = ("_");
}
console.log(word);


//Starts/restarts game
function startGame() {
    guessesRemaining = 9;
    guesses = [];

    //Displays Wins
    document.getElementById('wins').innerHTML = wins;

    //Displays Losses
    document.getElementById('losses').innerHTML = losses;

    //Displays answer 
    document.getElementById('character').innerHTML = answer;

    //Displays letters guessed
    document.getElementById('guessed').innerHTML = guesses;

    //displays guesses remaining
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;

}

function letterIsCorrect(letter) {
    //checks if letter is in word
    let letterInWord = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            letterInWord = true;
        }
    }

    //checks location of letter in array
    if (letterInWord) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === letter) {
                answer[j] = letter;
            }
        }
        document.getElementById('character').innerHTML = answer;
        // console.log(answer);
    } else {
        guesses.push(letter);
        document.getElementById('guessed').innerHTML = guesses;
        guessesRemaining--;
        document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
    }
}

startGame();

//Captures key clicks
document.onkeyup = function (event) {
    // Check if the key pressed is a letter.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Converts all key clicks to lowercase letters.
        let letterGuessed = event.key.toLowerCase();
        console.log(letterGuessed);
        //Checks if letter is Correct
        letterIsCorrect(letterGuessed);
      
    }
}