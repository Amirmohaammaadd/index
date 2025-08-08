import { createContext, useContext, useState, type ReactNode } from "react";

type myContextProps = {
    showSidebar: boolean
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const myContext = createContext<myContextProps | null>(null)

export const ContextWrapper = ({ children }: { children: ReactNode }) => {

    const [showSidebar, setShowSidebar] = useState(false)

    return <myContext.Provider value={{
        showSidebar,
        setShowSidebar
    }}>
        {children}
    </myContext.Provider>
}

export const useMyContext = () => {
    const context = useContext(myContext)

    if (!context) {
        throw Error("myContext must be whitin a value")
    }
    return context
}