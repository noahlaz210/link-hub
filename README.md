# Hub de liens — Forrest The Dump

Site statique, deux pages, aucun build. Tu ouvres `index.html` dans un
navigateur et ça marche.

```
index.html     l'accueil (identité, montage, projets)
montage.html   la page client : offre, réalisations, contact
style.css      tout le style des deux pages
links.js       TOUT le contenu (liens, titres, descriptions) + le rendu
assets/        favicon, images de partage
assets/logos/  les icônes des apps affichées dans les cartes projets
```

**Une seule règle : tout le contenu vit dans `links.js`.** Les `.html` ne
contiennent aucun texte de contenu — juste des emplacements vides que
`links.js` remplit au chargement.

---

## 1. Le système visuel

Le site suit une logique de **livre de stickers** : fond papier pastel, type
d'affichage énorme et écrasé, contour noir d'un pixel sur tout ce qui est
cliquable, palette de six couleurs vives posées comme des autocollants.

Trois règles tiennent le reste :

1. **Le contour noir est le langage**, pas un repli faute de mieux. Nav,
   boutons, cartes, stickers : tout est cerné.
2. **Aucune ombre portée, aucun dégradé.** Le relief vient des bandes de
   couleur et du ruban bleu.
3. **Le bleu n'est jamais une couleur d'action.** C'est le ruban, et rien
   d'autre. Les boutons sont noirs pleins, ou blancs cernés de noir.

Les couleurs sont en haut de `style.css`, dans `:root`. Les six teintes de
sticker : `--blue`, `--mint`, `--lavender`, `--ember`, `--sunburst`,
`--violet`. Les trois fonds de bande : `--sky`, `--paper`, `--concrete`.

### Le ruban

Le motif signature. Un tube bleu tracé en SVG dans `links.js`, qui passe
**derrière** le titre d'affichage. Il est fait de trois tracés superposés —
le filet noir, le corps bleu, puis un reflet plus clair — et non d'un
dégradé, qui casserait l'aspect papier découpé.

### Les accents en capitales

L'interligne du titre est à 0,78 : les lignes se touchent, c'est ce qui rend
le texte sculptural. Problème, en français : l'accent de `É` passe au-dessus
de la hauteur de capitale, donc derrière la ligne du dessus, et disparaît —
les deux sont noirs. `links.js` détecte les lignes qui portent une capitale
accentuée et leur ajoute un filet d'air. Elles seules : le reste du bloc
reste écrasé.

---

## 2. Modifier le contenu

Tout est dans l'objet `SITE`, en haut de `links.js`.

### Le titre d'accueil

```js
displayLines: ["Forrest", "The", "Dump"],
```

Une entrée = une ligne. **C'est toi qui décides où ça coupe**, pas le
navigateur. Même principe pour `featured.title`, `montage.hero.title` et
`montage.contact.title`.

### Le bandeau qui défile

```js
marquee: ["Montage vidéo", "Clipping", "Apps iOS", "contact@4restdump.com"],
```

Entrées courtes. La liste est dupliquée automatiquement pour que la boucle ne
saute pas.

### La pastille « dispo »

```js
status: { show: true, label: "Dispo pour de nouveaux projets" },
```

Passe `show` à `false` quand tu es complet. Une disponibilité affichée en
permanence ne veut plus rien dire.

### Un projet

```js
{
  title: "Kura",
  description: "Découverte sociale par affinités culturelles : cinéma et musique.",
  tag: "iOS · SwiftUI",
  logo: "assets/logos/kura.png",   // facultatif
  color: "lavender",               // sky, mint, lavender, sun, mist
  href: "https://thekura.netlify.app/",
}
```

**Un projet sans lien reste affiché** : carte non cliquable, étiquette
« Bientôt ». Ça a l'air voulu, alors qu'un lien mort a l'air cassé. Dès que
tu ajoutes une URL, la carte devient cliquable, sans rien d'autre à toucher.

`color` fait tourner les fonds dans la palette. Évite de mettre la même
couleur sur deux cartes voisines : aucune teinte ne doit devenir « la »
couleur des projets.

Pour ajouter un logo : dépose un PNG carré dans `assets/logos/` (128 px
suffit, les cartes l'affichent en 44 px) et mets son chemin dans `logo`. Si
le fichier manque, le carré disparaît au lieu d'afficher une image cassée.

### Les artistes (page montage)

Pas de galerie de vidéos : les montages vivent sur les chaînes des artistes,
c'est donc là qu'on envoie.

```js
{
  name: "FuegoFeu",
  note: "Clips et formats courts",
  image: "assets/works/fuego-cash-crime.jpg",  // facultatif
  color: "sun",
  links: [
    { label: "YouTube", href: "https://www.youtube.com/@fuegofeu", primary: true },
    { icon: "instagram", href: "https://www.instagram.com/fuego.feu/" },
  ],
}
```

L'image est facultative : sans elle, la carte reste une carte, et elle ne
s'étire pas pour rattraper sa voisine.

### L'adresse de contact

`montage.contact.email.address` est publique : elle est lisible dans le code
source de la page, comme toute adresse en `mailto:`. Elle apparaît aussi dans
le bandeau défilant (`marquee`) — change les deux ensemble. À côté du bouton mail,
un bouton **« Copier l'adresse »** — utile sur mobile, où `mailto:` ouvre
parfois une application que personne n'utilise.

---

## 3. Ce que le site charge

Deux polices, depuis Google Fonts : **Anton** pour l'affichage, **Inter**
pour l'interface. Ce sont les deux seules ressources externes du site, et
elles sont nécessaires : le caractère du design tient à cette typographie, et
aucune police système n'a cette graisse.

Tout le reste est local : le CSS, le JS, les logos, les stickers et le ruban
(dessinés en SVG dans `links.js`). Aucun tracker, aucun cookie, aucun CDN de
script.

Si tu veux un site strictement sans requête externe, retire les trois balises
`<link>` des deux `.html` : la mise en page tient, mais le titre retombe sur
une police système et perd l'essentiel de son caractère.

Une seule exception à « rien d'externe » côté contenu : le lecteur YouTube
des réalisations, quand tu renseignes un `videoId`. Il passe par
`youtube-nocookie.com`, en chargement différé — rien n'est demandé à YouTube
tant que la tuile n'est pas à l'écran.

---

## 4. Ce qui bouge

Volontairement presque rien : le site se lit comme un collage imprimé.

- **Le bandeau défile**, en boucle continue.
- **Les boutons réagissent** au survol (inversion noir/blanc) et à la
  pression (1 px vers le bas).
- **Les cartes de projet** se décalent de 2 px au survol.

`prefers-reduced-motion` arrête le bandeau et coupe les transitions.
`prefers-contrast: more` épaissit les filets à 2 px.

---

## 5. Déployer

Le site est purement statique : rien à compiler, aucune variable
d'environnement.

**Mettre à jour ce qui est déjà en ligne**

```bash
git add -A
git commit -m "Change le contenu"
git push
```

Chaque `push` sur `main` redéploie, si le projet Vercel est branché sur le
dépôt.

**GitHub Pages**, en copiant le dossier dans un dépôt Pages :

```bash
rsync -a index.html montage.html style.css links.js assets \
  ~/Documents/GitHub/noahlaz210.github.io/link-hub/
git -C ~/Documents/GitHub/noahlaz210.github.io add link-hub
git -C ~/Documents/GitHub/noahlaz210.github.io commit -m "Met à jour le hub"
git -C ~/Documents/GitHub/noahlaz210.github.io push
```

**Brancher un domaine perso** : achète-le chez n'importe quel registrar, puis
dans Vercel → **Settings → Domains → Add**. Vercel affiche les enregistrements
DNS à créer et émet le certificat HTTPS tout seul.

N'oublie pas de remplacer `https://4restdump.vercel.app` par ton domaine dans
`canonical`, `og:url` et les URL d'images, en haut des deux `.html`. Ces
balises restent écrites en dur : les robots de Facebook, Instagram, WhatsApp,
iMessage, X et Discord **ne lancent pas le JavaScript**, donc une balise
injectée par `links.js` serait invisible pour eux et l'aperçu du lien partagé
sortirait vide.

Après un changement de ces balises, les réseaux gardent l'ancien aperçu en
cache. Pour forcer la mise à jour :
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
