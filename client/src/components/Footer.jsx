import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <div className="flex items-center justify-between gap-4 mt-20 px-6 min-h-[10vh]">
            <img src={assets.logo} alt="" width={150} />
            <p className="flex-1 border-l border-gray-400 pl-4 text-gray-500 max-sm:hidden text-sm">
                Copyright ©Nirjhor {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex gap-2.5"> 
                <img src={assets.facebook_icon} alt="facebook_icon" width={35} />
                <img src={assets.twitter_icon} alt="twitter_icon" width={35} />
                <img src={assets.instagram_icon} alt="instagram_icon" width={35} />
            </div>
        </div>
    )
}

export default Footer