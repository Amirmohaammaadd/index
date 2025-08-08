import { NavLink } from "react-router";
import { useMyContext } from "../../context/sidebar-context";
import { Button } from "antd"
import { routesObj } from "../../routes/routes";

const SidebarComp = () => {

    const { showSidebar, setShowSidebar } = useMyContext()

    return (
        <section className={`bg-white shadow-xl dark:bg-[#353535] ransition-colors md:right-0 fixed w-sidebar-width h-screen top-0 transition-discrete duration-500
             md:block ${showSidebar ? "right-0" : "-right-full"} `}>


            <Button className="md:!hidden" onClick={() => setShowSidebar((prv) => !prv)}>
                click

            </Button>

            <div className="pt-header-width p-5 mt-10 flex flex-col gap-5 pr-10">
                {routesObj.filter((route) => route.id !== 4).map((item) =>

                    <NavLink key={item.id} className={({ isActive }) => (
                        isActive ? "text-red-500" : "")}
                        to={item.path}>{item.faName}</NavLink>

                )}
            </div>

        </section>

    );
}

export default SidebarComp;