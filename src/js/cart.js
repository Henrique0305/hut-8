const closePaymentModalButton = document.querySelector(".close-payment-button");
const overlay = document.querySelector("#modal-overlay");
const openCartButton = document.querySelector("#open-cart-button");

closePaymentModalButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

openCartButton.addEventListener("click", () => {
  overlay.style.display = "block";
});

