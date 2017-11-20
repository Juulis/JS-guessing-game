var n = Math.floor(Math.random() * 10) + 1;
var incr = 10;

var textInput = document.getElementById('guessInput');
var answer = document.getElementById('answer');
var rangeOutput = document.getElementById('rangeOutput');
var ngb = document.getElementById('replayBtn');
ngb.addEventListener("click", resetGame)
var guessBtn = document.getElementById("guessBtn");
guessBtn.addEventListener("click", enterGuess);



function enterGuess() {
    rangeOutput.innerHTML = "Det är ett tal mellan 1-" + incr;
    var cheat = document.getElementById("cheat");    
    cheat.innerHTML = n;

    if (textInput.value < n) {
        answer.innerHTML = "För litet!";
        textInput.value = null;
    }
    else if (textInput.value > n) {
        answer.innerHTML = "För stort!";
        textInput.value = null;
    }
else if (textInput.value == n) {
        answer.innerHTML = "RÄTT!! Du är ju fan grym!?\nVill du spela igen med tal 1-" + (incr + 10);
        textInput.value = null;
        ngb.style.display = "inline";
        guessBtn.disabled = true;
        textInput.disabled = true;
    }
}

function resetGame() {
    ngb.style.display = "none";
    answer.innerHTML = "";
    incr += 10;
    n = Math.floor(Math.random() * incr) + 1;
    rangeOutput.innerHTML = "Det är ett tal mellan 1-" + incr;
    guessBtn.disabled = false;
    textInput.disabled = false;
}
