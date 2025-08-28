import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/auth-context";

const PrivateRoutes = () => {

    const { isLoggedIn, isLoadingAuth } = useAuth();

    if (isLoadingAuth) return null

    return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
}

export default PrivateRoutes;