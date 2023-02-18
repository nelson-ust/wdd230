// // get the current date and time
// const currentDate = new Date();

// // retrieve the last visit time from local storage
// const lastVisitTime = localStorage.getItem('lastVisitTime');

// if (lastVisitTime) {
//   // calculate the time difference between the current and last visit
//   const timeDifference = currentDate - new Date(lastVisitTime);
//   const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   // display the time difference on the page
//   const message = `Welcome back! It's been ${daysDifference} days since your last visit.`;
//   document.getElementById('message').textContent = message;
// }

// // store the current date and time in local storage
// localStorage.setItem('lastVisitTime', currentDate);
  
  
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
  
  
  
  // Get all the images with the class name 'gallery-image'
const images = document.querySelectorAll('.gallery-image');

// Intersection Observer API
const options = {
    threshold: 0.2
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            // Load the image
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
}, options);

// Iterate over all the images and observe them
images.forEach(image => {
    observer.observe(image);
});


// Get the user's browser agent
const browserAgent = navigator.userAgent;

// Get the current date
const currentDate = new Date();

// Get the date of the user's last visit
const lastVisitDate = localStorage.getItem(`${browserAgent}-last-visit`);

if (lastVisitDate) {
  // Calculate the difference in days between the current date and the last visit date
  const timeDifference = Math.abs(currentDate - new Date(lastVisitDate));
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Display the time difference in days
  const timeSinceLastVisit = `Last Visited: ${daysDifference} day(s) ago`;
  // Display the time since last visit in the HTML page wherever you want
  document.querySelector("#time-since-last-visit").textContent = timeSinceLastVisit;
}

// Update the last visit date in local storage
localStorage.setItem(`${browserAgent}-last-visit`, currentDate);
