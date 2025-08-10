import { NavLink } from "react-router";
import { useMyContext } from "../../context/sidebar-context";
import { Button } from "antd"
import { crudRoutes, routesObj } from "../../routes/routes";
import { useState } from "react";

const SidebarComp = () => {

    const { showSidebar, setShowSidebar } = useMyContext()

    const [openA, setOpenA] = useState(false)


    return (
        <section className={`bg-white shadow-xl dark:bg-[#353535] ransition-colors md:right-0 fixed w-sidebar-width h-screen top-0 transition-discrete duration-500
             md:block ${showSidebar ? "right-0" : "-right-full"} `}>


            <Button className="md:!hidden" onClick={() => setShowSidebar((prv) => !prv)}>
                click

            </Button>

            <div className="pt-header-width p-5 mt-10 flex flex-col gap-3 pr-10">
                {routesObj.filter((route) => route.id !== 4).map((item) =>

                    <NavLink key={item.id} className={({ isActive }) => (
                        `${isActive && "bg-slate-300"} pr-5 bg-slate-50 p-2 rounded-md hover:bg-slate-200 cursor-pointer transition-colors duration-150`
                    )}
                        to={item.path}>{item.faName}</NavLink>
                )}

                <div onClick={() => setOpenA((prv) => (!prv))} className="pr-5 flex justify-between bg-slate-50 p-2 rounded-md hover:bg-slate-200 cursor-pointer
                 transition-colors duration-150">
                    <p>
                        Crud
                    </p>
                    <span>
                        @
                    </span>
                </div>

                <div className={`${openA ? "flex transition-all duration-500 flex-col gap-2" : "hidden"}`}>

                    {crudRoutes.map((item) =>
                        <NavLink key={item.id} className={({ isActive }) => (
                            `${isActive && "bg-slate-300"} pr-5 mx-2 bg-slate-100 p-2 rounded-md hover:bg-slate-200 cursor-pointer transition-colors duration-150`
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