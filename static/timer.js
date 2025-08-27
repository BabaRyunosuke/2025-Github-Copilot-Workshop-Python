let timer = 1500; // 25分（秒）
let interval = null;
let running = false;

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const canvas = document.getElementById('timerCanvas');
const ctx = canvas.getContext('2d');

function updateDisplay() {
    const min = String(Math.floor(timer / 60)).padStart(2, '0');
    const sec = String(timer % 60).padStart(2, '0');
    timeDisplay.textContent = `${min}:${sec}`;
    drawCircle();
}

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 円グラフ（進行度）
    const percent = (1500 - timer) / 1500;
    ctx.beginPath();
    ctx.arc(100, 100, 90, -Math.PI/2, -Math.PI/2 + percent * 2 * Math.PI);
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 12;
    ctx.stroke();
    // 外枠
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, 2 * Math.PI);
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 12;
    ctx.stroke();
}

function startTimer() {
    if (running) return;
    running = true;
    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateDisplay();
        } else {
            clearInterval(interval);
            running = false;
            alert('タイマー終了！');
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    timer = 1500;
    running = false;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
