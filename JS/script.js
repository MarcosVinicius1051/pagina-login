var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPassowrd = document.querySelector("#userPassowrd");
const paginaLogado = "/HTML/logado.html";

const btn = document.querySelector("#btn");

if(btn){

    btn.addEventListener("click", (evt) => {

        limparInput("Nome",userName);
        limparInput("Email",userEmail);
        limparInput("Senha",userPassowrd);

        novaPagina(paginaLogado)


    });

}


function limparInput(key,user) {

  window.localStorage.setItem(key,user.value);

  let ordem = localStorage.getItem("ordemChave");

 

  if (!ordem) {
    ordem = [];
} else {
    ordem = JSON.parse(ordem);

    if(ordem.length == 3){
      ordem=[]
    }
}
  
  ordem.push(key);

  window.localStorage.setItem('ordemChave', JSON.stringify(ordem));


  return (user.value = "");
}



function novaPagina(url){
  const win = window.open(url, "_Blank");
  win.focus();
}



