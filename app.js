// Get the theme toggle button
const themeToggle = document.querySelector('.theme-toggle');

// Function to toggle the theme
function toggleTheme() {
    // Toggle the "dark-theme" class on the body
    document.body.classList.toggle('dark-theme');

    // Change the button text based on the current theme
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '🌕'; // Change button to indicate light theme
    } else {
        themeToggle.textContent = '🌙'; // Change button to indicate dark theme
    }
}

// Add an event listener to the button to call toggleTheme on click
themeToggle.addEventListener('click', toggleTheme);

// Function to update profile photo
function updateProfilePhoto(event) {
    const photo = document.getElementById("profile-img");
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photo.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
