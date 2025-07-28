//DOM element.. This allows the html document to load first //
document.addEventListener("DOMContentLoaded", function(){
    const cityInput =document.querySelector("#city");
    const searchBtn= document.querySelector("searchBtn");
    const weatherIcon= document.querySelector("#weather-icon");
    const tempDiv= document.querySelector("#temp-div");
    const weatherInfo=document.querySelector("weather-info");
    const hourlyForecast=document.querySelector("#hourly-forecast");

    //Button function//
    searchBtn.addEventListener("click", function(){
        const cityName= cityInput.value.trim();
        console.log("button clicked!");

        if (cityName ===""){
            alert("please enter a city name");
        }
        return;

        //Api key//
        const Apikey= "5a7301efeb5d96b6cef3f949dd2c2810";

        //Api URL//
        const Apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        //Fetching weather//
        fetch (apiUrl)
        .then(response=> response.json())
        .then(data=>{
            console.log(data);//just to check what comes back
            //show Data
            tempDiv.innerText= `Temperature: ${data.main.temp}°C`;
            weatherInfo.innerText= `weather: ${data.weather[0].description}`;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        })
        .catch(error=>{
            console.log("Error fetching weather:", error);
        });
    });
});
