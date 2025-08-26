import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const navigate = useNavigate();

    const login = (token: string) => {
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/home", { replace: true });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/", { replace: true });
    };

    return (
        <AuthContext.Provider value={{ token, isLoggedIn: !!token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
