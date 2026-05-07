# Qloqal — Lean MVP Plan (5 Weeks)

> **Audience:** Junior developers building the validation MVP.
> **Goal:** Prove the loop works — *"customer orders in app → vendor accepts on WhatsApp → customer gets confirmation."*
> **Timeline:** 5 weeks, solo build.
> **Companion doc:** [PLAN.md](PLAN.md) is the full Phase 1 vision. **This doc supersedes it for the 5-week build.**

---

## 1. What this MVP is — and isn't

This is a **validation MVP**, not a production launch. The single question we want answered after 5 weeks:

> *"When a customer places a paid order on the app, does a kirana vendor actually accept it on WhatsApp?"*

If yes → we have a real product. We graduate to [PLAN.md](PLAN.md) for Phase 1 productionization.
If no → we learn why before spending more time.

### What changed from PLAN.md (and why)

We cut roughly **50% of the original scope**. Each cut traded engineering time for "is the cut item required to test the core loop?" If the answer was no, it's gone.

| Cut | Why |
|---|---|
| Razorpay **Route** (split payments, refund automation, transfer logic) | Replaced with **Razorpay Standard Checkout** — money lands in your account; you settle vendors offline. Faster KYC, simpler code. |
| WhatsApp inventory parser | Inventory managed via admin panel only; parser is the V2 differentiator |
| Bot session state machine | Bot only sends messages and handles button taps. No conversational state. |
| Daily 9am/9pm crons | Pure noise for V1; vendors don't care about analytics yet |
| BullMQ + Redis | One delayed job (auto-cancel) handled with an in-process timer. No queue infra. |
| Push notifications | Mobile app polls order status every 5s instead |
| Admin analytics, transactions dashboard, manual overrides | Admin = vendor CRUD + product CRUD only |
| Sentry, BetterStack, Cloudflare | Add when there are real users to monitor |
| Hindi / multilingual | English only |
| Services / appointments | Goods only — single vertical for V1 |

### What stays (the non-negotiable core)

- Customer mobile app (React Native + Expo) — login, nearby, browse, cart, checkout, track
- Backend (NestJS + MongoDB) — vendor / product / order CRUD, geo-search, order state
- WhatsApp bot — send order to vendor, handle Accept / Reject / Mark-Ready buttons
- **Razorpay Standard Checkout** — UPI / card / netbanking. Money lands in your merchant account. Auto-verified via webhook.
- Admin panel (Next.js) — add vendors + products, view orders
- One neighborhood (e.g., Dwarka Sector 12), 5 seeded vendors

---

## 2. Tech Stack (Lean Version)

| Layer | Technology | Notes vs. PLAN.md |
|---|---|---|
| **Backend** | NestJS + TypeScript | Same |
| **Database** | MongoDB (Atlas free tier) | Same |
| **Cache / Queues** | None | No Redis. No BullMQ. In-process timer for the one delayed job. |
| **Mobile App** | React Native (Expo) | Same |
| **Admin Panel** | Next.js 14 + shadcn/ui | Same |
| **Payments** | Razorpay Standard Checkout (UPI + card + netbanking, money to your account) | No Razorpay **Route** in V1 — that's Phase 1 productionization |
| **WhatsApp** | Gupshup BSP | Same |
| **Auth** | Customer: OTP via MSG91 (or fake-OTP for dev). Admin: email + password | Same |
| **Maps** | Google Places API (address autocomplete only) | No need for full Maps SDK in V1 |
| **File Storage** | Cloudinary free tier | For product images |
| **Hosting** | Backend: Railway. Admin: Vercel. DB: Atlas | Same |
| **Monitoring** | None in V1 | Add Sentry post-MVP |

### NestJS libraries

| Library | Purpose |
|---|---|
| @nestjs/mongoose | MongoDB ODM |
| @nestjs/schedule | One cron job (stale-order cleanup, every 1 min) |
| class-validator + class-transformer | Request validation |
| nestjs-pino | Structured logging |
| passport-jwt | JWT auth |

**Removed from PLAN.md:** @nestjs/bullmq, @nestjs/throttler

---

## 3. Architecture (Simplified)

```
              ┌──────────────────────┐
              │  Customer Mobile App │
              │   (React Native)     │
              └──────────┬───────────┘
                         │ HTTPS / REST
                         ▼
   ┌─────────────┐  ┌────────────────────┐  ┌──────────────────┐
   │ Admin Panel │─▶│  NestJS Backend    │◀─│  Razorpay        │
   │  (Next.js)  │  │  (REST API)        │  │  (Webhooks)      │
   └─────────────┘  └─────────┬──────────┘  └──────────────────┘
                              │
                       ┌──────▼──────┐
                       │  MongoDB    │
                       │  (Atlas)    │
                       └──────┬──────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │  WhatsApp Sender    │
                   │  (one helper class) │
                   └──────────┬──────────┘
                              │ HTTPS
                              ▼
                       ┌──────────────┐
                       │  Gupshup     │
                       └──────┬───────┘
                              │
                              ▼
                       ┌──────────────┐
                       │  Vendor's    │
                       │  WhatsApp    │
                       └──────────────┘
```

### How an order flows (lean version)

1. Customer searches "apple" → backend returns nearby vendors with the item
2. Customer adds to cart → taps "Place Order" → backend creates order in `pending_payment` and creates a Razorpay order via API
3. App opens Razorpay Checkout → customer pays via UPI / card / netbanking
4. Razorpay calls our payment webhook → backend verifies signature → order status flips to `paid`
5. Backend immediately sends WhatsApp message to vendor with Accept / Reject buttons
6. A 15-minute auto-cancel timer is scheduled
7. Vendor taps **Accept** → Gupshup webhook hits backend → status: `accepted` → stock is decremented for each ordered item → low-stock check runs → mobile app picks up the change on next poll
8. Vendor taps **Mark Ready** → status: `ready` → customer collects/receives → done

**Key simplifications vs. full plan:**

- No Razorpay Route (no split-payment logic) — money to your account, settle vendors offline
- No automated refund flow — issued manually from Razorpay dashboard
- No Redis / BullMQ — in-process timer for auto-cancel
- Bot doesn't track sessions — every message is independent

---

## 4. Database Schema (Lean)

### `users`

| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| phone | string | Unique, format +91XXXXXXXXXX |
| name | string | Display name |
| addresses | array | List of address objects (line1, line2, pincode, lat, lng) |
| defaultAddressId | ObjectId | Reference into addresses |
| createdAt | Date | |

### `vendors`

| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| name | string | Shop name |
| ownerName | string | Owner's display name |
| whatsappNumber | string | Format +91XXXXXXXXXX |
| category | enum | grocery / electronics |
| location | GeoJSON Point | Geo coordinates — see indexes below |
| address | string | Human-readable address |
| isActive | boolean | Admin can pause a vendor |
| createdAt | Date | |

### `products` (inventory included — no separate collection)

| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| vendorId | ObjectId | Foreign key to vendors |
| name | string | Display name |
| normalizedName | string | Lowercased, used for search |
| unit | enum | kg / piece / litre |
| pricePerUnit | number | In INR |
| quantityAvailable | number | Current stock |
| lowStockThreshold | number | Alert vendor when stock drops to/below this. Default: 2 |
| lowStockAlertSentAt | Date | Last time a low-stock alert was sent — used to avoid spamming |
| isAvailable | boolean | Vendor toggle |
| imageUrl | string | Cloudinary URL |
| createdAt | Date | |

### `orders`

| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| orderNumber | string | Human-readable, e.g., QL-1234 |
| userId | ObjectId | Foreign key to users |
| vendorId | ObjectId | Foreign key to vendors |
| items | array | Line items: productId, name, qty, unit, priceAtOrder |
| totalAmount | number | In INR |
| deliveryAddress | object | Snapshot of address at order time |
| status | enum | See state machine below |
| statusHistory | array | Log of status changes with timestamps |
| razorpayOrderId | string | From Razorpay |
| razorpayPaymentId | string | Set when payment is captured |
| razorpaySignature | string | For verification |
| createdAt | Date | |
| paidAt | Date | When webhook received |
| vendorNotifiedAt | Date | When WhatsApp message sent |
| acceptedAt | Date | When vendor accepted |
| completedAt | Date | When order fulfilled |

### Order state machine

| From | To | Trigger |
|---|---|---|
| pending_payment | paid | Razorpay webhook (`payment.captured`) |
| paid | vendor_notified | WhatsApp message dispatched |
| vendor_notified | accepted | Vendor taps Accept |
| vendor_notified | rejected | Vendor taps Reject → refund manually |
| vendor_notified | auto_cancelled | 15-min timeout → refund manually |
| accepted | ready | Vendor taps Mark Ready |
| ready | completed | Delivery / pickup confirmed |

**Note:** `pending_payment` orders that aren't paid within 30 min are dropped by a background sweep — Razorpay won't capture them after that anyway.

### `bot_messages` (audit log only — no session state)

| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| vendorId | ObjectId | Foreign key to vendors |
| direction | enum | in / out |
| content | string | Message body |
| gupshupMessageId | string | External reference |
| timestamp | Date | |

### `admins`

| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| email | string | Unique |
| passwordHash | string | bcrypt |
| createdAt | Date | |

### Critical indexes

| Collection | Index Type | Fields | Purpose |
|---|---|---|---|
| vendors | 2dsphere | location | Nearby vendor search |
| products | compound | vendorId + normalizedName | Product lookup per vendor |
| products | text | normalizedName | Full-text product search |
| orders | compound | userId (asc) + createdAt (desc) | User's order history |
| orders | compound | vendorId + status | Vendor's pending orders |

**Removed from PLAN.md:** `inventory` collection (folded into products), `bot_sessions` collection (no FSM), `transactions` collection (Razorpay dashboard is the source of truth for V1).

---

## 5. WhatsApp Bot — Lean Version

The bot has **no state machine and no session tracking**. It does four things:

1. **Outbound — order notification:** sends an order to a vendor with Accept / Reject buttons
2. **Outbound — daily inventory summary:** sends each vendor their current stock once a day
3. **Outbound — low-stock alert:** notifies a vendor when any item drops to/below its threshold
4. **Inbound:** receives button clicks → updates the relevant order

The bot does **not** accept inventory updates from vendors via WhatsApp in V1 — those are admin-panel only. Daily and low-stock messages are **read-only notifications**. The vendor pings the admin (out of band) to update stock.

### Templates to submit to Meta (Day 1 of Week 2)

Three templates are required for V1. Each takes 24–48 hr for Meta approval, so submit all on Day 1 of Week 2.

#### `order_notification`

The vendor sees a message like this:

> 🔔 New Order #QL-1234
> Flat 345, Tower B
>
> Items:
> 1 kg Apple — ₹80
> 500 g Onion — ₹40
>
> Total: ₹120 (paid)
> Address: Sector 12, Dwarka
>
> Reply with the buttons below.

Buttons: **Accept** and **Reject**.

After Accept, when the vendor finishes preparing the order, they get a follow-up message: *"Mark order #QL-1234 as ready?"* with a single **Mark Ready** button. (Or the vendor can type "ready" / "done" — bot does a simple keyword match.)

#### `daily_inventory_summary`

Sent once per day, in the evening, to every active vendor. Read-only — gives the vendor a quick view of what's in stock and what's running low.

> 📦 Daily Stock Summary — Sharma Kirana
> {date}
>
> In stock:
> • Apple — 8 kg
> • Onion — 4 kg
> • Banana — 12 pcs
>
> ⚠️ Low stock:
> • Tomato — 1 kg (threshold: 2 kg)
>
> ❌ Out of stock:
> • Potato
>
> To update stock, contact the Qloqal admin.

#### `low_stock_alert`

Sent immediately (event-driven) the moment a product drops to/below its `lowStockThreshold`. Throttled per product to once every 12 hours so the vendor isn't spammed.

> ⚠️ Low Stock Alert — Sharma Kirana
>
> *Tomato* is running low: only 1 kg left.
>
> Customers may not be able to order this item soon. Contact the Qloqal admin to refill.

**That's the entire bot for V1.** No bulk inventory parser, no add-item flow via WhatsApp, no Hindi.

### Cron jobs and event triggers

| Trigger | When | What |
|---|---|---|
| cleanup-stale-orders (cron) | every 1 min | Find orders in `vendor_notified` for >15 min → mark `auto_cancelled`, notify customer in-app |
| daily-inventory-summary (cron) | every day at 8:00 PM IST | For each active vendor: build today's stock summary → send via WhatsApp |
| low-stock-check (event) | after every order is `accepted` (stock decremented) | If any item's `quantityAvailable` ≤ `lowStockThreshold` AND no alert sent in last 12 hr → send WhatsApp alert and set `lowStockAlertSentAt` |

Low-stock checks are **event-driven**, not cron-based — runs after the order-accept handler decrements stock. This is faster than polling and free.

---

## 6. Razorpay Standard Checkout — Payment Flow

We use **Razorpay Standard Checkout** (not Route). Money lands in your Razorpay merchant account; you settle with seeded/dummy vendors offline. KYC is 1–3 business days for individual/proprietorship — much faster than Route.

### One-time setup (Day 1, Week 1)

1. Sign up at the Razorpay dashboard and activate the account
2. Submit KYC: PAN, bank account, ID proof
3. Once activated → grab **Test Mode** Key ID and Key Secret (use these for Weeks 1–4)
4. Set up the payment webhook in Razorpay dashboard, pointing at the backend's webhook URL, subscribed to `payment.captured` and `payment.failed` events
5. Save the webhook secret in your environment configuration

### Backend endpoints

| Endpoint | Purpose |
|---|---|
| POST /orders | Creates a DB order in `pending_payment` and creates a matching Razorpay order. Returns the Razorpay order ID and key ID to the app. |
| POST /webhooks/razorpay | Verifies HMAC SHA256 signature using the webhook secret. On `payment.captured`: finds the order, moves it to `paid`, triggers the WhatsApp message, schedules the 15-min auto-cancel timer. |
| POST /orders/:id/verify-payment | Optional client-side fallback if the webhook is delayed. Verifies the signature returned by the Checkout SDK. |

### Customer flow (mobile app)

1. Customer taps "Place Order" → app calls POST /orders → gets the Razorpay order ID
2. App opens the Razorpay Checkout SDK (passing key, order ID, amount, currency INR, and the customer's name/contact for prefill)
3. Customer pays via UPI / card / netbanking inside the SDK sheet
4. Razorpay returns the payment ID, order ID, and signature back to the app
5. App navigates to "Order Tracking" and starts polling for status
6. The webhook (server-side) confirms payment → status flips to `paid` within seconds → poll picks up the change

### What the admin no longer does

- No "Pending Verification" tab
- No screenshot review
- No manual verify / reject buttons

The admin only sees orders **after** they're paid. Payment verification is fully automated.

### Refunds (for V1)

If a vendor rejects or auto-cancel fires:

- Backend marks order as `rejected` or `auto_cancelled`
- **Refund is issued manually** from the Razorpay dashboard (admin clicks "Refund" on the relevant payment)
- Customer is notified in-app: *"Your order was cancelled. Refund initiated — will reflect in 5–7 days."*

Automated refund API is a 2-hour add post-MVP; not worth the testing burden in V1.

### Why this works for MVP

- KYC is fast (1–3 days vs. Route's 5–10)
- Money lands in your account → simple accounting → manual settlement to seeded vendors
- Standard Indian payment integration (UPI / cards / netbanking)
- Webhook removes the manual admin verification step entirely
- Migration to Route later is the same SDK — just add transfer config to the order-creation call. ~1 week migration.

### When this stops working (legal boundary — read carefully)

The day a **real, unaffiliated third-party vendor** signs up. At that point you become a marketplace settling money to a non-controlled party — **RBI Payment Aggregator territory**. You must switch to Razorpay Route before that happens. This is a hard line — don't cross it for "just one real vendor."

---

## 7. 5-Week Timeline

> Each week ends with a working demo. Don't start week N+1 until week N's demo passes.

### **Week 1 — Backend Foundation + Admin**

**Goal:** Admin can log in, add vendors, add products. APIs live. All external accounts applied for.

- **Day 1** — Apply for Razorpay account + KYC, Gupshup BSP, MSG91 OTP (start the clock on all approvals). Create monorepo with apps/api, apps/mobile, apps/admin.
- **Day 2** — NestJS scaffold. MongoDB Atlas connection. Health-check endpoint. Define all Mongoose schemas with indexes.
- **Day 3** — Admin auth (email/password + JWT). Vendor CRUD APIs.
- **Day 4** — Product CRUD APIs (with quantityAvailable field directly on product). Cloudinary setup for images.
- **Day 5** — Next.js admin scaffold. Login page. Vendor list + add-vendor form with Google Places address autocomplete.
- **Weekend** — Deploy backend to Railway, admin to Vercel. **Demo:** log into admin, add 2 vendors, add 5 products to each.

### **Week 2 — Order API + Razorpay + WhatsApp Integration**

**Goal:** Customer pays via Razorpay (test mode) → vendor receives WhatsApp message with Accept/Reject.

- **Day 1** — Order schema + state machine helpers. POST /orders (creates pending_payment order + Razorpay order via API). GET /vendors/nearby with 2dsphere query.
- **Day 2** — Razorpay webhook handler with HMAC signature verification. Set up webhook URL in Razorpay test dashboard. On payment.captured → flip order to paid.
- **Day 3** — Submit all three templates to Meta (24–48hr wait): `order_notification`, `daily_inventory_summary`, `low_stock_alert`. Gupshup webhook setup. WhatsApp sender service.
- **Day 4** — Wire `paid` → trigger WhatsApp message → schedule the 15-min auto-cancel timer. Handle Accept / Reject inbound webhooks. On Accept, decrement product `quantityAvailable` and run the low-stock check (send `low_stock_alert` if threshold crossed and not throttled).
- **Day 5** — Daily 8 PM IST cron for `daily_inventory_summary` (loops through active vendors, builds stock summary, sends template). Admin panel: orders list (read-only — no manual verify needed). Recent orders feed.
- **Weekend** — **Demo:** Postman creates order → pay via Razorpay test card → webhook fires → your phone gets order WhatsApp → tap Accept → order shows `accepted` in admin → if you ordered close to threshold, low-stock alert WhatsApp arrives. Manually trigger the daily-summary cron and confirm the summary message arrives.

### **Week 3 — Mobile App (Customer)**

**Goal:** Customer can sign up, find nearby vendors, browse, add to cart.

- **Day 1** — Expo project setup. React Navigation. Theme + reusable components (Button, Card, ListItem).
- **Day 2** — OTP login screen. Calls /auth/request-otp and /auth/verify-otp. Store JWT in SecureStore.
- **Day 3** — Location permission + manual address picker (Google Places autocomplete).
- **Day 4** — Home screen: nearby vendors list with distance. Vendor storefront screen with product list.
- **Day 5** — Cart screen + Zustand state management. Checkout screen (no payment yet, just summary).
- **Weekend** — **Demo:** install on phone, sign up, browse vendors, add to cart.

### **Week 4 — Razorpay in App + End-to-End Wiring**

**Goal:** Full loop works. Customer orders → Razorpay Checkout → vendor accepts on WhatsApp → customer sees update.

- **Day 1** — Install react-native-razorpay. Wire checkout: app calls POST /orders, gets Razorpay order ID, opens Razorpay Checkout SDK.
- **Day 2** — Handle SDK success/failure callbacks. Navigate to Order Tracking on success; show retry on failure.
- **Day 3** — Order tracking screen with status polling every 5 seconds. Progress bar UI.
- **Day 4** — Order success / cancelled screens. Order history screen (basic list).
- **Day 5** — Edge cases: duplicate order prevention, vendor offline, network errors, payment timeout (Razorpay 30-min window), webhook retry handling.
- **Weekend** — **Demo:** real end-to-end. You order from phone → Razorpay Checkout opens → pay via test UPI → switch to second phone (vendor) → tap Accept on WhatsApp → first phone shows accepted within 5 seconds.

### **Week 5 — Polish, Seed, Demo**

**Goal:** Something demonstrable to investors / clients / yourself.

- **Day 1** — Seed 5 dummy vendors with full catalogs (~15 items each) at real Dwarka Sector 12 coordinates.
- **Day 2** — UI polish: loading states, empty states, error toasts. Better typography + spacing.
- **Day 3** — Admin polish: recent orders list, simple stats card (today's order count + revenue from Razorpay dashboard link).
- **Day 4** — Edge case fixes from real testing. Documentation: README, API docs (Swagger), env var template.
- **Day 5** — Record demo video. Pitch deck. Buffer for inevitable WhatsApp template approval delay.

---

**End of MVP Plan.**
