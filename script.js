const card = document.getElementById('card');
const particlesContainer = document.getElementById('particles-container');

// Función para generar partículas
function createParticles() {
    for (let i = 0; i < 50; i++) { // Número de partículas
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);

        // Posición y velocidad aleatoria
        const size = Math.random() * 5 + 2 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`; // Color aleatorio

        // Remover partículas después de la animación
        setTimeout(() => {
            particle.remove();
        }, 1500); // Duración de la animación
    }
}

// Evento para abrir la carta y mostrar partículas
card.addEventListener('click', function() {
    if (!card.classList.contains('clicked')) {
        // Aplicar inclinación
        card.classList.add('clicked');

        // Generar partículas y voltear carta
        setTimeout(() => {
            createParticles();
            card.classList.toggle('open');
            card.classList.remove('clicked');
        }, 300);
    } else {
        card.classList.toggle('open');
    }
});

