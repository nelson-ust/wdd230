  // select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


const API_KEY = "e247e98b359aee996897f366faf7665a"; // Replace with your own API key

// Using JavaScript to display a banner on Mondays or Tuesdays only at the very top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." and disappear after 10 seconds
const currentDate = new Date();
const currentDay = currentDate.getDay();
const banner = document.getElementById("banner");

if (currentDay === 1 || currentDay === 2) {
  banner.style.display = "block";
  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.width = "100%";
  banner.style.backgroundColor = "#F2F2F2";
  banner.style.textAlign = "center";
  banner.style.padding = "10px 0";

  setTimeout(function() {
    banner.style.display = "none";
  }, 10000);
}

// Get the user's location
navigator.geolocation.getCurrentPosition(function(position) {
  // Get the latitude and longitude coordinates of the user's location
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Construct the API endpoint URL with the latitude, longitude, and API key
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`;

  // Fetch the current weather data from the OpenWeatherMap API
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      // Extract the necessary information from the API response
      const location = data.name;
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const windSpeed = Math.round(data.wind.speed);
      const windChill = calculateWindChill(temperature, windSpeed);

      // Update the HTML with the weather information
      $("#location").text(`Location: ${location}`);
      $("#temperature").text(`Temperature: ${temperature}°F`);
      $("#description").text(`Description: ${description}`);
      $("#icon").attr("src", `https://openweathermap.org/img/w/${iconCode}.png`);
      $("#wind-speed").text(`Wind Speed: ${windSpeed} mph`);
      $("#wind-chill").text(`Wind Chill: ${windChill}°F`);
    })
    .catch(error => console.log(error));
});

console.log(data);

function calculateWindChill(temperature, windSpeed) {
  // Calculate the wind chill temperature, given the current temperature and wind speed
  if (temperature < 50 && windSpeed > 3) {
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return Math.round(windChill);
  } else {
    return "N/A";
  }
}


function toggleMenu() {
  const menu = document.querySelector('#myLinks');
  const icon = document.querySelector('.icon');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    icon.classList.remove('close');
  } else {
    menu.style.display = 'block';
    icon.classList.add('close');
  }
}


// adding the copyright mark
let copyrightMark = document.querySelector('#copyrightMark'); 
copyrightMark.innerText = "\u00A9";

// last modified date and time
const lastUpdated = document.querySelector('#lastUpdated');
const updateDate = new Date().toLocaleString();
lastUpdated.innerText = updateDate;

