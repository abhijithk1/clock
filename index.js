
function currentTime() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let date = currentDate.getDate();
  let day = currentDate.getDay();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  monthArray = [
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

  dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  document.getElementById("year").innerHTML = year;
  document.getElementById("month").innerHTML = monthArray[month];
  document.getElementById("date").innerHTML = date;
  document.getElementById("day").innerHTML = dayArray[day];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;

  

  let skyGradient = `sky-gradient-${hour}`;
  document.body.classList.add(skyGradient);

  let element = document.getElementsByClassName("clock");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add(skyGradient);
  }
}

setInterval(() => {
  currentTime();
}, 1000);
