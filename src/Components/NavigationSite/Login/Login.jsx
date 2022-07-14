import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../Loading/Loading";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useToken from "../../Main/Hooks/useToken";
const Login = () => {
  const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";



  // if (token) {
  //   navigate(from, { replace: true })
  // }

  const [token] = useToken(emailUser || guser);
  console.log(token);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  if (error || emailError) {
    signInError = (
      <p className="text-red-500">{error?.message || emailError?.message}</p>
    );
  }

  if (loading || emailLoading) {
    return <Loading> </Loading>;
  }

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login 🔐</h2>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Daisy ui */}
            <div className="form-control w-full max-w-xs">
              {/* Email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Match the requirement", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <span className="label-texta-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (  
                <span className="label-texta-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {/* Email */}
            </div>

            <div>
              {/* Password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 Character or longer",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <span className="label-texta-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-texta-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {/* Password */}
            </div>
            {/* Daisy ui */}
            <p>{signInError}</p>
            <input
              className="btn btn-accent w-full max-w-xs my-3 capitalize text-white"
              type="submit"
              value="Login"
            />
          </form>
          {/* form */}
          <p className="text-xs">
            New to Doctors Portal ?{" "}
            <Link to="/register" className="text-secondary">
              Create new Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline w-full mx-auto"
            onClick={() => signInWithGoogle()}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
