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

function perguntaSetada(cliked) {
  const local = cliked.currentTarget;
  const controls = local.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  console.log(resposta);
  resposta.classList.toggle("active");
  const ativa = resposta.classList.contains("active");
  console.log(ativa);
  local.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", perguntaSetada);
}

perguntas.forEach(eventosPerguntas);

// Galeria Dinâmica

// const galeria = document.querySelectorAll(".bicicleta-imagens img");
// const galeriaContainer = document.querySelector(".bicicleta-imagens");

// function trocarImagem(event) {
//   const img = event.currentTarget;
//   const media = matchMedia("(min-width: 1000px)").matches;
//   console.log(media);
//   if (media) {
//     galeriaContainer.prepend(img);
//   }
// }

// function percorrerGaleria(img) {
//   img.addEventListener("click", trocarImagem);
// }

// galeria.forEach(percorrerGaleria);

// Animation Pluguin
// if (window.SimpleAnime) {
//   new SimpleAnime();
// }

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const container = document.querySelectorAll('.bicicleta-imagens');

function 

function galeriaImagem(event) {
  event.addEventListener('click', changeImage)
}

galeria.forEach(galeriaImagem);