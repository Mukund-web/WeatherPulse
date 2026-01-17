const apikey = "f11523c9e82a5f67078bc9d841f38189"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const serachbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const responce = await fetch(apiurl + city + `&appid=${apikey}`)

    if(responce.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        alert("Enter the vaild city name");
    }
    else{
         var data = await responce.json();
    
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    console.log(data.weather[0].main);
    
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "weather-app-img/images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "weather-app-img/images/mist.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "weather-app-img/images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "weather-app-img/images/snow.png"
    }
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }

   
}
searchbtn.addEventListener('click', ()=>{
    checkweather(serachbox.value)
})
