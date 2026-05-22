// ============================================================================
// DATA.JS — EDIT THIS FILE TO CHANGE ANY TEXT ON THE SITE
// ============================================================================
// This is the only file you ever need to touch.
//
// HOW TO EDIT:
//   1. Open this file in any text editor.
//   2. Change the text BETWEEN the quotation marks.
//   3. Save the file, then refresh the browser to see your changes.
//
// RULES:
//   - Only change text inside the quotation marks "like this".
//   - Do not delete the commas at the end of each line.
//   - To HIDE an optional section, set its value to "" (two empty quotes).
//   - To SHOW it again, add text between the quotes.
//
// SECTIONS IN THIS FILE:
//    1. Branding
//    2. Hero (landing page)
//    3. Philosophy (landing page)
//    4. Featured client quote (landing page)
//    5. About me intro (about page)
//    6. Process steps (about page)
//    7. Services / packages (book now page)
//    8. Testimonials (testimonials page)
//    9. Credentials (testimonials page)
//   10. Contact (every page)
//   11. Footer
// ============================================================================

const SITE = {

  // --------------------------------------------------------------------------
  // 1. BRANDING
  // --------------------------------------------------------------------------
  brandShort: "F/F",
  brandFull: "Form / Function",
  metaLeft: "Form Follows Function — SG",
  metaRight: "EST. 2025 / ACE-CPT",


  // --------------------------------------------------------------------------
  // 2. HERO (landing page)
  // --------------------------------------------------------------------------
  tagline: "Fitness is closer to you than you may realise, set aside 4 hours a week, and I'll prove it to you. Personal training that builds around life's stressors and commitments.",
  ctaPrimary: "Book a Trial Session",
  ctaSecondary: "Read the Philosophy",


  // --------------------------------------------------------------------------
  // 3. PHILOSOPHY (landing page)
  // philosophyHeading + philosophyHeadingItalic combine into one heading.
  // The italic part appears in a lighter style automatically.
  // --------------------------------------------------------------------------
  philosophyHeading: "My Training",
  philosophyHeadingItalic: "Philosophy",
  philosophyParagraph1: "What does Form Follows Function mean, and why do I believe in its significance? This concept comes from architecture, where the form of projects are built following the intended function of the building. I believe that us humans are not so different, such that our training is best structured following our individual 'functions'.",
  philosophyParagraph2: "A grandfather training to be able to lift his granddaughter into the air would be trained very differently from a collegiate netballer who wishes to jump higher. This also means that unless your 'function' is to be a professional athlete, your training should be molded to accomodate life's other commitments, and should always be conducted with the intention of improving your quality of life.",
  philosophyParagraph3: "As your trainer, you have my word that I will help you not only get into your desired shape, but do it such that the other areas of your life need not be compromised significantly.",


  // --------------------------------------------------------------------------
  // 4. FEATURED CLIENT QUOTE (landing page)
  // Appears between the nav cards and the contact section.
  // Keep it under 30 words for best impact.
  // Set featuredQuote to "" to hide this section entirely.
  // --------------------------------------------------------------------------
  featuredQuote: "I've lost 25 kg, gained noticeable strength, and built a better relationship with my body.",
  featuredCite: "Steven, 23",


  // --------------------------------------------------------------------------
  // 5. ABOUT ME INTRO (about page — above the process steps)
  // Tell your story: why you started F/F, what you believe, what makes
  // you different. This is the personal section.
  // Set aboutIntro to "" to hide this section until you're ready.
  // --------------------------------------------------------------------------
  aboutIntro:"When I first began lifting at about 15 years old, the gymused to function as an emotional outlet for me, more than a source of genuine growth. Naturally, this led to me spending the first few years in the gym irresponsibly, lifting weights my body was not yet prepared for. A few years, and more than a few injuries onwards, I wish I had approached the gym with the mindset that I hold today. Where the gym is viewed as a place for growth and restoration of freedom of movement. As such, I was drawn to personal training, where I am able to introduce everything I love about physical training to others, while also being able to educate and guide them away from the ways I misused the gym. It might sound cliche, but to me, it is as simple as maximising the benefits and minimising the costs of training. ",


  // --------------------------------------------------------------------------
  // 6. PROCESS STEPS (about page)
  // --------------------------------------------------------------------------
  processHeading: "The thought process",
  processIntro: "Every programme is written from scratch with information from trials.",

  process1Number: "01",
  process1Title: "Can you move?",
  process1Body: "We start by understanding what your body can and cannot do right now, and we build up to the things you cannot do yet.",

  process2Number: "02",
  process2Title: "Why does this part hurt?",
  process2Body: "If something hurts, we sort it out before we add load. If you're paying me, you best be living better for it.",

  process3Number: "03",
  process3Title: "How well are you able to do this?",
  process3Body: "Once the pain is managed, we will focus on the quality of your movements.",

  process4Number: "04",
  process4Title: "How hard and fast can you do this?",
  process4Body: "At this point you have earned the right to train hard. This is where the fun is.",


  // --------------------------------------------------------------------------
  // 7a. HOBBIES (about page — brief personal section)
  // A short line about you outside of training. Keep it natural.
  // Set to "" to hide this section.
  // --------------------------------------------------------------------------
  hobbies: "Outside of the gym, I spend most of my time doing Brazilian Jiu Jitsu, paint warhammer minifigures, write and spend time with my dog, Eski.",


  // --------------------------------------------------------------------------
  // 7b. ARTICLES (about page — links to your Substack)
  // Articles 1-3 appear as large featured posts (alternating image/text layout).
  // Articles 4 and above appear in a scrollable archive list below them.
  // Leave any articleN fields as "" to hide that article.
  //
  // HOW TO ADD AN ARTICLE:
  //   1. Copy an article block below.
  //   2. Fill in the title, a 2-3 sentence excerpt, and paste the Substack URL.
  //   3. Save and refresh.
  //
  // substackLink: your Substack homepage URL — shown as "Read all on Substack".
  // Set to "" to hide that button.
  // --------------------------------------------------------------------------
  articlesHeading: "Ideas on training,",
  articlesHeadingItalic: "in long form", 
    
  substackLink: "https://substack.com",

  article1Title: "Why form follows function in greater detail",
  article1Excerpt: "What is meant by form? What is referred to as function? What does this have to do with making gains in the gym?",
  article1Link: "https://open.substack.com/pub/brandonzhao1/p/why-form-follows-function?r=8e556x&utm_medium=ios",

  article2Title: "What the gym actually teaches you",
  article2Excerpt: "Everyone comes in for the body. Most stay for something else. Training consistently over years does something to your relationship with difficulty and with yourself that is hard to explain until you have lived it.",
  article2Link: "https://substack.com",

  article3Title: "Ego and the beginner's mind",
  article3Excerpt: "The thing that keeps most people from getting better is not lack of effort. It is an unwillingness to look like a beginner. A reflection on ego, embarrassment, and why starting over is always the fastest way forward.",
  article3Link: "https://substack.com",

  article4Title: "Why boring training works",
  article4Excerpt: "Consistency with a simple plan beats variety with a complicated one, every time.",
  article4Link: "https://substack.com",

  article5Title: "The case for doing less",
  article5Excerpt: "More volume is not always the answer. Sometimes the recovery is where the work happens.",
  article5Link: "https://substack.com",

  article6Title: "Strength is not a number",
  article6Excerpt: "What it really means to be strong, and why the barbell is just the beginning of the conversation.",
  article6Link: "https://substack.com",


  // --------------------------------------------------------------------------
  // 7. SERVICES / PACKAGES (book now page)
  // servicesOverview: a short paragraph at the top of the page explaining
  // session duration, what to expect, and how to choose a package.
  // Set to "" to hide this section until you're ready to write it.
  //
  // serviceNDetail: items to show as a bullet list under each package.
  // Separate items with " / " — e.g. "Item one / Item two / Item three"
  // Leave as "" for no detail list.
  // --------------------------------------------------------------------------
  servicesOverview: "Across all packages, you can be guaranteed a personalised program built from the ground up and updated biweekly to ensure progressive overload/ guidance on form and technique/ regular checkins on stress levels/ optional nutritional and recovery guidance/ and a friend, if that's what you'd like.",

  servicesHeading: "Choose your structure",

  service1Title: "Trial Session",
  service1Price: "SGD 20",
  service1Desc: "A first session to conduct assessments, try a workout together, and for you to see if you like how I run things.",

  service2Title: "4-Session Pack",
  service2Price: "SGD 360 / SGD 90 per 1.5 hour session",
  service2Desc: "In-person training at ActiveSG, or any private gym. Recommended for new clients. Valid for 6 weeks.",

  service3Title: "8-Session Pack",
  service3Price: "SGD 640 / SGD 80 per session",
  service3Desc: "In-person training at ActiveSG, or any private gym. Recommended for those with more certainty. Valid for 12 weeks.",

  service4Title: "Online Coaching",
  service4Price: "SGD 100 per month",
  service4Desc: "Custom programming, weekly check-ins, form video reviews. For those who train independently but want expert structure and accountability.",
  service4Detail: "Online support / Bi-monthly review call",


  // --------------------------------------------------------------------------
  // 8. TESTIMONIALS (testimonials page)
  // --------------------------------------------------------------------------
  testimonialsHeading: "The work, in",
  testimonialsHeadingItalic: "their words.",

  testimonial1Quote: "The experience has been transformational for my own physical health. Brandon took the time to understand my goals and created a structured plan that was effective, sustainable, and enjoyable. I've lost 25 kg, gained noticeable strength, and built a better relationship with my body.",
  testimonial1Cite: "Steven, 23, beginner in the gym",

  testimonial2Quote: "He demonstrates a nuanced understanding of the female body and approaches each session with professionalism. He pushes me to make meaningful progress while remaining aware of my individual limits. His thoughtful approach has had real impact on my physical strength and overall quality of life.",
  testimonial2Cite: "Ana, 20, beginner in the gym",

  testimonial3Quote: "He spent 20 minutes correcting the little flaws in my deadlift form, focused on where I could improve rather than just pointing out everything I was doing wrong. Even when injuries or life got in the way, he always checked in. He genuinely cares about his clients.",
  testimonial3Cite: "Hemant, 21, novice in the gym",

  testimonial4Quote: "Brandon is super invested in each of his clients and genuinely wants to help them achieve their goals. I used to dread going to the gym because I didn't know what I was doing. With Brandon, it's become second nature.",
  testimonial4Cite: "Alex, 21, Climber and ex Water Polo athlete",


  // --------------------------------------------------------------------------
  // 9. CREDENTIALS (testimonials page)
  // Status options: "Current" / "Coming soon" / "Expected 2025" / ""
  // Set status to "" to hide that credential entirely.
  // --------------------------------------------------------------------------
  credsHeading: "Qualified.",
  credsHeadingItalic: "Always learning.",

  cred1Name: "ACE Certified Personal Trainer",
  cred1Status: "Current",


  // --------------------------------------------------------------------------
  // 10. CONTACT (appears on every page)
  // contactHeading + contactHeadingItalic combine into one heading.
  //
  // EMAIL: paste your email address into the email field to add it as a
  // contact option. Set both email and emailLink to "" to hide it.
  // emailLink format: "mailto:your@email.com"
  // --------------------------------------------------------------------------
  contactHeading: "Drop me a text.",

  whatsappNumber: "+65 8950 8470",
  whatsappLink: "https://wa.me/6589508470",

  email: "brandonyzhao05@gmail.com",

  instagramHandle: "@dogs_are_very_neat",
  instagramLink: "https://instagram.com/dogs_are_very_neat",

  locationText: "ActiveSG / Private gym / Online",


  // --------------------------------------------------------------------------
  // 11. FOOTER
  // --------------------------------------------------------------------------
  footerLeft: "F/F — Brandon Zhao Yi",
  footerRight: "Singapore",

};
