import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-68px)] sm:bg-base-200 ">
      <div className="card w-full max-w-xl sm:shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="flex justify-center mb-5">
            <h2 className="text-xl capitalize font-semibold text-orange-500 border-b-2 border-orange-300 w-fit pb-1">
              sign up
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="form-control w-full mb-5">
              <input
                type="file"
                className="inputFileStyle"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="inputStyle"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="inputStyle"
                required
              />
            </div>
            <div className="form-control relative">
              <input
                type={passwordShow ? "password" : "text"}
                placeholder="Password"
                className="inputStyle"
                required
              />
              <div
                onClick={() => setPasswordShow(!passwordShow)}
                className="absolute bottom-1/2 translate-y-1/2 text-orange-500 cursor-pointer text-xl right-2"
              >
                {passwordShow ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btnStyle">sign up</button>
          </div>
          <p className="text-orange-900 text-center">
            If You Have A Account{" "}
            <Link className="text-orange-500 link link-hover" to={"/sign-in"}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
