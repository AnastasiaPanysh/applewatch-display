class Watch {
    getDate() {
        const today = new Date();
        const hours = (today.getHours() < 10) ? '0' + today.getHours() : today.getHours();
        const minutes = (today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes();
        const year = today.getFullYear();
        document.querySelector('.time').innerHTML = hours + ':' + minutes;
        document.querySelector('.year').innerHTML = year;
    }

}
const watch = new Watch()
console.log(watch.getDate(setInterval, 1000));