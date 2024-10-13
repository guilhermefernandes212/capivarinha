function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src; // Define a imagem do modal como a imagem clicada
    modal.style.display = 'flex'; // Exibe o modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Oculta o modal
}

const musica = document.getElementById('musica');
const botaoMusica = document.querySelector('.btn-musica');

function toggleMusica() {
    if (musica.paused) {
        musica.play();
        botaoMusica.textContent = 'Pausar Música';
    } else {
        musica.pause();
        botaoMusica.textContent = 'Reproduzir Música';
    }
}

// Criar capivaras caindo
function criarCapivaras(num) {
    for (let i = 0; i < num; i++) {
        const capivara = document.createElement('img');
        capivara.src = 'capivara.png'; // Caminho para a imagem da capivara
        capivara.alt = 'Capivara'; // Descrição da capivara
        capivara.classList.add('capivara');
        capivara.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        capivara.style.animationDuration = Math.random() * 5 + 3 + 's'; // Duração da animação aleatória
        document.body.appendChild(capivara);
    }
}

// Iniciar capivaras ao carregar a página
window.onload = () => {
    criarCapivaras(20); // Aumenta o número de capivaras para cobrir mais a tela
};
const punycode = require('punycode');

// Codificando um domínio
const encoded = punycode.encode('exemplo.com');
console.log(encoded);

// Decodificando um domínio
const decoded = punycode.decode(encoded);
console.log(decoded);
