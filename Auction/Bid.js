const countdown = () => {
  const countDate = new Date("April 15, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // how the fuck does time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute *60;
  const day = hour * 24;

  // calculate the time shit
  const textDays = Math.floor(gap / day);
  const textHours = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDays;
  document.querySelector(".hour").innerText = textHours;
  document.querySelector(".minute").innerText = textMinutes;
  document.querySelector(".second").innerText = textSeconds;

};

setInterval(countdown, 1000);