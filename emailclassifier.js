// ---------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------

/**
 * Each rule has:
 *   - phrases: array of strings. Multi-word = higher weight automatically.
 *   - senderDomains: known domains that strongly indicate this category.
 *   - subjectPhrases: phrases that only apply to the subject line (higher signal).
 */
const RULES = {
  junk: {
    // Checked FIRST — junk is easiest to confirm and should be filtered aggressively
    priority: 1,
    scoreThreshold: 2,
    phrases: [
      // Opt-out signals (near-certain junk)
      "unsubscribe", "opt out", "opt-out", "manage preferences",
      "manage email preferences", "email preferences", "you are receiving this",
      "you were selected", "you have been selected", "you've been selected",
      "you were randomly selected",
      // Promotional language
      "limited time", "limited time offer", "this weekend only", "ends monday",
      "ends friday", "expires soon", "don't miss", "dont miss",
      "exclusive offer", "exclusive deal", "special offer", "flash sale",
      "act now", "shop now", "buy now", "order now", "click here",
      "free trial", "free shipping", "no obligation", "cancel anytime",
      "risk free", "risk-free", "money back", "satisfaction guaranteed",
      "as seen on", "sponsored", "advertisement", "paid promotion",
      "earn points", "bonus points", "points expire", "rewards expire",
      "gift card", "amazon gift card", "you could win", "enter to win",
      "sweepstakes", "giveaway", "lottery", "prize", "winner",
      "congratulations you", "you've won", "you have won",
      "survey", "share your opinion",
      "% off", "save up to", "save 30%", "save 40%", "huge savings",
      "best price", "lowest price", "price drop",
      // Newsletter / broadcast signals
      "newsletter", "weekly digest", "monthly digest", "roundup",
      "top stories", "this week in", "view in browser", "view online",
      "forward to a friend",
      // Upsell / upgrade language
      "upgrade now", "unlock premium", "go premium", "upgrade your account",
      "premium membership", "premium badge",
    ],
    senderDomains: [
      // Domains that are essentially always promotional
      ".promo", ".email", ".deals", "promo.net", "promo.com",
      "mailer.", "noreply@survey", "rewards.", "-rewards.",
      "offers@", "deals@", "blast@", "news@", "newsletter@",
      "noreply@linkedin", // LinkedIn promo emails specifically
    ],
    subjectPhrases: [
      "🎸", "🎉", "💥", "⚡", "✅", // Emoji in subject = almost always junk
      "huge savings", "don't miss", "dont miss", "this weekend only",
      "sale", "% off", "deal", "offer", "unlock", "expires",
      "you've been selected", "share your opinion", "earn a $",
      "free trial", "act fast",
    ],
  },

  finance: {
    priority: 2,
    scoreThreshold: 2,
    phrases: [
      // Invoices & billing
      "invoice", "invoice #", "invoice number", "bill", "billing",
      "receipt", "payment confirmation", "payment sent", "payment due",
      "payment received", "amount due", "balance due", "past due",
      "overdue", "net 30", "net 60", "net-60", "pay by", "due date",
      // Transactions & accounts
      "transaction", "statement", "account balance", "account statement",
      "account ending", "card ending", "direct deposit", "ach",
      "wire transfer", "bank transfer", "funds transferred",
      "charge", "charged", "refund", "reimbursement",
      // Corporate finance
      "expense report", "expense reimbursement", "budget", "forecast",
      "fiscal year", "q1", "q2", "q3", "q4", "fy2026", "fy2025",
      "purchase order", "po number", "vendor agreement", "contract renewal",
      "accounts payable", "accounts receivable", "procurement",
      "approval routing", "sign-off", "authorized by",
      // Payroll
      "payroll", "paystub", "pay stub", "pay period", "timesheet",
      "direct deposit", "compensation", "salary", "bonus",
      // Tax & compliance
      "tax", "irs", "w-2", "1099", "audit",
      // Credit
      "credit card", "corporate card", "amex", "visa", "mastercard",
      "credit", "debit", "overdraft", "loan", "mortgage", "financing",
    ],
    senderDomains: [
      "ap@", "payroll@", "billing@", "invoices@", "finance@",
      "expense", "concur.com", "bill.com", "americanexpress.com",
      "amex.com", "intuit.com", "quickbooks", "netsuite",
      "budget.planning@", "fp&a", "procurement@",
    ],
    subjectPhrases: [
      "invoice", "payment", "statement", "expense report", "receipt",
      "approval required", "action required", "budget", "timesheet",
      "pay period", "billing", "purchase order", "vendor agreement",
    ],
  },

  travel: {
    priority: 3,
    scoreThreshold: 2,
    phrases: [
      // Flights
      "flight", "departing", "departure", "arrival", "arriving",
      "boarding pass", "gate", "seat assignment", "cabin class",
      "first class", "business class", "economy", "checked bag", "baggage",
      "confirmation number", "booking reference", "airline", "delta",
      "united airlines", "american airlines", "southwest", "jetblue",
      "skymiles", "frequent flyer", "mileageplus",
      // Lodging
      "hotel", "check-in", "check-out", "reservation", "room type",
      "marriott", "hilton", "hyatt", "westin", "sheraton", "airbnb",
      "nightly rate", "early check-in", "late checkout",
      // Ground transport
      "car rental", "rental car", "ground transportation",
      "national car", "hertz", "enterprise", "avis", "uber",
      "pickup", "pick-up", "drop-off",
      // Trip / itinerary
      "itinerary", "travel itinerary", "trip", "travel dates",
      "outbound", "return flight", "round trip", "one way",
      "layover", "connecting flight", "transit",
      // Lounge / perks
      "sky club", "lounge access", "tsa precheck", "global entry",
      "priority boarding",
    ],
    senderDomains: [
      "delta.com", "united.com", "aa.com", "southwest.com",
      "marriott.com", "hilton.com", "hyatt.com", "airbnb.com",
      "expedia.com", "kayak.com", "concur.com", "tripit.com",
      "nationalcar.com", "hertz.com", "enterprise.com",
      "deltaskyclubs.com", "booking.com",
    ],
    subjectPhrases: [
      "your trip", "upcoming trip", "itinerary", "reservation confirmed",
      "booking confirmed", "flight confirmation", "check-in",
      "travel itinerary", "your reservation", "car rental",
    ],
  },

  calendar: {
    priority: 4,
    scoreThreshold: 2,
    phrases: [
      // Meeting types
      "meeting", "meeting invitation", "event invitation", "calendar invite",
      "zoom", "google meet", "teams", "webex", "conference call",
      "dial-in", "join link", "meeting link", "passcode",
      "1:1", "one-on-one", "sync", "check-in", "kickoff",
      "all-hands", "town hall", "all-staff", "standup", "stand-up",
      "workshop", "offsite", "on-site", "summit", "roundtable",
      "panel", "keynote", "presentation", "demo", "review",
      "performance review", "annual review",
      // Scheduling
      "schedule", "reschedule", "rescheduled", "cancel", "cancelled",
      "availability", "are you available", "block time", "hold the date",
      "save the date", "time slot", "open slot", "calendly",
      "calendar invite", "google calendar", "outlook calendar",
      "reminder", "rsvp", "please confirm", "confirm attendance",
      "mandatory", "attendance required",
      // Session metadata
      "agenda", "attendees", "organizer", "location", "conference room",
      "boardroom", "am pt", "pm pt", "am ct", "pm ct", "am et", "pm et",
    ],
    senderDomains: [
      "calendly.com", "calendar-noreply@", "calendar@",
      "zoom.us", "meet.google.com", "teams.microsoft.com",
      "hr@", "people@", "namm.org",
    ],
    subjectPhrases: [
      "meeting invitation", "calendar invite", "event:", "invitation:",
      "reschedule", "save the date", "reminder:", "you're invited",
      "performance review", "all-hands", "town hall", "speaker session",
    ],
  },
};

/**
 * Urgent flag — independent of category.
 * Uses phrase-level matching to avoid false positives from words like
 * "important" appearing in newsletters.
 */
const URGENT_PHRASES = [
  // Explicit urgency
  "action required", "immediate action", "respond immediately",
  "asap", "as soon as possible", "right away", "time sensitive",
  "time-sensitive", "urgent", "urgently", "critical",
  // Deadline pressure
  "hard deadline", "deadline today", "due today", "expires today",
  "last chance", "final notice", "by end of day", "by eod",
  "by end of business", "by cob", "please respond by",
  "respond by", "needed by", "required by",
  // Security / account alerts (genuinely urgent, not junk)
  "security alert", "unauthorized access", "suspicious activity",
  "account compromised", "password reset", "verify your identity",
  "breach", "failed login", "locked out",
  // Business escalation
  "pending approval", "awaiting approval", "blocked on",
  "lapse", "will lapse", "will expire", "at risk",
  "escalation", "escalate",
];

// ---------------------------------------------------------------------------
// SCORING ENGINE
// ---------------------------------------------------------------------------

/**
 * Normalize text for matching: lowercase, collapse whitespace.
 */
function normalize(text) {
  return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * Score a block of text against a list of phrases.
 * Multi-word phrases are worth more than single words to reduce noise.
 *
 * @param {string} text - Normalized text to search within
 * @param {string[]} phrases - Phrases to look for
 * @param {number} multiplier - Score multiplier (e.g. subject lines score higher)
 * @returns {number} Total score
 */
function scoreText(text, phrases, multiplier = 1) {
  let score = 0;
  for (const phrase of phrases) {
    if (text.includes(phrase)) {
      const wordCount = phrase.trim().split(/\s+/).length;
      // Single word = 1pt, two words = 2pt, three+ words = 3pt
      const weight = Math.min(wordCount, 3);
      score += weight * multiplier;
    }
  }
  return score;
}

/**
 * Check if a sender string matches any domain/pattern in a list.
 */
function senderMatchesDomain(sender, domains) {
  const s = normalize(sender);
  return domains.some((d) => s.includes(normalize(d)));
}

// ---------------------------------------------------------------------------
// MAIN CLASSIFIER
// ---------------------------------------------------------------------------

/**
 * Classify a single email and return its category.
 *
 * @param {string} sender
 * @param {string} subject
 * @param {string} body
 * @returns {string} category — "finance" | "travel" | "calendar" | "junk" | "inbox"
 */
function classifyEmail( subject, body, sender) {
  const s = normalize(sender);
  const sub = normalize(subject);
  const b = normalize(body);

  const scores = {};

  for (const [category, rule] of Object.entries(RULES)) {
    let score = 0;

    // 1. Sender domain match — strong signal, worth 4 points
    if (senderMatchesDomain(s, rule.senderDomains)) {
      score += 4;
    }

    // 2. Subject line phrases — high signal, 2x multiplier
    score += scoreText(sub, rule.subjectPhrases || [], 2);

    // 3. Subject line general phrases — 1.5x multiplier
    score += scoreText(sub, rule.phrases, 1.5);

    // 4. Body phrases — baseline 1x
    score += scoreText(b, rule.phrases, 1);

    scores[category] = Math.round(score * 10) / 10;
  }

  // Filter to categories that meet their threshold, then sort by:
  // 1. Score descending
  // 2. Priority ascending (lower number = checked first, wins ties)
  const candidates = Object.entries(scores)
    .filter(([cat, score]) => score >= RULES[cat].scoreThreshold)
    .sort(([catA, scoreA], [catB, scoreB]) => {
      if (scoreB !== scoreA) return scoreB - scoreA;
      return RULES[catA].priority - RULES[catB].priority;
    });
  return candidates.length > 0 ? candidates[0][0] : "inbox";
}

/**
 * Check whether an email should be flagged as urgent.
 * Always returns false for junk to prevent spam from triggering red labels.
 *
 * @param {string} sender
 * @param {string} subject
 * @param {string} body
 * @returns {boolean}
 */
function isUrgent( subject, body, sender) {
  const category = classifyEmail(subject, body, sender);
  if (category === "junk") return false;

  const fullText = normalize(subject) + " " + normalize(body);
  return scoreText(fullText, URGENT_PHRASES, 1) > 0;
}
