const currentDay = document.getElementById("day");
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const currentDate = new Date();
// console.log(currentDate);

const dayOfWeek = daysOfWeek[currentDate.getDay()];
// console.log(dayOfWeek);
currentDay.innerHTML = `Today is ${dayOfWeek}`;
