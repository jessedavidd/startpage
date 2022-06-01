function displayTime(){
  const dateTime = new Date();
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();
  const second = dateTime.getSeconds();
  const day = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();

  document.getElementById('hours').innerHTML = hour;
  document.getElementById('minutes').innerHTML = minute;
  document.getElementById('seconds').innerHTML = second;
  document.getElementById('days').innerHTML = day;
  document.getElementById('months').innerHTML = month;
  document.getElementById('years').innerHTML = year;
}

setInterval(displayTime, 10);
