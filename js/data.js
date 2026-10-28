/* =========================================================
   N96 DECOR — SITE CONTENT
   ---------------------------------------------------------
   This is the ONE file you edit to change text, projects,
   stories and contact details. No coding knowledge needed:
   just change the words between the quotes "..." and save.

   Photos live in  images/projects/  — see README.md for how
   to add or replace them.
   ========================================================= */

window.N96 = {};

/* ---------- Company & contact details ---------- */
N96.config = {
  name: "N96 Decor",
  // Your website address once it is live, e.g. "https://n96decor.com" (no slash at the end).
  // Used only by tools/build-pages.js for link previews (WhatsApp, Instagram, Google). Leave "" until you know it.
  siteUrl: "",
  tagline: "Making Meaningful Celebrations",
  services: "Wedding Decor | Florals | Set Design",
  email: "n96decor@gmail.com",
  // true  = clicking the email/Gmail icon opens Gmail in the browser (compose window)
  // false = it opens the visitor's own email app (Mail, Outlook, Gmail app on phones)
  emailOpensGmail: true,
  // Contact form enquiries are delivered to this inbox automatically (via formsubmit.co)
  formEmail: "n96decor@gmail.com",
  // OPTIONAL backup service: paste your Web3Forms access key here (from web3forms.com).
  // When filled in, the contact form uses Web3Forms instead of FormSubmit (no activation link needed).
  web3formsKey: "",
  phones: ["+91 99909 60100", "+91 87703 41040"],
  // TODO: confirm this is your exact Instagram handle
  instagram: "https://www.instagram.com/n96decor/",
  instagramHandle: "@n96decor",
  // TODO: paste your real Facebook and Pinterest page links (footer "Socials" icons)
  facebook: "https://www.facebook.com/",
  pinterest: "https://www.pinterest.com/",
  // Optional: WhatsApp number in international format without + or spaces, e.g. "919990960100".
  // Leave empty "" to hide the WhatsApp button.
  whatsapp: "919669654444",   // WhatsApp number (country code + number, no + or spaces)
  serviceArea: "Weddings and celebrations across India: Delhi NCR, Bengaluru, Goa, Udaipur and beyond"
};

/* ---------- Project categories (used by the filter buttons) ---------- */
N96.categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Wedding" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "birthday", label: "Birthday" },
  { id: "corporate", label: "Corporate" },
  { id: "private", label: "Private Party" }
];

/* ---------- Projects ----------
   id        : short name used in the web address (no spaces)
   category  : one of the category ids above
   title     : name shown on the project card
   tagline   : the big line on the project page (couple / host name)
   photos    : how many photo spots the project page shows (up to 10).
               Put the photos in  images/projects/<id>/  named 1.jpg, 2.jpg, 3.jpg ...
               1.jpg is the cover photo. Missing photos show an "Add photo"
               box while you work on your computer, and are hidden on the live site.
   sample    : true = example project, replace with a real one before going live
-------------------------------------------------------------------------- */
N96.projects = [
  {
    id: "st-regis-wedding",
    city: "goa",          // city id from N96.cities (venues map)
    category: "wedding",
    title: "The Trellis Garden Wedding",
    tagline: "A Sunset Wedding by the Sea",          // TODO: add couple names, e.g. "Riya & Kabir"
    subtitle: "A flowering green trellis garden, styled for The Wedding Square",
    event: "Wedding",
    venue: "St. Regis Goa Resort",
    location: "South Goa",
    date: "December 2023",
    guests: "300",                                   // TODO: confirm guest count
    styledFor: "The Wedding Square",
    palette: ["#5e7a4a", "#f1e7d3", "#d98c9c", "#9a8cc2", "#c4a26a"],
    photos: 10,
    lead: "We built a walk-in garden at the edge of the Arabian Sea: a sage-green trellis pavilion wrapped in climbing roses, wisteria and foxgloves, with crystal chandeliers glowing against the sunset.",
    story: [
      "The brief was a ceremony that felt like it had always been growing there. Hand-painted green trellis panels framed every view of the sea, and the planting was layered from low ferns to tall spires so guests felt surrounded by flowers from every seat.",
      "A tiered marble fountain anchored the courtyard, while velvet seating in dusty rose and soft lighting turned the space into an evening lounge after the vows."
    ],
    highlights: ["Hand-painted trellis pavilion", "Suspended crystal chandeliers", "Layered English-garden florals", "Fountain courtyard lounge"]
  },
  {
    id: "jw-wedding",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "wedding",
    title: "Marigold & Brass Wedding",
    tagline: "Aditi & Parichay",
    subtitle: "The wedding: vermilion, marigold and temple brass",
    event: "Wedding",
    venue: "JW Marriott Golfshire",
    location: "Bengaluru",
    date: "October 2025",
    guests: "400",                                   // TODO: confirm guest count
    palette: ["#b8321f", "#e8752a", "#f2b84b", "#c79a4a", "#f4ece0"],
    photos: 10,
    lead: "For the wedding day, we drew on South Indian temple craft: carved vermilion gateways, brass lamp towers and a mandap crowned with a floating chandelier of marigold and rajnigandha strands.",
    story: [
      "Guests entered through layered printed arches lined with towering floral cages, walking a red carpet into the ceremony lawn. As the sun set, hundreds of diyas on tiered brass stands lit the mandap from below.",
      "Up close, every table carried personal details: framed monograms, bowls of jasmine and roses, and hand-embroidered cushions on low seating for family."
    ],
    highlights: ["Carved entrance gateways", "Floating marigold chandelier mandap", "Brass lamp towers with diyas", "Embroidered monogram cushions"]
  },
  {
    id: "jw-welcome-lunch",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "Powder Blue Welcome Lunch",
    tagline: "Aditi & Parichay",
    subtitle: "The welcome lunch: blue, white and the couple's dogs",
    event: "Welcome Lunch",
    venue: "JW Marriott Golfshire",
    location: "Bengaluru",
    date: "October 2025",
    guests: "150",                                   // TODO: confirm guest count
    palette: ["#9cb8d6", "#ffffff", "#c79b62", "#e8dcc4", "#6f8f6a"],
    photos: 10,
    lead: "A poolside lunch in powder blue and white, where the couple's two dogs became the motif of the day: embroidered on napkins, printed on the welcome sign and tucked into every detail.",
    story: [
      "Rattan arch screens with blue hydrangeas and delphiniums lined the pool, and fringed white parasols shaded the lounge. Striped drapes and toile tablecloths kept the look fresh and relaxed.",
      "This is the kind of personalisation we love most: guests kept their napkins as keepsakes, and the dog motif started conversations at every table."
    ],
    highlights: ["Custom dog-motif embroidered napkins", "Rattan arch screens by the pool", "Fringed parasol lounge", "Toile and stripe table linen"]
  },
  {
    id: "jw-cocktail",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "The Moonlit Garden Cocktail",
    tagline: "Aditi & Parichay",
    subtitle: "The cocktail night: an English garden after dark",
    event: "Cocktail",
    venue: "JW Marriott Golfshire",
    location: "Bengaluru",
    date: "October 2025",
    guests: "250",                                   // TODO: confirm guest count
    palette: ["#7a4a2c", "#a9643c", "#c6a3a6", "#55663f", "#e2cfa8"],
    photos: 10,
    lead: "A ballroom turned into a moody garden: velvet drapes, hand-painted bird murals, a checkerboard floor and wild meadow planting spilling from terracotta urns.",
    story: [
      "Leather chesterfields with monogrammed cushions created intimate lounges under the murals, while a curved arch bar glowed at the far end of the room.",
      "Sunflowers, pampas and dried grasses gave the florals texture and warmth, balanced by candlelight on every table."
    ],
    highlights: ["Painted bird mural backdrops", "Monogram cushions on chesterfields", "Meadow planting in terracotta urns", "Arched backlit bar"]
  },
  {
    id: "jaypee-wedding",
    city: "delhi",          // city id from N96.cities (venues map)
    category: "wedding",
    title: "Ivory Jaali Wedding",
    tagline: "An Ivory & Red Celebration",            // TODO: add couple names
    subtitle: "Jaali arches, brass and jasmine",
    event: "Wedding",
    venue: "Jaypee Greens",
    location: "Greater Noida",
    date: "July 2024",
    guests: "350",                                   // TODO: confirm guest count
    palette: ["#f4ead9", "#b3262e", "#c79b4a", "#2f6b3a", "#ffffff"],
    photos: 10,
    lead: "Ivory jaali screens, brass finials and strings of jasmine and red roses created a calm, traditional setting for a monsoon wedding.",
    story: [
      "A long arched corridor with chandeliers and brass spires led guests into the venue. Inside, carved lotus panels glowed with warm uplighting.",
      "The mandap was framed by banana leaves and white urns, with hanging garlands of jasmine and red roses above the couple."
    ],
    highlights: ["Arched entrance corridor", "Lit lotus panels", "Jasmine and rose garland mandap", "Brass bells and pomegranate details"]
  },
  {
    id: "raffles-mehendi",
    city: "udaipur",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "The Curiosity Garden Mehendi",
    tagline: "A Whimsical Garden Mehendi",           // TODO: add couple names
    subtitle: "A playful garden party, styled for Silhouette Events",
    event: "Mehendi",
    venue: "Raffles Udaipur",
    location: "Udaipur",
    date: "November 2021",
    guests: "200",                                   // TODO: confirm guest count
    styledFor: "Silhouette Events",
    palette: ["#2aa0a8", "#e85d8a", "#f29b38", "#5e7d3e", "#f5efe4"],
    photos: 10,
    lead: "A mehendi full of curiosities: vintage sideboards, scalloped pavilions, a turquoise-tiled dining terrace and little discoveries at every corner.",
    story: [
      "We styled cosy lounges on the lawn with cane armchairs and bright cushions, and filled antique furniture with plants, books and keepsakes for guests to explore.",
      "Bar and food stations were dressed with seasonal produce and wild florals, keeping the mood relaxed and full of colour."
    ],
    highlights: ["Scalloped pavilion lounges", "Antique sideboard vignettes", "Tiled dining terrace", "Bright garden seating"]
  },
  {
    id: "private-farm-lunch",
    city: "delhi",          // city id from N96.cities (venues map)
    category: "private",
    title: "Green Stripe Farm Lunch",
    tagline: "A Winter Lunch on the Farm",
    subtitle: "Green and white stripes under a winter sun",
    event: "Lunch",
    venue: "Private Farm",
    location: "Delhi",
    date: "February 2025",
    guests: "120",                                   // TODO: confirm guest count
    palette: ["#9fc27a", "#ffffff", "#2f5e3a", "#b5875a", "#efe8d3"],
    photos: 10,
    lead: "A garden lunch under swagged green-and-white striped canopies, with cane chairs, painted landscape backdrops and all-white florals.",
    story: [
      "Long and round tables were dressed in ivory, with green-checked plates and striped napkins that echoed the canopies above.",
      "White roses, stock and delphiniums in green urns kept the look crisp against the lawn."
    ],
    highlights: ["Swagged striped canopy", "Painted landscape backdrop", "Green-check tableware", "All-white floral urns"]
  },

  /* ----- SAMPLE PROJECTS: replace these with your real projects ----- */
  {
    id: "sample-birthday",
    city: "delhi",          // city id from N96.cities (venues map)
    sample: true,
    category: "birthday",
    title: "Garden Tea Party",
    tagline: "Kiara Turns Five",
    subtitle: "A powder-blue garden tea party",
    event: "Birthday",
    venue: "Private Residence",
    location: "New Delhi",
    date: "March 2025",
    guests: "60",
    palette: ["#9cb8d6", "#ffffff", "#f2d7a8", "#7fa36b"],
    photos: 10,
    lead: "Sample project. Replace this text with the story of a real birthday you decorated.",
    story: ["Describe the theme, colours and special details here."],
    highlights: ["Detail one", "Detail two", "Detail three"]
  },
  {
    id: "sample-corporate",
    city: "bangalore",          // city id from N96.cities (venues map)
    sample: true,
    category: "corporate",
    title: "Leadership Dinner",
    tagline: "Annual Leadership Dinner",
    subtitle: "An evening lounge for a company offsite",
    event: "Corporate Dinner",
    venue: "Hotel Ballroom",
    location: "Bengaluru",
    date: "January 2025",
    guests: "180",
    palette: ["#3b2a22", "#c08a4a", "#7a4a2c", "#e2cfa8"],
    photos: 10,
    lead: "Sample project. Replace this text with a real corporate event.",
    story: ["Describe the brand, the brief and how the space was designed."],
    highlights: ["Detail one", "Detail two", "Detail three"]
  },
  {
    id: "sample-engagement",
    city: "delhi",          // city id from N96.cities (venues map)
    sample: true,
    category: "pre-wedding",
    title: "Ring Ceremony",
    tagline: "Meera & Arjun",
    subtitle: "An intimate engagement in ivory and red",
    event: "Engagement",
    venue: "Private Venue",
    location: "Noida",
    date: "August 2024",
    guests: "100",
    palette: ["#f4ead9", "#b3262e", "#c79b4a"],
    photos: 10,
    lead: "Sample project. Replace this text with a real engagement or ring ceremony.",
    story: ["Describe the theme, colours and special details here."],
    highlights: ["Detail one", "Detail two", "Detail three"]
  },
  {
    id: "sample-anniversary",
    city: "delhi",          // city id from N96.cities (venues map)
    sample: true,
    category: "private",
    title: "Silver Anniversary Lunch",
    tagline: "25 Years of the Mehras",
    subtitle: "A family lunch in green and white",
    event: "Anniversary",
    venue: "Farmhouse",
    location: "Delhi",
    date: "November 2024",
    guests: "80",
    palette: ["#9fc27a", "#ffffff", "#2f5e3a"],
    photos: 10,
    lead: "Sample project. Replace this text with a real anniversary or family celebration.",
    story: ["Describe the theme, colours and special details here."],
    highlights: ["Detail one", "Detail two", "Detail three"]
  },
  {
    id: "sample-sangeet",
    city: "",          // city id from N96.cities (venues map)
    sample: true,
    category: "pre-wedding",
    title: "Sangeet Under the Lamps",
    tagline: "Sana & Dev",
    subtitle: "A glowing sangeet night",
    event: "Sangeet",
    venue: "Resort Lawn",
    location: "Jaipur",
    date: "December 2024",
    guests: "300",
    palette: ["#b8321f", "#f2b84b", "#c79a4a"],
    photos: 10,
    lead: "Sample project. Replace this text with a real sangeet or haldi.",
    story: ["Describe the theme, colours and special details here."],
    highlights: ["Detail one", "Detail two", "Detail three"]
  }
];

/* ---------- Venues we've worked at (home page, About section) ----------
   name    : venue name
   place   : city / region
   photo   : any photo from the images folder
   project : project id to open when clicked ("" = no link)
   Add or remove venues freely; the row adjusts itself. */
N96.venues = [
  { name: "St. Regis", place: "Goa", photo: "images/projects/st-regis-wedding/4.jpg", project: "st-regis-wedding" },
  { name: "Raffles", place: "Udaipur", photo: "images/projects/raffles-mehendi/3.jpg", project: "raffles-mehendi" },
  { name: "JW Marriott Golfshire", place: "Bengaluru", photo: "images/projects/jw-wedding/4.jpg", project: "jw-wedding" },
  { name: "Jaypee Greens", place: "Greater Noida", photo: "images/projects/jaypee-wedding/3.jpg", project: "jaypee-wedding" },
  { name: "Private Farm", place: "Delhi", photo: "images/projects/private-farm-lunch/2.jpg", project: "private-farm-lunch" }
];

/* ---------- Venues map (home page, About section) ----------
   Each city gets a pin on the map and a page listing its projects (city.html#id).
   id     : short name, used by projects (city: "goa") and in the page address
   name   : name shown on the map and the city page
   region : small line under the name
   lat/lon: position on the map (look it up on Google Maps)
   inset  : true = shown in the small box (for places outside India) */
N96.cities = [
  { id: "delhi",     name: "Delhi",       region: "Delhi NCR",           lat: 28.61, lon: 77.21 },
  { id: "umaid",     name: "Umaid",       region: "Umaid Bhawan, Jodhpur", lat: 26.28, lon: 73.04 },
  { id: "udaipur",   name: "Udaipur",     region: "Rajasthan",           lat: 24.58, lon: 73.71 },
  { id: "raipur",    name: "Raipur",      region: "Chhattisgarh",        lat: 21.25, lon: 81.63 },
  { id: "hyderabad", name: "Hyderabad",   region: "Telangana",           lat: 17.39, lon: 78.49 },
  { id: "goa",       name: "Goa",         region: "India",               lat: 15.35, lon: 73.95 },
  { id: "bangalore", name: "Bangalore",   region: "Karnataka",           lat: 12.97, lon: 77.59 },
  { id: "cyprus",    name: "Cyprus",      region: "Mediterranean",       lat: 34.92, lon: 33.30, inset: true }
];

/* ---------- About section photo arch (changes every 3 seconds, one by one) ----------
   The first photo is Anubhuti & Naghmi together; the rest are event photos. */
N96.aboutSlideSpeed = 3000;
N96.aboutSlides = [
  { src: "images/team/founders-together.jpg", alt: "Anubhuti Jain and Naghmi Hamrapurkar" },
  { src: "images/projects/st-regis-wedding/1.jpg", alt: "Trellis garden wedding, St. Regis Goa" },
  { src: "images/projects/jw-wedding/3.jpg", alt: "Marigold and brass wedding, Bengaluru" },
  { src: "images/about/portrait.jpg", alt: "Powder blue welcome lunch, Bengaluru" },
  { src: "images/projects/raffles-mehendi/1.jpg", alt: "Curiosity garden mehendi, Raffles Udaipur" },
  { src: "images/projects/jaypee-wedding/5.jpg", alt: "Ivory jaali wedding, Jaypee Greens" },
  { src: "images/projects/jw-cocktail/2.jpg", alt: "Moonlit garden cocktail, Bengaluru" },
  { src: "images/projects/private-farm-lunch/3.jpg", alt: "Green stripe farm lunch, Delhi" }
];

/* Projects shown on the home page (6, in this order) */
N96.homeProjects = ["st-regis-wedding", "jw-wedding", "jw-welcome-lunch", "jw-cocktail", "jaypee-wedding", "raffles-mehendi"];

/* How long each slider photo stays, in milliseconds (3000 = 3 seconds) */
N96.heroSpeed = 3000;

/* Hero slider on the home page (5 to 7 photos).
   Photos live in images/hero/ . To add a 7th: put slide-7.jpg in that folder
   and copy one line below. */
N96.heroSlides = [
  { src: "images/hero/slide-1.jpg", title: "JW Marriott Golfshire, Bengaluru", note: "Wedding · Oct 2025" },
  { src: "images/hero/slide-2.jpg", title: "JW Marriott Golfshire, Bengaluru", note: "Welcome Lunch · Oct 2025" },
  { src: "images/hero/slide-3.jpg", title: "Jaypee Greens, Greater Noida", note: "Wedding · Jul 2024" },
  { src: "images/hero/slide-4.jpg", title: "JW Marriott Golfshire, Bengaluru", note: "Cocktail · Oct 2025" },
  { src: "images/hero/slide-5.jpg", title: "Raffles Udaipur", note: "Mehendi · Nov 2021" },
  { src: "images/hero/slide-6.jpg", title: "Jaypee Greens, Greater Noida", note: "Wedding · Jul 2024" }
];

/* ---------- Couple stories (blog) ---------- */
N96.stories = [
  {
    id: "aditi-parichay",
    title: "Three Days, One Story",
    couple: "Aditi & Parichay",
    meta: "JW Marriott Golfshire, Bengaluru · October 2025",
    cover: "images/projects/jw-welcome-lunch/2.jpg",
    thumbs: ["images/projects/jw-welcome-lunch/5.jpg", "images/projects/jw-cocktail/3.jpg", "images/projects/jw-wedding/2.jpg"],
    excerpt: "A powder-blue welcome lunch, a moody garden cocktail and a marigold wedding, tied together by the couple's two dogs.",
    body: [
      "Aditi and Parichay wanted three very different moods across their wedding weekend, but one thread running through all of it: the things that make them, them. Their two dogs became that thread.",
      "At the welcome lunch, the dogs were embroidered on napkins and painted on the welcome sign. At the cocktail, the couple's monogram appeared on hand-stitched cushions in a garden lounge under painted bird murals. And for the wedding, we turned to South Indian temple craft, with brass lamp towers, marigold gateways and a floating floral chandelier over the mandap.",
      "This is what we mean by meaningful celebrations. The decor may get old, but these details are what guests remember."
    ],
    projects: ["jw-welcome-lunch", "jw-cocktail", "jw-wedding"]
  },
  {
    id: "st-regis",
    title: "A Garden at the Edge of the Sea",
    couple: "Wedding at St. Regis Goa",
    meta: "St. Regis Goa Resort · December 2023",
    cover: "images/projects/st-regis-wedding/1.jpg",
    thumbs: ["images/projects/st-regis-wedding/2.jpg", "images/projects/st-regis-wedding/5.jpg", "images/projects/st-regis-wedding/6.jpg"],
    excerpt: "A sage trellis pavilion, climbing roses and crystal chandeliers, timed to the Goa sunset.",
    body: [
      "Styled for The Wedding Square, this ceremony was planned around a single moment: the sun dropping into the sea behind the couple.",
      "We built a trellis pavilion in soft sage, layered with roses, wisteria and foxgloves, and hung crystal chandeliers inside so the garden kept glowing after dark. A fountain courtyard and velvet lounges gave guests somewhere to gather once the vows were done."
    ],
    projects: ["st-regis-wedding"]
  },
  {
    id: "jaypee",
    title: "Jaali, Jasmine and Brass",
    couple: "Wedding at Jaypee Greens",
    meta: "Jaypee Greens, Greater Noida · July 2024",
    cover: "images/projects/jaypee-wedding/5.jpg",
    thumbs: ["images/projects/jaypee-wedding/1.jpg", "images/projects/jaypee-wedding/6.jpg", "images/projects/jaypee-wedding/3.jpg"],
    excerpt: "Ivory jaali arches and strings of jasmine for a calm, traditional monsoon wedding.",
    body: [
      "For this monsoon wedding, the family asked for something traditional but restful, with no visual noise. We worked in ivory and deep red, with brass as the only metal.",
      "Arched jaali corridors led guests inside, carved lotus panels glowed with warm light, and the mandap was hung with jasmine and red roses. Small touches, like brass bells, pomegranates and embroidered potlis, rewarded anyone who looked closely."
    ],
    projects: ["jaypee-wedding"]
  },
  {
    id: "farm-lunch",
    title: "Stripes on a Winter Afternoon",
    couple: "Private Lunch, Delhi",
    meta: "Private Farm, Delhi · February 2025",
    cover: "images/projects/private-farm-lunch/3.jpg",
    thumbs: ["images/projects/private-farm-lunch/1.jpg", "images/projects/private-farm-lunch/5.jpg", "images/projects/private-farm-lunch/6.jpg"],
    excerpt: "Green and white swagged canopies, cane chairs and all-white florals on a Delhi farm.",
    body: [
      "Winter afternoons in Delhi call for long lunches outdoors. We dressed the lawn with swagged green-and-white striped canopies and a painted landscape backdrop.",
      "Tables were set with green-check plates, striped napkins and low runners of white roses and greenery, with tall urns of stock and delphiniums framing the space."
    ],
    projects: ["private-farm-lunch"]
  },
  {
    id: "raffles",
    title: "A Mehendi Full of Curiosities",
    couple: "Mehendi at Raffles Udaipur",
    meta: "Raffles Udaipur · November 2021",
    cover: "images/projects/raffles-mehendi/6.jpg",
    thumbs: ["images/projects/raffles-mehendi/4.jpg", "images/projects/raffles-mehendi/5.jpg", "images/projects/raffles-mehendi/2.jpg"],
    excerpt: "Vintage sideboards, scalloped pavilions and bright garden lounges, styled for Silhouette Events.",
    body: [
      "Styled for Silhouette Events, this mehendi was designed to be explored. Antique sideboards held plants, books and keepsakes, scalloped pavilions framed lounges, and the dining terrace sat on a sea of turquoise tiles.",
      "The colours were bright and joyful, but every corner was edited so the garden still felt calm."
    ],
    projects: ["raffles-mehendi"]
  }
];

/* Home page gallery: every photo changes once per round.
   homeGallerySpeed = time between rounds in milliseconds (4000 = every 4 seconds) */
N96.homeGallerySpeed = 4000;
/* Photos shown first in the home gallery */
N96.homeGalleryFirst = ["images/projects/jw-welcome-lunch/4.jpg", "images/projects/st-regis-wedding/3.jpg", "images/projects/jaypee-wedding/7.jpg", "images/projects/private-farm-lunch/4.jpg"];

/* ---------- Extra gallery photos ----------
   All project photos appear in the Gallery automatically.
   Put extra photos (not linked to a project) in images/gallery/ and list them here. */
N96.galleryExtras = [
  { src: "images/gallery/florals-1.jpg", caption: "Floral study", cat: "florals" },
  { src: "images/gallery/florals-2.jpg", caption: "Floral installation", cat: "florals" }
  // , { src: "images/gallery/my-photo.jpg", caption: "Describe the photo", cat: "florals" }
];

/* ---------- Founders page (founders.html) ----------
   DRAFT TEXT: rewrite these descriptions in your own words.
   photo     : file in images/team/
   paragraphs: as many as you like
   focus     : short list of what each founder leads
   facts     : small label/value pairs shown beside the text
---------------------------------------------------------------- */
N96.foundersIntro = {
  heading: "The Two Behind N96",
  text: "N96 Decor began with two friends who believed wedding decor could be more than stages and props. One sees the story in every space; the other makes sure that story comes to life, perfectly and on time. Together they lead every N96 celebration, from the first meeting to the final reveal."
};

N96.founders = [
  {
    id: "anubhuti",
    name: "Anubhuti Jain",
    role: "Creative Ninja & Co-founder",
    photo: "images/team/anubhuti.jpg",
    tagline: "The storyteller who turns your memories into spaces.",
    paragraphs: [
      "Anubhuti leads design at N96. Every celebration starts with her sitting down with the couple, listening for the small details that make them who they are: a favourite poem, a family tradition, a much-loved pet.",
      "She turns those stories into complete design concepts, from colour palettes and moodboards to floral direction, set design and the personalised pieces guests take home. Her work moves easily between traditional craft, like brass, jaali and marigold, and soft, contemporary garden styling.",
      "She believes the best decor has an undercurrent of sophistication, and that the details guests remember are rarely the biggest ones."
    ],
    focus: ["Design concepts & moodboards", "Florals & set design", "Personalised details & artisan props", "Colour & styling direction"],
    facts: [
      ["Leads", "Design & creative direction"],
      ["Superpower", "Seeing the story in every space"],
      ["Loves", "Hand-crafted details, florals, monograms"]
    ]
  },
  {
    id: "naghmi",
    name: "Naghmi Hamrapurkar",
    role: "Go Getter & Co-founder",
    photo: "images/team/naghmi.jpg",
    tagline: "The force who makes every big idea happen.",
    paragraphs: [
      "Naghmi leads client relationships and execution at N96. She is the person couples and families speak to first, and the one who makes sure every promise in the design is delivered on the day.",
      "From budgets and timelines to vendors, artisans and on-site production, she runs the planning behind each celebration so families can enjoy a truly hassle-free experience, from inception to the final execution.",
      "She is known for walking that extra mile: whether it is a last-minute change or a destination wedding in a new city, she finds a way to make the celebration perfect."
    ],
    focus: ["Client relationships & meetings", "Planning, budgets & timelines", "Vendor & artisan coordination", "On-site production & installation"],
    facts: [
      ["Leads", "Clients, planning & execution"],
      ["Superpower", "Making the impossible happen on time"],
      ["Loves", "Smooth setups and happy families"]
    ]
  }
];

/* ---------- Services (photos in images/services/) ---------- */
N96.services = [
  {
    title: "Wedding Decor",
    eyebrow: "Ceremonies & receptions",
    image: "images/services/wedding-decor.jpg",
    text: "Complete design for your wedding day, from the entrance to the mandap to the dinner. We start with your story and build a world around it.",
    points: ["Mandap and stage design", "Entrances, walkways and aisles", "Lighting and ambience", "Seating and lounges"]
  },
  {
    title: "Florals",
    eyebrow: "Fresh, seasonal, sculptural",
    image: "images/services/florals.jpg",
    arch: true,
    text: "Floral design that ranges from wild meadow installations to clean, single-colour arrangements, always matched to the season and the space.",
    points: ["Hanging and ceiling installations", "Centrepieces and table florals", "Garlands and traditional florals", "Bridal and family florals"]
  },
  {
    title: "Set Design",
    eyebrow: "Immersive spaces",
    image: "images/services/set-design.jpg",
    text: "We design complete sets: painted backdrops, custom furniture, bars and lounges that turn a ballroom or a lawn into somewhere else entirely.",
    points: ["Hand-painted backdrops and murals", "Custom bars and photo spots", "Themed lounges", "Fabric and draping"]
  },
  {
    title: "Personalised Details",
    eyebrow: "Made only for you",
    image: "images/services/personalised-details.jpg",
    arch: true,
    text: "The details guests take home: monograms, embroidered napkins, a favourite poem on the dinner table or your dog on every coaster.",
    points: ["Monograms and crests", "Hand-stitched cushions and linens", "Signage and welcome boards", "Artisan-made props"]
  },
  {
    title: "Pre-Wedding Functions",
    eyebrow: "Mehendi, haldi, sangeet, cocktail",
    image: "images/services/pre-wedding.jpg",
    text: "Every function gets its own mood and palette, while the whole weekend still feels like one story.",
    points: ["Mehendi and haldi setups", "Sangeet stages", "Cocktail and after-parties", "Welcome lunches and brunches"]
  },
  {
    title: "Intimate & Private Events",
    eyebrow: "Lunches, birthdays, corporate",
    image: "images/services/intimate-events.jpg",
    text: "Smaller celebrations deserve the same care: family lunches, birthdays, anniversaries and corporate dinners.",
    points: ["Garden lunches and dinners", "Birthdays and anniversaries", "Corporate events and launches", "Home celebrations"]
  }
];
