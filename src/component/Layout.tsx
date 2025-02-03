import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {


    return (
        <>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 absolute top-0 left-0 z-40">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-[240px] h-screen transition-transform -translate-x-full lg:translate-x-0" aria-label="Sidebar">
                <div className="h-full bg-white dark:bg-darkColor ">
                    <Sidebar />
                </div>
            </aside>

            <div className=" lg:w-[calc(100%-322px)] w-full h-full lg:mx-auto mx-auto ml-auto lg:mr-10 mr-auto">
                <Outlet />
            </div> 

        </>
    );
}

export default Layout;