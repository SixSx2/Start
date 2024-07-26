function mostrarConteudo(id) {
    const conteudos = document.querySelectorAll('.conteudo');
    
    // Esconder todos os conteúdos
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('ativo');
    });

    // Mostrar o conteúdo selecionado
    if (id === 'home') {
        document.body.style.backgroundImage = ''; // Restaura a imagem de fundo
    } else {
        const conteudoAtivo = document.getElementById(id);
        if (conteudoAtivo) {
            conteudoAtivo.classList.add('ativo');
            // Remover fundo ao clicar nos botões de treino
            if (['Biceps', 'Triceps', 'Peito', 'Costas', 'Pernas'].includes(id)) {
                document.body.style.backgroundImage = 'none'; // Remove o fundo
            } else {
                document.body.style.backgroundImage = ''; // Restaura o fundo se necessário
            }
        }
    }
}

// Função que exibe um aviso
function mostrarAviso() {
    alert("Este treino ainda não está disponível! Tente novamente na próxima atualização");
}

// Adiciona um evento de clique ao botão
document.getElementById("meuBotao").addEventListener("click", mostrarAviso);
document.getElementById("meuBotao2").addEventListener("click", mostrarAviso);
document.getElementById("meuBotao3").addEventListener("click", mostrarAviso);

// Adiciona evento ao botão "Inicio"
document.getElementById("inicio-btn").addEventListener("click", () => {
    mostrarConteudo('home'); // Chama a função para mostrar apenas a imagem de fundo
});
