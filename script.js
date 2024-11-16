const timeEl = document.querySelector('.time');
const startBtnEl = document.querySelector('.start-btn');
const pauseBtnEl = document.querySelector('.pause-btn');
const resetBtnEl = document.querySelector('.reset-btn');

let interval;
let timeLeft = 1500;

const updateTimer = () => {
	let minutes = Math.floor(timeLeft / 60);
	let seconds = Math.floor(timeLeft % 60);
	let formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
	timeEl.textContent = formattedTime;
};

const startTimer = () => {
	if (interval) return;
	interval = setInterval(() => {
		timeLeft--;
		updateTimer();
		if (timeLeft === 0) {
			alert('Time is up!');
			resetTimer();
		}
	}, 1000);
};

const pauseTimer = () => {
	clearInterval(interval);
	interval = null;
};

const resetTimer = () => {
	clearInterval(interval);
	interval = null;
	timeLeft = 1500;
	updateTimer();
};

startBtnEl.addEventListener('click', startTimer);
pauseBtnEl.addEventListener('click', pauseTimer);
resetBtnEl.addEventListener('click', resetTimer);

updateTimer();
