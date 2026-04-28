import { getIcon } from "./getIcon.js";
import { getWeekday } from "./getWeekday.js";

function displayToday(todayData) {

    //todo
    // add styles to the container

    // query selectors
    const inputValue = document.querySelector("input");
    const div = document.querySelector(".main");

    //creating nodes
    const temperature = document.createElement("div");
    const maxTemp = document.createElement("div");
    const minTemp = document.createElement("div");
    const today = document.createElement("div");
    const place = document.createElement("div");
    const heading = document.createElement("h3");
    const condition = document.createElement("img");
    

    // assigning variables to hold values
    let temp = todayData["temp"];
    let tempmin = todayData["tempmin"];
    let tempmax = todayData["tempmax"];
    let day = getWeekday(new Date());
    let status = todayData["icon"];

    // adding variable to the dom
    temperature.textContent = "Temperature: " + temp;
    maxTemp.textContent = "Maximum temperature: " + tempmax;
    minTemp.textContent = "Minimum temperature: " + tempmin;
    today.textContent = "Day: " + day;
    heading.textContent = "Weather data for today"
    place.textContent = "Location: " + inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1);
    condition.src = getIcon(status);

    // appending to parent node
    div.appendChild(heading);
    div.appendChild(place);
    div.appendChild(today);
    div.appendChild(temperature);
    div.appendChild(maxTemp);
    div.appendChild(minTemp);
    div.appendChild(condition);
    
}

export { displayToday }