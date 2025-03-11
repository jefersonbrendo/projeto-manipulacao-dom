import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import { removerItemDaLista } from "./removerItemDaLista.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista (listaDeCompras) {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDalista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
        nomeItem.style.textDecoration = "line-through";
    } else {
        nomeItem.style.textDecoration = "none";
    }
    
})

    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "❌";
    botaoRemover.classList.add("botao-remover");

    removerItemDaLista(botaoRemover, listaDeCompras);

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoRemover);

    itemDalista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    const dataDoItem = document.createElement("P");
    dataDoItem.classList.add("texto-data");
    dataDoItem.innerText = dataCompleta;

    itemDalista.appendChild(dataDoItem);

    inputItem.value = '';

    return itemDalista;

}
