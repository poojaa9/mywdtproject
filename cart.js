// Function to calculate the total price based on quantity
function updateTotal() {
    const pricePerKg = parseFloat(document.getElementById('price').innerText);
    const quantity = parseFloat(document.getElementById('quantity').value);
    const totalPrice = pricePerKg * quantity;
    document.getElementById('total').innerText = totalPrice.toFixed(2);
}

// Function to add item to the cart
function addToCart() {
    const itemName = document.querySelector('.item-details h2').innerText;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').innerText);
    const totalPrice = (quantity * price).toFixed(2);

    // Create a new list item for cart
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${itemName} - ${quantity} kg - $${totalPrice} <span class="remove-item" onclick="removeItem(this)">Remove</span>`;

    cartItems.appendChild(cartItem);
    updateCartTotal();
}

// Function to remove item from the cart
function removeItem(item) {
    item.parentElement.remove();
    updateCartTotal();
}

// Function to calculate the total cost in the cart
function updateCartTotal() {
    const cartItems = document.querySelectorAll('#cart-items li');
    let total = 0;

    cartItems.forEach(item => {
        const itemPrice = parseFloat(item.innerText.split('-')[2].trim().substring(1));
        total += itemPrice;
    });

    document.getElementById('cart-total').innerText = `Total Price: $${total.toFixed(2)}`;
}

// Function to simulate the "Buy Now" action
function buyNow() {
    alert("Proceeding to checkout...");
}

// Event listener to update the total price when quantity changes
document.getElementById('quantity').addEventListener('input', updateTotal);

// Initial call to set total on page load
updateTotal();
