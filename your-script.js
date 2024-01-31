// your-script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the Cart icon
    var cartIcon = document.querySelector('.navcart');
    if (cartIcon) {
        cartIcon.addEventListener('click', handleCartClick);
    }

    // You can add more event listeners or functions here as needed
});

// Function to handle Cart icon click
function handleCartClick() {
    alert('Cart icon clicked!');
    // You can add more functionality or redirect to the cart page.
}
