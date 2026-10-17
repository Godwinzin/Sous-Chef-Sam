
export default function Ingredients(props){
    const list=props.ingredients.map(ing=>{
        return <li key={ing}>
            {ing}
            <button 
                className="remove-btn"
                onClick={()=>props.removeIngredient(ing)}
                aria-label={`Remove ${ing}`}
                title={`Remove ${ing}`}
            >
                <svg
                viewBox="0 0 24 24"
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
                >
                <path d="M6 6l12 12M18 6L6 18" />  
                </svg>
            </button>
            </li>
    })
    return(
        <section className="ingredients-section">
            <div className="ingredients-header">
                 <h2>Ingredients on hand:</h2>
                 {props.ingredients.length >=2 &&
                    <button className="clear-btn"
                    onClick={props.clearIngredients}>
                        Clear all
                    </button>
                 }
            </div>
                <ul className="ingredients-list"> {list} </ul>
                {props.ingredients.length >= 4 &&
                    <div className="generator">
                    <div>
                        <h3>What can we make?</h3>
                        <p>Craft a custom meal using the items you have listed above.</p>
                    </div>
                    <button onClick={props.showRecipe}>Generate Ideas</button>
                </div>}
        </section>
    )
}