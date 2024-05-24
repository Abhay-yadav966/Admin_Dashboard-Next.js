import Sidebar from "../_components/common/Sidebar";
import Navbar from "../_components/common/Navbar";

const layout = ({children}) => {
    return(
        <div className="flex w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#4c4c4c] border-4 border-green-600" >
            <div className="w-1/5 " >
                <Sidebar/>
            </div>
            <div className="bg-[#2c2c2c] w-full h-full overflow-y-auto flex flex-col items-center pt-4 " >
                <Navbar/>
                <div className="w-full overflow-y-auto mt-16 h-full " >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout;