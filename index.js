const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
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
    
    
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDalista.appendChild(containerItemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-br", {
        weekday: "long"
    });
    const data = new Date().toLocaleDateString("pt-br");
    const hora = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric"
    });
    const dataCompleta = `${diaDaSemana} (${data}) ás ${hora}`;
    const dataDoItem = document.createElement("P");
    dataDoItem.classList.add("texto-data");
    dataDoItem.innerText = dataCompleta;
    itemDalista.appendChild(dataDoItem);


    listaDeCompras.appendChild(itemDalista);

    inputItem.value = '';
})
