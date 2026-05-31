document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const transactionID = urlParams.get("transaction");

  const container = document.querySelector(".thank-you");

  if (transactionID) {
    container.innerHTML = `
      <h1>🎉 Thank You!</h1>
      <p>Your transaction ID is ${transactionID}.</p>
      <a href="https://your-secure-hosting-link.com/RMinderApp.zip" class="download-button">⬇ Download RMinder App (225 MB)</a>
    `;
  } else {
    container.innerHTML = `
      <h1>🚫 Access Denied</h1>
      <p>This page is only available after a valid JVZoo purchase.</p>
      <p>Please <a href="https://www.appmentarysoftsolutions.shop/sales-RMinderApp.html">Purchase</a> RMinder App to continue.</p>
    `;
  }
});
