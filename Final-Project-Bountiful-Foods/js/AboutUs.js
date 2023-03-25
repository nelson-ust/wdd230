// Get the span element with id="lastModified"
const lastModified = document.getElementById("lastModified");
// Get the current date and time
const currentDate = new Date();
// Set the text content of the lastModified element to the current date and time
lastModified.textContent = `Last Updated: ${currentDate.toLocaleString()}`;

// Google Maps API
function initMap() {
    var location = {lat: 33.158093, lng: -117.350594};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
  