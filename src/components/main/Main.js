import './main.css'
import abtImage1 from '../../assets/restaurant chef B.jpg'
import abtImage2 from '../../assets/Mario and Adrian b.jpg'
import greekSaladImg from '../../assets/greek salad.jpg'
import heroImage from "../../assets/restauranfood.jpg"
const Main = () => {
    return (
        <main>
            <article className="hero-section">
                <section className='hero-text'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolores vel aliquam sapiente consectetur inventore cupiditate quam magni soluta</p>
                </section>
                <section className='hero-img'>
                    <img src={heroImage} alt='restaurant food'></img>
                </section>
            </article>
            {/* <article className='specials'>
                <h1>Specials</h1>
                <button className='btn'>Online Menu</button>
                <section className='specials-cards'>
                    <div className="card">
                        <img src={greekSaladImg} alt="Greek Salad" />
                        <h4>Greek Salad</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nesciunt veritatis tenetur nemo nam doloribus iusto error nostrum, sequi vel!</p>
                    </div>
                </section>

            </article> */}
            {/* <article className='testimonials'>
                
            </article> */}
            {/* <article className="about">
                <section className='testimonial-text'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolores vel aliquam sapiente consectetur inventore cupiditate quam magni soluta dolore nesciunt consequuntur, quos nisi quasi facere reiciendis molestias. Quisquam, laudantium?</p>
                </section>
                <section className='testimonial-img'>
                    <img src={abtImage1} alt='restaurant chef'></img>
                </section>
            </article> */}
            
        </main>
    )
}

export default Main;