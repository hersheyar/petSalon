let pets = [];

// Constructor for pets
function Pet(name, age, gender, breed, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

// Populate service dropdown with services from localStorage
function populateServiceDropdown() {
    const defaultServices = [
        { type: "Grooming", price: 50 },
        { type: "Vaccines", price: 30 },
        { type: "Nails", price: 15 },
    ];

    let services = JSON.parse(localStorage.getItem("services"));

    // Initialize localStorage with default services if empty
    if (!services) {
        services = defaultServices;
        localStorage.setItem("services", JSON.stringify(services));
    }

    // Populate the dropdown
    const dropdown = document.getElementById("petService");
    dropdown.innerHTML = `<option value="" disabled selected>-- Select a service --</option>`; // Reset dropdown

    services.forEach(service => {
        const option = document.createElement("option");
        option.value = service.type.toLowerCase(); // Use lowercase for value
        option.textContent = `${service.type} - $${service.price.toFixed(2)}`;
        dropdown.appendChild(option);
    });
}

// Register a pet
function registerPet() {
    const name = document.getElementById("petName").value.trim();
    const age = parseInt(document.getElementById("petAge").value);
    const gender = document.getElementById("petGender").value.trim();
    const breed = document.getElementById("petBreed").value.trim();
    const service = document.getElementById("petService").value;

    // Validate inputs
    if (name && age && gender && breed && service) {
        const newPet = new Pet(name, age, gender, breed, service);
        pets.push(newPet);
        displayRegisteredPetsRow(); // Update the list of pets below the form
        updateServiceCounts();
        document.getElementById("petForm").reset();
        alert(`${name} has been registered!`);
    } else {
        alert("Please fill out all fields before submitting.");
    }
}

// Display registered pets in the table
function displayRegisteredPetsRow() {
    const petListContainer = document.getElementById("registeredPets");
    petListContainer.innerHTML = `
        <div class="pet-row pet-header">
            <span>Name</span>
            <span>Age</span>
            <span>Gender</span>
            <span>Breed</span>
            <span>Service</span>
            <span>Action</span>
        </div>
    `; // Add the header row

    pets.forEach((pet, index) => {
        const petRow = document.createElement("div");
        petRow.classList.add("pet-row");
        petRow.innerHTML = `
            <span>${pet.name}</span>
            <span>${pet.age}</span>
            <span>${pet.gender}</span>
            <span>${pet.breed}</span>
            <span>${pet.service}</span>
            <button class="btn-delete" onclick="deletePet(${index})">Delete</button>
        `;
        petListContainer.appendChild(petRow);
    });
}

// Update counts of services
function updateServiceCounts() {
    const serviceCounts = pets.reduce((counts, pet) => {
        counts[pet.service] = (counts[pet.service] || 0) + 1;
        return counts;
    }, {});

    // Update the counts in the HTML
    document.getElementById("total").textContent = pets.length;
    document.getElementById("gTotal").textContent = serviceCounts.grooming || 0;
    document.getElementById("vTotal").textContent = serviceCounts.vaccines || 0;
    document.getElementById("nTotal").textContent = serviceCounts.nails || 0;
}

// Delete a pet by index
function deletePet(index) {
    pets.splice(index, 1); // Removes the pet from the array
    displayRegisteredPetsRow(); // Refresh the displayed list
    updateServiceCounts(); // Update counts
    alert(`Pet ${index + 1} has been deleted.`);
}

// Initialize the page on load
window.onload = function () {
    populateServiceDropdown(); // Populate the dropdown with services
    console.log("Registration Page initialized");
};
