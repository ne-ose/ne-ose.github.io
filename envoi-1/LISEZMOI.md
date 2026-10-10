# Néose — site

## Mettre en ligne sur Netlify
1. Va sur app.netlify.com → ton site → **Deploys**.
2. Glisse-dépose le **dossier `neose-site`** entier dans la zone « Drag and drop your site output folder here ».
3. C'est en ligne. (Si ton site est relié à GitHub : remplace les fichiers du dépôt par ceux-ci et pousse.)

Badge « Powered by Netlify » : Site configuration → Badges → désactiver.

## Ajouter un poème
Ouvre `poemes.js` et ajoute un bloc dans `POEMES` :

```js
{
  serie: "octobre-2025", titre: "Mon titre", date: "2025-10-12",
  syllabes: "Mon ti|tre",       // facultatif : où le grand titre peut passer à la ligne
  vers_accent: "Un vers.",       // facultatif : vers en couleur
  texte: `Premier vers,
deuxième vers.

Nouvelle strophe.`
},
```

Champs facultatifs en plus :
- `image`, `legende`, `lien` : un visuel affiché à côté du poème (la légende devient un lien si `lien` est rempli).
- `originaux` : les images du post d'origine, visibles avec « Voir le post d'origine ».
- Si `texte` est vide, le site affiche directement les images `originaux` (utile pour un poème visuel comme Couronne).

Les images vont dans le dossier `images/`.

Adresse d'un poème : `#octobre-2025/mon-titre`.

## Changer les couleurs
En haut de `poemes.js`, dans `SERIES` : `fond` (panneau) et `accent` (titre, vers coloré, bouton).
Pour un seul poème, ajoute `fond` et `accent` dans son bloc (c'est le cas des poèmes de Novembre 2025, accordés à leur œuvre).

## Clavier
⌘K / Ctrl+K : ouvrir ou fermer la liste des poèmes · ← → : poème précédent / suivant · Échap : fermer.
