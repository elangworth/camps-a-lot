
var formEl = document.querySelector("#camping-form");
var tempInputEl = document.querySelector("#temp-input");
var dateInputEl = $("#datepicker");
var submitButtonEl = document.querySelector("#submit-button");

// debugger;
//Datepicker widget
$(function () {
    $("#datepicker").datepicker({ minDate: 0, maxDate: '+10D'
    });
   
});



//form submit console log inputs
var handleFormSubmit = function (event) {
    event.preventDefault();

    var tempInput = tempInputEl.value;
    var dateInput = dateInputEl.val();

    

    console.log(tempInput);
    console.log(dateInput);

   
   
};



formEl.addEventListener('submit', handleFormSubmit);


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

