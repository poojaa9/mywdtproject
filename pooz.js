// Countdown Timer Function
function startCountdown() {
    // Set the date we're counting down to (example: Dec 31, 2024, 23:59:59)
    const saleEndDate = new Date("Dec 31, 2024 23:59:59").getTime();
  
    // Update the countdown every 1 second
    const interval = setInterval(function() {
      // Get the current time
      const now = new Date().getTime();
  
      // Calculate the time remaining
      const timeLeft = saleEndDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      // Display the result in the countdown timer section
      document.getElementById("countdown").innerHTML = `
        <div>
          <span>${days}</span>
          <p>Days</p>
        </div>
        <div>
          <span>${hours}</span>
          <p>Hours</p>
        </div>
        <div>
          <span>${minutes}</span>
          <p>Minutes</p>
        </div>
        <div>
          <span>${seconds}</span>
          <p>Seconds</p>
        </div>
      `;
  
      // If the countdown finishes, display "Sale Ended"
      if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "";
        const expiredMessage = document.createElement('div');
        expiredMessage.classList.add('countdown-expired');
        expiredMessage.textContent = "Sale Ended!";
        document.querySelector('.countdown-timer-container').appendChild(expiredMessage);
      }
    }, 1000);
  }
  
  // Start the countdown when the page loads
  window.onload = startCountdown;
  