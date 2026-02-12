const pricePerTicket = 10;

const quantitySelect = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const buyButton = document.getElementById("buyButton");

// Update total price based on ticket quantity selection
quantitySelect.addEventListener("change", function() {
    const quantity = quantitySelect.value;
    totalPrice.textContent = quantity * pricePerTicket;
});

// Show modal with purchase details
buyButton.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const quantity = quantitySelect.value;
    const total = quantity * pricePerTicket;

    // Simple validation to ensure name and email are filled
    if(name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show purchase details in the modal
    const confirmationMessage = `
        ${name}, you have successfully purchased ${quantity} ticket(s).<br>
        Total Paid: $${total}`;
    
    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;

    // Open the modal
    document.getElementById("confirmationModal").style.display = "block";
});

// Close the modal
function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
}
