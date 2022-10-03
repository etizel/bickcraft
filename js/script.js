//Active nav-menu
const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

// Active itemns of budget

const parametros = new URLSearchParams(location.search);

function activeProduct(parametro) {
  const element = document.getElementById(parametro);

  if (element) {
    element.checked = true;
  }
}

parametros.forEach(activeProduct);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function eventosPerguntas(e) {
  console.log(e);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);
