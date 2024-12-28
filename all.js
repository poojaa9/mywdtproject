// Cart functionality
let cart = [];

// Add product to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('p').textContent;

        const product = {
            name: productName,
            price: productPrice,
        };

        cart.push(product);
        updateCart();
    });
});

// Show cart popup
const cartPopup = document.getElementById('cart-popup');
const closeCartButton = document.getElementById('close-cart');

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItemsContainer.appendChild(li);
    });
    cartPopup.style.display = 'block';
}

closeCartButton.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

// Show cart when clicking the "Buy Now" buttons
const buyNowButtons = document.querySelectorAll('.buy-now');
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Redirecting to checkout...");
    });
});
