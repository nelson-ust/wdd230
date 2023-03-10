// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// define API URL
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=d3cb9e67d0615d06d30c5c8699d9af92';

// function to fetch data from API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// function to display results on the page
function displayResults(weatherData) {
  // display current temperature
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  // display weather icon and description
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  const description = weatherData.weather[0].description;
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', description);
  captionDesc.innerHTML = description;
}

// call the API fetch function
apiFetch();
