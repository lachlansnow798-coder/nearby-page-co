window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const form = document.querySelector('form[name="website-enquiry"]');
  const isLocalPreview = ["localhost", "127.0.0.1"].includes(window.location.hostname);

  if (form && isLocalPreview) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "thanks.html";
    });
  }
});
