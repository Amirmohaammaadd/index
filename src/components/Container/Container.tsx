import type { ReactNode } from "react";
import { useThemeContext } from "../../context/theme-context";

const ContainerComp = ({ children }: { children: ReactNode }) => {

    const { theme } = useThemeContext()

    return (
        <main className={theme}>
            {children}
        </main>
    );
}

export default ContainerComp;