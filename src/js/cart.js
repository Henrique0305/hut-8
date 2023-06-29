const openCartButton = document.querySelector("#open-cart-button");

const overlay = document.querySelector("#modal-overlay");
const paymentModal = document.querySelector("#payment-modal");
const cartModal = document.querySelector("#cart-modal");

const closePaymentModalButton = document.querySelector(".close-payment-button");
const closeCartModalButton = document.querySelector("#close-cart-button");
const backToCartButton = document.querySelector("#back-to-cart-button");
const goToPaymentButton = document.querySelector("#go-to-payment-button");

closePaymentModalButton.addEventListener("click", () => {
  overlay.style.display = "none";
  paymentModal.style.display = "none";
  cartModal.style.display = "none";
});

closeCartModalButton.addEventListener("click", () => {
  overlay.style.display = "none";
  cartModal.style.display = "none";
  paymentModal.style.display = "none";
});

backToCartButton.addEventListener("click", () => {
  paymentModal.style.display = "none";
  cartModal.style.display = "block";
});

openCartButton.addEventListener("click", () => {
  overlay.style.display = "block";
  cartModal.style.display = "block";
});

goToPaymentButton.addEventListener("click", () => {
  cartModal.style.display = "none";
  paymentModal.style.display = "block";
});

overlay.addEventListener("click", (e) => {
  if (e.target.id === "modal-overlay") {
    overlay.style.display = "none";
    cartModal.style.display = "none";
    paymentModal.style.display = "none";
  }
});

