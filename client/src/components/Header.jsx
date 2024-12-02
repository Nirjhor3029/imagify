import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import HeaderText from "./HeaderText";
import { useNavigate } from "react-router";

import { delay, motion } from "framer-motion"
import { AppContext } from "../context/AppContext";
// eslint-disable-next-line react/prop-types
const Header = ({generateImageBtnOnClickHandler}) => {

    // console.log(generateImageBtnOnClickHandler);
    
    const render = useRef(0);
    console.log(` Header.jsx rendered: ${render.current++}`);

    const navigate = useNavigate();

    return (
        <motion.div className="flex flex-col justify-center items-center"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div className="inline-flex gap-2  text-stone-500 bg-white border border-neutral-500 rounded-full px-6 py-2 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p>
                    Best text to image generator
                </p>
                <img src={assets.star_icon} alt="star_icon" />
            </motion.div>



            <HeaderText />



            <p className="text-center max-w-xl mx-auto mt-5 text-neutral-600" >
                Unleash your creativity with Ai. Turn your imagination into visual art in seconds just type, and watch the magic happen.
            </p>

            <motion.button onClick={generateImageBtnOnClickHandler} className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex  items-center gap-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}

            >
                Generate Image
                <img src={assets.star_group} alt="star_group" className="h-6" />
            </motion.button>

            <div className="flex flex-wrap justify-center mt-16 gap-3">
                {
                    Array(6).fill('').map((item, index) => {
                        return (
                            <img src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} alt="star_icon" key={index} width={100} className="rounded hover:scale-110 transition-all duration-300 cursor-pointer max-sm:w-10" />
                        )
                    })
                }
            </div>

            <p className="mt-2 text-neutral-600">
                Generated images for imagify
            </p>


        </motion.div>
    )
}

//RR






export default Header