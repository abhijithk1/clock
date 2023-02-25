
/**
 * Displays the current date and time, and updates the background color based on the hour.
 */
function currentTime() {
  const currentDate = new Date();
  const [year, month, date, day, hour, minute, second] = [
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getDay(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds(),
  ];

  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Display date and time using template literals
  document.getElementById("year").innerHTML = year;
  document.getElementById("month").innerHTML = monthArray[month];
  document.getElementById("date").innerHTML = date;
  document.getElementById("day").innerHTML = dayArray[day];
  document.getElementById("hour").innerHTML = hour < 10 ? `0${hour}` : hour;
  document.getElementById("minute").innerHTML = minute < 10 ? `0${minute}` : minute;
  document.getElementById("second").innerHTML = second < 10 ? `0${second}` : second;

  // Update background color based on the hour
  const skyGradient = `sky-gradient-${hour}`;
  document.body.classList.add(skyGradient);
  const elements = document.getElementsByClassName("clock");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(skyGradient);
  }
}

// Call currentTime() every second to update the clock
setInterval(currentTime, 1000);

