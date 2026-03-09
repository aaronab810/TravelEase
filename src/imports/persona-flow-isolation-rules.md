Screen 12 — Ayaan's Document Vault
Title: "My Documents 📁" subtitle "Student Visa Application." Four document cards: Passport (✓ Confirmed, green), University Admission Letter (✓ Confirmed, green), Blocked Account Proof (✓ Confirmed, green), Health Insurance (✓ Confirmed, green). This screen is only accessible from Ayaan's student flow and shows student-specific documents only — NOT the same as Sarah's Doc Vault.
Screen 13 — Ayaan's Services & Transport Page
Title: "Getting to University 🗺️" with a map showing Frankfurt Airport with a pin and label "Goethe University — 5.2km away." Three large tappable service cards below: 🚕 Book a Taxi, 🚌 Find Public Transport, 🚗 Book a Shared Taxi. Each card has an estimated time and cost. Green CTA at bottom: "Navigate Now."
Screen 14 — Ayaan's Arrival Confidence Screen
Title: "Your Next Steps ✅" Clean numbered checklist: 1. Immigration 2. Collect Baggage 3. Buy SIM Card 4. Travel to Accommodation. Each step has a checkbox, short description, and a green "Start" button that activates when the previous step is checked. Progress tracker at top: "Step 1 of 4."
Screen 15 — Meena's In-Flight Screen
Dark navy background. Large bold text: "Safely Boarded the Plane ✈️." One single giant green button: "CALL SON" with a pre-written message shown below in a chat bubble: "I have boarded safely." Microphone icon for voice assistance. Extra large font throughout — no small text anywhere on this screen.
Screen 16 — Meena's Arrival Screen
Title: "You've Arrived! 🎉" Large directional card: "After baggage collection → Go to Exit 3" with a big orange arrow graphic. A green notification banner at the top: "✓ Message sent to son: Your mother has landed." A single large button: "Call Son Now." Simple, minimal layout with no clutter.
Screen 17 — Baggage Weight Tracker (Sarah — Before/After Change)
Show this as a BEFORE and AFTER split to demonstrate evaluation changes. BEFORE: Plain text list of baggage weights in small grey font, hard to read. AFTER: Three large color-coded weight status bars — Green (Under limit), Yellow (Near limit), Red (Overweight) — with large bold font showing weight in kg. Label at top: "Baggage Status." This screen appears in Sarah's family flow only.
Screen 18 — Quick Translate Floating Button (Airport Navigation — Before/After Change)
Show as BEFORE and AFTER. BEFORE: Navigate screen with no translate option. AFTER: Same navigate screen but with a yellow floating action button bottom-left showing "🌐 Quick Translate" — tapping it opens a small bottom sheet overlay with a text box and camera scan option for translating airport signage instantly. This appears in ALL three flows since language barriers affect all personas.

MODE SEPARATION FIX PROMPT
IMPORTANT — Persona Flow Isolation:
Each persona must have a completely separate and isolated navigation flow. Apply the following rules strictly:
Sarah (Family Mode) — ONLY contains:

Home Dashboard with family greeting
Stay Screen (Kid-Friendly filters, Verified Safe for Kids badges)
AR Navigate Screen (family restroom directions)
Kids Zone Screen
Budget Planner Screen
Baggage Weight Tracker
Doc Vault (travel documents: passport, tickets only)
Quick Translate floating button on Navigate screen

Ayaan (Student Mode) — ONLY contains:

Home Dashboard with student greeting
Document Vault (student-specific: visa, admission letter, blocked account, insurance)
Packing List Screen
Live Translator Screen (full EN↔DE translation)
Services & Transport Page
Arrival Confidence / Next Steps Screen
Quick Translate floating button on Navigate screen

Meena (Senior Mode) — ONLY contains:

Senior Home Screen (oversized text, checklist, Call Son button)
Airport Guidance Screen (large arrows, voice instructions)
Immigration Ready Screen (keep passport, visa, boarding pass ready)
In-Flight Screen (Call Son, boarded safely message)
Arrival Screen (Exit 3, son notified)
Quick Translate floating button on Navigate screen

Visual differentiation between modes:

Sarah's flow: primary green #1A5C45, standard font size 16px
Ayaan's flow: primary blue #1A3A5C, standard font size 16px
Meena's flow: primary green #1A5C45, ALL font sizes increased to minimum 22px, simplified navigation with only 3 tabs

Each flow must start from the Onboarding Profile Setup screen which routes to the correct flow based on user inputs. Once inside a flow, the user should never see features belonging to another persona's flow. There should be NO shared screens between flows except the Onboarding screen and the Quick Translate floating button.