document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('newUsername').value;
    let password = document.getElementById('newPassword').value;
    let email = document.getElementById('email').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    let userExists = users.find(user => user.username === username);

    if (userExists) {
        alert('User already exists!');
    } else {
        users.push({ username, password, email });
        localStorage.setItem('users', JSON.stringify(users)); // Save users in localStorage

        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page after successful registration
    }
});
