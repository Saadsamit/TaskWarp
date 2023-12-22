import { DotLottiePlayer } from "@dotlottie/react-player";
import { FaCheckCircle } from "react-icons/fa";
import Container from "./Container";

const Who_it_is_for = () => {
    const texts = [
        {
            subText: "Use task management to organize sprints."
        },
        {
            subText: "Use task management to track bugs."
        },
        {
            subText: "Use task management to manage code development."
        },
        {
            subText: "Break down larger development tasks into smaller, actionable items."
        }
    ]
  return (
    <Container className=" md:pt-0 pt-10">
      <div className="flex justify-center pb-5">
        <h3 className="text-4xl capitalize text-orange-500 font-bold border-b-4 border-orange-200 w-fit">
          Who it is for
        </h3>
      </div>
      <div className="flex items-center justify-between md:flex-row flex-col-reverse">
      <div className="md:w-1/2 flex justify-end">
        <DotLottiePlayer
          src="/todo.lottie"
          autoplay
          loop
        ></DotLottiePlayer>
      </div>
      <div className="md:w-1/2 space-y-4">
            <h1 className="sm:text-5xl text-4xl font-bold text-orange-950">
            This todo website is <span className="text-orange-400">For Developers</span>
            </h1>
            {texts.map((text,idx)=><p key={idx} className="text-orange-900 flex items-center">
                <div className="w-1/12"><FaCheckCircle className="text-xl text-orange-500 mr-5 "/></div> <div className="w-11/12">{text?.subText}</div>
            </p>)}
            
          </div>
      </div>
    </Container>
  );
};

export default Who_it_is_for;
