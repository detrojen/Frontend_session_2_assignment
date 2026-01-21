import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import type { TLayoutProps } from "../types/layoutPropsType";
import { Outlet } from "react-router-dom";

function Layout(){
    return <>
        <div className="bg-gray-200 min-h-dvh">
            <div className="block my-1">
                <Navbar ></Navbar>
            </div>
            {/* <div className="block sm:hidden my-1">
                <Sidebar></Sidebar>
            </div> */}
            <div className="px-2">
                <Outlet />
            </div>
        </div>
    </>
}

export default Layout