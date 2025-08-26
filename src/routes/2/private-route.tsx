import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/auth-context";

const PrivateRoutes = () => {

    const { isLoggedIn } = useAuth();        

    return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
}

export default PrivateRoutes;