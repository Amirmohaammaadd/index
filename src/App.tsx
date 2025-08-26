import { BrowserRouter } from "react-router-dom"
import { ContextWrapper } from "./context/sidebar-context"
import { ThemeContext } from "./context/theme-context"
// import { AppRouter } from "./routes/1/routes"
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context/auth-context"
import { SecondAppRouter } from "./routes/2/routes";

function App() {

  return (
    <BrowserRouter>

      <ThemeContext>
        <ContextWrapper>
          <AuthProvider>

            {/* way 1 - routing  */}
            {/* <AppRouter /> */}

            {/* way 2 - routing  */}
            <SecondAppRouter />

            <Toaster />

          </AuthProvider>
        </ContextWrapper>
      </ThemeContext>

    </BrowserRouter>


  )
}

export default App
