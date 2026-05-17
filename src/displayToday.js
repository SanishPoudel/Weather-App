import { getIcon } from "./getIcon.js";
import { getWeekday } from "./getWeekday.js";

function displayToday(todayData) {

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
    temperature.textContent =  temp;
    maxTemp.textContent = "↓" + tempmax;
    minTemp.textContent = "↑" + tempmin;
    today.textContent = day;
    place.textContent =  inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1);
    condition.src = getIcon(status);
    condition.className = "mainCondition";


    const grp1 = document.createElement("div");
    grp1.className = "grp1";
    grp1.appendChild(place);
    grp1.appendChild(today);

    const grp2 = document.createElement("div");
    grp2.className = "grp2";
    grp2.appendChild(maxTemp);
    grp2.appendChild(minTemp);

    const grp3 = document.createElement("div");
    grp3.className = "grp3"
    grp3.appendChild(grp2);
    grp3.appendChild(temperature)

    div.appendChild(grp1);
    div.appendChild(condition);
    div.appendChild(grp3);
    div.style["border"] = "1px solid black";
}

export { displayToday }