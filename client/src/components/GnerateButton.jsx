import { useNavigate } from "react-router";
import { assets } from "../assets/assets"

const GnerateButton = () => {
    const navigate = useNavigate();
    return (
        <div className=" text-center pb-16">
            <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 py-6 md:py-6">
                See the magic. Try now
                </h1>
            <button onClick={() => navigate('/result')} className="inline-flex items-center gap-2 text-white bg-black w-auto mt-8 px-12 py-2.5 rounded-full m-auto hover:scale-105 transition-all duration-300">
                Generate Images
                <img src={assets.star_group} alt="" className="h-6"/>
            </button>
        </div>
    )
}

export default GnerateButton