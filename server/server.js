import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Groq } from 'groq-sdk';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a 
user has and suggests a recipe they could make with some or all of those
ingredients. 

CRITICAL FORMATTING INSTRUCTIONS:
- Do NOT use markdown tables (no pipes like '| Item | Amount |').
- Format the ingredients list using simple markdown bullet points (e.g., '- 1 lb Ground beef').
- Keep the response clean, well-spaced, and easy to render as standard markdown on a webpage.
`;

app.post('/api/recipe', async (req, res) => {
    try {
        const { ingredientsArr } = req.body;

        if (!ingredientsArr || !Array.isArray(ingredientsArr)) {
            return res.status(400).json({ error: "Invalid ingredients array provided." });
        }

        const ingredientsString = ingredientsArr.join(", ");

       // Call Groq using an active current model
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend making!` },
            ],
            model: "openai/gpt-oss-20b",
            temperature: 0.7,
        });
        const recipeMarkdown = chatCompletion.choices[0]?.message?.content || "No recipe generated.";
        res.json({ recipe: recipeMarkdown });

    } catch (err) {
        console.error("GROQ API ERROR:", err);
        res.status(500).json({ error: err.message || "Failed to generate recipe from AI." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on http://localhost:${PORT}`);
});