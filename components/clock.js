// Generate hour marks
function generateHourMarks() {
  const hourMarksContainer = document.getElementById('hour-marks');

  for (let i = 0; i < 12; i++) {
    const mark = document.createElement('div');
    mark.style.position = 'absolute';
    mark.style.width = '4px';
    mark.style.height = '24px';
    mark.style.background = '#1f2937';
    mark.style.borderRadius = '2px';
    mark.style.transformOrigin = 'center';
    mark.style.left = '50%';
    mark.style.top = '50%';
    mark.style.transform = `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-134px)`;
    hourMarksContainer.appendChild(mark);
  }
}

// Generate minute marks
function generateMinuteMarks() {
  const minuteMarksContainer = document.getElementById('minute-marks');

  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      // Skip positions where hour marks are
      const mark = document.createElement('div');
      mark.style.position = 'absolute';
      mark.style.width = '2px';
      mark.style.height = '12px';
      mark.style.background = '#9ca3af';
      mark.style.transformOrigin = 'center';
      mark.style.left = '50%';
      mark.style.top = '50%';
      mark.style.transform = `translate(-50%, -50%) rotate(${i * 6}deg) translateY(-140px)`;
      minuteMarksContainer.appendChild(mark);
    }
  }
}

// Update clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate angles (0 degrees = 12 o'clock position)
  const secondAngle = seconds * 6; // 360/60 = 6 degrees per second
  const minuteAngle = minutes * 6 + seconds * 0.1; // 6 degrees per minute + smooth seconds
  const hourAngle = hours * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute

  // Update hands
  document.getElementById('second-hand').style.transform = `rotate(${secondAngle}deg)`;
  document.getElementById('minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('hour-hand').style.transform = `rotate(${hourAngle}deg)`;

  // Update digital time
  const options = {
    weekday: 'short',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById('digital-time').textContent = formattedDate;
}

// Initialize
generateHourMarks();
generateMinuteMarks();
updateClock();

// Update every second
setInterval(updateClock, 1000);
