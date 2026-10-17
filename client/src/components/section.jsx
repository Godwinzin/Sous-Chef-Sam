import { useState,useRef, useEffect } from "react"
import { getRecipeFromMistral } from "../ai"
import Ingredients from "./ingredients"
import Recipe from "./recipe"
import RecipeLoader from "./RecipeLoader"
import Placeholder from "./placeholder"

export default function Section(){
    const [ingredients,setIngredients]= useState([])
    const [recipe,setGetRecipe]=useState("")
    const [loading,setLoading]= useState(false)
    const [error, setError] = useState(null)

    const recipeRef = useRef(null)
    useEffect(() => {
        if (recipe && recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    async function handleGetRecipe() {
        setLoading(true)
        setError(null) // Reset previous errors

        // Check if the browser is explicitly offline first
        if (!navigator.onLine) {
            setError("No internet connection. Please check your network and try again.");
            setLoading(false);
            return;
        }

        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
            setGetRecipe(recipeMarkdown);
        } catch (err) {
            console.error("Failed to fetch recipe", err);
            
            // Check if it's likely a network/connection failure vs an API/code error
            if (!navigator.onLine || err.message?.toLowerCase().includes('network') || err.message?.toLowerCase().includes('failed to fetch')) {
                setError("Network error. Please check your connection and try again.");
            } else {
                setError("Failed to generate recipe. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    }
    
    function addIngredient(formData){
        const newIngredient=formData.get("ing")
        if(newIngredient && newIngredient.trim()!==""){
            const formattedIngredient = newIngredient.trim().toLowerCase()
           // Prevent duplicate entries
            if (!ingredients.includes(formattedIngredient)) {
                setIngredients(prev => [...prev, formattedIngredient]) 
            } 
        }
    }
   
    return(
        <main className="main-container">
            <form action={addIngredient} className="input-container">
                <input 
                    type="text"
                    name="ing" 
                    id="ing" 
                    aria-label="Add ingredient" 
                    placeholder="Enter ingredients(e.g. eggs,tomatoes,onions)..." 
                    required
                />
                <button type="submit">+ Add ingredient</button>
            </form>

            {ingredients.length === 0 && !recipe && !loading && (
                <Placeholder />
            )}

           {ingredients.length > 0 &&
                <Ingredients 
                showRecipe={handleGetRecipe} ingredients={ingredients}  />
           }
           
           {loading && <RecipeLoader />}
            {error && (
                <div className="error-message" role="alert">
                    <p> {error}</p>
                </div>
            )}
           {recipe && !loading&& 
               ( <Recipe ref={recipeRef} recipe={recipe} />)
           }
        </main>
    )
}

