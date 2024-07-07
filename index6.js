// Function to update the status heading based on image visibility
function updateStatus() {
    const image = document.getElementById('image');
    const statusHeading = document.getElementById('statusHeading');
    const toggleButton = document.getElementById('toggleButton');
    
    if (image.style.display === 'none') {
        statusHeading.textContent = 'Image is hidden';
        toggleButton.textContent = 'Show Image';
    } else {
        statusHeading.textContent = 'Image is visible';
        toggleButton.textContent = 'Hide Image';
    }
}

// Event listener for the toggle button
document.getElementById('toggleButton').addEventListener('click', () => {
    const image = document.getElementById('image');
    
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
    updateStatus();
});

// Initial status update on page load
updateStatus();