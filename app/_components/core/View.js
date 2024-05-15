'use client'
import Image from "next/image";
import userLogo from '../../_assets/user.png'
import { useForm } from "react-hook-form";


const View = () => {
  
    // react form
    const {
      register,
      handleSubmit,
      formState:{errors}
    } = useForm();

    // update fn
    const update = (data) => {
      console.log("Updated data : ", data)
    }

  return (
    <div className="flex gap-12 " >
        {/* details */}
        <div className="bg-[#4c4c4c] w-fit p-5 rounded-xl flex flex-col gap-3 h-fit" >
            <Image src={userLogo} width={250} />
            <p className="text-white text-sm font-semibold text-center" >Abhay</p>
        </div>
        
        {/* form */}
        <form onSubmit={handleSubmit(update)} className="bg-[#4c4c4c] p-5 rounded-xl w-full flex flex-col gap-3 " >
            
            {/* name */}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold" >username</p>
              <input 
                type="text"
                {...register("name", {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* email */}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >email</p>
              <input 
                type="text" 
                {...register("email", {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* password */}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >password</p>
              <input 
                type="text"
                {...register("password", {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* phone */}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >Contact No.</p>
              <input 
                type="text"
                {...register("phone", {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* address */}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >Address</p>
              <textarea
                rows={5}
                {...register("address", {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* admin dropdown */}
            <label>
              <p className="uppercase text-white text-sm font-semibold " >Is Admin</p>
              <select
                {...register("isAdmin", {required:true})}
                className="w-full p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>

            {/* active dropdown */}
            <label>
              <p className="uppercase text-white text-sm font-semibold" >Is Active</p>
              <select
                {...register("active", {required:true})}
                className="w-full p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              >
                <option value="">Active</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            {/* update button */}
            <button className="text-white font-semibold p-5 rounded-lg bg-[#016667]" type="submit" >
              Update
            </button>
        </form>
    </div>
  )
}

export default View;