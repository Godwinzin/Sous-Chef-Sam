import { InferenceClient } from '@huggingface/inference';

const hf = new InferenceClient(import.meta.env.VITE_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a 
user has and suggests a recipe they could make with some or all of those
ingredients. You don't need to use every ingredient they mention in your recipe.
The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients. Format your response 
in markdown to make it easy to read and render to a webpage.
`;

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model: "Qwen/Qwen2.5-Coder-32B-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd 
                recommend making!` },
            ],
            max_tokens: 1024,
        });

        return response.choices[0].message.content;
    } catch (err) {
        console.error("Error generating recipe:", err.message);
        throw err;
    }
}