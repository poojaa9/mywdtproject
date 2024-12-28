document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Example for checking username and password (use AJAX to connect to a backend in real-world apps)
    let users = JSON.parse(localStorage.getItem('users')) || []; // Mock user data in localStorage
    let userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
        alert('Login successful!');
        // Redirect to dashboard or home page
        window.location.href = 'pooz.html';
    } else {
        alert('User not found. Redirecting to register page...');
        window.location.href = 'register.html';
    }
});
