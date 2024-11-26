// Constructor for services
function Service(type, price) {
    this.type = type;
    this.price = price;
}

let services = []; // Store dynamically added services

// jQuery logic
$(document).ready(function () {
    // Update price when service type changes
    $("#serviceType").change(function () {
        const selectedOption = $(this).find(":selected");
        const price = selectedOption.data("price");

        if (price) {
            $("#servicePrice").val(price); // Set the price from dropdown
        }
    });

    // Add service button click handler
    $("#addServiceButton").click(function () {
        const serviceType = $("#serviceType").val();
        const servicePrice = parseFloat($("#servicePrice").val());

        // Validate inputs
        if (!serviceType || isNaN(servicePrice)) {
            $("#formNotifications").text("Please select a service and provide a valid price.").css("color", "red");
            return;
        }

        // Create a new service
        const newService = new Service(serviceType, servicePrice);
        services.push(newService);

        // Add to UI
        $("#servicesCards").append(`
            <div class="service-card">
                <h3 class="service-name">${newService.type}</h3>
                <p class="service-description">Custom service added to the list.</p>
                <p class="service-price">$${newService.price.toFixed(2)}</p>
            </div>
        `);

        // Clear form and show success message
        $("#addServiceForm")[0].reset();
        $("#formNotifications").text("Service added successfully!").css("color", "green");
    });
});