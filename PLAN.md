# Qloqal — Project Plan (V1 MVP)

> **Audience:** Junior developers joining the project.
> **Goal:** Read this once, understand what we are building, why, and exactly what your tasks are.
> **Timeline:** 6 weeks, solo build.

---

## 1. What is Qloqal? (One-paragraph pitch)

Qloqal is a **hyperlocal marketplace mobile app** that connects customers with **nearby kirana shops** (grocery / goods vendors). Customers browse, order, and pay in the app. **Vendors do NOT use any app** — they receive orders and manage their inventory entirely through a **WhatsApp chatbot**. Think of it as **"Local Amazon, powered by WhatsApp on the vendor side."**

### Why this is different from Amazon / Blinkit / Swiggy

| Platform | Vendor App | Setup Effort | Our Difference |
|---|---|---|---|
| Amazon Seller | Required | High | We use WhatsApp — zero install |
| Blinkit / Zepto | Required | Owned dark stores | We use existing kirana shops |
| Swiggy | Required | Tablet + training | We use the phone vendor already owns |

**The big bet:** Small shopkeepers already live on WhatsApp. If we meet them there, we remove the #1 reason kiranas don't go online — *"I don't have time to learn a new app."*

---

## 2. Phased Roadmap

We are building Qloqal in **4 phases**. Only Phase 1 is in scope for the 6-week MVP. Phases 2–4 are documented so the architecture supports them later without rewrites.

### Phase 1 — MVP (Weeks 1–6) ← **WE ARE HERE**

**Goal:** End-to-end goods-ordering experience with a real WhatsApp vendor bot, using **dummy/seeded vendors** (we manually add vendors via admin panel — no vendor self-onboarding flow).

**In scope:**
- Customer mobile app (React Native) — search, nearby vendors, browse, cart, checkout, pay
- Backend (NestJS + MongoDB) — geo-search, inventory, orders, payments
- WhatsApp vendor bot — order notifications, daily stock check-in, add-item, update-inventory, accept/reject buttons, end-of-day summary
- Razorpay payments (test mode, then Razorpay Route for split payouts)
- Admin panel (Next.js) — manually add vendors, monitor orders/transactions
- One city, one neighborhood (e.g., Dwarka Sector 12) for demo
- **English only**

**Explicitly NOT in scope for Phase 1:**
- Services / appointments (haircut, salon, repair) — Phase 2
- Vendor self-onboarding via WhatsApp — Phase 2
- Hindi / multilingual — Phase 2
- Vendor subscription billing — Phase 3
- Smart recommendations — Phase 4

### Phase 2 — Services + Onboarding + Hindi (8–10 weeks after Phase 1)

- Add **services / appointment booking** flow (barbers, salons, repair)
  - Slot management with optimistic locking (prevent double-booking)
  - Reminders 24hr + 1hr before appointment
- **Vendor self-onboarding via WhatsApp** (KYC, location pin, category pick)
- **Hindi** menu translations + Hindi item-name fuzzy matcher
- Customer reviews and ratings
- Push notifications for order status

### Phase 3 — Monetization (4–6 weeks)

- **Vendor subscription plans** (basic listing vs. featured)
- Free trial → paid tier
- Razorpay Subscriptions integration
- Featured vendor placement in search

### Phase 4 — Intelligence (8+ weeks)

- **Smart recommendations** for users (based on order history + popularity)
- **Inquiry / sales chatbot** for the customer side (web + ticketing app)
- LLM-backed flexible parsing for vendor messages (so vendors can write naturally)
- Analytics dashboard for vendors (best-selling items, peak hours)
- Multi-city expansion + dynamic pricing

---

## 3. Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Backend** | NestJS (Node.js + TypeScript) | Modular, opinionated, easy for juniors. Built-in DI, validation, guards, queues. |
| **Database** | MongoDB (Atlas) | Flexible schema, **2dsphere index** for nearby-vendor search built-in. |
| **Cache + Queues** | Redis + BullMQ | For WhatsApp message queue, OTP cache, order timeouts (auto-cancel after 10 min). |
| **Mobile App** | React Native (Expo) | Cross-platform. Expo gives fast OTA updates, easy build pipeline. |
| **Admin Panel** | Next.js 14 (App Router) + shadcn/ui + TanStack Query | Fast to build, modern, easy auth. |
| **Payments** | Razorpay + Razorpay Route | Route splits payment to vendor at source — avoids RBI Payment Aggregator licensing. |
| **WhatsApp** | Gupshup (BSP) — fallback Wati | Indian BSP, fast Meta approval, supports Interactive Messages (buttons, lists). |
| **Auth** | OTP via MSG91 (or Twilio fallback) + JWT | Phone-first, no passwords. |
| **Maps / Geocoding** | Google Maps SDK + Places API | For address picker in customer app and admin panel. |
| **File Storage** | AWS S3 (or Cloudinary for ease) | Vendor logos, product images. |
| **Hosting** | Backend: Railway / Render. Admin: Vercel. DB: MongoDB Atlas. | Free tiers cover MVP. |
| **Monitoring** | Sentry (errors) + BetterStack (uptime) | Free tiers. |
| **Repo** | Single repo with 3 folders: `apps/api`, `apps/mobile`, `apps/admin` | Easier coordination solo. We can split later. |

### Key library choices inside NestJS

- `@nestjs/mongoose` — Mongo ODM
- `@nestjs/bullmq` — job queues (delayed jobs for auto-cancel)
- `@nestjs/schedule` — cron jobs (daily 9am vendor check-in, 9pm summary)
- `class-validator` + `class-transformer` — request validation
- `nestjs-pino` — structured logging
- `@nestjs/throttler` — rate limiting
- `passport-jwt` — JWT auth

---

## 4. System Architecture (How the pieces talk)

```
                    ┌─────────────────────────┐
                    │   Customer Mobile App   │
                    │     (React Native)      │
                    └────────────┬────────────┘
                                 │ HTTPS / REST
                                 ▼
┌──────────────────┐   ┌──────────────────────┐   ┌──────────────────┐
│   Admin Panel    │──▶│   NestJS Backend     │◀──│   Razorpay       │
│   (Next.js)      │   │   (REST API)         │   │   (Webhooks)     │
└──────────────────┘   └──┬──────────┬────────┘   └──────────────────┘
                          │          │
                          │          │
                  ┌───────▼────┐  ┌──▼─────────┐
                  │  MongoDB   │  │   Redis    │
                  │  (Atlas)   │  │  + BullMQ  │
                  └────────────┘  └────────────┘
                                       │
                                       │  (delayed jobs: auto-cancel,
                                       │   reminders, daily crons)
                                       ▼
                          ┌────────────────────────┐
                          │   WhatsApp Bot Module  │
                          │   (state machine)      │
                          └───────────┬────────────┘
                                      │ HTTPS
                                      ▼
                          ┌────────────────────────┐
                          │   Gupshup BSP          │
                          │   (WhatsApp Cloud API) │
                          └───────────┬────────────┘
                                      │
                                      ▼
                              ┌──────────────┐
                              │  Vendor's    │
                              │  WhatsApp    │
                              └──────────────┘
```

### How an order flows (end-to-end)

1. Customer opens app → searches "apple" → app calls `GET /vendors/nearby?lat=...&lng=...&q=apple`
2. Backend runs MongoDB `$near` geo-query → returns vendors within 3km who have apples in stock
3. Customer adds to cart → checkout → app calls `POST /orders` → backend creates order in `pending_payment` state
4. App initiates Razorpay payment → on success, Razorpay calls our webhook
5. Webhook handler updates order to `vendor_notified` → enqueues a BullMQ job to send WhatsApp message
6. WhatsApp bot module sends interactive message to vendor with **[Accept]** / **[Reject]** buttons
7. Bot also schedules a **delayed job** for 10 minutes later — "if no response, auto-cancel + refund"
8. Vendor taps **Accept** → Gupshup webhook hits our backend → order moves to `accepted` → customer gets push notification
9. Vendor later taps **Mark Ready** → order moves to `ready` → customer gets notification → customer collects/receives → done.

---

## 5. Database Schema (Top-level collections)

> **For juniors:** This is the data structure. Each box is a MongoDB collection.

### `users` (customers)
```
_id, phone, name, addresses[], defaultAddressId, createdAt
```

### `vendors` (the shops — seeded manually in Phase 1)
```
_id, name, ownerName, whatsappNumber, category ("grocery" | "electronics"),
location: { type: "Point", coordinates: [lng, lat] },  // 2dsphere indexed
address, isOpen, isActive, razorpayAccountId,
operatingHours: { mon: "09:00-21:00", ... }, createdAt
```

### `products` (catalog items per vendor)
```
_id, vendorId, name, normalizedName ("apple"), unit ("kg"|"piece"|"litre"),
pricePerUnit, isAvailable, imageUrl, createdAt
```

### `inventory` (current stock — separated from products for fast updates)
```
_id, vendorId, productId, quantityAvailable, lastUpdatedAt, lastUpdatedVia ("whatsapp"|"admin")
```

### `orders`
```
_id, orderNumber ("QL-1234"), userId, vendorId, items[{productId, qty, priceAtOrder}],
totalAmount, deliveryAddress, status, statusHistory[],
razorpayOrderId, razorpayPaymentId, createdAt, vendorNotifiedAt, acceptedAt, completedAt
```

**Order status state machine:**
```
pending_payment → vendor_notified → accepted → preparing → ready → completed
                          ↓                ↓
                      rejected         cancelled  → refunded
                          ↓
                      auto_cancelled (10 min timeout) → refunded
```

### `bot_sessions` (WhatsApp conversation state per vendor)
```
_id, vendorWhatsappNumber, currentState, contextData{}, lastMessageAt, expiresAt
```

### `bot_messages` (audit log of all WhatsApp messages)
```
_id, vendorId, direction ("in"|"out"), messageType, content, gupshupMessageId, timestamp
```

### `transactions`
```
_id, orderId, type ("payment"|"refund"|"payout"), amount,
razorpayPaymentId, razorpayRouteTransferId, status, createdAt
```

### `admins`
```
_id, email, passwordHash, role, createdAt
```

### Critical indexes
- `vendors`: `{ location: "2dsphere" }` — for nearby search
- `vendors`: `{ isActive: 1, isOpen: 1 }`
- `products`: `{ vendorId: 1, normalizedName: 1 }`
- `products`: `{ normalizedName: "text" }` — full-text search
- `orders`: `{ userId: 1, createdAt: -1 }`
- `orders`: `{ vendorId: 1, status: 1 }`
- `bot_sessions`: `{ vendorWhatsappNumber: 1 }` (unique)

---

## 6. WhatsApp Vendor Bot — State Machine

The bot is a **finite state machine**. Each vendor has one active session at a time. Free-text input is only allowed in specific states.

### States

| State | What vendor sees | Free-text allowed? |
|---|---|---|
| `IDLE` | Main menu (list of buttons) | No |
| `MAIN_MENU` | [Update Stock] [View Orders] [Add Item] [Set Hours] [Pause Shop] | No |
| `AWAITING_BULK_INVENTORY` | "Send your stock list, one item per line" | **Yes** — parser kicks in |
| `AWAITING_NEW_ITEM_NAME` | "What's the name of the new item?" | Yes |
| `AWAITING_NEW_ITEM_UNIT` | "Unit? [kg] [piece] [litre]" | No |
| `AWAITING_NEW_ITEM_PRICE` | "Price per {unit}? Reply with number" | Yes (number only) |
| `AWAITING_ORDER_RESPONSE` | "Order #1234 — [Accept] [Reject]" | No |
| `AWAITING_ORDER_READY` | "[Mark Ready] [Cancel]" | No |

### Inventory parser rules (simple, no LLM)

Input format: `<item> <qty> <unit>` per line. Examples that must work:
- `apple 5 kg` ✓
- `apples - 5kg` ✓
- `Apple 5 Kilo` ✓ (Kilo → kg synonym map)
- `5kg apple` ✓ (qty-first variant)
- `apl 5kg` → fuzzy match against vendor's existing catalog (Levenshtein ≤ 2)

If item not found in vendor's catalog → bot replies: *"'apl' not in your catalog. Did you mean 'apple'? [Yes] [Add as new item] [Cancel]"*

### Cron jobs (NestJS @nestjs/schedule)

| Cron | Time (IST) | Action |
|---|---|---|
| `daily-vendor-check-in` | 9:00 AM | Send "Good morning! Update today's stock." to all active vendors |
| `daily-vendor-summary` | 9:00 PM | Send "Today: X orders, ₹Y earned" |
| `cleanup-expired-sessions` | every 1 hour | Reset `bot_sessions` older than 30 min to `IDLE` |
| `auto-cancel-stale-orders` | (delayed BullMQ job, not cron) | 10 min after `vendor_notified` with no response → cancel + refund |

---

## 7. 6-Week Timeline (Day-by-Day-ish)

> **For juniors:** Each week ends with a working demo of *that week's* feature. Don't start week N+1 until week N's demo passes.

### **Week 1 — Foundation & Accounts**

**Goal:** All accounts approved, repo running, schemas defined.

- **Day 1 (Mon)** — Apply for Gupshup BSP account + Razorpay Route KYC + MSG91 OTP. *These have approval delays, start now.*
- **Day 1** — Create monorepo: `apps/api` (NestJS), `apps/mobile` (Expo), `apps/admin` (Next.js). Set up shared `.env` strategy.
- **Day 2** — NestJS scaffold: install Mongoose, BullMQ, Schedule, Pino, class-validator. Health-check endpoint.
- **Day 3** — Define all Mongoose schemas (User, Vendor, Product, Inventory, Order, BotSession, Transaction). Add indexes including `2dsphere` on `vendors.location`.
- **Day 4** — Admin auth (email + password, JWT). Next.js admin scaffold with shadcn/ui.
- **Day 5** — Customer OTP auth (MSG91 → JWT). Test in Postman.
- **Weekend** — Deploy backend to Railway, admin to Vercel, DB on Atlas. **Demo:** admin logs in, sees empty dashboard.

### **Week 2 — Backend Core (Vendors, Products, Orders, Geo-search)**

**Goal:** Admin can add vendors + products. Customer API can search nearby vendors.

- **Day 1** — Vendor CRUD APIs (admin-only). Map picker in admin to set lat/lng.
- **Day 2** — Product CRUD (admin can add products to a vendor). Inventory model.
- **Day 3** — `GET /vendors/nearby?lat&lng&radius&q` — geo-query + product text search. **Important:** test with 5 seeded vendors at known lat/lngs.
- **Day 4** — Order creation API (`POST /orders`). State machine helpers. Razorpay order creation (test mode).
- **Day 5** — Razorpay webhook handler. Update order to `vendor_notified` on payment success.
- **Weekend** — Buffer + write Postman collection. **Demo:** admin adds 5 vendors with 10 products each. Postman creates an order, simulates payment, sees status update.

### **Week 3 — WhatsApp Vendor Bot**

**Goal:** All vendor message flows work end-to-end with one real WhatsApp number (yours).

- **Day 1** — Gupshup webhook setup. Receive incoming messages, log them. Reply with "echo" to confirm wiring.
- **Day 2** — Bot state machine module. `BotSessionService` to load/save state per vendor number.
- **Day 3** — Submit ALL message templates to Meta for approval *(24–48 hr wait — do this Tuesday)*. Templates: order_notification, daily_check_in, end_of_day_summary, item_added, low_stock_alert.
- **Day 3** — Build interactive buttons: main menu, accept/reject, mark ready.
- **Day 4** — Inventory parser (`apple 5 kg`). Unit synonym map. Fuzzy matching with `fastest-levenshtein`.
- **Day 5** — Add-new-item flow (vendor adds item via WhatsApp). Daily 9am cron + 9pm cron.
- **Weekend** — End-to-end: admin creates order → bot messages your phone → you tap Accept → order updates. **Demo:** record a screen recording.

### **Week 4 — Mobile App (Customer)**

**Goal:** Customer can sign up, find nearby vendors, browse, add to cart.

- **Day 1** — Expo project setup. React Navigation. Theme + components.
- **Day 1** — OTP login screen (calls our backend).
- **Day 2** — Location permission + manual address entry (Google Places autocomplete).
- **Day 3** — Home screen: nearby vendors list with distance.
- **Day 4** — Vendor storefront: list of in-stock products.
- **Day 5** — Cart + checkout UI (no payment yet).
- **Weekend** — Polish UI. **Demo:** install on phone, sign up, see your seeded vendors with real distances.

### **Week 5 — Payment + End-to-End Integration**

**Goal:** Full flow works: order from app → vendor on WhatsApp → status back to app.

- **Day 1** — Razorpay React Native SDK. Checkout → payment → success/failure handling.
- **Day 2** — Order tracking screen (live status updates via polling — sockets are Phase 2).
- **Day 3** — Push notifications setup (Expo Notifications) for order status changes.
- **Day 4** — Auto-cancel + refund flow. BullMQ delayed job to refund if no vendor response in 10 min.
- **Day 5** — Order history screen. Re-order button.
- **Weekend** — Bug bash. **Demo:** real end-to-end. Customer (you on phone) orders → vendor (you on another phone via WhatsApp) accepts → customer sees update.

### **Week 6 — Polish, Test, Demo Prep**

**Goal:** Something you'd actually show to an investor or your client.

- **Day 1** — Seed 5–10 dummy vendors with full catalogs (~20 items each) at real Dwarka/Saket coordinates.
- **Day 2** — Edge cases: payment failure, vendor rejects, oversell, vendor offline, duplicate order.
- **Day 3** — Admin dashboard polish: live order monitor, transaction view, manual override (cancel/refund).
- **Day 4** — Sentry error tracking. BetterStack uptime. README + setup docs.
- **Day 5** — Record demo video. Pitch deck.
- **Weekend** — Buffer for the inevitable WhatsApp template approval delays or Razorpay KYC issues.

---

## 8. Task Breakdown (For ticketing — Linear / Jira / GitHub Projects)

### Backend (NestJS) — 38 tickets

**Setup & Infra**
- [ ] BE-001 Initialize NestJS project + TypeScript strict mode
- [ ] BE-002 Mongoose connection + connection pooling config
- [ ] BE-003 Global exception filter + Pino logger
- [ ] BE-004 ConfigModule with `.env.schema.ts` validation
- [ ] BE-005 Health-check endpoint + readiness probe

**Auth**
- [ ] BE-010 Customer OTP module (MSG91)
- [ ] BE-011 JWT strategy + refresh tokens
- [ ] BE-012 Admin email/password module + bcrypt
- [ ] BE-013 Role-based guards (`@Roles('admin')`)

**Vendors & Products**
- [ ] BE-020 Vendor schema + CRUD (admin-only)
- [ ] BE-021 Product schema + CRUD
- [ ] BE-022 Inventory schema + update API
- [ ] BE-023 `GET /vendors/nearby` with `2dsphere` query + text search
- [ ] BE-024 Vendor seed script for 10 dummy vendors

**Orders**
- [ ] BE-030 Order schema + state machine
- [ ] BE-031 `POST /orders` — creates Razorpay order
- [ ] BE-032 Razorpay webhook handler (payment success/fail)
- [ ] BE-033 Order timeout BullMQ job (auto-cancel after 10 min)
- [ ] BE-034 Refund flow (Razorpay refund API)
- [ ] BE-035 Order history API

**WhatsApp Bot**
- [ ] BE-040 Gupshup webhook receiver
- [ ] BE-041 BotSessionService (state load/save)
- [ ] BE-042 Message templates submission script
- [ ] BE-043 Interactive button message helpers
- [ ] BE-044 Inventory parser + unit synonyms + fuzzy matcher
- [ ] BE-045 Order notification message flow
- [ ] BE-046 Add-new-item flow
- [ ] BE-047 Update-bulk-inventory flow
- [ ] BE-048 Daily 9am check-in cron
- [ ] BE-049 Daily 9pm summary cron
- [ ] BE-050 Bot session expiry cron (1hr)

**Admin APIs**
- [ ] BE-060 Live orders feed (REST polling for now)
- [ ] BE-061 Transactions list
- [ ] BE-062 Manual order override (force-cancel, force-refund)
- [ ] BE-063 Vendor activity report
- [ ] BE-064 Inventory snapshot per vendor

**Quality**
- [ ] BE-070 Sentry integration
- [ ] BE-071 Rate limiting via `@nestjs/throttler`
- [ ] BE-072 e2e tests for order flow + bot flow
- [ ] BE-073 README + API docs (Swagger)

### Mobile App (React Native + Expo) — 22 tickets

- [ ] MOB-001 Expo project + React Navigation
- [ ] MOB-002 Theme system + reusable components
- [ ] MOB-003 OTP login screen
- [ ] MOB-004 Location permission screen
- [ ] MOB-005 Manual address picker (Google Places)
- [ ] MOB-006 Home screen — nearby vendors list
- [ ] MOB-007 Search bar + product search
- [ ] MOB-008 Vendor storefront screen
- [ ] MOB-009 Product detail modal
- [ ] MOB-010 Cart screen + state (Zustand)
- [ ] MOB-011 Checkout screen
- [ ] MOB-012 Razorpay SDK integration
- [ ] MOB-013 Order success screen
- [ ] MOB-014 Order tracking screen (polling status)
- [ ] MOB-015 Order history screen
- [ ] MOB-016 Profile screen + addresses
- [ ] MOB-017 Push notifications (Expo Notifications)
- [ ] MOB-018 Error boundaries + crash reporting
- [ ] MOB-019 Loading + empty states
- [ ] MOB-020 Build for Android (Expo EAS)
- [ ] MOB-021 Build for iOS (Expo EAS)
- [ ] MOB-022 In-app updates (Expo OTA)

### Admin Panel (Next.js) — 14 tickets

- [ ] ADM-001 Next.js + Tailwind + shadcn/ui setup
- [ ] ADM-002 Login page
- [ ] ADM-003 Dashboard — KPIs (today's orders, revenue, active vendors)
- [ ] ADM-004 Vendors list + filters
- [ ] ADM-005 Add vendor form with map picker
- [ ] ADM-006 Vendor detail page (edit, products, inventory)
- [ ] ADM-007 Products CRUD per vendor
- [ ] ADM-008 Live orders feed
- [ ] ADM-009 Order detail page + manual override actions
- [ ] ADM-010 Transactions list + filters
- [ ] ADM-011 Refund action (with reason)
- [ ] ADM-012 Inventory snapshot per vendor
- [ ] ADM-013 User list (read-only)
- [ ] ADM-014 Deploy to Vercel + env config

### DevOps / Infra — 8 tickets

- [ ] OPS-001 MongoDB Atlas free tier + IP whitelist
- [ ] OPS-002 Redis (Upstash free tier)
- [ ] OPS-003 Backend deploy on Railway
- [ ] OPS-004 Vercel for admin
- [ ] OPS-005 Domain + Cloudflare DNS
- [ ] OPS-006 SSL certs (auto via Vercel/Railway)
- [ ] OPS-007 Sentry + BetterStack uptime
- [ ] OPS-008 Backup strategy (Atlas auto-backup ON)

**Total: ~82 tickets across 6 weeks ≈ 14 tickets/week ≈ 2 tickets/day. Ambitious but doable.**

---

## 9. Hard Constraints — DO NOT IGNORE

These are the things that will kill the timeline if not done early.

| # | Constraint | Why | Action |
|---|---|---|---|
| 1 | **Gupshup BSP approval takes 2–5 days** | Can't send WhatsApp messages without it | Apply Day 1 |
| 2 | **WhatsApp template approval takes 24–48 hrs** | Can't send templated messages without approval | Submit by Day 8 (Tuesday of Week 2) |
| 3 | **Razorpay Route KYC takes 5–10 days** | Can't do split payments without it | Apply Day 1 |
| 4 | **MSG91 OTP requires sender ID approval** | OTP doesn't deliver without it | Apply Day 1 |
| 5 | **No Hindi in V1** | 1 extra week of work; V1 has no time | Strict English only |
| 6 | **No services in V1** | Whole separate flow; V1 has no time | Goods only |
| 7 | **No vendor self-onboarding in V1** | Process problem, not engineering. We seed | Admin manually adds vendors |
| 8 | **Pick a city + neighborhood Day 1** | All testing data depends on it | Recommend Dwarka Sector 12 |
| 9 | **Razorpay test mode for Weeks 1–4** | Live mode only after Route KYC | Use test mode keys |
| 10 | **Don't switch React Native ↔ Flutter mid-project** | Wastes 1+ weeks | NestJS + RN locked |

---

## 10. Glossary (For juniors new to these terms)

| Term | Meaning |
|---|---|
| **BSP** | Business Solution Provider — middleman between us and Meta WhatsApp Cloud API. Gupshup, Wati, Twilio. |
| **Interactive Messages** | WhatsApp message types with buttons or list pickers. Vendors tap, don't type. |
| **2dsphere index** | MongoDB index for "find docs near coordinate X within Y km" queries. |
| **Razorpay Route** | Razorpay product that automatically splits a customer payment between platform (us) + vendor. Avoids us holding money. |
| **PA license (Payment Aggregator)** | RBI license required if we *hold* customer money. Route avoids this entirely — money never sits with us. |
| **State machine** | A formal model where the system is always in *one* known state (e.g., `vendor_notified`) and transitions are explicit. |
| **BullMQ** | Redis-backed job queue for Node. We use it for delayed jobs (10-min auto-cancel) + scheduled crons. |
| **Webhook** | An HTTP endpoint *we expose* that an external service (Razorpay, Gupshup) calls to notify us of events. |
| **Optimistic locking** | Strategy to prevent two users from booking the same slot — store a version number, fail second writer. (Phase 2 concern for appointments.) |
| **Geo-query** | A database query that finds documents based on their geographic coordinates. |

---

## 11. Day-1 Checklist (Junior dev's first day)

Before writing any code:

1. [ ] Read this entire document
2. [ ] Set up dev environment: Node 20, pnpm, MongoDB Compass, Postman
3. [ ] Clone the repo (once created)
4. [ ] Get added to: MongoDB Atlas, Railway, Vercel, Sentry, Gupshup, Razorpay sandbox
5. [ ] Read NestJS official docs: Modules, Controllers, Providers, Guards, Pipes
6. [ ] Read MongoDB Geospatial Queries docs
7. [ ] Read WhatsApp Cloud API → Interactive Messages docs
8. [ ] Read Razorpay → Standard Checkout + Route docs
9. [ ] Pull Postman collection + import
10. [ ] Run the backend locally, hit health-check, see green

---

## 12. Open Decisions (Need to confirm Day 1)

These were left open in our planning chat. Lock them before Week 1.

1. **Demo neighborhood?** Recommendation: **Dwarka Sector 12**, Delhi. Need 5 dummy vendor lat/lngs within 2km.
2. **Demo target date?** Need exact date — sets quality bar.
3. **Demo audience?** Investor / client / personal? Affects polish priority.
4. **Domain name?** `qloqal.in` available? Affects DNS setup.
5. **Brand colors / logo?** Need before Week 4 (mobile UI).
6. **Customer test phones?** Need 2 real numbers for end-to-end testing.
7. **Vendor test WhatsApp number?** Recommend a separate SIM — your business WhatsApp gets noisy fast.

---

## 13. Risk Register (What could go wrong + mitigation)

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| WhatsApp template rejected by Meta | Medium | High | Submit early Week 2; have generic fallbacks |
| Razorpay KYC delays | Medium | High | Apply Day 1; use test mode meanwhile |
| Geo-search returns wrong vendors | Low | High | Test with seeded fixed coordinates Week 2 |
| Bot misparses inventory | High | Medium | Confirm-before-save in every parse step |
| Customer pays, vendor never responds | Medium | High | 10-min auto-cancel + auto-refund (built-in) |
| Solo developer burnout | High | Critical | Strict scope, no Hindi/services V1, weekends are buffer not work |
| Push notification setup eats 2 days | Medium | Medium | Use Expo's hosted service, don't build native |
| MongoDB free tier hits limit | Low | Low | Atlas M0 = 512MB. We won't hit it in 6 weeks |

---

## 14. What "Done" Means for Phase 1

A successful Phase 1 demo looks like this:

> A customer opens the Qloqal app on their phone. They sign up via OTP. The app shows 5 nearby kirana shops in Dwarka with real distances. They search "apple," see 3 shops with apples in stock, tap one, add 1kg apple + 500g onion to cart. They checkout — Razorpay UI appears — they pay ₹120 with a test card.
>
> Within 5 seconds, a real WhatsApp message arrives on the vendor's phone:
> *"🔔 New Order #QL-1234 — Flat 345, Tower B — 1kg Apple ₹80, 500g Onion ₹20. Total ₹120 (paid). [Accept] [Reject]"*
>
> The vendor taps **Accept**. Customer's app updates to "Accepted — preparing your order." The vendor later taps **Mark Ready**. Customer sees "Ready for pickup."
>
> Meanwhile, the admin panel shows the order live in the dashboard, the transaction in the transactions tab, and the vendor's inventory has been decremented automatically.
>
> Tomorrow at 9am, all vendors get a WhatsApp message: *"Good morning! Update today's stock."* The vendor types `apple 8 kg, onion 4 kg` and the bot replies *"✅ Updated. Apple: 8kg, Onion: 4kg."*

If that whole story works in 6 weeks, **Phase 1 is done.**

---

## 15. After Phase 1 — Long-Term Architecture Notes

These are kept here so we don't accidentally make decisions in Phase 1 that block them.

- **Multi-city expansion** — Vendor schema already has `location` 2dsphere; works globally. Just need city-level admins.
- **Services flow (Phase 2)** — Add `appointmentSlots` collection. Order schema already polymorphic-friendly (rename `items` to `lineItems` from start).
- **Vendor app (later, if needed)** — REST API is already cleanly separated from bot module. A vendor app can be added without backend rewrites.
- **Subscriptions (Phase 3)** — Add `vendor_subscriptions` collection. Use Razorpay Subscriptions API. Vendor `isActive` flag already exists.
- **AI / recommendations (Phase 4)** — Order history + product schema is rich enough for collaborative filtering or vector search later.

---

## 16. References & Learning Links

- NestJS — https://docs.nestjs.com
- MongoDB Geo Queries — https://www.mongodb.com/docs/manual/geospatial-queries/
- WhatsApp Cloud API — https://developers.facebook.com/docs/whatsapp/cloud-api
- Gupshup BSP — https://www.gupshup.io/whatsapp-business-api
- Razorpay Route — https://razorpay.com/docs/payments/route/
- Expo Docs — https://docs.expo.dev
- shadcn/ui — https://ui.shadcn.com
- BullMQ — https://docs.bullmq.io

---

**End of Plan.**

> When in doubt: re-read Section 1 (what we're building) and Section 9 (constraints). If you're confused about a task, the answer is probably in Section 7 (timeline) or Section 8 (tickets).
