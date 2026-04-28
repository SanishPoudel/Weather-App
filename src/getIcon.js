// import imgages as variables
// define a function that returns variables matching the STATUS parameter

import clearDay from "./img/clear-day.svg";
import clearNight from "./img/clear-night.svg";
import cloudy from "./img/cloudy.svg";
import fog from "./img/fog.svg";
import partlyCloudyDay from "./img/partly-cloudy-day.svg";
import partlyCloudyNight from "./img/partly-cloudy-night.svg";
import rain from "./img/rain.svg";
import snow from "./img/snow.svg";
import wind from "./img/wind.svg";

function getIcon(status) {
    if (status === "clear-day") {
        return clearDay;
    }
    else if (status === "clear-night") {
        return clearNight;
    }
    else if (status === "cloudy") {
        return cloudy;
    }
    else if (status === "fog") {
        return fog;
    }
    else if (status === "partly-cloudy-day") {
        return partlyCloudyDay;
    }
    else if (status === "partly-cloudy-night") {
        return partlyCloudyNight;
    }
    else if (status === "rain") {
        return rain;
    }
    else if (status === "snow") {
        return snow;
    }
    else if (status === "wind") {
        return wind;
    }
}

export { getIcon }