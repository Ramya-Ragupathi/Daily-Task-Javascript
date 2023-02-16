 const Weather = () => {
  var city = document.getElementById("textuser").value;
  
  console.log("city", city);
  navigator.geolocation.getCurrentPosition(async (location) => {
    var response;
    try {
      if (city === "") {
        response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=55abcd02053e4c45804112932231402&q=" +
            location.coords.latitude +
            "," +
            location.coords.longitude +
            "&aqi=no&days=7"
        );
      } else {
        response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=55abcd02053e4c45804112932231402&q=" +
            city +
            "&aqi=no&days=7"
        );
      }

            let data = await response.json();

         
            // const nameValue = data.location.name;
            // console.log(nameValue);
            
            document.getElementById("name").innerHTML =  data.location.name ;
            document.getElementById("state").innerHTML =  data.location.tz_id;
            document.getElementById("temp").innerHTML = data.current.temp_f + "°F" + "/" + data.current.temp_c + "°C";
           

          // document.getElementById("demo").innerHTML = day;  


            document.getElementById("wind_kph").innerHTML = "wind speed  : " + data.current.wind_kph;
            document.getElementById("humidity").innerHTML ="Humidity : " + data.current.humidity;
            document.getElementById("wind_dir").innerHTML ="Wind Direction :" +  data.current.wind_dir ;
            const icon1  = data.current.condition.icon;
            document.querySelector(".icon1").src = "https:"+icon1;
           
             const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const d = data.location.localtime;
            const date = new Date(d);
           
            
            let day = weekday[date.getDay()];
            console.log(day);
            // document.getElementById("weekday").innerHTML ="'"+ day[0]+day[1]+day[2];
 document.getElementById("time").innerHTML =data.location.localtime+"<br>"+ day;

            const icon2 = data.forecast.forecastday[1].day.condition.icon;
            document.querySelector(".icon2").src = "https:" + icon2;
            // document.getElementById("condn2").innerHTML = data.forecast.forecastday[1].day.condition.text;
            
            const d2 = data.forecast.forecastday[1].date;
            const date2 = new Date(d2);
            let day2 = weekday[date2.getDay()];
            console.log(day2);
             let word2 = date2.getDate();
             console.log(word2);
            document.getElementById("day2").innerHTML =word2+"'"+ day2[0]+day2[1]+day2[2];
            document.getElementById("temp_c2").innerHTML = data.forecast.forecastday[1].day.avgtemp_f + "°F";
            

            const icon3 = data.forecast.forecastday[2].day.condition.icon;
            document.querySelector(".icon3").src = "https:" + icon3;
            // document.getElementById("condn3").innerHTML = data.forecast.forecastday[2].day.condition.text;
            const d3 = data.forecast.forecastday[2].date;
            const date3 = new Date(d3);
            let day3 = weekday[date3.getDay()];
             let word3 = date3.getDate();
            console.log(day3);
            document.getElementById("day3").innerHTML =word3+"'"+ day3[0]+day3[1]+day3[2];            
            document.getElementById("temp_c3").innerHTML = data.forecast.forecastday[2].day.avgtemp_f + "°F";
       

            const icon4 = data.forecast.forecastday[3].day.condition.icon;
            document.querySelector(".icon4").src = "https:" + icon4;
            // document.getElementById("condn4").innerHTML = data.forecast.forecastday[3].day.condition.text;
            const d4 = data.forecast.forecastday[3].date;
            const date4 = new Date(d4);
            let day4 = weekday[date4.getDay()];
             let word4 = date4.getDate();
            console.log(day4);
            document.getElementById("day4").innerHTML =word4+"'"+ day4[0]+day4[1]+day4[2];
            document.getElementById("temp_c4").innerHTML = data.forecast.forecastday[3].day.avgtemp_f + "°F";
       
            const icon5 = data.forecast.forecastday[4].day.condition.icon;
            document.querySelector(".icon5").src = "https:" + icon5;
            // document.getElementById("condn5").innerHTML = data.forecast.forecastday[4].day.condition.text;
            const d5 = data.forecast.forecastday[4].date;
            const date5 = new Date(d5);
            let day5 = weekday[date5.getDay()];
             let word5 = date5.getDate();
            console.log(day5);
            document.getElementById("day5").innerHTML = word5+"'"+day5[0]+day5[1]+day5[2];
            document.getElementById("temp_c5").innerHTML = data.forecast.forecastday[4].day.avgtemp_f + "°F";
       

             const icon6 = data.forecast.forecastday[5].day.condition.icon;
            document.querySelector(".icon6").src = "https:" + icon5;
            // document.getElementById("condn6").innerHTML = data.forecast.forecastday[5].day.condition.text;
            const d6 = data.forecast.forecastday[5].date;
            const date6 = new Date(d6);
            let day6 = weekday[date6.getDay()];
            let word6 = date6.getDate();
            console.log(day6);
            document.getElementById("day6").innerHTML =word6+"'"+ day6[0]+day6[1]+day6[2] ;
            document.getElementById("temp_c6").innerHTML = data.forecast.forecastday[5].day.avgtemp_f + "°F";
       


             const icon7 = data.forecast.forecastday[6].day.condition.icon;
            document.querySelector(".icon7").src = "https:" + icon5;
            // document.getElementById("condn7").innerHTML = data.forecast.forecastday[6].day.condition.text;
             const d7 = data.forecast.forecastday[6].date;
            const date7 = new Date(d7);
            let day7 = weekday[date7.getDay()];
            let word7 = date7.getDate();
            console.log(day7);
            document.getElementById("day7").innerHTML =word7+"'"+ day7[0]+day7[1]+day7[2];
             document.getElementById("temp_c7").innerHTML = data.forecast.forecastday[6].day.avgtemp_f + "°F";
       
             document.getElementById("marker").style.display="block";
          } catch (error) {
      alert("invalid");
    }
  });
};
document.querySelector(".search-button").addEventListener("click", function () {
     Weather();
     
   });
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
     Weather();
     
    }

});
    
  