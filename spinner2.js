const animations = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
];
let currentIndex = 0; 

function animate() {
  process.stdout.write(animations[currentIndex]);
  currentIndex = (currentIndex + 1) % animations.length;
}

// Set the interval for the animation to repeat every 900ms
const intervalTime = 900;
setInterval(animate, intervalTime);
