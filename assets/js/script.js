
const searchButton = document.getElementById('search-button');
const citiesSearchedUl = document.getElementById('cities-searched-list');
const cityInputField = document.getElementById('city');
const citiesContainer = document.getElementById('selected-city-weather-container');
const fiveDayForecastContainer = document.getElementById('five-day-forecast-container');




function updateCities() {
    citiesSearchedUl.innerHTML = '';
    const savedCities = localStorage.getItem('cities');
    if (savedCities) {
        const names = JSON.parse(savedCities);
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            citiesSearchedUl.appendChild(li);
            citiesSearchedUl.insertBefore(li, citiesSearchedUl.children[0]);
        })
    }
}
updateCities();

//puts the list into local storage
const saveNewCity = () => {
    const name = cityInputField.value;
    if (!name) {
        return;
    }
    const savedCities = localStorage.getItem('cities');
    if (savedCities) {
        const savedNames = JSON.parse(savedCities);
        savedNames.push(name);
        localStorage.setItem('cities', JSON.stringify(savedNames));
    }
}
searchButton.addEventListener('click', saveNewCity);

const storedInput = localStorage.getItem('cities');
const listEL = document.getElementsByTagName('li');

if (storedInput) {
    listEL.textContent = storedInput;
}

//displays the last value input into the search field
function persistInput(input) {
    let key = "input-" + city.id; //id of input field
    let storedValue = localStorage.getItem(key);
    if (storedValue)
        input.value = storedValue;
        city.addEventListener('input', function() {
            localStorage.setItem(key, city.value);
        })
}
persistInput(city);

//set date and grabs the variables need for the weather values
const selectedCity = document.getElementById('selected-city');
const cityName = cityInputField.value;
const now = luxon.DateTime.now().setZone('America/Los_Angeles').toLocaleString();
selectedCity.innerHTML = "Location:" + " "+ cityName + " " + now;

const temperature =document.getElementById('temperature');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const tomorrowForecastDate = document.getElementById('tomorrow-forecast-date');
const tomorrowTemperature = document.getElementById('tomorrow-temperature');
const tomorowWind = document.getElementById('tomorrow-wind');
const tomorrowHumidity = document.getElementById('tomorrow-humidity');
const day2ForecastDate = document.getElementById('day-2-forecast-date');
const day2Temperature = document.getElementById('day-2-temperature');
const day2Wind = document.getElementById('day-2-wind');
const day2Humidity = document.getElementById('day-2-humidity');
const day3ForecastDate = document.getElementById('day-3-forecast-date');
const day3Temperature = document.getElementById('day-3-temperature');
const day3Wind = document.getElementById('day-3-wind');
const day3Humidity = document.getElementById('day-3-humidity');
const day4ForecastDate = document.getElementById('day-4-forecast-date');
const day4Temperature = document.getElementById('day-4-temperature');
const day4Wind = document.getElementById('day-4-wind');
const day4Humidity = document.getElementById('day-4-humidity');
const day5ForecastDate = document.getElementById('day-5-forecast-date');
const day5Temperature = document.getElementById('day-5-temperature');
const day5Wind = document.getElementById('day-5-wind');
const day5Humidity = document.getElementById('day-5-humidity');
const cityWeatherImg = document.getElementById('city-weather-image');
const day1WeatherImage = document.getElementById('day-1-weather-image');
const day2WeatherImage = document.getElementById('day-2-weather-image');
const day3WeatherImage = document.getElementById('day-3-weather-image');
const day4WeatherImage = document.getElementById('day-4-weather-image');
const day5WeatherImage = document.getElementById('day-5-weather-image');
 
//performs searches on the apis to get lat and lon and then the weather for the city and then the 5 day forecast
function performSearches(search) {
  const baseURL = "https://api.openweathermap.org/geo/1.0/direct?"
  let parameters = "limit=1&appid=203481f675fae76832d631c5ecaa6b09&q=" + encodeURIComponent(cityName);
  const fullURL = baseURL + parameters;
  let lat;
  let lon;
  let weatherParameters;
  fetch(fullURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){ 
      lat = data[0].lat;
      lon = data[0].lon;
      const baseWeatherURL = "https://api.openweathermap.org/data/2.5/weather?&appid=203481f675fae76832d631c5ecaa6b09&units=imperial&lang=en"
      weatherParameters = "&lat=" +encodeURIComponent(lat) + "&lon=" + encodeURIComponent(lon);
      const fullWeatherURL = baseWeatherURL + weatherParameters;
      return fetch(fullWeatherURL);
    })
    .then (function(response){
      return response.json();
    })
    .then (function (data){
      cityWeatherImg.src="https://openweathermap.org/img/wn/" + data.weather[0].icon + '.png';
      cityWeatherImg.alt = data.weather[0].description;
      temperature.innerHTML = 'Temperature: ' + data.main.temp + " F";
      wind.innerHTML = 'Wind: ' + data.wind.speed + " MPH";
      humidity.innerHTML = 'Humidity: ' + data.main.humidity + " %";
      const forecastBaseURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=203481f675fae76832d631c5ecaa6b09&lang=en";
      const forecastFullURL = forecastBaseURL + weatherParameters;
      return fetch(forecastFullURL);
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      tomorrowForecastDate.innerHTML = luxon.DateTime.now().plus({ days: 1 }).setZone('America/Los_Angeles').toLocaleString();
      day1WeatherImage.src="https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + '.png';
      day1WeatherImage.alt = data.list[0].weather[0].description;
      tomorrowTemperature.innerHTML =  'Temperature: ' + data.list[0].main.temp + " F";
      tomorowWind.innerHTML = 'Wind: ' + data.list[0].wind.speed + " MPH";
      tomorrowHumidity.innerHTML = 'Humidity: ' + data.list[0].main.humidity + " %";
      day2ForecastDate.innerHTML = luxon.DateTime.now().plus({ days: 2 }).setZone('America/Los_Angeles').toLocaleString();
      day2WeatherImage.src="https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + '.png';
      day2WeatherImage.alt = data.list[0].weather[0].description;
      day2Temperature.innerHTML = 'Temperature: ' + data.list[1].main.temp + " F";
      day2Wind.innerHTML = 'Wind: ' + data.list[1].wind.speed + " MPH";
      day2Humidity.innerHTML = 'Humidity: ' + data.list[1].main.humidity + " %";
      day3ForecastDate.innerHTML = luxon.DateTime.now().plus({ days: 3 }).setZone('America/Los_Angeles').toLocaleString();
      day3WeatherImage.src="https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + '.png';
      day3WeatherImage.alt = data.list[0].weather[0].description;
      day3Temperature.innerHTML = 'Temperature: ' + data.list[2].main.temp + " F";
      day3Wind.innerHTML = 'Wind: ' + data.list[2].wind.speed + " MPH";
      day3Humidity.innerHTML = 'Humidity: ' + data.list[2].main.humidity + " %";
      day4ForecastDate.innerHTML = luxon.DateTime.now().plus({ days: 4 }).setZone('America/Los_Angeles').toLocaleString();
      day4WeatherImage.src="https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + '.png';
      day4WeatherImage.alt = data.list[0].weather[0].description;
      day4Temperature.innerHTML = 'Temperature: ' + data.list[3].main.temp + " F";
      day4Wind.innerHTML = 'Wind: ' + data.list[3].wind.speed + " MPH";
      day4Humidity.innerHTML = 'Humidity: ' + data.list[3].main.humidity + " %";
      day5ForecastDate.innerHTML = luxon.DateTime.now().plus({ days: 5 }).setZone('America/Los_Angeles').toLocaleString();
      day5WeatherImage.src="https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + '.png';
      day5WeatherImage.alt = data.list[0].weather[0].description;
      day5Temperature.innerHTML = 'Temperature: ' + data.list[4].main.temp + " F";
      day5Wind.innerHTML = 'Wind: ' + data.list[4].wind.speed + " MPH";
      day5Humidity.innerHTML = 'Humidity: ' + data.list[4].main.humidity + " %";
    })
}
performSearches();

//if a city in the list is clicked this run the searches again based on the city that was clicked
function handleClick(e) {
  cityName = e.target.textContent;
  performSearches();
  currentCity.innerHTML = cityName + " " + now;
}
for(i=0; i<listEL.length; i++){
  listEL[i].addEventListener('click', handleClick);
}

//set date and grab variable for departure airport
const departureInputField = document.getElementById('departure');
const departureStateInputField = document.getElementById('departure-state');
const departureButton = document.getElementById('departure-button');
const departureCity = document.getElementById('departure-city');
departureCity.innerHTML = "Enter a city to depart from to see the nearest Airport!";
let departureCityName = departureInputField.value;
let departureStateName = departureStateInputField.value;


//display departure city name
departureButton.addEventListener('click', displayDeparture);

function displayDeparture(e) {
  e.preventDefault();
  let departureCityName = departureInputField.value;
  // performSearches();
  departureCity.innerHTML = "The closest airport to " + departureCityName + " is:";
  

};
// departureButton.addEventListener('click', displayDeparture);
// for(i=0; i<listEL.length; i++){
//   listEL[i].addEventListener('click', handleClick);
// }

//API serch to get lat and lon of departure city
function performDepartureSearches() {
  let departureCityName = departureInputField.value;
  let departureStateName = departureStateInputField.value;
  const baseURL = "https://api.openweathermap.org/geo/1.0/direct?"
  let parameters = "limit=1&appid=203481f675fae76832d631c5ecaa6b09&q=" + encodeURIComponent(departureCityName);
  const fullURL = baseURL + parameters;
  let lat;
  let lon;

  

 
 
  fetch(fullURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){ 
      lat = data[0].lat;
      lon = data[0].lon;
      console.log(lat, lon);
      console.log(departureCityName);
    })

  //travel advisor API search parameters
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c7989cc56cmshd5eeaa9cb244977p16aefcjsn103379acec08',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      
    }
  };
  const baseStateURL = "https://travel-advisor.p.rapidapi.com/airports/search?query="
  let stateParameters = encodeURIComponent(departureStateName) + "&locale=en_US";
  const fullStateURL = baseStateURL + stateParameters;
  console.log(fullStateURL)  ;
  fetch(fullStateURL, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
  //USe City input and find closest airport in state by comparing abs value of lat and lon
  function calculateClosestAirport(){
    

    }
  calculateClosestAirport;
  };
  

departureButton.addEventListener('click', performDepartureSearches); 


//Datepicker widget
// $(function () {
//     $("#datepicker").datepicker({ minDate: 0, maxDate: '+10D'
//     });
   
// });



//form submit console log inputs
// var handleFormSubmit = function (event) {
//     event.preventDefault();

//     var tempInput = tempInputEl.value;
//     var dateInput = dateInputEl.val();

    

//     console.log(tempInput);
//     console.log(dateInput);

   
   
// };



// formEl.addEventListener('submit', handleFormSubmit);


//recreation.gov API
// Curl
// curl -X 'GET' \
//   'https://ridb.recreation.gov/api/v1/campsites?limit=50&offset=0' \
//   -H 'accept: application/json'
//Base URL
//https://ridb.recreation.gov/api/v1
//API key
//'apikey: 28893f32-2f30-41d5-88d5-c57a0066f8d7'
//CORS https://rapidapi.com/pgarciamaurino/api/http-cors-proxy/details
//recreation.gov does not work on CORs either :( need to change idea
// use this -> https://rapidapi.com/apidojo/api/travel-advisor/



// function performSearch(){
//     var baseURL = 'https://ridb.recreation.gov/api/v1/campsites?limit=50&offset=0'; 
//     fetch(baseURL,{headers: {apikey: '28893f32-2f30-41d5-88d5-c57a0066f8d7'}})
//     .then (function(response) {
//         return response.json();
//     })
//     .then (function(data){
//         console.log(data);
//     })
// };
// console.log(performSearch());

// function performSearch(search){
//     baseURL = 'https://maps.openweathermap.org/maps/2.0/weather/TA2/1/1/1?appid=203481f675fae76832d631c5ecaa6b09'; //I don't know what values to put for z, x and y so I just put 1 for now
//     fetch(baseURl)
//     .then (function(response) {
//         return response.json();
//     })
//     .then (function(data){
//         console.log(data);
//     })
// };

