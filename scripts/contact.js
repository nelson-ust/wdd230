
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