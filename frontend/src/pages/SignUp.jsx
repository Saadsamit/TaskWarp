import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { myAuthProvider } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { imageUploder } from './../api/imageUploder/imageUploder';
const SignUp = () => {
    const { createUser, updateUser, logoutUser, loading, isLoading } =
    useContext(myAuthProvider);
  const [passwordShow, setPasswordShow] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const imageFile = { image: data.photo_Url[0] };
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const imgData = await imageUploder(imageFile);
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must be at least 1 capital letter");
      return;
    } else if (!/[!\@\#\$\%\^\&\*\)\(\+\=\.\_\-]/.test(password)) {
      toast.error("Password must be at least 1 special character");
      return;
    }
    createUser(email, password)
      .then(() => {
        updateUser(name, imgData.data.display_url).then(() => {
          reset();
          logoutUser().then(() => {
            navigate("/sign-in");
            toast.success("Sign Up Successfully ");
          });
        });
      })
      .catch(() => {
        isLoading(false);
        toast.error("fail to Sign Up");
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-68px)] sm:bg-base-200 ">
      <div className="card w-full max-w-xl sm:shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("photo_Url", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="inputStyle"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="inputStyle"
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
          </div>
          <div className="form-control mt-6">
            <button className="btnStyle">{loading ? <span className="loading loading-spinner text-white"></span> : "Sign Up"}</button>
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
