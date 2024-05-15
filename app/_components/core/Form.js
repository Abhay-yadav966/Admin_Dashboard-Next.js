"use client"
import { useForm } from "react-hook-form";

const Form = ({user}) => {

    // use form hook
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    // submit fn
    const Submit = (data) => {
        console.log("On submit -> ",data)
    }

  return (
    <div>
        <form className="bg-[#4c4c4c] rounded-lg p-5 flex flex-col gap-8 "
            onSubmit={handleSubmit(Submit)}
        >

            <div className="w-full flex items-center justify-between gap-10" >
                {/* username */}
                <input 
                    type="text"
                    placeholder={`${user ? "Enter your name" : "Enter the title"}`}
                    {...register(`${ user ? "name" : "title"}`, {required:true})}
                    className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%]"
                />

                {/* email // category*/}
                {
                    user ? (
                            <input 
                                type="email"
                                placeholder="Enter your Email"
                                {...register("email", {required:true})}
                                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%] "
                            />
                    ) : 
                    (
                        <select
                            {...register("category", {required:true})}
                            className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%] cursor-pointer"
                        >
                            <option value="">Choose a Category</option>
                            <option value="kitchen">kitchen</option>
                            <option value="phone">Phone</option>
                            <option value="computer">Computer</option>
                        </select>
                    )
                }
            </div>

            <div className="w-full flex items-center justify-between gap-10 " >
                {/* Password */}
                <input 
                    type={`${ user ? "password" : "text"}`} 
                    placeholder={` ${ user ? "Enter your Password" : "Enter the price"}`}
                    {...register(`${ user ? "password" : "price"}`, {required:true})}
                    className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%] "
                />

                {/* Phone No. */}
                <input 
                    type="text" 
                    placeholder={`${ user ? "Enter your Phone No." : "Enter the Stock"}`}
                    {...register(` ${ user ? "phone" : "stock"}`, {required:true})}
                    className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%] "
                />
            </div>

            <div className="w-full flex items-center justify-between gap-10 " >
                {/* Admin DropDown // color */}
                {
                    user ? (
                            <select
                                {...register("isAdmin",{required:true})}
                                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%] cursor-pointer"
                            >
                                <option value="true">isAdmin</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                    ) : 
                    (
                        <input 
                            type="text"
                            {...register("color", {required:true})}
                            placeholder="Enter the Color"
                            className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%]"
                        />
                    )
                }

                {/* Active Dropdown // size */}

                {
                    user ? (
                        <select
                            {...register("active", {required:true})}
                            className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%] cursor-pointer"
                        >
                            <option value="">isActive</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    ) : 
                    (
                        <input 
                            type="text" 
                            {...register("size", {required:true})}
                            placeholder="Enter the size"
                            className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-[50%]"
                        />
                    )
                }
            </div>

            {/* address */}
            <textarea
                rows={5}
                placeholder={`${ user ? "Enter your Address" : "Enter the Description"}`}
                {...register(`${ user ? "address" : "description"}`, {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
            />

            {/* button */}
            <button 
                className="text-white font-semibold p-5 rounded-lg bg-[#016667]"
                type="submit"
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form;