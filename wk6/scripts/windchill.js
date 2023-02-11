const dummyWeatherMap = {
  "Berlin": {
    temperature: 60,
    description: "Partly cloudy",
    windSpeed: 10
  },
  "Soweto": {
    temperature: 50,
    description: "Mostly cloudy",
    windSpeed: 20
  },
  "Umuahia": {
    temperature: 48,
    description: "Rainy",
    windSpeed: 5
  }
};

navigator.geolocation.getCurrentPosition(function(position) {
  const location = prompt("Enter your location (Berlin, Soweto, or Umuahia):,", "Umuahia");
  
  const weather = dummyWeatherMap[location];

  if (weather) {
    $("#location").text(`Location: ${location}`);
    $("#temperature").text(`Temperature: ${weather.temperature} °F`);
    $("#description").text(`Description: ${weather.description}`);
    $("#windSpeed").text(`Wind Speed: ${weather.windSpeed} mph`);

    if (weather.temperature <= 50 && weather.windSpeed > 3.0) {
      const windChill = 35.74 + 0.6215 * weather.temperature - 35.75 * Math.pow(weather.windSpeed, 0.16) + 0.4275 * weather.temperature * Math.pow(weather.windSpeed, 0.16);
      $("#windChill").text(`Wind Chill: ${windChill.toFixed(2)}°F`);
    } else {
      $("#windChill").text("Wind Chill: N/A");
    }
  } 
});
