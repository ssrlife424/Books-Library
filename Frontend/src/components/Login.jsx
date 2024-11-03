import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-hot-toast";
function Login() {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://books-library-backend.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Loggedin SuccessFully!!!')
           document.getElementById("my_modal_3").close()
           setTimeout(() => {
             window.location.reload();
            
             localStorage.setItem("Users", JSON.stringify(res.data));
           }, 1000);

        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message)
          setTimeout(()=>{},2000);
        }
      });
  } ;
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}

            >
              ✕
            </Link>
            <h3 className="text-lg font-bold">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-1 border rounded-md outline-none w-80"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="px-3 py-1 border rounded-md outline-none w-80"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
                Login
              </button>
              <p>
                Not registered?
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
