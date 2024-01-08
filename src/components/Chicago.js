import abtImage1 from "../assets/restaurant chef B.jpg";
const Chicago = () => {
  return (
    <section className="chicago">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores vel aliquam sapiente consectetur inventore cupiditate quam
          magni soluta dolore nesciunt consequuntur, quos nisi quasi facere
          reiciendis molestias. Quisquam, laudantium?
        </p>
      </div>
      <div>
        <img src={abtImage1} alt="restaurant chef"></img>
      </div>
    </section>
  );
};

export default Chicago;
