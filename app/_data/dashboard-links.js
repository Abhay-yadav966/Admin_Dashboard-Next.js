import { MdDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";

export const SidebarLinks = [
    {
        id:1,
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdDashboard />,
    },
    {
        id:2,
        title:"users",
        path:"/dashboard/users",
        icon:<ImUsers />,
    },
    {
        id:3,
        title:"products",
        path:"/dashboard/products",
        icon:<IoCartOutline />,
    },
    {
        id:4,
        title:"Transictions",
        path:"/dashboard/transictions",
        icon:<MdCurrencyRupee />,
    },
]