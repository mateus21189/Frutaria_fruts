
carrinho = [];

function adicionarAoCarrinho(nome, preco, imagem) {
    carrinho.push({ nome, preco, imagem });
    atualizarCarrinho();
}

//--------------------------------------------------------------
quantidadeDeProdutos = 0;


function atualizarQuantidadeNaTela() {
    const quantidadeSpan = document.getElementById('quantidade-no-icone');
    quantidadeSpan.textContent = quantidadeDeProdutos;
}

function adicionarAoCarrinho() {
    quantidadeDeProdutos++;
    atualizarQuantidadeNaTela();
}

//------------------------------------------------------------------
function adicionarAoCarrinho(nome, preco, imagem) {

    const item = { nome, preco, imagem };
    
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push(item);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    quantidadeDeProdutos++;
    atualizarQuantidadeNaTela();

}
//-------------------------------------------------------------------
document.getElementById("loginFm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("user").value;
    const password = document.getElementById("snh").value;
    const resultElement = document.getElementById("result");

    if (username.trim() === "" || password.trim() === "") {
        resultElement.innerText = "Por favor, preencha todos os campos.";
    } else {
        if (username === "admin" && password === "1234") {
            resultElement.innerText = "Login bem-sucedido/Seja Bem Vindo!";
            
            setTimeout(function() {
                window.location.href = "tl2.html"; 
            }, 1000); 
        } else {
            resultElement.innerText = "Login/Senha incorretos";
        }
    }
});
//--------------------------------------------------------------------------
function filtrarPorCategoria(categoria) {
    const listaProdutos = document.getElementById('listaProdutos');
    const produtos = listaProdutos.getElementsByClassName('product');
    const tipoFrutaMensagem = document.getElementById('tipoFrutaMensagem');

    for (const produto of produtos) {
        const categoriaProduto = produto.getAttribute('data-categoria');

        if (categoria === 'Todas' || categoria === categoriaProduto) {
            produto.style.display = 'inline-block';
        } else {
            produto.style.display = 'none';
        }
    }
    tipoFrutaMensagem.textContent = categoria === 'Todas' ? 'Todas as Frutas' : `Frutas de ${categoria}`;

}


//---------------------------------------------------------------------


    function toggleNav() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    
        // Adiciona um evento de clique a cada LI
        const navOptions = document.querySelectorAll('.nav-links li');
        navOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Fecha o menu quando uma opção da lista é clicada
                navLinks.classList.remove('active');
                
                // Coloque aqui o código para carregar algo
                // Por exemplo, você pode chamar uma função para carregar conteúdo
                // carregarConteudo(option.innerText);
            });
        });
    }
//--------------------------------------------------------------------
const carouselImages = document.querySelectorAll('.carousel img');
        let currentIndex = 0;

        function showNextImage() {
            carouselImages[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselImages.length;
            carouselImages[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 3000);
