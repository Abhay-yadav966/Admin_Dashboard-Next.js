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

        console.log("data : ", data);        
    }

  return (
    <div>
        <form className="bg-[#4c4c4c] rounded-lg p-5 flex flex-col gap-8 "
            onSubmit={handleSubmit(Submit)}
        >

            <div className="w-full flex items-center justify-between gap-10" >
                {/* username */}
                <label className="w-[50%]" >
                    <input 
                        type="text"
                        placeholder={`${user ? "Enter your name" : "Enter the title"}`}
                        {...register(`${ user ? "name" : "title"}`, {required:true})}
                        className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full"
                    />

                    {/* error */}
                    {
                        user ? 
                                errors?.name && (
                                    <p className="text-sm text-white font-medium" >name is required</p>
                                ) : 
                                errors?.title && (
                                    <p className="text-sm text-white font-medium" >title is required</p>
                                )
                    }
                </label>

                {/* email // category*/}
                {
                    user ? (
                            <label className="w-[50%]" >
                                <input 
                                    type="email"
                                    placeholder="Enter your Email"
                                    {...register("email", {required:true})}
                                    className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full "
                                />

                                {
                                    errors?.email && (
                                        <p className="text-sm text-white font-medium" >email is required</p>
                                    )
                                }
                            </label>
                    ) : 
                    (
                        <label className="w-[50%]" >
                            <select
                                {...register("category", {required:true})}
                                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full cursor-pointer"
                            >
                                <option value="">Choose a Category</option>
                                <option value="kitchen">kitchen</option>
                                <option value="phone">Phone</option>
                                <option value="computer">Computer</option>
                            </select>

                            {/* error */}
                            {
                                errors?.category && (
                                    <p className="text-sm text-white font-medium" >category is required</p>
                                )
                            }
                        </label>
                    )
                }
            </div>

            <div className="w-full flex items-center justify-between gap-10 " >
                {/* Password */}
                <label className="w-[50%]" >
                    <input 
                        type={`${ user ? "password" : "text"}`} 
                        placeholder={` ${ user ? "Enter your Password" : "Enter the price"}`}
                        {...register(`${ user ? "password" : "price"}`, {required:true})}
                        className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full "
                    />

                    {/*error*/}
                    {
                        user ? errors?.password && (

                            <p className="text-sm text-white font-medium" >password is required</p>
                        ) : errors?.price && (
                            <p className="text-sm text-white font-medium" >price is required</p>
                        )
                    }
                </label>

                {/* Phone No. */}
                
                <label className="w-[50%]" >
                    <input 
                        type="text" 
                        placeholder={`${ user ? "Enter your Contact No." : "Enter the Stock"}`}
                        {...register(` ${ user ? "phone" : "stock"}`, {required:true})}
                        className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full"
                    />

                    {/* error */}
                    {
                        user ? errors?.phone && (
                            <p>contact no. required</p>
                        ) : 
                        errors?.stock && (
                            <p>stock is required</p>
                        )
                    }
                </label>
            </div>

            <div className="w-full flex items-center justify-between gap-10 " >
                {/* Admin DropDown // color */}
                {
                    user ? (
                            <label className="w-[50%]" >
                                <select
                                    {...register("isAdmin",{required:true})}
                                    className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full cursor-pointer"
                                >
                                    <option value="">isAdmin</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>

                                {/* error */}
                                {
                                    errors?.isAdmin && (
                                        <p className="text-sm text-white font-medium" >admin is required</p>
                                    )
                                }
                            </label>
                    ) : 
                    (
                        <label className="w-[50%]" >
                            <input 
                                type="text"
                                {...register("color", {required:true})}
                                placeholder="Enter the Color"
                                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full"
                            />

                            {
                                errors?.color && (
                                    <p className="text-sm text-white font-medium" >color is required</p>
                                )
                            }
                        </label>
                    )
                }

                {/* Active Dropdown // size */}

                {
                    user ? (
                        <label className="w-[50%]" >
                            <select
                                {...register("active", {required:true})}
                                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full cursor-pointer"
                            >
                                <option value="">isActive</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                            {
                                errors?.active && (
                                    <p className="text-sm text-white font-medium" >active is required</p>
                                )
                            }
                        </label>
                    ) : 
                    (
                        <label className="w-[50%]" >
                            <input 
                                type="text" 
                                {...register("size", {required:true})}
                                placeholder="Enter the size"
                                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full"
                            />

                            {
                                errors?.size && (
                                   <p className="text-sm text-white font-medium" >Size is required</p> 
                                )
                            }
                        </label>
                    )
                }
            </div>

            {/* address */}
            <label className="w-full" >
                <textarea
                    rows={5}
                    placeholder={`${ user ? "Enter your Address" : "Enter the Description"}`}
                    {...register(`${ user ? "address" : "description"}`, {required:true})}
                    className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg w-full"
                />

                {
                    user ? errors?.address && (
                        <p className="text-sm text-white font-medium" >address is required</p>
                    ) : 
                    errors?.description && (
                        <p className="text-sm text-white font-medium" >description is required</p>
                    )
                }
            </label>

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