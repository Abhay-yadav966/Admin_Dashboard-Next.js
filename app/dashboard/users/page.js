import Image from "next/image";
import Logo from '../../_assets/Next.svg'

const page = () => {
  return (
    <div className="w-full px-4 min-h-full overflow-auto " >
        <div className="flex flex-col gap-5" >
          <button className="uppercase w-fit text-white text-sm bg-slate-500 px-2 py-1 rounded font-semibold" >Add New</button>
          <table className="w-full" >
            <thead>
              <tr>
                <th className="text-left text-white text-sm" >Name</th>
                <th className="text-left text-white text-sm" >Email</th>
                <th className="text-left text-white text-sm" >Created At</th>
                <th className="text-left text-white text-sm" >Role</th>
                <th className="text-left text-white text-sm" >Status</th>
                <th className="text-left text-white text-sm" >Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="flex items-center gap-2 pt-5" >
                  <Image src={Logo} width={30} />
                  <p className="text-white text-sm font-semibold" >Abhay</p>
                </td>
                <td className=" text-white text-sm font-semibold pt-5" >yadavabhay966@gmail.com</td>
                <td className=" text-white text-sm font-semibold pt-5" >24/05/2024</td>
                <td className=" text-white text-sm font-semibold pt-5" >Admin</td>
                <td className=" text-white text-sm font-semibold pt-5" >active</td>
                <td className=" text-white text-sm font-semibold pt-5" >
                  <button className="bg-blue-500 px-2 py-1 rounded mr-2" >View</button>
                  <button className="bg-red-600 px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default page;