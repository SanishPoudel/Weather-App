import "./style.css";
import { displayToday } from "./displayToday.js";
import { otherDays } from "./otherDays.js";
import spinner from "./img/spinner.svg";

const main = document.querySelector(".main");
const other = document.querySelector(".other");
const btn = document.querySelector("button");
const inputValue = document.querySelector("input");
const content = document.querySelector(".content");

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

function clearDiv(div) {
    // function to clear all contents in a div
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

btn.addEventListener("click", async (event)=> {
    event.preventDefault();
    if (inputValue.value) {
        clearDiv(main);
        clearDiv(other);
        main.classList.remove("afterClick");
        
        
        let load = document.querySelector(".spinner");
        load.hidden = false;
        await getData(inputValue.value);
        load.hidden = true;
        
    } else {
        alert("Please enter a city before searching.");
    }
});