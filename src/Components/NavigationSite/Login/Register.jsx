import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Main/Hooks/useToken";
const Register = () => {
    const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, regloading, regerror] =
        useCreateUserWithEmailAndPassword(auth);

    // token value
    const [token] = useToken(guser || user);



    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm();

    let signInError;
    let navigate = useNavigate();


    if (token) {
        navigate('/appointment')
    }



    if (error || regerror || updateError) {
        signInError = (
            <p className="text-red-500">
                {error?.message || emailError?.message || updateError?.message}
            </p>
        );
    }

    if (loading || regloading || updating) {
        return <Loading> </Loading>;
    }
    const onSubmit = async (data) => {
        console.log(data.email, data.password);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96    bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Register 🔐</h2>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Daisy ui */}
                        {/* Name */}
                        <div className="form-control w-full max-w-xs">
                            {/* Email */}
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required",
                                    },
                                })}
                            />
                            {errors.name?.type === "required" && (
                                <span className="label-texta-alt text-red-500">
                                    {errors.name.message}
                                </span>
                            )}

                            {/* Email */}
                        </div>
                        {/* Name */}
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
                            value="Register"
                        />
                    </form>
                    {/* form */}
                    <p className="text-xs">
                        Already have an account ?{" "}
                        <Link to="/login" className="text-secondary">
                            Log in
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

export default Register;
