window.addEventListener('DOMContentLoaded', () => {
  feather.replace();

  const texts = [
    {
      elementId: "formation1",
      text: "Bonjour, je m’appelle Jean-Baptiste. J'ai 25 ans et je recherche une alternance dès janvier 2026. Après une expérience en ressources humaines et en recrutement, je me réoriente vers l'informatique, un domaine qui me passionne pour sa créativité, ses défis et ses possibilités d'évolution. Mon objectif : construire ma carrière dans l'IT en combinant mon expérience RH à mes nouvelles compétences techniques acquises chez Epitech."
    },
    {
    elementId: "apropos-text",
    text: "Après un bachelor en marketing et une expérience sur les outils RH, j'ai découvert ma passion pour le code et la gestion de projets IT. J'aime coordonner les équipes, optimiser les outils et accompagner les utilisateurs pour que les projets avancent efficacement. En dehors du travail, je consacre mon temps libre à coder, expérimenter des projets perso, suivre l'actualité tech, et profiter du gaming, du cinéma et des randonnées pour rester curieux et créatif."
    }
  ];

  texts.forEach(({ elementId, text }) => {
    const element = document.getElementById(elementId);
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 25);
      }
    }

    typeWriter();
  });
});
