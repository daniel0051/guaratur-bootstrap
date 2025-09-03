// Get current year
const year = new Date().getFullYear();

// Insert year in footer
const footer = document.querySelector('footer p');
footer.innerHTML = `Guaratur &copy; ${year}`;
