const apiKey = "61f1da52dac40d154e20fbb7c9acf23f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox  = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";

}
else{
    var data = await response.json();
            
    document.querySelector(".city").innerHTML = data.name; // we will display the city from data
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C"; // display temp from data at main
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; // display humidity from data at main
    document.querySelector(".wind").innerHTML = data.wind.speed+ "km/h"; //display the speed from data at wind
if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
} 
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
}
document.querySelector(".weather").style.display = "block"; 
document.querySelector(".error").style.display = "none";
}
            

}
searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
})
        
