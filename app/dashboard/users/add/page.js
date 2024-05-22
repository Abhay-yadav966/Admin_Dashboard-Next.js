'use client'
import { useForm } from "react-hook-form";

const addUserPage = () => {

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

  return (
    <div className="border border-red-50 px-5 overflow-auto min-h-full w-full" >
        <form className="" >
            {/* username */}
            <input 
                type="text"
                placeholder="Enter your name"
                {...register("name", {required:true})}
            />

            {/* email */}
            <input 
                type="email"
                placeholder="Enter your Email"
                {...register("email", {required:true})}
            />

            {/* Password */}
            <input 
                type="password" 
                placeholder="Enter your Password"
                {...register("password", {required:true})}
            />

            {/* Phone No. */}
            <input 
                type="text" 
                placeholder="Enter your Phone No."
                {...register("phone", {required:true})}
            />

            {/* Admin DropDown */}
            <select
                {...register("isAdmin",{required:true})}
            >
                <option value="true">isAdmin</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>

            {/* Active Dropdown */}
            <select
                {...register("active", {required:true})}
            >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>

            {/* address */}
            <input 
                type="text"
                placeholder="Enter your Address"
                {...register("address", {required:true})}
            />

            {/* button */}
            <button 
                className=""
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default addUserPage;