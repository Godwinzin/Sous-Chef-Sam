import { useState, useEffect } from "react"

const LOADING_STEPS = [
    "Analyzing your ingredients...",
    "Consulting chef flavor pairings...",
    "Crafting step-by-step instructions...",
    "Plating up your custom recipe..."
]

export default function RecipeLoader() {
    const [stepIndex, setStepIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setStepIndex((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev))
        }, 2200) // Advances message every 2.2 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="suggested-recipe-container recipe-loader" aria-live="polite">
            <div className="loader-header">
                <div className="spinner"></div>
                <p className="loader-status">{LOADING_STEPS[stepIndex]}</p>
            </div>

            {/* Skeleton Placeholders */}
            <div className="skeleton-container">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
            </div>
        </section>
    )
}