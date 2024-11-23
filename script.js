// Simplified Perfect Guess Game
window.addEventListener('load', function () {
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let gameOver = false;
  
    const guessInput = document.getElementById('guessInput');
    const checkButton = document.getElementById('checkButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const newGameBtn = document.getElementById('newGameBtn');
  
    function checkGuess() {
      if (gameOver) return;
  
      const userGuess = parseInt(guessInput.value);
  
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100';
        return;
      }
  
      attempts++;
      attemptsDisplay.textContent = `Attempts: ${attempts}`;
  
      if (userGuess === targetNumber) {
        gameOver = true;
        message.textContent = `🎉 Correct! The number was ${targetNumber}. Attempts: ${attempts}`;
        newGameBtn.classList.remove('hidden');
        checkButton.disabled = true;
        guessInput.disabled = true;
      } else {
        message.textContent = userGuess > targetNumber ? 'Lower Number Please!' : 'Higher Number Please!';
      }
  
      guessInput.value = '';
    }
  
    function resetGame() {
      targetNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      gameOver = false;
      message.textContent = '';
      attemptsDisplay.textContent = 'Attempts: 0';
      checkButton.disabled = false;
      guessInput.disabled = false;
      guessInput.value = '';
      newGameBtn.classList.add('hidden');
    }
  
    checkButton.addEventListener('click', checkGuess);
    guessInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') checkGuess();
    });
    newGameBtn.addEventListener('click', resetGame);
  });
  