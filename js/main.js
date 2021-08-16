/*Before beginning the project watch the "JavaScript Weather Data Project Demo"

Using the Open Weather API create a weather application that displays the High, Low, Forecast and Humidity using JavaScript.

You will need to get your API from openweathermap.org. Sign up for a new account, and you will be given an API key which will authenticate and allow you access to the data.

(Creative freedom is encouraged here)

You will possibly need to change the weather data from Kelvin to Farenheit using this formula (Depending on the api endpoint you are accessing)

(K − 273.15) × 9/5 + 32 = -402.1°F

You can add a zip code to your project if you wish (not a strict requirement). This is shown in the walkthrough demo video as a possible outcome but again is not mandatory.

Once the project is complete, commit the project to github and submit the github repository link to the assignment.




* DON'T PUSH API KEY TO GITHUB**/




//API key 
//import {myApiKey} from "./another.js"



const getData = async (searchParam) => {
    const searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=${myApiKey}`
    let response = await fetch(searchURL);
    return response.json();
}

const loadData = async (e) => {
    e.preventDefault();
    console.log(e);

    const weathersearch = e.target[0].value;
    console.log(weathersearch);

    const weatherData = await getData(weathersearch);
    console.log(weatherData);

    createWeatherHTML(weatherData);

}

const form = document.getElementById("testDataForm") 
form.addEventListener("submit", loadData) 



const createWeatherHTML = (weather) =>{
    const high = Math.round((((weather.main.temp_max) - 273.15)* 9/5 + 32));
    const low = Math.round((((weather.main.temp_min)) - 273.15)* 9/5 + 32);
    const example = weather.main;
    const humidity = weather.main.humidity;
    const forecast = weather.weather[0].description

// let realTemp = (ferinheit)
//     const fHigh = (((weather.main.temp_max) - 273.15)* 9/5 + 32
    


    let weatherDisplay = document.getElementById('weatherDisplay');
    
    // Display data in HTML
    let htmlName = document.createElement('h3');
    htmlName.innerHTML = `high: ${high}, low: ${low}, humudity: ${humidity}, forecast ${forecast}`
    weatherDisplay.insertAdjacentElement('beforeend', htmlName)}

    // let dishigh = document.getElementById('dishigh');
    
    // // Display data in HTML
    // let htmlName1 = document.createElement('h3');
    // htmlName1.innerHTML = `high: ${high}`
    // dishigh.insertAdjacentElement('beforeend', htmlName1)}

    // let htmlName = document.getElementById("city-title");
    //   htmlName.innerHTML = cityName;
    //   weatherDisplay.insertAdjacentElement('beforeend', htmlName);



    