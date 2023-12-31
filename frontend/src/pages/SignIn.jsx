import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { myAuthProvider } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { isLoading, loading, gitHubLoginUser, googleLoginUser, loginUser } =
    useContext(myAuthProvider);
  const [passwordShow, setPasswordShow] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleLoginUser()
      .then(() => {
        toast.success("Sign in Successfully ");
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch(() => {
        isLoading(false);
        toast.error("fail to Sign in");
      });
  };
  const handleGitHub = () => {
    gitHubLoginUser()
      .then(() => {
        toast.success("Sign in Successfully ");
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch(() => {
        isLoading(false);
        toast.error("fail to Sign in");
      });
  };
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then(() => {
        toast.success("login Successfully ");
        reset();
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        isLoading(false);
        const errorMessage = error?.message
          ?.replace("Firebase: Error (", "")
          ?.replace(")", "");
        if (errorMessage.includes("auth/invalid-login-credentials.")) {
          return toast.error(" Email/Password doesn't match");
        }
        toast.error(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-68px)] sm:bg-base-200">
      <div className="card w-full max-w-96 sm:shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="flex justify-center mb-5">
            <h2 className="text-xl capitalize font-semibold text-orange-500 border-b-2 border-orange-300 w-fit pb-1">
              sign in
            </h2>
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="inputStyle mb-5"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control relative">
            <input
              type={passwordShow ? "password" : "text"}
              placeholder="Password"
              className="inputStyle"
              {...register("password", { required: true })}
            />
            <div
              onClick={() => setPasswordShow(!passwordShow)}
              className="absolute bottom-1/2 translate-y-1/2 text-orange-500 cursor-pointer text-xl right-2"
            >
              {passwordShow ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="text-end">
            <a
              href="#"
              className="label-text-alt text-orange-500 link link-hover"
            >
              Forgot password?
            </a>
          </div>

          <div className="form-control mt-6">
            <button className="btnStyle">
              {loading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <p className="text-orange-900 text-center">
            If You {"Don't"} Have Account{" "}
            <Link className="text-orange-500 link link-hover" to={"/sign-up"}>
              Sign Up
            </Link>
          </p>
          <div className="flex justify-between items-center my-2">
            <div className="h-1 w-1/3 rounded bg-orange-500"></div>
            <div className="w-1/3 text-orange-500 text-center">OR</div>
            <div className="h-1 w-1/3 rounded bg-orange-500"></div>
          </div>
          <button
            onClick={handleGoogle}
            type="button"
            className="border flex justify-center py-2 items-center capitalize hover:border-orange-500 hover:text-orange-500 rounded-full"
          >
            sign in with <FcGoogle className="ml-2 text-2xl" />
          </button>
          <button
          onClick={handleGitHub}
            type="button"
            className="border flex justify-center py-2 items-center capitalize hover:border-orange-500 hover:text-orange-500 rounded-full"
          >
            sign in with <FaGithub className="ml-2 text-2xl text-black" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
