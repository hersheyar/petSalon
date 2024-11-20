let pets = [];

function pet(name, age, gender, breed, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

function registerPet() {
    const name = document.getElementById("petName").value;
    const age = parseInt(document.getElementById("petAge").value);
    const gender = document.getElementById("petGender").value;
    const breed = document.getElementById("petBreed").value;
    const service = document.getElementById("petService").value;

    if (name && age && gender && breed && service) {
        const newPet = new pet(name, age, gender, breed, service);
        pets.push(newPet);
        document.getElementById("petForm").reset();
        alert(`${name} has been registered!`);
        displayRegisteredPetsRow(); // Update the list of pets below the form
    } else {
        alert("Please fill out all fields before submitting.");
    }
}


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

function deletePet(index) {
    // Removes the pet from the array
    pets.splice(index, 1);

    // Refresh the displayed list
    displayRegisteredPetsRow();

    // display feedback
    alert(`Pet ${index + 1} has been deleted.`);
}

window.onload = function () {
    console.log("Web Page initialized");
};
