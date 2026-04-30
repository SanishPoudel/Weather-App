import { getIcon } from "./getIcon.js";
import { getWeekday } from "./getWeekday.js";

function otherDays(thisWeek) {
    // function to display the rest of the days of the week in the dom. 

    //query selector
    const div = document.querySelector(".other");

    //heading
    const heading = document.createElement("h3");
    heading.textContent = "Weather data for upcoming days";
    div.appendChild(heading);

    for (let i = 1; i<7; i++) {
        // using for loop instead of forEach because I don't need sunday

        let day = thisWeek[i]; 

        //converting date into day of week and storing it appropriately
        let weekDay = getWeekday(new Date(day["datetime"])); 
        let value = weekDay + " : " + day["temp"];
        let status = day["icon"];

        // creating child node
        const valueSection = document.createElement("div");
        const condition = document.createElement("img");
        
        // assigning value to child node
        valueSection.textContent = value;
        condition.src = getIcon(status); // not working somehow

        // appending child node to parent
        div.appendChild(valueSection);
        div.appendChild(condition);
    }
}

export { otherDays }