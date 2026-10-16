# Sous-Chef Sam

**Sous-Chef Sam** is a full-stack web application that acts as your personal AI kitchen assistant. Simply enter the ingredients you have on hand in your pantry, and Sam will instantly craft a custom, step-by-step recipe tailored just for you!

<!-- ![Sous-Chef Sam Preview](client/src/assets/logo.png) Optional: Add screenshot or banner here -->

---

##  Features

- **Pantry Management:** Add and manage your available ingredients dynamically.
- **AI-Powered Recipes:** Leverages advanced LLMs (via Groq/OpenAI-compatible APIs) to generate creative, practical recipes from your exact list of ingredients.
- **Clean Markdown Formatting:** Automatically formats recipes with clear ingredient lists and step-by-step instructions.
- **Full-Stack Architecture:** Built with a decoupled React frontend and a secure Node.js/Express backend.

---

## Tech Stack

- **Frontend:** React, Vite, CSS / Modern Styling
- **Backend:** Node.js, Express, Cors, Dotenv
- **AI Integration:** Groq SDK (`openai`-compatible client)

---

## Project Structure

```text
Sous-Chef Sam/
├── client/                 # React Frontend (Vite)
│   ├── src/                # Components and logic
│   ├── .env.example        # Frontend environment template
│   └── package.json
├── server/                 # Node.js & Express Backend
│   ├── server.js           # Main server file & AI logic
│   ├── .env.example        # Backend environment template
│   └── package.json
└── .gitignore              # Global root ignore rules