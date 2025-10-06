document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!name || !email || !subject || !message) {
    status.textContent = "Please fill out all fields!";
    status.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    status.textContent = "Enter a valid email address!";
    status.style.color = "red";
    return;
  }

  status.textContent = "✅ Message sent successfully!";
  status.style.color = "green";
  this.reset();
});
