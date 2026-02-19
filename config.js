// Trello API keys
const TRELLO_KEY = "276961d3fc41af1b7e0a1fe6bb48422d";
const TRELLO_TOKEN = "ATTAbb3ac21d971a1a71899f5609c94f9d1a184949773dc2c8619a54fce0d4eff1b9A7DB272F";


const LIST_IDS = {
  travel: "6994f1975d109e4b636d5739",
  finance: "6994f1b3ffa27671749bc778",
  calendar: "6994f1c38e12fdbab667b073",
  inbox: "6994f1dd0729a602a119622c",
  junk: "6994bf00fa45f8102dda15b4"
};

// Trello labels
const LABELS = {
  urgent: "6994acb6969daa386b808443"
};

const samples = [
  {
    "sender": "Accounts Payable - Guitar Center <ap@guitarcenter.com>",
    "subject": "ACTION REQUIRED: Invoice #GC-2026-04471 Pending Approval",
    "body": "Hi Jessica,\n\nThis is a reminder that Invoice #GC-2026-04471 from Fender Musical Instruments Corporation ($48,320.00) is pending VP approval before the February 28th payment cycle closes.\n\nCould you please route this to Mark Delgado for sign-off? The PO number is PO-2026-1182 and it's tied to the Q1 West Coast store replenishment order.\n\nIf there are any discrepancies, please loop in Sarah Cho in Procurement before approving.\n\nThanks,\nDiana Ruiz\nAccounts Payable\nGuitar Center, Inc."
  },
  {
    "sender": "American Express Corporate <amex.corporate@americanexpress.com>",
    "subject": "Your Corporate Card Statement is Ready \u2013 Account ending 4-72009",
    "body": "Dear Jessica Moore,\n\nYour American Express Corporate Card statement for the billing period ending February 14, 2026 is now available.\n\nAccount Ending: 4-72009\nTotal Balance Due: $3,841.67\nMinimum Payment Due: $96.05\nPayment Due Date: March 10, 2026\n\nTop charges this period:\n- Marriott Bonvoy (Nashville, TN) \u2013 $612.00\n- Delta Air Lines \u2013 $887.40\n- Mastro's Steakhouse (Chicago, IL) \u2013 $341.22\n- Staples Business Advantage \u2013 $94.17\n\nTo view your full statement, log in to your account at americanexpress.com.\n\nAmerican Express Corporate Services"
  },
  {
    "sender": "Concur Expense System <expense.reports@guitarcenter.com>",
    "subject": "Expense Report ER-8812 Submitted for Your Review",
    "body": "Hello Jessica,\n\nExpense Report ER-8812 has been submitted by Mark Delgado (VP, Merchandising) for your review and approval routing.\n\nReport Title: NAMM Show 2026 \u2013 Anaheim, CA\nSubmitted: February 14, 2026\nTotal Amount: $2,194.38\nTrip Dates: January 22\u201326, 2026\n\nThis report includes airfare, hotel, meals, and ground transportation. All receipts have been attached in Concur.\n\nPlease log in to Concur to review and forward to Finance for final approval. Note that this report includes one receipt flagged as over-limit for meals ($187.50 at Mastro's Steakhouse) \u2014 Mark has added a business justification note.\n\nQuestions? Contact expenses@guitarcenter.com.\n\nConcur Expense System\nGuitar Center, Inc."
  },
  {
    "sender": "Sarah Cho \u2013 Procurement <procurement@guitarcenter.com>",
    "subject": "RE: Roland Vendor Agreement Renewal \u2013 Need Exec Signature",
    "body": "Hi Jessica,\n\nFollowing up on the Roland US vendor agreement renewal I sent over last week. Legal has cleared the updated terms (net-60 payment, 2.1% early pay discount, revised MAP policy addendum).\n\nI need Mark's wet signature on page 14 and the attached addendum page before we can send it back to Roland. Their team has a hard deadline of February 23rd or the current pricing terms lapse.\n\nI've attached the finalized PDF. Could you get this on his calendar for a quick 5-minute signing this week?\n\nLet me know if you have any questions.\n\nThanks,\nSarah Cho\nSr. Procurement Manager\nGuitar Center, Inc.\n(818) 735-8800 x4421"
  },
  {
    "sender": "Bill.com <noreply@bill.com>",
    "subject": "Payment Sent: $12,500.00 to Warehouse Automation Solutions LLC",
    "body": "Payment Confirmation\n\nA payment has been sent from your account.\n\nPayee: Warehouse Automation Solutions LLC\nAmount: $12,500.00\nPayment Method: ACH\nExpected Arrival: February 12\u201313, 2026\nMemo: Consulting Retainer \u2013 February 2026 (Invoice #WAS-0224)\n\nThis payment was authorized by: Mark Delgado\nInitiated by: Jessica Moore\n\nIf you did not initiate this transaction, please contact your account administrator immediately.\n\nBill.com Support | support@bill.com | 1-888-498-5545"
  },
  {
    "sender": "FP&A Team \u2013 Guitar Center <budget.planning@guitarcenter.com>",
    "subject": "Q2 Budget Deck \u2013 Requesting Mark's Input by Feb 27",
    "body": "Hi Jessica,\n\nHope you're doing well. I'm working on the Q2 FY2026 budget planning deck for the executive review on March 5th and need Mark's merchandising headcount and discretionary spend projections by February 27th.\n\nI've shared a Google Sheet with his pre-filled assumptions from Q1 \u2014 he just needs to confirm or adjust the numbers in the yellow cells. Link: [shared internally via SharePoint]\n\nIf it would be easier, I can grab 20 minutes on his calendar to walk through it together. Just let me know.\n\nThanks so much,\nKevin Tran\nFinancial Planning & Analysis\nGuitar Center, Inc."
  },
  {
    "sender": "Delta Air Lines <noreply@delta.com>",
    "subject": "Your Upcoming Trip: LAX \u2192 ORD on Feb 24 | Confirmation GXMT47",
    "body": "Your trip is coming up!\n\nPassenger: Mark Delgado\nConfirmation: GXMT47\n\nFlight DL 1142\nDeparture: Los Angeles (LAX) \u2013 Feb 24, 2026 at 7:45 AM\nArrival: Chicago O'Hare (ORD) \u2013 Feb 24, 2026 at 1:58 PM\nCabin: First Class | Seat 3A\nSkyMiles: 1-128-339-041\n\nBaggage: 2 checked bags included\n\nReturn Flight DL 2278\nDeparture: Chicago O'Hare (ORD) \u2013 Feb 27, 2026 at 6:10 PM\nArrival: Los Angeles (LAX) \u2013 Feb 27, 2026 at 8:32 PM\nCabin: First Class | Seat 2C\n\nCheck in online starting 24 hours before departure at delta.com.\n\nDelta Air Lines | Need help? Call 1-800-221-1212"
  },
  {
    "sender": "Marriott Bonvoy <reservations@marriott.com>",
    "subject": "Reservation Confirmed \u2013 The Westin Michigan Avenue Chicago | Feb 24\u201327",
    "body": "Reservation Confirmation\n\nGuest: Mark Delgado\nProperty: The Westin Michigan Avenue Chicago\nAddress: 909 N Michigan Ave, Chicago, IL 60611\nPhone: (312) 943-7200\n\nConfirmation Number: 89241MAWES\nCheck-in: Tuesday, February 24, 2026 (after 4:00 PM)\nCheck-out: Friday, February 27, 2026 (by 12:00 PM)\nRoom Type: Westin Heavenly King, Upper Floors\nRate: $289.00/night + taxes and fees\nTotal Estimated Charges: $1,042.88\nPayment: Corporate Card ending 4-72009\n\nBonvoy Number: 998-344-12 | Titanium Elite\n\nNote: Early check-in has been requested but is not guaranteed. The concierge has been notified.\n\nWe look forward to welcoming you.\nMarriott Bonvoy Guest Services"
  },
  {
    "sender": "Jessica Moore <jessica.moore@guitarcenter.com>",
    "subject": "Ground Transportation Request \u2013 Chicago Feb 24\u201327",
    "body": "Hi,\n\nI'm requesting a car rental for an executive traveling to Chicago for business meetings.\n\nPickup: O'Hare International Airport (ORD), February 24, 2026 at 2:15 PM\nReturn: O'Hare International Airport (ORD), February 27, 2026 at 4:30 PM\nVehicle Class: Full-size sedan or SUV preferred\nCorporate Account: Guitar Center \u2013 Account #GC-NAT-8812\nDriver: Mark Delgado (will present ID and corporate card at pickup)\n\nPlease confirm availability and rate. If you could waive the additional driver fee under our corporate agreement, that would be appreciated.\n\nBest,\nJessica Moore\nExecutive Assistant to Mark Delgado, VP Merchandising\nGuitar Center, Inc.\njessica.moore@guitarcenter.com | (818) 735-8800 x4105"
  },
  {
    "sender": "SAP Concur Travel <noreply@concur.com>",
    "subject": "Travel Itinerary Built \u2013 NAMM Summer 2026 | Nashville, TN | June 3\u20136",
    "body": "Your travel itinerary has been saved in Concur.\n\nTrip Name: NAMM Summer 2026 \u2013 Nashville\nTraveler: Mark Delgado\n\nFlight (Outbound): AA 2201 | LAX \u2192 BNA | June 3, 2026 | Departs 9:05 AM, Arrives 3:22 PM | Business Select\nHotel: JW Marriott Nashville | June 3\u20136 | Conf. #JWN-44812\nFlight (Return): AA 2466 | BNA \u2192 LAX | June 6, 2026 | Departs 5:45 PM, Arrives 7:58 PM | Business Select\n\nTotal Estimated Cost: $3,218.00\nStatus: Pending Jessica Moore Review\n\nPlease review and approve or modify this itinerary in Concur by February 28, 2026 to lock in current fares.\n\nSAP Concur | travel@concur.com"
  },
  {
    "sender": "Delta Sky Club <lounge@deltaskyclubs.com>",
    "subject": "Delta Sky Club Membership Renewal \u2013 Action Required",
    "body": "Dear Jessica Moore,\n\nThis is a reminder that the Delta Sky Club corporate membership for Mark Delgado (SkyMiles #1-128-339-041) is set to expire on March 31, 2026.\n\nAnnual Renewal Rate: $695.00 (billed to corporate card)\nMembership Benefits: Unlimited access to 50+ Delta Sky Club locations, including LAX, ORD, ATL, and BNA\n\nBased on travel records, Mr. Delgado visited Delta Sky Clubs 41 times in 2025. Renewal is highly recommended.\n\nPlease confirm renewal by March 1, 2026 to avoid a lapse in access. You can renew at delta.com/skyclub or reply to this email.\n\nDelta Sky Club Membership Services"
  },
  {
    "sender": "Guitar Center Calendar System <calendar-noreply@guitarcenter.com>",
    "subject": "Meeting Invitation: Q1 Business Review \u2013 All VP+ | March 5, 2026 | 9:00 AM \u2013 12:00 PM PT",
    "body": "You have received a calendar invitation.\n\nEvent: Q1 FY2026 Business Review \u2013 All VP+\nOrganizer: Christine Huang (CFO)\nDate: Thursday, March 5, 2026\nTime: 9:00 AM \u2013 12:00 PM PT\nLocation: Guitar Center HQ \u2013 Boardroom B (3rd Floor) + Zoom\nZoom Link: zoom.us/j/82491038811 | Passcode: GC2026Q1\n\nAgenda (pre-read deck to be circulated by Feb 28):\n1. FY2025 Full-Year Financial Recap (Christine Huang)\n2. Q1 YTD Performance by Division\n3. FY2026 Full-Year Forecast Update\n4. Headcount & CapEx Review\n5. Open Q&A\n\nPlease confirm Mark Delgado's attendance. If he will be dialing in from Chicago, please ensure he has the Zoom link.\n\nNote: Attendance is mandatory for all VP and above."
  },
  {
    "sender": "Calendly <noreply@calendly.com>",
    "subject": "New Event Scheduled: 1:1 with Ryan Patel (Gibson) \u2013 Feb 25, 11:00 AM CT",
    "body": "A new event has been scheduled via Calendly.\n\nEvent: Vendor Check-In \u2013 Gibson Brands\nHost: Mark Delgado, Guitar Center\nGuest: Ryan Patel, National Account Manager, Gibson Brands, Inc.\n\nDate: Wednesday, February 25, 2026\nTime: 11:00 AM \u2013 11:30 AM CT (9:00 AM \u2013 9:30 AM PT)\nLocation: Phone Call\nCall-In: Mark will call Ryan at +1 (615) 882-4100\n\nNotes from Ryan: 'Looking forward to discussing Q2 allocation and the proposed Les Paul Standard in-store feature program.'\n\nThis event has been added to Mark Delgado's Google Calendar. A reminder will be sent 15 minutes before.\n\nCalendly | Automated Scheduling"
  },
  {
    "sender": "People & Culture \u2013 Guitar Center <hr@guitarcenter.com>",
    "subject": "Performance Review Cycle Opens March 1 \u2013 Schedule 1:1s with Direct Reports",
    "body": "Hi Jessica,\n\nThe annual performance review cycle for FY2025 opens on March 1, 2026 and manager reviews are due by April 15, 2026.\n\nMark Delgado has 6 direct reports this cycle:\n- Alicia Torres (Buyer, Guitars)\n- Derek Winn (Buyer, Live Sound)\n- Priya Mehta (Buyer, Keyboards & Synths)\n- James Okafor (Sr. Analyst, Merchandising)\n- Kelly Sandoval (Coordinator, Visual Merchandising)\n- Tom Yee (Buyer, Pro Audio)\n\nCould you please block 45-minute slots on Mark's calendar for each direct report between March 9 and March 20? They can be remote or in-person at his preference. The Workday link for the review form will be sent separately on March 1.\n\nThank you!\nPeople & Culture Team\nGuitar Center, Inc."
  },
  {
    "sender": "Alicia Torres <alicia.torres@guitarcenter.com>",
    "subject": "Can you reschedule my sync with Mark? Conflict on Feb 20",
    "body": "Hi Jess,\n\nI hate to ask last minute, but I have a vendor call with PRS Guitars that just landed on Friday Feb 20 at 10am and it conflicts with my standing sync with Mark.\n\nIs there any chance you could move us to sometime the following week? I'm completely open Monday 2/23 and Wednesday 2/25 any time after 11am. Or if Mark prefers, we could do a quick 20-minute touchbase by phone on Friday afternoon instead.\n\nThe agenda for our sync is mostly the Q2 guitar floorset plan \u2014 nothing super urgent but I do want to make sure we're aligned before the merch deck goes to Christine.\n\nThank you so much,\nAlicia Torres\nBuyer, Guitars\nGuitar Center, Inc."
  },
  {
    "sender": "NAMM \u2013 The National Association of Music Merchants <conference@namm.org>",
    "subject": "NAMM Summer 2026 \u2013 Speaker Session Confirmation for Mark Delgado",
    "body": "Dear Jessica Moore,\n\nThank you for confirming Mark Delgado's participation in NAMM Summer 2026.\n\nSession Details:\nTitle: 'Brick & Mortar in the Streaming Age: How Guitar Center is Winning the In-Store Experience'\nDate: Friday, June 5, 2026\nTime: 2:30 PM \u2013 3:15 PM CT\nRoom: Music City Convention Center \u2013 Hall C, Room 14\nFormat: 30-minute keynote + 15-minute Q&A\nModerator: TBD\n\nPlease note:\n- Speaker bio and headshot are due by April 1, 2026\n- Slide deck (if applicable) is due by May 15, 2026\n- NAMM will provide AV; please advise if Mark requires a confidence monitor\n\nWe will follow up with full logistics and green room information closer to the event.\n\nWarm regards,\nDana Kessler\nSpeaker Relations, NAMM"
  },
  {
    "sender": "Mark Delgado <mark.delgado@guitarcenter.com>",
    "subject": "FW: PRS Draft Proposal \u2013 Need Your Eyes Before I Reply",
    "body": "Jess,\n\nFWD this below from PRS. Before I reply, can you look over the proposal doc they attached and flag anything that looks weird or conflicts with what we already have in the contract? Specifically the part about exclusive floor placement \u2014 I don't remember agreeing to that.\n\nAlso can you make sure this gets on the agenda for the merchandising team call next Thursday? And loop in Sarah Cho.\n\nThanks\n\u2013 MD\n\n-------- Forwarded Message --------\nFrom: Devon Walsh <d.walsh@prsguitars.com>\nSubject: Guitar Center x PRS \u2013 2026 Partnership Proposal\n\nHi Mark,\n\nAs discussed at NAMM, please find attached our updated partnership proposal for Guitar Center's 2026 program year. We're excited about the proposed 'PRS Experience Zone' concept and believe it could drive significant category lift in the $1,200\u2013$2,500 guitar segment...\n\n[Attachment: GC_PRS_2026_Proposal_DRAFT.pdf]"
  },
  {
    "sender": "IT Helpdesk \u2013 Guitar Center <it.helpdesk@guitarcenter.com>",
    "subject": "RE: Ticket #INC-49203 \u2013 Resolved: Mark Delgado Outlook Sync Issue",
    "body": "Hi Jessica,\n\nTicket #INC-49203 has been resolved. The calendar sync issue between Mark Delgado's iPhone and Outlook calendar was caused by an outdated Exchange profile. We've pushed an updated configuration to his device remotely.\n\nHe should now see his full calendar and all shared calendars (including yours) on his phone. If the issue persists after his next device restart, please have him call ext. 1-HELP or submit a new ticket.\n\nWe also noticed his OneDrive storage was at 94% capacity. Would you like us to archive older files to the GC shared drive? We can do this without any action from Mark.\n\nLet us know!\nIT Helpdesk\nGuitar Center, Inc. | it.helpdesk@guitarcenter.com | Ext. 1-HELP"
  },
  {
    "sender": "HQ Reception <reception@guitarcenter.com>",
    "subject": "Package Received for Mark Delgado \u2013 Fender Product Samples",
    "body": "Hi Jessica,\n\nWe received a package for Mark Delgado at the front desk this morning.\n\nSender: Fender Musical Instruments Corporation (Scottsdale, AZ)\nDescription: Product samples \u2013 2 boxes, approximately 40 lbs total\nTracking: FedEx 7748 2931 0044\n\nWould you like us to send this up to the 3rd floor, or will you or Mark come by to pick it up? The samples room on 3 is available if he'd like to keep them there.\n\nThanks!\nHQ Reception\nGuitar Center Corporate Offices\n5795 Lindero Canyon Rd, Westlake Village, CA 91362"
  },
  {
    "sender": "Internal Comms \u2013 Guitar Center <communications@guitarcenter.com>",
    "subject": "All-Hands Recap: February Town Hall \u2013 Recording & Key Highlights",
    "body": "Hi Guitar Center Team,\n\nThank you to everyone who joined the February Town Hall yesterday. Here are the key highlights:\n\n\u2013 FY2025 revenue came in at $2.4B, ahead of plan by 1.3%\n\u2013 The new omnichannel loyalty program (GC Rewards 2.0) launches in Q2 2026\n\u2013 We are opening 4 new store locations this year: Austin, TX; Portland, OR; Charlotte, NC; and Denver, CO\n\u2013 CEO Remarks from Ron Japinga emphasized investment in in-store experience and talent development\n\nThe full recording is available on the GC Intranet under 'Town Halls & All-Hands.'\n\nA full written recap will be distributed by end of week.\n\nThank you,\nInternal Communications\nGuitar Center, Inc."
  },
  {
    "sender": "Priya Mehta <priya.mehta@guitarcenter.com>",
    "subject": "Quick Q \u2013 Is Mark Available for a 10-Min Call Today?",
    "body": "Hi Jess,\n\nI know Mark has a packed day but I have a quick question about the Roland Synthesizer allocation for the spring floorset \u2014 Roland's rep needs an answer today or they'll reallocate to Sam Ash.\n\nWould he have 10 minutes any time between 2\u20135 PM? Even a quick call or text would work.\n\nAlternatively, is it OK if I just send him a Slack with the two options and he thumbs up the one he prefers? I can make it super easy for him.\n\nThanks so much,\nPriya\nBuyer, Keyboards & Synths | Guitar Center"
  },
  {
    "sender": "Facilities Management <facilities@guitarcenter.com>",
    "subject": "Office Move Notification \u2013 Mark Delgado Relocating to Suite 320",
    "body": "Hi Jessica,\n\nAs part of the 3rd floor renovation project, Mark Delgado's office will be temporarily relocated from Suite 310 to Suite 320 starting Monday, February 24th.\n\nThe move will take place over the weekend of February 21\u201322. Facilities will handle all furniture and IT equipment. Please make sure any personal items are packed and labeled by end of day Friday, February 20th.\n\nSuite 320 has the same square footage and a comparable view. The direct phone extension will remain the same (x4100).\n\nThe permanent return to Suite 310 (with renovated finishes) is estimated for April 7, 2026.\n\nLet us know if you have any questions or need a dolly/boxes for personal items.\n\nFacilities Management\nGuitar Center HQ"
  },
  {
    "sender": "Sweetwater Sound Deals <noreply@sweetwaterdeals.promo.net>",
    "subject": "\ud83c\udfb8 HUGE Savings on Gibson Les Paul \u2013 This Weekend Only!",
    "body": "\ud83c\udfb8 Don't Miss Our Biggest Guitar Sale of the Year! \ud83c\udfb8\n\nHey Music Lover!\n\nSave UP TO 40% on TOP BRANDS this Presidents' Day Weekend!\n\n\u2705 Gibson Les Paul Standard \u2013 NOW $1,799 (Save $400!)\n\u2705 Fender American Ultra Stratocaster \u2013 NOW $1,599!\n\u2705 Boss GT-1000 Multi-Effects \u2013 NOW $549!\n\n\u26a1 FREE SHIPPING on orders over $99!\n\u26a1 0% financing for 24 months!\n\nOFFER ENDS MONDAY MIDNIGHT \u2013 DON'T WAIT!\n\n[SHOP NOW] [UNSUBSCRIBE] [VIEW IN BROWSER]\n\nThis message was sent to jessica.moore@guitarcenter.com by Sweetwater Sound Promo Partners LLC. This is an advertising email. To unsubscribe, click above."
  },
  {
    "sender": "Executive Learning Institute <offers@execlearning.biz>",
    "subject": "Is Your Executive Ready for What's Next? Leadership Bootcamp 2026",
    "body": "Dear Jessica Moore,\n\nAs an executive assistant, you know better than anyone that great leaders need constant development.\n\nThat's why we're reaching out about our Executive Leadership Bootcamp 2026 \u2014 a 3-day intensive retreat in Scottsdale, AZ for VP-level leaders in retail.\n\nWhat your executive will gain:\n\u2022 Strategic decision-making frameworks\n\u2022 Managing in a post-pandemic hybrid workforce\n\u2022 Leveraging AI for retail operations\n\u2022 Peer networking with 200+ VP and C-suite leaders\n\nEarly Bird Rate: $3,495 (ends March 15)\nDates: May 12\u201314, 2026 | Scottsdale Marriott at McDowell Mountains\n\nSpaces are limited. Click below to register or request a brochure.\n\n[REGISTER NOW] [REQUEST BROCHURE] [UNSUBSCRIBE]\n\nExecutive Learning Institute, 400 Corporate Dr., Suite 900, Phoenix, AZ 85004"
  },
  {
    "sender": "LinkedIn Premium <noreply@linkedin-promo.com>",
    "subject": "Jessica, unlock 2x more profile views with LinkedIn Premium",
    "body": "Hi Jessica,\n\nYour profile is getting noticed! In the past 30 days, you had 47 profile views \u2014 that's above average for Executive Assistants in the Los Angeles area.\n\nImagine what you could do with LinkedIn Premium:\n\n\ud83d\udcc8 See who viewed your profile\n\u2709\ufe0f Send InMail to anyone\n\ud83c\udf93 Access 20,000+ LinkedIn Learning courses\n\ud83d\udd0d Stand out with a Premium badge\n\nTry Premium FREE for 30 days. Cancel anytime.\n\n[START FREE TRIAL]\n\nYou're receiving this email because you have a LinkedIn account. Unsubscribe | Privacy Policy\nLinkedIn Corporation, 1000 West Maude Avenue, Sunnyvale, CA 94085"
  },
  {
    "sender": "Retail News Weekly <blast@retailnewsweekly.email>",
    "subject": "This Week in Retail: The Death of the Big Box Store? + 5 Survival Strategies",
    "body": "RETAIL NEWS WEEKLY | February 13, 2026\n\nTop Stories This Week:\n\n1. Is the Big Box Store Dead? Analysts Weigh In\n2. How Target's New Loyalty Program Changed Everything (And What Your Brand Can Learn)\n3. The Rise of 'Experience Retail' \u2014 Lessons from Apple, Lululemon & More\n4. Music Retail Trends: Subscription Models Gain Ground\n5. Sponsored: Save 30% on Retail Workforce Management Software\n\nFEATURED WEBINAR: Surviving 2026 \u2013 A Playbook for Omnichannel Retail Leaders\nFree to attend | Feb 25, 2026 | 1 PM ET\n\n[READ FULL ISSUE] [REGISTER FOR WEBINAR] [UNSUBSCRIBE]\n\nRetail News Weekly | 200 Park Ave, New York, NY 10166 | You are subscribed as jessica.moore@guitarcenter.com"
  },
  {
    "sender": "Customer Insights Panel <no-reply@survey-platform.net>",
    "subject": "You've been selected! Share your opinion and earn a $50 Amazon Gift Card",
    "body": "Congratulations, Jessica!\n\nYou've been randomly selected to participate in our 2026 Retail Professional Insights Survey.\n\nComplete our 15-minute survey and you'll be entered to WIN a $50 Amazon Gift Card.\n\nYour feedback will help top retail brands understand what executive assistants and support professionals think about the tools and services they use.\n\nThis invitation expires in 72 hours.\n\n[TAKE THE SURVEY NOW]\n\nThis survey is conducted by Customer Insights Panel on behalf of unspecified third-party clients. Your email was obtained from a third-party marketing list. To opt out of future surveys, click here.\n\nCustomer Insights Panel LLC | Tampa, FL 33607"
  },
  {
    "sender": "Office Depot Rewards <deals@officedepot-rewards.promo>",
    "subject": "Jessica \u2013 3,200 bonus rewards points expire this Friday!",
    "body": "Don't let your points disappear, Jessica!\n\nYou have 3,200 bonus Office Depot Rewards points expiring February 21, 2026 \u2014 that's worth up to $32 in savings!\n\nRedeem them on:\n\ud83d\udda8\ufe0f Printer ink & toner\n\ud83d\udce6 Shipping supplies\n\ud83d\uddc2\ufe0f Filing & organization\n\u2615 Break room supplies\n\ud83d\udcbb Tech accessories\n\nShop online or in-store at any Office Depot or OfficeMax location.\n\n[SHOP & REDEEM NOW]\n\nNote: Rewards points have no cash value and cannot be redeemed for cash. Offer valid through 02/21/2026 only. Account: jessica.moore@guitarcenter.com\n\n[Unsubscribe] | [Manage Email Preferences]\nOffice Depot, Inc. | 6600 N Military Trail, Boca Raton, FL 33496"
  },
  {
    "sender": "Devon Walsh \u2013 PRS Guitars <d.walsh@prsguitars.com>",
    "subject": "RE: PRS Partnership Proposal \u2013 Following Up",
    "body": "Hi Jessica,\n\nI just wanted to follow up on the proposal I sent to Mark last Thursday. I know he's incredibly busy and I don't want to be a pest \u2014 but our team does have an internal deadline of February 25th to finalize Guitar Center's inclusion in the spring program.\n\nIf it would help to schedule a quick 20-minute intro call this week, I'm available any time Thursday (Feb 20) or Friday (Feb 21) morning PT. Otherwise, even a brief email response from Mark with initial thoughts would be hugely helpful.\n\nThe main ask from our side is clarity on floor placement at the top 50 doors and commitment on the SE Standard bundle. Everything else is flexible.\n\nReally appreciate your help navigating this \u2014 you've always been great to work with.\n\nBest,\nDevon Walsh\nNational Account Manager, Guitar Center\nPRS Guitars | d.walsh@prsguitars.com | (301) 490-0100 x214"
  },
  {
    "sender": "Payroll Services \u2013 Guitar Center <payroll@guitarcenter.com>",
    "subject": "Reminder: Timesheet Submission Deadline \u2013 Feb 20, 5 PM PT",
    "body": "Hi Jessica,\n\nThis is your bi-weekly reminder that timesheets for the pay period ending February 19, 2026 are due by 5:00 PM PT today, Friday, February 20, 2026.\n\nPlease submit your timesheet via Workday. If you need to report any PTO, sick leave, or schedule exceptions for yourself or anyone you manage, please do so by the deadline to ensure accurate pay processing.\n\nNote: This pay cycle is a 3-day weekend pay cycle due to Presidents' Day. Direct deposit will be processed on Tuesday, February 24, 2026.\n\nIf you have any payroll questions, contact payroll@guitarcenter.com or call ext. 4-PAY.\n\nThanks,\nPayroll Services\nGuitar Center, Inc."
  }
];