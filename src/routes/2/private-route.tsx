import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/auth-context";

const PrivateRoutes = () => {

    const { isLoggedIn, isLoadingAuth } = useAuth();

    if (isLoadingAuth) return null

    return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
}

export default PrivateRoutes;


// ---------------------------------

// sample

// function ProtectRoute({ children }) {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(
//     function () {
//       if (!isAuthenticated) navigate('/');
//     },
//     [isAuthenticated, navigate]
//   );

//   return isAuthenticated ? children : null;
// }

// export default ProtectRoute;