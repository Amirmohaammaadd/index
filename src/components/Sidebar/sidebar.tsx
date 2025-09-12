import { NavLink } from "react-router";
import { useMyContext } from "../../context/sidebar-context";
import { Button } from "antd"
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import svgLogo from "../../assets/pics/2.png"

export const routesObj = [
    { id: 1, path: '/home', name: "Home", faName: "خانه", },
    { id: 2, path: '/products', name: "Products", faName: "محصولات", },
    { id: 3, path: '/test', name: "Test", faName: "تست", },
    { id: 4, path: '/search-products', name: "Products-srch", faName: "سرچ محصولات", },
]

export const crudRoutes = [
    { id: 1, path: '/crud/antd-crud', name: "antd-crud", faName: "Antd-CRUD" },
    { id: 2, path: '/crud/rhf-crud', name: "antd-crud", faName: "Rhf-CRUD" },
    { id: 3, path: '/crud/mixed-crud', name: "mixed-crud", faName: "Mixed-CRUD" },
]

const SidebarComp = () => {
    const { showSidebar, setShowSidebar } = useMyContext()
    const [openA, setOpenA] = useState(false)

    return (
        <section className={`bg-white shadow-xl dark:bg-[#353535] left-0 ransition-colors md:right-0 fixed w-sidebar-width h-screen top-0 transition-discrete duration-500
             md:block ${showSidebar ? "right-0" : "-right-full"} `}>

            <Button className="md:!hidden" onClick={() => setShowSidebar((prv) => !prv)}>
                click
            </Button>

            <div className="flex items-center justify-center h-[50px] mt-10">
                <img src={svgLogo} alt="None" className="w-[100px]" />
            </div>

            <div className="pt-header-width p-5 flex flex-col gap-3 pr-10">

                {routesObj.map((item) =>

                    <NavLink key={item.id} className={({ isActive }) => (
                        `${isActive ? "!bg-[#5c53f1] text-white" : "bg-slate-50 dark:bg-gray-600 dark:hover:bg-gray-800"} pr-5 p-2 rounded-md hover:bg-slate-200 cursor-pointer transition-colors duration-150`
                    )}
                        to={item.path}>{item.faName}</NavLink>
                )}

                <div onClick={() => setOpenA((prv) => (!prv))} className="pr-5 flex items-center justify-between dark:bg-gray-600 dark:hover:bg-gray-800 bg-slate-50 p-2 rounded-md hover:bg-slate-200 cursor-pointer
                 transition-colors duration-150">
                    <p>
                        Crud
                    </p>
                    <span>
                        <IoIosArrowForward size={20} className={`text-[#5c53f1] duration-200
                            ${openA && "rotate-90"}`} />
                    </span>
                </div>

                <div className={`${openA ? " flex transition-all duration-500 flex-col gap-2" : "hidden"}`}>
                    {crudRoutes.map((item) =>
                        <NavLink key={item.id} className={({ isActive }) => (
                            `${isActive ? "!bg-[#5c53f1] text-white" : "bg-slate-50 dark:bg-gray-600 dark:hover:bg-gray-800"} pr-5 p-2 rounded-md hover:bg-slate-200 cursor-pointer transition-colors duration-150`
                        )}
                            to={item.path}>
                            {item.faName}
                        </NavLink>
                    )}

                </div>
            </div>

        </section>

    );
}

export default SidebarComp;