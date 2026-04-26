// 1. Création des étoiles jaunes pour le fond
function createStars() {
    for (let i = 0; i < 30; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '★';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(star);
    }
}

// 2. Fonction machine à écrire universelle
function typeEffect(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            let delay = 60;
            if (text.charAt(i-1) === "." || text.charAt(i-1) === ",") delay = 500;
            setTimeout(typing, delay);
        }
    }
    setTimeout(typing, 1000); // Délai de départ
}

// Lancer au chargement
window.onload = createStars;