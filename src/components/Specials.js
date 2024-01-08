import Card from "./Card";
const Specials = () => {
  return (
    //specials-section
    <section id="specials-section">
      <div className="wrapper">
        <button className="btn primary">Online Menu</button>
        <h1 className="section-title">Specials</h1>
        <section className="specials-cards">
          <Card />
        </section>
      </div>
    </section>
  );
};

export default Specials;
