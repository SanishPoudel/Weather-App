import { getIcon } from "./getIcon.js";
import { getWeekday } from "./getWeekday.js";

function otherDays(thisWeek) {
    // function to display the rest of the days of the week in the dom. 

    //query selector
    const div = document.querySelector(".other");

    for (let i = 1; i<7; i++) {
        // using for loop instead of forEach because I don't need sunday

        let day = thisWeek[i]; 
        let tempSection = document.createElement("div");
        let weekBox = document.createElement("div");

        //converting date into day of week and storing it appropriately
        let weekDay = getWeekday(new Date(day["datetime"])); 
        let value = weekDay
        let status = day["icon"];

        // creating child node
        const valueSection = document.createElement("div");
        const condition = document.createElement("img");
        
        // adding classes
        weekBox.className = "weekBox";
        condition.className = "otherCondition";
        
        
        // assigning value to child node
        tempSection.textContent = day["temp"];
        valueSection.textContent = value;
        condition.src = getIcon(status); 

        // appending child node to weekbox
        weekBox.appendChild(valueSection);
        weekBox.appendChild(condition);
        weekBox.appendChild(tempSection);

        // appending to parent node
        div.appendChild(weekBox);
    }
}

export { otherDays }