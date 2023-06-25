import Navbar from './Navbar/Navbar'
import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <div className="content-container">
                <Navbar />
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default RootLayout;