function displayToday(todayData) {

    // query selectors
    // const temperature = document.querySelector(".temp");
    // const maxTemp = document.querySelector(".maxTemp");
    // const minTemp = document.querySelector(".minTemp");
    // const today = document.querySelector(".day");
    // const place = document.querySelector(".place");
    const inputValue = document.querySelector("input");

    const div = document.querySelector(".main");

    //creating nodes
    const temperature = document.createElement("div");
    const maxTemp = document.createElement("div");
    const minTemp = document.createElement("div");
    const today = document.createElement("div");
    const place = document.createElement("div");
    

    // assigning variables to hold values
    let temp = todayData["temp"];
    let tempmin = todayData["tempmin"];
    let tempmax = todayData["tempmax"];
    
    // need to fix this...................................................................................
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    // adding variable to the dom
    temperature.textContent = temp;
    maxTemp.textContent = tempmax;
    minTemp.textContent = tempmin;
    today.textContent = day;
    place.textContent = inputValue.value;

    // appending to parent node
    div.appendChild(temperature);
    div.appendChild(maxTemp);
    div.appendChild(minTemp);
    div.appendChild(today);
    div.appendChild(place);
}

export { displayToday }