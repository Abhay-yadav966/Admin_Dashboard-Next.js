import Sidebar from "../_components/common/Sidebar";

const layout = ({children}) => {
    return(
        <div className="flex w-screen h-screen overflow-hidden bg-[#4c4c4c] border-4 border-green-600 p-10" >
            <Sidebar/>
            {children}
        </div>
    )
}

export default layout;