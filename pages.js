/* ==========================================================================
   NYB Consulting · comportement du site
   Trois choses, toutes au service de la lecture :
     1. ce qui doit entrer n'entre qu'en arrivant à l'écran ;
     2. le sommaire suit l'article qu'on lit ;
     3. un filet marque l'avancée dans le document.
   Aucune dépendance. Sans JavaScript, la page reste entière et lisible.
   ========================================================================== */
(function () {
  "use strict";

  var doux = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ----------------------------------------------------------------------
     1. Les entrées. Une animation jouée pour un bloc situé trois écrans plus
     bas ne sert personne : on attend qu'il arrive. Les éléments d'un même
     groupe s'échelonnent tout seuls, sauf si un délai est déjà posé.
     ---------------------------------------------------------------------- */
  var aEntrer = [].slice.call(document.querySelectorAll("[data-ax]"));

  if (!aEntrer.length) { /* rien à faire */ }
  else if (doux.matches || !("IntersectionObserver" in window)) {
    aEntrer.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    /* échelonner les frères d'un même groupe : 90 ms d'écart, plafonné,
       pour que la dernière carte n'arrive pas une seconde après la première */
    var groupes = new Map();
    aEntrer.forEach(function (el) {
      if (el.style.getPropertyValue("--d")) return;
      var p = el.parentElement;
      var rang = groupes.get(p) || 0;
      groupes.set(p, rang + 1);
      if (rang) el.style.setProperty("--d", Math.min(rang * 90, 360) + "ms");
    });

    var oeil = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        oeil.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.01 });

    /* Ce qui est déjà à l'écran, ou déjà passé, est posé tout de suite. Sans
       ça, une page rouverte au milieu (restauration de position, lien avec
       ancre) laisse invisibles pour toujours tous les blocs situés au-dessus :
       ils n'entrent jamais dans le champ de l'observateur. */
    aEntrer.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
      else oeil.observe(el);
    });
  }

  /* ----------------------------------------------------------------------
     2. Le sommaire : dépliant sous 1000px, colonne fixe au-dessus.
     `open` est dans le HTML, donc sans JavaScript tout reste visible.
     ---------------------------------------------------------------------- */
  var sommaire = document.querySelector("details.toc");
  if (sommaire) {
    var etroit = window.matchMedia("(max-width: 1000px)");
    var plier = function (mq) { sommaire.open = !mq.matches; };
    plier(etroit);
    if (etroit.addEventListener) etroit.addEventListener("change", plier);
    else etroit.addListener(plier);
    sommaire.addEventListener("click", function (e) {
      if (etroit.matches && e.target.closest("a")) sommaire.open = false;
    });
  }

  /* ----------------------------------------------------------------------
     3. Marquer l'article en cours. On retient le dernier titre passé sous la
     barre : c'est ce que lit l'oeil, pas ce qui entre par le bas de l'écran.
     ---------------------------------------------------------------------- */
  var articles = [].slice.call(document.querySelectorAll(".art[id]"));
  var filet = document.querySelector(".progress");
  var liens = {};
  if (sommaire) {
    [].forEach.call(sommaire.querySelectorAll('a[href^="#"]'), function (a) {
      liens[a.getAttribute("href").slice(1)] = a;
    });
  }

  var courant = null;
  function marquer() {
    var seuil = (parseFloat(getComputedStyle(document.documentElement)
                  .getPropertyValue("--nav-h")) || 68) + 40;
    var vu = null;
    for (var i = 0; i < articles.length; i++) {
      if (articles[i].getBoundingClientRect().top <= seuil) vu = articles[i].id;
      else break;
    }
    if (!vu && articles.length) vu = articles[0].id;
    if (vu === courant) return;
    if (courant && liens[courant]) liens[courant].removeAttribute("aria-current");
    courant = vu;
    if (courant && liens[courant]) liens[courant].setAttribute("aria-current", "true");
  }

  function avancee() {
    if (!filet) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
    filet.style.setProperty("--p", p.toFixed(4));
  }

  /* un seul passage par rendu : le défilement doit rester net */
  var enAttente = false;
  function auDefilement() {
    if (enAttente) return;
    enAttente = true;
    requestAnimationFrame(function () {
      enAttente = false;
      if (articles.length) marquer();
      avancee();
    });
  }

  if (articles.length || filet) {
    auDefilement();
    window.addEventListener("scroll", auDefilement, { passive: true });
    window.addEventListener("resize", auDefilement, { passive: true });
  }

  /* ----------------------------------------------------------------------
     Les ancres doivent se poser sous la barre collante, y compris quand on
     arrive par un lien reçu de l'extérieur.
     ---------------------------------------------------------------------- */
  window.addEventListener("load", function () {
    if (!location.hash) return;
    var cible = document.querySelector(location.hash);
    if (!cible) return;
    setTimeout(function () {
      cible.scrollIntoView({ behavior: doux.matches ? "auto" : "smooth", block: "start" });
    }, 60);
  });
})();
