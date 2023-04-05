// Get the span element with id="lastModified"
const lastModified = document.getElementById("lastModified");
// Get the current date and time
const currentDate = new Date();
// Set the text content of the lastModified element to the current date and time
lastModified.textContent = `${currentDate.toLocaleString()}`;



// Define variables
const form = document.querySelector("form");
const fruit1Select = document.querySelector("#fruit1");
const fruit2Select = document.querySelector("#fruit2");
const fruit3Select = document.querySelector("#fruit3");

// Load fruit options from JSON file and populate select elements
fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(fruit => {
      const option = document.createElement("option");
      option.value = fruit.name;
      option.textContent = fruit.name;
      fruit1Select.appendChild(option);

      console.log(data);

      const option2 = document.createElement("option");
      option2.value = fruit.name;
      option2.textContent = fruit.name;
      fruit2Select.appendChild(option2);

      const option3 = document.createElement("option");
      option3.value = fruit.name;
      option3.textContent = fruit.name;
      fruit3Select.appendChild(option3);
    });
  })
  .catch(error => console.error(error));

// Handle form submission
form.addEventListener("submit", event => {
  event.preventDefault();
  const fname = document.querySelector("#fname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const fruit1 = document.querySelector("#fruit1").value;
  const fruit2 = document.querySelector("#fruit2").value;
  const fruit3 = document.querySelector("#fruit3").value;
  const instructions = document.querySelector("#instructions").value;
  const outputDiv = document.querySelector("#output");

  // Display output
  outputDiv.innerHTML = `
    <p><strong>Name:</strong> ${fname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Fruit 1:</strong> ${fruit1}</p>
    <p><strong>Fruit 2:</strong> ${fruit2}</p>
    <p><strong>Fruit 3:</strong> ${fruit3}</p>
    <p><strong>Instructions:</strong> ${instructions}</p>
  `;
});
