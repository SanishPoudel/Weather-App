function getWeekday(date) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekDays[date.getDay()];
    return day;
}

export { getWeekday }