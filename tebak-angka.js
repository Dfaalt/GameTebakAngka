// mengacak angka antara 1 dan 100
var secretNumber = Math.floor(Math.random() * 100) + 1;

// mengambil elemen dari HTML
var message = document.getElementById("message");
var guessInput = document.getElementById("guess");
var submitButton = document.getElementById("submit");
var resetButton = document.getElementById("reset");
var message = document.getElementById("message");
message.style.color = "white";


// mengatur ulang game
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  message.textContent = "";
}

// memeriksa tebakan pengguna
function checkGuess() {
  var guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Tolong masukkan angka antara 1 dan 100";
  } else if (guess === secretNumber) {
    message.textContent = "Selamat, tebakan Anda benar!";
  } else if (guess < secretNumber) {
    message.textContent = "Tebakan Anda terlalu rendah";
  } else {
    message.textContent = "Tebakan Anda terlalu tinggi";
  }
}

// menambahkan event listener ke tombol tebak dan reset
submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
