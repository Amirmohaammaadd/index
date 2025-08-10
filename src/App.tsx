import { BrowserRouter } from "react-router-dom"
import ContainerComp from "./components/Container/Container"
import HeaderComp from "./components/Header/header"
import SidebarComp from "./components/Sidebar/sidebar"
import { ContextWrapper } from "./context/sidebar-context"
import { ThemeContext } from "./context/theme-context"
import { AppRouter } from "./routes/routes"
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <BrowserRouter>

      <ThemeContext>
        <ContextWrapper>

          <ContainerComp>
            <AppRouter />
            <HeaderComp />
            <SidebarComp />
          </ContainerComp>

          <Toaster />

        </ContextWrapper>
      </ThemeContext>

    </BrowserRouter>


  )
}

export default App
