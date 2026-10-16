import ReactMarkdown from 'react-markdown'

export default function Recipe({ recipe, ref }) {
    return (
        <section ref={ref} className="suggested-recipe-container" aria-live="polite">
            <h2>Chef's Recommendation:</h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    )
}