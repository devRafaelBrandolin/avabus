// Lista de objetos com URLs das imagens e URLs dos links
var imagens = [
    { imagem: "../img/ad/1.svg", link: "#" },
    { imagem: "../img/ad/0.svg", link: "https://api.whatsapp.com/send?phone=5514997744406&text=Ol%C3%A1%20eu%20gostaria%20de%20anunciar%20meu%20neg%C3%B3cio%20no%20AvaBus%2C%20como%20funciona%20%3F" },
    { imagem: "../img/ad/2.svg", link: "https://www.instagram.com/hv_eletricidade/" }
    // Adicione quantos pares de URLs desejar
];

// Função para escolher aleatoriamente uma imagem da lista
function escolherImagemAleatoria() {
    var indice = Math.floor(Math.random() * imagens.length);
    return imagens[indice];
}

// Função para definir a imagem aleatória e seu link correspondente
function definirImagemAleatoria() {
    var imagemAleatoria = escolherImagemAleatoria();
    var imagemElemento = document.getElementById("imagem");
    var linkElemento = document.getElementById("link-imagem");
    imagemElemento.src = imagemAleatoria.imagem;
    linkElemento.href = imagemAleatoria.link;
}

// Chamando a função para definir a imagem ao carregar a página
definirImagemAleatoria();

// Adicionando um listener para atualizar a imagem quando a página for recarregada
window.addEventListener("load", definirImagemAleatoria);
