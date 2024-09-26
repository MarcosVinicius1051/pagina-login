const dadosUsuario = document.querySelector(".dadosUsuario");

let arrayNomes = ['Nome: ','Email: ','Senha: '];

let ordem = localStorage.getItem("ordemChave");
ordem = JSON.parse(ordem);

    
function mostrarDados (val){
    for(i in val){
        const divP = document.createElement("div");
        divP.classList = "containerDados";

        const tagP = document.createElement("p");
        tagP.innerHTML = localStorage.getItem(val[i])
        tagP.classList = "dados-pessoais";

        const tagH1 = document.createElement("p");
        tagH1.classList = "titulo-dados-pessoais";
        tagH1.innerHTML = arrayNomes[i]

        dadosUsuario.appendChild(divP);
        divP.appendChild(tagP);
        divP.appendChild(tagH1);
        
    }
}

mostrarDados(ordem);

