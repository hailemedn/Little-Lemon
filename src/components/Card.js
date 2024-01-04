import './styles.css'
import greekSaladImage from "../assets/greek salad.jpg";
import lemonDessertImage from "../assets/lemon dessert.jpg";

const specials = [
    {
      imgSrc: greekSaladImage ,
      title: "Greek Salad",
      description:
        "best greek salad in town, try it and tell us what you think",
      url: "google.com",
    },
    {
      imgSrc: lemonDessertImage ,
      title: "Lemon Dessert",
      description: "try out the best lemon desert there is, delicious",
      url: "google.com",
    },
    {
      imgSrc: greekSaladImage ,
      title: "Bruchetta",
      description:
        "Tastes so good, It will make you want to go home and hug your momma!",
      url: "google.com",
    },
  ];

const Card = () => {
  return (
    <div className="cards-container">
        {specials.map(({imgSrc, title, description, url}) => (
            <div className="card">
                <img src={imgSrc} alt="Specials image" />
                <div className="card-title">
                  <h3>{title}</h3>
                </div>
                <div className="card-description">
                  <p className="description">{description}</p>
                </div>
                <a href={url} className='card-bottom'>Order a delivery</a>
            </div>
        ))}
    </div>
  );
};

export default Card;
