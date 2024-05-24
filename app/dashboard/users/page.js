import Image from "next/image";
import Logo from '../../_assets/Next.svg'

const page = () => {
  return (
    <div className="border border-yellow-400 w-full px-4 min-h-full overflow-auto " >
        <div>
          <button className="uppercase text-white text-sm bg-slate-500 px-2 py-1 rounded font-semibold" >Add New</button>
          <table>
            <thead>
              <tr>
                <td className="text-left text-white text-sm" >Name</td>
                <td className="text-left text-white text-sm" >Email</td>
                <td className="text-left text-white text-sm" >Created At</td>
                <td className="text-left text-white text-sm" >Role</td>
                <td className="text-left text-white text-sm" >Status</td>
                <td className="text-left text-white text-sm" >Action</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="flex items-center gap-2 pt-5" >
                  <Image src={Logo} width={30} />
                  <p className="text-white text-sm font-semibold" >Abhay</p>
                </td>
                <td className="text-white text-sm font-semibold pt-5 " >yadavabhay966@gmail.com</td>
                <td className="text-white text-sm font-semibold pt-5 " >24/05/2024</td>
                <td className="text-white text-sm font-semibold pt-5 " >Admin</td>
                <td className="text-white text-sm font-semibold pt-5 " >active</td>
                <td className="flex " >
                  <button>View</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default page;