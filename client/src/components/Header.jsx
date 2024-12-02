import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import HeaderText from "./HeaderText";
import { useNavigate } from "react-router";
const Header = () => {

    const render = useRef(0);
    console.log(` Header.jsx rendered: ${render.current++}`);

    const navigate = useNavigate();





    return (
        <div className="flex flex-col justify-center items-center">
            <div className="inline-flex gap-2  text-stone-500 bg-white border border-neutral-500 rounded-full px-6 py-2 " >
                <p>
                    Best text to image generator
                </p>
                <img src={assets.star_icon} alt="star_icon" />
            </div>



            <HeaderText />



            <p className="text-center max-w-xl mx-auto mt-5 text-neutral-600" >
                Unleash your creativity with Ai. Turn your imagination into visual art in seconds just type, and watch the magic happen.
            </p>

            <button onClick={() => navigate('/result')} className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex  items-center gap-2 rounded-full">
                Generate Image
                <img src={assets.star_group} alt="star_group" className="h-6" />
            </button>

            <div className="flex flex-wrap justify-center mt-16 gap-3">
                {
                    Array(6).fill('').map((item, index) => {
                        return (
                            <img src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} alt="star_icon" key={index} width={100} className="rounded hover:scale-125 transition-all duration-300 cursor-pointer max-sm:w-10" />
                        )
                    })
                }
            </div>

            <p className="mt-2 text-neutral-600">
                Generated images for imagify
            </p>

            
        </div>
    )
}

//RR






export default Header