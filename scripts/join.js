// Get the current date and time
var currentDate = new Date();

// Format the date as a string in the format "YYYY-MM-DD HH:MM:SS"
var dateString = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2) + ' ' + ('0' + currentDate.getHours()).slice(-2) + ':' + ('0' + currentDate.getMinutes()).slice(-2) + ':' + ('0' + currentDate.getSeconds()).slice(-2);

// Set the value of the "form-date" input element to the current date and time
document.getElementById('form-date').value = dateString;



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

