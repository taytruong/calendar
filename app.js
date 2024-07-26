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

function createCalendar(year, month) {
  const firstDay = (new Date(year, month, 1).getDay() + 1) % 7 || 7;
  const lastDay = new Date(year, month + 1, 0).getDate();

  while (days.firstChild) {
    days.removeChild(days.firstChild);
  }

  for (let i = firstDay - 1; i > 0; i--) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    days.appendChild(empty);
  }

  for (let i = 1; i <= lastDay; i++) {
    const day = document.createElement("div");
    day.appendChild(document.createTextNode(i));
    day.dataset.day = i;

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    days.appendChild(day);
  }
  updateMonthAndDate(year, month);
  daySelect();
}

function updateMonthAndDate(year, month) {
  while (h1.firstChild) {
    h1.removeChild(h1.firstChild);
  }

  while (p.firstChild) {
    p.removeChild(p.firstChild);
  }

  h1.appendChild(document.createTextNode(months[month]));
  const fullDateText = new Date(year, month, 1).getFullYear();
  p.appendChild(document.createTextNode(fullDateText));
}

function daySelect() {
  document.querySelectorAll(".days div").forEach((day) => {
    if (!day.classList.contains("empty")) {
      day.addEventListener("click", () => {
        document
          .querySelectorAll(".days div")
          .forEach((day) => day.classList.remove("selected"));
        day.classList.add("selected");
      });
    }
  });
} 

previousBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  createCalendar(currentYear, currentMonth);
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  createCalendar(currentYear, currentMonth);
});

todayBtn.addEventListener("click", () => {
  currentYear = today.getFullYear();
  currentMonth = today.getMonth();
  createCalendar(currentYear, currentMonth);
});

createCalendar(currentYear, currentMonth);
