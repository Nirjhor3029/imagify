import Description from "../components/Description"
import GnerateButton from "../components/GnerateButton"
import Header from "../components/Header"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"


const Home = () => {
    return (
        <div>
            <Header/>
            <Steps/>
            <Description/>
            <Testimonials/>
            <GnerateButton/>
        </div>
    )
}

export default Home