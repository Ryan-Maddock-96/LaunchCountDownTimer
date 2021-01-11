
	
	
	function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

	setInterval(function updateTime(){
		
		var launchDate = new Date(2021, 00, 25, 0, 01, 0), //change this to a date in the future test
	currentDate = new Date(),
	difference = Math.abs(launchDate - currentDate) / 1000,
	days = Math.floor(difference / 86400),
	hours = Math.floor(difference / 3600) % 24,
	mins = Math.floor(difference / 60) % 60,
	seconds =  difference % 60,
	counters = document.querySelectorAll('.counter');
		
		for(var i = 0; i < counters.length; i++){
			
			switch (counters[i].getAttribute('data-counttype')) {
				case 'days':
					counters[i].innerHTML = padLeadingZeros(days, 2);
				break;
				case 'hours':
					counters[i].innerHTML = padLeadingZeros(hours, 2);
				break;
				case 'minutes':
					counters[i].innerHTML = padLeadingZeros(Math.round(mins), 2);
				break;
				case 'seconds':
					counters[i].innerHTML = padLeadingZeros(Math.round(seconds), 2);
				break;
				default:
				
				break;
			}
		}
	}, 1000);



