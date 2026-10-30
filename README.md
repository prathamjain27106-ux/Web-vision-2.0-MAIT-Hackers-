# 🌾 e-NAM 2.0 — A Farmer-First Digital Agriculture Marketplace

<p align="center">
  <strong>Making agricultural markets simpler, smarter and more transparent.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Redesign-Version%202.0-238636?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Project-Hackathon-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Agricultural%20Technology-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Prototype-yellow?style=for-the-badge" />
</p>

---

## 🌱 About the Project

**e-NAM 2.0** is a user-centric redesign concept for India's National Agriculture Market (e-NAM), an electronic trading platform intended to connect agricultural markets across the country.

While digital agricultural marketplaces create opportunities for farmers, navigating market information, comparing buyer offers and understanding the complete trading process can still be challenging.

We believe that digital agriculture should not simply provide access to markets. It should help farmers make better-informed decisions.

Our project reimagines the existing e-NAM experience by improving information accessibility, simplifying important workflows and introducing farmer-focused decision-support features.

**Our vision: A farmer should understand where, how and at what effective price to sell their produce without navigating complicated digital workflows.**

## 🚨 The Problem We're Addressing

e-NAM was established to promote transparent price discovery and facilitate electronic agricultural trading.

However, a Comptroller and Auditor General (CAG) audit of e-NAM implementation in West Bengal identified gaps between the platform's intended objectives and actual trading outcomes.

The audit reported:

* Only 54% of commodity arrivals in the audited markets were e-traded.
* Inter-market trading accounted for just 0.4% of the relevant commodity volume.

These are historical, state-specific audit findings and should not be interpreted as current nationwide statistics.

### Key opportunities identified

1. **Fragmented market information:** Farmers need an understandable way to compare relevant market opportunities.
2. **Price versus actual earnings:** The highest quoted price does not necessarily translate into the highest net return after transportation and other charges.
3. **Complex trading workflows:** Important trading activities can require navigating different sections and interfaces.
4. **Limited mobile workflow continuity:** The official mobile app documentation identifies several operations that are unavailable through the app and require desktop access.
5. **Payment transparency:** Farmers benefit from a clear understanding of trade and payment progress.

Our redesign focuses on making these important parts of the digital agricultural marketplace easier to understand and use.

## 💡 Our Solution — e-NAM 2.0

We are redesigning the existing e-NAM experience while retaining its recognizable agricultural identity and government-oriented information architecture.

The redesigned experience focuses on five areas.

### 1. Farmer-Friendly Dashboard

* Simplified navigation.
* Clear service categories.
* Easy access to market information.
* Organized commodity and trade information.
* Responsive, mobile-friendly interface.

### 2. Improved Market Information

* Search and filter commodities.
* Browse market information.
* Select and compare mandis.
* Display understandable price information.
* Highlight relevant market details.

### 3. Mandi Compare — Our Key Innovation

A decision-support feature that helps farmers compare buyer offers based on estimated net returns rather than quoted prices alone.

**Example:**

A farmer has 50 quintals of wheat.

| Particulars           | Local Mandi | Other Mandi |
| --------------------- | ----------: | ----------: |
| Buyer offer/quintal   |      ₹2,500 |      ₹2,750 |
| Transport/quintal     |          ₹0 |        ₹180 |
| Other charges/quintal |         ₹50 |         ₹70 |
| Estimated net return  |   ₹1,22,500 |   ₹1,25,000 |

Although the second market has higher transportation costs, it provides an estimated additional return of ₹2,500 under these assumptions.

Our comparison engine calculates:

`Estimated Net Return = (Buyer Price - Transport Cost - Other Charges) × Quantity`

This helps farmers evaluate competing offers more meaningfully.

### 4. Trade Tracking

A simplified view of the trading journey:

* Produce and lot information.
* Auction progress.
* Trade completion.
* Sale information.
* Transaction history.

### 5. Payment Tracking

A clear, understandable payment journey showing illustrative stages such as:

* Payment initiated.
* Payment processing.
* Payment completed.

The prototype demonstrates these workflows using simulated information.

## ✨ Key Features

| Feature                       | Purpose                               |
| ----------------------------- | ------------------------------------- |
| Simplified Dashboard          | Improve navigation and accessibility  |
| Market Search                 | Find relevant commodity information   |
| Mandi Comparison              | Compare buyer offers                  |
| Net Return Calculator         | Estimate earnings after costs         |
| Trade Tracking                | Understand transaction progress       |
| Payment Dashboard             | View payment status                   |
| Responsive Design             | Improve mobile usability              |
| Regional-Language-Friendly UI | Make information easier to understand |

## 🛠️ Technology Stack

The implementation uses the existing repository's framework and dependencies.

Our planned frontend stack includes:

* **React** — Component-based user interface.
* **Vite** — Development and build tooling, if supported by the existing project.
* **Tailwind CSS** — Responsive styling, if already configured or added.
* **Lucide Icons** — Consistent interface icons.
* **JavaScript** — Interactive functionality and calculations.
* **Local Demo Data** — Simulated markets, offers and transactions.

## 🧪 Working Prototype

This project is a functional frontend prototype.

The following interactions are intended to work in the demonstration:

* Navigation between redesigned pages.
* Commodity searching and filtering.
* Mandi selection.
* Interactive buyer-offer comparison.
* Dynamic quantity adjustment.
* Automatic net-return calculation.
* Trade details and payment-status views.

**Important:** Market offers, user information and transaction statuses shown in the prototype are simulated demonstration data. The project is not connected to live e-NAM trading, government databases or payment infrastructure.

## 🎯 Project Objectives

1. Improve the usability of the existing e-NAM experience.
2. Make market information easier to understand.
3. Help farmers compare estimated net returns.
4. Simplify access to trading and payment information.
5. Create a more accessible and mobile-friendly digital experience.

## 🔮 Future Scope

If developed beyond the hackathon prototype, e-NAM 2.0 could explore:

* Integration with verified live market-price feeds.
* Real-time buyer-offer comparison.
* Verified transportation-cost estimates.
* Multilingual voice assistance.
* Official trade and payment status integration.
* Improved mobile access to supported trading workflows.
* Personalized market recommendations using verified data.

These integrations would require appropriate government authorization and reliable official data sources.

## 👥 Team

Built by a team of four during the **Redesign Version 2.0 Hackathon**.

| Team Member | Responsibility                            |
| ----------- | ----------------------------------------- |
| Member 1    | Main architecture and homepage            |
| Member 2    | Mandi comparison and calculations         |
| Member 3    | Dashboard, trading and payment interfaces |
| Member 4    | Research, testing and documentation       |

## 🚀 Getting Started

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_REPOSITORY_NAME
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL displayed in your terminal.

**Note:** These commands assume the repository uses a compatible npm-based frontend setup. Follow the existing project's configuration if its scripts differ.

## 📌 Project Disclaimer

e-NAM 2.0 is an independent hackathon redesign prototype inspired by the official National Agriculture Market platform.

It is not an official government product, does not represent the Government of India and does not execute real agricultural trades or payments.

All prototype transactions and market offers are illustrative.

---

<p align="center">
  <strong>🌾 Better Information. Smarter Decisions. Stronger Farmers.</strong>
</p>

<p align="center">
  <em>Redesigning digital agriculture around the people it was built to serve.</em>
</p>-*