# NYB Consulting · Audit et intégration de pôle de vente

**Dernière mise à jour : 19 août 2026** · ajout des pages légales exigées pour l'ouverture
du compte bancaire professionnel (conditions générales, confidentialité, mentions légales,
prestations et tarifs, contact) et branchement du pied de page sur l'ensemble du site.

Site en HTML pur (aucune dépendance, aucun build), hébergé sur GitHub Pages.

**En ligne :** https://nybconsulting.com (miroir : https://mouad-sellak.github.io/nabyl-pole-vente/)

## Les pages

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page de vente. CSS et JS embarqués, comme avant. |
| `prestations.html` | Ce qui est vendu et à quel prix. La page que la banque cherche. |
| `contact.html` | Adresse postale, adresse électronique, téléphone, délai de réponse. |
| `conditions-generales.html` | 18 articles, B2B uniquement, obligation de moyens, responsabilité plafonnée. |
| `confidentialite.html` | Ce qui est collecté, pourquoi, combien de temps, et les droits. |
| `mentions-legales.html` | Identité de la LLC, hébergeur, propriété intellectuelle. |
| `pages.css` | Feuille commune aux cinq pages secondaires. `index.html` garde son CSS embarqué. |

## ⚠️ Ce qui doit être rempli avant d'envoyer le lien à la banque

Les informations manquantes apparaissent **en rouge souligné en pointillés** sur les pages,
entre crochets. Impossible de les rater. Tant qu'elles sont là, le site ne doit pas partir
chez Mercury ni chez Nabyl.

| À fournir | Où ça sert |
| --- | --- |
| `[nom légal de la LLC]` | Partout (10 fois) |
| `[État]` | Mentions légales, CGV (droit applicable) |
| `[comté et État du siège]` | CGV, tribunal compétent |
| `[numéro d'immatriculation de la LLC]` | Mentions légales |
| `[EIN]` | Mentions légales |
| `[adresse complète du siège]` | Partout (10 fois) |
| `[nom et adresse de l'agent enregistré]` | Mentions légales |
| `[prénom et nom du gérant]` | Mentions légales, directeur de publication |
| `[adresse e-mail de contact]` | Partout (7 fois) + `CONFIG.EMAIL` dans `index.html` |
| `[numéro de téléphone]` | Contact |
| `[devise]` | Prestations, CGV |
| `[prix de l'audit]` · `[prix mensuel de l'intégration]` | Prestations |
| `[durée de l'audit en jours]` · `[durée d'engagement en mois]` | Prestations |
| `[délai de paiement en jours]` | CGV 5.3, prestations |
| `[délai de mise en demeure en jours ouvrés]` | CGV 5.4 |
| `[frais de retard]` | CGV 5.4, prestations |
| `[préavis en jours]` | CGV 8.2, prestations |

Chaque libellé est unique dans tout le dépôt : un remplacement global par libellé suffit,
sans risque de toucher au mauvais endroit.

## Le nom de domaine

Retenu : **nybconsulting.com** (libre au registre le 19 août 2026). Les balises `canonical`
et Open Graph des six pages pointent déjà dessus.

Le domaine a été acheté chez Hostinger le 19 août 2026 et branché le jour même :

- zone DNS : quatre `A` sur la racine vers `185.199.108-111.153`, `CNAME` sur `www` vers
  `mouad-sellak.github.io`. Les deux entrées de parking ont été supprimées ;
- fichier `CNAME` à la racine du dépôt, qui déclare le domaine à GitHub Pages ;
- HTTPS activé une fois le certificat émis par GitHub.

Hostinger affiche un avertissement quand on pose plusieurs `A` sur le même nom. Il est
générique : quatre `A` sur la racine, c'est la configuration documentée par GitHub Pages.

## Deux choix tranchés dans les conditions générales, à valider

- **Retard de paiement (art. 5.4)** : suspension de la prestation et frais administratifs
  forfaitaires fixes, **pas d'intérêts de retard en pourcentage** qui courent. Choix éthique
  assumé. Si un avocat veut le standard du marché, ça se change en une ligne.
- **Droit applicable (art. 17)** : le droit de l'État de la LLC. Cohérent avec l'entité
  américaine. En B2B pur la clause tient bien, même face à des clients français ou belges.

## Les quatre clauses qui protègent vraiment

- **Art. 6, obligation de moyens.** Aucun volume de ventes ni taux de conversion garanti,
  et les témoignages ne valent pas promesse de résultat. La clause la plus importante
  pour un closer.
- **Art. 13, indépendance des parties.** Empêche un client de requalifier la relation en
  contrat de travail. Risque réel quand on travaille à temps plein pour une seule boîte.
- **Art. 14, responsabilité plafonnée** aux sommes perçues sur 12 mois, dommages indirects
  exclus (perte de chiffre d'affaires, de clientèle).
- **Art. 2, B2B uniquement.** En excluant les consommateurs, tout le bloc droit de la
  consommation saute : rétractation de 14 jours, information précontractuelle, etc.

## L'adresse qui reçoit les demandes

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
