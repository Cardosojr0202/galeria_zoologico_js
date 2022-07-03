// Criação das Variaveis 
let imagens = document.querySelectorAll('._img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btnClosed = document.querySelector('#btn_close');
let srcVal = ""

// evento de clique, para capturar o src da imagem
for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        // capturar o src
        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src',srcVal);
        // monstrar o modal com a imagem
        modal.classList.toggle('modal_active');
    });
}
// evento do botão fechar
btnClosed.addEventListener('click', function(){
     modal.classList.toggle('modal_active');
})