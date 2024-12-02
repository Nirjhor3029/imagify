
import { useState } from "react"
import { assets } from "../assets/assets"

const Result = () => {

    const [image, setImage] = useState(assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = useState(true);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');

    // console.log(input);

    const handleGenerateAnotherBtn = () => {
        setImage(assets.sample_img_2);
        setIsImageLoaded(false);
    }

    const onSubmitHandler = async  (e) => {
        e.preventDefault();
        console.log(input);
        
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center min-h-[80vh]">

            <div>
                <div className="relative">
                    <img src={image} alt="" className="max-w-sm rounded-lg" />
                    <span className={`bg-blue-500 w-full h-1 absolute bottom-0 left-0 transition-all duration-[10s] ${loading ? "w-full transition-all duration-[10s]" : "w-0"}`} ></span>

                </div>

                <p className={loading ? "block" : "hidden"}>
                    Loading......
                </p>
            </div>


            {!isImageLoaded && (

                <div className="flex items-center w-full max-w-xl text-white text-sm bg-neutral-500 rounded-full p-0 mt-10 ">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Describe what you want to generate.." className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color" />
                    <button type="submit" className="bg-zinc-900 px-10  py-3 rounded-full">
                        Generate
                    </button>
                </div>

            )}



            {isImageLoaded && (
                <div className='flex gap-2  flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full' >
                    <p onClick={handleGenerateAnotherBtn} className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-white">
                        Generate Another
                    </p>
                    <a href={image} download className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer">
                        Download
                    </a>
                </div>
            )}


        </form>

    )
}

export default Result