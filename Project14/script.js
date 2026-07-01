const weatherform = document.querySelector(".fillform")
const CityName = document.getElementById("City-Name");
const ErrorDisplay = document.querySelector(".ErrorDisplay");
const tempDisplay = document.querySelector(".tempDisplay");
const descDisplay = document.querySelector(".descDisplay");
const WeatherEmoji = document.querySelector(".weatherEmoji");
const card = document.querySelector(".card");

const apiKey = "40a9d81bfa9dc27a05af143c1ed82eab";

weatherform.addEventListener("submit",async event=>{
    event.preventDefault();

    const city = CityName.value;
    
    if(city){
        try{
            const weatherData =await getweatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
        }
    }
    else{
        displayError("Please enter a city");
    }

});
async function getweatherData(city) {
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response =await fetch(APIurl);
    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data")
    }
    
    return await response.json();
}

function displayWeatherInfo(data){

    const {
        name,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;

    card.style.display = "flex";

    ErrorDisplay.textContent = "";

    document.getElementById("Name").textContent = name;

    tempDisplay.textContent =
        `${(temp - 273.15).toFixed(1)}°C`;

    descDisplay.textContent =
        description;

    WeatherEmoji.textContent =
        getWeatherEmoji(id);

}


function getWeatherEmoji(weatherId){

    if(weatherId >= 200 && weatherId < 300){
        return "⛈️";
    }

    if(weatherId >= 300 && weatherId < 500){
        return "🌦️";
    }

    if(weatherId >= 500 && weatherId < 600){
        return "🌧️";
    }

    if(weatherId >= 600 && weatherId < 700){
        return "❄️";
    }

    if(weatherId >= 700 && weatherId < 800){
        return "🌫️";
    }

    if(weatherId === 800){
        return "☀️";
    }

    if(weatherId > 800){
        return "☁️";
    }

    return "❓";
}

function displayError(message){

    card.style.display = "block";

    document.getElementById("Name").textContent = "";
    tempDisplay.textContent = "";
    descDisplay.textContent = "";
    WeatherEmoji.textContent = "";

    ErrorDisplay.textContent = message;
}