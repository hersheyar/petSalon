// Constructor for services
function Service(type, price) {
    this.type = type;
    this.price = price;
}

const lsKey = "services"; // Key for localStorage

$(document).ready(function () {
    // Default services
    const defaultServices = [
        { type: "Grooming", price: 50 },
        { type: "Vaccines", price: 30 },
        { type: "Nails", price: 15 },
    ];

    // Ensure default services exist in localStorage
    let services = JSON.parse(localStorage.getItem(lsKey)) || [];
    if (services.length === 0) {
        services = defaultServices;
        localStorage.setItem(lsKey, JSON.stringify(services));
    }

    // Display existing services
    services.forEach(service => {
        $('#servicesCards').append(`
            <div class="service-card">
                <h3 class="service-name">${service.type}</h3>
                <p class="service-description">Default service available.</p>
                <p class="service-price">$${service.price.toFixed(2)}</p>
            </div>
        `);
    });

    // Add new service button logic
    $('#addServiceButton').click(function () {
        const serviceType = $("#serviceType").val().trim();
        const servicePrice = parseFloat($("#servicePrice").val());

        // Validate inputs
        if (!serviceType || isNaN(servicePrice) || servicePrice <= 0) {
            $('#formNotifications').text("Please provide a valid service type and price.").css("color", "red");
            return;
        }

        // Create a new service object
        const newService = new Service(serviceType, servicePrice);
        services.push(newService);

        // Save updated services to localStorage
        localStorage.setItem(lsKey, JSON.stringify(services));

        // Add new service to the UI
        $('#servicesCards').append(`
            <div class="service-card">
                <h3 class="service-name">${newService.type}</h3>
                <p class="service-description">Custom service added to the list.</p>
                <p class="service-price">$${newService.price.toFixed(2)}</p>
            </div>
        `);

        // Clear form and show success message
        $('#addServiceForm')[0].reset();
        $('#formNotifications').text("Service added successfully!").css("color", "green");
    });
});