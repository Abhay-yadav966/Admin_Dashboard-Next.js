"use client"

import { useForm } from "react-hook-form";

const page = () => {

    // form
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();


    // submit fn
    const submit = (data) => {
        console.log("The data : ", data);
    }

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#2c2c2c] flex items-center justify-center" >

        <div className=" h-fit  w-[30%] bg-[#4c4c4c] flex flex-col p-7" >

            {/* heading */}
            <h1 className="text-center font-semibold text-white text-3xl" >Login</h1>

            {/* form */}
            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5" >
                {/* email */}
                <label className="flex flex-col gap-2" >
                    <p className=" text-white text-sm font-semibold" >Email</p>
                    <input 
                        type="text"
                        {...register("email", {required:true})}
                        className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full "
                    />
                </label>

                {/* password */}
                <label className="flex flex-col gap-2" >
                    <p className=" text-white text-sm font-semibold" >Password</p>
                    <input 
                        type="password"
                        {...register("password", {required:true})}
                        className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full "
                    />
                </label>

                {/* button */}
                <button type="submit"  className="text-white font-semibold p-5 rounded-lg bg-[#016667]" >
                    login
                </button>
            </form>
        </div>
        
    </div>
  )
}

export default page;