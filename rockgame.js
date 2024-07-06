
document.addEventListener('DOMContentLoaded', function() {
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const resetButton = document.getElementById("reset");
  const player1Score = document.getElementById("player1-score").querySelector('span:nth-child(2)');
  const player2Score = document.getElementById("player2-score").querySelector('span:nth-child(2)');
  const winnerElement = document.getElementById("winner");

  let player1ScoreCount = 0;
  let player2ScoreCount = 0;

  rockButton.addEventListener("click", function() {
    playRound("rock");
  });

  paperButton.addEventListener("click", function() {
    playRound("paper");
  });

  scissorsButton.addEventListener("click", function() {
    playRound("scissors");
  });

  resetButton.addEventListener("click", resetGame);

  function playRound(player1Choice) {
    const choices = ["rock", "paper", "scissors"];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    if (player1Choice === player2Choice) {
      winnerElement.textContent = "It's a tie!";
    } else if (
      (player1Choice === "rock" && player2Choice === "scissors") ||
      (player1Choice === "paper" && player2Choice === "rock") ||
      (player1Choice === "scissors" && player2Choice === "paper")
    ) {
      player1ScoreCount++;
      player1Score.textContent = player1ScoreCount;
      winnerElement.textContent = "Player 1 wins!";
    } else {
      player2ScoreCount++;
      player2Score.textContent = player2ScoreCount;
      winnerElement.textContent = "Player 2 wins!";
    }
  }

  function resetGame() {
    player1ScoreCount = 0;
    player1Score.textContent = player1ScoreCount;
    player2ScoreCount = 0;
    player2Score.textContent = player2ScoreCount;
    winnerElement.textContent = "";
  }
});
