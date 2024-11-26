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
                displayRegisteredPetsRow(); // Update the list of pets below the form
        updateServiceCounts();
        document.getElementById("petForm").reset();
        alert(`${name} has been registered!`);
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

function updateServiceCounts() {
    let grooming = 0;
    let vaccines = 0;
    let nails = 0;

    // Iterate over the pets array using a for loop
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].service === "grooming") {
            grooming++;
        } else if (pets[i].service === "vaccines") {
            vaccines++;
        } else if (pets[i].service === "nails") {
            nails++;
        }
    }

    // Update the counts in the HTML
    document.getElementById("total").textContent = pets.length;
    document.getElementById("gTotal").textContent = grooming;
    document.getElementById("vTotal").textContent = vaccines;
    document.getElementById("nTotal").textContent = nails;
}


function deletePet(index) {
    // Removes the pet from the array
    pets.splice(index, 1);

    // Refresh the displayed list
    displayRegisteredPetsRow();
    updateServiceCounts();

    // display feedback
    alert(`Pet ${index + 1} has been deleted.`);
}

window.onload = function () {
    console.log("Web Page initialized");
};

