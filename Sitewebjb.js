// Feather Icons
window.addEventListener('DOMContentLoaded', () => {
  feather.replace();

  // Typewriter Accueil
  const text = "J’ai 25 ans et je recherche une alternance à partir de janvier 2026. Après un parcours en ressources humaines et une expérience en recrutement, j’ai choisi de me réorienter vers l’informatique. Ce domaine me passionne parce qu’il me permet de créer, résoudre des problèmes et progresser en permanence. Mon objectif est de construire ma carrière dans l’IT en alliant mon expérience humaine en RH à mes nouvelles compétences techniques acquises chez Epitech.";
  const element = document.getElementById("formation1");

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

window.addEventListener('DOMContentLoaded', () => {
  // Typewriter À propos
  const textApropos = "J’ai 25 ans et je me prépare à construire ma carrière dans l’IT. Après un bachelor en marketing et une alternance chez Ikosoft, j’ai eu l’opportunité de collaborer étroitement avec des développeurs. Cette expérience a été un véritable déclic : j’ai découvert un univers où je pouvais créer, analyser et résoudre des problèmes concrets grâce au code. Fort de mon parcours en ressources humaines et en recrutement, j’ai développé des compétences en communication, en accompagnement et en gestion de profils variés, que je souhaite désormais mettre au service de projets techniques. Aujourd’hui, mon objectif est clair : bâtir une carrière dans l’informatique, en combinant mes compétences humaines avec une expertise technique approfondie, acquise à travers ma formation et mes projets personnels. Passionné par le monde tech, je consacre également mon temps libre à la lecture de blogs technologiques, la veille informatique, le codage et l’expérimentation de projets personnels (scripts, petits jeux vidéo). J’apprécie aussi le gaming et l’e-sport, le cinéma et les randonnées, qui me permettent de rester curieux et créatif dans tous les aspects de ma vie.";
  
  const elementApropos = document.getElementById("apropos-text");
  let j = 0;

  function typeWriterApropos() {
    if (j < textApropos.length) {
      elementApropos.textContent += textApropos.charAt(j);
      j++;
      setTimeout(typeWriterApropos, 25);
    }
  }

  typeWriterApropos();
});

