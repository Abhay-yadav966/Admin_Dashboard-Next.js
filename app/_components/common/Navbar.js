'use client'

import { MdOutlineMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {

  // fetching pathname
  const pathname = usePathname();

  const pathHeading = pathname.split('/').reverse()[0];

  return (
    <div className="py-3 px-5 flex items-center justify-between fixed w-[calc(100%-19%)] rounded-lg bg-[#4c4c4c]" >
        {/* heading */}
        <h1 className="font-semibold text-white uppercase text-sm" >{pathHeading}</h1>

        {/* options */}
        <div className="flex items-center gap-4" >
            {/* input field */}
            <div className="flex items-center gap-2 bg-[#2c2c2c] px-2 py-1 rounded-lg">
                <FaSearch className="text-white" />
                <input type="text" placeholder="Search" className=" bg-[#2c2c2c] text-white outline-none text-sm"/>
            </div>

            {/* buttons */}
            <div className="flex items-center gap-4 text-white " >
                <MdOutlineMessage/>
                <FaBell/>
                <FaGlobeAmericas/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;