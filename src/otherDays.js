import { getWeekday } from "./getWeekday.js";

function otherDays(thisWeek) {
    // function to display the rest of the days of the week in the dom. 

    //query selector
    const div = document.querySelector(".other");

    thisWeek.forEach(day => {
        let weekDay = getWeekday(new Date(day["datetime"]));
        let value = weekDay + " : " + day["temp"];

        // creating child node
        const valueSection = document.createElement("div");
        
        // assigning value to child node
        valueSection.textContent = value;

        // appending child node to parent
        div.appendChild(valueSection);
    });
}

export { otherDays }