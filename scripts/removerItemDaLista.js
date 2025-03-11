import verificarListaVazia from "./verificarListaVazia.js";

export function removerItemDaLista(botao, listaDeCompras) {
    botao.addEventListener("click", () => {
        const itemDaLista = botao.closest("li"); 
        if (itemDaLista) {
            itemDaLista.remove();
            verificarListaVazia(listaDeCompras); 
        }
    });
}