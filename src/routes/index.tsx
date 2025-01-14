import { Route, Routes } from "react-router-dom";
import Login from "../views/auth/login";
import Home from "../views/Index";
import Layout from "../component/Layout";
import Search from "../views/Search";


const AppRoutes = () => {
    return (
        <Routes>

            {/* ==================== AUTH ROUTE  ======================= */}
            <Route path="/login" element={<Login />}> </Route>

            <Route path="" element={<Layout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/search" element={<Search />} />
            </Route>

        </Routes>

    );
};

export default AppRoutes;
