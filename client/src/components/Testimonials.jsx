import { assets, testimonialsData } from "../assets/assets"

const Testimonials = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center my-20 py-12 md:px-28">
                <hl className='text-3xl sm:text-4xl font-semibold mb-2 capitalize'>
                    Customer testimonials
                </hl>
                <p className='text-gray-500 mb-12 capitalize' >
                    What our users are saying
                </p>
                <div className="flex flex-wrap gap-6">
                    {
                        testimonialsData.map((item, index) => (
                            <div key={index} className="bg-white/40 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300 ">
                                <div className="flex flex-col items-center">
                                    <img src={item.image} alt="" className="w-14 rounded-full" />
                                    <h2 className="text-xl font-semibold mt-3">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-500 mb-4">
                                        {item.role}
                                    </p>
                                    <div className="flex mb-4" >
                                        {/* {
                                            Array(item.stars).fill().map((_,index)=>{
                                                return (
                                                    <img key={index} src={assets.rating_star} alt="star_icon" />
                                                )
                                            })
                                        } */}
                                        <Stars starCount={item.stars} />
                                    </div>
                                    <p className="text-gray-600 text-center text-sm">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Testimonials


// eslint-disable-next-line react/prop-types
const Stars = ({ starCount }) => {
    const elements = [];
    for (let index = 0; index < starCount; index++) {
        elements.push(  <img key={index} src={assets.rating_star} alt="star_icon" />);
    }

    return <>{elements}</>;
} 