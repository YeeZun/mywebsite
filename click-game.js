const button = document.getElementById("click-button");
const container = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 15; // seconds
let gameOver = false;

// Function to move button randomly
function moveButton() {
    if (gameOver) return; // stop moving after game ends

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Handle button click
button.addEventListener("click", () => {
    if (gameOver) return;

    score++;
    scoreDisplay.textContent = "Score: " + score;
    moveButton();
});

// Move button every 2 seconds automatically
const moveInterval = setInterval(moveButton, 2000);

// Timer countdown
const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = "Time left: " + timeLeft + "s";

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        clearInterval(moveInterval);
        gameOver = true;
        timerDisplay.textContent = "Time's up!";
        button.disabled = true;
        alert("Game Over! Your score is: " + score);
    }
}, 1000);

// Initial button position
moveButton();