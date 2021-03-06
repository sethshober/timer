/* highlights include:
	
	text input value property
		ex. var days = document.getElementById("days").value;
		The value property sets or returns the value of the value attribute of a text field.
		The value property contains the default value OR the value a user types in (or a value set by a script).

	Math.floor()

		syntax = Math.floor(x)
		The Math.floor(x) function returns the largest integer less than or equal to a number "x".

		Math
			JavaScript object that allows you to perform mathematical tasks
			Includes several mathematical methods
				ex. random, min, max, round, ceil
			Includes several mathematical constants
				ex. E (Euler's Number), PI, SQRT2 (square root of 2)

		floor = a static method of Math

	setInterval()

		syntax = setInterval(function,milliseconds,lang)
		a method of the Window object
		calls a function or evaluates an expression at specified intervals (in milliseconds).
		will continue calling the function until clearInterval() is called, or the window is closed.
		1000ms = 1 second
		also see the setTimeout() method

	clearInterval()

		syntax = clearInterval(id_of_setinterval)
		a method of the Window object
		clears the timer/execution created by the setInterval method

*/

function totalSeconds() { // totalSeconds function definition, determine total seconds from inputs

	var days = document.getElementById("days").value; // local variable days is the input value from #days
	var hours = document.getElementById("hours").value; // local variable hours is the input value from #hours
	var minutes = document.getElementById("minutes").value; // local variable minutes is the input value from #minutes
	var seconds = document.getElementById("seconds").value; // local variable seconds is the input value from #seconds

	if(days == "" && hours == "" && minutes == "" && seconds == ""){swal("Forgot Something?", "Please provide a time input.", "info");};

	t = (days * 86400) + (hours * 3600) + (minutes * 60) + (seconds); // global variable t is the total number of seconds

	if(t > 0) { // if a duration of time has been entered, start the interval, otherwise ask for a duration of time

	countdownTimer = setInterval("remainingTime()", 1000); // set global variable countdownTimer
											 			   // run remainingTime() once every second

	} else {

		window.alert("Please enter a duration of time.."); // pop up window prompts the user

	}
}

function remainingTime() { // remainingTime function definition, this will run every second

	var h = Math.floor(t / 3600); // local variable h, determine the total remaining hours
	var m = Math.floor(t % 3600 / 60); // local variable m, determine the total remaining minutes
	var s = Math.floor(t % 3600 % 60); // local variable s, determine the total remaining seconds

	document.getElementById("countdown").innerHTML = ((h > 0 ? h + ":" : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + ":" : "00:") + (s < 10 ? "0" : "") + s);
	// format the total remaining time and put it into <h1 id="countdown"></h1>

	if (t == 0) { // if there are no remaining seconds, alert the user, otherwise subtract one second from the total remaining

        clearInterval(countdownTimer); // stop the interval defined in the global variable countdownTimer
        
        //run repeat if checked
        if(document.getElementById('repeat').checked){
        	totalSeconds();
        } else {
        	swal("Beep Beep", null, "success")
    	}

        //totalSeconds();
        //document.getElementById("countdown").innerHTML = "Beep Beep"; // replace the countdown with an alert

    } else {

        t--; // subtract one second from the total remaining seconds

    }
}

function refresh() { // refresh function definition, pretty much a reset

	clearInterval(countdownTimer); // stop the interval defined in the global variable countdownTimer
	document.getElementById("countdown").innerHTML = "Countdown"; // switch the timer back to the original title
	document.getElementById("days").value = ""; // empty all three inputs
	document.getElementById("hours").value = "";
	document.getElementById("minutes").value = "";
	document.getElementById("seconds").value = "";

}


//start count via ENTER button
window.addEventListener("keyup", function(event){
	if(event.keyCode == 13){
		//event.preventDefault();
		document.getElementById('start').click();
	}
});
