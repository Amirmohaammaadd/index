import { Button, Switch } from "antd";
import { useMyContext } from "../../context/sidebar-context";
import { useThemeContext } from "../../context/theme-context";
import { getPersianDateTime } from "../../utils/getTime";
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../context/auth-context";

const HeaderComp = () => {
    const { setShowSidebar } = useMyContext()
    const { toggleTheme } = useThemeContext()
    const {logout} = useAuth()

    return (
        <section className='fixed top-0 left-0 h-header-width w-full dark:bg-[#212121] transition-colors duration-300 md:pr-sidebar-width bg-slate-200'>

            <div className="flex justify-between mx-3 items-center h-full">
                <span className="dark:text-white text-sm text-slate-800" >
                    {getPersianDateTime()}
                </span>

                <Button className="md:!hidden" onClick={() => setShowSidebar((prv) => !prv)}>
                    click
                </Button>

                <div className="flex gap-5 items-center">
                    <span onClick={logout}><FaUserAlt size={20} className="text-blue-700"/></span>

                    <Switch
                        checkedChildren={<FaSun size={15} className="mt-1" />}
                        unCheckedChildren={<FaMoon size={14} />}
                        defaultChecked
                        onChange={toggleTheme}
                    />
                </div>
            </div>

        </section>
    );
}

export default HeaderComp;