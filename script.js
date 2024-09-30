// JavaScript to manage the shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartCount++;
    totalPrice += productPrice;

    // Save cart state to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));

    // Update cart count and total price
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;

    // Update cart items display
    updateCartItems();
}

// Function to update the cart display
function updateCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });

    // Show cart section when items are added
    document.getElementById('shopping-cart').style.display = cart.length > 0 ? 'block' : 'none';
}

// Function to remove a product from the cart
function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    cartCount--;

    // Save updated cart state to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));

    // Update cart count and total price
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;

    // Update cart items display
    updateCartItems();
}

// Load cart state from localStorage when the page loads
window.onload = function() {
    // Set the cart count and total price
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;

    // Update cart items display if there are any saved items
    updateCartItems();
};

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Simulate form processing (this is where you would handle the backend logic)
    setTimeout(() => {
        document.getElementById('contact-form').reset(); // Clear the form fields
        document.getElementById('form-success-message').style.display = 'block'; // Show success message
    }, 500); // Simulate a short delay for form submission
});
