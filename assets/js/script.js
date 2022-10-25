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




