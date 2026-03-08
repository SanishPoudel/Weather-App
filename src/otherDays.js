import { getWeekday } from "./getWeekday.js";

function otherDays(thisWeek) {
    // function to display the rest of the days of the week in the dom. 
    thisWeek.forEach(day => {
        let weekDay = getWeekday(new Date(day["datetime"]));
        console.log(weekDay + " : " + day["temp"]);
    });
}

export { otherDays }