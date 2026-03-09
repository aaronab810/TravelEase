Now I have a thorough understanding of both the assignment requirements and what's been done so far. Here's your comprehensive Figma AI prompt for the final high-fidelity TravelEase prototype:

Figma AI Prompt — TravelEase Final Hi-Fi Prototype


App Name: TravelEase
Platform: Mobile (iOS-style, 390×844px frames)
Design Language: Clean, modern travel app — deep forest green (#1A5C45) as primary, off-white (#F7F5F2) background, white cards with subtle shadows, Inter/Plus Jakarta Sans typography.


SCREENS TO DESIGN
1. Onboarding / Mode Selection Screen
Design a welcoming home screen titled "Welcome to TravelEase" with a UAE skyline hero image. Below it, show three large tappable cards for travel mode selection: "Senior Travel Mode" (icon: elderly person, warm tone), "Student Travel Mode" (icon: graduation cap, blue accent), and "Family Travel Mode" (icon: family, green accent). Each card has a short subtitle. CTA button: "Get Started."
2. Home Dashboard — Sarah (Family Mode)
Personalized greeting: "Where to next, Sarah?" Large search bar: "Search destinations, flights..." Below: three quick-access icon buttons in a white rounded card: Indoor Map, Doc Vault, Translate. Below that, a "Your Journey" card showing current trip: Dubai → London, flight in 4h 20m, with a progress bar. Bottom nav bar with 5 tabs: Home (airplane icon, active/highlighted in green), Stay (map icon), Navigate (directions icon), Translate (language icon), Docs (shield icon). Active tab is clearly differentiated with green color + bold label.
3. Stay Screen — Family & Budget Stays
Header: dark green block with white text "Family & Budget Stays / Dubai, UAE." White card overlapping header with a search bar ("Dubai") and THREE filter pills styled as solid filled rounded buttons (not outline): "Kid-Friendly" (green fill), "Under $150" (green fill), "Accessible" (grey fill). Below: "3 Properties Found" in bold. Show 2 hotel listing cards with: photo, name, star rating, price/night, and a green badge "✓ Verified Safe for Kids." Bottom nav active on Stay tab.
4. Navigate Screen — AR Indoor Map
Full-screen map view of Dubai Airport. Overlay: a semi-transparent card at the bottom: "Gate 12 — Terminal A / Walk straight 100m, then turn right." A floating green AR toggle button (camera icon) in the top-right corner. A green directional 3D arrow overlaid on the map pointing toward "Family Restroom." Status bar at top shows: current location confirmed.
5. Translate Screen
Clean white screen. Toggle at top: "EN ↔ DE" (English to German). Large text input box: "Where is immigration?" Below: translation result in large green text: "Wo ist die Einwanderung?" Two secondary buttons: "Scan Sign" (camera icon) and "Common Phrases" (speech bubble icon). Below those, a quick-phrase chip row: "Where is baggage?" / "I need help" / "I am a student."
6. Doc Vault Screen
Header: "Your Documents." Four document cards each with a PDF icon, document name, and a colored status badge: Passport (✓ Confirmed, green), Visa (✓ Confirmed, green), Admission Letter (✓ Confirmed, green), Health Insurance (✓ Confirmed, green). A floating green "+" button to add documents. Bottom nav active on Docs tab.
7. Senior Mode — Meena's Home Screen
Extra-large typography throughout. Green banner: "Namaste, Meena Ji 🙏 — Senior Travel Mode Active." Large checklist card: ☑ Passport, ☑ Ticket, ☑ Son's Number. One giant green button: "CALL SON" with phone icon. Voice assistant icon (microphone) floating bottom-right. Bottom nav simplified to just 3 large icon+label tabs: Home, Map, Call.
8. Airport Guidance Mode — Meena
Full-width top banner: "Airport Guidance Mode — Active." Large arrow graphic pointing right. Big bold text: "Meena Ji, Gate 12 — Walk straight 3 minutes." Below: checklist card "Keep Ready: ☑ Passport ☑ Visa ☑ Boarding Pass" with label "Reducing Anxiety." Voice wave animation indicator shown near microphone icon.
9. Budget Planner Screen (Sarah)
Title: "Budget Planner." Progress bar showing "$320 / $500 spent." Three line items with color coding: Flights ($180, green ✓), Hotel ($140, green ✓), Activities ($0, grey — not yet booked). Large green CTA: "Find Deals Under $150." A "Budget Met ✓" green checkmark confirmation banner at the top.
10. Kids Zone Screen (In-Flight)
Dark navy background to simulate in-flight mode. Title: "Kids Zone 🎮." Grid of 4 large colorful app icons: Games, Movies, Stories, Drawing. A red lock icon in the top-right corner with label "Parental Lock: ON." A "Screen Locked 🔒" animated banner confirmation at the bottom. Bright, playful mascot character (cartoon airplane) in the corner.

DESIGN SYSTEM RULES (apply to ALL screens)

Primary color: #1A5C45 (deep forest green)
Background: #F7F5F2 (off-white)
Cards: white (#FFFFFF), border-radius 16px, box-shadow: 0 2px 12px rgba(0,0,0,0.08)
Active nav tab: green icon + bold green label; inactive tabs: grey
Filter/action pills: solid filled (not outline-only) for interactable elements
Typography: Plus Jakarta Sans — H1: 28px Bold, H2: 22px SemiBold, Body: 16px Regular, Caption: 12px
Status badges: green for confirmed/safe, yellow for warning, red for alert
Spacing: 16px gutters, 24px section padding
Icons: Lucide or SF Symbols style, consistent stroke weight


INTERACTIONS TO SET UP (Figma Prototype Mode)

Home → tap "Stay" nav icon → goes to Stay Screen
Stay → tap a hotel card → hotel detail screen (can be a simple overlay)
Navigate → tap AR toggle → AR Map Screen
Senior Mode Home → tap "CALL SON" → shows "Message Sent: Boarded Safely ✓" confirmation overlay
Doc Vault → tap "+" → file upload modal
Budget Planner → tap "Find Deals" → links back to Stay Screen with filter pre-applied


SAMPLE DATA TO INCLUDE

User: Sarah Anderson, 34, Dubai → London, 2 kids aged 5
Trip: Flight EK007, departs 14:35, Gate 12, Terminal A
Hotel shown: Rove Downtown Dubai — $128/night, ★4.2, Kid-Friendly badge
Senior user: Meena Sharma, 68, India → Dubai, visiting son
Student user: Ayaan Verma, 22, Dubai → Frankfurt, Master's student