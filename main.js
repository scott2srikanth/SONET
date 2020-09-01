// AJAX 
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=93f26e3c57081a6210de53b8dcfdfea4', true);
request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      console.log(data)
      var icon = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
      var temp = data.main.temp;
      var weather = data.weather[0].main
      document.getElementById("icon").src= icon;
      document.getElementById("temp").innerHTML= temp;
      document.getElementById("weather").innerHTML= weather;
    } else {
      // We reached our target server, but it returned an error
  
    }
  };
  
  request.onerror = function() {
    // There was a connection error of some sort
  };
  
  request.send();