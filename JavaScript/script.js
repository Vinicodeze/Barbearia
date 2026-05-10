// --- CARROSSEL--
function moveCarrossel(direcao){
    const container = document.getElementById('carrousel-cards');
    const larguraCard = container.querySelector('.card').offsetWidth + 30; //Largura + gap

    container.scrollBy({
        left: direcao * larguraCard,
        behavior: 'smooth'
    });
}