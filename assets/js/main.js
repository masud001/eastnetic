// this code is responsible for remaining time counter
(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	let testTime = 'Oct 30, 2021 00:00:00',
		countDown = new Date(testTime).getTime(),
		x = setInterval(function () {
			let now = new Date().getTime(),
				distance = countDown - now;

			(document.getElementById('days').innerText = Math.floor(distance / day)),
				(document.getElementById('hours').innerText = Math.floor((distance % day) / hour)),
				(document.getElementById('minutes').innerText = Math.floor(
					(distance % hour) / minute
				)),
				(document.getElementById('seconds').innerText = Math.floor(
					(distance % minute) / second
				));

			//do something later when date is reached
			if (distance < 0) {
				let countdown = document.getElementById('countdown');

				countdown.style.display = 'none';

				clearInterval(x);
			}
			//seconds
		}, 0);
})();

// init Magnific Popup js library
$(document).ready(function () {
	$('.jsVideoPlay').magnificPopup({
		type: 'iframe',
	});
});
