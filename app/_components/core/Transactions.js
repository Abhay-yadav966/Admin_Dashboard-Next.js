
import Image from "next/image";
import nextLogo from "../../_assets/Next.svg"



const Transactions = () => {
  return (
    <div className="p-5 bg-[#4c4c4c] rounded-lg flex flex-col gap-5" >
        {/* heading */}
        <h1 className="uppercase text-white text-base font-semibold ">Latest Transactions</h1>

        {/* table */}
        <table>
          <thead>
            <tr>
              <th className="text-left text-white text-sm" >NAME</th>
              <th className="text-left text-white text-sm" >STATUS</th>
              <th className="text-left text-white text-sm" >DATE</th>
              <th className="text-left text-white text-sm" >AMOUNT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="flex items-center gap-2 pt-5" >
                <Image src={nextLogo} width={30} height={30}  />
                <p className="text-white text-sm font-semibold" >Abhay</p>
              </td>
              <td className="pt-5 text-white text-sm font-semibold" > <span className="bg-yellow-700 p-1 rounded" >PENDING</span></td>
              <td className="pt-5 text-white text-sm font-semibold " >24/05/24</td>
              <td className="pt-5 text-white text-sm font-semibold " >$1000</td>
            </tr>

            <tr>
              <td className="flex items-center gap-2 pt-5" >
                <Image src={nextLogo} width={30} height={30}  />
                <p className="text-white text-sm font-semibold" >Nikhil</p>
              </td>
              <td className="pt-5 text-white text-sm font-semibold " > <span className="bg-blue-400 p-1 rounded" >Done</span></td>
              <td className="pt-5 text-white text-sm font-semibold " >12/05/24</td>
              <td className="pt-5 text-white text-sm font-semibold " >$1500</td>
            </tr>

            <tr>
              <td className="flex items-center gap-2 pt-5" >
                <Image src={nextLogo} width={30} height={30}  />
                <p className="text-white text-sm font-semibold" >Jai</p>
              </td>
              <td className="pt-5 text-white text-sm font-semibold " > <span className="p-1 bg-red-400 rounded" >Cenceled</span></td>
              <td className="pt-5 text-white text-sm font-semibold " >01/05/24</td>
              <td className="pt-5 text-white text-sm font-semibold " >$2500</td>
            </tr>

            <tr>
              <td className="flex items-center gap-2 pt-5" >
                <Image src={nextLogo} width={30} height={30}  />
                <p className="text-white text-sm font-semibold" >Prateek</p>
              </td>
              <td className="pt-5 text-white text-sm font-semibold " > <span className="bg-yellow-700 p-1 rounded" >PENDING</span></td>
              <td className="pt-5 text-white text-sm font-semibold " >25/05/24</td>
              <td className="pt-5 text-white text-sm font-semibold " >$5000</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Transactions;