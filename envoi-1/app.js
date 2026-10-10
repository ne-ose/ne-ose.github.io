(() => {
  const S = Object.fromEntries(SERIES.map(s => [s.id, s]));
  const slug = t => t.toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  POEMES.forEach(p => p.slug = slug(p.titre));
  const parDate = (a, b) => a.date.localeCompare(b.date);
  const ordre = [...POEMES].sort(parDate);
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const lien = p => `#${p.serie}/${p.slug}`;
  const dateFr = d => d.split("-").reverse().join(".");
  const lumi = hex => {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map(v => v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const clair = hex => lumi(hex) > 0.3;
  let tri = "date", courant = null;
  try { tri = localStorage.getItem("tri") || "date"; } catch (e) {}

  const categoriesPresentes = () => SERIES.filter(x => POEMES.some(q => q.serie === x.id));
  function accueil(v) {
    $("accueil").hidden = !v; $("page").hidden = v;
    if (v) { $("btn-visuel").hidden = true; visuel(false); }
    if (v) {
      $("accueil-categories").innerHTML = categoriesPresentes().map(x =>
        `<a href="#${x.id}" style="--c:${x.accent}">${esc(x.nom)}</a>`).join("");
      document.title = "Néose — poèmes";
      document.documentElement.style.setProperty("--accent", "#ECE8DF");
      document.documentElement.style.setProperty("--accent-ui", "#ECE8DF");
    }
  }

  function afficher() {
    const h = location.hash.slice(1);
    if (!h) { tiroir(false); accueil(true); return; }
    accueil(false);
    const [serie, s] = h.split("/");
    const p = POEMES.find(x => x.serie === serie && x.slug === s)
      || (S[serie] && POEMES.filter(x => x.serie === serie).sort(parDate)[0])
      || ordre[ordre.length - 1];
    courant = p;
    const se = S[p.serie], i = ordre.indexOf(p);
    const fond = p.fond || se.fond, accent = p.accent || se.accent;
    const page = $("page");
    page.style.setProperty("--fond", fond);
    page.style.setProperty("--accent", accent);
    page.style.setProperty("--panneau-texte", clair(fond) ? "#121115" : "#F4F0E6");
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--accent-ui", lumi(accent) > 0.15 ? accent : se.accent);

    $("titre-petit").textContent = p.titre;
    const titre = $("titre");
    titre.innerHTML = (p.syllabes || p.titre).split("|").map(esc).join("&shy;");
    ajusterTitre();
    const motLong = Math.max(...p.titre.split(/[\s\/-]+/).map(m => m.length));
    titre.className = "titre" + (p.titre.length > 18 || motLong > 10 ? " long" : p.titre.length > 10 || motLong > 7 ? " moyen" : "");

    const memeSerie = POEMES.filter(x => x.serie === p.serie).sort(parDate);
    $("meta-serie").textContent = `${se.nom} — N° ${String(memeSerie.indexOf(p) + 1).padStart(2, "0")}`;
    $("meta-date").textContent = dateFr(p.date);

    const originaux = p.originaux || [];
    $("poeme").classList.toggle("centre", !!p.centre);
    $("corps").classList.toggle("centre", !!p.centre);
    if (p.texte && p.texte.trim() && p.forme === "libre") {
      $("poeme").classList.remove("en-images");
      $("poeme").innerHTML = `<pre class="libre">${esc(p.texte.replace(/^\n+|\s+$/g, "")).replace(/~~(.+?)~~/g, "<s>$1</s>")}</pre>`;
      $("voir-post").hidden = !originaux.length;
    } else if (p.texte && p.texte.trim()) {
      $("poeme").classList.remove("en-images");
      $("poeme").innerHTML = (p.chapeau ? `<p class="chapeau">${esc(p.chapeau.trim()).replace(/\n/g, "<br>")}</p>` : "") + p.texte.trim().split(/\n\s*\n/).map(st =>
        "<p>" + st.split("\n").map(v => p.vers_accent && v.trim() === p.vers_accent.trim() ? `<em>${esc(v)}</em>` : esc(v)).join("<br>") + "</p>"
      ).join("");
      $("voir-post").hidden = !originaux.length;
    } else {
      $("poeme").classList.add("en-images");
      $("poeme").innerHTML = originaux.map((s, k) => `<img src="${esc(s)}" alt="${esc(p.titre)}${originaux.length > 1 ? ", page " + (k + 1) : ""}">`).join("");
      $("voir-post").hidden = true;
    }
    $("original-images").innerHTML = originaux.map((s, k) => `<img src="${esc(s)}" alt="${esc(p.titre)}, post d'origine${originaux.length > 1 ? ", page " + (k + 1) : ""}" loading="lazy">`).join("");

    const legende = p.legende ? `<figcaption>${p.lien ? `<a href="${esc(p.lien)}" target="_blank" rel="noopener">${esc(p.legende)}</a>` : esc(p.legende)}</figcaption>` : "";
    $("visuel").innerHTML = p.image ? `<img src="${esc(p.image)}" alt="${esc(p.legende || "Visuel accompagnant " + p.titre)}">${legende}` : "";
    $("visuel").hidden = !p.image;
    $("btn-visuel").hidden = !p.image;
    $("btn-visuel-texte").textContent = p.serie === "novembre-2025" ? "Voir l'œuvre" : "Voir le visuel";
    visuel(false);

    // Précédent / suivant : on reste dans la catégorie ; au bout, on passe à la catégorie voisine en l'annonçant
    const cats = categoriesPresentes(), ci = cats.findIndex(x => x.id === p.serie);
    const j = memeSerie.indexOf(p);
    const de = id => POEMES.filter(x => x.serie === id).sort(parDate);
    let prec = memeSerie[j - 1], precCat = null, suiv = memeSerie[j + 1], suivCat = null;
    if (!prec) { precCat = cats[(ci - 1 + cats.length) % cats.length]; const l = de(precCat.id); prec = l[l.length - 1]; }
    if (!suiv) { suivCat = cats[(ci + 1) % cats.length]; suiv = de(suivCat.id)[0]; }
    $("prec").href = lien(prec); $("prec-titre").textContent = "← " + prec.titre;
    $("prec-saut").textContent = precCat ? "Change de catégorie : " + precCat.nom : se.nom;
    $("prec").style.setProperty("--c", precCat ? precCat.accent : "#8d8996");
    $("suiv").href = lien(suiv); $("suiv-titre").textContent = suiv.titre;
    $("suiv-saut").textContent = suivCat ? "Change de catégorie : " + suivCat.nom : se.nom;
    $("suiv").style.setProperty("--c", suivCat ? suivCat.accent : "#8d8996");
    $("prec").classList.toggle("change", !!precCat); $("suiv").classList.toggle("change", !!suivCat);

    $("cat-pied").textContent = `${se.nom} — N° ${String(j + 1).padStart(2, "0")} sur ${memeSerie.length}`;
    $("cat-pied").style.setProperty("--c", se.accent);
    $("cat-pied").dataset.serie = se.id;

    $("categories").innerHTML = cats.map(x =>
      `<button type="button" data-serie="${x.id}" style="--c:${x.accent}" aria-expanded="false" aria-controls="menu-cat" ${x.id === p.serie ? 'aria-current="true"' : ""}>${esc(x.nom)}</button>`).join("");
    menuCat(null);

    document.title = `${p.titre} — Néose`;
    ["titre", "titre-petit", "poeme"].forEach(id => { const el = $(id); el.style.animation = "none"; el.offsetHeight; el.style.animation = ""; });
    window.scrollTo(0, 0);
    remplirTiroir();
  }

  // Taille du grand titre : la même pour tous les poèmes (TAILLE),
  // réduite seulement si une syllabe est trop large ou si le titre dépasse en hauteur.
  const TAILLE = 0.5; // proportion de la largeur du panneau (0.5 = moitié)
  const mesure = document.createElement("canvas").getContext("2d");
  function ajusterTitre() {
    const titre = $("titre"); if (!courant) return;
    const largeur = titre.clientWidth; if (!largeur) return;
    const style = getComputedStyle(titre);
    mesure.font = `${style.fontWeight} 100px ${style.fontFamily}`;
    const morceaux = (courant.syllabes || courant.titre).split(/[|\s]+/).filter(Boolean);
    const plusLarge = Math.max(...morceaux.map(m => mesure.measureText(m).width));
    let taille = Math.min(largeur * TAILLE, 100 * largeur / plusLarge * 0.97);
    const haut = document.querySelector(".panneau-haut");
    const mobile = window.matchMedia("(max-width:800px)").matches;
    const hauteur = mobile ? window.innerHeight * 0.36 : haut.getBoundingClientRect().bottom - titre.getBoundingClientRect().top - 8;
    titre.style.fontSize = taille + "px";
    for (let k = 0; k < 40 && titre.scrollHeight > hauteur; k++) { taille *= 0.95; titre.style.fontSize = taille + "px"; }
  }
  if (document.fonts) document.fonts.ready.then(ajusterTitre);
  window.addEventListener("resize", ajusterTitre);

  let deplie = null; // catégorie dépliée dans le tiroir
  function remplirTiroir() {
    const p = courant;
    document.querySelectorAll("[data-tri]").forEach(x => x.classList.toggle("actif", x.dataset.tri === tri));
    $("tiroir-cats").innerHTML = categoriesPresentes().map(se => {
      const liste = POEMES.filter(x => x.serie === se.id)
        .sort((a, b) => tri === "az" ? a.titre.localeCompare(b.titre, "fr", { sensitivity: "base", numeric: true }) : parDate(a, b));
      const ouverte = se.id === deplie;
      return `<section class="cat${ouverte ? " ouverte" : ""}" style="--c:${se.accent}">
        <button type="button" class="cat-tete" data-deplier="${se.id}" aria-expanded="${ouverte}">
          <span class="cat-nom">${esc(se.nom)}</span><span class="cat-nb">${liste.length}</span><span class="chevron" aria-hidden="true"></span>
        </button>
        <ol class="tiroir-liste" ${ouverte ? "" : "hidden"}>${liste.map(x =>
          `<li><a href="${lien(x)}" ${p && x === p ? 'aria-current="true"' : ""}>${esc(x.titre)}</a></li>`).join("")}</ol>
      </section>`;
    }).join("");
  }

  const tiroirOuvert = () => $("tiroir").classList.contains("ouvert");
  function tiroir(v, serie) {
    if (v) { deplie = serie || (courant && courant.serie) || null; remplirTiroir(); }
    $("tiroir").classList.toggle("ouvert", v);
    $("tiroir").setAttribute("aria-hidden", !v);
    $("btn-liste").setAttribute("aria-expanded", v);
    $("voile").hidden = !v;
    if (v) { const a = $("tiroir-cats").querySelector('.ouverte [aria-current="true"]'); if (a) a.scrollIntoView({ block: "center" }); }
  }
  function visuel(v) {
    $("visuel").classList.toggle("ouvert", v);
    $("btn-visuel").classList.toggle("ouvert", v);
    $("btn-visuel").setAttribute("aria-expanded", v);
  }
  $("btn-visuel").onclick = () => visuel(!$("visuel").classList.contains("ouvert"));
  const voirOriginal = v => { $("original").hidden = !v; document.body.style.overflow = v ? "hidden" : ""; if (v) $("original").scrollTop = 0; };

  $("btn-liste").onclick = () => tiroir(!tiroirOuvert());
  $("fermer").onclick = () => tiroir(false);
  $("voile").onclick = () => tiroir(false);
  $("tiroir-cats").addEventListener("click", e => {
    if (e.target.closest("a")) { tiroir(false); return; }
    const b = e.target.closest("[data-deplier]");
    if (b) { deplie = deplie === b.dataset.deplier ? null : b.dataset.deplier; remplirTiroir(); }
  });
  // Menu déroulant des catégories (bande en haut à droite)
  let menuSerie = null, minuteur = null;
  function menuCat(id) {
    clearTimeout(minuteur);
    menuSerie = id;
    document.querySelectorAll("#categories [data-serie]").forEach(b => b.setAttribute("aria-expanded", b.dataset.serie === id));
    if (!id) { $("menu-cat").hidden = true; return; }
    const se = S[id];
    const liste = POEMES.filter(x => x.serie === id)
      .sort((a, b) => tri === "az" ? a.titre.localeCompare(b.titre, "fr", { sensitivity: "base", numeric: true }) : parDate(a, b));
    $("menu-cat").style.setProperty("--c", se.accent);
    $("menu-cat").innerHTML = `<div class="menu-tete"><span class="menu-nom">${esc(se.nom)}</span><span class="menu-nb">${liste.length} poème${liste.length > 1 ? "s" : ""}</span></div>
      <ol>${liste.map(x => `<li><a href="${lien(x)}" ${courant && x === courant ? 'aria-current="true"' : ""}>${esc(x.titre)}</a></li>`).join("")}</ol>`;
    $("menu-cat").hidden = false;
  }
  const survol = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  $("categories").addEventListener("click", e => {
    const b = e.target.closest("[data-serie]"); if (!b) return;
    menuCat(menuSerie === b.dataset.serie && !survol ? null : b.dataset.serie);
  });
  if (survol) {
    $("categories").addEventListener("mouseover", e => { const b = e.target.closest("[data-serie]"); if (b && b.dataset.serie !== menuSerie) menuCat(b.dataset.serie); else clearTimeout(minuteur); });
    const zone = document.querySelector(".barre");
    zone.addEventListener("mouseleave", () => { minuteur = setTimeout(() => menuCat(null), 280); });
    zone.addEventListener("mouseenter", () => clearTimeout(minuteur));
  }
  $("menu-cat").addEventListener("click", e => { if (e.target.closest("a")) menuCat(null); });
  document.addEventListener("click", e => { if (menuSerie && !e.target.closest(".barre")) menuCat(null); });
  $("cat-pied").onclick = () => tiroir(true, $("cat-pied").dataset.serie);
  document.querySelectorAll("[data-tri]").forEach(b => b.onclick = () => {
    tri = b.dataset.tri; try { localStorage.setItem("tri", tri); } catch (e) {}
    remplirTiroir();
  });
  $("voir-post").onclick = () => voirOriginal(true);
  $("fermer-original").onclick = () => voirOriginal(false);
  $("original").addEventListener("click", e => { if (e.target === $("original")) voirOriginal(false); });

  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); tiroir(!tiroirOuvert()); }
    else if (e.key === "Escape") { tiroir(false); voirOriginal(false); visuel(false); menuCat(null); }
    else if (!$("original").hidden || tiroirOuvert() || !$("accueil").hidden) return;
    else if (e.key === "ArrowRight") location.hash = $("suiv").getAttribute("href");
    else if (e.key === "ArrowLeft") location.hash = $("prec").getAttribute("href");
  });
  window.addEventListener("hashchange", () => { tiroir(false); afficher(); });
  afficher();
})();
