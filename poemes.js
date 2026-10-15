// Séries : couleur de fond du panneau (fond) + couleur vive (accent)
window.SERIES = [
  { id: "octobre-2025",  nom: "Octobre 2025",  fond: "#A84610", accent: "#F7B58A" },
  { id: "novembre-2025", nom: "Novembre 2025", fond: "#4A2346", accent: "#C9A9E6" },
  { id: "inktober",      nom: "52",            fond: "#556B2F", accent: "#FF85C8" },
  { id: "tarot",         nom: "Tarot",         fond: "#0B0B0B", accent: "#E6FF00" },
  { id: "autres",        nom: "Autres",        fond: "#1F4A52", accent: "#9FE3D3" }
];

// Un objet par poème.
// - serie : id d'une série ci-dessus
// - titre, date (AAAA-MM-JJ)
// - texte : sauts de ligne = vers, ligne vide = nouvelle strophe.
//           Si texte est vide, le site affiche les images « originaux » à la place.
// - syllabes (facultatif) : où le grand titre peut passer à la ligne, avec "|"  ex. "Mous|ta|che"
// - vers_accent (facultatif) : vers affiché en couleur (copie-le exactement)
// - image, legende, lien (facultatifs) : visuel affiché à côté du poème
// - fond, accent (facultatifs) : couleurs propres à ce poème (sinon celles de la série)
// - originaux (facultatif) : images du post d'origine, visibles via « Voir le post »
// - chapeau (facultatif) : courte introduction affichée au-dessus du poème, plus petite et en italique
// - centre: true (facultatif) : texte centré, comme sur les cartes du Tarot
// - forme: "libre" (facultatif) : garde tous les espaces et lignes vides du texte tels quels,
//   pour les mises en page éclatées ; ~~mot~~ affiche le mot barré.
// Modèle pour ajouter un poème : copie ce bloc (sans les // au début des lignes),
// colle-le juste après « window.POEMES = [ » ci-dessous, puis remplace titre, date et texte.
// Une catégorie n'apparaît sur le site qu'à partir de son premier poème.
//
//  {
//    serie: "tarot", titre: "Titre du jour", date: "2026-10-10", centre: true,
//    vers_accent: "",
//    texte: `Premier vers,
//deuxième vers.
//
//Nouvelle strophe.`
//  },

window.POEMES = [
  {
    serie: "tarot", titre: "Trois de deniers", date: "2026-10-01", centre: true,
    originaux: ["images/tarot/trois-de-deniers-1.webp"],
    vers_accent: "",
    texte: `Eriger l’immatériel,
quand tout ce qu’on crée
ne repose sur rien.

Les profanes le survolent,
font mine de comprendre
ou pire, de s’y intéresser.

Ils s’effaceront,
Mais Elles seront en paix,
gisantes,
dans ma cathédrale.`
  },
  {
    serie: "tarot", titre: "Le monde (envers)", date: "2026-10-02", centre: true,
    originaux: ["images/tarot/le-monde-envers-1.webp"],
    vers_accent: "",
    texte: `Une éclaircie déchire le ciel.
Trop courte.
Ils sentent la chaleur un instant,
mais elle passe.
Une brise ramène la réalité :
le ciel trop gris même pas argenté, trop bas.
Des choses à se dire
mais plus vraiment l’envie.
Ça avait bien commencé,
ça ne finira pas mal.
Ça finira juste,
sans grand bouleversement.`
  },
  {
    serie: "tarot", titre: "Neuf de deniers", date: "2026-10-03", centre: true,
    originaux: ["images/tarot/neuf-de-deniers-1.webp"],
    vers_accent: "",
    texte: `Un dernier regard,
sourire.
Je leur dirais bien :
autosuffisante
parce qu’indifférence.
Un peu facile hein.
Maintenant repos.`
  },
  {
    serie: "tarot", titre: "Reine de bâtons (envers)", date: "2026-10-04", centre: true,
    originaux: ["images/tarot/reine-de-batons-envers-1.webp"],
    vers_accent: "",
    texte: `La matière gonfle, rétrécit,
se déplace,
par endroits cède.
Des volumes tièdes
s’écoulent jusqu’à la marge,
s’enfouissent, naissent encore.
Reviennent.
Ne sont jamais partis.`
  },
  {
    serie: "tarot", titre: "Cavalier d'épées (envers)", date: "2026-10-05", centre: true,
    originaux: ["images/tarot/cavalier-d-epees-envers-1.webp"],
    vers_accent: "",
    texte: `Il lève les yeux,
distingue le cosmos
Le bruit de milliers d’ailes nocturnes,
filant comme une comète.
Migrer.
Trop tard maintenant.
Le sable engloutit le menton.
Il soupire, résigné
une ultime et millième fois.`
  },
  {
    serie: "tarot", titre: "Quatre de coupes (envers)", date: "2026-10-06", centre: true,
    originaux: ["images/tarot/quatre-de-coupes-envers-1.webp"],
    vers_accent: "",
    texte: `On m’a dit d’amputer,
alors je tranche, je tire, je décolle.

Je laisse le vide se faire, grandir.
Oui d’accord, mais jusqu’où ?

En rêvassant des mots se forment,
susurrés par une voix désincarnée.

L’effort est minime et je m’ennuie un peu.
Tant pis, tu ne seras pas mémorable.

Mais tu existes.

J'étais peu inspirée.`
  },
  {
    serie: "tarot", titre: "Sept de deniers (envers)", date: "2026-10-07", centre: true,
    originaux: ["images/tarot/sept-de-deniers-envers-1.webp"],
    vers_accent: "",
    texte: `J'ai palpé mon ventre Il était creux.
J'ai passé la main, le coude,
Je pensais buter sur mes vertèbres, rien.
J'ai continué, jusqu’à faire un tour de moi-même.
Le fond était parsemé d’idées.
Plutôt productive finalement.
Et quelle corvée de chercher les mauvaises,
Il y en avait si peu.`
  },
  {
    serie: "tarot", titre: "Cinq de coupes", date: "2026-10-08", centre: true,
    originaux: ["images/tarot/cinq-de-coupes-1.webp"],
    vers_accent: "",
    texte: `J'ai porté mon amour si haut
qu’il aurait pu frôler les étoiles.
Avec l’expérience, j'aurais mieux fait de l’enterrer.
Mettre de beaux habits noirs,
après tout, ils me vont plutôt bien.
Porter le deuil,
laisser passer.
En retour : des sentiments bon marché`
  },
  {
    serie: "tarot", titre: "La justice", date: "2026-10-09", centre: true,
    originaux: ["images/tarot/la-justice-1.webp"],
    vers_accent: "",
    texte: `Les longs doigts déplacent la terre.
Grattent.
Déracinent une par une les âmes,
de ceux qui sont allongés là.
Les bouches noircies, gonflées de mensonges
qui les ont étouffées.
Elle se redresse,
époussette d’un geste tranquille sa robe,
replace ses cheveux.
Elle collecte avec soin ,
des morceaux, des tourments.
Dépossédés de force,
primitive rétribution.`
  },
  {
    serie: "tarot", titre: "Le diable", date: "2026-10-10", centre: true,
    originaux: ["images/tarot/la-justice-1.webp"],
    vers_accent: "",
    texte: `La joue écrasée contre les barres
Il se démène.
Plus de liens,
il s'en est occupé.
Devant, autre chose
pas sûr, 
et hors de portée.
Prostré dans une cage
En expansion perpétuelle, 
ouverte pourtant.`
  },
  {
    serie: "tarot", titre: "Trois de bâtons (envers)", date: "2026-10-11", centre: true,
    originaux: ["images/tarot/la-justice-1.webp"],
    vers_accent: "",
    texte: `La curiosité lui fit toujours défaut.

Enfant, quand les autres grimpaient haut
pour contempler l'horizon,
il préférait s'asseoir contre le tronc.

Jeune homme,
lorsque les uns rêvaient
d'aventures, impatients.
Il ne cherchait rien, 
ne se trouvait pas non plus.

Il ne fut pas surpris 
quand un jour il apprit,
que son point culminant
avait la taille d'une fourmi.`
  },
  {
    serie: "tarot", titre: "Valet de coupes", date: "2026-10-12", centre: true,
    originaux: ["images/tarot/la-justice-1.webp"],
    vers_accent: "",
    texte: `Plutôt espiègles, ils voguent.
Ils ne nagent pas.

Ceux-là oui :
Trois petits loups
Trois petits loups 
Trois petits loups, loups, loups
Loupiottes, Loupiottes, Loupiottes, 
Ôtes, ôtes. 

Ôtez-vous ces idées raisonnables,
Sujet sensible ?
Ôtez-vous, vous, vous.
Pas besoin de profondeur
pour faire des merveilles. 
Ôtez-vous , oui vous.`
  },
   {
    serie: "tarot", titre: "La tempérance", date: "2026-10-13", centre: true,
    originaux: ["images/tarot/la-justice-1.webp"],
    vers_accent: "",
    texte: `Quand la nuit, la peine, ou l'envie
comblent, charrient les substances.
Frôlent les routes, toutes fausses, 
en torrent. 

Après l'aléa, l'accalmie coupable,
mais rassérénée.
Se préparer, 
avant de se rejeter dans le courant,
et déborder.

Un jour,
sans trop savoir pour qui.
On y croit plus tellement,
L'embouchure : calme et remous.
L'équilibre des deux.
Subir, non.`
  },
  {
    serie: "tarot", titre: "Roi de coupes (envers)", date: "2026-10-15", centre: true,
    originaux: ["images/tarot/la-justice-1.webp"],
    vers_accent: "",
    texte: `Alors qu'on préparait sa Majesté,
On vint poser la couronne sur sa tête. 
Elle lui tomba au milieu du front.
Le lendemain, au niveau du nez, sur l'arête.
Puis au niveau de la bouche, comme une muselière.
A la fin de la semaine, c'était un collier. 
Un bien étrange phénomène.`
  },
  {
    serie: "tarot", titre: "Valet de bâtons", date: "2026-10-14", centre: true,
    originaux: ["images/tarot/la-justice-1.webp"],
    vers_accent: "",
    texte: `Explorer les possibilités.
Si je les jette dans le désert,
deviendront-elles rose des sables,
ou une oasis amère ?`
  },
  {
    serie: "octobre-2025", titre: "Moustache", syllabes: "Mous|tache", fond: "#90ABCB", accent: "#562F32", date: "2025-10-01",
    originaux: ["images/octobre-2025/moustache-1.webp"],
    vers_accent: "",
    texte: `Drue ou cocasse,
Elle parfait ou accable.
Selon si les traits sont ingrats,
Ou dignes de portraits de Rois.`
  },
  {
    serie: "octobre-2025", titre: "Tisser", syllabes: "Tis|ser", fond: "#C7C6B1", accent: "#454F5F", date: "2025-10-02",
    originaux: ["images/octobre-2025/tisser-1.webp"],
    vers_accent: "",
    texte: `Soie crystalline
Fragiles cordages
Nasse assassine
Vainc démêlage

Tisseuse funambule
Voire arachnide
Douce bascule
Destin rigide`
  },
  {
    serie: "octobre-2025", titre: "Couronne", syllabes: "Cou|ronne", fond: "#52325A", accent: "#CDA45E", date: "2025-10-03",
    originaux: ["couronne.webp"],
    vers_accent: "",
    texte: ``
  },
  {
    serie: "octobre-2025", titre: "Boueux", fond: "#35321A", accent: "#AC9D5A", date: "2025-10-04",
    originaux: ["images/octobre-2025/boueux-1.webp"],
    vers_accent: "",
    texte: `Torrent de boue, des corps ensevelis,
la fange s'insinue, coule, asphyxie.
Amas informe, les membres se mêlent
margouillis immonde, antipersonnel.

Une fois passée la vague il ne reste qu'une tranchée
Dont émerge disgracieux des morceaux d'humanité

De la tourbe noire renaît la vie,
Sous une forme ingrate, rabougrie.
Les aléas, bien souvent sont cruels
Mais dans la bourbe, pousse une immortelle.`
  },
  {
    serie: "octobre-2025", titre: "Cerf", fond: "#2F3D4F", accent: "#DC9579", date: "2025-10-05",
    originaux: ["images/octobre-2025/cerf-1.webp"],
    vers_accent: "",
    texte: `C'est un écrin verdoyant baigné de lumière
Où l'herbe ondule sous la caresse du vent
Les mouvements feutrés des êtres sur la terre,
s'harmonisent avec ceux des airs et leurs chants

Un jeune cerf, fort, au pelage mordoré,
les bois posés sur la mousse comme un trésor,
Dort, il est allongé sous l'azur dans l'ivraie,
Fier sur sa couche, le soleil tend ses rets d'or.

La tête dans les fleurs, il dort Paisiblement
En Un silence saint pour toujours sommeillant :
nature, serre le chaudement : il a froid.

Les parfums ne font pas frissonner son museau :
Il dort dans le soleil, ses beaux yeux sont fermés,
Serein. Il a deux trous rouges sur le flan droit.`
  },
  {
    serie: "octobre-2025", titre: "Percer", syllabes: "Per|cer", fond: "#48162E", accent: "#CD7771", date: "2025-10-06",
    originaux: ["images/octobre-2025/percer-1.webp"],
    vers_accent: "",
    texte: `Percevront ils tous mes préceptes ?
Respecteront ils ma décision ?
Perceront ils tous mes secrets ?
Censureront ils ma perception ?
Toutes ces questions ont-elles du sens ?
Imperceptiblement, cela me transperce :
c'est seulement ma perspective,
respectueusement. Non sens.`
  },
  {
    serie: "octobre-2025", titre: "Étoile de mer", fond: "#46DDCA", accent: "#2E5644", date: "2025-10-07",
    originaux: ["images/octobre-2025/etoile-de-mer-1.webp"],
    vers_accent: "",
    texte: `Ses bras délicat enserrent la roche.
Abris opportun,
Car la brise marine la décroche

Sur les bancs sous marins elle repose,
En astre des fonds.
Offensez la, elle plonge en néose.

Ses reflets colorent la ligne d'eau.
Le ciel inversé,
d'étoiles et Calypso.`
  },
  {
    serie: "octobre-2025", titre: "Imprudence", syllabes: "Im|pru|dence", fond: "#9E9C98", accent: "#451F4A", date: "2025-10-08",
    originaux: ["images/octobre-2025/imprudence-1.webp"],
    vers_accent: "",
    texte: `Ce mot ne m'inspire pas
Pourquoi ?
Car je suis prudente moi.
Vraiment ?
Regarde : je compte les
syllabes
Non mais tu as triché là...
Comment ?
L'imprudence n'est pas mauvaise en soi
Je peux écrire sans compter mes 10 doigts ?
Oui, juste pour libérer les mots, les
laisser flotter, vivre, exister, sans chiffrer,
mais je vais m'arrêter là, ça commence
à être longuet.
Je te trouve bien prudente,
D'un coup...`
  },
  {
    serie: "octobre-2025", titre: "Lourd", fond: "#BA0505", accent: "#FFC9E3", date: "2025-10-09",
    originaux: ["images/octobre-2025/lourd-1.webp", "images/octobre-2025/lourd-2.webp"],
    vers_accent: "",
    chapeau: `D'un mot - lourd - sont nés
4 haïkus, pe(n)sés comme des saisons
俳句`,
    texte: `Les feuilles moirées
annoncent l'automne le
merle perd ses plumes

Matin glacé où
le corps emmitouflé se
lève au chant du coq

Les champs reverdissent
le crépuscule s'attarde
l'être est plus léger

Les peaux se réchauffent,
du vin, des éclats de rire
le cœur est moins lourd`
  },
  {
    serie: "octobre-2025", titre: "Balayer", syllabes: "Ba|layer", fond: "#C59FBC", accent: "#34395F", date: "2025-10-10",
    originaux: ["images/octobre-2025/balayer-1.webp"],
    vers_accent: "",
    texte: `Avoir le temps pour observer,
Refaire les années, les siècles.

Passer son temps à contempler,
se souvenir de ce qu'est hier.

Prendre le temps et admirer,
Rêver des futurs, se tromper.

Ouvrir les yeux, les refermer.
Balayer l'horizon: le ciel,
Pour ne pas oublier ce jour.`
  },
  {
    serie: "octobre-2025", titre: "Piqûre", syllabes: "Pi|qûre", fond: "#FCFBAC", accent: "#4D4847", date: "2025-10-11",
    originaux: ["images/octobre-2025/piqure-1.webp"],
    vers_accent: "",
    texte: `Les gouttes cramoisies parcourent les sillons,
Les bourreaux assistent à la scène impavides.
La peau est livide, exsangue, s'en est morbide,
Elle est rendue bleue par leurs viles ponctions.

Les bacilles sont injectées par millions,
La chair gâtée par des amibes biocides.
Vive douleur qui pousserait au suicide
Une armée virale, Une vraie invasion.

Lieu sinistre, rarement très hygiénique
On le connait aussi sous le nom de clinique.
Pourquoi donc une telle persécution ?

Subie ; surtout rêvée ; par un paranoïaque
Simple piqûre, appelée vaccination,
Pour un patient un brin hypocondriaque.`
  },
  {
    serie: "octobre-2025", titre: "Déchiqueté", syllabes: "Dé|chi|que|té", fond: "#420A14", accent: "#BFA6C2", date: "2025-10-12",
    forme: "libre",
    originaux: ["images/octobre-2025/dechiquete-1.webp"],
    vers_accent: "",
    texte: `Éparpillé
Multiples brisures
Puzzle impossible à assembler

Tro uée
Histoire inachevée
    Le héro est      l'antagoniste

~~Obstrué.e~~
      La lumière   traverse   à peine
  L'om bre   re c ouvri ra   tout



                   perdu                                 montées

  Sur un chemin im  p r   at  ic  a  ble

Fait   de                   et     de

           descentes`
  },
  {
    serie: "octobre-2025", titre: "Gorgée", syllabes: "Gor|gée", fond: "#91CACB", accent: "#8F281E", date: "2025-10-13",
    originaux: ["images/octobre-2025/gorgee-1.webp"],
    vers_accent: "",
    texte: `La coupe est pleine.
Pleine de joie, de moments, de rire.
Rire, aimer, en profiter,
Profiter de la vie, recommencer.

Recommencer, se lâcher,
Lâcher, lentement glisser.
Glisser, ne plus pouvoir se tenir,
Tenir encore un peu, s'effondrer

La coupe est pleine.
Pleine d'absence, de regrets.
Regrets pour soi-même,
Même si rien n'a changé

Changé, pour ne pas dire effacé,
Effacé, ne subsiste que le mal.
Mal sous la peau et dans la tête
Tête la première vers l'échafaud.`
  },
  {
    serie: "octobre-2025", titre: "Tronc", fond: "#C0C2E1", accent: "#4D4F64", date: "2025-10-14",
    originaux: ["images/octobre-2025/tronc-1.webp"],
    vers_accent: "",
    texte: `Arbre mort et creux
offre à tous ces petits êtres
un abri nouveau`
  },
  {
    serie: "octobre-2025", titre: "Irrégulier", syllabes: "Ir|ré|gu|lier", fond: "#17083D", accent: "#6D884D", date: "2025-10-15",
    originaux: ["images/octobre-2025/irregulier-1.webp"],
    vers_accent: "",
    texte: `Cycle familier depuis la nuit des temps
La vie devance la mort,
Qui appose son sceau dans un silence tranquille

Naître et Mourir.

Dominer sa nature, se redresser, échouer.
Exiger un sens une vérité,
Même si elle n'est pas toujours bonne à dire.

Promettre, parfois décevoir.

Exister,
Cultiver son âme
Se transformer, en une nouvelle version de soi

Etre. Puis devenir.`
  },
  {
    serie: "octobre-2025", titre: "Gaffe", fond: "#341043", accent: "#E442CA", date: "2025-10-16",
    originaux: ["images/octobre-2025/gaffe-1.webp"],
    vers_accent: "",
    texte: `Si on pouvait réparer ses erreurs,
Je remonterais le temps,
Je changerais de trottoir,
De rue, d'endroit,
Pour qu'on ne se croise pas.

Si je pouvais remonter le temps,
Je reprendrais cette strophe,
Celle juste avant,
Oui la.
Celle où je parle de toi.
Tu ne devrais pas être là.

Quand je remonterais le temps
J'effacerais tout ça,
Peut être retournerais-je
dans cette rue, au même endroit.
Mais non. Je ne crois pas.`
  },
  {
    serie: "octobre-2025", titre: "Orné", syllabes: "Or|né", fond: "#F2FFD9", accent: "#2A6A1D", date: "2025-10-17",
    originaux: ["images/octobre-2025/orne-1.webp"],
    vers_accent: "",
    texte: `Regarder vers l'intérieur, chercher la beauté.
Etre curieux des choses infiniment petites,
formidablement vastes.

Cultiver son jardin en secret,
récolter les fruits de son imagination.
Se faire le don de l'attention.

Récréer au-dedans,
le mouvement des astres dans l'éther,
L'embrasement de l'aurore
et l'ombre de la fin du jour

Ne pas sexposer à l'opinion des autres,
rester sur son chemin, respecter son heure,
Avancer, la tête ornée
de ses propres pensées.`
  },
  {
    serie: "octobre-2025", titre: "Transaction", syllabes: "Tran|sac|tion", fond: "#872519", accent: "#E0A7BD", date: "2025-10-18",
    originaux: ["images/octobre-2025/transaction-1.webp"],
    vers_accent: "",
    texte: `Certains prennent tout, ne donnent rien.
Mais surement, par un jour banal,
Leurs yeux se voileront et le temps
viendra pour eux de rendre leur âme.

Ceux qui se seront gavés de faux.
Sans pensées aucunes pour les autres;
Repus, le ventre plein de mensonges;
Sans jamais avoir tendu la main,
Verront leur cœur mesuré, pesé,

Il sera lourd comme du plomb.`
  },
  {
    serie: "octobre-2025", titre: "Arctique", syllabes: "Arc|tique", fond: "#4667A7", accent: "#F3F5F9", date: "2025-10-19",
    originaux: ["images/octobre-2025/arctique-1.webp"],
    vers_accent: "",
    texte: `Vaste étendue
d'albâtre aveuglant.
Baignée d'une lumière
qui ne vacille jamais,
Bascule dans un
crépuscule permanent.

Chiens et loups hurlent
sous le soleil de minuit.
Les nuits glaciales
sombrent dans l'insomnie.`
  },
  {
    serie: "octobre-2025", titre: "Adversaires", syllabes: "Ad|ver|saires", fond: "#83BFAD", accent: "#3D4A1B", date: "2025-10-20",
    originaux: ["images/octobre-2025/adversaires-1.webp"],
    vers_accent: "",
    texte: `On pense qu'en les aimant
l'amour revient de droit.
Une fois le dos tourné,
les langues se délient, bifides.
Déversant leur fiel, venin caustique.
Les reptiles se reconnaissent,
se mêlent dans les coins dérobés,
lovés parfois en plein jour.
L'échine finit tordue, courbée
Sous le poids des adversaires.
Ennemis, que l'on a aimé.

On découvre qu'en s'aimant
L'amour vient de soi.
L'allure se redresse,
le regard porte plus loin, clair
Empli de conviction, de lumière.
Le feu intérieur s'attise,
embrase chaque fragment d'atome
perdu autrefois dans le noir.
L'âme s'allège, se libère
délestée de sa haine.
Ego, allié intime que l'on aime.`
  },
  {
    serie: "octobre-2025", titre: "Explosion", syllabes: "Ex|plo|sion", fond: "#130D4F", accent: "#EE3978", date: "2025-10-21",
    originaux: ["images/octobre-2025/explosion-1.webp"],
    vers_accent: "",
    texte: `Milliards de synapses,
infinies connexions,
myriades de pensées
Dans une boite scellée.

Connexions sclérosées,
circuits débranchés,
le signal se perd.
Transmission terminée.`
  },
  {
    serie: "octobre-2025", titre: "Bouton", syllabes: "Bou|ton", fond: "#000000", accent: "#D2DEE7", date: "2025-10-22",
    originaux: ["images/octobre-2025/bouton-1.webp"],
    vers_accent: "",
    texte: `Je fixe le plafond.
Rien.

Je me tourne d'un coté, de l'autre.
Rien.

A force de la scruter
l'obscurité déferle en lames
de fond, les yeux grands ouverts.

Néant distordu.

Le bruit brun ne suffit plus,
Pas plus que celui des vagues,
des pâles ou de la pluie.

Se retourner.
Rien.

Compter à rebours, les moutons,
pour personne.

S'extraire, s'abreuver, s'aliter
Rien.

Renouveler.
Toujours rien.

Une dragée - sombrer.
On/Off.`
  },
  {
    serie: "octobre-2025", titre: "Luciole", syllabes: "Lu|ciole", fond: "#A84610", accent: "#EDE0D9", date: "2025-10-23",
    originaux: ["images/octobre-2025/luciole-1.webp", "images/octobre-2025/luciole-2.webp", "images/octobre-2025/luciole-3.webp"],
    vers_accent: "",
    texte: `Le vent s'est levé,
brassant avec lui un air chaud
qui soulève les nappes
et fait ondoyer les tissus.

Les verres tremblent, puis se renversent,
laissant le vin; qui a déjà maintes fois coulé;
sépandre sur la table,
comme si des fantômes
avaient pris place autour d'elle.

Le liquide imprègne les fils tissés
d'un rouge profond,
une couleur si pleine, indélébile,
qu'elle marquera les fibres
pour le restant des saisons.

Banquet spectral ou
scène de crime
d'allègre félicité.

Les réminiscences du jour forment
un halo lointain sur l'horizon,
dont le timide chatoiement
se perçoit à travers
le balancement des arbres
et le oruissement des feuilles.

Les lucioles, posées sur l'écorce de liège,
accompagnent la lumière mourante
de la fin du jour,
faisant miroiter, par de furtifs éclats,
de minuscules lanternes vertes.

La nuit s'installe,
baignée d'une marée luminescente,
et scelle pour toujours
cette journée d'été.

Le jardin tient lieu de scène
au concert des cigales,
jouant de leur cymbales miniatures,
qui, si on y prête vraiment l'oreille,
rappelle les remous nerveux d'un torrent.

Dans la bâtisse aux murs de pierre,
chauffés par un soleil de plomb,
des éclats de voix séchappent
des fenêtres grandes ouvertes.

Les bourrasques tièdes étouffent
les échos des secrets chuchotés,
avant de les emporter dans le vent.`
  },
  {
    serie: "octobre-2025", titre: "Turbulent", syllabes: "Tur|bu|lent", fond: "#736918", accent: "#D9EAF3", date: "2025-10-24",
    originaux: ["images/octobre-2025/turbulent-1.webp"],
    vers_accent: "",
    texte: `Fauteurs de troubles faussement
inoffensifs,
le ressentiment s'installe en silence,
sans querelle,
encouragé par une rancœur qu'ils ne
savent masquer.

Monstre aux yeux verts,
usurpateur,
pilleur de temps,
faiseur de brume,
amassés en essaim.

Les mirages s'évaporent, la foule se
dissipe,
les agitateurs sont tenus en respect,
écrasés par lui,
car ils en sont dépourvus.

Et moi, je retrouve mon calme et ma
tranquillité.`
  },
  {
    serie: "octobre-2025", titre: "Enfer", syllabes: "En|fer", fond: "#6DABB8", accent: "#5C250D", date: "2025-10-25",
    originaux: ["images/octobre-2025/enfer-1.webp"],
    vers_accent: "",
    texte: `Briser sa tasse préférée.
Fracturer ses extrémités.
Arracher son cœur.
Détester son reflet.

Rester figée,

Longtemps.
Puis,

La réparer, Kintsugi.
Le café a un goût d'or.

Ressouder les os.
Avoir une main de fer.

Le raccrocher - s'accrocher.

L'admirer - amour-propre.
Volonté d'acier.`
  },
  {
    serie: "octobre-2025", titre: "Déroutant", syllabes: "Dé|rou|tant", fond: "#A7B5B5", accent: "#5A3668", date: "2025-10-26",
    originaux: ["images/octobre-2025/deroutant-1.webp"],
    vers_accent: "",
    texte: `Il est surprenant de voir que ce qui nous semblait
si compliqué apparait un jour comme d'une
simplicité crasse.
Cela vient du fait que, lorsqu'on dirige la lumière
trop longtemps sur un même point, on finit par
ne voir que lui et tout alentour semble ténèbres.

Éblouis, habitués à cette focale, nous mettons du
temps à retrouver la vue.

Gardez votre lumière pour vous : éclairez
l'intérieur de sorte que votre chair, vos os,
vos muscles la réfléchissent tout autour, et la
redirigent vers le dehors.

Mais prenez garde, car les papillons de nuit,
privés des éclats chatoyants de leur congéneres
diurnes, seront friands de votre phare intérieur.
ils s'amasseront parfois jusqu'à en recouvrir le
verre, vous privant, vous aussi, du jour.

Alors prenez patience, et, murés dans cette
tour ensevelie sous les ailes grises, contemplez
votre feu, alimentez le, protégez le, jusqu'à ce
que leurs voiles ternes s'effritent et vous laisse à
nouveau contempler le levant.`
  },
  {
    serie: "octobre-2025", titre: "Oignon", syllabes: "Oi|gnon", fond: "#4D1616", accent: "#FA4E99", date: "2025-10-27",
    originaux: ["images/octobre-2025/oignon-1.webp"],
    vers_accent: "",
    texte: `Et si on retirait les couches, qu'est ce
qu'on découvrirait ?

Sous les sourires et les boucles , 
les premières marques du temps
sous la peau des cellules zélées, 
un peu trop, parfois.
D'autres en sénescenc,
qu'on préserve dans le froid.

Sous les strates plus confidentielles,
des filons de confiance se découvrent
petit à petit, sexcavent à l'extérieur de soi.
Le doute au fond toujours, en nappe
souterraine, manteau encombrant que
l'on porte malgré soi.`
  },
  {
    serie: "octobre-2025", titre: "Squelettique", syllabes: "Sque|let|tique", fond: "#082E26", accent: "#A6AB95", date: "2025-10-28",
    originaux: ["images/octobre-2025/squelettique-1.webp"],
    vers_accent: "",
    texte: `Le visage est émacié, le derme blême
tendu sur les mâchoires,
comme la peau d'un tambour qui ne jouerait
que des chants funèbres.
Les quelques dents restantes grincent entre
elles, faisant vibrer les os.

La colonne ; antenne tordue ; qui ne capte
plus que des signaux fantômes,
peine à soutenir le crâne ; elle oscille
dangereusement d'un coté puis de l'autre,
menaçant de se briser.

Les épines dorsales, apparentes sous
l'habit, semblent écorcher les fibres,
prêtes à transpercer le tissu.
L'allure est si lente, qu'il parait parfois
immobile; les pas senfoncent dans la terre
dans un écho poisseux.

Ni vivant, mais pas tout à fait Mort,
forcé de quitter sa dernière demeure,
il avance, entouré d'une armée revenants.`
  },
  {
    serie: "octobre-2025", titre: "Leçon", syllabes: "Le|çon", fond: "#220853", accent: "#9488C6", date: "2025-10-29",
    originaux: ["images/octobre-2025/lecon-1.webp"],
    vers_accent: "",
    texte: `Ainsi les jours ont défilé
De vendémiaire à brumaire
Le vent tiède lentement cède
sa place à un ciel lourd, chargé
de nuages, nuées gris perle

Sont nés quelques vers, strophes, lignes
parfois comptés, souvent très libres.
Protéger l'inspiration
malgré le rythme et la contrainte
n'est pas permis à tout le monde

Je ne fais pas partie de ceux
qui ne savent trouver les mots.
Privés d'imagination,
ruminant des pensées stériles,
n'engendrant que des pages blanches.

Seulement à l'orée encore,
d'une entreprise bien plus vaste.
Même imparfaite elle respire
et continuera d'exister
Voila la leçon que j'ai apprise.`
  },
  {
    serie: "octobre-2025", titre: "Vide", fond: "#27450D", accent: "#F68E4D", date: "2025-10-30",
    originaux: ["images/octobre-2025/vide-1.webp"],
    vers_accent: "",
    texte: `Inspirer
Laisser le vide se remplir
Le rien est parfois tout
Expirer`
  },
  {
    serie: "octobre-2025", titre: "Récompense", syllabes: "Ré|com|pense", fond: "#4A809E", accent: "#05090B", date: "2025-10-31",
    originaux: ["images/octobre-2025/recompense-1.webp"],
    vers_accent: "",
    texte: `Avant de franchir le seuil plus sombre,
je regarde ce qui a été offert.

À l'aube,
les gouttes prisonnières d'étoiles,
le brame rauque du cerf,
les plumes en bas des nids.

Au soir,
les éclats de rire qui s'élèvent,
le vent chaud sur les feuilles,
les nuits figées, glaciales.

Sur elle,
la résilience tranquille,
la discipline salvatrice,
la plénitude d'avoir créé.

La vraie récompense n'est pas qu'ils aient été lus,
mais qu'il m'ait été donné de les écrire.`
  },
  {
    serie: "novembre-2025", titre: "Œillet, lys, lys, rose", date: "2025-11-06",
    fond: "#203136", accent: "#BFA1A3",
    image: "images/novembre-2025/oeillet-lys-lys-rose-visuel.webp", legende: "John Singer Sargent, Carnation, Lily, Lily, Rose", lien: "https://en.wikipedia.org/wiki/Carnation,_Lily,_Lily,_Rose",
    originaux: ["images/novembre-2025/oeillet-lys-lys-rose-1.webp"],
    vers_accent: "",
    texte: `Les touffes d'herbes fraîches mouillent le bas
des robes.
L'air s'est rafraîchi à la fuite du jour.

Les petites mains des fées s’affairent ;
minutieuses ; pour allumer les cœurs des cages
de coton.

Le papier diaphane laisse filtrer la flamme
dont le halo chatoie sur les pétales.

L’'odeur des fleurs emplit le jardin : œillets, lys,
lys, roses.
Les étoiles ne sont plus seules.`
  },
  {
    serie: "novembre-2025", titre: "In paradisum", syllabes: "In pa|ra|di|sum", date: "2025-11-08",
    fond: "#312B23", accent: "#B7B2AC",
    image: "images/novembre-2025/in-paradisum-visuel.webp", legende: "François Marius Granet, Effet de lumière dans les ruines", lien: "https://fr.wikipedia.org/wiki/Fran%C3%A7ois-Marius_Granet",
    originaux: ["images/novembre-2025/in-paradisum-1.webp"],
    vers_accent: "",
    texte: `Ses pieds nus ne sentent plus le froid sur la
dalle glacée.

Les doigts effleurent les aspérités familières
des murs scellés.

Immobile, le front posé sur les pierres, elle
observe l’ailleurs.

Une lumière duelle, écrasée sous un ciel lourd,
lumière d'orage.

Elle détourne le regard,
les yeux apaisés par de son refuge,
sa prison, celle qu’elle a choisie.

Morte au monde, exemptée de funérailles.

Recluse.`
  },
  {
    serie: "novembre-2025", titre: "Path Work", date: "2025-11-11",
    fond: "#D58776", accent: "#1C171B",
    image: "images/novembre-2025/path-work-visuel.webp", legende: "Tracey Emin", lien: "https://fr.wikipedia.org/wiki/Tracey_Emin",
    originaux: ["images/novembre-2025/path-work-1.webp"],
    vers_accent: "",
    texte: `Comment trouver sa voie
quand toutes celles avant toi se sont égarées.
PERDUES

Comment trouver sa voix
quand toutes celles avant toi se sont tues.
MUETTES

How to find your way
when all those before you were lost.
GONE

How to find your voice
when all before you went silent.
MUTE`
  },
  {
    serie: "novembre-2025", titre: "Les roses d'Héliogabale", syllabes: "Les roses d'Hé|lio|ga|bale", date: "2025-11-12",
    fond: "#402D1F", accent: "#D3AD95",
    image: "images/novembre-2025/les-roses-d-heliogabale-visuel.webp", legende: "Lawrence Alma-Tadema, Les Roses d'Héliogabale", lien: "https://en.wikipedia.org/wiki/The_Roses_of_Heliogabalus",
    originaux: ["images/novembre-2025/les-roses-d-heliogabale-1.webp"],
    vers_accent: "",
    texte: `Les soies des corolles tapissent la gorge,
recouvrent le nez, obstruent les orifices.

Dans les oreilles, les rires des convives ;
étouffés; semblent si lointains.

Morts béats.

Asphyxiés sous l'œil amusé de leur hôte.
Scène macabre, saisissante de beauté,
le printemps sur un charnier.`
  },
  {
    serie: "novembre-2025", titre: "Coquelicots", syllabes: "Co|que|li|cots", date: "2025-11-12",
    fond: "#364515", accent: "#C7BE99",
    image: "images/novembre-2025/coquelicots-visuel.webp", legende: "Wojciech Weiss, Coquelicots (1902–1903), Musée national de Cracovie", lien: "https://fr.wikipedia.org/wiki/Wojciech_Weiss",
    originaux: ["images/novembre-2025/coquelicots-1.webp", "images/novembre-2025/coquelicots-2.webp"],
    vers_accent: "",
    texte: `Le temps s'arrête, 
le souffle ralenti jusqu’à se couper.
Le sang glacé pique la peau de millions
d’échardes, la fait frissonner.
Déguisé parmi les vivants.
L'œil figé discerne, dans son angle mort, les
contours d'une forme.

Floue, rompues de spasmes, il porte dans sa
chair la désolation du monde.
Figure disgraciée, immobile, pétrifiée par la
souffrance.

La vie reprend.
L'air revient, circule dans les alvéoles, 
gonfle les poumons.
Le liquide chaud parcours les veines et les
artères, rosit les membres.
Evaporée dans le mouvement de la foule.
L’enveloppe châtiée se dissout, évanouie
comme un rêve qu’on supplie d'oublier.

Mais parfois,
quand le soleil porte haut dans ciel,
quand la brise effleure la peau
et qu’on détourne le regard,
apparaît, à la frontière de la perception,
une silhouette,
ombre meurtrie,
et elle nous regarde.`
  },
  {
    serie: "novembre-2025", titre: "Trémières", syllabes: "Tré|mières", date: "2025-11-17",
    fond: "#727550", accent: "#F9F6EF",
    image: "images/novembre-2025/rose-tremiere-visuel.webp", legende: "Berthe Morisot, Rose trémière", lien: "https://fr.wikipedia.org/wiki/Berthe_Morisot",
    originaux: ["images/novembre-2025/rose-tremiere-1.webp"],
    vers_accent: "",
    texte: `labyrinthe vert
des roses au port altier
un thé refroidi`
  },
  {
    serie: "novembre-2025", titre: "L'étreinte", date: "2025-11-21",
    fond: "#6B5128", accent: "#D3CCC7",
    image: "images/novembre-2025/l-etreinte-visuel.webp", legende: "Egon Schiele, L'Étreinte (1917)", lien: "https://fr.wikipedia.org/wiki/L%27%C3%89treinte_(couple_d%27amoureux_II)",
    originaux: ["images/novembre-2025/l-etreinte-1.webp", "images/novembre-2025/l-etreinte-2.webp"],
    vers_accent: "",
    texte: `Les âmes se serrent, les corps s'écrasent.
Quatre bras, quatre jambes,
Si proches qu'on peine à les dissocier.
Chacun est unique,
pourtant tout leur être tend vers l'autre,
prêt à s'y dissoudre.

Embarrassés par le désir,
les regards se fuient,
les visages se détournent,
incapables de se faire face.
Mais sous les draps, des voix étouffées
avouent ce qu'ils ne peuvent plus taire.

Les cœurs tremblent,
les doigts s'enfoncent, s'emmêlent
dans des gestes imprécis, soumis à l'urgence.
Les mains pressées agrippent les chairs,
creusant la peau de leurs caresses
brutales.

Et puis l'union
Profonde dans l'attente,
brouille les contours,
confond les formes.

Âmes sœurs,
Ames seules,
Si Un`
  },
  {
    serie: "novembre-2025", titre: "La mort et la jeune fille", date: "2025-11-22",
    fond: "#5E4935", accent: "#D8D0C2",
    image: "images/novembre-2025/la-mort-et-la-jeune-fille-visuel.webp", legende: "Egon Schiele, La Mort et la Jeune Fille", lien: "https://en.wikipedia.org/wiki/Death_and_the_Maiden_(Schiele)",
    originaux: ["images/novembre-2025/la-mort-et-la-jeune-fille-1.webp"],
    vers_accent: "",
    texte: `Entre, assieds-toi.
Je t'attendais.

Je n'abandonne pas.
Seulement, on ne m'a jamais cherchée.
Il est plus doux de partir avec toi
que de rester ici parmi eux.

Maintenant je choisis.
Ne sois pas désolée.
Je n'ai pas peur.

Je savais que tu viendrais,
Comme une mère qui borde son enfant.
Tes lèvres se posent sur mon front :
Elles ne sont pas glacées.

Je souris.
C'est moi qui le suis, maintenant.`
  },
  {
    serie: "inktober", titre: "Sunset", syllabes: "Sun|set", date: "2025-12-29",
    originaux: ["images/52/sunset-1.webp"],
    vers_accent: "",
    texte: `Les ombres s'étirent en chemins éphémères
sur le bitume.
La ligne floue prépare un nouvel horizon,
identique.
Et pourtant.

Des routes il y en aura des milliers encore.
Jamais les mêmes.
Et pourtant.`
  },
  {
    serie: "inktober", titre: "Glisser / Glide", syllabes: "Glis|ser / Glide", date: "2026-01-15",
    originaux: ["images/52/glisser-glide-1.webp", "images/52/glisser-glide-2.webp"],
    vers_accent: "",
    texte: `Des mouvements lents, dénués d’inclination.
La descente violente, abrupte dans ses
penchants.
Craindre l'aval, l'espérer, même si décadent.
Glisser sur toutes ses faces, préférer le versant.
Remonter la pente en dérapant.
Perdre le Nord,
tout son sens,
l'orientation.
Désirer, glisser.

Slow movements, stripped of inclination.
The violent descent, abrupt in its leanings.
Fear the abyss, hope for it, even if decadent.
Glide over every surface, favor the slope.
Climb back up while skidding.
Lose the North,
all meaning,
direction.
Desire, glide.`
  },
  {
    serie: "inktober", titre: "Chuchotement", syllabes: "Chu|cho|te|ment", date: "2026-01-17",
    originaux: ["images/52/chuchotement-1.webp"],
    vers_accent: "",
    texte: `En silence, les liens se nouent.
Dans le calme, les brins s’enlacent
et plus jamais ne se desserrent.
Dans le vacarme,
les liaisons sonores
portent très haut,
retombent bien bas.
Recouvertes par le bruit.
Abrutissantes.
Je n'ai besoin,
que d’un chuchotement,
pour me souvenir de toi.`
  },
  {
    serie: "inktober", titre: "Confortable", syllabes: "Confor|table", date: "2026-01-22",
    originaux: ["images/52/confortable-1.webp"],
    vers_accent: "",
    texte: `Ça y ressemble vaguement.
Familier, confortable.

Mais quand on s'approche,
tout se défait.

Les chemins connus,
me sont étrangers.

Accepter de faire des détours
pour ne plus s’y perdre.`
  },
  {
    serie: "inktober", titre: "Chair", date: "2026-01-23",
    originaux: ["images/52/chair-1.webp"],
    vers_accent: "",
    texte: `Arrachés au ventre,
des siècles avant leur naissance.
Les cordons emmêlés,
séparés par la force.
Deux faces défigurées
dérivent dans le néant infini.
Glacées.

Ils s’y sentent bien,
Désincarnés.
Dans la matrice silencieuse,
personne ne les entend crier.
Ils sont muets.
Volontairement puis non,
mutilés.`
  },
  {
    serie: "inktober", titre: "Craquement", syllabes: "Cra|que|ment", date: "2026-01-30",
    originaux: ["images/52/craquement-1.webp"],
    vers_accent: "",
    texte: `Le parquet délabré
recouvert de poussière,
marquée par une longue ligne
continue.
Quelqu'un est passé là,
trainant derrière lui quelque chose
de lourd.

La ligne s'efface,
disparait sous les cendres.
A l'étage le silence.
Ce qui est monté ne redescendra plus.`
  },
  {
    serie: "inktober", titre: "Grand-mère", date: "2026-02-09",
    originaux: ["images/52/grand-mere-1.webp"],
    vers_accent: "",
    texte: `Des pas à l'étage.
Un troupeau d'éléphants se déplace,
miniatures.
L'énergie, rare, se recharge au contact des
petites mains et des grosses bêtises.

Non.

Dans une autre vie peut être.
Pas la mienne.

Je veux disparaître et être oubliée.
Ne pas devenir cette silhouette sombre
sur des vieilles photos,
anonyme.`
  },
  {
    serie: "inktober", titre: "Piégée", syllabes: "Pié|gée", date: "2026-02-13",
    originaux: ["images/52/piegee-1.webp"],
    vers_accent: "",
    texte: `Proche d'un inconnu, paire mal assortie.
Dénué de limites, condamné à l'informe.
Peu importe le voyage ou la destination.
Tous les paysages se ressemblent quand
on couvre ses yeux.

Disloqués dans la tempête, ils retombent.
Réduits au néant, à dans une cage
minuscule.
Piégés dans un poing fermé : la taille de
mon cœur.`
  },
  {
    serie: "inktober", titre: "Prétendre", syllabes: "Pré|tendre", date: "2026-02-20",
    originaux: ["images/52/pretendre-1.webp"],
    vers_accent: "",
    texte: `Des yeux fermés,
se détachent les membres.
Tout est clos.
Juste un point,
dérive
sans accroche,
pourtant bien à terre.
Rattrapé par le fond,

en pleine chute.`
  },
  {
    serie: "inktober", titre: "Cheval", syllabes: "Che|val", date: "2026-03-02",
    originaux: ["images/52/cheval-1.webp"],
    vers_accent: "",
    texte: `Une couleur crème
sur ses flancs, calme il pâture
dans sa prairie verte`
  },
  {
    serie: "inktober", titre: "Lever", syllabes: "Le|ver", date: "2026-03-13",
    originaux: ["images/52/lever-1.webp"],
    vers_accent: "",
    texte: `Dans la fosse, j'étends mes bras.
Du puis sans fond,
se lève une petite main.
L'emprisonner dans une cage de doigts,
l’extraire de la boue.
Ou descendre avec elle.`
  },
  {
    serie: "inktober", titre: "Floraison", syllabes: "Flo|rai|son", date: "2026-03-18",
    originaux: ["images/52/floraison-1.webp"],
    vers_accent: "",
    texte: `Plus de jour.
La nuit s'attarde.
Le crépuscule permanent
entre chiens.

Le froid préserve
les extrémités gelées,
incapables de renaitre.

Le sang afflue.
Le corps disparait.

Le soleil m'a trahi.`
  },
  {
    serie: "inktober", titre: "Couverte", syllabes: "Cou|verte", date: "2026-03-28",
    originaux: ["images/52/couverte-1.webp"],
    vers_accent: "",
    texte: `Elle porte de beaux vêtements,
du rose aux joues,
de l'ombre sous les paupières.

De l'or, des pierres
ornent le ruban pourpre,
qui marque son cou délicat.

Son lit est étroit,
l'odeur de bois est entêtante.
Alanguie dans ses coussins de soie.

Au dessus,
le fossoyeur jette la dernière terre.`
  },
  {
    serie: "inktober", titre: "Fenêtre", syllabes: "Fe|nêtre", date: "2026-04-14",
    originaux: ["images/52/fenetre-1.webp"],
    vers_accent: "",
    texte: `Parce que la brume est arrivée en même
temps que lui.
L'horizon a disparu.
Sur les vitres la buée se mélange à la
poussière,
d'où émergent des silhouettes informes
qui pourraient être n'importe quoi, et qui
le sont.`
  },
  {
    serie: "inktober", titre: "Renifler", syllabes: "Re|ni|fler", date: "2026-04-16",
    originaux: ["images/52/renifler-1.webp"],
    vers_accent: "",
    texte: `S’étouffer horizontalement, en biais.
Verticalement.
Non.
Je ne suis pas inspirée.
Respirer un grand coup.
Merde, je suis enrhumée.

Renifler un grand coup.

Recommencer.
Aspirer à l'infiniment grand
ou pas.
Rendre le banal palpitant.
Définitivement.
Et se moucher.`
  },
  {
    serie: "inktober", titre: "Cerceau", syllabes: "Cer|ceau", date: "2026-04-17",
    originaux: ["images/52/cerceau-1.webp"],
    vers_accent: "",
    texte: `Le projecteur dirigé vers elle.
Encerclée par des monstres,
elle est tombée de haut,
bien bas.
Funambule instable,
traversant les cercles de flammes.
De loyal il n’y a qu’elle, autour les fauves
s'enchaînent.
Tous en piste pour un dernier tour.
Les mimes hurlent.
Quel cirque.`
  },
  {
    serie: "inktober", titre: "Créature", syllabes: "Créa|ture", date: "2026-04-22",
    originaux: ["images/52/creature-1.webp"],
    vers_accent: "",
    texte: `Enveloppe.
Enflée, essentielle.
Égide ou cage ?
Sûrement les deux.

En faire le tour 10 fois, 100 fois.
Trop.

Sous chaque angle une nouvelle perspective
désespérée, encore.

Le temps est infini,
Moi, aussi.`
  },
  {
    serie: "inktober", titre: "Mielleux", syllabes: "Miel|leux", date: "2026-05-04",
    originaux: ["images/52/mielleux-1.webp"],
    vers_accent: "",
    texte: `Des paroles chuchotées,
douces,
visqueuses,
dans le creux de l'oreille.
Les tympans se bouchent.`
  },
  {
    serie: "inktober", titre: "Aéroplane", syllabes: "Aé|ro|plane", date: "2026-05-04",
    originaux: ["images/52/aeroplane-1.webp"],
    vers_accent: "",
    texte: `Empreintes, sillons, veines.
Réseaux d’ocres, de pourpres et de bleus
profonds.
Courbés ou creux.
Aride.
Fertile puis plus.
Peuplée mais follement seule.
Singulière.`
  },
  {
    serie: "inktober", titre: "Attitude", syllabes: "At|ti|tude", date: "2026-05-12",
    originaux: ["images/52/attitude-1.webp"],
    vers_accent: "",
    texte: `Détourner le regard.
Faire comme si je ne t'avais pas vu.
Ne surtout pas se retourner, vérifier.
Est ce que tu as remarqué ?

Ils ont toutes sortes de visages,
des voix, des manières, des attitudes.
Aucune n'est la tienne.
C’est mieux, enfin je crois.

Je pourrais les mettre dans un hachoir.
Agglutiner les chairs,
pour te recréer.
Mon Golem.`
  },
  {
    serie: "inktober", titre: "Fier", date: "2026-05-29",
    originaux: ["images/52/fier-1.webp"],
    vers_accent: "",
    texte: `Oui même de toi,
après tout.`
  },
  {
    serie: "inktober", titre: "Chauve", date: "2026-05-29",
    originaux: ["images/52/chauve-1.webp"],
    vers_accent: "",
    texte: `Les muscles découpés serrent.
Les veines filent, nerveuses
parcourent les bras, le centre,
puis plus bas.
La peau, plus claire, fine, presque fragile,
trop.
Les tendons s’étirent, le corps s'arque.
Agripper, accrocher.
Les mains nerveuses retiennent, tirent.
Puissant de délicatesse.`
  },
  {
    serie: "inktober", titre: "Défait", syllabes: "Dé|fait", date: "2026-06-06",
    originaux: ["images/52/defait-1.webp"],
    vers_accent: "",
    texte: `Halo trop fort,
dans un écran de nuit.
Les yeux se plissent.
Seraient mieux fermés.
Je sais.

Le silence, ami pourtant
Pesant,
rarement.
Cacophonie,
sur une partition calme.

Un carrousel de portraits,
tous flous,
soit.
Un seul net,
pas le bon malheureusement.
Il se brouillera aussi,
J'espère.`
  },
  {
    serie: "inktober", titre: "Volte-face", date: "2026-06-09",
    originaux: ["images/52/volte-face-1.webp"],
    vers_accent: "",
    texte: `jusqu'aux confins.
Déborder sur les frontières du monde,
avec pour seule limite,
son propre corps.

Et puis se retirer.
Parce que c'est simple.
Sans raison vraiment,
et pourquoi faire ?

Revoir les promesses,
gonflées par l'espérance.
Les abandonner là, molles, blêmes.
Embarrassé.

Se plier en quatre,
tenir dans une case.
Garder son avis, sans débattre.
Mettre les couverts, la table, rase.`
  },
  {
    serie: "inktober", titre: "Plage", date: "2026-06-12",
    originaux: ["images/52/plage-1.webp"],
    vers_accent: "",
    texte: `Du sel, ta sueur.
Les grains forment tes constellations
Je les reconnais toutes.

Les gouttes s'agrègent,
sillons sur ta peau, en rivière.
Coulent plus bas,
disparaissent.
Là où j'irais plus tard,
peut être.
Si tu me laisses faire.`
  },
  {
    serie: "inktober", titre: "Père", date: "2026-07-03",
    originaux: ["images/52/pere-1.webp"],
    vers_accent: "",
    texte: `Des souvenirs rares et de ceux qu'on
préférait oublier.
Trop présent, tout le temps là et pourtant
grand absent de la pièce.

Parce que si personne n’en parle
Qu'est ce qui prouve qu'il a existé ?

Alors moi aussi je vais m'arrêter là.`
  },
  {
    serie: "inktober", titre: "Vent", date: "2026-07-03",
    originaux: ["images/52/vent-1.webp"],
    vers_accent: "",
    texte: `Disperse les braises,
attise l'espoir naissant.
Ce ne sont que des cendres.

Humeur d'orage.

Les larmes en trombes,
tourbillons sur ma joue.
Asséchées en rafales,
taries.`
  },
  {
    serie: "inktober", titre: "Mutiler", syllabes: "Mu|ti|ler", date: "2026-07-19",
    originaux: ["images/52/mutiler-1.webp"],
    vers_accent: "",
    texte: `Mes plus beaux poèmes je te les dois.
Même quand je m'applique, que je cherche des
rimes, des champs, des mots, des formes qui
correspondent.
Ils sont tellement loins.

Parce que je t'aime, même si ce n'est pas
vraiment toi.
Alors c'est quoi ? Je ne sais même pas.
Un espoir ? Sûrement pas.
Une pensée qui ne veut pas mourir. Qui devrait.

Tous les autres sont mutilés, amputés. Mais ils
ne montrent rien.
J'ai tout fait pour.

Mais il n’y a que toi ahah. Tout le temps.
Est ce que ça va s'arrêter un jour ?
Putain j'espère.

Oui, enfin.`
  },
  {
    serie: "inktober", titre: "Insecte", syllabes: "In|secte", date: "2026-07-19",
    originaux: ["images/52/insecte-1.webp"],
    vers_accent: "",
    texte: `Une piqûre, au pire.
Une marque ?
Même pas.

Aucune tâche,
il manquait de profondeur.

Alors,
tout reste en surface, s'efface.`
  },
  {
    serie: "inktober", titre: "Élégant", syllabes: "Élé|gant", date: "2026-07-19",
    originaux: ["images/52/elegant-1.webp"],
    vers_accent: "",
    texte: `Garder la tête haute.
D'accord.
Pourquoi faire ?

Quand ils se vautrent dans l'indignité,
patauger un peu avec eux.
Jamais.

Allumer des cierges.
Mais si on les renverse,
jusqu'où monterons les flammes ?

Le feu sur la pierre.
Elle ne brûle pas,
elle éclate.

J'aimerais que ce soit eux.
Dispersés, brisés.`
  },
  {
    serie: "inktober", titre: "Chariot", syllabes: "Cha|riot", date: "2026-08-03",
    originaux: ["images/52/chariot-1.webp"],
    vers_accent: "",
    texte: `Deux faces, cyclopes.
Alanguis comme des sphinx.
Dans un désert d'étoiles,
les grains de sable sont des astres.

Au centre, paisible, amputée,
elle porte sur ses épaules la lune, puis deux.
Sur sa tête, une couronne de lauriers.
Ensanglantée, sans douleur.

Sur son sceptre, l'œil regarde.
De sa main droite s'envolent des points dorés.

Chercher des figures, des métaphores, des
lignes d'esprit.
Parfois il suffit simplement d'être littéral.`
  },
  {
    serie: "inktober", titre: "Simple", date: "2026-08-03",
    originaux: ["images/52/simple-1.webp"],
    vers_accent: "",
    texte: `Comme bonsoir.`
  },
  {
    serie: "inktober", titre: "Banjo", syllabes: "Ban|jo", date: "2026-08-22",
    originaux: ["images/52/banjo-1.webp"],
    vers_accent: "",
    texte: `Et cet air infame qui continue de jouer.
Quand prendra t'il fin ?
Le faire taire,
et toi aussi.
J'irai jusqu’à me crever les tympans.
Pourquoi pas trancher,
dans un sens, surtout dans l’autre,
les cordes sensibles.`
  },
  {
    serie: "inktober", titre: "Plonger", syllabes: "Plon|ger", date: "2026-08-26",
    originaux: ["images/52/plonger-1.webp"],
    vers_accent: "",
    texte: `Je n'ai pas envie de t'écrire.
Aujourd'hui je veux rester à la surface des
choses.
Ne rien approfondir, surtout pas ton sujet.`
  },
  {
    serie: "inktober", titre: "Poisson rouge", syllabes: "Pois|son rouge", date: "2026-08-26",
    originaux: ["images/52/poisson-rouge-1.webp"],
    vers_accent: "",
    texte: `Se souvenir,
du mal, du peu, du pas assez
Partir faire un tour,
oublier.

Omettre,
les demi vérités, les messages effacés.
Séloigner prendre l'air, en apnée.
Se rappeler.`
  },
  {
    serie: "inktober", titre: "Sangler", syllabes: "San|gler", date: "2026-09-20",
    originaux: ["images/52/sangler-1.webp"],
    vers_accent: "",
    texte: `Un corps monstrueux,
trop mou, débordant.
Dissimule ma forme,
qui disparait sous celle formidable,
de la créature.

Sanglée dans mon dos,
ses ailes ratissent le sol.
L'emmener plus haut.
C’est là qu'elle repose non ?

Je la ramènerai chez elle même si je dois briser mes os.`
  },
  {
    serie: "inktober", titre: "Bancal", syllabes: "Ban|cal", date: "2026-09-20",
    originaux: ["images/52/bancal-1.webp"],
    vers_accent: "",
    texte: `Pose en équilibre
Sur des piliers branlants
Je contemple avec gêne,
ce gros coeur encombrant.

Relié de toute part,
Par des câbles, des fils.
Il survit non sans mal,
à cet acharnement.

Mais il est déjà mort,
cessent les tressautements.
Une brève respiration,
artificielle seulement.`
  },
  {
    serie: "inktober", titre: "Dé", date: "2026-09-20",
    originaux: ["images/52/de-1.webp"],
    vers_accent: "",
    texte: `Deux cachets par jour.
Cinq étages à pieds.
Cinq nouvelles histoires.
Deux langues à amadouer.
Deux contraintes.
Trois jours en altitude.

Relancer.`
  },
  {
    serie: "inktober", titre: "Colonne vertébrale", syllabes: "Co|lonne ver|té|brale", date: "2026-10-01",
    originaux: ["images/52/colonne-vertebrale-1.webp"],
    vers_accent: "",
    texte: `Vouivre invétérée, invertébrée, se faufile.
Derrière elle, son honneur la fuit comme une ombre à midi.
Elle remue, se tortille, des coliques, mélancolique mais tant pis.

Les rats désertent le navire. Anxieuse, les doigts rongés,
comme déchiquetés par des milliers de dents avides.
Ecumez ou pas, l'ectoplasme n'arrivera pas à bon port.

La colonne déformée, courbée en volutes devant l'autorité,
elle se traine, désemparée, dans une pièce lugubre,
et s'écroule fulminante quand les lumières s'éteignent.`
  },
  {
    serie: "inktober", titre: "Danse", date: "2026-10-01",
    originaux: ["images/52/danse-1.webp"],
    vers_accent: "",
    texte: `Les agneaux s'attroupent.
Cercle sacrificiel.
La danseuse les guide
à la baguette.

Le berger pétrifié
rapetisse,
s'affaisse.

Le public fixe, impassible.
Des billes ardentes
rougeoient dans l'ombre.`
  },
  {
    serie: "autres", titre: "Mon mur", date: "2025-11-16",
    originaux: ["images/autres/mon-mur-1.webp", "images/autres/mon-mur-2.webp"],
    vers_accent: "",
    texte: `Mon mur est grand. Très grand
même.
Et haut. Très haut.
Avant il ne l'était pas, il était plutôt
petit même. Anormalement petit
pour un mur. C'était une bordure,
puis un muret, voilà.

Et puis j'ai grandi et lui aussi.
On en a avalé des briques et de la
chaux, du béton et du ciment. Du
sable et de l'eau. Il a fallut étayer,
renforcer, soutenir.

Aujourd'hui c'est le mur le plus
grand que j'ai vu.
Dites-vous qu'il envisage d'être une
muraille.
Il changerait de genre, ce qui
ne serait pas forcément pour me
déplaire. Quoique ça ne serait plus
vraiment lui.

Souvent je m'assoie tout en haut
pour voir le mur des autres.
Desfois, ils sont assis en haut
comme moi et on se regarde.
Desfois, on ne voit que le Mur.
Parfois le mur est si bas, qu'ils sont
obligés de se coucher face contre
terre pour qu'on ne les voit pas.

Moi, personne ne me voit même
sur la pointe des pieds et les bras
levés vers le ciel, parce que mon
mur est vraiment grand, très grand
même.

C’est pour ça que je vais souvent
tout en haut. Pas pour qu'on
me voit mais pour que les autres
voient que quand on construit
un grand mur on peut s'élever et
prendre de la hauteur.`
  },
  {
    serie: "autres", titre: "Dormir", syllabes: "Dor|mir", date: "2025-11-18",
    originaux: ["images/autres/dormir-1.webp"],
    vers_accent: "",
    texte: `Sentir ta peau, ton souffle
Ton corps hésitant
Près de moi, contre moi
N'hésites pas.

Tes boucles s'enroulent
Autour de mes doigts
Ta bouche entrouverte
Ta bouche.

Si je disparais,
Disparais avec moi
Dans l'ouate et la soie.

Grains de peau
Bris de voix
Nos corps s'enfoncent
Avalés par les draps
Moi sur toi
Ramenée dans tes bras
Toi en moi

Dors avec moi…
Mais,
Si tu ne peux pas dormir
Réveille-moi
Si tu ne veux pas dormir
Réveille-moi`
  },
  {
    serie: "autres", titre: "Dimanche", syllabes: "Di|manche", date: "2025-11-23",
    originaux: ["images/autres/dimanche-1.webp"],
    vers_accent: "",
    texte: `La tête pesante et chaude.
Tout démange, tout brûle en même temps.
L'incendie attisé ne faiblit jamais.
L'étau sur la nuque, de part et d’autres des
tempes,
sur l’arête du nez et l’arcade des sourcils.
Les mains se referment, forment un masque de
souffrance,
et y impriment la douleur.

Le corps est lourd, plein à craquer de vide.
Les doigts glacés apaisent brièvement
l’inflammation des membres,
consumés par une fièvre imaginaire.

Se lever donne le vertige.
S’allonger comme un gisant, pousser un dernier
râle,
mourir avec personne pour témoin.

Plus de point d’horizon.
Seule une lassitude infinie
Flotter et se laisser dériver
sur une mer de sel et d’amertume.

Laisser l’eau entrer sans résister.
Regarder l’écume, ses bulles iridescentes,
trouver ça beau
puis toucher les fonds.`
  },
  {
    serie: "autres", titre: "Le bonhomme roseau", syllabes: "Le bon|homme ro|seau", date: "2025-11-25",
    originaux: ["images/autres/le-bonhomme-roseau-1.webp"],
    vers_accent: "",
    texte: `Un jour j'ai construit une personne.
Je lui ai mis deux bras deux jambes et un nez.

Quand il a fallu choisir le sexe je n’ai pas
vraiment hésité : si ça j'avais fait un homme
j'aurais du le manipuler avec des pincettes,
même s’ils n’en prennent aucune.

Et puis je voulais des cheveux, j'aime bien les
cheveux et ceux là n’en ont pas beaucoup ou pas
très longtemps.

Je voulais une personnalité entière.
Vous savez : une avec du caractère qui dit tout
haut ce que personne n’a rien demandé.
J’ai vite changé d’avis quand elle s’est mis à
raconter n'importe quoi.

J’en ai mis une autre, plus souple,
qui plie mais ne rompt pas comme les roseaux
et qui ne parle que quand elle a des choses à dire
(la personnalité pas les roseaux).

Je ne sais pas quelle personnalité a un roseau.
Peut être qu’ils sont psychorigides ?
Je m’égare.

Je lui ai fait des tout petits pieds,
pour qu’elle reste en équilibre
sans jamais se prendre pour une grosse pointure,
et aussi parceque j'aime bien les petites chaussures.`
  },
  {
    serie: "autres", titre: "Pendu", syllabes: "Pen|du", date: "2025-11-29",
    originaux: ["images/autres/pendu-1.webp"],
    vers_accent: "",
    texte: `Élever le fond et en oublier le vertige.
Délaisser sa forme pour errer sans structure,
pantin désarticulé mû par une volonté propre.
Isolant ses pensées du tout.

Les fils du destin s’entrecroisent, semmêlent
piégeant la triste marionnette.
Le corps las s’effondre sous la tête énorme,
pleine à craquer d'idées couleur sépia.

Déséquilibrée, elle penche vers
jusqu’à se retourner entièrement.
Immobile, elle contemple un monde à l’envers,
comme une nouvelle création.

Suspendus, les membres noueux se parent de
tissu, se renforcent.
La cime désenfle, la silhouette s’accorde.
L'être retourné se libère,
équilibré, sans contraire.`
  },
  {
    serie: "autres", titre: "Ombre emportée", syllabes: "Ombre em|por|tée", date: "2025-12-02",
    originaux: ["images/autres/ombre-emportee-1.webp"],
    vers_accent: "",
    texte: `Donner un visage à une ombre.
Elle vague, sans pouvoir s’ancrer. Jamais.
Cachée derrière un masque, toujours.
Ses traits se dissolvent, perdus,
délaissés par ceux qui l’estimaient.

Illuminée, elle s'approche.
Affamée, elle fuit,
emportant des fragments de lumière.
La flamme dérobée déjà
et la replonge dans le noir.

Aveugle, elle se perd sur son propre chemin,
dans des détours familiers.
Prise au piège de son labyrinthe,
face à la sortie qu’elle ne peut plus voir.

Enfoncée si loin sur un sentier
où personne n'ira jamais
elle attend qu’on la cherche,
sans savoir qu’on l’a déjà oubliée.`
  },
  {
    serie: "autres", titre: "Nous", date: "2025-12-11",
    originaux: ["images/autres/nous-1.webp"],
    vers_accent: "",
    texte: `Un léger accroc dans le tissu
rappelle délicatement le passage du temps
sans reprise, il s'effile.

Regarder l'aval avec une hâte tranquille
et une tendresse nouvelle pour ses souvenirs
porter son passé sans crouler sous son poids,
mais raffermi par sa chaire.

Toutes les formes coexistent
l'avant et l'après
le maintenant et le trop tard
elle et moi
nous.`
  },
  {
    serie: "autres", titre: "360", date: "2025-12-15",
    vers_accent: "",
    texte: `Quand le corps hurle, prendre le temps de contempler sa peine. L’observer sous tous les angles, et voir apparaitre des degrés de souffrance : une souffrance à 90°, degrés perpendiculaire à notre solitude, parallèle à notre chagrin.

La regarder comme un objet curieux, si longtemps qu’on lui trouve une drôle de forme, comme si on la voyait pour la première fois, bien qu’elle soit si familière.

La laisser s’installer et nous recouvrir comme une seconde peau.
Prisonniers d’une mue qui n’arrive jamais, cocon de chair, chrysalide de supplice.
Des nuées de pensées, papillons désespérés cloués au sol.

Après nous avoir labourés, retournés, elle laisse dans son sillage un champ à vif mais renouvelé.

Prendre le temps d’apprécier l’absence.`
  },
  {
    serie: "autres", titre: "Ectopia cordis", syllabes: "Ec|to|pia cor|dis", date: "2025-12-15",
    vers_accent: "",
    texte: `Le coeur à l’extérieur.
Dans les courants d’air, inondé de pluie.
Bercé par les vagues, mordu par le froid.
Toujours exposé pourtant, jamais à l’abri.

Attentif, seulement,
on lui prête toute sorte d’ambitions,
de desseins ou de vices.

Mais il n’est qu’un coeur.
Il ne demande rien
Il ne raisonne pas.

Il bat.`
  },
  {
    serie: "autres", titre: "Ciel", date: "2025-12-24",
    originaux: ["images/autres/ciel-1.webp"],
    vers_accent: "",
    texte: `Le ciel tourmenté se reflète
dans les flaques encore plus déformé.
Souffle et fumée se confondent,
l'air est humide, les yeux ne pleuvent plus.

Il n’y a rien à tracer sur la buée,
les fantasmes sont morts,
les futurs souvenirs balayés.
Rallumer une cigarette.`
  },
  {
    serie: "autres", titre: "Ouvrage", syllabes: "Ou|vrage", date: "2025-12-26",
    originaux: ["images/autres/ouvrage-1.webp"],
    vers_accent: "",
    texte: `Se repasser le cours de sa vie
en long, en large, en travers.
Mettre les choses à plat,
défroisser les plis,
reprendre les accrocs,
et se remettre à l'ouvrage.`
  },
  {
    serie: "autres", titre: "Trou d'utilité publique", syllabes: "Trou d'uti|li|té pu|blique", date: "2025-12-27",
    originaux: ["images/autres/trou-d-utilite-publique-1.webp"],
    vers_accent: "",
    texte: `Un jour j'ai creusé un trou et j'y ai mis des gens
dedans.
Certains avaient du mal à passer car leur bouche était
trop grande et il en sortait tellement d’inepties que j'ai
eu peur que ça déborde.
D'autres avaient une tête énorme avec quelques
cheveux ou pas du tout.
C'était surtout des hommes.

Quand j'en mettais plusieurs côte à côte, ils gonflaient
leur cage thoracique et tapaient dessus avec les
poings.
Quand ils ouvraient la bouche cela faisait un bruit de
poulet.

Certains se sentaient bien au fond du trou.
Ils me disaient qu'ils étaient comme à la maison.
D’autres n'appréciaient pas du tout et marchaient sur
la tête des premiers pour essayer de sortir.

Un soir, j'y suis descendue pour voir.
Ça ne m'a pas vraiment plu.
Alors je suis ressortie,
sans écraser les autres.

Puis j'en ai recreusé un autre.`
  },
  {
    serie: "autres", titre: "Rentrer, partir", syllabes: "Ren|trer, par|tir", date: "2025-12-28",
    originaux: ["images/autres/rentrer-partir-1.webp", "images/autres/rentrer-partir-2.webp"],
    vers_accent: "",
    texte: `Éveillé, il entend la nuit.
Le bruit,
les pas,
les sons étouffés.
Reproches datés,
balivernes
en logorrhées nocturnes,
qui ne reposent sur rien
mais qui s'appuient sur tout.
Les divagations de ceux qui se perdent,
nées de l'ennui surtout.
Déterminés à effacer leur trace
sans marque, aucune.
On confond la date de leur mort,
Parce que pourquoi pas
après tout.

Des phares.
Des pas lourds.
Une clé dans la serrure hésite.

Une ombre passe,
émet des sons,
des plaintes.

Les cliquetis des verres,
des tasses.
La voix s'entend dans la nuit,
très tard, trop tôt.`
  },
  {
    serie: "autres", titre: "Tendresse et sarcasme", syllabes: "Ten|dresse et sar|casme", date: "2026-01-02",
    originaux: ["images/autres/tendresse-et-sarcasme-1.webp"],
    vers_accent: "",
    texte: `L'attitude est une armure
percée de toutes parts.
Sous les mailles, les côtes fragiles.
Brisé.

Armé par ses mots.
Désarmé par les miens.
Inapte au combat,
réformé.`
  },
  {
    serie: "autres", titre: "Plaie béante, cicatrice", syllabes: "Plaie béan|te, ci|ca|trice", date: "2026-01-04",
    originaux: ["images/autres/plaie-beante-cicatrice-1.webp", "images/autres/plaie-beante-cicatrice-2.webp"],
    vers_accent: "",
    texte: `Parce que la nuit je ne dors pas, j'ai
L'impression étrange d'être privée de songes
A jamais, car cette nuit je ne dors plus.
Impatiente, j'attends, combien de temps encore ?
Et moi ? Avec toi.

Brisés, mes rêves lacérés, sans toi.
Ensevelir mes pensées plus profondément,
Abyssal est l'abime sous la surface.
Noyé, mon corps émerge, mon cœur se déverse,
Trop plein. Dériver,
Echouer là où les rêves éclosent.

Car la nuit je ne dors pas.
Impression étrange, de songes dépourvue,
Car cette nuit je ne dors plus.
Attendre ? combien de temps encore, et moi ?
Transpercés, mes rêves lacérés. Avec, sans toi.
Replonger, plus profondément encore
Insondable, est l'abime sous la surface,
Ceint mes mains, mon cœur, mon corps,
Et ramène moi où les rêves éclosent encore.`
  },
  {
    serie: "autres", titre: "Récolte", syllabes: "Ré|colte", date: "2026-01-07",
    originaux: ["images/autres/recolte-1.webp"],
    vers_accent: "",
    texte: `D'une terre stérile grandissent des récoltes
splendides où croulent des fruits mûrs,
ou presque.
Le fiel nourri des pensées étranges, réelles.
Sur le sol desséché on s'ancre en profondeur.
L'âme s'envole, s'arrache à la fange où tu
t'étends toujours.
Merci de ne pas avoir été là pour moi, car j'ai
trouvé plus grand.`
  },
  {
    serie: "autres", titre: "Rien", date: "2026-01-13",
    originaux: ["images/autres/rien-1.webp"],
    vers_accent: "",
    texte: `Des remous dans le dos.
Il fait froid.

À la naissance de la corde,
les frissons déferlent.

Autour, rien.
Qu'un grondement régulier.

Bercé par une vague scélérate.
Rester, un peu.`
  },
  {
    serie: "autres", titre: "am0ur quant1que", date: "2026-02-04",
    originaux: ["images/autres/am0ur-quant1que-1.webp"],
    vers_accent: "",
    texte: `Je t'observe longtemps,
tes angles, tes faces.
Je t'aime.
Parfois plus encore,
parfois pas,
à chaque fois.

Quand ton champ
se dérobe à mon regard,
explose
en milliards de particules :
T01

J'ai refait l'expérience,
un nombre incalculable de fois,
le résultat ne change pas.
Une seule variable :
M01`
  },
  {
    serie: "autres", titre: "Squale", date: "2026-02-16",
    originaux: ["images/autres/squale-1.webp"],
    vers_accent: "",
    texte: `La douleur incessante, dissoute dans
l'écume.
Déposée sur le rivage, par les vagues
d'une mer ensanglantée.
Les squales parcourent la Terre,
enfoncent leurs mâchoires dans la glèbe.

Que fait un requin dans le désert ?`
  },
  {
    serie: "autres", titre: "Vésuve", syllabes: "Vé|suve", date: "2026-02-17",
    originaux: ["images/autres/vesuve-1.webp"],
    vers_accent: "",
    texte: `Autodafé :
les monstres des contes s'évaporent dans
la nuée ardente.
J'ai fixé le mur de feu, mes yeux étaient
si secs qu'ils tombaient en poussière au
premier battement de cil.

Les histoires de vieux messieurs,
immondes,
racontées aux petits enfants.
Taire la fin, le milieu et le début,
que personne ne veut connaitre.
Je les enfermerais dans une cage
pyroclastique, scellée dans la cendre.`
  },
  {
    serie: "autres", titre: "Baphomet", syllabes: "Ba|pho|met", date: "2026-02-24",
    originaux: ["images/autres/baphomet-1.webp"],
    vers_accent: "",
    texte: `Les démons se répandent,
engendrent les leurs.
Tu en fais partie.

Les menteurs racontent une farce
et finissent par y croire.

Sous mon bras,
une tête, langue pendante :
elle ne ment plus.`
  },
  {
    serie: "autres", titre: "Balcon", syllabes: "Bal|con", date: "2026-03-08",
    originaux: ["images/autres/balcon-1.webp"],
    vers_accent: "",
    texte: `Une boule chaude cogne contre son
ventre.
Dans sa poitrine, les battements
ralentissent, s'arrêtent.
L'air empoisonné remplit les alvéoles
Quelque chose se soulève, peine,
meurt à nouveau.
Ramène-le.
Pour moi.`
  }
];
