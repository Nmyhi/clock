const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const minsDegrees = ((mins / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const hoursDegrees = ((hours / 24) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(`${hours}h ${mins}mins ${seconds}seconds`);
    console.log(`${hoursDegrees}hdeg ${minsDegrees}minsdeg ${secondsDegrees}secondsdeg`);
    
}

setInterval(setDate, 1000, );