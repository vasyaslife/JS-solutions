window.addEventListener('DOMContentLoaded', () => {

    let timerElem = document.getElementById('timer'),
        hours = timerElem.querySelector('.hours'),
        minutes = timerElem.querySelector('.minutes'),
        seconds = timerElem.querySelector('.seconds'),
        deadline = '2019-07-14 00:00';

    timer(deadline, hours, minutes, seconds);

    function timer(deadline, hours, minutes, seconds) {

        function getTimeRemaning() {
            let difference = Date.parse(deadline) - Date.parse(new Date()),
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

        function setClock() {    
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let data = getTimeRemaning(deadline);
                hours.textContent = data.hours;
                minutes.textContent = data.minutes;
                seconds.textContent = data.seconds;

                if (data.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        setClock();
    }

});