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
        displayRegisteredPets(); // Update the list of pets below the form
    } else {
        alert("Please fill out all fields before submitting.");
    }
}

function displayPetAmount() {
    const message = `We have ${pets.length} pets registered.`;
    document.getElementById("registeredPetAmounts").innerHTML = `<p>${message}</p>`;
}

function displayRegisteredPets() {
    const petListContainer = document.getElementById("registeredPets");
    petListContainer.innerHTML = ""; // Clear previous list

    pets.forEach((pet, index) => {
        const petInfo = document.createElement("div");
        petInfo.classList.add("pet-info");
        petInfo.innerHTML = `
            <p><strong>Pet ${index + 1}</strong></p>
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <hr>
        `;
        petListContainer.appendChild(petInfo);
    });
}

function getAverageAge() {
    if (pets.length === 0) {
        document.getElementById("averagePetAge").innerHTML = `<p>No pets registered yet.</p>`;
        return;
    }

    const totalAge = pets.reduce((sum, pet) => sum + pet.age, 0);
    const averageAge = Math.round(totalAge / pets.length);
    document.getElementById("averagePetAge").innerHTML = `<p>The Average pet age of registered pets is: ${averageAge}</p>`;
}

window.onload = function () {
    console.log("Application initialized");
};
