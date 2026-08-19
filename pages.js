/* ==========================================================================
   NYB Consulting · pages secondaires
   Deux comportements, tous deux au service de la lecture :
     1. le sommaire suit l'article qu'on est en train de lire ;
     2. un filet marque l'avancée dans le document.
   Rien d'autre. Aucune dépendance. Sans JavaScript, la page reste entière.
   ========================================================================== */
(function () {
  "use strict";

  var sommaire = document.querySelector(".toc");
  var articles = [].slice.call(document.querySelectorAll(".art[id]"));
  var filet = document.querySelector(".progress");
  var doux = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ----------------------------------------------------------------------
     Le sommaire est un dépliant sous 1000px, une colonne fixe au-dessus.
     L'attribut `open` est dans le HTML : sans JavaScript, tout reste visible.
     ---------------------------------------------------------------------- */
  if (sommaire && sommaire.tagName === "DETAILS") {
    var etroit = window.matchMedia("(max-width: 1000px)");
    var plier = function (mq) { sommaire.open = !mq.matches; };
    plier(etroit);
    if (etroit.addEventListener) etroit.addEventListener("change", plier);
    else etroit.addListener(plier);

    /* sur mobile, choisir un article referme le sommaire : on veut lire */
    sommaire.addEventListener("click", function (e) {
      if (etroit.matches && e.target.closest("a")) sommaire.open = false;
    });
  }

  /* ----------------------------------------------------------------------
     Marquer l'article en cours. On retient le dernier titre passé sous la
     barre : c'est ce que lit l'œil, pas ce qui entre par le bas de l'écran.
     ---------------------------------------------------------------------- */
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

  /* ----------------------------------------------------------------------
     L'avancée dans le document, mesurée sur la hauteur réellement lisible.
     ---------------------------------------------------------------------- */
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
     Les ancres d'article doivent se poser sous la barre collante, y compris
     quand on arrive par un lien reçu de l'extérieur.
     ---------------------------------------------------------------------- */
  function caler() {
    if (!location.hash) return;
    var cible = document.querySelector(location.hash);
    if (!cible) return;
    setTimeout(function () {
      cible.scrollIntoView({ behavior: doux.matches ? "auto" : "smooth", block: "start" });
    }, 60);
  }
  window.addEventListener("load", caler);
})();
