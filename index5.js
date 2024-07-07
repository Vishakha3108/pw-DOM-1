// Function to update the status heading based on authentication status
function updateStatus() {
    const statusHeading = document.getElementById('statusHeading');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    statusHeading.textContent = isAuthenticated ? 'Logged In' : 'Not Logged In';
}

// Event listener for the login button
document.getElementById('loginButton').addEventListener('click', () => {
    localStorage.setItem('isAuthenticated', 'true');
    updateStatus();
});

// Event listener for the logout button
document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('isAuthenticated');
    updateStatus();
});

// Initial status update on page load
updateStatus();