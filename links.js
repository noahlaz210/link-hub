/* =============================================================================
   links.js — SOURCE UNIQUE DE TOUT LE CONTENU DU SITE
   -----------------------------------------------------------------------------
   Tout ce qui s'affiche sur les deux pages vient de l'objet SITE ci-dessous.
   Pour changer un lien, un titre ou une description : tu édites ICI, et
   nulle part ailleurs. Les fichiers .html n'ont pas à être touchés.

   Seule exception, et elle est technique : les balises <title>, <meta
   description> et Open Graph restent écrites dans les .html. Les robots de
   Facebook / X / iMessage / Discord ne lancent pas le JavaScript — une balise
   injectée par ce fichier serait invisible pour eux, donc l'aperçu du lien
   partagé serait vide.
   ========================================================================== */

const SITE = {
  /* ---------------------------------------------------------------------------
     1. IDENTITÉ
     ------------------------------------------------------------------------ */
  profile: {
    name: "Forrest The Dump",
    // Le nom éclaté en lignes pour le bloc d'affichage. Chaque entrée est une
    // ligne : c'est toi qui décides où ça coupe, pas le navigateur.
    displayLines: ["Forrest", "The", "Dump"],
    tagline: "Je monte des clips et je construis des apps iOS.",
    monogram: "4D",
    // La photo du hero. Carrée : elle est affichée dans un cercle.
    avatar: {
      show: true,
      src: "assets/avatar.jpg",
      alt: "Forrest The Dump, bras ouverts devant un lac",
    },
    status: {
      show: true,
      label: "Dispo pour de nouveaux projets",
    },
  },

  // Le bandeau noir qui défile tout en haut. Garde les entrées courtes.
  marquee: [
    "Montage vidéo",
    "Clipping",
    "Formats courts",
    "Apps iOS",
    "noahlazennec@gmail.com",
  ],

  // La barre de navigation, identique sur les deux pages.
  nav: {
    homeHref: "index.html",
    links: [
      { label: "Projets", href: "index.html#projets" },
      { label: "Montage", href: "montage.html" },
    ],
    cta: { label: "Me contacter", href: "montage.html#contact" },
  },

  /* ---------------------------------------------------------------------------
     2. RÉSEAUX
     ------------------------------------------------------------------------ */
  socials: [
    { label: "YouTube", handle: "@throughmorpheus", href: "https://www.youtube.com/@throughmorpheus" },
    { label: "Instagram", handle: "@4restdump_", href: "https://www.instagram.com/4restdump_/" },
  ],

  /* ---------------------------------------------------------------------------
     3. LA CARTE MISE EN AVANT (accueil)
     ------------------------------------------------------------------------ */
  featured: {
    label: "Travailler avec moi",
    title: ["Montage", "vidéo"],
    description:
      "Clips, formats courts et longs formats pour des artistes et des créateurs. " +
      "Tu m'envoies les rushes, je te rends un fichier prêt à publier.",
    href: "montage.html",
    bullets: ["Clips", "Reels & Shorts", "YouTube"],
    cta: "Voir la page montage",
  },

  /* ---------------------------------------------------------------------------
     4. PROJETS
     Un projet sans href reste affiché : carte non cliquable, étiquette
     « Bientôt ». Dès que tu colles une URL, elle devient un lien.
     `logo` prend une image dans assets/logos/, `color` une des cinq teintes
     de carte : sky, mint, lavender, sun, mist.
     ------------------------------------------------------------------------ */
  projects: {
    title: "Projets",
    intro: "Des apps iOS, de l'idée au TestFlight.",
    items: [
      {
        title: "Kura",
        description: "Découverte sociale par affinités culturelles : cinéma et musique.",
        logo: "assets/logos/kura.png",
        color: "lavender",
        // Le premier lien est le bouton principal. `icon` remplace le
        // libellé par un logo : un réseau n'a pas besoin d'être écrit.
        links: [
          { label: "App Store", href: "https://apps.apple.com/fr/app/id6811449545", primary: true },
          { label: "thekura.app", href: "https://thekura.app" },
          { icon: "instagram", href: "https://www.instagram.com/thekura.app/" },
        ],
      },
      {
        title: "Mention",
        description: "Moyennes, paliers et projections : la mention que tu peux viser, calculée à l'avance.",
        logo: "assets/logos/mention.png",
        color: "sun",
        links: [
          { label: "App Store", href: "https://apps.apple.com/fr/app/mention/id6813231243", primary: true },
        ],
      },
      {
        title: "TerraTrails",
        description: "Décrire, générer, partir : l'itinéraire de rando se construit à partir de ta description.",
        logo: "assets/logos/terratrails.png",
        color: "mint",
        links: [
          { label: "terratrails.vercel.app", href: "https://terratrails.vercel.app/", primary: true },
          { icon: "instagram", href: "https://www.instagram.com/terratrails.fr/" },
        ],
      },
      {
        title: "Bloked",
        description: "Tu déclares tes tâches la veille ; le lendemain, tes applis restent bloquées jusqu'à ce que tu les coches.",
        logo: "assets/logos/bloked.png",
        color: "sky",
        href: "", // TODO
      },
      {
        title: "Manifest",
        description: "Information collaborative sur les manifestations en France : carte, guides, compteur de foule et fiabilité affichée.",
        color: "mist",
        href: "", // TODO
      },
      {
        title: "Uruk",
        description: "Exploration urbaine et connexion sociale : découvrir sa ville autrement, et les gens qui y traînent.",
        color: "lavender",
        href: "", // TODO
      },
      {
        title: "Wearther",
        description: "Quoi mettre aujourd'hui : la météo croisée avec ton agenda et les endroits où tu dois aller.",
        color: "sky",
        href: "", // TODO
      },
      {
        title: "Onyx",
        description: "Finances perso : transactions, plan d'épargne et conseils avant un achat.",
        color: "mint",
        href: "", // TODO
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     5. PIED DE PAGE
     ------------------------------------------------------------------------ */
  footer: {
    text: "© 2026 Forrest The Dump",
    note: "Fait à la main · aucun tracker",
  },

  /* ---------------------------------------------------------------------------
     6. PAGE MONTAGE
     ------------------------------------------------------------------------ */
  montage: {
    hero: {
      label: "Montage vidéo & clipping",
      title: ["Tes rushes,", "montés"],
      lede:
        "Je monte des clips, des formats courts et des vidéos longues. " +
        "Dis-moi le format, la durée et la deadline : je réponds avec un prix et un délai.",
    },

    services: {
      title: "Ce que je propose",
      items: [
        {
          title: "Clips",
          description:
            "Montage rythmé sur le morceau, étalonnage, effets. Master dans le format de ton choix, plus une version verticale.",
          color: "mint",
        },
        {
          title: "Formats courts",
          description:
            "Reels, Shorts, TikTok : accroche dans les deux premières secondes, sous-titres calés à la voix, coupes au rythme.",
          color: "lavender",
        },
        {
          title: "Long format",
          description:
            "Vidéos YouTube, documentaires courts, interviews. Construction du récit, nettoyage du son, habillage.",
          color: "sun",
        },
      ],
    },

    /* kind: "youtube"   → videoId = ce qui suit « v= » dans l'URL de la vidéo.
       kind: "instagram" → href = l'URL du post, thumb = une image dans assets/.
       Sans videoId ni href, l'emplacement s'affiche en gris clair.
       Passe showEmptySlots à false quand la grille est remplie. */
    works: {
      title: "Réalisations",
      intro: "Une sélection. Le reste est sur les chaînes des artistes.",
      showEmptySlots: true,
      items: [
        {
          kind: "instagram",
          href: "https://www.instagram.com/reel/DeguuDvIl0-/",
          thumb: "assets/works/fuego-cash-crime.jpg",
          title: "Fuego × Cash Crime",
          caption: "Clip — Rentre dans le Cercle (BTS) · 2026",
        },
        { kind: "youtube", videoId: "", title: "Fuego", caption: "Clip · 2026" },     // TODO : videoId
        { kind: "youtube", videoId: "", title: "Used2that", caption: "Clip · 2026" }, // TODO : videoId
      ],
    },

    // Les chaînes, en colonne à côté des réalisations.
    artists: {
      title: "Les chaînes",
      items: [
        {
          name: "FuegoFeu",
          note: "Clips et formats courts",
          color: "sun",
          links: [
            { label: "YouTube", href: "https://www.youtube.com/@fuegofeu", primary: true },
            { icon: "instagram", href: "https://www.instagram.com/fuego.feu/" },
          ],
        },
        {
          name: "used2that",
          note: "Clips et formats courts",
          color: "lavender",
          links: [
            { label: "YouTube", href: "https://www.youtube.com/@used2that", primary: true },
            { icon: "instagram", href: "https://www.instagram.com/used2that/" },
          ],
        },
      ],
    },

    contact: {
      title: ["Travailler", "ensemble"],
      description: "Le format, la durée, la deadline. Je réponds avec un prix et un délai.",
      email: {
        address: "noahlazennec@gmail.com",
        subject: "Projet de montage — Forrest The Dump",
        label: "M'écrire",
        copyLabel: "Copier l'adresse",
        copiedLabel: "Copié",
      },
      instagram: { href: "https://www.instagram.com/4restdump_/", label: "DM Instagram" },
    },
  },
};

/* =============================================================================
   MOTEUR DE RENDU — tu n'as normalement pas à modifier ce qui suit.
   ========================================================================== */

(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var SVG = "http://www.w3.org/2000/svg";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function isExternal(href) {
    return /^(https?:|mailto:)/i.test(href);
  }

  function link(anchor, href) {
    anchor.href = href;
    if (isExternal(href) && !/^mailto:/i.test(href)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    return anchor;
  }

  /* ------------------------------- DESSINS -------------------------------
     Stickers et rubans sont dessinés ici, en SVG : le site ne charge aucune
     image décorative et tout prend la couleur de son conteneur. */

  var GLYPHS = {
    play: "M8 5v14l11-7-11-7z",
    star: "M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z",
    bolt: "M13 2L4.5 13.5H11l-1 8.5L18.5 10.5H12L13 2z",
    heart: "M12 21S2.8 15.5 2.8 9.4A4.6 4.6 0 0 1 12 7.2a4.6 4.6 0 0 1 9.2 2.2C21.2 15.5 12 21 12 21z",
    check: "M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7 9.5 16.2z",
    clap: "M2.6 7.3 21 4l.5 3L3.1 10.3l-.5-3zM3 12h18v8H3v-8z",
    instagram: [
      "M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z",
      "M16.7 6.2a1 1 0 1 0 0 2.1 1 1 0 0 0 0-2.1Z",
      "M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm2.9 13.5a2.9 2.9 0 0 1-2.9 2.9h-9a2.9 2.9 0 0 1-2.9-2.9v-9a2.9 2.9 0 0 1 2.9-2.9h9a2.9 2.9 0 0 1 2.9 2.9v9Z",
    ],
    youtube:
      "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10.2 15.3V8.7l5.4 3.3-5.4 3.3Z",
  };

  // Le nom lisible d'un logo, pour les lecteurs d'écran.
  var GLYPH_NAMES = { instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok" };

  function glyph(name) {
    var svg = document.createElementNS(SVG, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("aria-hidden", "true");
    var d = GLYPHS[name] || GLYPHS.star;
    (Array.isArray(d) ? d : [d]).forEach(function (segment) {
      var path = document.createElementNS(SVG, "path");
      path.setAttribute("d", segment);
      svg.appendChild(path);
    });
    return svg;
  }

  /**
   * Une rangée de liens. Le premier est le bouton principal — noir plein ;
   * un lien marqué `icon` ne porte que son logo, et son nom part dans
   * aria-label pour les lecteurs d'écran.
   */
  function linkRow(entries, context) {
    var row = el("div", "card__links");
    entries.forEach(function (entry) {
      var pill = el("a", "pill" + (entry.primary ? " pill--filled" : "") + (entry.icon ? " pill--icon" : ""));
      if (entry.icon) {
        pill.appendChild(glyph(entry.icon));
        pill.setAttribute("aria-label", (GLYPH_NAMES[entry.icon] || entry.icon) + " — " + context);
      } else {
        pill.textContent = entry.label;
        pill.setAttribute("aria-label", entry.label + " — " + context);
      }
      link(pill, entry.href);
      row.appendChild(pill);
    });
    return row;
  }

  /** Un sticker : carré arrondi, cerné de noir, posé de travers. */
  function sticker(name, color, style, rotation) {
    var node = el("span", "sticker sticker--" + color);
    node.appendChild(glyph(name));
    node.setAttribute("aria-hidden", "true");
    node.style.cssText = style + ";transform:rotate(" + rotation + "deg)";
    return node;
  }

  /**
   * Le ruban : un tube bleu tracé en SVG. Le volume vient de deux tracés
   * superposés — le corps, puis un reflet plus clair décalé vers le haut —
   * et non d'un dégradé, qui casserait l'aspect papier découpé.
   */
  function ribbon(variant, path) {
    var svg = document.createElementNS(SVG, "svg");
    svg.setAttribute("class", "ribbon ribbon--" + variant);
    svg.setAttribute("viewBox", "0 0 1200 320");
    svg.setAttribute("fill", "none");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("preserveAspectRatio", "none");

    function stroke(width, color, offset) {
      var p = document.createElementNS(SVG, "path");
      p.setAttribute("d", path);
      p.setAttribute("stroke", color);
      p.setAttribute("stroke-width", String(width));
      p.setAttribute("stroke-linecap", "round");
      if (offset) p.setAttribute("transform", "translate(0," + offset + ")");
      svg.appendChild(p);
    }

    stroke(118, "#000000", 0);   // le filet noir, dessiné par-dessous
    stroke(112, "#4da2ff", 0);   // le corps du tube
    stroke(26, "#9ccaff", -26);  // le reflet, à plat

    return svg;
  }

  /* ------------------------------ COMPOSANTS ------------------------------ */

  /** Bandeau défilant. La liste est dupliquée : la boucle ne saute pas. */
  function renderMarquee() {
    var mount = document.getElementById("marquee");
    if (!mount || !SITE.marquee) return;
    mount.className = "marquee";
    var track = el("div", "marquee__track");
    for (var pass = 0; pass < 2; pass++) {
      SITE.marquee.forEach(function (text) {
        track.appendChild(el("span", "marquee__item", text + "  ✦"));
      });
    }
    mount.setAttribute("aria-hidden", "true");
    mount.appendChild(track);
  }

  function renderNav() {
    var mount = document.getElementById("nav");
    if (!mount || !SITE.nav) return;
    mount.className = "nav";

    var brand = el("a", "nav__brand");
    link(brand, SITE.nav.homeHref);

    // Le badge rond porte la photo si elle est fournie, et retombe sur le
    // monogramme sinon — y compris si le fichier manque au chargement.
    var av = SITE.profile.avatar;
    var mark;
    if (av && av.show && av.src) {
      mark = el("img", "nav__mark");
      mark.src = av.src;
      mark.alt = av.alt || SITE.profile.name;
      mark.width = 34;
      mark.height = 34;
      mark.decoding = "async";
      mark.addEventListener("error", function () {
        var fallback = el("span", "nav__mark", SITE.profile.monogram);
        fallback.setAttribute("aria-hidden", "true");
        mark.replaceWith(fallback);
      });
    } else {
      mark = el("span", "nav__mark", SITE.profile.monogram);
      mark.setAttribute("aria-hidden", "true");
    }
    brand.appendChild(mark);
    brand.appendChild(document.createTextNode(SITE.profile.name));
    mount.appendChild(brand);

    var links = el("nav", "nav__links");
    links.setAttribute("aria-label", "Navigation principale");
    (SITE.nav.links || []).forEach(function (item, i) {
      var a = el("a", "pill " + ["pill--sun", "pill--mint", "pill--lavender"][i % 3], item.label);
      link(a, item.href);
      links.appendChild(a);
    });
    mount.appendChild(links);

    if (SITE.nav.cta) {
      var cta = el("a", "pill pill--filled", SITE.nav.cta.label);
      link(cta, SITE.nav.cta.href);
      mount.appendChild(cta);
    }
  }

  // En capitales, É À Ê Ç portent leur accent au-dessus de la hauteur de
  // capitale. Avec un interligne à 0,78, cet accent passe derrière la ligne
  // du dessus et disparaît — les deux sont noirs. Les lignes concernées
  // reçoivent donc un filet d'air, et elles seules.
  var ACCENTED = /[ÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŒÆ]/;

  /** Bloc d'affichage : une ligne par entrée, interligne écrasé. */
  function displayBlock(lines, className, tag) {
    var node = el(tag || "h1", "display" + (className ? " " + className : ""));
    lines.forEach(function (line) {
      var span = el("span", "display__line", line);
      if (ACCENTED.test(line.toUpperCase())) span.classList.add("display__line--accent");
      node.appendChild(span);
    });
    return node;
  }

  function ghostLink(label, href, variant) {
    var a = el("a", "pill" + (variant ? " " + variant : ""), label);
    link(a, href);
    return a;
  }

  /* --------------------------------- HUB --------------------------------- */

  function renderHero() {
    var mount = document.getElementById("hero");
    if (!mount) return;
    mount.className = "band band--sky hero";

    var inner = el("div", "band__inner");

    var p = SITE.profile;

    if (p.status && p.status.show) {
      var pill = el("p", "status");
      var dot = el("span", "status__dot");
      dot.setAttribute("aria-hidden", "true");
      pill.appendChild(dot);
      pill.appendChild(document.createTextNode(p.status.label));
      inner.appendChild(pill);
    }

    var wrap = el("div", "display-wrap");
    wrap.appendChild(ribbon("hero", "M-60 210 C 180 40, 420 300, 660 150 S 1060 20, 1280 140"));
    wrap.appendChild(displayBlock(p.displayLines, "hero__display"));
    inner.appendChild(wrap);
    inner.appendChild(el("p", "tagline", p.tagline));

    var actions = el("div", "hero__actions");
    (SITE.socials || []).forEach(function (s, i) {
      actions.appendChild(
        ghostLink(s.label + " " + s.handle, s.href, i === 0 ? "pill--sun" : "pill--lavender")
      );
    });
    inner.appendChild(actions);

    mount.appendChild(inner);

    // Les stickers sont posés en pourcentages : ils suivent la bande quand
    // elle grandit, sans jamais tomber sur la grille.
    mount.appendChild(sticker("play", "ember", "top:14%;right:8%", -12));
    mount.appendChild(sticker("star", "sun", "bottom:8%;right:6%", 14));
    mount.appendChild(sticker("bolt", "violet", "top:42%;left:-2%", 9));
  }

  function renderFeatured() {
    var mount = document.getElementById("featured");
    if (!mount || !SITE.featured) return;
    mount.className = "band band--paper";

    var inner = el("div", "band__inner");
    var card = el("div", "feature");

    var left = el("div");
    left.appendChild(el("p", "label", SITE.featured.label));
    left.appendChild(displayBlock(SITE.featured.title, "feature__title", "h2"));
    card.appendChild(left);

    var right = el("div");
    right.appendChild(el("p", "lede", SITE.featured.description));
    var list = el("div", "feature__list");
    (SITE.featured.bullets || []).forEach(function (b, i) {
      list.appendChild(el("span", "tag", b));
    });
    right.appendChild(list);
    var go = ghostLink(SITE.featured.cta, SITE.featured.href, "pill--filled");
    go.style.marginTop = "var(--s-5)";
    right.appendChild(go);
    card.appendChild(right);

    inner.appendChild(card);
    mount.appendChild(inner);
    mount.appendChild(sticker("clap", "mint", "bottom:10%;right:5%", -8));
  }

  function projectCard(item) {
    var href = item.href || "";
    var many = item.links && item.links.length;
    // Une carte à plusieurs liens ne peut pas être elle-même un lien : on la
    // laisse en <div> et les pilules du pied portent les destinations.
    var node = el(href && !many ? "a" : "div", "card card--" + (item.color || "mist"));
    if (href && !many) link(node, href);
    else if (!many) node.classList.add("card--soon");

    var head = el("div", "card__head");
    if (item.logo) {
      var frame = el("span", "card__logo");
      var img = el("img");
      img.src = item.logo;
      img.alt = "";
      img.width = 44;
      img.height = 44;
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () {
        frame.remove();
      });
      frame.appendChild(img);
      head.appendChild(frame);
    }
    head.appendChild(el("h3", "card__title", item.title));
    node.appendChild(head);

    node.appendChild(el("p", "card__desc", item.description));

    if (many) {
      node.appendChild(linkRow(item.links, item.title));
    } else {
      var foot = el("div", "card__foot");
      if (href) {
        var arrow = el("span", "card__arrow", "↗");
        arrow.setAttribute("aria-hidden", "true");
        foot.appendChild(arrow);
      } else {
        foot.appendChild(el("span", "tag", "Bientôt"));
      }
      node.appendChild(foot);
    }

    return node;
  }

  function renderProjects() {
    var mount = document.getElementById("projects");
    if (!mount || !SITE.projects) return;
    mount.className = "band band--concrete";
    mount.id = "projects";

    var inner = el("div", "band__inner");
    var head = el("div");
    head.style.marginBottom = "var(--s-10)";
    var title = el("h2", "heading", SITE.projects.title);
    title.id = "projets";
    head.appendChild(title);
    if (SITE.projects.intro) head.appendChild(el("p", "lede", SITE.projects.intro));
    inner.appendChild(head);

    var grid = el("div", "grid");
    (SITE.projects.items || []).forEach(function (item) {
      grid.appendChild(projectCard(item));
    });
    inner.appendChild(grid);
    mount.appendChild(inner);
  }

  function renderFooter() {
    var mount = document.getElementById("footer");
    if (!mount || !SITE.footer) return;
    mount.className = "footer";
    mount.appendChild(el("span", null, SITE.footer.text));

    var right = el("div", "feature__list");
    (SITE.socials || []).forEach(function (s) {
      right.appendChild(ghostLink(s.label, s.href));
    });
    mount.appendChild(right);
    mount.appendChild(el("span", null, SITE.footer.note));
  }

  /* ------------------------------- MONTAGE ------------------------------- */

  function mailto(email) {
    return (
      "mailto:" +
      email.address +
      (email.subject ? "?subject=" + encodeURIComponent(email.subject) : "")
    );
  }

  function renderMontageHero() {
    var mount = document.getElementById("hero");
    if (!mount) return;
    var M = SITE.montage;
    mount.className = "band band--sky hero";

    var inner = el("div", "band__inner");
    inner.appendChild(el("p", "label", M.hero.label));
    var wrap = el("div", "display-wrap");
    wrap.appendChild(ribbon("hero", "M-60 240 C 220 90, 380 280, 640 170 S 1020 60, 1280 190"));
    wrap.appendChild(displayBlock(M.hero.title, "hero__display"));
    inner.appendChild(wrap);
    inner.appendChild(el("p", "lede", M.hero.lede));

    var actions = el("div", "hero__actions");
    actions.appendChild(ghostLink(M.contact.email.label, mailto(M.contact.email), "pill--filled"));
    actions.appendChild(ghostLink(M.contact.instagram.label, M.contact.instagram.href, "pill--lavender"));
    inner.appendChild(actions);

    mount.appendChild(inner);
    mount.appendChild(sticker("clap", "ember", "top:16%;right:9%", -10));
    mount.appendChild(sticker("heart", "lavender", "bottom:6%;right:5%", 12));
  }

  function renderServices() {
    var mount = document.getElementById("services");
    if (!mount) return;
    var S = SITE.montage.services;
    mount.className = "band band--paper";

    var inner = el("div", "band__inner");
    var title = el("h2", "heading", S.title);
    title.style.marginBottom = "var(--s-10)";
    inner.appendChild(title);

    var grid = el("div", "services");
    S.items.forEach(function (item, i) {
      var block = el("div", "service card--" + (item.color || "mist"));
      var index = el("span", "service__index", String(i + 1).padStart(2, "0"));
      index.setAttribute("aria-hidden", "true");
      block.appendChild(index);
      block.appendChild(el("h3", "service__title", item.title));
      block.appendChild(el("p", "service__desc", item.description));
      grid.appendChild(block);
    });
    inner.appendChild(grid);
    mount.appendChild(inner);
  }

  /** Une carte artiste : son nom, ce qu'on fait ensemble, ses chaînes. */
  function artistCard(item) {
    var node = el("div", "card card--" + (item.color || "mist"));

    if (item.image) {
      var frame = el("div", "artist__image");
      var img = el("img");
      img.src = item.image;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () {
        frame.remove();
      });
      frame.appendChild(img);
      node.appendChild(frame);
    }

    node.appendChild(el("h3", "card__title", item.name));
    if (item.note) node.appendChild(el("p", "card__desc", item.note));
    if (item.links) node.appendChild(linkRow(item.links, item.name));
    return node;
  }

  /** Une tuile de la grille « Réalisations ». */
  function workTile(item) {
    var figure = el("figure", "work");

    if (item.kind === "youtube" && item.videoId) {
      var frame = el("div", "work__media");
      var iframe = document.createElement("iframe");
      // youtube-nocookie : aucun cookie publicitaire posé avant lecture.
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(item.videoId) + "?rel=0";
      iframe.title = item.title || "Vidéo";
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; clipboard-write; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      frame.appendChild(iframe);
      figure.appendChild(frame);
    } else if (item.kind === "instagram" && item.href) {
      var a = el("a", "work__media work__media--vertical");
      link(a, item.href);
      if (item.thumb) {
        var img = el("img");
        img.src = item.thumb;
        img.alt = item.title || "";
        img.loading = "lazy";
        img.style.cssText = "width:100%;height:100%;object-fit:cover";
        img.addEventListener("error", function () {
          img.remove();
          a.classList.add("work__empty");
        });
        a.appendChild(img);
      } else {
        a.classList.add("work__empty");
      }
      a.appendChild(el("span", "work__badge", "Voir sur Instagram"));
      figure.appendChild(a);
    } else {
      var slot = el("div", "work__media work__empty");
      slot.appendChild(el("span", null, "Emplacement libre"));
      figure.appendChild(slot);
    }

    var caption = el("figcaption");
    if (item.title) caption.appendChild(el("span", "work__title", item.title));
    if (item.caption) {
      caption.appendChild(document.createElement("br"));
      caption.appendChild(el("span", "work__meta", item.caption));
    }
    figure.appendChild(caption);
    return figure;
  }

  /**
   * Les réalisations, et les chaînes des artistes dans une colonne à côté :
   * une sélection montrée ici, et où aller voir le reste.
   */
  function renderWorks() {
    var mount = document.getElementById("works");
    var W = SITE.montage.works;
    if (!mount || !W) return;
    mount.className = "band band--concrete";

    var inner = el("div", "band__inner");
    var head = el("div");
    head.style.marginBottom = "var(--s-10)";
    head.appendChild(el("h2", "heading", W.title));
    if (W.intro) head.appendChild(el("p", "lede", W.intro));
    inner.appendChild(head);

    var layout = el("div", "works-layout");

    var grid = el("div", "works");
    W.items
      .filter(function (item) {
        if (W.showEmptySlots !== false) return true;
        return (item.kind === "youtube" && item.videoId) ||
          (item.kind === "instagram" && item.href);
      })
      .forEach(function (item) {
        grid.appendChild(workTile(item));
      });
    layout.appendChild(grid);

    var A = SITE.montage.artists;
    if (A && A.items && A.items.length) {
      var aside = el("aside", "channels");
      aside.setAttribute("aria-label", A.title);
      aside.appendChild(el("h3", "channels__title", A.title));
      A.items.forEach(function (item) {
        aside.appendChild(artistCard(item));
      });
      layout.appendChild(aside);
    }

    inner.appendChild(layout);
    mount.appendChild(inner);
  }

  /**
   * Le bouton « copier ». Il confirme lui-même : un bouton muet se fait
   * appuyer trois fois.
   */
  function copyButton(email) {
    var button = el("button", "pill", email.copyLabel);
    button.type = "button";
    var timer;

    function done() {
      button.textContent = email.copiedLabel;
      button.classList.add("is-done");
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        button.textContent = email.copyLabel;
        button.classList.remove("is-done");
      }, 2200);
    }

    function fallback() {
      var field = document.createElement("input");
      field.value = email.address;
      field.setAttribute("readonly", "");
      field.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand("copy");
        done();
      } catch (err) {
        window.prompt("Copie cette adresse :", email.address);
      }
      field.remove();
    }

    button.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email.address).then(done, fallback);
      } else {
        fallback();
      }
    });

    return button;
  }

  function renderContact() {
    var mount = document.getElementById("contact");
    if (!mount) return;
    var C = SITE.montage.contact;
    mount.className = "band band--paper";

    var inner = el("div", "band__inner");
    var panel = el("div", "contact");

    panel.appendChild(displayBlock(C.title, "display--sm", "h2"));
    panel.appendChild(el("p", "lede", C.description));

    var actions = el("div", "contact__actions");
    actions.appendChild(ghostLink(C.email.label + " — " + C.email.address, mailto(C.email), "pill--sun"));
    actions.appendChild(copyButton(C.email));
    actions.appendChild(ghostLink(C.instagram.label, C.instagram.href, "pill--mint"));
    panel.appendChild(actions);

    inner.appendChild(panel);
    mount.appendChild(inner);
    mount.appendChild(sticker("check", "mint", "top:12%;right:7%", 10));
  }

  /* ------------------------------ AIGUILLAGE ----------------------------- */

  function start() {
    renderMarquee();
    renderNav();

    var page = document.body.getAttribute("data-page");
    if (page === "hub") {
      renderHero();
      renderFeatured();
      renderProjects();
    } else if (page === "montage") {
      renderMontageHero();
      renderServices();
      renderWorks();
      renderContact();
    }

    renderFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
