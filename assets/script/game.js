const characters = ['dobby', 'harry', 'hermoine', 'ron', 'hedwig', 'draco', 'dumbledore', 'voldemort']
let wins = 0;
let losses = 0;
let guesses = [];
let guessesRemaining = 0;
let word = characters[Math.floor(Math.random() * characters.length)];
let answer = [];


for(let i = 0; i < word.length; i++){
    answer[i] = '_'
}


document.getElementById('character').innerHTML = answer;