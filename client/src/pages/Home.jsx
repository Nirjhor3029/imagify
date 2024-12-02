import { useNavigate } from "react-router"
import Description from "../components/Description"
import GnerateButton from "../components/GnerateButton"
import Header from "../components/Header"
import Login from "../components/Login"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"


const Home = () => {

    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();

    const generateImageBtnOnClickHandler = () => {
        console.log('generateImageBtnOnClickHandler');
        
        if (user) {
            navigate('/result');
        } else {
            setShowLogin(true);
        }
    }

    return (
        <div>
            <Header generateImageBtnOnClickHandler={generateImageBtnOnClickHandler}/>
            <Steps/>
            <Description/>
            <Testimonials/>
            <GnerateButton generateImageBtnOnClickHandler={generateImageBtnOnClickHandler}/>
        </div>
    )
}

export default Home