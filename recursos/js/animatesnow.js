$(document).ready(function () {
	$(window).resize(function () {
			 cambio();
	});
	
	cambio();
	
	function cambio(){
		if ($(window).width() >= 576) {
			function createSnowFlake() {
				const snow_flake = document.createElement('i');
				snow_flake.classList.add('fas');
				snow_flake.classList.add('fa-snowflake');
				snow_flake.style.right = Math.random() * window.innerWidth + 'px';
				snow_flake.style.animationDuration = Math.random() * 8 + 10 + 's'; // between 3 - 7 seconds
				snow_flake.style.opacity = Math.random();
				snow_flake.style.fontSize = Math.random() * 25 + 40 + 'px';
				
				document.body.appendChild(snow_flake);
				
				setTimeout(() => {
					snow_flake.remove();
				}, 8000)
			}
			} else {
				console.log(cambio)
			}
			return setInterval(createSnowFlake, 500);
	}
});