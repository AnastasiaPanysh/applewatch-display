function getDate() {
    const today = new Date(); // текущая дата
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    document.querySelector('.time').innerHTML = hours + ':' + minutes;
    document.querySelector('.year').innerHTML = year;
}
setInterval(getDate, 1000);