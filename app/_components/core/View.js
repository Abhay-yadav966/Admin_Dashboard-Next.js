'use client'
import Image from "next/image";
import userLogo from '../../_assets/user.png'
import { useForm } from "react-hook-form";


const View = () => {
  
    // react form
    const {

    } = useForm();

  return (
    <div>
        <Image src={userLogo} width={300} />
        
        {/* form */}
        
        <form>

        </form>
    </div>
  )
}

export default View;