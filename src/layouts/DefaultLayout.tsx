import React from "react";
import Navbar, { MenuItem } from "./navigation/Navbar";
import logo from "@/assets/images/logo.png"
import "@/styles/layouts/defaultlayout.scss"
import { Link } from "react-router-dom";

const menuItems:  MenuItem[] = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Order', link: '/order' },
];

interface DefaultLayoutProps {
    children: JSX.Element;
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
    return (
        <div className="default-layout grid-layout">
            <div className="grid-header"><Link to="/"><img className="logo" src={logo} /></Link></div>
            <div className="grid-navbar"><Navbar menuItems={menuItems} /></div>
            <div className="grid-content">{children}</div>
            <div className="grid-footer">Footer</div>
        </div>
    );
};
