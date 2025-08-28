import { useAuth } from "../../context/auth-context"
import { PriavateAppRouter } from "./private-routes"
import { PublicAppRouter } from "./public-routes"

export const AppRouter = () => {
    const { isLoggedIn, isLoadingAuth } = useAuth();

    if (isLoadingAuth) return null

    return isLoggedIn ? <PriavateAppRouter /> : <PublicAppRouter />
}


