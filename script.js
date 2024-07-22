const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

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

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  monthEl.innerText = months[month];
  fullDateEl.innerText = new Date().toDateString();

  // Clear previous days
  while (daysEl.firstChild) {
    daysEl.removeChild(daysEl.firstChild);
  }

  // Add empty divs for days of the week before the first day of the month
  for (let i = firstDay === 0 ? 6 : firstDay - 1; i > 0; i--) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty");
    daysEl.appendChild(emptyDiv);
  }

  // Add divs for each day of the month
  for (let i = 1; i <= lastDay; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = i;
    dayDiv.dataset.day = i;

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    daysEl.appendChild(dayDiv);
  }

  addDayClickListeners();
}

function addDayClickListeners() {
  document.querySelectorAll(".days div").forEach((dayEl) => {
    if (!dayEl.classList.contains("empty")) {
      dayEl.addEventListener("click", () => {
        document
          .querySelectorAll(".days div")
          .forEach((el) => el.classList.remove("selected"));
        dayEl.classList.add("selected");
      });
    }
  });
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
});

document.getElementById("todayButton").addEventListener("click", () => {
  currentYear = today.getFullYear();
  currentMonth = today.getMonth();
  generateCalendar(currentYear, currentMonth);
});

// Initialize calendar with current month and year
generateCalendar(currentYear, currentMonth);
