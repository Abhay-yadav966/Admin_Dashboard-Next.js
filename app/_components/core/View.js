'use client'
import Image from "next/image";
import userLogo from '../../_assets/user.png'
import { useForm } from "react-hook-form";


const View = ({userView}) => {
  
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
            
            {/* name // title */}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold" >{ userView ? "username" : "title"}</p>
              <input 
                type="text"
                {...register(`${ userView ? "name" : "title"}`, {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* email // price*/}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >{ userView ? "email" : "price"}</p>
              <input 
                type="text" 
                {...register(`${ userView ? "email" : "price"}`, {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* password // stock*/}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >{ userView ? "password" : "stock"}</p>
              <input 
                type={ userView ? "password" : "text"}
                {...register(`${ userView ? "password" : "stock"}`, {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* phone // Color */}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >{ userView ? "Contact No." : "Color"}</p>
              <input 
                type="text"
                {...register(`${ userView ? "phone" : "color"}`, {required:true})}
                className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              />
            </label>

            {/* address // size*/}
            <label className="flex flex-col gap-2" >
              <p className="uppercase text-white text-sm font-semibold " >{ userView ? "Address" : "size"}</p>
              
              {
                userView ? (
                            <textarea
                              rows={5}
                              {...register("address", {required:true})}
                              className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
                            />
                ) : 
                (
                  <input 
                    type="text"
                    {...register("size", {required:true})}
                    className="p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
                  />
                )
              }
            </label>

            {/* admin dropdown // category dropdown*/}
            <label>
              <p className="uppercase text-white text-sm font-semibold " >{ userView ? "Is Admin" : "category"}</p>
              <select
                {...register(`${ userView ? "isAdmin" : "category"}`, {required:true})}
                className="w-full p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
              >
                <option value={` ${ userView ? "true" : "kitchen"}`}>{ userView ? "Yes" : "kitchen"}</option>
                <option value={` ${ userView ? "false" : "computer"}`} >{ userView ? "No" : "Computer"} </option>
              </select>
            </label>

            {/* active dropdown // description*/}
            <label>
              <p className="uppercase text-white text-sm font-semibold" >{ userView ? "Is Active" : "Description" }</p>

              {
                userView ? (
                <select
                  {...register("active", {required:true})}
                  className="w-full p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
                >
                  <option value="">Active</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                ) : (
                  <textarea 
                    rows={4}
                    {...register("description", {required:true})}
                    className="w-full p-3 text-[#9CA3AF] font-semibold outline-none bg-[#2c2c2c] rounded-lg"
                  />
                )
              }
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