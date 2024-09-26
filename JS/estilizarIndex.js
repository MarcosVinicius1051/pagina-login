const titulo = document.querySelector(".titulo h1");
const btnEstilo = document.getElementById("btn");

const semSenha = document.querySelector("#semSenha");
const semConta = document.querySelector(".sem-conta a");

btnEstilo.addEventListener("mouseenter", (evt) => {
  if (evt) {
    btnEstilo.classList.add("selecionado");
  }
});

btnEstilo.addEventListener("mouseleave", (evt) => {
  if (evt) {
    btnEstilo.classList.remove("selecionado");
  }
});
