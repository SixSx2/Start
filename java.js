
function mostrarConteudo(id) {
    const conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('ativo');
    });
    document.getElementById(id).classList.add('ativo');
}

// Função que exibe um aviso
function mostrarAviso() {
    alert("Este treino ainda não esta disponivel! Tente novamente na proxima atualização");
}

// Adiciona um evento de clique ao botão
document.getElementById("meuBotao").addEventListener("click", mostrarAviso);
document.getElementById("meuBotao2").addEventListener("click", mostrarAviso);
document.getElementById("meuBotao3").addEventListener("click", mostrarAviso);

console.log("teste")