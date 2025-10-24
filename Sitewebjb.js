window.addEventListener('DOMContentLoaded', () => {
  feather.replace();

  const texts = [
    {
      elementId: "formation1",
      text: "J'ai 25 ans et je recherche une alternance dès janvier 2026. Après une expérience en ressources humaines et en recrutement, je me réoriente vers l'informatique, un domaine qui me passionne pour sa créativité, ses défis et ses possibilités d'évolution. Mon objectif : construire ma carrière dans l'IT en combinant mon expérience RH à mes nouvelles compétences techniques acquises chez Epitech."
    },
    {
      elementId: "apropos-text",
      text: "Après un bachelor en marketing et une expérience en outils RH, j'ai découvert ma passion pour le code et la résolution de problèmes concrets. Dans mon précédent rôle, j'ai participé à l'optimisation technique de l'ATS en lien avec les équipes IT, géré les comptes utilisateurs et accès aux outils RH, et assuré la formation et le suivi des usages numériques auprès des équipes opérationnelles. Aujourd'hui, je souhaite combiner ces compétences humaines et techniques avec mon expertise acquise chez Epitech pour contribuer à des projets innovants dans l'IT. Passionné par le monde tech, je consacre mon temps libre à la lecture de blogs technologiques, à la veille informatique, au codage et à l'expérimentation de projets personnels comme des scripts ou de petits jeux vidéo. J'aime aussi le gaming, l'e-sport, le cinéma et les randonnées, qui nourrissent ma curiosité et ma créativité au quotidien."
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
