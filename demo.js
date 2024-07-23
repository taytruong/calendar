const containerCalendar = document.querySelector(".container");

const calendar = document.createElement("div");
calendar.classList.add("calendar");
containerCalendar.appendChild(calendar);

const month = document.createElement("div");
month.classList.add("month");
calendar.appendChild(month);

const previousBtn = document.createElement("button");
previousBtn.id = "prevMonth";
previousBtn.textContent = "Previous";
month.appendChild(previousBtn);

const date = document.createElement("div");
date.classList.add("date");
month.appendChild(date);

const h1 = document.createElement("h1");
date.appendChild(h1);

const p = document.createElement("p");
date.appendChild(p);

const nextBtn = document.createElement("button");
nextBtn.id = "nextMonth";
nextBtn.textContent = "Next";
month.appendChild(nextBtn);

const weekdays = document.createElement("div");
weekdays.classList.add("weekdays");
calendar.appendChild(weekdays);

const list_days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
list_days.forEach((day) => {
  const days = document.createElement("div");
  days.textContent = day;
  weekdays.appendChild(days);
});

const days = document.createElement("div");
days.classList.add("days");
calendar.appendChild(days);

const todayBtn = document.createElement("button");
todayBtn.id = "todayButton";
todayBtn.textContent = "Go to Today";
containerCalendar.appendChild(todayBtn);

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];



