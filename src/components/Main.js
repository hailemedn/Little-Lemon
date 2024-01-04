import "./styles.css";
import abtImage1 from "../assets/restaurant chef B.jpg";
import abtImage2 from "../assets/Mario and Adrian b.jpg";
import greekSaladImg from "../assets/greek salad.jpg";
import heroImage from "../assets/restauranfood.jpg";
const Main = () => {
  return (
    <main>
      {/* hero-section */}
      <section id="hero-section">
        <div className="wrapper">
          <div id="hero-text">
            <h1 className="main-title">Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              dolores vel aliquam sapiente consectetur inventore cupiditate quam
              magni soluta Lorem ipsum dolor sit amet.
            </p>
            <button className="btn primary">Reserve a table</button>
          </div>
          <img src={heroImage} alt="restaurant food"></img>
        </div>
      </section>

      {/* specials-section */}
      <section id="specials-section">
        <div className="wrapper">
          <button className="btn primary">Online Menu</button>
          <h1>Specials</h1>
          <section className="specials-cards">
            <div className="card">
              {/* <img src={greekSaladImg} alt="Greek Salad" /> */}
              <h4>Greek Salad</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                nesciunt veritatis tenetur nemo nam doloribus iusto error
                nostrum, sequi vel!
              </p>
            </div>
          </section>
        </div>
      </section>
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
  );
};

export default Main;
