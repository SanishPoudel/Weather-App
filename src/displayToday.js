function displayToday(todayData) {

    const temperature = document.querySelector(".temp");
    const maxTemp = document.querySelector(".maxTemp");
    const minTemp = document.querySelector(".minTemp");
    const today = document.querySelector(".day");
    const place = document.querySelector(".place");
    const inputValue = document.querySelector("input");

    let temp = todayData["temp"];
    let tempmin = todayData["tempmin"];
    let tempmax = todayData["tempmax"];
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    
    temperature.textContent = temp;
    maxTemp.textContent = tempmax;
    minTemp.textContent = tempmin;
    today.textContent = day;
    place.textContent = inputValue.value;
}

export { displayToday }