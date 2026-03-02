console.log("hello");
const main = document.querySelector(".main");


async function getData(city){
    // let city = "Melbourne";
    let temp_unit = "metric"
    const str = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=" + temp_unit + "&key=GDGU3H48VVK9DYU3DKVF5V3UK&contentType=json";
    const response = await fetch(str,{mode:"cors"});
    const value = await response.json()
    console.log(value["days"]);
    main.textContent = value["days"];
}

const btn = document.querySelector("button");

btn.addEventListener("click", (event)=> {
    event.preventDefault();
    const inputValue = document.querySelector("input");
    getData(inputValue.value);
});