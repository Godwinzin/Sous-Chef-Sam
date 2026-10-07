
export default function Ingredients(props){
    const list=props.ingredients.map(ing=>{
        return <li key={ing}>{ing}</li>
    })
    return(
        <section className="ingredients-section"> 
                <h2>Ingredients on hand:</h2>
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