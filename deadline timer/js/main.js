window.addEventListener('DOMContentLoaded', function() {

    // Put here your deadline
    let deadline = '2019-07-10 00:00';

    function getTimeRemaning(endtime) {
        let difference = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((difference/1000)%60),
            minutes = Math.floor((difference/1000/60) % 60),
            hours = Math.floor((difference/(1000*60*60)));

            if (seconds < 0 || minutes < 0 || hours < 0) {
                hours = '00';
                minutes = '00';
                seconds = '00';
            } else {
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                if (hours < 10) {
                    hours = '0' + hours;
                }
            }

        return {
            'total' : difference,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let data = getTimeRemaning(endtime);
            hours.textContent = data.hours;
            minutes.textContent = data.minutes;
            seconds.textContent = data.seconds;

            if (data.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    // Put this when you need to init your timer
    setClock('timer', deadline);
});