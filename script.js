 
      function Weather() {
        let input = document.getElementById("textuser");
        const key = "4999544661c443baad8144328231302";
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=" +
             key + "&q=" +
             input.value +
              "&days=7&aqi=no&alerts=no"

            
        )
          .then((response) => response.json())
          .then((data) => {
            // const nameValue = data.location.name;
            // console.log(nameValue);
            
            document.getElementById("name").innerHTML =  data.location.name ;
            document.getElementById("state").innerHTML =  data.location.tz_id;
            document.getElementById("temp").innerHTML = data.current.temp_f + "°F" + "/" + data.current.temp_c + "°C";
            // document.getElementById("wind_kph").innerHTML ="wind speed :"+ data.current.wind_kph + "km/h" +
            //  "Humidity :"+ data.current.humidity + 
            //  "Wind Direction :"+data.current.wind_dir  ;
            document.getElementById("wind_kph_t").innerHTML ="wind speed   ";
            document.getElementById("humidity_t").innerHTML ="Humidity ";
            document.getElementById("wind_dir_t").innerHTML ="Wind Direction ";
            
            document.getElementById("wind_kph").innerHTML = data.current.wind_kph;
            document.getElementById("humidity").innerHTML = data.current.humidity;
            document.getElementById("wind_dir").innerHTML =data.current.wind_dir ;
            const icon1  = data.current.condition.icon;
            document.querySelector(".icon1").src = "https:"+icon1;
            document.getElementById("condn1").innerHTML =data.current.condition.text;

            const icon2 = data.forecast.forecastday[1].day.condition.icon;
            document.querySelector(".icon2").src = "https:" + icon2;
            document.getElementById("condn2").innerHTML = data.forecast.forecastday[1].day.condition.text;
            document.getElementById("day2").innerHTML = data.forecast.forecastday[1].date;
       
            const icon3 = data.forecast.forecastday[2].day.condition.icon;
            document.querySelector(".icon3").src = "https:" + icon3;
            document.getElementById("condn3").innerHTML = data.forecast.forecastday[2].day.condition.text;
            document.getElementById("day3").innerHTML = data.forecast.forecastday[2].date;

            const icon4 = data.forecast.forecastday[3].day.condition.icon;
            document.querySelector(".icon4").src = "https:" + icon4;
            document.getElementById("condn4").innerHTML = data.forecast.forecastday[3].day.condition.text;
            document.getElementById("day4").innerHTML = data.forecast.forecastday[3].date;

            const icon5 = data.forecast.forecastday[4].day.condition.icon;
            document.querySelector(".icon5").src = "https:" + icon5;
            document.getElementById("condn5").innerHTML = data.forecast.forecastday[4].day.condition.text;
            document.getElementById("day5").innerHTML = data.forecast.forecastday[4].date;

             const icon6 = data.forecast.forecastday[5].day.condition.icon;
            document.querySelector(".icon6").src = "https:" + icon5;
            document.getElementById("condn6").innerHTML = data.forecast.forecastday[5].day.condition.text;
            document.getElementById("day6").innerHTML = data.forecast.forecastday[5].date;
          })
          .catch((error) => (alert("Invalid Text")));
      }

    
document.querySelector(".search-button").addEventListener("click", function () {
     Weather();
      document.getElementById("marker").style.display="block";
   });
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
     Weather();
     document.getElementById("marker").style.display="block";
    }

});
    
  