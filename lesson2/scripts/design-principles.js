// adding the copyright mark
let copyrightMark = document.querySelector('#copyrightMark'); 
copyrightMark.innerText = "\u00A9";

// last modified date and time
const lastUpdated = document.querySelector('#lastUpdated');
const updateDate = new Date().toLocaleString();
lastUpdated.innerText = updateDate;