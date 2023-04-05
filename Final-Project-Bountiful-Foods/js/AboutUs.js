// Get the span element with id="lastModified"
const lastModified = document.getElementById("lastModified");
// Get the current date and time
const currentDate = new Date();
// Set the text content of the lastModified element to the current date and time
lastModified.textContent = `${currentDate.toLocaleString()}`;

// Google Maps API
function initMap() {
  var myLatLng = {lat: 40.712776, lng: -74.005974};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
  });
}
  