import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import Footer from "./Footer";
import Header from "./Header";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";

const HomePage = () => {
    return (
        <>
            <Header />
            <CallToAction />
            <Specials />
            {/* <CustomersSay /> */}
            {/* <Chicago /> */}
            <Footer />
        </>
    )
}

export default HomePage;