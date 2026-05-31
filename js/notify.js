document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("notifyForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(form);
    const email = formData.get("email");

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbw6bmV-lFS-nhQrRoLE8-kVdXe1JGuNlLXYTTe5EYpXIaX0yKy_yF_k3SX_HiaT5KPJ/exec", {
        method: "POST",
        body: new URLSearchParams({ email })
      });

      const text = await res.text();
      responseMessage.textContent = text; // e.g. "Thanks, you’ll be notified!"
      responseMessage.style.color = "green";
      form.reset();
    } catch (err) {
      responseMessage.textContent = "Oops, something went wrong. Please try again." + err;
      responseMessage.style.color = "red";
    }
  });
});

