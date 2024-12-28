// Get all the "Buy Now" buttons
const buyNowButtons = document.querySelectorAll('.buy-now');

// Add click event listeners to each button
buyNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = button.previousElementSibling.textContent;
    alert(`You have selected: ${productName}\nPrice: ${productPrice}\nProceeding to checkout.`);
    // Optionally, redirect to the checkout page (e.g., 'checkout.html')
    window.location.href = 'checkout.html'; // Uncomment to enable redirection
  });
});
