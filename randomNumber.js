let delay = 3; // in seconds

const countdownInterval = setInterval(() => {
  console.log(`Generating random number in ${delay} seconds...`);
  delay--;
}, 1000);

setTimeout(() => {
  clearInterval(countdownInterval); // clear the countdown interval
  const randomNumber = Math.floor(Math.random() * 100) + 1; // generate a random number between 1 and 100
  console.log(`Random number generated: ${randomNumber}`);
}, delay * 1000);
