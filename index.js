
let intervalId;
let isRunning = true;

function updateClock() {
    if (!isRunning) return;

    const elapsedTimeElement = document.getElementById('elapsed-time');

    // Current Time
    const now = new Date();

    // Calculate elapsed time since May 30, 2024, 11:34 PM
    const startTime = new Date('May 30, 2024 23:34:00');
    const elapsedTime = now - startTime;

    // Convert elapsed time to days, hours, minutes, seconds
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const elapsedTimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    elapsedTimeElement.textContent = elapsedTimeString;
}

document.getElementById('stop-button').addEventListener('click', () => {
    isRunning = false;
    document.getElementById('stop-button').disabled = true;
    document.getElementById('resume-button').disabled = false;
});

document.getElementById('resume-button').addEventListener('click', () => {
    isRunning = true;
    document.getElementById('stop-button').disabled = false;
    document.getElementById('resume-button').disabled = true;
    updateClock(); // Ensure immediate update after resuming
});

// Update the clock every second
intervalId = setInterval(updateClock, 1000);

// Initial call to display clock immediately on page load
updateClock();
// Play/pause background music when the stop/resume buttons are clicked
document.getElementById('stop-button').addEventListener('click', () => {
    const bgm = document.getElementById('bgm');
    bgm.pause();
});

document.getElementById('resume-button').addEventListener('click', () => {
    const bgm = document.getElementById('bgm');
    bgm.play();
});
