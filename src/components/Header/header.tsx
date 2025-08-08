import { Button } from "antd";
import { useMyContext } from "../../context/sidebar-context";
import { useThemeContext } from "../../context/theme-context";

const HeaderComp = () => {

    const { setShowSidebar } = useMyContext()

    const { toggleTheme } = useThemeContext()


    return (
        <>
            <section className='fixed top-0 left-0 h-header-width w-full dark:bg-[#212121] transition-colors duration-300 md:pr-sidebar-width bg-red-500'>
                header


                <Button className="md:!hidden" onClick={() => setShowSidebar((prv) => !prv)}>
                    click
                </Button>

                <div className="flex">

                    <Button onClick={toggleTheme} className="mr-auto block">
                        change Theme
                    </Button>
                </div>

            </section>
        </>);
}

export default HeaderComp;