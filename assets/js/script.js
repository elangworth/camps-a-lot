
var formEl = $('#camping-form');
var tempInputEl = $('#temp-input');
var dateInputEl = $('#datepicker');
var submitButtonEl = $('#submit-button');

//Datepicker widget
$(function () {
    $("#datepicker").datepicker({ minDate: 0, maxDate: '+10D' });
});



//form submit console log inputs
var handleFormSubmit = function (event) {
    console.log("test")

    event.preventDefault();

    var tempInput = tempInputEl.value;
    var dateInput = dateInputEl.value;

   
   
};

//console.log(tempInputEl);

formEl.on('submit', handleFormSubmit);





function performSearch(search){
    baseURL = 'https://maps.openweathermap.org/maps/2.0/weather/TA2/1/1/1?appid=203481f675fae76832d631c5ecaa6b09'; //I don't know what values to put for z, x and y so I just put 1 for now
    fetch(baseURl)
    .then (function(response) {
        return response.json();
    })
    .then (function(data){
        console.log(data);
    })
};

