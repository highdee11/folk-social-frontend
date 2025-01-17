import { Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";
import Home from "../views/Index";
import Layout from "../component/Layout";
import Search from "../views/Search";
import { routes } from "../core/data/route";
import AuthenticatedView from "../views/auth/AuthenticatedView";


const AppRoutes = () => {
    return (
        <Routes>

            {/* ==================== AUTH ROUTE  ======================= */}
            <Route path={routes.login} element={<Login />}> </Route>

            <Route path="" element={<AuthenticatedView />}>
                <Route path={routes.home} element={<Home />}></Route>
                <Route path={routes.search} element={<Search />} />
            </Route>

        </Routes>

    );
};

export default AppRoutes;
