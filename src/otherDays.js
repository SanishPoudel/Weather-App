function otherDays(thisWeek) {
    // function to display the rest of the days of the week in the dom. 
    thisWeek.forEach(day => {
        let weekDay = getWeekday(new Date(day["datetime"]));
        console.log(weekDay + " : " + day["temp"]);
    });
}

function getWeekday(date) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekDays[date.getDay()];
    return day;
}

export { otherDays }