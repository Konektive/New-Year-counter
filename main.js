const newYearDate = new Date("1 Jan 2023 00:00:01");
const spanDays = document.querySelector("p.days");
const spanHours = document.querySelector("p.hours");
const spanMinutes = document.querySelector("p.minutes");
const spanSeconds = document.querySelector("p.seconds");

const clock = () => {
  const actualDate = new Date();
  const time = newYearDate - actualDate;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  const daysCount = days < 10 ? `0` + days : days;
  const hoursCount = hours < 10 ? `0` + hours : hours;
  const minutesCount = minutes < 10 ? `0` + minutes : minutes;
  const secondsCount = seconds < 10 ? `0` + seconds : seconds;

  spanDays.textContent = daysCount;
  spanHours.textContent = hoursCount;
  spanMinutes.textContent = minutesCount;
  spanSeconds.textContent = secondsCount;
};

setInterval(clock, 1000);
