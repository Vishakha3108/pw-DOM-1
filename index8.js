// Array of items
const items = ['Html', 'CSS', 'Tailwindcss', 'GitHub', 'JavaScript', 'c++',];

// Function to display the list of items
function displayItems(filteredItems) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear previous list items

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Initial display of all items
displayItems(items);

// Event listener for the input field
document.getElementById('filterInput').addEventListener('input', (event) => {
    const filterText = event.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(filterText));
    displayItems(filteredItems);
});