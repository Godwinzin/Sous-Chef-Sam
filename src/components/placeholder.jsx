export default function Placeholder(){
    return(
        <section className="welcome-placeholder">
            <h2>Welcome to Sous-Chef Sam!</h2>
            <p>Not sure what to cook? Enter the ingredients you have on hand in the input box above.</p>
            <div className="placeholder-steps">
                <div className="step">
                    <span>1</span>
                    <p>Add 4 or more ingredients to your pantry list.</p>
                </div>
                <div className="step">
                    <span>2</span>
                    <p>Click <strong>Generate Ideas</strong> to consult your AI chef.</p>
                </div>
                <div className="step">
                    <span>3</span>
                    <p>Receive a custom, step-by-step recipe tailored to your ingredients!</p>
                </div>
            </div>
        </section>
    )
}