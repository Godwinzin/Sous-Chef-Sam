export async function getRecipeFromMistral(ingredientsArr) {
  // Hardcoded directly to bypass any Vercel environment variable lookup issues
  const API_URL = "https://sous-chef-sam-api.onrender.com";

  try {
    const response = await fetch(`${API_URL}/api/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredientsArr }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recipe from server.");
    }

    const data = await response.json();
    return data.recipe;
    
  } catch (err) {
    console.error("Error communicating with backend:", err.message);
    throw err;
  }
}