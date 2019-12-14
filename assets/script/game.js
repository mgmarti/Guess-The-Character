const characters = ['dobby', 'harry', 'hermoine', 'ron', 'hedwig', 'draco', 'dumbledore', 'voldemort']
let wins = 0;
let losses = 0;
let guesses = [];
let guessesRemaining = 9;
let answer = [];
let word = characters[Math.floor(Math.random() * characters.length)];




//Starts/restarts game
function startGame() {
    guessesRemaining = 5;
    guesses = [];
    answer = [];

    //Loops through word and displays underscores instead of actual letters
    for (let i = 0; i < word.length; i++) {
        answer[i] = ("_");
    }
    // console.log(word);

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
        // console.log(answer);
    } else {
        guesses.push(letter);
        guessesRemaining--;
    }
}

function update() {
    document.getElementById('character').innerHTML = answer.join(' ');
    document.getElementById('guessed').innerHTML = guesses;
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
    console.log(answer)


    if (answer.length) {
        wins++;
        alert(`You Win!`);
        document.getElementById('wins').innerHTML = wins;
        startGame();
    } else if (guessesRemaining === 0) {
        losses++;
        alert('You Lose :(');
        document.getElementById('losses').innerHTML = losses;
        startGame();
    }

}

startGame();

//Captures key clicks
document.onkeyup = function (event) {
    // Check if the key pressed is a letter.
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        // Converts all key clicks to lowercase letters.
        let letterGuessed = event.key.toLowerCase();
        // console.log(letterGuessed);

        //Checks if letter is Correct
        letterIsCorrect(letterGuessed);

        //Updates screen after each round;
        update();
    }
}