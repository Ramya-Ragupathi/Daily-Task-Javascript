function Weatherfunc(city) {
 
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=bb7d76519ca8447d86b50642231302&q=" +
      city +
      "&days=8&aqi=yes&alerts=yes"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
       document.getElementById("name").innerHTML =  data.location.name ;
            document.getElementById("state").innerHTML =  data.location.region+"<br>" + data.location.tz_id;
            document.getElementById("temp").innerHTML = data.current.temp_f + "°F" + "/" + data.current.temp_c + "°C";
            
             document.getElementById("sunrise").innerHTML =  data.forecast.forecastday[0].astro.sunrise;
             document.getElementById("sunrisesvg").src="sunrise.svg";
             document.getElementById("sunset").innerHTML =  data.forecast.forecastday[0].astro.sunset;
             document.getElementById("sunsetsvg").src="sunset.svg";
              

            document.getElementById("windspeed").src="wind.svg";
            document.getElementById("humi").src="humidity.svg";
            document.getElementById("wind_kph").innerHTML = "wind speed  : " + data.current.wind_kph;
            document.getElementById("humidity").innerHTML ="Humidity : " + data.current.humidity;
              const icon1  = data.current.condition.icon;
            document.querySelector(".icon1").src = "https:"+icon1;
           
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const d1 = data.location.localtime;
            const date1 = new Date(d1);
            let day1= weekday[date1.getDay()];
            console.log(day1);
            document.getElementById("time").innerHTML =day1;

           let daily_weather = "";
           data.forecast.forecastday.map(weather => {
           const d = weather.date;
           console.log(d);
           let date = new Date(d);
           let day = weekday[date.getDay()];
           console.log("day",day);
           daily_weather = daily_weather + `
          <div class="col">
          <div class="d-flex" style="padding-left:10px">
            <p id="date1" style="padding-right:5px;text-align:center">${date.toString().slice(8,10)}</p> 
            <p id="date1">${date.toString().slice(0,4)}</p>
         </div>
            <img class="icon2" src="https:${weather.day.condition.icon} " />
            <p id="day1tempc" style="padding-left:10px">${weather.day.avgtemp_f}°F</p>
            <p id="day1tempf"></p>
        </div>
  `
  })
         console.log(daily_weather);
         document.getElementById("daily-weather").innerHTML = daily_weather;

         document.getElementById("marker").style.display="block";
         document.getElementById("dis-icon").style.display="block";
        
         
         } 
    ).catch((error) => {
      alert("Invalid Text")
    })
    
    
      }
    
    

navigator.geolocation.getCurrentPosition((location) => {
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=bb7d76519ca8447d86b50642231302&q=" +
      location.coords.latitude +
      "," +
      location.coords.longitude +
      "&days=7&aqi=yes"
  )
    .then((res) => res.json())
    .then((data) => {
      
      Weatherfunc(data.location.name);
    });
});


const autocomplete = (city) => {
  fetch(
    "https://api.weatherapi.com/v1/search.json?key=f7d63b9a0a45493e9cb52439231302&&q=" +
      city
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var populate = document.getElementById("populate");
      if (data) {
        let options = data.map((location, index) => {
          return ` <div style="cursor:pointer;" onclick="optionClicked('${
            location.name
          }')" class="d-grid ${
            data.length - 1 === index ? "" : "border-bottom"
          } py-1">
                            <span class="fs-low">
                                ${location.name}
                            </span>
                            <span class="base-text"> ${location.country}</span>
                        </div>`;
        });
        if (options.length > 0) {
          populate.setAttribute(
            "class",
            populate.getAttribute("class").replace(" d-none", "")
          );
        } else {
          populate.setAttribute(
            "class",
            `${populate.getAttribute("class").replace(" d-none", "")} d-none`
          );
        }
        populate.innerHTML = options.join("\n");
      }
    });
};

const optionClicked = (location) => {
  document.getElementById("textuser").value = location;
  var populate = document.getElementById("populate");
  populate.setAttribute(
    "class",
    `${populate.getAttribute("class").replace(" d-none", "")} d-none`
  );
  Weatherfunc(location);
};

document.querySelector(".search-bar").addEventListener("keyup", (event) =>{
    if(event.key=="Enter"){
     Weatherfunc(event.target.value);
     
    }
    else{
    //  Weatherfunc("coimbatore");
     autocomplete(event.target.value);
    }
});
    const search = () => {
  document.querySelector(".search-bar").addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      Weatherfunc(event.target.value);
    } else {
      
      autocomplete(event.target.value);
    }
  });
};
  