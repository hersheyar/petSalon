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
    } else {
        alert("Please fill out all fields before submitting.");
    }
}

function displayPetAmount() {
    const message = `We have ${pets.length} pets registered.`;
    document.getElementById("registeredPetAmounts").innerHTML = `<p>${message}</p>`;
}

function displayRegisteredPetNames() {
    let petNames = pets.map(pet => pet.name).join("<br>");
    document.getElementById("registeredPetNames").innerHTML = `<p>The Pets registered are:<br>${petNames}</p>`;
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
