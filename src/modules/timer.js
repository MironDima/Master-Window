const timer = ({ deadline, blockId }) => {
	blockId.forEach(blockTime => {
		const blockTimerId = document.getElementById(blockTime)
		const timerDay = blockTimerId.querySelector('.count_1 > span');
		const timerHour = blockTimerId.querySelector('.count_2 > span');
		const timerMinute = blockTimerId.querySelector('.count_3 > span');
		const timerSecond = blockTimerId.querySelector('.count_4 > span');

		const getTimer = (deadline) => {
			const dateStop = new Date(deadline).getTime();
			const dateNow = new Date().getTime();

			const timeRemaining = (dateStop - dateNow) / 1000;
			let day = Math.floor(((timeRemaining / 60 / 60) / 24)).toString().padStart(2,'0');
			let hour = Math.floor((timeRemaining / 60 / 60) % 24).toString().padStart(2,'0');
			let minute = Math.floor((timeRemaining / 60) % 60).toString().padStart(2,'0');
			let seconde = Math.floor(timeRemaining % 60).toString().padStart(2,'0');
			return { timeRemaining, day, hour, minute, seconde }
		}

		const updateTime = () => {
			let getTime = getTimer(deadline);
			if (getTime.timeRemaining > 0) {
				timerDay.textContent = getTime.day;
				timerHour.textContent = getTime.hour;
				timerMinute.textContent = getTime.minute;
				timerSecond.textContent = getTime.seconde;
			}
			if (getTime.timeRemaining <= 0) {
				clearInterval(idInterval);
			}
		}
		const idInterval = setInterval(updateTime, 1000);
		updateTime()
	});
}
export default timer