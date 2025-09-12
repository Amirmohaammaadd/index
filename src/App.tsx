import { BrowserRouter } from "react-router-dom"
import { ContextWrapper } from "./context/sidebar-context"
import { ThemeContext } from "./context/theme-context"
// import { AppRouter } from "./routes/1/routes"
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context/auth-context"
import { SecondAppRouter } from "./routes/2/routes";
import { Provider } from 'react-redux'
import { store } from "./store/store";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // gcTime: 0
      }
    }
  })

  return (
    <BrowserRouter>

      <QueryClientProvider client={queryClient}>


        {/* ---- RTK ---- */}
        <Provider store={store}>


          <ThemeContext>
            <ContextWrapper>
              <AuthProvider>

                {/* way 1 - routing  */}
                {/* <AppRouter /> */}

                {/* way 2 - routing // better one */}
                <SecondAppRouter />

                <Toaster />

              </AuthProvider>
            </ContextWrapper>
          </ThemeContext>

        </Provider>
      </QueryClientProvider>

    </BrowserRouter>


  )
}

export default App
