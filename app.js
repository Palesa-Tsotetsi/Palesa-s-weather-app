function updateWeatherValue(response){
    let temperatureElement= document.querySelector("#temperatureValue");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let cityName= document.querySelector("#chosenCity");
    cityName.innerHTML= response.data.city;
    console.log(response.data);

}

function searchCityData(city){
    let apiKey = "78b7a4e95c0c3t9a66222f0o3d5f4ee1";
    let apiURL =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiURL);
    axios.get(apiURL).then(updateWeatherValue);
}

function searchButtonFunctionality(event){
    event.preventDefault();
    let searchInput = document.querySelector("#city");
   
    searchCityData(searchInput.value);
}


let searchFormElement =document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchButtonFunctionality);
searchCityData("Johannesburg");