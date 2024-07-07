const input = document.getElementById('imageUpload');
const preview = document.getElementById('imagePreview');

input.addEventListener('change', () => {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const imgElement = document.createElement('img');
            imgElement.classList.add('image-preview');
            imgElement.src = event.target.result;
            preview.innerHTML = ''; // Clear previous preview
            preview.appendChild(imgElement);
        }

        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = 'No image selected';
    }
});