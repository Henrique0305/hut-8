// queryAll by id botao-menos
const botaoMenos = document.querySelectorAll(".button-menos");
const arrayBotaoMenos = Array.from(botaoMenos);

const botaoMais = document.querySelectorAll(".button-mais");
const arrayBotaoMais = Array.from(botaoMais);

const total = document.querySelectorAll(".quantidade-display");
const arrayTotal = Array.from(total);

botaoMais.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    arrayTotal[index].innerHTML = parseInt(arrayTotal[index].innerHTML) + 1;
    updateLocalStorage(index, "mais", parseInt(arrayTotal[index].innerHTML));
  });
});

botaoMenos.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    if (arrayTotal[index].innerHTML > 0) {
      arrayTotal[index].innerHTML = parseInt(arrayTotal[index].innerHTML) - 1;
      updateLocalStorage(index, "menos", parseInt(arrayTotal[index].innerHTML));
    }
  });
});

function getAndParseLocalStorage() {
  return JSON.parse(localStorage.getItem("carrinho"));
}

function updateCartTotal() {
  const cart = getAndParseLocalStorage() || [];

  const total = cart.reduce((acc, item) => {
    return acc + item.quantidade;
  }, 0);

  const cartTotal = document.querySelector("#cartTotal");

  cartTotal.innerHTML = total;
}

function updateLocalStorage(index, TYPE, total) {
  const cart = getAndParseLocalStorage() || [];

  const camisa = cart.find((item) => item.id === index);

  if (!camisa) {
    cart.push({
      id: index,
      quantidade: 1,
    });
  } else {
    if (TYPE === "mais") {
      camisa.quantidade = total;
    }
    if (TYPE === "menos") {
      camisa.quantidade = total;
    }
  }

  localStorage.setItem("carrinho", JSON.stringify(cart));

  updateCartTotal();
}

function initTotals() {
  const carrinho = getAndParseLocalStorage() || [];

  arrayTotal.forEach((total, index) => {
    carrinho.find((item) => {
      if (item.id === index) {
        total.innerHTML = item.quantidade;
      }
    });
  });

  updateCartTotal();
}

initTotals();

