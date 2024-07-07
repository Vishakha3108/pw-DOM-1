        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting and reloading the page
        
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
        
            if (username.length >= 3 && password.length >= 8) {
                alert('Form validation successful');
            } else {
                alert('Form validation failed');
            }
        });
        