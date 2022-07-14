import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
const AddDoctor = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset
    } = useForm();

    // Image Storage Key
    const imageStorageKey = 'd2a8fc6969ae2760ad345f485a7f1b85';

    const onSubmit = (data) => {
        console.log("data", data);
        console.log(data.image[0].name)


        // image extract data
        const image = data.image[0];
        console.log(image);

        // Form Data
        const formData = new FormData()
        //appending data into formData 
        formData.append("image", image);


        // post -> url
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        // fetch to post
        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: img
                    }
                    // sent to your database
                    fetch("http://localhost:5000/doctors", {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(doctor)
                    }).then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success("Doctor Added Successfully");
                                reset();
                            } else {
                                toast.error("Failed to add a Doctor")
                            }
                        })
                }
            })
    };

    const { data: services, isLoading } = useQuery('services', () => fetch("http://localhost:5000/services").then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    /** 3 ways to store images
     * 1.Third party storage -> imgbb // Free Open public storage is ok for practice project
     * 2.Your Own Storage in your own server { file System } 
     * 3.Database : Mongodb
     * 
     * YUP : to validate File  : Search Yup File validation for react file validation
     */
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl text-orange-500'>Add New Doctor</h1>
                <div className="">
                    <div className="card mx-auto   lg:max-w-lg md:max-w-md sm:max-w-sm    bg-base-100 shadow-xl">
                        <div className="card-body mx-auto">
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
                                        <span className="label-text">Specialty</span>
                                    </label>
                                    {/* Select */}
                                    <select {...register('specialty')} class="select w-full max-w-xs">
                                        {
                                            services.map(service =>
                                                <option key={service._id} value={service.name}>
                                                    {service.name}
                                                </option>)
                                        }
                                    </select>
                                    {/* Select */}

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    {/* Email */}
                                    <label className="label">
                                        <span className="label-text">Choose Image</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder=""
                                        className=""
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: "Image is required",
                                            },
                                        })}
                                    />
                                    {errors.image?.type === "required" && (
                                        <span className="label-texta-alt text-red-500">
                                            {errors.image.message}
                                        </span>
                                    )}

                                    {/* Email */}
                                </div>
                                {/* Daisy ui */}
                                {/* <p>{signInError}</p> */}
                                <input
                                    className="btn btn-accent w-full max-w-xs my-3 capitalize text-white"
                                    type="submit"
                                    value="Add"
                                />
                            </form>
                            {/* form */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;