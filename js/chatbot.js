/* =========================================================
   N96 DECOR — CHATBOT
   Answers visitor questions using js/chatbot-answers.js.
   Works on any free host (no server or API key needed).
   You don't need to edit this file; edit chatbot-answers.js.
   ========================================================= */
(function () {
  "use strict";
  if (!window.N96 || !N96.chatbot) return;
  var BOT = N96.chatbot, C = N96.config;
  var STORE = "n96-chat-v1";

  /* ---------- text helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function norm(s) { return " " + String(s).toLowerCase().replace(/[^a-z0-9ऀ-ॿ]+/g, " ").replace(/\s+/g, " ").trim() + " "; }
  function fill(s) {
    return s.replace(/\{email\}/g, C.email)
      .replace(/\{phones\}/g, C.phones.join(" or "))
      .replace(/\{instagram\}/g, C.instagramHandle || C.instagram);
  }
  // Light formatting: [text](link), new lines, bullets
  function format(s) {
    var html = esc(fill(s));
    html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, t, u) {
      var ext = /^https?:/.test(u);
      // project.html#id links in the answers use the static project page when one has been built
      u = u.replace(/^project\.html#([\w-]+)$/, function (m, id) { return window.N96 && N96.projectHref ? N96.projectHref(id) : m; });
      return '<a href="' + u + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + t + "</a>";
    });
    return html.split(/\n\n/).map(function (p) { return "<p>" + p.replace(/\n/g, "<br>") + "</p>"; }).join("");
  }

  /* ---------- matching ---------- */
  var intents = BOT.intents.map(function (it, i) {
    return { i: i, it: it, keys: it.keywords.map(function (k) { return norm(k).trim(); }).filter(Boolean) };
  });
  var GREETING = 0; // first intent is the greeting; it only wins when nothing else matches
  function score(text, keys) {
    var s = 0, words = text.trim().split(" "), used = {};
    keys.forEach(function (k) {
      if (k.indexOf(" ") > -1) { if (text.indexOf(" " + k + " ") > -1) s += k.length + 2; return; }
      for (var w = 0; w < words.length; w++) {
        if (used[w]) continue; // each word of the question counts once per topic
        var word = words[w];
        if (word === k) { s += k.length + 1; used[w] = 1; return; }
        // allow simple plurals / endings for longer words ("decorations" ~ "decoration")
        if (k.length >= 5 && word.indexOf(k) === 0 && word.length - k.length <= 4) { s += k.length; used[w] = 1; return; }
        if (word.length >= 5 && k.indexOf(word) === 0 && k.length - word.length <= 2) { s += word.length; used[w] = 1; return; }
      }
    });
    return s;
  }
  function findAnswer(msg) {
    var text = norm(msg), best = null, bestScore = 0;
    intents.forEach(function (x) {
      var s = score(text, x.keys);
      if (x.i === GREETING && s > 0) s = 0.5; // weak
      if (s > bestScore) { bestScore = s; best = x.it; }
    });
    if (!best) return { answer: BOT.fallback, chips: BOT.fallbackChips, miss: true };
    return best;
  }

  /* ---------- state (kept while the visitor browses between pages) ---------- */
  var state = { open: false, msgs: [] };
  try { var saved = JSON.parse(sessionStorage.getItem(STORE) || "null"); if (saved && saved.msgs) state = saved; } catch (e) {}
  function save() { try { sessionStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} }

  /* ---------- UI ---------- */
  var ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>';
  var ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12l16-8-6 16-2.5-6.5z"/></svg>';

  var root = document.createElement("div");
  root.className = "chatbot";
  root.innerHTML =
    '<button class="cb-launch" type="button" aria-label="Chat with N96 Decor" aria-expanded="false">' + ICON_CHAT + '<span>Ask us</span></button>' +
    '<section class="cb-panel" role="dialog" aria-label="N96 Decor chat" hidden>' +
      '<header class="cb-head">' +
        '<img src="images/brand/logo-mark.png" alt="">' +
        '<div><strong>' + esc(BOT.botName) + '</strong><span>Replies instantly · Team on {phones}</span></div>' +
        '<button class="cb-close" type="button" aria-label="Close chat">✕</button>' +
      '</header>' +
      '<div class="cb-body" aria-live="polite"></div>' +
      '<div class="cb-chips"></div>' +
      '<form class="cb-input"><label class="cb-sr" for="cb-text">Type your question</label>' +
        '<input id="cb-text" type="text" placeholder="Type your question…" autocomplete="off" maxlength="300">' +
        '<button type="submit" aria-label="Send">' + ICON_SEND + '</button></form>' +
    '</section>';
  root.querySelector(".cb-head span").textContent = "Replies instantly · Team: " + C.phones[0];
  document.body.appendChild(root);

  var launch = root.querySelector(".cb-launch"), panel = root.querySelector(".cb-panel"),
      body = root.querySelector(".cb-body"), chips = root.querySelector(".cb-chips"),
      form = root.querySelector(".cb-input"), input = root.querySelector("#cb-text");

  function bubble(m) {
    var d = document.createElement("div");
    d.className = "cb-msg cb-" + m.from;
    if (m.from === "bot") d.innerHTML = format(m.text);
    else d.textContent = m.text;
    body.appendChild(d);
  }
  function renderChips(list) {
    chips.innerHTML = "";
    (list || []).forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = c;
      b.addEventListener("click", function () { ask(c); });
      chips.appendChild(b);
    });
  }
  function scrollDown() { body.scrollTop = body.scrollHeight; }
  function renderAll() {
    body.innerHTML = "";
    state.msgs.forEach(bubble);
    var last = state.msgs[state.msgs.length - 1];
    renderChips(last && last.chips ? last.chips : BOT.startChips);
    scrollDown();
  }
  function botSay(text, chipList) {
    var m = { from: "bot", text: text, chips: chipList || [] };
    state.msgs.push(m); save();
    var typing = document.createElement("div");
    typing.className = "cb-msg cb-bot cb-typing"; typing.innerHTML = "<i></i><i></i><i></i>";
    body.appendChild(typing); scrollDown(); chips.innerHTML = "";
    setTimeout(function () {
      typing.remove(); bubble(m); renderChips(m.chips); scrollDown();
    }, 550 + Math.min(900, text.length * 4));
  }
  function ask(text) {
    text = String(text).trim(); if (!text) return;
    var m = { from: "user", text: text };
    state.msgs.push(m); save(); bubble(m); scrollDown();
    if (/leave my number|call me|callback|call back/i.test(text)) return showLeadForm();
    var r = findAnswer(text);
    botSay(r.answer, r.chips);
  }

  /* Lead form inside the chat */
  function showLeadForm() {
    chips.innerHTML = "";
    var f = document.createElement("form");
    f.className = "cb-msg cb-bot cb-lead";
    f.innerHTML = '<p>Share your details and the N96 team will get in touch.</p>' +
      '<label for="cb-l-name">Name</label><input id="cb-l-name" required autocomplete="name">' +
      '<label for="cb-l-phone">Phone</label><input id="cb-l-phone" type="tel" required autocomplete="tel">' +
      '<label for="cb-l-date">Event & date (optional)</label><input id="cb-l-date" placeholder="e.g. Wedding, Feb 2027, Goa">' +
      '<button type="submit">Send to N96</button>';
    body.appendChild(f); scrollDown();
    f.querySelector("input").focus();
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = f.querySelector("#cb-l-name").value, phone = f.querySelector("#cb-l-phone").value, ev = f.querySelector("#cb-l-date").value;
      var msg = "Hello N96 Decor, I'd like a callback.\nName: " + name + "\nPhone: " + phone + (ev ? "\nEvent: " + ev : "");
      f.remove();
      if (C.whatsapp) {
        botSay("Thank you, " + name + "! WhatsApp should open with your message ready. Just press send. If it doesn't open, call us on {phones}.", ["What services do you offer?"]);
        setTimeout(function () { window.open("https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg), "_blank"); }, 900);
      } else {
        botSay("Thank you, " + name + "! Your email app should open with your details ready. Just press send. If nothing opens, call us on {phones} or email {email}.", ["What services do you offer?"]);
        setTimeout(function () { window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Callback request from " + name) + "&body=" + encodeURIComponent(msg); }, 900);
      }
    });
  }

  function setOpen(open) {
    state.open = open; save();
    panel.hidden = !open;
    root.classList.toggle("is-open", open);
    launch.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      if (!state.msgs.length) { state.msgs.push({ from: "bot", text: BOT.greeting, chips: BOT.startChips }); save(); }
      renderAll();
      if (window.matchMedia("(min-width: 640px)").matches) input.focus();
    }
  }
  launch.addEventListener("click", function () { setOpen(!state.open); });
  root.querySelector(".cb-close").addEventListener("click", function () { setOpen(false); launch.focus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && state.open) setOpen(false); });
  form.addEventListener("submit", function (e) { e.preventDefault(); var v = input.value; input.value = ""; ask(v); });

  if (state.open) setOpen(true);

  // Small nudge bubble after a few seconds on the first visit
  try {
    if (!sessionStorage.getItem(STORE + "-nudged") && !state.open) {
      setTimeout(function () {
        if (state.open) return;
        var n = document.createElement("button");
        n.type = "button"; n.className = "cb-nudge"; n.textContent = "Planning a celebration? Ask me anything 👋";
        n.addEventListener("click", function () { n.remove(); setOpen(true); });
        root.appendChild(n);
        setTimeout(function () { n.remove(); }, 9000);
        sessionStorage.setItem(STORE + "-nudged", "1");
      }, 6000);
    }
  } catch (e) {}

  // For testing in the browser console: N96.matchQuestion("price")
  N96.matchQuestion = function (q) { var r = findAnswer(q); return r.miss ? "(fallback)" : r.keywords[0]; };
})();
