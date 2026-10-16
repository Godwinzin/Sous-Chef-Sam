export async function getRecipeFromMistral(ingredientsArr) {
  // Use environment variable for the backend URL, falling back to localhost for local dev
  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

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