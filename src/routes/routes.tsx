import {  Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home"
import TestPage from "../pages/Test"
import ProductsPage from "../pages/Products"
import AntdCrudPage from "../pages/Antd-Crud"
import RhfCrudPage from "../pages/Rhf-Crud"
import MixedCrudPage from "../pages/Mixed-Crud"

export const routesObj = [
    { id: 1, path: '/', name: "Home", faName: "حانه", component: <HomePage /> },
    { id: 2, path: '/products', name: "Products", faName: "محصولات", component: <ProductsPage /> },
    { id: 3, path: '/test', name: "Test", faName: "تست", component: <TestPage /> },
    { id: 4, path: '*', name: "Notfound", faName: "Notfound", component: <div className="flex items-center justify-center h-full text-3xl pb-10">404 Notfound</div> },
]

export const crudRoutes = [
    { id: 5, path: '/crud/antd-crud', name: "antd-crud", faName: "Antd-CRUD", component: <AntdCrudPage /> },
    { id: 6, path: '/crud/rhf-crud', name: "antd-crud", faName: "Rhf-CRUD", component: <RhfCrudPage /> },
    { id: 7, path: '/crud/mixed-crud', name: "mixed-crud", faName: "Mixed-CRUD", component: <MixedCrudPage /> },
]

export const AppRouter = () => {
    return <div className='dark:bg-[#121212] bg-slate-50 ransition-colors duration-300 dark:text-white fixed top-0 left-0 w-full h-screen overflow-y-auto md:pr-sidebar-width pt-header-width'>
        <Routes>

            {routesObj.map((item) =>
                <Route path={item.path} key={item.id} element={item.component} />
            )}

            <Route path="/crud">
                {crudRoutes.map((item) =>
                    <Route key={item.id} path={item.path} element={item.component} />
                )}
            </Route>

        </Routes>
    </div>
}