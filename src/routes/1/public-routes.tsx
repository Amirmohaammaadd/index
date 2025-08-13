import { Route, Routes } from "react-router-dom"
import LoginPage from "../../pages/login"

export const PublicAppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<div className="bg-slate-200 flex justify-center items-center text-3xl w-full h-screen">404 Not Found</div>} />
        </Routes>
    )
}