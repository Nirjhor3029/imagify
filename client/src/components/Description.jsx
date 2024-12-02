import { assets } from "../assets/assets"

const Description = () => {
    return (
        <div>


            <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
                <hl className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</hl>
                <p className='text-gray-500 mb-8' >
                    Turn your imagination into visuals
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-14 items-center">
                <img src={assets.sample_img_1} alt="sample_img_1" className="w-80 xl:w-96 rounded-lg" />
                <div>
                    <h2 className="text-3xl font-medium max-w-lg mb-4">
                        Introducing the A1-Powered Text to Image Generator
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Easi1y bring your ideas to life with our free A1
                        image generator. Whether you need stunning visuals or
                        unique imagery, our tool transforms your text into
                        eye-catching images with just a few clicks. Imagine it,
                        describe it, and watch it come to life instantly.
                    </p>

                    <p className="text-gray-600"> 
                        Simp1y type in a text prompt, and our cutting-edge
                        A1 will generate high-quality images in seconds. From
                        product visuals to character designs and portraits,
                        even concepts that do not yet exist can be visualized
                        effortlessly. Powered by advanced A1 technology, the
                        reative—and easy-to-use—text to image generator
                        empowers users to turn their imagination into
                        visuals with just a few clicks.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Description