const dummyWeatherMap = {
  "Berlin": {
    temperature: 60,
    description: "Partly cloudy"
  },
  "Soweto": {
    temperature: 50,
    description: "Mostly cloudy"
  },
  "Umuahia": {
    temperature: 48,
    description: "Rainy"
  }
};


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
  // For the purpose of this example, we will use a dummy weather map with a few cities
  const location = prompt("Enter your location (Berlin, Soweto, or Umuahia):,", "Umuahia");
  
  const weather = dummyWeatherMap[location];

  // Update the HTML with the weather information
  if (weather) {
    $("#location").text(`Location: ${location}`);
    $("#temperature").text(`Temperature: ${weather.temperature}°F`);
    $("#description").text(`Description: ${weather.description}`);
  } else {
    // alert("Invalid location. Please try again.");
  }
});



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// const datefieldUK = document.querySelector("aside");  // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// adding the copyright mark
let copyrightMark = document.querySelector('#copyrightMark'); 
copyrightMark.innerText = "\u00A9";

// last modified date and time
const lastUpdated = document.querySelector('#lastUpdated');
const updateDate = new Date().toLocaleString();
lastUpdated.innerText = updateDate;

