import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import Container from "./Container";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="min-h-[calc(100vh-68px)]">
      <Container>
        <div className="flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="md:w-1/2 space-y-4">
            <h1 className="sm:text-5xl text-4xl font-bold text-orange-950">
              Optimize Workflow with <span className="text-orange-400">Our Platform</span>
            </h1>
            <p className="text-orange-900">
              Effortlessly organize, collaborate, and conquer tasks with
              intuitive features designed for productivity and success.
            </p>
            <Link to={'sign-in'} className="btnStyle">Let’s Explore</Link>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <DotLottiePlayer
              src="/todo-task.lottie"
              autoplay
              loop
            ></DotLottiePlayer>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
