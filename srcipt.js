
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("message").textContent =
    "Thank you! Your form was submitted successfully.";

  contactForm.reset();
});
