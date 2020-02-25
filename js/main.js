const showLives = document.getElementById(".livesleft");
const Hangmanhead = document.getElementById("head");
const Hangmanbody = document.getElementById("body");
const Hangmanarms = document.getElementById("arms");
const Hangmanlegs = document.getElementById("legs");
const playagain = document.getElementById("newGamebtn");
const newgamepop = document.getElementById("newGame");
const wordsEl = document.getElementById("words");
const wrongLettersEl = document.getElementById("letters");
const alphabetbuttons = document.querySelectorAll("#a,#b,#c,#d,#e,#f,#g,#h,#i,#j,#k,#l,#m,#n,#o,#p,#q,#r,#s,#t,#u,#v,#w,#x,#y,#z");




// array of chosen words
const words = ["JAVASCRIPT", "PROGRAM", "FRONT-END", "DEVELOPER", ];

let selectedword = words[Math.floor(Math.random() * words.length)];
console.log(selectedword);

//correct letters array
const correctLetters = ["J", "A", "V", "S", "C", "R", "P", "T", "I"];

//wrong letter array
const wrongLetters = [];

//display hidden word
function displaywords() {
    wordsEl.innerHTML = `${selectedword
        .split('').map(letter=> ` 
             <div class="letters">
        ${correctLetters.includes(letter) ? letter : ''}
</div>`)
.join('')}
`;

}

displaywords();



//aphabet letter buttons

//aphabet on click function
alphabetbuttons.addEventListener('click', function() {
    
});
console.log();



    


var HangmanParts = [$("#head"), $("#body"), $("#arms"), $("#legs")];