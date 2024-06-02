import heroImage from "../assets/restauranfood.jpg";
const CallToAction = () => {
    return (
        // hero-section
        <section id="hero-section">
            <div className="wrapper">
                <div id="hero-text">
                    <h1 className="main-title">Little Lemon</h1>
                    <h3 className="sub-title">Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <button className="btn primary">Reserve a table</button>
                </div>
                <img src={heroImage} alt="restaurant food"></img>
            </div>
        </section>
    )
}


export default CallToAction;