import React from "react";
import Navbar from "../NavBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";


function Layout(){
    let {isDark}=useTheme();
    return(
        <div className={isDark ? 'bg-dbg' : 'bg-white' }>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;