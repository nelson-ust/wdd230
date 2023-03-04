const directory = document.getElementById("directory");

fetch("./scripts/data.json")
	.then(response => response.json())
	.then(data => {
		data.forEach(company => {
			const card = document.createElement("div");
			card.classList.add("card");

			const image = document.createElement("img");
			image.src = company.image;
			image.alt = company.name;
			card.appendChild(image);

			const name = document.createElement("h2");
			name.textContent = company.name;
			card.appendChild(name);

			const address = document.createElement("p");
			address.textContent = company.address;
			card.appendChild(address);

			const phone = document.createElement("p");
			phone.textContent = "Phone: " + company.phone;
			card.appendChild(phone);

			const website = document.createElement("p");
			website.textContent = "Website: ";
			const link = document.createElement("a");
			link.href = company.website;
			link.textContent = company.website;
			website.appendChild(link);
			card.appendChild(website);

			const membership = document.createElement("p");
			membership.textContent = "Membership level: " + company.membership_level;
			card.appendChild(membership);

			const description = document.createElement("p");
			description.textContent = company.description;
			card.appendChild(description);

			directory.appendChild(card);
		});
	})
	.catch(error => console.error(error));
