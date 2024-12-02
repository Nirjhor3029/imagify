import { useContext, useEffect, useState } from "react"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";

const Login = () => {

    const { setShowLogin, showPassword, setShowPassword } = useContext(AppContext)

    const [state, setState] = useState('Login');

    useEffect(() => {
        // console.log("First");
        document.body.style.overflow = 'hidden';
        return () => {
            // console.log("second");
            document.body.style.overflow = 'unset';
        }
    }, [])


    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/35 flex justify-center items-center">
            <form className="relative bg-white p-10 rounded-xl text-slate-500" >
                <h1 className="capitalize text-center text-2xl text-neutral-700 font-medium">
                    {/* Sign up */}
                    {state}
                </h1>
                <p className="text-sm">
                    Welcome back! Please sign in to continue.
                </p>
                {state != 'Login' &&
                    <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                        <img src={assets.profile_icon} alt="" width={25} />
                        <input type="text" placeholder="Full Name" required className="capitalize outline-none text-sm" />
                    </div>
                }

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                    <img src={assets.email_icon} alt="" width={18} />
                    <input type="email" placeholder="Email" required className="outline-none text-sm" />
                </div>
                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                    <img src={assets.lock_icon} alt="" width={18} />
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" required className="outline-none text-sm" />

                    {showPassword ?
                        <img src={assets.eye} alt="" width={18} className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                        :
                        <img src={assets.eye_close} alt="" width={18} className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                    }

                </div>

                {state === 'Login' &&
                    <p className="text-sm text-blue-600 text-right mr-2 cursor-pointer">Forgot Password</p>
                }
                <button className="bg-blue-600 mt-4 text-white w-full py-2 rounded-full" type="submit">
                    {state === 'Login' ? 'login' : 'Create account'}
                    {/* Create account */}
                </button>

                {state == 'Login' ?
                    <p className="mt-5 text-center">
                        {"Don't have an account?"}
                        <span className="text-blue-600 cursor-pointer" onClick={() => setState('Sign up')}>
                            Sign up
                        </span>
                    </p>
                    :
                    <p className="mt-5 text-center">
                        Already have an account?
                        <span className="text-blue-600 cursor-pointer" onClick={() => setState('Login')}>
                            Login
                        </span>
                    </p>
                }




                <img src={assets.cross_icon} alt="" className="absolute top-4 right-4 cursor-pointer" onClick={() => setShowLogin(false)} />
            </form>
        </div>
    )
}

export default Login