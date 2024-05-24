'use client'
import Image from "next/image"
import Logo from "../../_assets/Next.svg"
import {SidebarLinks} from '../../_data/dashboard-links'
import Link from "next/link"
import { usePathname } from "next/navigation"


const Sidebar = () => {

  const pathname = usePathname();

  return (
    <div className="h-full w-full border border-red-600 flex flex-col gap-5 p-5 " >
        {/* image and heading */}
        <div className="flex items-center gap-5" >
            <Image src={Logo} width={50} height={50}/>
            <h2 className="text-white font-bold text-lg" >Abhay Yadav</h2> 
        </div>

        <div>
          {/* heading */}
          <p className="uppercase text-white text-sm font-semibold" >users</p>

          {/* links */}
          <div className="pt-5 flex flex-col gap-4" >
            {
              SidebarLinks?.map((data) => (
                <Link href={data?.path} key={data?.id} >
                  <div className={`flex items-center gap-2 text-white text-lg font-medium px-4 py-2 rounded-lg hover:bg-[#2e374a] ${pathname === data?.path && "bg-[#2e374a]"}`} >
                    {/* icon */}
                    {data?.icon}
                    <p>{data?.title}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Sidebar