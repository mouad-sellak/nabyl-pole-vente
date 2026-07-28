# NYB Consulting · Audit et intégration de pôle de vente

Page unique en HTML pur (aucune dépendance, aucun build), hébergée sur GitHub Pages.

**En ligne :** https://mouad-sellak.github.io/nabyl-pole-vente/

## La seule chose à personnaliser avant de diffuser

L'adresse qui reçoit les demandes. En bas de `index.html`, dans le bloc `CONFIG` :

```js
var CONFIG = {
  ENDPOINT: "",                  // vide = repli sur le client mail
  EMAIL: "contact@exemple.com"   // à remplacer
};
```

Deux modes, au choix :

- **Sans compte tiers (par défaut).** Laisser `ENDPOINT` vide et mettre la vraie adresse
  dans `EMAIL`. Au clic, la messagerie du visiteur s'ouvre avec le message déjà rédigé
  (nom, e-mail, activité, volume de rendez-vous, message). Il n'a plus qu'à envoyer.
  Ça marche partout, sans inscription.
- **Envoi silencieux (recommandé une fois le site validé).** Créer un formulaire gratuit
  sur [Formspree](https://formspree.io) (50 envois par mois offerts), copier l'URL du type
  `https://formspree.io/f/xxxxxxxx` dans `ENDPOINT`. Le visiteur ne quitte jamais la page.
  `EMAIL` reste utile : il s'affiche en secours si l'envoi échoue.

Penser à remplacer aussi l'adresse dans le bloc `<noscript>` du formulaire.

## Le reste, si besoin

**Le nom.** « NYB » et « NYB Consulting » apparaissent dans le `<title>`, les balises `og:`,
le logo de la barre du haut et le pied de page. Un rechercher/remplacer suffit.

**Un vrai domaine.** Ajouter un fichier `CNAME` à la racine du dépôt contenant le domaine
(`nybconsulting.fr`), puis pointer un enregistrement DNS `CNAME` vers `mouad-sellak.github.io`.
Mettre à jour la balise `<link rel="canonical">` dans le même mouvement.

## Modifier et publier

```bash
# éditer index.html, puis :
git add -A && git commit -m "maj du site" && git push
```

GitHub Pages se met à jour tout seul en une minute environ.

## Prévisualiser en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Parti pris de conception

Le monde visuel est celui d'un **rapport d'audit** : encre profonde, papier chaud, filets
d'un cheveu, chiffres tabulaires, et un seul rouge qui ne sert qu'à marquer ce qui fuit.
Le relevé du premier écran n'est pas une décoration : il dit la thèse de la page en
quatre lignes, et les deux étages en rouge sont exactement ceux dont parle le texte.

- **Typographie :** Newsreader (titres, éditorial) et Archivo (texte, précision).
  Repli système si Google Fonts est bloqué.
- **Un seul mouvement** sur toute la page : le relevé qui se remplit à l'arrivée.
  Désactivé si le visiteur a demandé « moins d'animations ».
- **Accessibilité :** contrastes tous au-dessus de 4.5:1 (vérifiés, y compris les gris
  secondaires et le blanc sur le rouge des boutons), labels réels sur chaque champ,
  focus clavier visible, `aria-invalid` sur les champs en erreur, ancres décalées pour
  que la barre collante ne recouvre jamais la cible.
- **États du formulaire** tous couverts et testés : validation, envoi en cours, succès,
  échec réseau, JavaScript désactivé, piège à robots invisible (`_gotcha`, reconnu
  nativement par Formspree).
- **Un seul fichier**, CSS et JS inclus : rien à installer, rien à compiler, aucune
  dépendance qui casse dans six mois.
