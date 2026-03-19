# 📈 Trading Platform Web Application

A full-stack trading platform inspired by modern brokerage dashboards, designed to simulate stock market portfolio management and trading experience.

---

# ✨ Overview

Trading Platform helps users experience a modern financial dashboard by providing:

* Portfolio overview
* Holdings management
* Orders tracking
* Positions display
* Buy / Sell simulation

---

# 🚀 Features

## 📊 Dashboard Features

* Market watchlist
* Holdings section
* Positions section
* Orders tracking
* Summary cards

## 💹 Trading Simulation

* Buy stocks simulation
* Sell stocks simulation
* Portfolio value updates

## 🎨 User Interface

* Responsive dashboard design
* Professional trading layout
* Interactive charts

---

# 💻 Tech Stack

| Layer    | Technology Stack          |
| -------- | ------------------------- |
| Frontend | React.js, JavaScript, CSS |
| Backend  | Node.js, Express.js       |
| Database | MongoDB                   |

---

# 📋 Prerequisites

Before running the project, ensure you have:

* Node.js (v14 or higher)
* MongoDB installed & running
* npm or yarn

---

# 🛠️ Installation & Setup

## Clone the Repository

```bash id="9w1mft"
git clone https://github.com/PrajRT19/Trading-platform-inspired-by-Zerodha.git
cd Trading-platform-inspired-by-Zerodha
```

---

# Backend Setup

```bash id="w3r8jp"
cd backend
npm install
```

Create a `.env` file inside backend:

```env id="l5q2ck"
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

Start backend server:

```bash id="d2x7vn"
npm start
```

---

# Frontend Setup

Open new terminal:

```bash id="f6n4ya"
cd dashboard
npm install
npm start
```

---

# 🚀 Running the Application

Run both servers separately:

## Terminal 1 → Backend

```bash id="s8u3mr"
cd backend
npm start
```

## Terminal 2 → Frontend

```bash id="c4k9ze"
cd dashboard
npm start
```

---

# 🔗 Application runs at

```text id="u1b7ql"
Frontend: http://localhost:3000
Backend: http://localhost:5000
```

---

# 📂 Project Structure

```bash id="p7j2hx"
Trading-platform-inspired-by-Zerodha/
│── backend/
│── dashboard/
│── frontend/
│── README.md
```

---

# 📡 Core Modules

## Backend

* Holdings API
* Orders API
* Positions API

## Frontend

* Dashboard UI
* Watchlist
* Buy/Sell window
* Charts

---

# 👨‍💻 About

This project is built for practicing full-stack development by creating a trading dashboard inspired by modern brokerage platforms.
