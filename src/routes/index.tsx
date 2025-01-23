import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";
import Home from "../views/posts";
import Search from "../views/Search";
import { routes } from "../core/data/route";
import AuthenticatedWrapper from "../views/auth/AuthenticatedWrapper";
import Profile from "../views/profile/Profile";
import Videos from "../views/profile/Videos";
import Repost from "../views/profile/Repost";
import Liked from "../views/profile/Liked";
import CreateAccount from "../views/auth/CreateAccount";
import ChooseInterest from "../views/tag/ChooseInterest";
import Layout from "../component/Layout";
import CreateAccountSuccessPage from "../views/auth/CreateAccountSuccessPage";

const AppRoutes = () => {
    return (
        <Routes>

            {/* ==================== AUTH ROUTE  ======================= */}
            <Route path={routes.login} element={<Login />}> </Route>
            <Route path={routes.createAccount} element={<CreateAccount />}> </Route>
            <Route path={routes.createAccountSuccessfully} element={<CreateAccountSuccessPage />}> </Route>

            <Route path="" element={<AuthenticatedWrapper />}> 
                

                {/* ====================  Routes with sidebar layouts ==================== */}
                <Route path="" element={<Layout />}>
                    <Route path={routes.home} element={<Home />} />
                    <Route path={routes.search} element={<Search />} />
                    <Route path={routes.profile} element={<Profile />} >
                    <Route index element={<Navigate to="videos" replace />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="reposts" element={<Repost/>} />
                    <Route path="liked" element={<Liked/>} />
                </Route>
                </Route>

                {/* ==================== Routes with no sidebar ======================== */}
                <Route path={routes.interests} element={<ChooseInterest />} />
            </Route>

        </Routes>

    );
};

export default AppRoutes;
