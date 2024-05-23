import Image from 'next/image'
import Logo from '../../_assets/Laptop.png'


const productPage = () => {
  return (
    <div className="px-4 overflow-auto min-h-full w-full" >
      <div className="flex flex-col gap-5" >
        {/* button */}
        <button className="uppercase w-fit text-white text-sm bg-slate-500 px-2 py-1 rounded font-semibold" >
          Add New
        </button>

        {/* table */}
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-white text-sm" >Title</th>
              <th className="text-left text-white text-sm" >Description</th>
              <th className="text-left text-white text-sm" >Price</th>
              <th className="text-left text-white text-sm" >Created At</th>
              <th className="text-left text-white text-sm" >Stock</th>
              <th className="text-left text-white text-sm" >Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='flex items-center gap-2 pt-5'>
                <Image src={Logo} width={40} height={40} className='rounded-full' />
                <p className='text-white text-sm font-semibold' >Laptop</p>
              </td>
              <td className='text-white text-sm font-semibold pt-6 w-[35%]' >A laptop is a small, portable personal computer (PC) that's designed to be used on one's lap.</td>
              <td className='text-white text-sm font-semibold pt-1' >$999</td>
              <td className='text-white text-sm font-semibold pt-1' >21/01/2024</td>
              <td className='text-white text-sm font-semibold pt-1' >available</td>
              <td className='text-white text-sm font-semibold pt-1' >
                <button className='bg-blue-500 px-2 py-1 rounded mr-2' >View</button>
                <button className='bg-red-600 px-2 py-1 rounded' >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default productPage;