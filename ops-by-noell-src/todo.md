# Ops by Noell — Project TODO

## Completed
- [x] 5-page marketing website (Home, Services, Case Study, About, Book)
- [x] Editorial luxury design system (Cormorant Garamond + DM Sans)
- [x] ChatWidget component with lead capture
- [x] ChatWidget on all pages (global App.tsx)
- [x] Full-stack upgrade (web-db-user)
- [x] chatLeads database schema added

## In Progress
- [x] Run db:push to migrate chatLeads table
- [x] Add chatLeads query helper to server/db.ts
- [x] Add leads.submit tRPC procedure to server/routers.ts
- [x] Wire ChatWidget to submit leads via tRPC + send owner notification email
- [x] Edit 1: Dark "How It Works" section with gold accents (hybrid dark/light)
- [x] Edit 2: Logo image placeholder in nav
- [x] Edit 3: Proof bar on homepage below hero (already present, confirmed)
- [x] Edit 4: About page "We show you the math first" card visual distinction
- [x] Edit 5: Calendly embed placeholder box on Book page
- [x] Edit 6: Mobile view screenshot of homepage — captured and delivered

## Chat Widget Rewrite
- [ ] Rewrite intro message, quick questions, and bot responses to reflect full-scope automation (bookings, reviews, follow-up, marketing, not just lead capture)

## Full-Scope Messaging Rewrite
- [ ] Rewrite homepage hero, problem, solution, services overview, and closing CTA to reflect full-scope automation (not just lead capture)
- [ ] Rewrite chat widget greeting bubble, intro message, quick questions, and bot responses to reflect full scope

## Services Page Copy Update
- [x] Rewrite Services page hero headline and intro to full-scope framing
- [x] Update packages section headline and description to match
- [x] Update closing CTA on Services page

## Homepage — Inconsistent Marketing Section
- [x] Expand problem section to 6 cards covering all revenue gaps (including Inconsistent Marketing)
- [x] Add dedicated Inconsistent Marketing spotlight section with 3 stat callouts and solution copy

## About Page Intro Rewrite
- [x] Rewrite About page hero headline and intro paragraphs to match 'complete operational back office' framing

## Homepage — Cost of Inaction Section
- [x] Build Cost of Inaction section with per-gap monthly cost rows, running total, and audit CTA bridge

## Book Page — Cost of Inaction Urgency Block
- [x] Add $3,000/month estimated loss summary block above Calendly placeholder on Book page

## Book Page — Interactive Revenue Calculator
- [x] Build RevenueCalculator component with sliders/inputs for missed calls, service value, no-show rate, follow-up gaps
- [x] Replace static urgency bar with interactive calculator that updates cost pills and total in real time

## Homepage Hero Copy Update
- [x] Change eyebrow to 'AI-POWERED OPERATIONS FOR LOCAL BUSINESSES'
- [x] Update hero subheadline to full-scope operations copy

## Services Section Update
- [x] Change Services page headline to 'We automate the operations of your business. All of it.'
- [x] Add Custom Operations Buildout as 6th service card on Services page
- [x] Add Custom Operations Buildout as 6th card on homepage services overview grid

## Services Page — Custom Package Tier
- [x] Add Custom / Full Operations Buildout as 4th package after Growth package

## Book Page Copy Update
- [x] Update body copy to full operational audit description
- [x] Update 'What to Expect' Revenue Leak Audit bullet to full operational audit scope

## About Page — Broader Scope Paragraph
- [x] Add broader scope paragraph after 'Why This Exists' body copy

## Geographic Tagline Update
- [x] Update footer subline to 'AI-Powered Operations for Local Businesses · Based in Orange County. Built for businesses everywhere.'
- [x] Replace all 'Serving Orange County' instances in Nav, Footer, About, Book, and Home with new tagline

## Custom Notification System
- [x] Telegram helper (server/telegram.ts) with sendTelegram() function
- [x] Wire chat lead submission to Telegram + email
- [x] Add booking page visit notification (tRPC procedure + frontend useEffect)
- [x] Add booking intent notification (visitor clicks booking CTA)

## Hero Copy Update
- [x] Replace hero subheadline with Blend C: "Your craft is excellent. The systems behind it should be too. We build done-for-you automation infrastructure — from the first call to the five-star review."

## Hero Section Copy Refinements
- [x] Eyebrow updated to "Done-for-You Automation · Ops by Noell"
- [x] Primary CTA updated to "Book Your Free Audit"
- [x] Secondary CTA updated to "See What We Build"

## Services Page Copy Pass
- [x] Eyebrow updated to "Done-for-You · Built for Your Business"
- [x] Headline updated to "We build the back office your business has been running without."
- [x] Body copy tightened — removed brand name redundancy, leads with benefit
- [x] Second body line updated to "You focus on the work. The infrastructure runs itself."
- [x] Hero CTA aligned to "Book Your Free Audit"
- [x] Service 04 tagline sharpened to "Most businesses follow up once. We follow up until it converts."
- [x] Packages eyebrow updated to "How We Work Together"
- [x] Package CTAs aligned to "Book Your Free Audit"
- [x] Closing CTA eyebrow updated to "The First Step Is Free."
- [x] Closing CTA button aligned to "Book Your Free Audit"

## Visual Refresh + Logo Resize
- [x] Generate abstract motion/light background images (hero, services, book, about, case study)
- [x] Upload images to CDN
- [x] Increase logo size in Nav component (48px → 68px) and Footer (56px → 72px)
- [x] Swap all background visuals across all pages (Home, Services, About, Book, CaseStudy)

## Telegram Bot Lead Qualification Flow
- [x] Build Telegram webhook endpoint to receive bot updates
- [x] Implement multi-step conversation state machine (interest → contact method → contact info → confirmation)
- [x] Store conversation state in database (session per Telegram user)
- [x] Send owner notification with lead summary (interest, contact method, contact info, timestamp)
- [x] Add deep link from website to Telegram bot to trigger the flow
- [x] Add "Book a Call" button to Nav and Hero (Telegram deep link)
- [x] Register webhook URL with Telegram Bot API (auto-registers in production)
- [x] Write vitest tests for the bot flow logic (11 tests passing)

## Telegram Bot Analytics Dashboard
- [x] Add analytics tRPC procedures (funnel stats, daily leads, interest breakdown, contact method split)
- [x] Build analytics dashboard page with conversion funnel chart
- [x] Add daily leads trend chart
- [x] Add interest and contact method breakdown charts
- [x] Add recent leads table with full session details
- [x] Wire dashboard to admin-only route in App.tsx (/analytics)

## Telegram Bot — Name Step Enhancement
- [x] Add `leadName` field to botSessions schema and push migration
- [x] Add `awaiting_name` step to the bot conversation state machine
- [x] Update owner notification to include the lead's name (prefers leadName over Telegram first name)
- [x] Update analytics recent leads table to show the provided name
- [x] Update tests for the new step (41 tests passing)
