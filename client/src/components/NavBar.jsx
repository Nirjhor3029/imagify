/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import { useState } from 'react'

const NavBar = () => {

    const {user,setUser} = useContext(AppContext);

    console.log(user);
    
    // const [user, setUser] = useState(true)

    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center py-4'>
            <Link to='/'>
                <img src={assets.logo} alt="" className='w-28 sm:w-32 md:w-40' />
            </Link>

            {user ?
                <div className='flex gap-2 sm:gap-2 md:gap-4 items-center'>
                    <button onClick={() => navigate('/buy')} className='flex gap-2 items-center bg-blue-100 
                    px-4 sm:px-6 py-1.5 sm:py-3 
                    rounded-full 
                    hover:scale-105 transition-all duration-700'
                    >
                        <img src={assets.credit_star} alt="credit_star" className='w-5' />
                        <p className='text-xs sm:text-sm text-gray-600 font-medium '>Credit Left: 50</p>
                    </button>
                    <p className='text-gray-600 max-sm:hidden pl-4'>
                        Hi, Nirjhor
                    </p>
                    <div className='relative group'>
                        <img src={assets.profile_icon} alt="Profile" className=' cursor-pointer w-10 drop-shadow cursor-pointer' />
                        <div className='absolute hidden group-hover:block top-0 right-0 pt-12 z-10 text-black rounded '>
                            <ul className='list-none bg-white m-0 p-2 rounded-md border text-sm'>
                                <li className='cursor-pointer py-1 px-2 pr-10 hidden max-sm:block'>Hi, Nirjhor</li>
                                <li className='cursor-pointer py-1 px-2 pr-10 '>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className='flex gap-2 sm:gap-5 md:gap-10 items-center'>
                    {/* <Link to='/buy'>
                        <p className='cursor-pointer font-semibold'>Pricing</p>
                    </Link> */}
                    <p onClick={() => { navigate('/buy') }} className='cursor-pointer font-semibold'>Pricing</p>
                    <button className='bg-zinc-800 text-white py-2 px-7 sm:px-10 text-sm rounded-full'>Login</button>
                </div>
            }
        </div>
    )
}

export default NavBar