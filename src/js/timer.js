const TIMER = {
  DAYS: document.querySelector('#days'),
  HOURS: document.querySelector('#hours'),
  MINUTES: document.querySelector('#minutes'),
  SECONDS: document.querySelector('#seconds'),
};

const deadline = '2022-10-22T17:53';

function getTimeRemaining(endTime = deadline) {
  const convertTime = Date.parse(endTime);
  const nowTime = Date.parse(new Date());
  const difference = convertTime - nowTime;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  return {
    difference,
    days,
    hours,
    minutes,
    seconds,
  };
}

function setClock(endTime = deadline) {
  const date = getTimeRemaining(endTime);
  if (date.difference < 0) {
    TIMER.DAYS.textContent = '00';
    TIMER.HOURS.textContent = '00';
    TIMER.MINUTES.textContent = '00';
    TIMER.SECONDS.textContent = '00';
    return;
  }

  for (const keys in date) {
    if (date[keys] < 10) {
      date[keys] = `0${date[keys]}`;
    }
  }
  TIMER.DAYS.textContent = date.days;
  TIMER.HOURS.textContent = date.hours;
  TIMER.MINUTES.textContent = date.minutes;
  TIMER.SECONDS.textContent = date.seconds;
  const timerInterval = setInterval(setClock, 1000);
  if (date.difference < 1) {
    clearInterval(timerInterval);
  }
}

setClock();
