const apiKey="7d51247645e4e96a216faa1c5c98bc1b"
const RealapiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var cityNameinSearchBar="";

const searchFunction=()=>{
    const input=document.querySelector(".input").value;
    cityNameinSearchBar+=input;
    cityNameinSearchBar.toLowerCase();
    checkWeather();
    cityNameinSearchBar="";
}
async function checkWeather(){
    apiUrl=RealapiUrl+cityNameinSearchBar;
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    var data=await response.json();
    // console.log(data);
    
    const cityName=document.querySelector(".city");
    const cityTemperature=document.querySelector(".temperature");
    const windSpeed=document.querySelector(".wind");
    const humidity=document.querySelector(".humidity");


    cityName.innerHTML=data.name;
    cityTemperature.innerHTML=parseInt(data.main.temp)+" °C";
    windSpeed.innerHTML=parseInt(data.wind.speed)+" km/h"
    humidity.innerHTML=parseInt(data.main.humidity)+"%";
    apiUrl=RealapiUrl;
}
