const main = document.querySelector(".main");
const temperature = document.querySelector(".temp");
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const today = document.querySelector(".day");
const place = document.querySelector(".place");
const btn = document.querySelector("button");
const inputValue = document.querySelector("input");

function displayToday(todayData) {
    let temp = todayData["temp"];
    let tempmin = todayData["tempmin"];
    let tempmax = todayData["tempmax"];
    let day = todayData["datetimeEpoch"];

    
    temperature.textContent = temp;
    maxTemp.textContent = tempmax;
    minTemp.textContent = tempmin;
    today.textContent = day;
    place.textContent = inputValue.value;
}

async function getData(city) {
    let temp_unit = "metric"
    const str = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=" + temp_unit + "&key=GDGU3H48VVK9DYU3DKVF5V3UK&contentType=json";
    const response = await fetch(str,{mode:"cors"});
    const value = await response.json()
    // console.log(value["days"]);
    let weatherData = value["days"];
    let todayData = weatherData[0];

    displayToday(todayData);

    main.textContent = JSON.stringify(value["days"]);
}



btn.addEventListener("click", (event)=> {
    event.preventDefault();
    getData(inputValue.value);
});