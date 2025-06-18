// Show "message sent" alert on form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! Thank you for contacting us.");
      contactForm.reset();
    });
  }
});

// (Optional) Add job filtering logic here later
