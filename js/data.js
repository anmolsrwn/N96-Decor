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
  instagram: "https://www.instagram.com/n96_decor?dlrf=dGh5Z3Jwdzg5dzdu",
  instagramHandle: "@n96_decor",
  // TODO: paste your real Facebook and Pinterest page links (footer "Socials" icons)
  facebook: "https://www.facebook.com/people/N96-Decor/61584900175820",
  pinterest: "https://pin.it/4ewoanUj6",
  // Optional: WhatsApp number in international format without + or spaces, e.g. "919990960100".
  // Leave empty "" to hide the WhatsApp button.
  whatsapp: "919990960100",   // WhatsApp number (country code + number, no + or spaces)
  serviceArea: "Weddings and celebrations across India: Delhi NCR, Bengaluru, Goa, Udaipur and beyond"
};

/* ---------- Project categories (used by the filter buttons) ---------- */
N96.categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Wedding" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "corporate", label: "Brand Event" },
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
    id: "jaypee-wedding",
    city: "delhi",          // city id from N96.cities (venues map)
    category: "wedding",
    title: "Lal Angan",
    tagline: "Lal Angan",
    subtitle: "Jaali arches, brass and jasmine",
    event: "Wedding",
    venue: "Jaypee Greens",
    location: "Greater Noida",
    date: "July 2024",
    guests: "350",                                   // TODO: confirm guest count
    palette: ["#f4ead9", "#b3262e", "#c79b4a", "#2f6b3a", "#ffffff"],
    photos: 21,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 is the cover.
    order: [21, 1, 2, 9, 18, 19, 5, 10, 16, 4, 11, 20, 15],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      heading: "\u201cBeneath the temple bells, a canopy of lotuses led Vasudha to Karan.\u201d",
      paragraphs: [
        "For Karan and Vasudha\u2019s wedding, we started with pristine white. We wanted the room to feel as calm as stepping into a temple, so we warmed the palette with vermilion, saffron and the soft gold of brass.",
        "We turned the entire ceiling into an installation. Layers of sheer saffron fabric softened the light over the seating, while lotus-shaped chandeliers hung with brass bells traced Vasudha\u2019s walk down the central aisle to the mandap.",
        "One of our favourite details came from the bindi. We repeated its simple circular shape across the wall panels, studding each disc with red or white flowers. Sacred chants adorned the walls alongside them. The same story carried through to the tables, where we left a little sweetness for our guests in the form of a motichoor laddu nestled in a cut-glass bowl on each table."
      ]
    },
    lead: "Ivory jaali screens, brass finials and strings of jasmine and red roses created a calm, traditional setting for a monsoon wedding.",
    story: [
      "A long arched corridor with chandeliers and brass spires led guests into the venue. Inside, carved lotus panels glowed with warm uplighting.",
      "The mandap was framed by banana leaves and white urns, with hanging garlands of jasmine and red roses above the couple."
    ],
    // Videos shown on the project page (vertical reels). Put files in videos/lal-angan/
    // src = the video, poster = the still shown before it plays
    videos: [
      { src: "videos/lal-angan/1.mp4", poster: "videos/lal-angan/1.jpg" },
      { src: "videos/lal-angan/2.mp4", poster: "videos/lal-angan/2.jpg" },
      { src: "videos/lal-angan/3.mp4", poster: "videos/lal-angan/3.jpg" }
    ],
    highlights: ["Arched entrance corridor", "Lit lotus panels", "Jasmine and rose garland mandap", "Brass bells and pomegranate details"]
  },
  {
    id: "jw-welcome-lunch",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "Ocean of Love · Aditi x Parichay",
    tagline: "Ocean of Love",
    subtitle: "Aditi x Parichay",
    event: "Welcome Lunch",
    venue: "JW Marriott Golfshire",
    location: "Bengaluru",
    date: "October 2025",
    guests: "150",                                   // TODO: confirm guest count
    palette: ["#9cb8d6", "#ffffff", "#c79b62", "#e8dcc4", "#6f8f6a"],
    photos: 18,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 is the cover.
    order: [10, 15, 16, 14, 3, 6, 4, 13, 12, 7, 8, 5, 17],
    // Videos shown on the project page. Put files in videos/ocean-of-love/
    videos: [
      { src: "videos/ocean-of-love/2.mp4", poster: "videos/ocean-of-love/2.jpg" },
      { src: "videos/ocean-of-love/1.mp4", poster: "videos/ocean-of-love/1.jpg" },
      { src: "videos/ocean-of-love/3.mp4", poster: "videos/ocean-of-love/3.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      heading: "\u201cA Celebration Where Love Had Four Legs and Paw\u2011sitively Happy Vibe\u201d",
      paragraphs: [
        "Chester, the family dog, couldn’t travel to be part of the wedding, so naturally, we made him the party.",
        "The brief for the welcome brunch was simple, subtle and modern, yet lively. We built on the natural sand texture of the poolside floor and borrowed colours from the ocean and the lush landscape at the foot of Nandi Hills to create the rest of the magic.",
        "Chester welcomed guests at the entrance, sat proudly on the bar, smiled from every napkin and signed each welcome card with a paw print. We placed him in the little moments guests would naturally pass through, from arriving at the brunch to picking up their first drink.",
        "By the time they sat down, they’d already met Chester more than once. The setting gave us our colours. The family gave us Chester. And he brought just the right amount of mischief to a poolside brunch that felt every bit like them."
      ]
    },
    lead: "A poolside lunch in powder blue and white, where the couple's two dogs became the motif of the day: embroidered on napkins, printed on the welcome sign and tucked into every detail.",
    story: [
      "Rattan arch screens with blue hydrangeas and delphiniums lined the pool, and fringed white parasols shaded the lounge. Striped drapes and toile tablecloths kept the look fresh and relaxed.",
      "This is the kind of personalisation we love most: guests kept their napkins as keepsakes, and the dog motif started conversations at every table."
    ],
    highlights: ["Custom dog-motif embroidered napkins", "Rattan arch screens by the pool", "Fringed parasol lounge", "Toile and stripe table linen"]
  },
  {
    id: "jw-italian-brunch",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "Italian Brunch · Aditi x Parichay",
    tagline: "Italian Brunch",
    subtitle: "Aditi x Parichay",
    event: "Italian Brunch",
    venue: "JW Marriott Golfshire",
    location: "Bengaluru",
    date: "October 2025",
    palette: ["#e8552e", "#f3c64a", "#f6e7b8", "#9cc4d8", "#ffffff"],
    photos: 12,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 is the cover.
    order: [1, 7, 9, 5, 2, 6, 11, 4, 10, 8, 3, 12],
    // Videos shown on the project page. Put files in videos/italian-brunch/
    videos: [
      { src: "videos/italian-brunch/3.mp4", poster: "videos/italian-brunch/3.jpg" },
      { src: "videos/italian-brunch/1.mp4", poster: "videos/italian-brunch/1.jpg" },
      { src: "videos/italian-brunch/2.mp4", poster: "videos/italian-brunch/2.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      paragraphs: [
        "Aditi and Parichay\u2019s poolside brunch turned out to be the liveliest event of the wedding. The barbecue was going, the tables were bright, and the whole afternoon had the easy energy of an Italian farmhouse lunch.",
        "We took our design cues from a market basket. Cherry tomatoes spilled out of wicker baskets and were strung into garlands, while peppers found their way into the flower arrangements. Tomato reds and citrus yellows played against powder-blue striped parasols, and the illustrated tablecloths picked up the same palette with little drawings of lemons, pizza and wine glasses.",
        "Each place setting greeted guests with a cheerful \u201cCiao!\u201d and a postcard from Positano. We kept the centrepieces low so there was always a clear view of the person across the table. It was a setting made for lunches that stretch and conversations that linger long after the plates are cleared."
      ]
    },
    lead: "A sunny Italian brunch by the pool: la dolce vita in tomato red, chilli orange and lemon yellow.",
    story: [
      "A hand-painted 'la dolce vita' backdrop and a heart framed against a wall of Italian postcard prints set the mood. Baskets of flowers spilled down the steps, strung with tomatoes and chillies.",
      "Tables wore illustrated cloths with 'Ciao!' placemats, centrepieces of red flowers, peppers and tomatoes, and little soda bottles with a single gerbera. Guests left postcards with three dream destinations for the couple."
    ],
    highlights: ["La dolce vita backdrop", "Tomato and chilli garlands", "Sculpted head flower vases", "Postcard wishes for the couple"]
  },
  {
    id: "jw-cocktail",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "Velvet Reverie · Aditi x Parichay",
    tagline: "Velvet Reverie",
    subtitle: "Aditi x Parichay",
    event: "Sangeet",
    venue: "JW Marriott Golfshire",
    location: "Bengaluru",
    date: "October 2025",
    palette: ["#5a3a26", "#a9643c", "#c6a3a6", "#55663f", "#e2cfa8"],
    photos: 18,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 is the cover.
    order: [6, 2, 5, 1, 3, 8, 13, 4, 7, 14, 9, 15, 10, 16, 11, 17, 12, 18],
    // Videos shown on the project page. Put files in videos/sangeet/
    videos: [
      { src: "videos/sangeet/2.mp4", poster: "videos/sangeet/2.jpg" },
      { src: "videos/sangeet/1.mp4", poster: "videos/sangeet/1.jpg" },
      { src: "videos/sangeet/3.mp4", poster: "videos/sangeet/3.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      heading: "\u201cRenaissance Romance Meets Modern Artistry\u201d",
      paragraphs: [
        "For Aditi and Parichay\u2019s sangeet, we brought together the romance of Renaissance paintings and the wildness of nature. Mocha tones softened the room, drapes seemed to dance, and the tablescape, inspired by the quiet beauty of painted still lifes, unfolded like a visual poem. Colour and texture drew the eye from one detail to the next.",
        "We took a different approach to the artist\u2019s stage. With barely any flowers, we used shape, texture and print to define the space. Low, untamed foliage echoed the forest floor, bringing a raw edge to the sculptural set. At the bar, Roman pillars gave the design its classical form, while velvet and natural materials brought softness and earthy warmth.",
        "From the sweep of the drapes to the wildness at the foot of the stage, Velvet Reverie felt timeless, textured and utterly N96."
      ]
    },
    lead: "Velvet Reverie: a ballroom turned into a moody English garden after dark, with velvet drapes, painted bird murals, a checkerboard floor and wild meadow planting.",
    story: [
      "Long tables ran with wildflowers, sunflowers and grapes under tall taper candles, set beside sculpted terracotta totems. Silk napkins carried dried posies and a note for the night.",
      "A rattan-lantern bar under a ruffled velvet canopy, a vintage telephone booth and leather chesterfields gave guests corners to gather between dances, all in front of a gilded arched stage."
    ],
    highlights: ["Velvet drapes and bird murals", "Wildflower and candle tables", "Rattan lantern bar", "Vintage telephone booth"]
  },
  {
    id: "jw-wedding",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "wedding",
    title: "Shanti Kalyanam · Aditi x Parichay",
    tagline: "Shanti Kalyanam",
    subtitle: "Aditi x Parichay",
    event: "Wedding",
    venue: "JW Marriott Golfshire",
    location: "Bengaluru",
    date: "October 2025",
    palette: ["#b8321f", "#e8752a", "#5b3a8c", "#c79a4a", "#f4ece0"],
    photos: 19,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 (mandap with the flower-lined aisle) is the cover; 9 is the sunset mandap.
    order: [4, 11, 2, 12, 3, 13, 5, 14, 6, 15, 16, 7, 17, 8, 18, 9, 19, 10],
    // Videos shown on the project page. Put files in videos/wedding/
    videos: [
      { src: "videos/wedding/1.mp4", poster: "videos/wedding/1.jpg" },
      { src: "videos/wedding/2.mp4", poster: "videos/wedding/2.jpg" },
      { src: "videos/wedding/4.mp4", poster: "videos/wedding/4.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      paragraphs: [
        "Aditi and Parichay, who lived in the US, wanted their wedding to feel beautifully Indian, rich in colour and rooted in ritual. We began with the feeling of walking into an Indian temple, where the glow of brass lamps and the scent of fresh flowers greet you at the threshold.",
        "We gave those familiar details a contemporary form. A clean circular canopy framed the open-air mandap, and we wrapped its pillars in red and yellow mauli thread, turning a small ritual detail into the texture of the structure. Brass bells hung at staggered heights, while long pooja flower ladis in rust, yellow, lavender and white fell from the centre like a chandelier. Along the approach, tiers of candlelight carried the warmth of the mandap into the garden.",
        "Mogra and rajnigandha filled the air with the sweet fragrance you recognise the moment you step into a temple. After dark, as the aarti flames rose in front of Aditi and Parichay, the flowers and brass caught the firelight. The open-air mandap held the warmth and familiarity of the place that inspired it."
      ]
    },
    lead: "For the wedding day, we drew on South Indian temple craft: a vermilion mandap crowned with a floating chandelier of marigold, rajnigandha and jasmine strands, framed by brass lamps and bells.",
    story: [
      "Guests entered through layered printed gateways lined with gold floral cages and candle walls, walking a red carpet past tiered candle stands into the ceremony lawn. Diyas and rose petals covered the steps to the mandap.",
      "Up close, every table carried personal details: framed miniature paintings, bowls of jasmine, roses and cockscomb, and embroidered cushions on low velvet seating for family."
    ],
    highlights: ["Floating marigold chandelier mandap", "Printed entrance gateways", "Brass lamps and bells", "Diya-lit steps and candle walls"]
  },
  {
    id: "private-farm-lunch",
    city: "delhi",          // city id from N96.cities (venues map)
    category: "private",
    title: "Farm Lunch",
    tagline: "Farm Lunch",
    subtitle: "A kitty lunch on the farm",
    event: "Kitty Lunch",
    venue: "Private Farms",
    location: "Delhi",
    date: "February 2025",
    palette: ["#9fc27a", "#ffffff", "#2f5e3a", "#b5875a", "#efe8d3"],
    photos: 18,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 is the cover.
    order: [6, 2, 18, 3, 14, 4, 7, 9, 8, 10, 11, 16, 17],
    // Videos shown on the project page. Put files in videos/farm-lunch/
    videos: [
      { src: "videos/farm-lunch/1.mp4", poster: "videos/farm-lunch/1.jpg" },
      { src: "videos/farm-lunch/2.mp4", poster: "videos/farm-lunch/2.jpg" },
      { src: "videos/farm-lunch/3.mp4", poster: "videos/farm-lunch/3.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      paragraphs: [
        "For a private farm luncheon for thirty, we wanted the afternoon to feel intimate and still hold a surprise. So we made room for a pianist in the backyard. We set the piano against a painted landscape, letting the music carry across the lawn and into lunch.",
        "The tables took their cues from French garden dining. Fine cutlery, cane-backed chairs and crisp linens sat beneath a soft green-and-white striped canopy. We kept the palette restrained so the centrepieces could do something a little unexpected. Broccoli studded with tiny pearls sat among foliage and white blooms, green grapes spilled across the linen, and mottled squash nestled at the foot of the tables.",
        "We wanted it to feel like being invited into someone\u2019s garden for lunch, with a little French finesse at the table and live piano drifting through the afternoon."
      ]
    },
    lead: "A winter kitty lunch under swagged green-and-white striped canopies, with cane chairs, painted landscape backdrops and all-white florals.",
    story: [
      "Round tables were dressed in ivory, with green-check plates, striped menus and black napkins. Centrepieces mixed white roses, hydrangeas and protea with green grapes, limes, pumpkins and strings of pearls.",
      "White stock and roses in green urns, floral arches by the lawn and pumpkin clusters at the table feet kept the look crisp and fresh against the garden."
    ],
    highlights: ["Swagged striped canopy", "Painted landscape backdrop", "Fruit, pearl and floral centrepieces", "All-white floral urns"]
  },
  {
    id: "anantaya-sappadu",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "Tamil Sappadu · Abhishek x Saloni",
    tagline: "Tamil Sappadu",
    subtitle: "Abhishek x Saloni",
    event: "Tamil Sappadu",
    venue: "Anantaya",
    location: "Bengaluru",
    date: "May 2026",
    palette: ["#d6233f", "#f2a7b8", "#c79a4a", "#9bbf3a", "#ffffff"],
    photos: 16,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 (the couple walking in with the dancers) is the cover; 7 is the floral swing.
    order: [13, 3, 2, 4, 5, 7, 8, 6, 11, 9, 12, 15, 14],
    // Videos shown on the project page. Put files in videos/tamil-sappadu/
    videos: [
      { src: "videos/tamil-sappadu/1.mp4", poster: "videos/tamil-sappadu/1.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      paragraphs: [
        "For Tamil Sapad, we started with the palm trees already on site. We turned the existing amphitheatre into the main lounge, arranging the seating along its curve. The palm trunks framed the performance area, so guests could settle in and watch the artists with the garden as their backdrop.",
        "We carried that same idea into the d\u00e9cor, taking our cues from the familiar ingredients of a South Indian lunch. Tall banana leaves gave the arrangements height, while bunches of green bananas and whole and split coconuts sat among brass vessels and white flowers. The palms set the scene, and those smaller details brought the spirit of the lunch right down to the table.",
        "When the Kathakali dancers stepped between the palms, their vivid costumes and expressive gestures turned the garden into an open-air theatre."
      ]
    },
    lead: "A South Indian sappadu in a garden amphitheatre: a carved wooden swing under a cascade of pink and white blooms, framed by terracotta pot pillars and mounds of red rose petals.",
    story: [
      "Banana leaves and brass set the tone everywhere: tuberose in embossed brass urns, bunches of plantains, split coconuts, lotus buds in scalloped bowls and a coconut cart for guests. A welcome board hung with temple bells greeted everyone at the entrance.",
      "Kathakali and Yakshagana figures and a troupe of Bharatanatyam dancers welcomed the couple down the aisle, ending in a shower of rose petals in front of the swing."
    ],
    highlights: ["Floral swing with terracotta pillars", "Rose petal mounds", "Brass, banana and coconut styling", "Temple-bell welcome board"]
  },
  {
    id: "anantaya-zen-sangeet",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "pre-wedding",
    title: "Zen Garden Sangeet · Abhishek x Saloni",
    tagline: "Zen Garden Sangeet",
    subtitle: "Abhishek x Saloni",
    event: "Sangeet",
    venue: "Anantaya",
    location: "Bengaluru",
    date: "May 2026",
    palette: ["#4f6b2a", "#8a5fb5", "#c7d94a", "#f2b8c6", "#2a3b2e"],
    photos: 37,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 (the pagoda mural lounge) is the cover; 20 is the moss and velvet garden.
    order: [28, 22, 21, 23, 30, 18, 26, 12, 25, 29, 24, 16, 33, 34, 36, 32, 20, 37, 14, 2, 31, 17, 35, 27],
    // Videos shown on the project page. Put files in videos/zen-sangeet/
    videos: [
      { src: "videos/zen-sangeet/1.mp4", poster: "videos/zen-sangeet/1.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      paragraphs: [
        "The first hint of Japan was overhead. Cranes flew across an illustrated ceiling while moss-covered rocks and sculptural flowers lined the entrance to The Zen Garden sangeet. In the lounge, pale timber arches framed prints of Japanese rooftops and wooded hills.",
        "We built the room around flowering trees, curving the seating beneath branches that trailed lavender blooms. Deep greens made the lavender stand out, and the details got smaller as guests drew closer. On the tables, postcards from Japan sat beside painted chopsticks, printed napkins and folding fans.",
        "For the couple, we saved a seat beneath the cherry blossoms, with lanterns tucked low among the branches. A quiet pocket of the garden, right in the middle of the sangeet. Even on a night made for dancing, there was room to pause."
      ]
    },
    lead: "Inspired by Japanese Zen gardens: an evening of moss-covered rocks, olive velvet drapes and wild meadow florals, celebrating Abhishek and Saloni through calm beauty and quietly blooming love.",
    story: [
      "Guests arrived at a welcome sign framed by hanging planters and wildflowers, then wandered past a blossom tree hung with glowing fabric lanterns, painted parasols and a tea bar under a ruffled velvet canopy.",
      "Lounges in moss-green velvet sat against painted pagoda murals, while tables carried lilac hydrangea towers, balloon plant, grapes, wooden beads, hand-cut fans, chopsticks and stamp-style cards telling the story of the night."
    ],
    highlights: ["Moss and velvet garden backdrops", "Blossom tree with fabric lanterns", "Ruffled velvet tea bar", "Fans, chopsticks and stamp-style stationery"]
  },
  {
    id: "palace-wedding",
    city: "bangalore",          // city id from N96.cities (venues map)
    category: "wedding",
    title: "Ekatvam · Abhishek x Saloni",
    tagline: "Ekatvam",
    subtitle: "Abhishek x Saloni",
    event: "Wedding",
    venue: "Palace Grounds",
    location: "Bengaluru",
    date: "May 2026",
    palette: ["#b3121f", "#7a0f1a", "#d9a441", "#f3e6d0", "#2b5a2e"],
    photos: 15,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 (the red stage) is the cover.
    order: [6, 5, 7, 9, 2, 3, 11, 4, 8, 13, 10, 14, 12, 15],
    // Videos shown on the project page. Put files in videos/as-wedding/
    videos: [
      { src: "videos/as-wedding/1.mp4", poster: "videos/as-wedding/1.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      heading: "\u201cOne monochromatic equation, drenching the entire celebration in crimson.\u201d",
      paragraphs: [
        "For Abhishek and Saloni\u2019s wedding, we let red take over the room. It ran the length of the aisle, climbed the carved arches in banks of flowers and settled into the folds of velvet. The roses brought out its brighter tones, while the drapery deepened it to wine. Candlelight caught on glass and brass, giving the same palette a softer glow in the lounges.",
        "The bindi inspired the open mandap, and its simple circle appeared again on textured vessels along the aisle. We framed the walk with sculpted elephants, garland-wrapped pillars and clusters of candles at varying heights. Just off the aisle, a wooden jhula dressed in red and white garlands brought the scale back down, creating a more intimate corner within the grandeur of the room.",
        "Then Saloni stepped into the room. As her red veil caught the light, the colour we\u2019d carried through the space felt most at home on her."
      ]
    },
    lead: "Ektvam: a wedding drenched in red, with a carved palace stage, walls of red roses and hydrangea, swagged velvet and a crystal chandelier glowing overhead.",
    story: [
      "A courtyard of velvet drapes and candle-lit trellis arches circled a terracotta fountain spilling with roses and protea. Garlanded carved-wood swings, red velvet lounges and silvered elephants filled the hall between.",
      "Up close, tables carried tuberose in crystal urns, red rose and cockscomb arrangements in silver bowls, pomegranates, candlelight and framed photos of the couple, all under the couple's monogram."
    ],
    highlights: ["Carved red palace stage", "Ektvam monogram backdrop", "Velvet courtyard with terracotta fountain", "Silvered elephants and garlanded swings"]
  },
  {
    id: "farm-cocktail",
    city: "delhi",          // city id from N96.cities (venues map)
    category: "private",
    title: "Cocktail 2",
    tagline: "Cocktail 2",
    subtitle: "An evening of blossoms at the farm",
    event: "Cocktail",
    venue: "Private Farms",
    location: "Delhi",
    date: "November 2025",
    palette: ["#f2b6c6", "#e2489a", "#9b7fd1", "#f4e7a1", "#c9a24a"],
    photos: 15,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 (the team styling the living room) is the cover; 11 is the lounge under the floral arch.
    order: [11, 6, 12, 2, 13, 7, 8, 14, 3, 4, 15, 9, 5, 10],
    // Videos shown on the project page. Add a reel like this:  { src: "videos/farm-cocktail/1.mp4", poster: "videos/farm-cocktail/1.jpg" }
    videos: [],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      heading: "\u201cOur first Bollywood set began with a familiar brief: make it feel like a home getting ready for a wedding.\u201d",
      paragraphs: [
        "For Cocktail 2, we designed the Delhi home of Rashmika Mandanna\u2019s character for the film\u2019s pre-wedding festivities. We wanted the space to feel elegant and lived-in, with florals that felt quietly luxurious and details that held up even when the camera moved in close.",
        "We thought about the home at two scales. In the wider shots, the floral styling had to make the celebrations feel as though they extended beyond a single room. Up close, the way the flowers were arranged and the details around them had to feel personal, like choices the family might have made for the occasion. That balance gave the festivities their sense of occasion while keeping the warmth of a family home.",
        "What stayed with us was seeing something so familiar to our work, a home getting ready for a wedding, become part of a story on screen."
      ]
    },
    lead: "A cocktail evening at a private farm home, filled with spring colour: cherry blossom, delphinium, orchids and roses in soft pink, lilac and gold.",
    story: [
      "A cascading arch of roses, orchids and hanging amaranthus framed the lounge, while a spiral staircase was wrapped in gilded branches, blossom and kumquats.",
      "Mirrored consoles carried gold urns of alstroemeria and pink roses on a draped silk sari, and a long dining table glowed under mesh lanterns with towering blossom branches and mercury-glass candleholders."
    ],
    highlights: ["Floral arch over the lounge", "Blossom-wrapped spiral staircase", "Gold urns on a silk-draped console", "Cherry blossom dining table"]
  },
  {
    id: "ras-farm-tours",
    city: "raipur",          // city id from N96.cities (venues map)
    category: "corporate",
    title: "RAS Farm Tours",
    tagline: "RAS Farm Tours",
    subtitle: "Farm to face, at the RAS farms",
    event: "Brand Event",
    venue: "RAS Farms",
    location: "Raipur, Chhattisgarh",
    date: "February 2026",
    palette: ["#f2c230", "#f5e7b0", "#e98a2b", "#f2b6c6", "#4e6b2f"],
    photos: 16,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 (the RAS farm-to-face sign) is the cover.
    order: [1, 2, 3, 5, 9, 10, 12, 15, 14, 13, 16],
    // Videos shown on the project page. Put files in videos/ras-farm-tours/
    videos: [
      { src: "videos/ras-farm-tours/1.mp4", poster: "videos/ras-farm-tours/1.jpg" },
      { src: "videos/ras-farm-tours/2.mp4", poster: "videos/ras-farm-tours/2.jpg" },
      { src: "videos/ras-farm-tours/4.mp4", poster: "videos/ras-farm-tours/4.jpg" }
    ],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      heading: "\u201cBy day, we followed the botanicals from field to formula. By night, we brought the quiet ritual of skincare to a table under the stars.\u201d",
      paragraphs: [
        "When RAS opened its farm to skincare creators, we designed two days around a simple idea. Let guests follow a botanical from the field to the finished product. A welcome lunch led into a farm tour, with a product display set right among the crops and botanical installations along the way. Guests plucked botanicals, saw how the products were made and stepped inside the R&D unit. It was a chance to experience RAS\u2019s promise of transparency firsthand.",
        "For dinner, we took our cues from the RAS night cream and the quiet ritual of putting it on. Soft, moonlit tones and strings of bulbs overhead gave the farm the glow of a scattered night sky. After a day spent exploring, the evening was a chance to slow down and settle in.",
        "The next afternoon, we set the table between the fields, in the shade of the palms. We dressed it in botanical illustrations drawn from the brand\u2019s visual language and arranged flowers freshly cut from the farm. The setting stayed raw and untamed, and lunch felt like an intimate gathering in the very place where the RAS story begins."
      ]
    },
    lead: "A day at the RAS farms for guests and creators: from field to formula, told through flowers, sunshine yellow and the ingredients behind every bottle.",
    story: [
      "Guests were welcomed by a RAS arch sign and a backdrop of towering yellow RAS boxes, with picnic mattresses, straw hats and printed cushions on the lawn. Chai, Chill & Comfort and Farm to your Plates menus set the tone for the day.",
      "A long garden table ran with wildflowers, mustard blooms and yellow taper candles over a hand-painted fruit tablecloth. An ingredient lab of flasks, petals and spices told the story of each product, and the night ended at a glowing moon-and-clouds RAS lounge."
    ],
    highlights: ["RAS box backdrop and picnic lounge", "Wildflower garden table", "Ingredient lab with flasks and petals", "Moon-lit night lounge"]
  },
  {
    id: "arque-launch",
    city: "raipur",          // city id from N96.cities (venues map)
    category: "corporate",
    title: "Brand Launch for Arqe",
    tagline: "Brand Launch for Arqe",
    subtitle: "The launch of ARQÉ by Archee",
    event: "Brand Launch",
    venue: "Sarovar Portico",
    location: "Raipur, Chhattisgarh",
    date: "July 2026",
    palette: ["#f3e6c8", "#c9a24a", "#7a3fa0", "#1f6b5a", "#f2b6c6"],
    photos: 20,
    // Order of photos on the project page, in reading order: 1st top-left, 2nd top-right, and so on (numbers = file names). Photo 1 (the pearl sofa under chandeliers) is the cover.
    order: [3, 10, 2, 12, 4, 13, 14, 5, 6, 15, 7, 16, 17, 18, 8, 9, 11, 19],
    // Videos shown on the project page. Add a reel like this:  { src: "videos/arque-launch/1.mp4", poster: "videos/arque-launch/1.jpg" }
    videos: [],
    // Text shown after the reels (replaces lead / story / highlights)
    writeup: {
      heading: "\u201cWe wanted guests to walk through the collections as though they were stepping into the worlds that inspired them.\u201d",
      paragraphs: [
        "From our first conversation with the founders of Arqe, we recognised something of ourselves in how much they cared about the smallest details. We wanted to bring the same finesse to their launch that they bring to their linens and home furnishings. So we designed it as a walk-through exhibition, with each of the four collections unfolding in its own space.",
        "For SwarnaAlankar, the South Indian collection, we created a grand courtyard framed by banana plants. A wooden jhula sat at its centre, giving the cushions a place where they felt right at home. For Saraswati, we built an entire living room so guests could see how the painting, cushions and runners came together in a space they might actually live in.",
        "For Echoes of the Wild, we brought the forest indoors. Last Breath took us somewhere quieter. We worked with dried flowers, drawing on the shapes and textures that emerge as blooms fade.",
        "From the courtyard to the last dried bloom, each space gave guests a different way to experience Arqe\u2019s eye for detail."
      ]
    },
    lead: "The launch of ARQÉ by Archee, a handcrafted home décor label: a ballroom turned into a series of rooms, each telling the story of a different collection.",
    story: [
      "An ivory lounge set the tone, with a pearl-studded sofa beneath crystal chandeliers and strings of white flowers, an embroidered swan-and-lotus frame, and urns of pink roses and tuberose. Nearby, hand-embroidered runners of swans, peacocks and lotuses hung like tapestries beside jasmine-draped tables.",
      "Elsewhere a bamboo and twig bower held velvet and beaded cushions, a mood board wall showed the textures behind each piece, and colourful parrot-themed placemats, braided garlands and a green parrot statue brought the playful side of the collection to life."
    ],
    highlights: ["Pearl sofa under crystal chandeliers", "Embroidered swan, peacock and lotus runners", "Bamboo bower with velvet cushions", "Mood boards of craft and texture"]
  }
];

/* ---------- Older projects (NOT shown on the website) ----------
   Kept here so nothing is lost. To show one again, move it back into N96.projects above. */
N96.archivedProjects = [
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
  { name: "JW Marriott Golfshire", place: "Bengaluru", photo: "images/projects/jw-wedding/18.jpg", project: "jw-wedding" },
  { name: "Jaypee Greens", place: "Greater Noida", photo: "images/projects/jaypee-wedding/3.jpg", project: "jaypee-wedding" },
  { name: "Private Farms", place: "Delhi", photo: "images/projects/private-farm-lunch/6.jpg", project: "private-farm-lunch" }
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
  { src: "images/team/founders-mirror.jpg", alt: "Anubhuti Jain and Naghmi Hamrapurkar, founders of N96 Decor" },
  { src: "images/projects/jw-cocktail/6.jpg", alt: "Sangeet, Aditi x Parichay: velvet drapes and meadow planting" },
  { src: "images/projects/jw-welcome-lunch/3.jpg", alt: "Ocean of Love, Aditi x Parichay: striped drapes and blue hydrangeas" },
  { src: "images/projects/anantaya-zen-sangeet/26.jpg", alt: "Zen Garden Sangeet, Abhishek x Saloni: lavender centrepiece" },
  { src: "images/projects/jaypee-wedding/10.jpg", alt: "Lal Angan: table with tuberose and red roses" },
  { src: "images/projects/jw-wedding/17.jpg", alt: "Wedding, Aditi x Parichay: arches and diyas at dusk" }
];

/* Projects shown on the home page (6, in this order) */
N96.homeProjects = ["jaypee-wedding", "jw-welcome-lunch", "jw-italian-brunch", "jw-cocktail", "jw-wedding", "private-farm-lunch"];

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
    thumbs: ["images/projects/jw-welcome-lunch/5.jpg", "images/projects/jw-cocktail/3.jpg", "images/projects/jw-wedding/8.jpg"],
    excerpt: "A powder-blue welcome lunch, a moody garden cocktail and a marigold wedding, tied together by the couple's two dogs.",
    body: [
      "Aditi and Parichay wanted three very different moods across their wedding weekend, but one thread running through all of it: the things that make them, them. Their two dogs became that thread.",
      "At the welcome lunch, the dogs were embroidered on napkins and painted on the welcome sign. At the cocktail, the couple's monogram appeared on hand-stitched cushions in a garden lounge under painted bird murals. And for the wedding, we turned to South Indian temple craft, with brass lamp towers, marigold gateways and a floating floral chandelier over the mandap.",
      "This is what we mean by meaningful celebrations. The decor may get old, but these details are what guests remember."
    ],
    projects: ["jw-welcome-lunch", "jw-italian-brunch", "jw-cocktail", "jw-wedding"]
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
    thumbs: ["images/projects/jaypee-wedding/1.jpg", "images/projects/jaypee-wedding/10.jpg", "images/projects/jaypee-wedding/3.jpg"],
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
    cover: "images/projects/private-farm-lunch/1.jpg",
    thumbs: ["images/projects/private-farm-lunch/6.jpg", "images/projects/private-farm-lunch/3.jpg", "images/projects/private-farm-lunch/13.jpg"],
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
N96.homeGalleryFirst = ["images/projects/jw-welcome-lunch/4.jpg", "images/projects/st-regis-wedding/3.jpg", "images/projects/jaypee-wedding/9.jpg", "images/projects/private-farm-lunch/8.jpg"];

/* ---------- Extra gallery photos ----------
   All project photos appear in the Gallery automatically.
   Put extra photos (not linked to a project) in images/gallery/ and list them here. */
N96.galleryExtras = [
  { src: "images/gallery/florals-1.jpg", caption: "Floral study", cat: "florals" }
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
  text: "N96 Decor began with two friends who believed wedding decor could be more than stages and props. One sees the story in every space; the other makes sure that story comes to life, perfectly and on time. Together, they take a detail only the couple would recognise and turn it into a moment every guest will remember."
};

N96.founders = [
  {
    id: "anubhuti",
    name: "Anubhuti Jain",
    eyebrow: "Creative Ninja & Co-founder",      // small line above the name
    photo: "images/team/anubhuti-portrait.jpg",
    paragraphs: [
      "Anubhuti can find the starting point for an entire wedding in a single detail: the folds of a fabric, the rhythm of a row of arches or a pair of palms already growing at the venue. At N96 Decor, she follows that first idea from the render to the finished set.",
      "She has a particular eye for proportion and loves seeing how one small adjustment changes the whole composition. She\u2019ll refine the curve of a sculptural piece, raise a chandelier to open up the view or pare back the florals until the architecture comes through."
    ],
    facts: [
      ["Leads", "Design & creative direction"],
      ["Superpower", "Seeing the story in every space"],
      ["Loves", "Reimagining familiar forms in unexpected ways"]
    ]
  },
  {
    id: "naghmi",
    name: "Naghmi Hamrapurkar",
    eyebrow: "Go Getter & Co-founder",           // small line above the name
    photo: "images/team/naghmi-portrait.jpg",
    paragraphs: [
      "Naghmi can walk into an empty venue and picture how it could be transformed. She has a feel for what belongs in a space, from where a statement installation should sit to how the lighting can change the mood of a room. At N96 Decor, she helps shape the design from the first site visit and carries that vision through to the finished set.",
      "She has a knack for knowing what needs to happen next. She\u2019ll work out how to get a set into a venue with a tight load-in window, coordinate the artisans and production crew, or reshuffle the schedule when a last-minute change comes in. Her favourite moment is when the family walks in and can simply enjoy what they\u2019ve been waiting to see."
    ],
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
