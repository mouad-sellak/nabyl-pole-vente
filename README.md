# Site Nabyl · Audit et intégration de pôle de vente

Page unique en HTML pur (aucune dépendance, aucun build), hébergée sur GitHub Pages.

**En ligne :** https://mouad-sellak.github.io/nabyl-pole-vente/

## Les 3 choses à personnaliser

Tout est dans `index.html`. Rien d'autre à toucher.

### 1. Le nom de la société

Le prénom « Nabyl » apparaît à 5 endroits : la balise `<title>`, les balises
`og:title`, le logo de la barre du haut (`brand__name`), le pied de page,
et le texte de l'onglet. Un simple rechercher/remplacer de `Nabyl` suffit.

### 2. L'adresse de réception du formulaire

En bas du fichier, dans le bloc `CONFIG` :

```js
const CONFIG = {
  ENDPOINT: "",                      // vide = repli sur le client mail
  EMAIL: "contact@exemple.com"       // à remplacer
};
```

Deux modes, au choix :

- **Sans compte tiers (par défaut).** Laisser `ENDPOINT` vide et mettre la vraie
  adresse dans `EMAIL`. Au clic, la messagerie du visiteur s'ouvre avec le message
  déjà rédigé (nom, e-mail, activité, volume de rendez-vous, message). Il n'a plus
  qu'à envoyer. Ça marche partout, sans inscription.
- **Envoi silencieux (recommandé une fois le site validé).** Créer un formulaire
  gratuit sur [Formspree](https://formspree.io) (50 envois par mois offerts), copier
  l'URL du type `https://formspree.io/f/xxxxxxxx` dans `ENDPOINT`. Le visiteur ne
  quitte jamais la page, la demande arrive par e-mail. `EMAIL` reste utile : il sert
  de secours affiché si l'envoi échoue.

### 3. Le domaine (plus tard)

Pour brancher un vrai nom de domaine : ajouter un fichier `CNAME` à la racine du
dépôt contenant le domaine (`nabyl-exemple.fr`), puis pointer un enregistrement
DNS `CNAME` vers `mouad-sellak.github.io`.

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

## Choix techniques

- Un seul fichier, CSS et JS inclus : rien à installer, rien à compiler, aucun risque
  de dépendance qui casse dans six mois.
- Polices Google Fonts (Instrument Serif + Inter) avec repli système si le réseau
  bloque.
- Accessible : contrastes vérifiés, labels réels sur chaque champ, navigation au
  clavier visible, animations désactivées si le visiteur a choisi « moins d'animations ».
- Piège à robots invisible sur le formulaire (champ `_gotcha`, reconnu nativement
  par Formspree).
