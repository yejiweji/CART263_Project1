document.addEventListener("DOMContentLoaded", function () {

    const pricePerTicket = 10;

    const quantitySelect = document.getElementById("quantity");
    const identitySelect = document.getElementById("identity");
    const totalPrice = document.getElementById("totalPrice");
    const buyButton = document.getElementById("buyButton");

    function calculateTotal() {
        const quantity = parseInt(quantitySelect.value);
        const identity = identitySelect.value;

        let total = quantity * pricePerTicket;

        if (identity === "yes") {
            total += 5;
        }

        return total;
    }

    function updateTotal() {
        totalPrice.textContent = calculateTotal();
    }

    quantitySelect.addEventListener("change", updateTotal);
    identitySelect.addEventListener("change", updateTotal);

    // Initialize total
    updateTotal();

    buyButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const quantity = quantitySelect.value;
        const total = calculateTotal();

        if (name === "" || email === "") {
            alert("Please fill in all fields.");
            return;
        }

        const confirmationMessage = `
            ${name}, you have successfully purchased ${quantity} ticket(s).<br>
            Total Paid: $${total}
        `;

        document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
        document.getElementById("confirmationModal").style.display = "block";
    });

});
