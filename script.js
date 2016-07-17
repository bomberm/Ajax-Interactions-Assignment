var weatherKey = "5525df30990c3da458de954d0d3864eb";

document.addEventListener("DOMContentLoaded", weatherButton);

function weatherButton(){
  document.getElementById("weatherSubmit").addEventListener("click", function(event){
	event.preventDefault();
    var query = new XMLHttpRequest();
	var input = document.getElementById("weatherInput").value;
	
	if((Number(input) > 10000) && (Number(input) < 99999)){ //between 10000 and 99999 shows valid zip instead of city string
	  var zip=Number(input);
	  var apiString="http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid="+weatherKey;
	  query.open("GET", apiString, true);
	  query.send(null);
	  query.addEventListener("load", function(){
	    if(query.status >=200 && query.status < 400){
		  var info= JSON.parse(query.responseText);
		  document.getElementById("weatherResult").textContent ="Current Weather: "+info.weather[0].description;
		  }
		else{
		  console.log("Error: " + query.statusText);
		  }
		});
	  }
	else{
	var apiString="http://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+weatherKey;
	query.open("GET", apiString, true);
	query.send(null);
	query.addEventListener("load", function(){
	    if(query.status >=200 && query.status < 400){
		  var info= JSON.parse(query.responseText);
		  document.getElementById("weatherResult").textContent ="Current Weather: "+info.weather[0].description;
		  }
		else{
		  console.log("Error: " + query.statusText);
		  }
		});
	}
	
	});
  }