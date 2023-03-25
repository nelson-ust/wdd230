// Get the span element with id="lastModified"
const lastModified = document.getElementById("lastModified");

// Get the current date and time
const currentDate = new Date();

// Set the text content of the lastModified element to the current date and time
lastModified.textContent = `Last Updated: ${currentDate.toLocaleString()}`;

// get weather data from OpenWeatherMap API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=d3cb9e67d0615d06d30c5c8699d9af92";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Get the weather-card element
    const weatherCard = document.getElementById("weather-card");

    // Get the relevant weather data from the API response
    const currentTemp = data.main.temp;
    const conditionDesc = data.weather[0].description;
    const humidity = data.main.humidity;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Create the HTML for the weather card using the weather data
    const weatherCardHtml = `
      <div class="weather-card-inner">
        <h2>Current Weather in Carlsbad</h2>
        <div class="weather-info">
          <img src="${iconUrl}" alt="Weather Icon">
          <div class="weather-text">
            <p class="temp">${currentTemp}&deg;C</p>
            <p class="condition">${conditionDesc}</p>
            <p class="humidity">Humidity: ${humidity}%</p>
          </div>
        </div>
      </div>
    `;
    console.log(weatherCardHtml);

    // Set the HTML of the weather-card element to the weather card HTML
    weatherCard.innerHTML = weatherCardHtml;
    // Log the API response data to the console for debugging purposes
    console.log(data);
  })
  .catch((error) => console.error("Error fetching weather data: ", error));

// Get the forecast-card element
const forecastCard = document.querySelector(".forecast-card");

// Get the forecast data from the OpenWeatherMap API
const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=d3cb9e67d0615d06d30c5c8699d9af92";

fetch(forecastUrl)
  .then((response) => response.json())
  .then((data) => {
    // Get the relevant forecast data from the API response
    const forecastData = data.list;
    const forecastDates = forecastData
      .map((forecast) => forecast.dt_txt.split(" ")[0])
      .filter((date, index, self) => self.indexOf(date) === index)
      .slice(1, 4); // get the next three days

    // Create the HTML for the forecast card using the forecast data
    const forecastCardHtml = `
      <div class="forecast-card-inner">
        <h2>3 Day Forecast</h2>
        <ul>
          ${forecastDates
        .map((date) => {
          const forecast = forecastData.find(
            (forecast) => forecast.dt_txt.split(" ")[0] === date
          );
          const dayOfWeek = new Date(forecast.dt_txt).toLocaleString("en-us", {
            weekday: "short",
          });
          const temp = forecast.main.temp.toFixed(0);
          const iconCode = forecast.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
          return `
                <li>
                  <span class="day">${dayOfWeek}</span>
                  <img src="${iconUrl}" alt="Weather Icon">
                  <span class="temp">${temp}&deg;C</span>
                </li>
              `;
        })
        .join("")}
        </ul>
      </div>
    `;

    // Set the HTML of the forecast-card element to the forecast card HTML
    forecastCard.innerHTML = forecastCardHtml;
    // Log the API response data to the console for debugging purposes
  });

// get number of specialty drinks submitted from local storage
const numDrinks = localStorage.getItem("numDrinks");
const drinksCard = document.getElementById("drinks-card");

// Check if numDrinks exists in local storage
if (numDrinks) {
  // If it does, create the HTML for the drinks card using the number of drinks
  const drinksCardHtml = `
    <div class="drinks-card-inner">
      <h2>Specialty Drinks Submitted</h2>
      <p class="num-drinks">${numDrinks}</p>
    </div>
  `;

  // Set the HTML of the drinks-card element to the drinks card HTML
  drinksCard.innerHTML = drinksCardHtml;
} else {
  // If numDrinks doesn't exist in local storage, create the HTML for the drinks card with a value of 0
  const drinksCardHtml = `
    <div class="drinks-card-inner">
      <h2>Specialty Drinks Submitted</h2>
      <p class="num-drinks">0</p>
    </div>
  `;

  // Set the HTML of the drinks-card element to the drinks card HTML
  drinksCard.innerHTML = drinksCardHtml;
}