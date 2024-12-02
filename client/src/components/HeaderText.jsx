import { useEffect, useState } from "react";

const HeaderText = () => {



    // const render = useRef(0);
    // console.log(` HeaderText.jsx rendered: ${render.current++}`);


    const [showFirst, setShowFirst] = useState(true);
    const toggleRandomly = () => {
        setShowFirst(Math.random() > 0.5); // 50-50 chance to toggle
    };

    useEffect(() => {
        const interval = setInterval(toggleRandomly, 10000); // Change every 2 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <>
            {showFirst ? (
                <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
                    Turn your text into <br /> an <span className="text-blue-600">image</span>
                </h1>
            ) : (
                <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
                    Turn text into <br />
                    <span className="text-blue-600">image</span> in seconds.
                </h1>
            )}


            
        </>
    )
}

export default HeaderText