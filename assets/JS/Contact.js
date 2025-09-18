document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠ Please fill out all fields.";
    return;
  }

  // Basic email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠ Please enter a valid email.";
    return;
  }

  // Success message
  formMessage.style.color = "green";
  formMessage.textContent = "✅ Message sent successfully!";

  // Reset form
  document.getElementById("contactForm").reset();
});
