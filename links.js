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
   partagé serait vide. Ces balises sont commentées dans chaque .html.
   ========================================================================== */

const SITE = {
  /* ---------------------------------------------------------------------------
     1. IDENTITÉ (page d'accueil)
     ------------------------------------------------------------------------ */
  profile: {
    // Ton nom d'artiste, tel que les gens te connaissent.
    name: "Forrest The Dump",
    // Une ligne, courte. Ce que tu fais, pas ton CV.
    tagline: "Monteur vidéo & développeur — je monte des clips et je construis des apps.",
    // La pastille sous le nom. Mets show à false quand tu es complet : une
    // disponibilité affichée en permanence ne veut plus rien dire.
    status: {
      show: true,
      label: "Dispo pour de nouveaux projets",
    },
    // Affiché tant qu'aucune photo n'est fournie. Deux caractères maximum,
    // sinon ça déborde du cercle.
    monogram: "4D",
    avatar: {
      // Dépose ton image dans assets/ (carrée, 400x400 suffit), puis passe
      // show à true. Tant que show vaut false, c'est le monogramme qui
      // s'affiche — et aucune requête n'est faite.
      show: false,
      src: "assets/avatar.png",
      alt: "Portrait de Forrest The Dump", // texte lu par les lecteurs d'écran
    },
  },

  /* ---------------------------------------------------------------------------
     2. BOUTON MIS EN AVANT (page d'accueil)
     Le seul bouton coloré de la page. Il envoie vers la page client.
     ------------------------------------------------------------------------ */
  featured: {
    eyebrow: "Travailler avec moi",
    title: "Montage vidéo & clipping",
    description: "Clips, formats courts, longs formats — voir mes réalisations et me contacter.",
    href: "montage.html",
    // Lien interne : pas de nouvel onglet.
    external: false,
  },

  /* ---------------------------------------------------------------------------
     3. RÉSEAUX (page d'accueil)
     icon : "youtube", "instagram", "tiktok", "github", "mail" ou "link".
     handle : facultatif, mais c'est ce qui permet de te reconnaître.
     ------------------------------------------------------------------------ */
  socials: {
    title: "Réseaux",
    items: [
      {
        title: "YouTube",
        description: "Mes vidéos et mes montages longs.",
        handle: "@throughmorpheus",
        icon: "youtube",
        href: "https://www.youtube.com/@throughmorpheus",
      },
      {
        title: "Instagram",
        description: "Clips, formats verticaux, coulisses.",
        handle: "@4restdump_",
        icon: "instagram",
        href: "https://www.instagram.com/4restdump_/",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     4. PROJETS (page d'accueil)
     Pour ajouter un projet : copie un bloc { } et complète-le.
     Pour en retirer un : supprime son bloc. L'ordre du tableau = l'ordre affiché.

     Un projet sans href reste affiché, mais en carte non cliquable avec une
     étiquette « Bientôt » : ça a l'air voulu, alors qu'un lien mort a l'air
     cassé. Dès que tu colles une URL, la carte devient cliquable toute seule.

     `logo` prend le chemin d'une image dans assets/logos/ : l'icône de l'app
     s'affiche alors à la place du carré vide, avec son propre fond. Sans
     logo, la carte reste alignée avec les autres — rien ne se décale.
     ------------------------------------------------------------------------ */
  projects: {
    title: "Projets",
    items: [
      {
        title: "Kura",
        description: "Découverte sociale par affinités culturelles : cinéma et musique.",
        tag: "iOS · SwiftUI",
        logo: "assets/logos/kura.png",
        href: "https://thekura.netlify.app/",
      },
      {
        title: "TerraTrails",
        description: "Décrire, générer, partir : l'itinéraire de rando se construit à partir de ta description.",
        tag: "iOS · SwiftUI",
        logo: "assets/logos/terratrails.png",
        href: "", // TODO : le site existe en local, colle son URL quand il est en ligne.
      },
      {
        title: "Bloked",
        description: "Tu déclares tes tâches la veille ; le lendemain, tes applis restent bloquées jusqu'à ce que tu les coches.",
        tag: "iOS",
        logo: "assets/logos/bloked.png",
        href: "", // TODO
      },
      {
        title: "Mention",
        description: "Moyennes, paliers et projections : la mention que tu peux viser, calculée à l'avance.",
        tag: "iOS",
        logo: "assets/logos/mention.png",
        href: "", // TODO
      },
      {
        title: "City Explorer",
        description: "Découvrir une ville comme quelqu'un qui y habite, pas comme un touriste.", // TODO
        tag: "iOS",
        href: "", // TODO
      },
      {
        title: "WikiMusic",
        description: "Chercher un artiste, remonter sa discographie, ouvrir le morceau.", // TODO
        tag: "Web",
        href: "", // TODO
      },
      {
        title: "Weather",
        description: "Application météo : l'essentiel en un écran, sans pub ni compte.", // TODO
        tag: "iOS",
        href: "", // TODO
      },
      {
        title: "Clipo",
        description: "Découper un long format en clips prêts à publier.", // TODO
        tag: "Outil",
        href: "", // TODO
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     5. PIED DE PAGE (page d'accueil)
     ------------------------------------------------------------------------ */
  hubFooter: {
    text: "© 2026 Forrest The Dump",
    note: "Fait à la main. Aucun tracker, aucun cookie.",
  },

  /* ---------------------------------------------------------------------------
     6. PAGE MONTAGE (montage.html)
     ------------------------------------------------------------------------ */
  montage: {
    // -- Barre haute, collée en haut pendant tout le défilement -------------
    topbar: {
      brand: "Forrest The Dump",
      backHref: "index.html",
      ctaLabel: "M'écrire",
    },

    // -- En-tête ------------------------------------------------------------
    header: {
      eyebrow: "Montage vidéo & clipping",           // petit surtitre
      title: "Je transforme tes rushes en vidéos qu'on regarde jusqu'au bout.",
      lede:
        "Je monte des clips, des formats courts et des vidéos longues pour des artistes " +
        "et des créateurs. Tu m'envoies les rushes, je te rends un fichier prêt à publier.", // TODO : réécris-le avec tes mots.
    },

    // -- Ce que je propose : exactement 3 blocs courts ----------------------
    services: {
      title: "Ce que je propose",
      items: [
        {
          title: "Clips",
          description:
            "Montage rythmé sur le morceau, étalonnage, effets. Tu reçois le master " +
            "dans le format de ton choix, plus une version verticale pour les réseaux.", // TODO
        },
        {
          title: "Formats courts (vertical)",
          description:
            "Reels, Shorts, TikTok : accroche dans les deux premières secondes, " +
            "sous-titres calés à la voix, coupes au rythme.", // TODO
        },
        {
          title: "Montage long format",
          description:
            "Vidéos YouTube, documentaires courts, interviews. Construction du récit, " +
            "nettoyage du son, habillage.", // TODO
        },
      ],
    },

    // -- Réalisations : 4 emplacements --------------------------------------
    //    kind: "youtube"   → videoId = l'identifiant de la vidéo.
    //                        Dans https://www.youtube.com/watch?v=ABC123xyz
    //                        l'identifiant est ABC123xyz (après "v=").
    //    kind: "instagram" → href = l'URL du post ou du reel.
    //                        thumb = une image que tu déposes dans assets/
    //                        (Instagram ne permet pas d'intégrer une vidéo
    //                         sans charger ses scripts de suivi : on met donc
    //                         une vignette cliquable, sans tracker.)
    //    kind: "empty"     → emplacement réservé, affiché en pointillés.
    works: {
      title: "Réalisations",
      description: "Une sélection. Le reste est sur mes réseaux.",
      // Les emplacements encore vides s'affichent en pointillés tant que tu
      // remplis la page. Passe à false avant d'envoyer le lien à un client :
      // un cadre « emplacement libre » sur une page commerciale, ça se voit.
      showEmptySlots: true,
      items: [
        {
          kind: "youtube",
          videoId: "", // TODO : identifiant de la vidéo YouTube.
          title: "Titre de la réalisation", // TODO
          caption: "Client / type de projet / année", // TODO
        },
        {
          kind: "youtube",
          videoId: "", // TODO
          title: "Titre de la réalisation", // TODO
          caption: "Client / type de projet / année", // TODO
        },
        {
          kind: "instagram",
          href: "https://www.instagram.com/4restdump_/", // TODO : URL du reel précis.
          thumb: "", // TODO (facultatif) : "assets/reel-1.jpg"
          title: "Reel — titre", // TODO
          caption: "Format vertical / année", // TODO
        },
        {
          kind: "instagram",
          href: "https://www.instagram.com/4restdump_/", // TODO
          thumb: "", // TODO (facultatif)
          title: "Reel — titre", // TODO
          caption: "Format vertical / année", // TODO
        },
      ],
    },

    // -- Contact ------------------------------------------------------------
    contact: {
      title: "Travailler ensemble",
      description:
        "Dis-moi le format, la durée et la deadline, je te réponds avec un prix et un délai.",
      email: {
        // Adresse publique, volontairement dédiée : elle est lisible dans le
        // code source de la page, comme toute adresse en mailto:.
        address: "contact@4restdump.com",
        subject: "Projet de montage — Forrest The Dump", // pré-rempli dans le mail
        label: "M'écrire par e-mail",
        // Le bouton « copier » à côté : pratique sur mobile, où mailto: ouvre
        // parfois une application que personne n'utilise.
        copyLabel: "Copier l'adresse",
        copiedLabel: "Adresse copiée",
      },
      instagram: {
        // Instagram n'a pas d'URL de DM direct fiable : on envoie sur le profil.
        href: "https://www.instagram.com/4restdump_/",
        label: "M'écrire en DM",
      },
    },

    // -- Retour discret vers le hub ----------------------------------------
    back: {
      label: "Retour à l'accueil",
      href: "index.html",
    },
  },
};

/* =============================================================================
   MOTEUR DE RENDU — tu n'as normalement pas à modifier ce qui suit.
   Il lit SITE et remplit les emplacements des deux pages.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");

  /* Deux préférences système, lues une fois. Elles conditionnent tout ce qui
     bouge plus bas : on ne fabrique même pas les observateurs si l'utilisateur
     a demandé moins de mouvement. */
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer =
    window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /** Crée un élément, avec classe et texte optionnels. */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* --------------------------------- ICÔNES ------------------------------
     Dessinées ici, en SVG, plutôt que chargées depuis une librairie : le site
     ne fait toujours que trois requêtes, et les icônes prennent la couleur du
     texte qui les entoure. */
  var PATHS = {
    youtube:
      "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10.2 15.3V8.7l5.4 3.3-5.4 3.3Z",
    instagram: [
      "M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z",
      "M16.7 6.2a1 1 0 1 0 0 2.1 1 1 0 0 0 0-2.1Z",
      "M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm2.9 13.5a2.9 2.9 0 0 1-2.9 2.9h-9a2.9 2.9 0 0 1-2.9-2.9v-9a2.9 2.9 0 0 1 2.9-2.9h9a2.9 2.9 0 0 1 2.9 2.9v9Z",
    ],
    tiktok:
      "M16.5 3c.3 2.1 1.5 3.4 3.5 3.5v2.3c-1.2.1-2.3-.2-3.4-.9v5.9c0 4.6-5 6-7 2.6-1.3-2.2-.5-6 3.9-6.2v2.4c-.3 0-.7.1-1 .2-1 .3-1.5 1-1.4 2 .3 2 3.9 2.6 3.6-1.3V3h1.8Z",
    github:
      "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
    mail: [
      "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.5l-8 5-8-5V6h16Zm0 12H4V8.8l7.5 4.7c.3.2.7.2 1 0L20 8.8V18Z",
    ],
    copy: [
      "M9 3h9a2 2 0 0 1 2 2v9h-2V5H9V3Z",
      "M6 7h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm0 2v10h9V9H6Z",
    ],
    check: "M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7 9.5 16.2Z",
    link: "M10.6 13.4a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 0 1 1.4 1.4l-1.4 1.4a1 1 0 0 1-1.4 0Zm-3.5 4.9a4 4 0 0 1 0-5.7l2.1-2.1 1.4 1.4-2.1 2.1a2 2 0 0 0 2.8 2.8l2.1-2.1 1.4 1.4-2.1 2.1a4 4 0 0 1-5.6 0Zm9.8-9.8-2.1 2.1-1.4-1.4 2.1-2.1a2 2 0 0 0-2.8-2.8l-2.1 2.1L9.2 5l2.1-2.1a4 4 0 0 1 5.7 5.6Z",
    arrow: "M13.2 5.6 11.8 7l4 4H4v2h11.8l-4 4 1.4 1.4L19.6 12l-6.4-6.4Z",
    back: "M10.8 18.4 12.2 17l-4-4H20v-2H8.2l4-4-1.4-1.4L4.4 12l6.4 6.4Z",
  };

  /** Fabrique une icône SVG à partir de PATHS. */
  function icon(name) {
    var d = PATHS[name];
    if (!d) return null;
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "icon");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    (Array.isArray(d) ? d : [d]).forEach(function (segment) {
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", segment);
      svg.appendChild(path);
    });
    return svg;
  }

  /** Vrai si l'URL sort du site (http/https/mailto). */
  function isExternal(href) {
    return /^(https?:|mailto:)/i.test(href);
  }

  /** Applique href + sécurité des liens sortants. */
  function link(anchor, href, external) {
    anchor.href = href;
    var out = external === undefined ? isExternal(href) : external;
    if (out && !/^mailto:/i.test(href)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    return anchor;
  }

  /* ------------------------- LE HALO QUI SUIT LE CURSEUR ------------------
     Une seule paire de variables CSS posée sur la carte survolée. On écrit
     directement sur l'élément visé (jamais sur un parent : une variable CSS
     posée haut dans l'arbre force le recalcul de tous ses descendants). */
  function trackPointer(node) {
    if (!finePointer || reduceMotion) return;
    node.addEventListener(
      "pointermove",
      function (event) {
        var box = node.getBoundingClientRect();
        node.style.setProperty("--mx", (event.clientX - box.left) + "px");
        node.style.setProperty("--my", (event.clientY - box.top) + "px");
      },
      { passive: true }
    );
  }

  /* ------------------------------ ENTRÉE EN SCÈNE ------------------------
     Chaque bloc s'affiche quand il entre dans l'écran, décalé sur son voisin.
     Purement décoratif : le contenu est déjà dans le DOM, déjà lisible par un
     lecteur d'écran, et déjà cliquable. */
  var revealIndex = 0;
  var observer =
    !reduceMotion && "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries, obs) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-in");
              obs.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
        )
      : null;

  function reveal(node, order) {
    if (!observer) return node;
    node.classList.add("reveal");
    var rank = order === undefined ? revealIndex++ : order;
    // Le décalage est plafonné : au-delà de six éléments, on n'attend plus.
    node.style.setProperty("--reveal-delay", Math.min(rank, 6) * 45 + "ms");
    observer.observe(node);
    return node;
  }

  /* --------------------------------- CARTES ------------------------------ */

  /**
   * Une carte du hub. Elle devient un <a> si l'item a une URL, et un <div>
   * sinon — un projet pas encore en ligne n'est pas un lien cassé, c'est un
   * projet pas encore en ligne.
   */
  function card(item, variant) {
    var href = item.href || "";
    var node = el(href ? "a" : "div", "card" + (variant ? " card--" + variant : ""));
    if (href) link(node, href, item.external);
    else node.classList.add("is-placeholder");

    // Le logo d'une app passe avant l'icône générique : c'est le vrai signe
    // de reconnaissance. Si le fichier manque, le carré disparaît au lieu
    // d'afficher une image cassée, et la carte reste alignée sur les autres.
    if (item.logo) {
      var frame = el("span", "card__icon card__icon--logo");
      var shot = el("img");
      shot.src = item.logo;
      shot.alt = "";
      shot.width = 38;
      shot.height = 38;
      shot.loading = "lazy";
      shot.decoding = "async";
      shot.addEventListener("error", function () {
        frame.remove();
      });
      frame.appendChild(shot);
      node.appendChild(frame);
    } else if (item.icon) {
      var badge = el("span", "card__icon");
      var glyph = icon(item.icon);
      if (glyph) badge.appendChild(glyph);
      node.appendChild(badge);
    }

    var body = el("div", "card__body");
    if (item.eyebrow) body.appendChild(el("span", "card__eyebrow", item.eyebrow));
    body.appendChild(el("span", "card__title", item.title));
    if (item.description) body.appendChild(el("span", "card__desc", item.description));
    if (item.handle) body.appendChild(el("span", "card__handle", item.handle));
    if (item.tag) {
      var meta = el("div", "card__meta");
      meta.appendChild(el("span", "card__tag", item.tag));
      body.appendChild(meta);
    }
    node.appendChild(body);

    if (href) {
      var chevron = el("span", "card__chevron");
      var arrow = icon("arrow");
      if (variant === "featured" && arrow) chevron.appendChild(arrow);
      else chevron.textContent = "→";
      chevron.setAttribute("aria-hidden", "true");
      node.appendChild(chevron);
    } else {
      node.appendChild(el("span", "chip", "Bientôt"));
    }

    trackPointer(node);
    return node;
  }

  /** Section titrée du hub, reliée à son titre pour les lecteurs d'écran. */
  function group(mount, data, idBase, layout) {
    if (!mount || !data) return;
    var heading = el("h2", "group__title", data.title);
    heading.id = idBase + "-title";
    mount.setAttribute("aria-labelledby", heading.id);
    mount.appendChild(reveal(heading));

    var list = el("ul", layout === "grid" ? "grid-2" : "stack");
    (data.items || []).forEach(function (item, i) {
      var li = el("li");
      li.appendChild(card(item));
      list.appendChild(reveal(li, i));
      revealIndex = 0;
    });
    mount.appendChild(list);
  }

  /* --------------------------------- HUB --------------------------------- */

  function renderHub() {
    var profile = document.getElementById("profile");
    if (profile && SITE.profile) {
      var av = SITE.profile.avatar;

      /** Le monogramme, replié dessus si la photo manque ou ne charge pas. */
      function monogram() {
        if (!SITE.profile.monogram) return null;
        var mark = el("div", "monogram", SITE.profile.monogram);
        mark.setAttribute("aria-hidden", "true");
        return mark;
      }

      if (av && av.show && av.src) {
        var img = el("img", "avatar");
        img.src = av.src;
        img.alt = av.alt || "";
        img.width = 96;
        img.height = 96;
        img.decoding = "async";
        // Si le fichier n'existe pas encore, on retombe sur le monogramme
        // plutôt que d'afficher une icône cassée.
        img.addEventListener("error", function () {
          var mark = monogram();
          if (mark) img.replaceWith(mark);
          else img.remove();
        });
        profile.appendChild(img);
      } else {
        var mark = monogram();
        if (mark) profile.appendChild(mark);
      }

      profile.appendChild(el("h1", "name", SITE.profile.name));
      profile.appendChild(el("p", "tagline", SITE.profile.tagline));

      var status = SITE.profile.status;
      if (status && status.show && status.label) {
        var pill = el("p", "status");
        var dot = el("span", "status__dot");
        dot.setAttribute("aria-hidden", "true");
        pill.appendChild(dot);
        pill.appendChild(document.createTextNode(status.label));
        profile.appendChild(pill);
      }
    }

    var featured = document.getElementById("featured");
    if (featured && SITE.featured) {
      featured.appendChild(reveal(card(SITE.featured, "featured")));
    }

    group(document.getElementById("socials"), SITE.socials, "socials", "grid");
    group(document.getElementById("projects"), SITE.projects, "projects");

    var footer = document.getElementById("footer");
    if (footer && SITE.hubFooter) {
      var text = el("p", "footer__text", SITE.hubFooter.text);
      if (SITE.hubFooter.note) {
        text.appendChild(el("span", "footer__note", SITE.hubFooter.note));
      }
      footer.appendChild(text);
    }
  }

  /* ------------------------------- MONTAGE ------------------------------- */

  /** Une tuile de la grille « Réalisations ». */
  function work(item) {
    var figure = el("figure", "work");

    if (item.kind === "youtube" && item.videoId) {
      var frame = el("div", "work__media work__media--video");
      var iframe = document.createElement("iframe");
      // youtube-nocookie : pas de cookie publicitaire posé avant lecture.
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(item.videoId) +
        "?rel=0";
      iframe.title = item.title || "Vidéo YouTube";
      iframe.loading = "lazy";
      iframe.allow =
        "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      frame.appendChild(iframe);
      figure.appendChild(frame);
    } else if (item.kind === "instagram" && item.href) {
      var a = el("a", "work__media work__media--link");
      link(a, item.href);
      if (item.thumb) {
        var img = el("img", "work__thumb");
        img.src = item.thumb;
        img.alt = item.title || "";
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("error", function () {
          img.remove();
          a.classList.add("work__media--bare");
        });
        a.appendChild(img);
      } else {
        a.classList.add("work__media--bare");
      }
      a.appendChild(el("span", "work__badge", "Voir sur Instagram →"));
      trackPointer(a);
      figure.appendChild(a);
    } else {
      // Emplacement encore vide : visible mais neutre.
      var slot = el("div", "work__media work__media--empty");
      slot.appendChild(el("span", "work__slot", "Emplacement libre"));
      figure.appendChild(slot);
    }

    var caption = el("figcaption", "work__caption");
    if (item.title) caption.appendChild(el("span", "work__title", item.title));
    if (item.caption) caption.appendChild(el("span", "work__meta", item.caption));
    figure.appendChild(caption);
    return figure;
  }

  /** L'adresse e-mail, assemblée en mailto: avec son objet pré-rempli. */
  function mailtoFrom(email) {
    return (
      "mailto:" +
      email.address +
      (email.subject ? "?subject=" + encodeURIComponent(email.subject) : "")
    );
  }

  /**
   * Le bouton « copier l'adresse ». Il confirme lui-même ce qu'il a fait :
   * un bouton qui ne dit rien laisse l'utilisateur appuyer trois fois.
   */
  function copyButton(email) {
    var button = el("button", "btn");
    button.type = "button";

    var label = el("span", "btn__label");
    function fill(text, glyph) {
      label.textContent = "";
      var svg = icon(glyph);
      if (svg) label.appendChild(svg);
      label.appendChild(document.createTextNode(text));
    }
    fill(email.copyLabel || "Copier l'adresse", "copy");
    button.appendChild(label);

    var resetTimer;
    button.addEventListener("click", function () {
      function confirm() {
        // On coupe le texte pendant qu'il est flou, jamais pendant qu'il est
        // lisible : on ne doit jamais voir les deux libellés en même temps.
        button.classList.add("is-swapping");
        window.setTimeout(function () {
          fill(email.copiedLabel || "Adresse copiée", "check");
          button.classList.remove("is-swapping");
          button.classList.add("is-done");
        }, 180);

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
          button.classList.add("is-swapping");
          window.setTimeout(function () {
            fill(email.copyLabel || "Copier l'adresse", "copy");
            button.classList.remove("is-swapping", "is-done");
          }, 180);
        }, 2200);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email.address).then(confirm, fallback);
      } else {
        fallback();
      }

      // Sans API presse-papiers (contexte non sécurisé, vieux navigateur),
      // on sélectionne l'adresse pour que l'utilisateur puisse la copier.
      function fallback() {
        var field = document.createElement("input");
        field.value = email.address;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        try {
          document.execCommand("copy");
          confirm();
        } catch (err) {
          window.prompt("Copie cette adresse :", email.address);
        }
        field.remove();
      }
    });

    trackPointer(button);
    return button;
  }

  /** La barre haute, et le filet qui n'apparaît qu'une fois qu'elle chevauche. */
  function renderTopbar(data) {
    var mount = document.getElementById("topbar");
    if (!mount || !data) return;

    var inner = el("div", "topbar__inner");

    var brand = el("a", "topbar__brand");
    link(brand, data.backHref || "index.html", false);
    var back = el("span", "topbar__back");
    var glyph = icon("back");
    if (glyph) back.appendChild(glyph);
    back.setAttribute("aria-hidden", "true");
    brand.appendChild(back);
    brand.appendChild(document.createTextNode(data.brand || ""));
    inner.appendChild(brand);

    var contact = SITE.montage.contact;
    if (data.ctaLabel && contact && contact.email && contact.email.address) {
      var cta = el("a", "chip-btn", data.ctaLabel);
      link(cta, mailtoFrom(contact.email));
      inner.appendChild(cta);
    }

    mount.appendChild(inner);

    // Un repère invisible d'un pixel, juste au-dessus de la barre : tant qu'il
    // est visible, la barre ne chevauche rien et reste sans filet.
    if ("IntersectionObserver" in window) {
      var sentinel = el("div");
      sentinel.style.cssText = "position:absolute;top:0;height:1px;width:100%;";
      document.body.prepend(sentinel);
      new IntersectionObserver(function (entries) {
        mount.classList.toggle("is-stuck", !entries[0].isIntersecting);
      }).observe(sentinel);
    }
  }

  function renderMontage() {
    var M = SITE.montage;
    if (!M) return;

    renderTopbar(M.topbar);

    var header = document.getElementById("montage-header");
    if (header) {
      if (M.header.eyebrow) header.appendChild(reveal(el("p", "eyebrow", M.header.eyebrow)));
      header.appendChild(reveal(el("h1", "display", M.header.title)));
      header.appendChild(reveal(el("p", "lede", M.header.lede)));

      // Les deux actions sont répétées en haut : un client ne doit pas avoir à
      // faire défiler toute la page pour trouver comment te joindre.
      var contact = M.contact;
      if (contact) {
        var row = el("div", "hero-actions");
        if (contact.email && contact.email.address) {
          var mail = el("a", "btn btn--accent");
          var mailLabel = el("span", "btn__label");
          var mailIcon = icon("mail");
          if (mailIcon) mailLabel.appendChild(mailIcon);
          mailLabel.appendChild(document.createTextNode(contact.email.label));
          mail.appendChild(mailLabel);
          link(mail, mailtoFrom(contact.email));
          trackPointer(mail);
          row.appendChild(mail);
        }
        if (contact.instagram && contact.instagram.href) {
          var dm = el("a", "btn");
          var dmLabel = el("span", "btn__label");
          var dmIcon = icon("instagram");
          if (dmIcon) dmLabel.appendChild(dmIcon);
          dmLabel.appendChild(document.createTextNode(contact.instagram.label));
          dm.appendChild(dmLabel);
          link(dm, contact.instagram.href);
          trackPointer(dm);
          row.appendChild(dm);
        }
        if (row.childNodes.length) header.appendChild(reveal(row));
      }
    }

    var services = document.getElementById("services");
    if (services && M.services) {
      var h = el("h2", "section__title", M.services.title);
      h.id = "services-title";
      services.setAttribute("aria-labelledby", h.id);
      services.appendChild(reveal(h));
      var grid = el("div", "grid grid--three");
      M.services.items.forEach(function (s, i) {
        var block = el("div", "block");
        var index = el("span", "block__index", String(i + 1).padStart(2, "0"));
        index.setAttribute("aria-hidden", "true");
        block.appendChild(index);
        block.appendChild(el("h3", "block__title", s.title));
        block.appendChild(el("p", "block__desc", s.description));
        trackPointer(block);
        grid.appendChild(reveal(block, i));
      });
      services.appendChild(grid);
    }

    var works = document.getElementById("works");
    if (works && M.works) {
      var wh = el("h2", "section__title", M.works.title);
      wh.id = "works-title";
      works.setAttribute("aria-labelledby", wh.id);
      works.appendChild(reveal(wh));
      if (M.works.description) {
        works.appendChild(reveal(el("p", "section__desc", M.works.description)));
      }
      var wgrid = el("div", "grid grid--two");
      M.works.items
        .filter(function (item) {
          if (M.works.showEmptySlots !== false) return true;
          // Un emplacement est « rempli » s'il a de quoi afficher un média.
          return (item.kind === "youtube" && item.videoId) ||
            (item.kind === "instagram" && item.href);
        })
        .forEach(function (item, i) {
          wgrid.appendChild(reveal(work(item), i));
        });
      works.appendChild(wgrid);
    }

    var contactMount = document.getElementById("contact");
    if (contactMount && M.contact) {
      var panel = el("div", "panel");
      var ch = el("h2", "panel__title", M.contact.title);
      ch.id = "contact-title";
      contactMount.setAttribute("aria-labelledby", ch.id);
      panel.appendChild(ch);
      if (M.contact.description) {
        panel.appendChild(el("p", "panel__desc", M.contact.description));
      }

      var actions = el("div", "actions");
      if (M.contact.email && M.contact.email.address) {
        var primary = el("a", "btn btn--accent");
        var primaryLabel = el("span", "btn__label");
        var primaryIcon = icon("mail");
        if (primaryIcon) primaryLabel.appendChild(primaryIcon);
        primaryLabel.appendChild(document.createTextNode(M.contact.email.label));
        primary.appendChild(primaryLabel);
        link(primary, mailtoFrom(M.contact.email));
        trackPointer(primary);
        actions.appendChild(primary);
        actions.appendChild(copyButton(M.contact.email));
      }
      panel.appendChild(actions);
      trackPointer(panel);
      contactMount.appendChild(reveal(panel));
    }

    var back = document.getElementById("back");
    if (back && M.back) {
      var a = el("a", "backlink");
      var backIcon = icon("back");
      if (backIcon) a.appendChild(backIcon);
      a.appendChild(document.createTextNode(M.back.label));
      link(a, M.back.href, false);
      back.appendChild(a);
    }
  }

  /* ------------------------------ AIGUILLAGE ----------------------------- */

  function start() {
    var page = document.body.getAttribute("data-page");
    if (page === "hub") renderHub();
    else if (page === "montage") renderMontage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
