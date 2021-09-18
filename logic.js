console.log('Analog Clock');

const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

setInterval(getClockTime, 1000);

function getClockTime() {
    let currentTime = new Date;

    //GETTING RATIO OF SECONDS SO WE CAN MULTIPLY IT BY 360 TO GET AN ANGLE
    let secondsRatio = currentTime.getSeconds() / 60;
    //ADDING secondsRatio SO THAT IT MOVES SMOOTHLY
    let minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
    let hoursRatio = (secondsRatio + currentTime.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty("transform", `rotate(calc(${rotationRatio}*360*1deg))`);
}
