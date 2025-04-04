# 🧩 Microfrontends with Authentication Example

This project demonstrates a simple microfrontend architecture with authentication, built using:

- 🧭 **Shell App** (React + Vite)
- 👤 **User App** (React + Vite)
- 📦 **Product App** (React + Vite)
- 🔐 **Auth Microservice** (Node.js + JWT)
- 📦 **Product Microservice** (Node.js + Express)

---

## 🗂️ Folder Structure

```
microfrontends-authentication-example/
├── client/
│   ├── shell-app/
│   ├── user-app/
│   └── product-app/
├── server/
│   ├── auth-microservice.js
│   └── product-microservice.js
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

- Node.js v18+
- NPM or Yarn

---

## 🚀 How to Run

### 1. Start Microservices (Backend)

```bash
cd server
npm install
node auth-microservice.js
node product-microservice.js
```

- `auth-microservice.js`: handles login, JWT token generation/verification
- `product-microservice.js`: returns product data for authenticated users

### 2. Start Microfrontends (Client)

Each app runs separately with Vite.

#### 👤 User App (Remote)

```bash
cd client/user-app
npm install
npm run deploy
```

#### 📦 Product App (Remote)

```bash
cd client/product-app
npm install
npm run deploy
```

#### 📌 Shell App (Host)

```bash
cd client/shell-app
npm install
npm run dev
```

---

## 🧠 Highlights

- Uses **Module Federation** to load user/product apps into the shell.
- Implements **JWT-based authentication** via the auth microservice.
- Auth state is shared across microfrontends using `CustomEvent`

---


---


## 📄 License

MIT
