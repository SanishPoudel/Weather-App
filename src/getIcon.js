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
    if (status === "clear-day.svg") {
        return clearDay;
    }
    else if (status === "clear-night.svg") {
        return clearNight;
    }
    else if (status === "cloudy.svg") {
        return cloudy;
    }
    else if (status === "fog.svg") {
        return fog;
    }
    else if (status === "partly-cloudy-day.svg") {
        return partlyCloudyDay;
    }
    else if (status === "partly-cloudy-night.svg") {
        return partlyCloudyNight;
    }
    else if (status === "rain.svg") {
        return rain;
    }
    else if (status === "snow.svg") {
        return snow;
    }
    else if (status === "wind.svg") {
        return wind;
    }
}

export { getIcon }