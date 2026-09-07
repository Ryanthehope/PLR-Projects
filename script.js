const yearElements = document.querySelectorAll("#year");
const currentYear = new Date().getFullYear();

yearElements.forEach((yearElement) => {
    yearElement.textContent = currentYear;
});
