import { DotLottiePlayer } from "@dotlottie/react-player";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
const ErrorPage = () => {
    return (
        <div className="space-y-4 flex flex-col justify-center items-center min-h-screen">
            <div className="max-w-xs">
            <DotLottiePlayer
              src="/error.lottie"
              autoplay
              loop
            ></DotLottiePlayer>
            </div>
            <p className="text-xl text-orange-700 capitalize">Page not found</p>
            <Link to={'/'} className="btnStyle">back to Home <IoMdHome/></Link>
        </div>
    );
};

export default ErrorPage;