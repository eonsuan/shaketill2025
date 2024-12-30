function updateCountdown() {
  const targetDate = new Date('2025-01-01T00:00:00').getTime();
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
      document.querySelector('.timer').textContent = "Happy New Year!";
      clearInterval(timerInterval); 
      return;
  }

  const totalHours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const formattedHours = totalHours < 10 ? `0${totalHours}` : totalHours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  document.querySelector('.timer').textContent =
      `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
