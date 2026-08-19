# NYB Consulting · Audit et intégration de pôle de vente

**Dernière mise à jour : 19 août 2026** · identité de la société renseignée (NYB Consulting LLC,
Nouveau-Mexique), clauses contractuelles arrêtées, passe de design complète sur les cinq pages
secondaires : sommaire qui suit la lecture, dépliant sur mobile, styles d'impression, lien
d'évitement clavier, ancres citables par article.

Site en HTML pur (aucune dépendance, aucun build), hébergé sur GitHub Pages.

**En ligne :** https://nybconsulting.com (miroir : https://mouad-sellak.github.io/nabyl-pole-vente/)

## Les pages

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page de vente. CSS et JS embarqués, autonome. |
| `prestations.html` | Ce qui est vendu, comment c'est facturé. La page que la banque cherche. |
| `contact.html` | Adresse postale, adresse électronique, délai de réponse. |
| `conditions-generales.html` | 18 articles, B2B uniquement, obligation de moyens, responsabilité plafonnée. |
| `confidentialite.html` | Ce qui est collecté, pourquoi, combien de temps, et les droits. |
| `mentions-legales.html` | Identité de la société, hébergeur, propriété intellectuelle. |
| `pages.css` | Feuille commune aux cinq pages secondaires, styles d'impression compris. |
| `pages.js` | Sommaire qui suit la lecture, filet d'avancée, dépliant mobile. Rien d'autre. |
| `CNAME` | Déclare `nybconsulting.com` à GitHub Pages. Ne pas retirer. |

Les cinq pages secondaires partagent le même en-tête, la même barre du haut et le même pied de
page, recopiés dans chaque fichier. Si l'un change, changer les cinq.

## ⚠️ Le seul champ encore ouvert

**L'adresse électronique de contact.** Elle apparaît sept fois, toujours sous la forme
`[adresse e-mail]`, affichée en rouge souligné de pointillés. Elle manque aussi dans
`index.html`, deux fois : dans le bloc `CONFIG` en bas de page et dans le `<noscript>` du
formulaire, où subsiste `contact@exemple.com`.

Tant qu'elle n'est pas renseignée, **le site ne doit pas être envoyé à la banque** : Mercury
teste les canaux de contact déclarés. Aucun lien `mailto` ne pointe vers une adresse d'exemple,
volontairement : un courriel qui rebondit est pire qu'un champ visiblement vide.

Le domaine étant en place, `contact@nybconsulting.com` est le choix naturel, à condition de
créer la boîte ou une redirection chez Hostinger.

## Ce qui est renseigné

| Donnée | Valeur | Source |
| --- | --- | --- |
| Dénomination sociale | NYB Consulting LLC | fournie par le client |
| Forme juridique | Limited Liability Company | fournie par le client |
| État d'immatriculation | Nouveau-Mexique, États-Unis | déduit de l'adresse du siège |
| Siège social | 1210 Mountain Rd PL, Albuquerque, NM 87110 | fournie par le client |
| Juridiction compétente | comté de Bernalillo, Nouveau-Mexique | Albuquerque relève de ce comté |
| Devise de facturation | dollar américain (USD) | cohérent avec l'entité |

Le suffixe « LLC » est ajouté au nom parce que le Nouveau-Mexique l'impose dans la dénomination
d'une société à responsabilité limitée. À confirmer sur le certificat de constitution.

**Volontairement non publiés :** le numéro d'immatriculation, l'EIN, l'agent enregistré et le nom
du gérant. Un EIN publié en clair est un vecteur d'usurpation d'identité d'entreprise, et aucune
de ces mentions n'est exigée pour un site d'entité américaine. Elles s'ajoutent en une ligne si
la banque les réclame.

## Les clauses arrêtées, à faire valider par le client

| Clause | Valeur retenue | Où |
| --- | --- | --- |
| Délai de paiement | 14 jours date de facture | CGV 5.3, prestations |
| Mise en demeure avant suspension | 5 jours ouvrés | CGV 5.4 |
| Frais de retard | 75 USD par facture impayée, **sans intérêts au pourcentage** | CGV 5.4, prestations |
| Préavis de résiliation | 30 jours | CGV 8.2, prestations |
| Report d'une session | 24 heures | CGV 8.5 |
| Durée de l'audit | 10 jours ouvrés | prestations |
| Engagement d'intégration | 3 mois | prestations |
| Droit applicable | Nouveau-Mexique, tribunaux du comté de Bernalillo | CGV 17 |

Les montants des prestations ne sont pas affichés : la page décrit le **modèle** de facturation
(forfait pour l'audit, mensuel pour l'intégration) et renvoie le montant ferme à la proposition
écrite remise sous 24 heures. C'est suffisant pour un dossier bancaire et ça n'engage pas un prix
que le client n'a pas fixé. Pour afficher des montants, il suffit de deux chiffres.

## Les quatre clauses qui protègent vraiment

- **Art. 6, obligation de moyens.** Aucun volume de ventes ni taux de conversion garanti, et les
  témoignages ne valent pas promesse de résultat. La clause la plus importante pour un closer.
- **Art. 13, indépendance des parties.** Empêche un client de requalifier la relation en contrat
  de travail. Risque réel quand on travaille à temps plein pour une seule boîte.
- **Art. 14, responsabilité plafonnée** aux sommes perçues sur 12 mois, dommages indirects exclus
  (perte de chiffre d'affaires, de clientèle).
- **Art. 2, B2B uniquement.** En excluant les consommateurs, tout le bloc droit de la consommation
  saute : rétractation de 14 jours, information précontractuelle.

## Parti pris de conception

Le monde visuel est celui d'un **rapport d'audit** : encre profonde, papier chaud, filets d'un
cheveu, chiffres tabulaires, et un seul rouge qui ne sert qu'à marquer ce qui compte.

- **Typographie :** Newsreader (titres, éditorial) et Archivo (texte, précision). Repli système si
  Google Fonts est bloqué.
- **Un seul mouvement d'arrivée** sur les pages de document : le document s'ouvre. Ensuite rien ne
  bouge tout seul. Le sommaire qui suit la lecture et le filet d'avancée sont des repères de
  lecture, pas des effets : ils réagissent au lecteur.
- **Impression.** Un document contractuel finit imprimé ou en PDF : barre, sommaire et boutons
  disparaissent, le noir remplace le rouge, les articles ne se coupent pas en travers d'une page,
  et l'adresse des liens s'imprime entre parenthèses pour rester vérifiable sur papier.
- **Accessibilité :** lien d'évitement clavier, contrastes tous au-dessus de 4.5:1 (y compris les
  gris secondaires et le rouge sur papier), focus visible partout, cibles tactiles de 44px sur le
  sommaire mobile, `aria-current` sur l'article en cours, ancres décalées sous la barre collante.
- **Sans JavaScript**, tout reste lisible : le sommaire est déplié par défaut dans le HTML, seul
  le repérage de lecture disparaît.
- **Chaque article est citable.** « Art. 14 » se copie et s'envoie : le numéro d'article est un
  lien vers son ancre.

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
