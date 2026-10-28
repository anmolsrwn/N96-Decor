# N96 Decor Website: Setup & Publishing Guide

This folder is your complete website. It is plain HTML, CSS and JavaScript, so it runs on any free host with no server, database or monthly fees.

---

## 1. What is in this folder

```
n96-decor/
│
├── PAGES YOU OPEN (main folder)
│   ├── index.html        Home page (slider, about, stories, 6 projects, contact)
│   ├── projects.html     All projects, 4 per row, with filter buttons
│   ├── gallery.html      All photos with filters and a full-screen viewer
│   ├── stories.html      Couple stories (blog)
│   ├── services.html     Services and "how we work"
│   ├── founders.html     About / Founders
│   ├── join.html         Join Us page with application form
│   ├── thank-you.html    Shown after a form is sent
│   └── contact.html      Old address, forwards to the form on the home page
│
├── TEMPLATES
│   ├── project.html      Layout for every project page (also opens as project.html#project-id)
│   └── city.html         Layout for every city page (also opens as city.html#city-id)
│
├── MADE AUTOMATICALLY (do not edit by hand, see section 4c)
│   ├── work/             One page per project:  work/<project-id>.html
│   └── cities/           One page per city:     cities/<city-id>.html
│
├── css/style.css         All colours, fonts and layout
│
├── js/
│   ├── data.js           ALL TEXT, PROJECTS, STORIES AND CONTACT DETAILS  ← edit this
│   ├── chatbot-answers.js  CHATBOT QUESTIONS & ANSWERS  ← edit this
│   ├── main.js           Site behaviour (no need to edit)
│   ├── chatbot.js        Chatbot behaviour (no need to edit)
│   ├── map-shape.js      Map shapes and position (no need to edit)
│   ├── countries.js      Country list for the Join Us form (no need to edit)
│   └── generated-pages.js  List of the automatic pages (made by the script)
│
├── tools/build-pages.js  Script that makes work/ and cities/ (see section 4c)
├── tools/prepare-deploy.js  Makes the clean dist/ folder you upload to Netlify (see section 7)
├── dist/                 Made by prepare-deploy.js: the folder you upload (safe to delete, rebuilt each time)
│
├── images/               ALL PHOTOS (see images/PHOTO-GUIDE.txt)
│   ├── hero/             Home slider: slide-1.jpg … slide-6.jpg
│   ├── about/            Home "About" portrait: portrait.jpg
│   ├── team/             Founder photos: anubhuti.jpg, naghmi.jpg, founders-together.jpg
│   ├── services/         One photo per service
│   ├── projects/         One folder per project: 1.jpg (cover) … 10.jpg
│   ├── gallery/          Extra gallery photos
│   └── brand/            Logo, favicon, world map (world-map-pista.png)
│
├── fonts/                Optional custom fonts (see fonts/READ-ME.txt)
├── .vscode/              VS Code settings (recommends the Live Server extension)
└── README.md             This guide
```

**Rule of thumb:** to change words, projects or contact details, edit only `js/data.js`. To change photos, replace files in `images/`.

---

## 2. Set up in VS Code (step by step)

### A. Install (one time)
1. Download **Visual Studio Code** from [code.visualstudio.com](https://code.visualstudio.com/) and install it (Windows: tick "Add to PATH" and "Open with Code" during install).
2. Install **Google Chrome** if you don't have it (for previewing).

### B. Open the project
1. Unzip `n96-decor.zip` somewhere easy, e.g. `Documents/n96-decor`. Don't work inside the zip.
2. Open VS Code → **File → Open Folder…** → select the `n96-decor` folder → **Select Folder**.
3. If asked "Do you trust the authors of the files in this folder?", click **Yes, I trust the authors**.
4. A pop-up says *"This workspace has extension recommendations"* → click **Install**. This installs **Live Server** (preview) and **Prettier** (tidy code).
   If you miss the pop-up: click the Extensions icon in the left bar (four squares, or Ctrl+Shift+X), search **Live Server** (by Ritwick Dey) → **Install**.

### C. Preview the website
1. In the left panel (Explorer), right-click **index.html** → **Open with Live Server**. Or click **Go Live** at the bottom-right of VS Code.
2. Your browser opens at `http://127.0.0.1:5500/index.html`.
3. Keep it open. Every time you save a file (Ctrl+S), the browser refreshes by itself.

### D. Your everyday workflow
1. Edit text in `js/data.js` or chatbot answers in `js/chatbot-answers.js` → Ctrl+S → check the browser.
2. Add photos by dragging them from your computer into the right folder under `images/` in the VS Code Explorer (or copy them in with File Explorer / Finder). Use the exact file names shown in the "Add photo here" boxes.
3. When everything looks right, publish (section 7).

**Photo spots:** while you preview with Live Server, every empty photo position shows a dashed **"Add photo here"** box with the exact file name and folder to use, e.g. `images/projects/jw-wedding/7.jpg`. Put a photo with that name in that folder, save, and it appears. On the live website, empty spots are hidden automatically, so visitors never see them.

**Handy shortcuts:** Ctrl+S save · Ctrl+Z undo · Ctrl+P find a file by name · Ctrl+F search in a file · Ctrl+Shift+F search the whole project. (On Mac use Cmd instead of Ctrl.)

You can also simply double-click `index.html` to open it in a browser without VS Code; everything works the same.

---

## 3. Before you go live: checklist

Open `js/data.js` and fix every line marked `TODO`:

- [ ] **Instagram link and handle** (`instagram` and `instagramHandle`). Confirm it's your exact handle.
- [ ] **WhatsApp** (optional): put your number as `"919990960100"` to show a WhatsApp button.
- [ ] **Guest counts** for each project. The current numbers are placeholders.
- [ ] **Couple names** for St. Regis, Jaypee Greens and Raffles projects (the `tagline` line). Only add names the couples are happy to share.
- [ ] **Replace the 5 sample projects** (they show a "Sample" badge and have empty photo folders). Turn them into real birthday, corporate and other events, or delete them.
- [ ] **Fill photo spots** for each project (up to 10 photos per project).
- [ ] **Higher-resolution photos.** The current photos were taken out of the brochure PDF, so they are smaller than your originals. Replace them with the original files (see section 5).

---

## 4. How to edit content

### Change contact details and social links
In `js/data.js`, edit `N96.config`: `email`, `phones`, `instagram`, `facebook`, `pinterest`. The footer "Socials" icons (Call, Instagram, Email, Facebook, Pinterest) use these automatically. Replace the Facebook and Pinterest links with your own pages.

### The menu
The top menu shows Home, Gallery, Couple Stories and Contact. **Contact** scrolls to the contact form at the bottom of the home page (there is no separate contact page; old links to `contact.html` forward there). The other pages (About / Founders, Projects, Services, Join Us) are linked from the home page and the footer "Explore" list.

### Venues map and city pages
The "Venues we've worked at" section is **one world map** (picture: `images/brand/world-map.png`) with every place marked by a dot and a name tag. Clicking a tag or dot opens that city's page. On phones the map zooms into the area around your places. Places come from `N96.cities` in `js/data.js`; to move a name tag, add `label: [x, y]` to that city (how far right/down from the dot, e.g. `label: [30, -20]`). Each city has a pin and a page (`city.html#goa`, `city.html#delhi` …) that lists every project whose `city:` matches.
- **Add a city:** copy a line in `N96.cities`, give it a new `id`, `name`, `region` and its `lat`/`lon` (right-click the place in Google Maps to copy them). Places anywhere in the world appear automatically in the right spot from their `lat`/`lon`.
- **Link a project to a city:** in its project block set `city: "goa"` (the city's id).

### About photo arch
The arch in the About section shows, one by one, the photos in `N96.aboutSlides` (`js/data.js`), changing every 3 seconds (`N96.aboutSlideSpeed`). The first photo, `images/team/founders-together.jpg`, is Anubhuti and Naghmi combined into one picture. Add, remove or reorder photos in that list.

### Home page gallery
The 16-photo gallery on the home page picks photos from every project folder (and `images/gallery/`) and keeps swapping them. Change the speed with `N96.homeGallerySpeed` in `js/data.js` (1800 = one photo every 1.8 seconds). The full Gallery page shows every photo.

### Add a new project
1. Pick a short id with no spaces, e.g. `taj-mehendi-2026`.
2. Create the folder `images/projects/taj-mehendi-2026/` and put the photos in it named `1.jpg`, `2.jpg` … `10.jpg` (1.jpg is the cover and big top photo).
   **Easiest way:** rename one of the `sample-…` folders and edit that sample's block in `data.js`.
3. In `js/data.js`, copy one project block `{ ... },`, paste it inside `N96.projects`, and change:
   - `id` → `"taj-mehendi-2026"`
   - `category` → one of `wedding`, `pre-wedding`, `birthday`, `corporate`, `private`
   - `title`, `tagline` (couple / birthday person / company name), `subtitle`
   - `event`, `venue`, `location`, `date`, `guests`
   - `photos` → how many photo spots to show (keep 10)
   - `lead`, `story`, `highlights` → your write-up
   - delete the `sample: true,` line if you copied a sample
4. Save and refresh. It appears on the Projects page, in "More projects" on every project page, and in the Gallery.
5. Run `node tools/build-pages.js` (section 4c) so the project gets its own page `work/<id>.html` for Google and link previews. Until you do, the project still works through `project.html#<id>`.

### Choose the 6 projects on the home page
Edit `N96.homeProjects` — list 6 project ids in the order you want.

### Change the home slider photos
Replace `images/hero/slide-1.jpg` … `slide-6.jpg` with your photos (same names). To change the caption on each photo, edit `N96.heroSlides` in `js/data.js`. To add a 7th, add `slide-7.jpg` and copy one line in `N96.heroSlides`.

### Change the about, founder and service photos
Replace `images/about/portrait.jpg`, `images/team/anubhuti.jpg`, `images/team/naghmi.jpg` and the files in `images/services/`, keeping the same names.

### Add a new filter category (e.g. "Haldi")
Add `{ id: "haldi", label: "Haldi" }` to `N96.categories`, then use `category: "haldi"` on projects.

### Change colours or fonts
The theme is pista green, gold and cream, with a soft blush pink (`--blush`, `--blush-soft`, `--rose`) used for the Projects band, the footer and small details. At the top of `css/style.css`, the `:root` block lists every brand colour (`--pista-deep`, `--pista`, `--gold`, `--cream`, `--blush` …). Change a value once and it updates almost everywhere. A few small shades further down the file (overlays and shadows) are set by hand. The map picture is `images/brand/world-map-pista.png`. The logo files in `images/brand/` have a gold arch and pista "96"; the originals are in `tools/backup-green-blue-theme/`.

**Tip:** after editing `data.js`, if the page goes blank, you probably deleted a comma or a quote mark. Undo (Ctrl+Z) and try again. In Chrome, press F12 → Console to see which line has the problem.

---

## 4c. Project and city pages for Google and link previews

Each project and city has its own page (`work/jw-wedding.html`, `cities/goa.html` …) with its own title, description and link-preview tags, and the real text and photos in the HTML. Google, WhatsApp and Instagram read these without running JavaScript. They are made from `js/data.js` by a small script.

**Run it after you add, rename or delete a project or city, change a project's text, or add or remove photos:**

1. Install [Node.js](https://nodejs.org) once (the LTS version).
2. In VS Code open the Terminal (Ctrl+`) and run: `node tools/build-pages.js`
3. Upload or commit the `work/` and `cities/` folders and `js/generated-pages.js` with the rest of the site.

Good to know:
- Don't edit the files inside `work/` and `cities/`; they are rewritten each time. To change their layout, edit `project.html` or `city.html`, then run the script again.
- If you forget to run it, nothing breaks. Links to a project or city without a built page fall back to `project.html#<id>` / `city.html#<id>`, and every page redraws itself from `data.js` anyway. You only lose the Google/preview benefit for the new items.
- Old links such as `project.html#jw-wedding` forward to the new page.
- Samples and cities with no projects are marked `noindex`, so Google ignores them.
- Set `siteUrl` in `js/data.js` (e.g. `"https://n96decor.com"`) once you know your address, then run the script again. This adds the canonical link and the preview image and URL tags, which need a full web address.

## 4b. The chatbot

The "Ask us" button (bottom-right of every page) opens the N96 Assistant. It answers visitors instantly from `js/chatbot-answers.js`, works on free hosting, and costs nothing to run.

- **Add or change an answer:** open `js/chatbot-answers.js`, copy any `{ keywords: [...], answer: "...", chips: [...] },` block, change the words, save.
- **Keywords** are words visitors might type. Add lots of variations, including Hinglish (e.g. `"kitna"`, `"shaadi"`).
- **Links** in answers: `[text](contact.html)`. **New paragraph:** `\n\n`. **Your contact details:** `{phones}`, `{email}`, `{instagram}`.
- If the bot can't match a question, it offers your phone and email and a "Leave my number" form.
- **Leave my number** opens the visitor's email app with their details. If you set `whatsapp` in `js/data.js`, it opens WhatsApp to your number instead (recommended).
- **Test a question:** open the site, press F12 → Console, type `N96.matchQuestion("your question")` and it shows which answer it picks.

**Upgrade option — AI chatbot:** an AI version (that writes its own replies) needs a small server function and a paid AI API key, so it has a running cost. Ask if you want this later.

## 5. Photo guidance

### Sizes to export
| Where it's used | Shape | Export size | Target file size |
|---|---|---|---|
| Home slider | Landscape | 2000 × 1125 px | 300–500 KB |
| Project cover (photo 1) | Landscape or portrait | 2000 px on the long side | 300–500 KB |
| Project photos 2–10 | Any | 1600 px on the long side | 150–350 KB |
| About portrait | Portrait 4:5 | 1200 × 1500 px | 200–350 KB |
| Founder photos | Portrait 4:5 | 900 × 1125 px | under 200 KB |

### How to compress (free)
- **[Squoosh](https://squoosh.app)** (Google, works in the browser): drop a photo in, choose "MozJPEG", quality 75–80, resize to the size above, download.
- **[TinyJPG](https://tinyjpg.com)**: drag up to 20 photos at once.
- On a phone: the "Photo & Picture Resizer" type apps work too.

Big, uncompressed camera photos (5–15 MB each) make the site very slow on mobile. Always compress first.

### Where each photo goes
See `images/PHOTO-GUIDE.txt` for the full map of folders and file names.

### Naming rules
- Project photos are just numbers inside the project folder: `images/projects/st-regis-wedding/7.jpg`, not `IMG 2045 Final.JPG`.
- Make sure the extension is lowercase `.jpg` (not `.JPG` or `.jpeg`). On Windows, turn on View → File name extensions to see it.
- Use `.jpg` for photos and `.png` only for the logo.
- Number photos in the order you want them shown.

### What to shoot / pick for each project
A good project page tells the story in 8–10 photos:
1. One wide "wow" shot of the whole setup (this becomes the cover).
2. The entrance or arrival moment.
3. The main stage, mandap or lounge.
4. 2–3 close-up details: monograms, cushions, napkins, signage, florals.
5. The space with guests or the couple (with permission).
6. An evening or lighting shot.

Your brochure's "What to post" ideas work well here: a behind-the-scenes photo of an artisan making a signature prop, and the custom monogram being painted.

### Photo credits and permissions
- Get written OK from couples before showing their names or faces.
- Some brochure photos carry another company's watermark (e.g. "The Wedding Day" on the St. Regis photos). Ask the photographer or planner for clean versions and credit them. Projects styled for planners (Silhouette Events, The Wedding Square) are already credited on their project pages.

---

## 6. Video guidance

**Best option: keep videos on Instagram or YouTube and link to them.** Hosting videos yourself makes a free site slow.

If you want a short silent background video in the home slider:
1. Export: MP4 (H.264), 1920×1080 or 1280×720, 10–20 seconds, no sound, **under 8 MB**. [HandBrake](https://handbrake.fr) (free) → preset "Web → Vimeo YouTube 720p30" then remove the audio track.
2. Put it in `images/` as e.g. `hero.mp4`.
3. Ask me and I'll add it to the slider with a photo fallback for slow connections.

For reels (e.g. the monogram slow reveal), post on Instagram and we can add an "Instagram reels" strip that links to them.

---

## 7. Make the website public (free) — Option A: Netlify (easiest)

1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Sign up free (use your N96decor@gmail.com Google account).
3. In VS Code open the Terminal and run `node tools/prepare-deploy.js`. It rebuilds the project pages and makes a clean **`dist`** folder with only what the website needs (no README, tools or backups). Drag the **`dist` folder** onto the Netlify page.
4. In about 30 seconds you get a live link like `random-name-123.netlify.app`. Share it with anyone.
5. Rename it: **Site configuration → Change site name** → e.g. `n96decor` → your site becomes `n96decor.netlify.app`.

**To update later:** run `node tools/prepare-deploy.js` again, then open your site in Netlify → **Deploys** → drag the new `dist` folder onto the "Drag and drop your site output folder here" box.

## 7. Option B: GitHub Pages (free, good for regular updates)

1. Create a free account at [github.com](https://github.com).
2. Click **New repository** → name it `n96decor` → Public → Create.
3. Click **uploading an existing file** → drag in everything *inside* the `n96-decor` folder (index.html, css, js, images…) → **Commit changes**.
4. Go to **Settings → Pages** → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save.
5. After 1–2 minutes the site is live at `https://<your-username>.github.io/n96decor/`.

To update: open the file on GitHub → pencil icon → edit → Commit. Or upload replacement files the same way.

---

## 8. Get your own domain (e.g. n96decor.com)

1. Buy a domain from a registrar such as GoDaddy, Hostinger, Namecheap or BigRock. `.com` and `.in` usually cost a few hundred to around a thousand rupees a year; check renewal prices, not just the first-year offer.
2. **If using Netlify:** Site → **Domain management → Add a domain** → type your domain → follow the steps. Netlify shows you either nameservers to paste at your registrar (simplest) or DNS records to add. HTTPS (the padlock) is set up automatically.
3. **If using GitHub Pages:** Settings → Pages → **Custom domain** → enter your domain. At your registrar add the DNS records GitHub shows (four `A` records and one `CNAME` for `www`). Tick **Enforce HTTPS** once it's available.
4. DNS changes can take from a few minutes up to 24–48 hours.

---

## 9. Receive the Contact and Join Us forms

### Contact form (home page) → straight to your Gmail
When a visitor presses **Submit**, their details (Name, Spouse, Phone, Date, Venue, Functions) are sent **directly to n96decor@gmail.com** in the background. Nothing opens on their side; they just see "Thank you!". This uses the free service [FormSubmit](https://formsubmit.co).

**One-time activation (do this once after the site is live):**
1. Open your live website and submit the contact form once yourself (use test details).
2. Check n96decor@gmail.com for an email from **FormSubmit** (look in Spam/Promotions too) and click **Activate Form**.
3. Done. Every enquiry from now on arrives in your inbox as a neat table, with the subject "New enquiry from the N96 Decor website (name)".

If clicking **Activate Form** shows "Not a valid link / Confirmation token not found", you clicked an older activation email. Only the newest one works: submit the form once, open the **latest** FormSubmit email (bottom of the Gmail conversation) and click Activate straight away, without submitting again first.

**Backup option, Web3Forms (no activation link):** go to [web3forms.com](https://web3forms.com), enter n96decor@gmail.com and click "Create Access Key". Copy the key they email you and paste it into `web3formsKey: ""` in `js/data.js`. The contact form then sends through Web3Forms instead.

To change the receiving inbox, edit `formEmail` in `js/data.js` (then activate again for the new address).
Note: the form can't send from the preview inside Claude; test it on your computer (Live Server) or on the live site.

### Join Us form
The Join Us form is set up for **Netlify Forms**, which is free and needs no code.

**If you host on Netlify (recommended):**
1. Publish the site on Netlify (section 7). Netlify finds both forms automatically.
2. In Netlify open your site → **Forms**. You'll see `enquiry` and `join-application`. If it says forms are disabled, click **Enable form detection** and deploy the folder again.
3. Go to **Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification**, enter N96decor@gmail.com, choose "Any form", Save.
4. Submit a test on the live site. Visitors see the "Thank you" page; you get an email, and every submission (with the resume file) is stored under **Forms**.

The free plan includes a monthly allowance of submissions and file uploads, enough for most studios. Resumes are limited to about 8 MB per submission.

**On your computer (VS Code), GitHub Pages or the preview:** pressing Submit opens the visitor's email app with all the answers filled in, addressed to you. A resume has to be attached in that email by hand.

**Not using Netlify?** Use [Formspree](https://formspree.io): create a form, copy its address, and in `contact.html` / `join.html` replace `action="thank-you.html"` with `action="https://formspree.io/f/yourcode"` and remove `data-netlify="true"`. (File uploads need a paid Formspree plan.)

## 10. Help people find you on Google

1. **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)): add your domain and request indexing of the home page.
2. **Google Business Profile** ([business.google.com](https://business.google.com)): create a free profile for N96 Decor with photos, phone and website link. This is what shows on Google Maps and local searches.
3. Put your website link in your **Instagram bio** and WhatsApp Business profile.
4. Keep adding projects: every new project page is another way for people to find you.
