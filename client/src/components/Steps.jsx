import { stepsData } from '../assets/assets'

const Steps = () => {
    return (
        <div className='flex flex-col items-center justify-center my-32'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
                How it works
            </h1>
            <p className='text-gray-600 mb-8'>
                Transform words into stunning images in seconds
            </p>

            <div className=' space-y-4 w-full max-w3xl'>

                {
                    stepsData.map((step,index)=>{
                        return (
                            <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/40 shadow-md border cursor-pointer hover:scale-105 transition-all duration-300  rounded-lg'>
                                <img src={step.icon} alt="" className=' ' width={40} />
                                <div>
                                    <h2 className='text-xl sm:text-2xl font-medium'>{step.title}</h2>
                                    <p className='text-gray-500'>{step.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Steps