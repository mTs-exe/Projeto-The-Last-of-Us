/* 
    Objetivo: Quando clicarmosno botão temos que mostrar a imagem de fundo correspondente

    -passo1: dar um jeito de pegar o elemento html dos botoes

    -passo2: dar um jeito de identificar o clique do usuario no botão

    -passo3: desmarcar o botão selecionado anterior 

    -passo4: marcar o botão clicado como se estivesse selecionada

        

    -passo6: fazer a imagem aparecer corespondente ao botão selecionado

*/

// passo1: dar um jeito de pegar o elemento html dos botoes
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


//-passo2: dar um jeito de identificar o clique do usuario no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //-passo3: desmarcar o botão selecionado anterior 
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //-passo4: marcar o botão clicado como se estivesse selecionada
        botao.classList.add('selecionado');

        //-passo5: esconder a imagem anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //-passo6: fazer a imagem aparecer corespondente ao botão selecionado
        imagens[indice].classList.add('ativa');

    })
    
});