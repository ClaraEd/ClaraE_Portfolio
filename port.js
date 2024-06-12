function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMessage = document.getElementById("success-message");

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    emailjs
      .sendForm("service_9ngwbqu", "template_6utfwce", this)
      .then(function () {
        successMessage.textContent = "Message sent successfully!";
        successMessage.style.display = "block";
        document.getElementById("contact-form").reset();
      });
  });
