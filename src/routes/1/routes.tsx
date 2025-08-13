import { useAuth } from "../../context/auth-context"
import { PriavateAppRouter } from "./private-routes"
import { PublicAppRouter } from "./public-routes"

export const AppRouter = () => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <PriavateAppRouter /> : <PublicAppRouter />
}


