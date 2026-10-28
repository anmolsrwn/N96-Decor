/* =========================================================
   N96 DECOR — site behaviour
   Builds the shared header & footer, the hero slider,
   project grids, filters, project pages, gallery and forms.
   You normally don't need to edit this file; edit js/data.js.
   ========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var C = N96.config;
  var page = document.body.getAttribute("data-page") || "";

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function telHref(p) { return "tel:" + p.replace(/[^\d+]/g, ""); }
  // Email link: opens Gmail in the browser (emailOpensGmail: true) or the visitor's email app
  function emailAttrs() {
    if (C.emailOpensGmail) return 'href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=' + encodeURIComponent(C.email) + '" target="_blank" rel="noopener"';
    return 'href="mailto:' + esc(C.email) + '"';
  }
  function catLabel(id) {
    var c = N96.categories.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }
  function projectById(id) { return N96.projects.filter(function (p) { return p.id === id; })[0]; }
  function photoUrl(p, n) { return "images/projects/" + p.id + "/" + n + ".jpg"; }
  function photoList(p) {
    var out = [];
    for (var i = 1; i <= p.photos; i++) out.push(photoUrl(p, i));
    return out;
  }
  /* Static pages: tools/build-pages.js writes work/<id>.html and cities/<id>.html and lists them in
     js/generated-pages.js (window.N96_PAGES). A link uses the static page when it exists, otherwise the
     old project.html#id / city.html#id address, so a forgotten rebuild never gives a broken link. */
  var BUILT = window.N96_PAGES || {};
  function hasPage(kind, id) { return (BUILT[kind] || []).indexOf(id) > -1; }
  function projectHref(id) { return hasPage("projects", id) ? "work/" + id + ".html" : "project.html#" + id; }
  function cityHref(id) { return hasPage("cities", id) ? "cities/" + id + ".html" : "city.html#" + id; }
  N96.projectHref = projectHref; N96.cityHref = cityHref;   // also used by the chatbot
  function projectUrl(p) { return projectHref(p.id); }
  function shortDate(d) {
    var parts = String(d).split(" ");
    return parts.length === 2 ? parts[0].slice(0, 3) + " " + parts[1] : d;
  }

  /* ---------- Photo spots: what happens when a photo file is missing ----------
     On your computer (VS Code Live Server or opening the file directly) a missing
     photo shows a dashed "Add photo here" box with the exact file name to use.
     On the live website, missing project photos are simply hidden. */
  var IS_LOCAL = location.protocol === "file:" || /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])$/.test(location.hostname);
  function placeholder(path, withText) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="400" height="400" fill="#eef2d9"/>' +
      (withText ?
        '<rect x="14" y="14" width="372" height="372" fill="none" stroke="#55692b" stroke-width="2" stroke-dasharray="10 8"/>' +
        '<path d="M175 185v-20a25 25 0 0 1 50 0v20" fill="none" stroke="#55692b" stroke-width="3"/>' +
        '<text x="200" y="225" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="#55692b">Add photo here</text>' +
        '<text x="200" y="255" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#4a4d36">' + esc(path) + '</text>'
        : '<path d="M175 215v-30a25 25 0 0 1 50 0v30" fill="none" stroke="#c5d29a" stroke-width="3"/>') +
      '</svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG" || img.getAttribute("data-ph")) return;
    if (img.closest("#home-gallery")) return; // the home gallery skips missing photos by itself
    var path = img.getAttribute("src") || "";
    img.setAttribute("data-ph", path);
    if (img.closest("#gallery-grid")) { img.closest("figure").remove(); return; }       // gallery: always skip missing photos
    if (!IS_LOCAL && img.closest(".photo-grid button")) { img.closest("button").remove(); return; } // live site: hide empty spots
    img.src = placeholder(path, IS_LOCAL);
    img.classList.add("is-placeholder");
  }, true);
  function liveItems(imgs, caption) {
    return imgs.filter(function (i) { return !i.getAttribute("data-ph"); })
      .map(function (i) { return { src: i.getAttribute("src"), caption: caption(i), link: i.getAttribute("data-link") || "" }; });
  }

  /* ---------- icons (inline SVG) ---------- */
  var ICONS = {
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4a20 20 0 0 0-2.4-.1c-2.3 0-3.9 1.4-3.9 4v2.2H8.8v3h2.6V21"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M11 9.5c1.6-1.6 5-.8 4.6 2.2-.3 2.2-2.4 3-3.6 2.1M11.6 10.4 9.5 20"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 7 8.5-7"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a12 12 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a1.8 1.8 0 0 1-1.9 1.8A16.5 16.5 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5Z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.3-3.8A8 8 0 1 1 8 19z"/><path d="M9 9.5c.3 2 2.3 4.2 4.6 4.8l1.2-1.2 1.7.8c-.3 1.3-1.3 2-2.5 1.8-3-.5-5.6-3.2-6-6.1-.2-1.2.6-2.2 1.8-2.4l.8 1.7z"/></svg>'
  };

  function iconLinks(cls) {
    var html = '<a class="icon-link" ' + emailAttrs() + ' aria-label="Email us on Gmail"><span class="ico ico--mail">' + ICONS.mail + '</span>Gmail</a>' +
      '<a class="icon-link" href="' + esc(C.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram"><span class="ico ico--insta">' + ICONS.insta + '</span>Instagram</a>' +
      '<a class="icon-link" href="' + telHref(C.phones[0]) + '" aria-label="Call us"><span class="ico ico--phone">' + ICONS.phone + '</span>Call</a>';
    if (C.whatsapp) html += '<a class="icon-link" href="https://wa.me/' + esc(C.whatsapp) + '" target="_blank" rel="noopener"><span class="ico ico--wa">' + ICONS.wa + '</span>WhatsApp</a>';
    return '<div class="icon-row ' + (cls || "") + '">' + html + '</div>';
  }

  /* ---------- Header ---------- */
  // Tabs in the top menu (centre). Contact sits on the right.
  var NAV = [
    ["home", "index.html", "Home"],
    ["gallery", "gallery.html", "Gallery"],
    ["stories", "stories.html", "Couple Stories"]
  ];
  // All pages, used in the footer (Projects, Services, Join Us stay reachable here and on the home page)
  var ALL_PAGES = [
    ["home", "index.html", "Home"],
    ["about", "founders.html", "About / Founders"],
    ["services", "services.html", "Services"],
    ["projects", "projects.html", "Projects"],
    ["gallery", "gallery.html", "Gallery"],
    ["stories", "stories.html", "Couple Stories"],
    ["join", "join.html", "Join Us"],
    ["contact", "index.html#contact", "Contact"]
  ];
  var headerEl = $("#site-header");
  if (headerEl) {
    var current = page === "founders" ? "about" : page;
    headerEl.className = "site-header";
    headerEl.innerHTML =
      '<div class="wrap nav">' +
        // Logo at top-left (file: images/brand/logo-top.png)
        '<a class="nav-logo" href="index.html" aria-label="N96 Decor home"><img src="images/brand/logo-top.png" alt="N96 Decor logo" width="58" height="68"></a>' +
        '<div class="nav-center">' +
          '<a class="brand" href="index.html"><span class="brand-name">N96 DECOR</span></a>' +
          '<ul class="nav-links">' +
            NAV.concat([["contact", page === "home" ? "#contact" : "index.html#contact", "Contact"]]).map(function (n) {
              return '<li><a href="' + n[1] + '"' + (n[0] === current ? ' class="active" aria-current="page"' : "") + '>' + n[2] + '</a></li>';
            }).join("") +
          '</ul>' +
        '</div>' +
        '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</div>';
    var toggle = $(".nav-toggle", headerEl);
    toggle.addEventListener("click", function () {
      var open = headerEl.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Make the header a little more compact once the visitor scrolls down
    var onScroll = function () { headerEl.classList.toggle("is-scrolled", window.scrollY > 60); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- Footer ---------- */
  var footerEl = $("#site-footer");
  if (footerEl) {
    footerEl.className = "site-footer";
    var social = [
      ['href="' + telHref(C.phones[0]) + '"', "Call", ICONS.phone],
      ['href="' + esc(C.instagram) + '" target="_blank" rel="noopener"', "Instagram", ICONS.insta],
      [emailAttrs(), "Email", ICONS.mail],
      ['href="' + esc(C.facebook || "#") + '" target="_blank" rel="noopener"', "Facebook", ICONS.facebook],
      ['href="' + esc(C.pinterest || "#") + '" target="_blank" rel="noopener"', "Pinterest", ICONS.pinterest]
    ];
    footerEl.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          '<a class="footer-brand" href="index.html" aria-label="N96 Decor home">' +
            '<img src="images/brand/logo-top.png" alt="">' +
            '<span class="brand-name">N96 DECOR</span>' +
          '</a>' +
          '<div><h4>Explore</h4><ul class="footer-links">' + ALL_PAGES.map(function (n) { return '<li><a href="' + n[1] + '">' + n[2] + '</a></li>'; }).join("") + '</ul></div>' +
          '<div><h4>Socials</h4><div class="footer-icons">' +
            social.map(function (x) { return '<a ' + x[0] + ' aria-label="' + x[1] + '" title="' + x[1] + '">' + x[2] + '</a>'; }).join("") +
          '</div></div>' +
        '</div>' +
      '</div>';
  }

  /* ---------- Fill shared contact blocks ---------- */
  $all("[data-contact-icons]").forEach(function (el) { el.innerHTML = iconLinks(); });
  $all("[data-contact-lines]").forEach(function (el) {
    el.innerHTML =
      '<div><span class="label">Call</span>' + C.phones.map(function (p) { return '<a href="' + telHref(p) + '">' + esc(p) + '</a>'; }).join(" &nbsp;·&nbsp; ") + '</div>' +
      '<div><span class="label">Email</span><a ' + emailAttrs() + '>' + esc(C.email) + '</a></div>' +
      '<div><span class="label">Instagram</span><a href="' + esc(C.instagram) + '" target="_blank" rel="noopener">' + esc(C.instagramHandle) + '</a></div>' +
      '<div><span class="label">Where we work</span>' + esc(C.serviceArea) + '</div>';
  });

  /* ---------- Project card ---------- */
  function projectCard(p) {
    return '<a class="project-card" href="' + projectUrl(p) + '" data-cat="' + esc(p.category) + '">' +
      '<div class="img"><span class="tag">' + esc(p.event) + '</span>' + (p.sample ? '<span class="sample">Sample</span>' : "") +
        '<img src="' + photoUrl(p, 1) + '" alt="' + esc(p.title + ", " + p.venue) + '" loading="lazy"></div>' +
      '<div><h3>' + esc(p.title) + '</h3>' +
      '<div class="meta"><span>' + esc(p.venue) + ', ' + esc(p.location) + '</span><span>' + esc(shortDate(p.date)) + '</span></div></div>' +
    '</a>';
  }

  /* ---------- Filter chips ---------- */
  function buildChips(container, onPick, active, asLinks) {
    container.innerHTML = N96.categories.map(function (c) {
      var n = c.id === "all" ? N96.projects.length : N96.projects.filter(function (p) { return p.category === c.id; }).length;
      var inner = esc(c.label) + '<span class="count">' + n + '</span>';
      if (asLinks) return '<a class="chip' + (c.id === active ? " is-active" : "") + '" href="projects.html' + (c.id === "all" ? "" : "#" + c.id) + '">' + inner + '</a>';
      return '<button type="button" class="chip' + (c.id === active ? " is-active" : "") + '" data-cat="' + c.id + '" aria-pressed="' + (c.id === active) + '">' + inner + '</button>';
    }).join("");
    if (!asLinks) {
      container.addEventListener("click", function (e) {
        var b = e.target.closest(".chip"); if (!b) return;
        $all(".chip", container).forEach(function (x) { x.classList.toggle("is-active", x === b); x.setAttribute("aria-pressed", x === b); });
        onPick(b.getAttribute("data-cat"));
      });
    }
  }

  /* ---------- Lightbox ---------- */
  var lb = null, lbItems = [], lbIndex = 0;
  function openLightbox(items, index) {
    lbItems = items; lbIndex = index;
    if (!lb) {
      lb = document.createElement("div");
      lb.className = "lightbox"; lb.hidden = true;
      lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Photo viewer");
      lb.innerHTML = '<img alt=""><div class="lb-caption"></div>' +
        '<button class="lb-btn lb-close" aria-label="Close">✕</button>' +
        '<button class="lb-btn lb-prev" aria-label="Previous photo">←</button>' +
        '<button class="lb-btn lb-next" aria-label="Next photo">→</button>';
      document.body.appendChild(lb);
      $(".lb-close", lb).onclick = closeLightbox;
      $(".lb-prev", lb).onclick = function () { stepLightbox(-1); };
      $(".lb-next", lb).onclick = function () { stepLightbox(1); };
      lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
      document.addEventListener("keydown", function (e) {
        if (lb.hidden) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
      });
      var sx = null;
      lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
      lb.addEventListener("touchend", function (e) {
        if (sx === null) return; var dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1); sx = null;
      });
    }
    showLightbox(); lb.hidden = false; document.body.style.overflow = "hidden";
    $(".lb-close", lb).focus();
  }
  function showLightbox() {
    var it = lbItems[lbIndex];
    $("img", lb).src = it.src; $("img", lb).alt = it.caption || "";
    $(".lb-caption", lb).innerHTML = esc(it.caption || "") + (it.link ? ' &nbsp;·&nbsp; <a href="' + it.link + '">View project</a>' : "") +
      ' &nbsp;·&nbsp; ' + (lbIndex + 1) + ' / ' + lbItems.length;
  }
  function stepLightbox(d) { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; showLightbox(); }
  function closeLightbox() { lb.hidden = true; document.body.style.overflow = ""; }

  /* =========================================================
     PAGE: HOME
     ========================================================= */
  function initHero() {
    var hero = $("#hero"); if (!hero) return;
    var slides = N96.heroSlides;
    var slidesHtml = slides.map(function (s, i) {
      return '<div class="slide' + (i === 0 ? " is-active" : "") + '"><img src="' + s.src + '" alt="' + esc(s.note + ", " + s.title) + '"' + (i === 0 ? "" : ' loading="lazy"') + '></div>';
    }).join("");
    hero.insertAdjacentHTML("afterbegin", slidesHtml);
    var dots = $(".hero-dots", hero), cap = $(".hero-caption", hero);
    dots.innerHTML = slides.map(function (_, i) { return '<button aria-label="Show photo ' + (i + 1) + '"' + (i === 0 ? ' class="is-active"' : "") + '></button>'; }).join("");
    var els = $all(".slide", hero), dotEls = $all("button", dots), idx = 0, timer = null;
    function go(n) {
      els[idx].classList.remove("is-active"); dotEls[idx].classList.remove("is-active");
      idx = (n + els.length) % els.length;
      els[idx].classList.add("is-active"); dotEls[idx].classList.add("is-active");
      cap.innerHTML = '<strong>' + esc(slides[idx].title) + '</strong>' + esc(slides[idx].note);
    }
    function start() { stop(); timer = setInterval(function () { go(idx + 1); }, N96.heroSpeed || 3000); }
    function stop() { if (timer) clearInterval(timer); }
    dotEls.forEach(function (d, i) { d.addEventListener("click", function () { go(i); start(); }); });
    var prevBtn = $(".hero-arrow.prev", hero), nextBtn = $(".hero-arrow.next", hero);
    if (prevBtn) prevBtn.addEventListener("click", function () { go(idx - 1); start(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { go(idx + 1); start(); });
    hero.addEventListener("mouseenter", stop); hero.addEventListener("mouseleave", start);
    var sx = null;
    hero.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener("touchend", function (e) {
      if (sx === null) return; var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) { go(idx + (dx < 0 ? 1 : -1)); start(); } sx = null;
    });
    go(0); start();
  }

  function storyCard(s, variant) {
    return '<a class="story-card story-card--' + variant + '" href="stories.html#' + s.id + '">' +
      '<div class="img"><img src="' + s.cover + '" alt="' + esc(s.title) + '" loading="lazy"></div>' +
      '<div class="body"><span class="meta">' + esc(s.couple) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.excerpt) + '</p><span class="more">Read the story →</span></div>' +
    '</a>';
  }

  /* ---------- Home gallery: 16 tiles that keep shuffling through all gallery photos ---------- */
  function initHomeGallery() {
    var grid = $("#home-gallery"); if (!grid) return;
    var TILES = 16, SPEED = N96.homeGallerySpeed || 4000;
    var pool = [];
    N96.projects.forEach(function (p) {
      photoList(p).forEach(function (src) { pool.push({ src: src, caption: p.event + " · " + p.venue, link: projectUrl(p) }); });
    });
    (N96.galleryExtras || []).forEach(function (x) { pool.push({ src: x.src, caption: x.caption, link: "gallery.html" }); });
    for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = pool[i]; pool[i] = pool[j]; pool[j] = t; }
    // photos listed in N96.homeGalleryFirst are shown first
    (N96.homeGalleryFirst || []).slice().reverse().forEach(function (src) {
      var at = -1; pool.forEach(function (it, n) { if (it.src === src) at = n; });
      if (at > -1) pool.unshift(pool.splice(at, 1)[0]);
    });

    var bad = {}, shown = {}, cursor = 0;
    // next photo that is not on screen and not known to be missing
    function nextItem() {
      for (var n = 0; n < pool.length; n++) {
        var it = pool[cursor % pool.length]; cursor++;
        if (!bad[it.src] && !shown[it.src]) return it;
      }
      return null;
    }
    function setTile(tile, it) {
      if (tile._item) delete shown[tile._item.src];
      tile._item = it; shown[it.src] = true;
      tile.href = it.link;
      $("img", tile).src = it.src; $("img", tile).alt = it.caption;
      $(".cap", tile).textContent = it.caption;
    }
    var tiles = [];
    for (var k = 0; k < TILES; k++) {
      var a = document.createElement("a");
      a.className = "hg-tile";
      a.innerHTML = '<img alt="" decoding="async"><span class="cap"></span>';
      grid.appendChild(a); tiles.push(a);
      (function (tile) {
        // if a photo file is missing, mark it and try the next one
        $("img", tile).addEventListener("error", function (e) {
          e.stopPropagation();
          if (tile._item) bad[tile._item.src] = true;
          var nx = nextItem(); if (nx) setTile(tile, nx); else tile.hidden = true;
        });
        var first = nextItem(); if (first) setTile(tile, first);
      })(a);
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var hovered = null;
    grid.addEventListener("mouseover", function (e) { hovered = e.target.closest(".hg-tile"); });
    grid.addEventListener("mouseleave", function () { hovered = null; });
    // every round, EVERY photo changes to a new one, in a gentle random wave
    function swap(tile, tries) {
      if (tile.hidden || tile === hovered || tile.offsetParent === null) return;
      tries = tries || 0; if (tries > 12) return;
      var it = nextItem(); if (!it) return;
      shown[it.src] = true;                       // reserve it so two tiles don't pick the same photo
      var pre = new Image();
      pre.onload = function () {
        tile.classList.add("is-fading");
        setTimeout(function () { setTile(tile, it); tile.classList.remove("is-fading"); }, 450);
      };
      pre.onerror = function () { bad[it.src] = true; delete shown[it.src]; swap(tile, tries + 1); }; // missing file: try another
      pre.src = it.src;
    }
    setInterval(function () {
      if (document.hidden) return;
      var order = tiles.slice().sort(function () { return Math.random() - 0.5; });
      var step = Math.min(160, (SPEED * 0.6) / order.length);
      order.forEach(function (tile, n) { setTimeout(function () { swap(tile); }, n * step); });
    }, SPEED);
  }

  /* ---------- About: photo collage (big arch = events, small arch = founders) ---------- */
  function slideShow(boxId, slides, shuffle, delay) {
    var box = document.getElementById(boxId); if (!box || !slides || !slides.length) return;
    var list = slides.slice();
    if (shuffle) for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = list[i]; list[i] = list[j]; list[j] = t; }
    box.innerHTML = list.map(function (sl, n) {
      return '<img src="' + esc(sl.src) + '" alt="' + esc(sl.alt || "") + '"' + (n === 0 ? ' class="is-on"' : ' loading="lazy"') + '>';
    }).join("");
    var imgs = $all("img", box), cur = 0;
    imgs.forEach(function (im) { im.addEventListener("error", function () { im.remove(); imgs = $all("img", box); }); });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTimeout(function () {
      setInterval(function () {
        if (document.hidden || imgs.length < 2) return;
        imgs[cur % imgs.length].classList.remove("is-on");
        cur = (cur + 1) % imgs.length;
        imgs[cur].classList.add("is-on");
      }, N96.aboutSlideSpeed || 3000);
    }, delay || 0);
  }
  function initAboutSlides() {
    slideShow("about-slides", N96.aboutSlides, false, 0);   // in order: founders first, then events
  }

  /* ---------- Venues map: blue India + Cyprus box on the west, pins link to city pages ---------- */
  function cityCount(id) { return N96.projects.filter(function (p) { return p.city === id; }).length; }
  function inPoly(x, y, poly) {
    var inside = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }
  function initWorldMap() {
    var host = $("#wmap"), Wm = window.N96_MAP && N96_MAP.world; if (!host || !Wm || !N96.cities) return;
    function yM(lat) { return 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * lat * Math.PI / 180)); }
    function wp(lon, lat) { return [Wm.x0 + Wm.R * lon * Math.PI / 180, Wm.y0 - Wm.R * yM(lat)]; }
    // where each name tag sits relative to its dot (map units). Change or add with  label: [dx, dy]  in N96.cities
    // where each name sits relative to its place (map units). Change or add with  label: [dx, dy]  in N96.cities
    var OFFSET = { delhi: [22, -16], umaid: [-16, -9], udaipur: [-18, 5], goa: [-16, 6], raipur: [17, -6], hyderabad: [20, 4], bangalore: [20, 13], cyprus: [0, -13] };
    var narrow = host.clientWidth < 700;
    // view: whole world on laptops; zoom to all the places on phones
    var VB = [0, 0, Wm.w, Wm.h];
    if (narrow) {
      var all = N96.cities.map(function (c) { return wp(c.lon, c.lat); });
      var xs = all.map(function (p) { return p[0]; }), ys = all.map(function (p) { return p[1]; });
      var x1 = Math.min.apply(0, xs) - 55, x2 = Math.max.apply(0, xs) + 100, y1 = Math.min.apply(0, ys) - 30, y2 = Math.max.apply(0, ys) + 30;
      var w = x2 - x1, h = y2 - y1, want = w / 1.25;
      if (h < want) { y1 -= (want - h) / 2; h = want; }
      VB = [x1, y1, w, h];
    }
    // small text: about 11px on screen whatever the screen size
    var unit = VB[2] / Math.max(host.clientWidth || 900, 280);   // map units per screen pixel
    var FS = 11 * unit;
    var pts = N96.cities.map(function (c) {
      var p = wp(c.lon, c.lat), o = (c.label || OFFSET[c.id] || [20, -12]).map(function (v) { return v * FS / 7; });
      var tw = c.name.length * FS * 0.56 + FS * 1.7, th = FS * 1.4;
      var q = { c: c, x: p[0], y: p[1], lx: p[0] + o[0], ly: p[1] + o[1], tw: tw, th: th };
      q.side = q.lx < q.x - 1 ? "left" : (Math.abs(q.lx - q.x) <= 1 ? "mid" : "right");
      q.rx = q.side === "left" ? q.lx - tw : (q.side === "mid" ? q.lx - tw / 2 : q.lx);
      q.ry = q.ly - th / 2;
      return q;
    });
    var marks = pts.map(function (p) {
      var c = p.c, name = esc(c.name), s = FS / 10;
      // thin line from the place to its name; small arch symbol + name (no box)
      var ex = Math.max(p.rx, Math.min(p.x, p.rx + p.tw)), ey = Math.max(p.ry, Math.min(p.y, p.ry + p.th));
      return '<a class="wplace" data-city="' + esc(c.id) + '" href="' + esc(cityHref(c.id)) + '" aria-label="' + name + ': see projects">' +
        '<rect class="wp-hit" x="' + p.rx.toFixed(1) + '" y="' + p.ry.toFixed(1) + '" width="' + p.tw.toFixed(1) + '" height="' + p.th.toFixed(1) + '"></rect>' +
        '<line class="wp-line" x1="' + p.x.toFixed(1) + '" y1="' + p.y.toFixed(1) + '" x2="' + ex.toFixed(1) + '" y2="' + ey.toFixed(1) + '"></line>' +
        '<circle class="wp-dot" cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="' + (FS * 0.26).toFixed(2) + '"></circle>' +
        '<g transform="translate(' + p.rx.toFixed(1) + ' ' + p.ry.toFixed(1) + ')">' +
          '<path class="wp-arch" transform="translate(' + (FS * 0.1).toFixed(2) + ' ' + (p.th * 0.12).toFixed(2) + ') scale(' + s.toFixed(3) + ')" d="M0 10V3.5a3.5 3.5 0 0 1 7 0V10"></path>' +
          '<text class="wp-name" x="' + (FS * 1.3).toFixed(2) + '" y="' + (p.th * 0.78).toFixed(2) + '" style="font-size:' + FS.toFixed(2) + 'px">' + name + '</text>' +
        '</g></a>';
    }).join("");
    host.innerHTML =
      '<svg viewBox="' + VB.map(function (v) { return v.toFixed(1); }).join(" ") + '" role="img" aria-label="World map of the places where N96 Decor has designed celebrations">' +
        '<image href="' + esc(Wm.src) + '" x="0" y="0" width="' + Wm.w + '" height="' + Wm.h + '"></image>' +
        (narrow ? "" :
        '<g class="map-brand" transform="translate(300 352)">' +
          '<text class="mb-big" x="0" y="0" text-anchor="middle" style="font-size:' + (FS * 2.2).toFixed(1) + 'px">N96</text>' +
          '<text class="mb-small" x="0" y="' + (FS * 1.2).toFixed(1) + '" text-anchor="middle" style="font-size:' + (FS * 0.62).toFixed(1) + 'px">DECOR · DESTINATIONS</text>' +
        '</g>') +
        marks +
      '</svg>';
    host.classList.toggle("wmap--zoom", narrow);
    // city cards below the map + hover links between card and map
    var list = $("#city-list");
    if (list) {
      list.innerHTML = N96.cities.map(function (c) {
        var n = cityCount(c.id);
        return '<li><a data-city="' + esc(c.id) + '" href="' + esc(cityHref(c.id)) + '"><strong>' + esc(c.name) + '</strong><span>' + esc(c.region) + '</span>' +
          '<em>' + (n ? n + (n === 1 ? " project" : " projects") : "View") + ' →</em></a></li>';
      }).join("");
    }
    function hl(id, on) { $all('#venues [data-city="' + id + '"]').forEach(function (el) { el.classList.toggle("is-hot", on); }); }
    $all("#venues [data-city]").forEach(function (el) {
      el.addEventListener("mouseenter", function () { hl(el.getAttribute("data-city"), true); });
      el.addEventListener("mouseleave", function () { hl(el.getAttribute("data-city"), false); });
      el.addEventListener("focus", function () { hl(el.getAttribute("data-city"), true); });
      el.addEventListener("blur", function () { hl(el.getAttribute("data-city"), false); });
    });
  }
  function initVenueMap() {
    var host = $("#vmap"); if (!host || !window.N96_MAP || !N96.cities) return;
    var K = Math.cos(22 * Math.PI / 180), S = 20, LON0 = 66.6, LAT1 = 37.6;
    var W = 590, H = 610;
    function px(lon, lat) { return [(lon - LON0) * K * S, (LAT1 - lat) * S]; }
    // India as a solid shape
    function shape(poly, proj) {
      return poly.map(function (pt, n) { var q = proj(pt[0], pt[1]); return (n ? "L" : "M") + q[0].toFixed(1) + " " + q[1].toFixed(1); }).join("") + "Z";
    }
    var india = shape(N96_MAP.india, px);
    var LEFT = { umaid: 1, udaipur: 1, goa: 1, bangalore: 0 };
    var pins = N96.cities.filter(function (c) { return !c.inset; }).map(function (c) {
      var p = px(c.lon, c.lat);
      var left = !!LEFT[c.id];
      var tx = left ? -16 : 16, anchor = left ? "end" : "start";
      return '<a class="pin" data-city="' + esc(c.id) + '" href="' + esc(cityHref(c.id)) + '" aria-label="' + esc(c.name + ": see projects") + '">' +
        '<g transform="translate(' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ') scale(1.45)">' +
          '<circle class="pin-halo" r="16"></circle>' +
          '<path class="pin-arch" d="M-8 10V-1a8 8 0 0 1 16 0V10"></path>' +
          '<circle class="pin-dot" r="2.8" cy="4"></circle>' +
          '<text class="pin-label" x="' + tx + '" y="5" text-anchor="' + anchor + '">' + esc(c.name) + '</text>' +
        '</g></a>';
    }).join("");
    host.innerHTML =
      '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Map of the cities where N96 Decor has designed celebrations">' +
        '<path class="land" d="' + india + '"></path>' +
        pins +
      '</svg>';
    var list = $("#city-list");
    if (list) {
      list.innerHTML = N96.cities.map(function (c) {
        var n = cityCount(c.id);
        return '<li><a data-city="' + esc(c.id) + '" href="' + esc(cityHref(c.id)) + '"><strong>' + esc(c.name) + '</strong><span>' + esc(c.region) + '</span>' +
          '<em>' + (n ? n + (n === 1 ? " project" : " projects") : "View") + ' →</em></a></li>';
      }).join("");
    }
    // hovering a name highlights its pin and the other way round
    function hl(id, on) { $all('[data-city="' + id + '"]').forEach(function (el) { el.classList.toggle("is-hot", on); }); }
    $all("[data-city]").forEach(function (el) {
      el.addEventListener("mouseenter", function () { hl(el.getAttribute("data-city"), true); });
      el.addEventListener("mouseleave", function () { hl(el.getAttribute("data-city"), false); });
      el.addEventListener("focus", function () { hl(el.getAttribute("data-city"), true); });
      el.addEventListener("blur", function () { hl(el.getAttribute("data-city"), false); });
    });
  }


  /* =========================================================
     PAGE: CITY (city.html#goa) — all projects in one city
     ========================================================= */
  if (page === "city") {
    // cities/<id>.html pages carry their id in <body data-id>; city.html#id reads it from the address
    var fixedCity = document.body.getAttribute("data-id");
    var renderCity = function () {
      var id = fixedCity || (location.hash || "").replace("#", "");
      if (!fixedCity && hasPage("cities", id)) { location.replace(cityHref(id)); return; }   // old city.html#id link
      var c = (N96.cities || []).filter(function (x) { return x.id === id; })[0] || (N96.cities || [])[0];
      if (!c) return;
      document.title = "Celebrations designed in " + c.name + " | N96 Decor";   // keep in sync with tools/build-pages.js
      var list = N96.projects.filter(function (p) { return p.city === c.id; });
      $("#city-banner").innerHTML = '<img class="mark" src="images/brand/logo-mark.png" alt="">' +
        '<span class="eyebrow">Venues we\'ve worked at</span><h1>' + esc(c.name) + '</h1>' +
        '<p>' + esc(c.region) + ' · ' + (list.length ? list.length + (list.length === 1 ? " project" : " projects") : "Projects coming soon") + '</p>';
      $("#city-projects").innerHTML = list.length ? list.map(projectCard).join("") :
        '<div class="empty-note">We have designed celebrations in ' + esc(c.name) + ' and will add them here soon. ' +
        'Planning something in ' + esc(c.name) + '? <a href="index.html#contact">Get in touch</a>.</div>';
      $("#city-others").innerHTML = N96.cities.map(function (x) {
        return '<a class="chip' + (x.id === c.id ? " is-active" : "") + '" href="' + esc(cityHref(x.id)) + '">' + esc(x.name) + '<span class="count">' + cityCount(x.id) + '</span></a>';
      }).join("");
      window.scrollTo(0, 0);
    };
    renderCity();
    if (!fixedCity) window.addEventListener("hashchange", renderCity);
  }

  if (page === "home") {
    initHomeGallery();
    initAboutSlides();
    initWorldMap();
    // Arriving from another page with index.html#contact: scroll there once the page is built
    if (location.hash) {
      var goHash = function () { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); };
      setTimeout(goHash, 60); window.addEventListener("load", goHash);
    }
    // Menu: highlight "Contact" while the contact section is on screen, "Home" otherwise
    var contactSec = document.getElementById("contact");
    if (contactSec && "IntersectionObserver" in window) {
      var homeTab = $('.nav-links a[href="index.html"]'), contactTab = $('.nav-links a[href="#contact"]');
      new IntersectionObserver(function (entries) {
        var on = entries[0].isIntersecting;
        if (homeTab) homeTab.classList.toggle("active", !on);
        if (contactTab) contactTab.classList.toggle("active", on);
      }, { rootMargin: "-40% 0px -40% 0px" }).observe(contactSec);
    }
    initHero();
    var sg = $("#home-stories");
    if (sg) {
      var st = N96.stories;
      sg.innerHTML = storyCard(st[0], "feature") + '<div class="stories-side">' + st.slice(1, 3).map(function (s) { return storyCard(s, "row"); }).join("") + '</div>';
    }
    var hs = $("#home-services");
    if (hs) {
      hs.innerHTML = N96.services.map(function (sv, i) {
        return '<a class="svc-card" href="services.html#service-' + (i + 1) + '">' +
          '<div class="img"><img src="' + sv.image + '" alt="' + esc(sv.title) + '" loading="lazy"></div>' +
          '<div class="body"><span class="eyebrow">' + esc(sv.eyebrow) + '</span><h3>' + esc(sv.title) + '</h3>' +
          '<p>' + esc(sv.text) + '</p><span class="more">Learn more →</span></div></a>';
      }).join("");
    }
    var vr = $("#venue-row");
    if (vr && N96.venues) {
      vr.innerHTML = N96.venues.map(function (v) {
        var tag = v.project ? 'a href="' + esc(projectHref(v.project)) + '"' : "div";
        return '<' + tag + ' class="venue">' +
          '<div class="venue-arch"><img src="' + esc(v.photo) + '" alt="' + esc(v.name + ", " + v.place) + '" loading="lazy"></div>' +
          '<span class="venue-place">' + esc(v.place) + '</span>' +
          '<h3 class="venue-name">' + esc(v.name) + '</h3>' +
        '</' + (v.project ? "a" : "div") + '>';
      }).join("") +
      '<a class="venue venue--next" href="#contact"><div class="venue-arch"><span>Your venue<br>next?</span></div>' +
        '<span class="venue-place">Anywhere in India</span><h3 class="venue-name">Let\'s talk</h3></a>';
    }
    var hp = $("#home-projects");
    if (hp) hp.innerHTML = N96.homeProjects.map(function (id) { return projectCard(projectById(id)); }).join("");
  }

  /* =========================================================
     PAGE: ALL PROJECTS
     ========================================================= */
  if (page === "projects") {
    var grid = $("#projects-grid"), chips = $("#project-filters");
    var valid = N96.categories.map(function (c) { return c.id; });
    var start = (location.hash || "").replace("#", "");
    if (valid.indexOf(start) < 0) start = "all";
    function render(cat) {
      var list = N96.projects.filter(function (p) { return cat === "all" || p.category === cat; });
      grid.innerHTML = list.length ? list.map(projectCard).join("") :
        '<div class="empty-note">No ' + esc(catLabel(cat).toLowerCase()) + ' projects yet. Add one in js/data.js.</div>';
    }
    buildChips(chips, function (cat) {
      render(cat);
      try { history.replaceState(null, "", cat === "all" ? location.pathname : "#" + cat); } catch (e) {}
    }, start);
    render(start);
  }

  /* =========================================================
     PAGE: PROJECT DETAIL  (project.html#project-id)
     ========================================================= */
  if (page === "project") {
    // work/<id>.html pages carry their id in <body data-id>; project.html#id reads it from the address
    var fixedProject = document.body.getAttribute("data-id");
    function renderProject() {
      var id = fixedProject || (location.hash || "").replace("#", "");
      if (!fixedProject && hasPage("projects", id)) { location.replace(projectHref(id)); return; }   // old project.html#id link
      var p = projectById(id) || N96.projects[0];
      document.title = p.title + " · " + p.venue + ", " + p.location + " | N96 Decor";   // keep in sync with tools/build-pages.js
      var photos = photoList(p);

      $("#detail-hero").innerHTML = '<img src="' + photos[0] + '" alt="' + esc(p.title) + '">' +
        '<div class="crumbs"><div class="wrap"><a href="index.html">Home</a> &nbsp;/&nbsp; <a href="projects.html">Projects</a> &nbsp;/&nbsp; ' + esc(p.title) + '</div></div>';

      buildChips($("#detail-types"), null, p.category, true);

      var facts = [
        ["Event", p.event],
        ["Venue", p.venue],
        ["Location", p.location],
        ["Date", p.date],
        ["Guests", p.guests ? p.guests + "+" : ""],
        [p.styledFor ? "Styled for" : "Category", p.styledFor || catLabel(p.category)]
      ].filter(function (f) { return f[1]; });

      $("#detail-main").innerHTML =
        '<div class="detail-title"><span class="eyebrow">' + esc(p.event) + ' · ' + esc(p.venue) + '</span>' +
          '<h1>' + esc(p.tagline) + '</h1><p class="sub">' + esc(p.subtitle) + '</p></div>' +
        '<dl class="facts">' + facts.map(function (f) { return '<div class="fact"><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join("") +
          (p.palette ? '<div class="fact" style="grid-column:1/-1"><dt>Colour palette</dt><dd class="palette">' + p.palette.map(function (c) { return '<i style="background:' + esc(c) + '" title="' + esc(c) + '"></i>'; }).join("") + '</dd></div>' : "") +
        '</dl>' +
        '<div class="detail-story"><p class="lead">' + esc(p.lead) + '</p>' + p.story.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join("") +
          (p.highlights ? '<ul class="highlights">' + p.highlights.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join("") + '</ul>' : "") +
        '</div>' +
        '<div class="photo-grid">' + photos.map(function (src, i) {
          return '<button type="button" data-i="' + i + '" aria-label="Open photo ' + (i + 1) + '"><img src="' + src + '" alt="' + esc(p.title) + ' photo ' + (i + 1) + '" loading="lazy"></button>';
        }).join("") + '</div>' +
        navLinks(p);

      $all(".photo-grid button").forEach(function (b) {
        b.addEventListener("click", function () {
          var img = $("img", b); if (img.getAttribute("data-ph")) return; // empty photo spot
          var imgs = $all(".photo-grid button img").filter(function (i) { return !i.getAttribute("data-ph"); });
          openLightbox(liveItems(imgs, function () { return p.title + " · " + p.venue; }), imgs.indexOf(img));
        });
      });

      var others = N96.projects.filter(function (x) { return x.id !== p.id; });
      $("#detail-more").innerHTML = '<span class="eyebrow">Keep exploring</span><h3>More Projects</h3>' +
        '<div class="more-list">' + others.map(function (o) {
          return '<a class="more-item" href="' + projectUrl(o) + '"><img src="' + photoUrl(o, 1) + '" alt="" loading="lazy"><div><strong>' + esc(o.title) + '</strong><span>' + esc(o.venue) + ' · ' + esc(shortDate(o.date)) + (o.sample ? " · Sample" : "") + '</span></div></a>';
        }).join("") + '</div>' +
        '<p style="margin-top:20px"><a class="btn btn--ghost" href="projects.html">All projects</a></p>';
      window.scrollTo(0, 0);
    }
    function navLinks(p) {
      var i = N96.projects.indexOf(p), n = N96.projects.length;
      var prev = N96.projects[(i - 1 + n) % n], next = N96.projects[(i + 1) % n];
      return '<div class="prev-next"><a href="' + projectUrl(prev) + '"><small>← Previous</small>' + esc(prev.title) + '</a>' +
        '<a href="' + projectUrl(next) + '" style="text-align:right"><small>Next →</small>' + esc(next.title) + '</a></div>';
    }
    renderProject();
    if (!fixedProject) window.addEventListener("hashchange", renderProject);
  }

  /* =========================================================
     PAGE: GALLERY
     ========================================================= */
  if (page === "gallery") {
    var all = [];
    N96.projects.forEach(function (p) {
      photoList(p).forEach(function (src) { all.push({ src: src, caption: p.event + " · " + p.venue, link: projectUrl(p), cat: p.category }); });
    });
    (N96.galleryExtras || []).forEach(function (x) { all.push(x); });
    // Interleave so photos from different events sit side by side
    var groups = {}, order = [];
    all.forEach(function (x) { var k = x.link || x.cat; if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(x); });
    var mixed = [], more = true;
    for (var r = 0; more; r++) { more = false; order.forEach(function (k) { if (groups[k][r]) { mixed.push(groups[k][r]); more = true; } }); }
    all = mixed;

    var gcats = [["all", "All"], ["wedding", "Weddings"], ["pre-wedding", "Pre-Wedding"], ["private", "Private Parties"], ["florals", "Florals"]];
    var gf = $("#gallery-filters"), gm = $("#gallery-grid");
    gf.innerHTML = gcats.map(function (c, i) {
      return '<button type="button" class="chip' + (i === 0 ? " is-active" : "") + '" data-cat="' + c[0] + '">' + c[1] + '</button>';
    }).join("");
    var shown = all;
    function renderGallery(cat) {
      shown = all.filter(function (x) { return cat === "all" || x.cat === cat; });
      gm.innerHTML = shown.map(function (x, i) {
        return '<figure><img src="' + x.src + '" alt="' + esc(x.caption) + '" data-link="' + esc(x.link || "") + '" loading="lazy"><figcaption>' + esc(x.caption) + '</figcaption><button type="button" aria-label="Open ' + esc(x.caption) + '"></button></figure>';
      }).join("");
    }
    gf.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $all(".chip", gf).forEach(function (x) { x.classList.toggle("is-active", x === b); });
      renderGallery(b.getAttribute("data-cat"));
    });
    gm.addEventListener("click", function (e) {
      var b = e.target.closest("figure button"); if (!b) return;
      var imgs = $all("#gallery-grid figure img").filter(function (i) { return !i.getAttribute("data-ph"); });
      openLightbox(liveItems(imgs, function (i) { return i.getAttribute("alt"); }), imgs.indexOf($("img", b.parentNode)));
    });
    renderGallery("all");
  }

  /* =========================================================
     PAGE: COUPLE STORIES
     ========================================================= */
  if (page === "stories") {
    var sl = $("#stories-list");
    sl.innerHTML = N96.stories.map(function (s) {
      var links = s.projects.map(projectById).filter(Boolean);
      return '<article class="story-long" id="' + s.id + '">' +
        '<div class="story-media"><img class="main" src="' + s.cover + '" alt="' + esc(s.title) + '" loading="lazy">' +
          '<div class="thumbs">' + s.thumbs.map(function (t) { return '<img src="' + t + '" alt="" loading="lazy">'; }).join("") + '</div></div>' +
        '<div class="story-text"><span class="eyebrow">' + esc(s.couple) + '</span><h2>' + esc(s.title) + '</h2><p class="meta">' + esc(s.meta) + '</p>' +
          s.body.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join("") +
          '<div style="display:flex;gap:12px;flex-wrap:wrap">' + links.map(function (p) { return '<a class="btn btn--ghost" href="' + projectUrl(p) + '">' + esc(p.event) + ' photos <span class="arrow">→</span></a>'; }).join("") + '</div>' +
        '</div></article>';
    }).join("");
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView(); }, 50); }
  }

  /* =========================================================
     PAGE: FOUNDERS
     ========================================================= */
  if (page === "founders") {
    var fi = N96.foundersIntro || {};
    $("#founders-intro").innerHTML = '<span class="eyebrow">About us</span><h1>' + esc(fi.heading || "Our Founders") + '</h1><p>' + esc(fi.text || "") + '</p>' +
      '<div class="founder-jump">' + N96.founders.map(function (f) { return '<a class="chip" href="#' + f.id + '">' + esc(f.name) + '</a>'; }).join("") + '</div>';
    $("#founders-list").innerHTML = N96.founders.map(function (f) {
      return '<article class="founder-profile" id="' + f.id + '">' +
        '<div class="fp-photo"><img src="' + f.photo + '" alt="' + esc(f.name) + '"><span class="fp-role">' + esc(f.role) + '</span></div>' +
        '<div class="fp-text">' +
          '<span class="eyebrow">' + esc(f.role) + '</span>' +
          '<h2>' + esc(f.name) + '</h2>' +
          '<p class="fp-tagline">' + esc(f.tagline) + '</p>' +
          f.paragraphs.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join("") +
          '<h3 class="fp-sub">What ' + esc(f.name.split(" ")[0]) + ' leads</h3>' +
          '<ul class="highlights">' + f.focus.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>' +
          '<dl class="facts fp-facts">' + f.facts.map(function (x) { return '<div class="fact"><dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd></div>'; }).join("") + '</dl>' +
        '</div></article>';
    }).join("");
    if (location.hash) { var ft = document.getElementById(location.hash.slice(1)); if (ft) setTimeout(function () { ft.scrollIntoView(); }, 50); }
    else {
      // open from the very top (stops the browser restoring an old scroll position)
      try { history.scrollRestoration = "manual"; } catch (err) {}
      window.scrollTo(0, 0);
      window.addEventListener("load", function () { window.scrollTo(0, 0); });
    }
  }

  /* =========================================================
     PAGE: SERVICES
     ========================================================= */
  if (page === "services") {
    $("#services-list").innerHTML = N96.services.map(function (s, i) {
      return '<div class="service" id="service-' + (i + 1) + '"><div class="service-img' + (s.arch ? " arch" : "") + '"><img src="' + s.image + '" alt="' + esc(s.title) + '" loading="lazy"></div>' +
        '<div><span class="eyebrow">' + esc(s.eyebrow) + '</span><h2>' + esc(s.title) + '</h2><p>' + esc(s.text) + '</p>' +
        '<ul>' + s.points.map(function (pt) { return '<li>' + esc(pt) + '</li>'; }).join("") + '</ul></div></div>';
    }).join("");
    if (location.hash) { var st2 = document.getElementById(location.hash.slice(1)); if (st2) setTimeout(function () { st2.scrollIntoView(); }, 60); }
  }

  /* =========================================================
     PAGE: CONTACT — faint diagonal brand words behind the form
     ========================================================= */
  var wordsBg = $(".words-bg");
  if (wordsBg) {
    var words = ["Meaningful", "Creative", "Personalized", "Sophisticated", "Artisanal"];
    var rows = [];
    for (var r = 0; r < 22; r++) {
      var line = [];
      for (var w = 0; w < 14; w++) line.push(words[(w + r * 2) % words.length]);
      rows.push("<span>" + line.join(" &nbsp; ") + "</span>");
    }
    wordsBg.innerHTML = rows.join("");
  }

  /* =========================================================
     JOIN US — country list fills the phone code automatically
     ========================================================= */
  var countrySel = $("#j-country"), phoneIn = $("#j-phone");
  if (countrySel && phoneIn && window.N96_COUNTRIES) {
    countrySel.innerHTML = N96_COUNTRIES.map(function (c) {
      return '<option value="' + esc(c.name) + '" data-code="' + esc(c.code) + '"' + (c.name === "India" ? " selected" : "") + '>' + esc(c.name) + " (" + esc(c.code) + ')</option>';
    }).join("");
    var prevCode = "+91";
    countrySel.addEventListener("change", function () {
      var code = countrySel.options[countrySel.selectedIndex].getAttribute("data-code");
      var v = phoneIn.value.trim();
      if (v.indexOf(prevCode) === 0) v = v.slice(prevCode.length);   // remove the old code
      else v = v.replace(/^\+\d+/, "");                              // or any code typed by hand
      phoneIn.value = code + " " + v.trim();
      prevCode = code;
      phoneIn.focus();
      try { phoneIn.setSelectionRange(phoneIn.value.length, phoneIn.value.length); } catch (err) {}
    });
  }

  /* =========================================================
     FORMS (Contact enquiry / Join us application)
     When someone presses Submit:
       1. WhatsApp opens with all their details typed, addressed to your
          WhatsApp number (N96.config.whatsapp) — they just tap Send.
       2. Live on Netlify: the form (and resume file) is emailed to you via
          Netlify Forms, then they see thank-you.html.
          On your computer / preview / GitHub Pages: an email to you
          (N96.config.email) is prepared instead.
     ========================================================= */
  var CAN_POST = !IS_LOCAL && !/claude|anthropic|github\.io$/.test(location.hostname);
  var WA = String(C.whatsapp || "").replace(/\D/g, "");
  function collect(form) {
    var subject = form.getAttribute("data-subject") || "Website enquiry";
    var lines = [], hasFile = false;
    $all("input, select, textarea", form).forEach(function (f) {
      if (!f.name || f.type === "hidden" || f.name === "bot-field") return;
      if (f.type === "file") { if (f.files && f.files.length) hasFile = true; return; }
      if (f.id === "j-country") return; // the code is already in the phone number
      if (!f.value.trim()) return;
      var label = form.querySelector('label[for="' + f.id + '"]');
      lines.push((label ? label.textContent.replace(/\s+/g, " ").trim() : f.name) + ": " + f.value.trim());
    });
    var nameField = form.querySelector('[name="name"]');
    if (nameField && nameField.value) subject += " from " + nameField.value.trim();
    return { subject: subject, lines: lines, hasFile: hasFile };
  }
  function emailHref(d) {
    var body = d.lines.join("\n") + (d.hasFile ? "\n\n(Resume attached)" : "");
    if (C.emailOpensGmail) return "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(C.email) + "&su=" + encodeURIComponent(d.subject) + "&body=" + encodeURIComponent(body);
    return "mailto:" + C.email + "?subject=" + encodeURIComponent(d.subject) + "&body=" + encodeURIComponent(body);
  }
  function waHref(d, resumeSent) {
    var txt = "*" + d.subject + "*\n\n" + d.lines.join("\n") +
      (d.hasFile ? (resumeSent ? "\n\n(Resume uploaded on the website form)" : "\n\n(I will share my resume here)") : "");
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(txt);
  }
  function statusBox(form) {
    var st = form.querySelector(".form-status");
    if (!st) { st = document.createElement("div"); st.className = "form-status"; st.setAttribute("role", "status"); form.appendChild(st); }
    return st;
  }
  /* ---------- Contact form: sent straight to N96.config.formEmail (no email app, no WhatsApp) ---------- */
  $all("form[data-formsubmit]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = statusBox(form), btn = form.querySelector('button[type="submit"]');
      var to = C.formEmail || C.email;
      var payload = {};
      $all("input, select, textarea", form).forEach(function (f) {
        if (!f.name) return;
        if (f.name === "_honey") { payload._honey = f.value; return; }
        if (!f.value.trim()) return;
        var label = form.querySelector('label[for="' + f.id + '"]');
        payload[label ? label.textContent.trim() : f.name] = f.value.trim();
      });
      var nm = form.querySelector('[name="name"]');
      payload._subject = (form.getAttribute("data-subject") || "New enquiry") + (nm && nm.value ? " (" + nm.value.trim() + ")" : "");
      payload._template = "table";
      payload._captcha = "false";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      st.innerHTML = "Sending your details…";
      if (location.protocol === "file:") {
        if (btn) { btn.disabled = false; btn.textContent = "Submit"; }
        st.innerHTML = "The form can only send when the website is opened with <strong>Live Server</strong> (Go Live in VS Code) or on the live website, not by double-clicking index.html.";
        return;
      }
      var url = "https://formsubmit.co/ajax/" + encodeURIComponent(to);
      if (C.web3formsKey) {                 // backup service: Web3Forms (key from web3forms.com)
        url = "https://api.web3forms.com/submit";
        payload.access_key = C.web3formsKey;
        payload.subject = payload._subject; payload.from_name = "N96 Decor website";
        payload.botcheck = payload._honey || "";
        delete payload._subject; delete payload._template; delete payload._captcha; delete payload._honey;
      }
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (j) {
            if (r.ok && String(j.success) === "true") return;
            var err = new Error(j.message || ("HTTP " + r.status)); err.service = true; throw err;
          });
        })
        .then(function () {
          form.reset();
          if (btn) { btn.disabled = false; btn.textContent = "Submit"; }
          st.innerHTML = "<strong>Thank you!</strong> Your details have been sent. We will get in touch with you soon.";
        })
        .catch(function (err) {
          if (btn) { btn.disabled = false; btn.textContent = "Submit"; }
          var msg = String(err && err.message || "");
          if (window.console) console.warn("Contact form:", msg);
          if (/activat/i.test(msg)) {
            st.innerHTML = "<strong>One-time setup needed:</strong> this form has to be activated before enquiries can be delivered. " +
              "An email from <strong>FormSubmit</strong> has just been sent to <strong>" + esc(to) + "</strong> (check Spam/Promotions too). " +
              "Click <strong>Activate Form</strong> in that email, then submit this form again.";
          } else if (!err || !err.service) {
            st.innerHTML = "Couldn't reach the email service. Please check your internet connection and try again, or email us at <strong>" + esc(C.email) + "</strong>.";
          } else {
            st.innerHTML = "Sorry, your details couldn't be sent just now (" + esc(msg) + "). Please try again, or email us at <strong>" + esc(C.email) + "</strong>.";
          }
        });
    });
  });

  $all("form[data-mail-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!form.hasAttribute("data-netlify") && form.getAttribute("action")) return; // Formspree etc.
      e.preventDefault();
      var d = collect(form), st = statusBox(form);
      var useNetlify = form.hasAttribute("data-netlify") && CAN_POST;
      var wa = WA ? waHref(d, useNetlify) : "";
      var waWin = null;
      if (wa) { try { waWin = window.open(wa, "_blank"); if (waWin) waWin.opener = null; } catch (err) {} }
      var waBtn = wa ? '<a class="btn" href="' + wa + '" target="_blank" rel="noopener">Send on WhatsApp</a>' : "";
      var mailBtn = '<a class="btn btn--ghost" href="' + emailHref(d) + '"' + (C.emailOpensGmail ? ' target="_blank" rel="noopener"' : "") + '>Send by email</a>';

      if (useNetlify) {
        st.innerHTML = "Sending your details…";
        var btn = form.querySelector('button[type="submit"]'); if (btn) btn.disabled = true;
        fetch("/", { method: "POST", body: new FormData(form) })
          .then(function (r) {
            if (!r.ok) throw new Error(r.status);
            if (waWin || !wa) { window.location.href = form.getAttribute("action") || "thank-you.html"; return; }
            st.innerHTML = "<strong>Thank you! Your details have been sent.</strong> Tap below to also send them to us on WhatsApp.<div class=\"st-actions\">" + waBtn + "</div>";
          })
          .catch(function () {
            if (btn) btn.disabled = false;
            st.innerHTML = "Sorry, the form couldn't be sent just now. Please send your details on WhatsApp or by email:<div class=\"st-actions\">" + waBtn + mailBtn + "</div>";
          });
      } else {
        st.innerHTML = (waWin ? "WhatsApp has opened with your details. Tap Send there. " : "") +
          "You can also send them to us here:" + "<div class=\"st-actions\">" + (waWin ? "" : waBtn) + mailBtn + "</div>" +
          (d.hasFile ? "<small>Please attach your resume in the email or WhatsApp chat.</small>" : "");
      }
    });
  });
})();
