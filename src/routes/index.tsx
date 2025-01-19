import { Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";
import Home from "../views/posts"; 
import Search from "../views/Search";
import { routes } from "../core/data/route";
import AuthenticatedWrapper from "../views/auth/AuthenticatedWrapper"; 
import CreateAccount from "../views/auth/CreateAccount";

const AppRoutes = () => {
    return (
        <Routes>

            {/* ==================== AUTH ROUTE  ======================= */}
            <Route path={routes.login} element={<Login />}> </Route>
            <Route path={routes.createAccount} element={<CreateAccount />}> </Route>

            <Route path="" element={<AuthenticatedWrapper />}>
                <Route path={routes.home} element={<Home />}></Route>
                <Route path={routes.search} element={<Search />} />
            </Route>

        </Routes>

    );
};

export default AppRoutes;
