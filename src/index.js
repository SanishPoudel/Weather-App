import { displayToday } from "./displayToday.js"
import { otherDays } from "./otherDays.js";

const main = document.querySelector(".main");
const btn = document.querySelector("button");
const inputValue = document.querySelector("input");



async function getData(city) {
    let temp_unit = "metric"
    const str = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=" + temp_unit + "&key=GDGU3H48VVK9DYU3DKVF5V3UK&contentType=json";
    const response = await fetch(str,{mode:"cors"});
    const value = await response.json()

    let weatherData = value["days"];
    let todayData = weatherData[0];
    
    let thisWeek = [];
    for (let i = 0; i<7; i++) {
        thisWeek[i] = weatherData[i];
    }
    console.log(thisWeek);
    
    displayToday(todayData);
    otherDays(thisWeek);

}



btn.addEventListener("click", (event)=> {
    event.preventDefault();
    getData(inputValue.value);
});