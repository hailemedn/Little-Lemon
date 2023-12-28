import "./styles.css"
import adrianImg from "../images/Mario and Adrian A.jpg";
const Footer = () => {
    return (
        <footer>
            <section className="item">
                <img src={adrianImg} alt="adrian" height={300}></img>
            </section>
            <nav>
                <h4>Dormat Navigation</h4>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservation">Reservation</a></li>
                    <li><a href="/order-online">Order online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <section>
                <h4>Contact</h4>
                <ul>
                    <li><a href="/address">Address</a></li>
                    <li><a href="/phone-number">Phone Number</a></li>
                    <li><a href="/email">Email</a></li>
                </ul>
            </section>
            <section>
                <h4>Social-Media Links</h4>
                <ul>
                    <li><a href="/address">Address</a></li>
                    <li><a href="/phone-number">Phone Number</a></li>
                    <li><a href="/email">Email</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;

