/* =========================================================
   N96 DECOR — CHATBOT ANSWERS
   ---------------------------------------------------------
   The chatbot reads this file to answer visitors.
   Each entry has:
     keywords : words or phrases visitors might type
                (lowercase; more keywords = better matching)
     answer   : the reply. You can use:
                  {email} {phones} {instagram}  → filled from your contact details
                  [link text](page.html)        → a clickable link
                  a blank line (\n\n)           → new paragraph
     chips    : (optional) follow-up buttons shown under the answer

   To add a question: copy one { ... }, paste it in the list,
   change the keywords and answer, save. That's all.
   ========================================================= */

N96.chatbot = {
  botName: "N96 Assistant",
  greeting: "Hello! I'm the N96 Decor assistant. Ask me anything about our wedding decor, florals, set design, past projects or how to book a meeting.",
  startChips: ["What services do you offer?", "How much does decor cost?", "Book a meeting", "Show me your weddings", "Which cities do you work in?"],

  // Shown when the bot can't find an answer
  fallback: "I'm not sure about that one, but our team will be happy to help. You can call us on {phones} or email {email}.\n\nOr leave your number below and we'll get back to you.",
  fallbackChips: ["Leave my number", "Book a meeting", "What services do you offer?"],

  intents: [
    {
      keywords: ["hi", "hello", "hey", "hii", "namaste", "good morning", "good evening", "good afternoon", "hola"],
      answer: "Hello! Lovely to have you here. How can I help with your celebration?",
      chips: ["What services do you offer?", "Show me your weddings", "Book a meeting"]
    },
    {
      keywords: ["service", "services", "what do you do", "offer", "provide", "what all", "kya karte", "work do you do", "speciali"],
      answer: "N96 Decor is a wedding decor, florals and set design studio. We design:\n\n• Wedding decor: mandaps, stages, entrances, lounges and lighting\n• Florals: installations, centrepieces, garlands\n• Set design: painted backdrops, bars, themed lounges\n• Personalised details: monograms, embroidered napkins, custom cushions and signage\n• Pre-wedding functions: mehendi, haldi, sangeet, cocktail, welcome lunch\n• Intimate events: lunches, birthdays, anniversaries and corporate dinners\n\nSee everything on our [Services page](services.html).",
      chips: ["How much does decor cost?", "Book a meeting", "Show me your projects"]
    },
    {
      keywords: ["how much", "price", "pricing", "cost", "costs", "budget", "charge", "charges", "rate", "rates", "fees", "package", "packages", "quote", "quotation", "estimate", "kitna", "kitne", "expensive", "cheap", "affordable", "kharcha"],
      answer: "Every celebration we design is custom, so the cost depends on your venue, guest count, number of functions, florals and the level of personalisation.\n\nThe best way to get an estimate is a quick meeting where we understand your vision and budget. Call {phones} or [send us your details](index.html#contact), and we'll share a proposal that fits.",
      chips: ["Book a meeting", "Leave my number", "What services do you offer?"]
    },
    {
      keywords: ["book", "booking", "meeting", "meet", "appointment", "consult", "consultation", "schedule", "visit", "enquiry", "inquiry", "get started", "hire", "milna"],
      answer: "We'd love to meet you in person! You can:\n\n• Call {phones}\n• Email {email}\n• Fill in the [enquiry form](index.html#contact) with your date, venue and guest count\n\nOr leave your number here and we'll call you back.",
      chips: ["Leave my number", "How early should I book?"]
    },
    {
      keywords: ["contact", "phone", "number", "call", "mobile", "email", "mail", "gmail", "reach", "whatsapp", "talk to", "speak"],
      answer: "You can reach the N96 team on:\n\n📞 {phones}\n✉️ {email}\n📷 Instagram {instagram}\n\nAll our details are on the [Contact page](index.html#contact).",
      chips: ["Book a meeting", "Leave my number"]
    },
    {
      keywords: ["instagram", "insta", "social media", "facebook", "reels", "follow"],
      answer: "Follow our latest work on Instagram: {instagram}. We share reels, behind-the-scenes of our artisans and full wedding reveals there.",
      chips: ["Show me your projects", "Book a meeting"]
    },
    {
      keywords: ["city", "cities", "location", "where are you", "based", "travel", "destination", "outside", "other city", "pan india", "all over", "goa", "udaipur", "bangalore", "bengaluru", "delhi", "noida", "gurgaon", "gurugram", "mumbai", "jaipur", "kahan"],
      answer: "We design weddings and celebrations across India. Our recent work includes Bengaluru, Goa, Udaipur, Delhi and Greater Noida, and we're happy to travel for destination weddings.\n\nTell us your venue and date and we'll take it from there.",
      chips: ["Show me your projects", "Book a meeting"]
    },
    {
      keywords: ["project", "projects", "portfolio", "previous work", "past work", "your work", "examples", "samples", "photos", "pictures", "gallery", "show me"],
      answer: "Here's our work:\n\n• [All projects](projects.html), filterable by wedding, pre-wedding, birthday, corporate and private parties\n• [Gallery](gallery.html) with all our photos\n• [Couple stories](stories.html) with the stories behind each celebration",
      chips: ["Show me your weddings", "Tell me about Aditi & Parichay", "Which venues have you worked at?"]
    },
    {
      keywords: ["wedding", "weddings", "shaadi", "shadi", "vivah", "mandap", "marriage", "pheras", "ceremony"],
      answer: "Weddings are at the heart of what we do. Some of our favourites:\n\n• [The Trellis Garden Wedding](project.html#st-regis-wedding), St. Regis Goa\n• [Marigold & Brass Wedding](project.html#jw-wedding), JW Marriott Golfshire, Bengaluru\n• [Ivory Jaali Wedding](project.html#jaypee-wedding), Jaypee Greens\n\nWe design everything from the entrance and mandap to lounges, lighting and personal details.",
      chips: ["How much does decor cost?", "Pre-wedding functions", "Book a meeting"]
    },
    {
      keywords: ["mehendi", "mehndi", "haldi", "sangeet", "cocktail", "pre wedding", "pre-wedding", "welcome lunch", "brunch", "engagement", "roka", "ring ceremony", "functions"],
      answer: "Yes, we design every function of your wedding weekend, each with its own mood, while keeping the whole celebration feeling like one story. See:\n\n• [Moonlit Garden Cocktail](project.html#jw-cocktail)\n• [Powder Blue Welcome Lunch](project.html#jw-welcome-lunch)\n• [Curiosity Garden Mehendi](project.html#raffles-mehendi), Raffles Udaipur",
      chips: ["Book a meeting", "How much does decor cost?"]
    },
    {
      keywords: ["birthday", "anniversary", "corporate", "office", "company", "launch", "baby shower", "small event", "intimate", "party", "parties", "lunch", "dinner", "private event", "house party", "home"],
      answer: "Yes! Alongside weddings, we design intimate and private celebrations: garden lunches, birthdays, anniversaries, baby showers and corporate dinners. Smaller events get the same care and personal touches.\n\nHave a look at our [Green Stripe Farm Lunch](project.html#private-farm-lunch) for an example.",
      chips: ["Book a meeting", "How much does decor cost?"]
    },
    {
      keywords: ["flower", "flowers", "floral", "florals", "phool", "bouquet", "centrepiece", "centerpiece", "garland", "installation"],
      answer: "Florals are one of our three core services. We create everything from wild meadow installations and hanging floral chandeliers to clean single-colour centrepieces and traditional garlands, always matched to the season and space.",
      chips: ["Show me your projects", "Book a meeting"]
    },
    {
      keywords: ["set design", "backdrop", "stage", "theme", "themes", "lounge", "bar", "photo booth", "selfie", "mural", "immersive"],
      answer: "Our set design turns a ballroom or lawn into somewhere else entirely: hand-painted backdrops and murals, custom bars, themed lounges and photo spots. Our [Moonlit Garden Cocktail](project.html#jw-cocktail) is a good example.",
      chips: ["Personalised details", "Book a meeting"]
    },
    {
      keywords: ["personal", "personalised", "personalized", "custom", "customise", "customize", "monogram", "unique", "different", "special", "detail", "details", "dog", "pet", "story"],
      answer: "Personalisation is what makes N96 different. Your decor should tell your story: a custom-made cushion, your favourite poem on the dinner table, or your dog on every coaster.\n\nFor Aditi & Parichay, their two dogs were embroidered on napkins and painted on the welcome sign. Read the [full story](stories.html#aditi-parichay).",
      chips: ["Tell me about Aditi & Parichay", "Book a meeting"]
    },
    {
      keywords: ["aditi", "parichay", "jw", "golfshire", "marriott"],
      answer: "Aditi & Parichay's wedding weekend at JW Marriott Golfshire, Bengaluru (Oct 2025) had three looks:\n\n• [Powder Blue Welcome Lunch](project.html#jw-welcome-lunch) with their dogs on every napkin\n• [Moonlit Garden Cocktail](project.html#jw-cocktail) with painted bird murals\n• [Marigold & Brass Wedding](project.html#jw-wedding) with a floating floral chandelier mandap\n\nRead the [full story](stories.html#aditi-parichay).",
      chips: ["Show me your weddings", "Book a meeting"]
    },
    {
      keywords: ["venue", "venues", "hotel", "hotels", "resort", "st regis", "raffles", "jaypee", "farm", "farmhouse"],
      answer: "We've designed celebrations at St. Regis Goa, JW Marriott Golfshire Bengaluru, Raffles Udaipur, Jaypee Greens Greater Noida and private farms in Delhi, among others. We work at hotels, resorts, farmhouses and homes. Already have a venue? Tell us and we'll plan around it.",
      chips: ["Show me your projects", "Book a meeting"]
    },
    {
      keywords: ["process", "how does it work", "how do you work", "steps", "procedure", "how it works", "what happens"],
      answer: "Here's how we work:\n\n1. Meet & listen: we understand you, your story, venue and budget\n2. Concept & moodboard: palettes, references and layouts for each function\n3. Design & craft: our team and artisans build the sets, florals and personal details\n4. Install & celebrate: we install, style and manage everything on site\n\nIt's a hassle-free experience from the first idea to the final execution.",
      chips: ["How early should I book?", "Book a meeting"]
    },
    {
      keywords: ["how early", "advance", "in advance", "how soon", "last minute", "timeline", "months before", "available", "availability", "date free", "dates"],
      answer: "For weddings we recommend reaching out as early as you can, especially for peak wedding season dates, so there's time for design and custom pieces. Smaller events can often be done on shorter notice.\n\nShare your date with us on {phones} and we'll confirm availability.",
      chips: ["Leave my number", "Book a meeting"]
    },
    {
      keywords: ["planner", "planning", "wedding planner", "coordination", "catering", "photographer", "photography", "makeup", "dj", "music", "food"],
      answer: "Our focus is wedding decor, florals and set design. We regularly work alongside wedding planners (we've styled projects for Silhouette Events and The Wedding Square). For other services, ask our team and we'll guide you.",
      chips: ["Book a meeting", "What services do you offer?"]
    },
    {
      keywords: ["founder", "founders", "owner", "team", "who are you", "about", "anubhuti", "naghmi", "who runs"],
      answer: "N96 Decor was founded by Anubhuti Jain (Creative Ninja & Co-founder) and Naghmi Hamrapurkar (Go Getter & Co-founder). We follow professional design processes and care deeply about quality, finishing and personalisation. [Meet the founders](founders.html).",
      chips: ["Why choose N96?", "Book a meeting"]
    },
    {
      keywords: ["why", "why you", "why choose", "better", "different from", "trust", "quality"],
      answer: "Why couples choose us:\n\n• Quality and finishing, following professional design standards\n• A hassle-free experience from first idea to final installation\n• Details and personalisation that make it truly yours\n\nWe're ready to walk that extra mile to make your celebration perfect.",
      chips: ["Show me your projects", "Book a meeting"]
    },
    {
      keywords: ["job", "jobs", "career", "careers", "hiring", "internship", "intern", "work with you", "join", "vacancy", "vendor", "collaborate", "collaboration", "freelance"],
      answer: "We're always happy to hear from designers, florists, artisans, production crew, interns and vendor partners. Apply on our [Join Us page](join.html).",
      chips: ["What services do you offer?"]
    },
    {
      keywords: ["colour", "color", "colours", "colors", "palette", "ideas", "inspiration", "trend", "trends"],
      answer: "Every palette we create starts from you. Some we've loved: powder blue and white, vermilion and marigold, ivory and red, sage and blush. Each project page shows its colour palette, so browse our [projects](projects.html) for ideas.",
      chips: ["Show me your projects", "Book a meeting"]
    },
    {
      keywords: ["thank", "thanks", "thank you", "thx", "great", "awesome", "nice", "shukriya", "dhanyavad"],
      answer: "You're welcome! If there's anything else, just ask. We'd love to be part of your celebration. 🤍",
      chips: ["Book a meeting"]
    },
    {
      keywords: ["bye", "goodbye", "see you", "ok bye"],
      answer: "Thank you for visiting N96 Decor! Reach us anytime on {phones}.",
      chips: []
    }
  ]
};
