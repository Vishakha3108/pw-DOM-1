        // Array of options
        const options = ['JavaScript', 'Html', 'JAVA', 'C++', 'Python'];

        // Create a heading element
        const heading = document.createElement('h1');
        heading.textContent = 'Select an Option';
        document.body.appendChild(heading);

        // Create a dropdown element
        const dropdown = document.createElement('select');
        document.body.appendChild(dropdown);

        // Loop through the options array and add each option to the dropdown
        options.forEach(optionText => {
            const option = document.createElement('option');
            option.textContent = optionText;
            option.value = optionText;
            dropdown.appendChild(option);
        });