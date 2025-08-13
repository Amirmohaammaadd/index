import type { ReactNode } from "react";
import { useThemeContext } from "../../context/theme-context";
import HeaderComp from "../Header/header";
import SidebarComp from "../Sidebar/sidebar";

const ContainerComp = ({ children }: { children: ReactNode }) => {

    const { theme } = useThemeContext()

    return (
        <main className={theme}>
            <div className='dark:bg-[#121212] bg-slate-50 ransition-colors duration-300 dark:text-white fixed top-0 left-0 w-full h-screen overflow-y-auto md:pr-sidebar-width pt-header-width'>
                {children}
                <HeaderComp />
                <SidebarComp />
            </div>
        </main>
    );
}

export default ContainerComp;