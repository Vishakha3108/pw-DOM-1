window.onload = function() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();

    // Format the date in MM/DD/YYYY format
    const formattedDate = (currentDate.getMonth() + 1) + ':' + currentDate.getDate() + ':' + currentDate.getFullYear();

    dateElement.textContent = formattedDate;
};
