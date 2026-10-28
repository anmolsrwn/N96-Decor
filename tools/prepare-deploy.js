#!/usr/bin/env node
/* =========================================================
   N96 DECOR: prepare the folder you upload to Netlify
   ---------------------------------------------------------
       node tools/prepare-deploy.js

   1. runs tools/build-pages.js (so work/ and cities/ are current)
   2. makes a clean folder called  dist/  that holds only what the
      live website needs. Drag the dist folder onto
      https://app.netlify.com/drop
   Left out on purpose: README.md, tools/, .vscode/, photo guides,
   backups. dist/ is rebuilt from scratch every time.
   ========================================================= */
"use strict";
var fs = require("fs");
var path = require("path");
var cp = require("child_process");

var ROOT = path.resolve(__dirname, "..");
var DIST = path.join(ROOT, "dist");

// 1. rebuild the project and city pages
cp.execFileSync(process.execPath, [path.join(__dirname, "build-pages.js")], { stdio: "inherit" });

// 2. start from an empty dist/ (only ever deletes the folder named dist inside this project)
if (path.dirname(DIST) !== ROOT || path.basename(DIST) !== "dist") throw new Error("Unexpected dist path");
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST);

var count = 0;
function copyFile(from, to) { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); count++; }
function copyDir(rel, skip) {
  fs.readdirSync(path.join(ROOT, rel), { withFileTypes: true }).forEach(function (e) {
    var r = rel + "/" + e.name;
    if (skip && skip(r, e)) return;
    if (e.isDirectory()) copyDir(r, skip);
    else copyFile(path.join(ROOT, r), path.join(DIST, r));
  });
}

// pages and other files in the main folder (never the README)
fs.readdirSync(ROOT, { withFileTypes: true }).forEach(function (e) {
  if (e.isFile() && /\.(html|xml|txt|ico|webmanifest|toml)$/i.test(e.name)) copyFile(path.join(ROOT, e.name), path.join(DIST, e.name));
});
["css", "js", "work", "cities", "fonts", "images"].forEach(function (d) {
  if (!fs.existsSync(path.join(ROOT, d))) return;
  copyDir(d, function (r, e) {
    if (e.isDirectory()) return false;
    // notes for you, not for visitors; empty photo folders are skipped automatically
    return /(PHOTO-GUIDE|READ-ME)\.txt$/i.test(r);
  });
});
// _headers / _redirects, if you add them later, are Netlify settings files
["_headers", "_redirects"].forEach(function (f) { if (fs.existsSync(path.join(ROOT, f))) copyFile(path.join(ROOT, f), path.join(DIST, f)); });

var mb = 0;
(function size(dir) { fs.readdirSync(dir, { withFileTypes: true }).forEach(function (e) { var p = path.join(dir, e.name); if (e.isDirectory()) size(p); else mb += fs.statSync(p).size; }); })(DIST);
console.log("Ready: " + count + " files, " + (mb / 1048576).toFixed(1) + " MB in the dist folder.");
console.log("Next: drag the dist folder onto https://app.netlify.com/drop");
