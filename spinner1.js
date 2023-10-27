function animation() {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 700);

}

// Set the interval for the animation to repeat every 1000ms (1 second)
setInterval(animation, 900);
