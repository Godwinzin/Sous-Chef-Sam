# Sous-Chef Sam — AI Recipe Generator

An interactive React web application that suggests customized cooking recipes based on the ingredients you have on hand. Powered by the Hugging Face Inference API and Meta's Llama model, the app crafts markdown-formatted recipes on demand.

---

## Features

- **Ingredient Tracker:** Add ingredients dynamically to your on-hand pantry list (automatically formatted to lowercase to prevent duplicates).
- **AI-Powered Recommendations:** Generates custom step-by-step recipes formatted in clean Markdown.

- **Enhanced UX & Smooth Auto-Scroll:** Automatically scrolls down to the recipe output once generated.
- **Custom Loading Skeleton:** Displays animated micro-step status indicators  while waiting for the AI response.
- **Responsive Styling:** Fully responsive layout designed for both desktop and mobile devices.

---

## Tech Stack

- **Frontend:** React 19, HTML5, CSS3
- **Build Tool:** Vite
- **AI Integration:** Hugging Face Inference API (`@huggingface/inference`)
- **Model:** Meta Llama 3.2 3B Instruct
- **Markdown Rendering:** `react-markdown`

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the Repository

```bash
git clone [https://github.com/Godwinzin/Sous-Chef-Sam.git](https://github.com/Godwinzin/Sous-Chef-Sam.git)
cd Sous-Chef-Sam