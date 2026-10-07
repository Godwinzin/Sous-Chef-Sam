import { useState,useRef, useEffect } from "react"
import { getRecipeFromMistral } from "../ai"
import Ingredients from "./ingredients"
import Recipe from "./recipe"
import RecipeLoader from "./RecipeLoader"

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
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
            setGetRecipe(recipeMarkdown);
        } catch (error) {
            console.error("Failed to fetch recipe from Hugging Face", error);
            setError("Failed to generate recipe. Please check your network connection and try again.");
        }
        finally{
            setLoading(false)
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
                    placeholder="e.g. chickpeas" 
                    required
                />
                <button type="submit">+ Add ingredient</button>
            </form>
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

