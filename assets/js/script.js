function performSearch(search){
    baseURL = 'https://maps.openweathermap.org/maps/2.0/weather/TA2/1/1/1?appid=203481f675fae76832d631c5ecaa6b09'; //I don't know what values to put for z, x and y so I just put 1 for now
    fetch(baseURl)
    .then (function(response) {
        return response.json();
    })
    .then (function(data){
        console.log(data);
    })
}