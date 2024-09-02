import React from 'react';
import { NavLink } from 'react-router-dom';

export interface MenuItem {
    id: number;
    label: string;
    link: string
}

interface NavbarProps {
    className?: string;
    menuItems: MenuItem[];
}

export default function Navbar({className, menuItems} : NavbarProps) {
    return (
        <nav className={className}>
            <h3 className='header'>Menu</h3>
            <ul className='links'>
                {menuItems.map((menuItem) => (
                    <li key={`link-${menuItem.id}`}>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "inactive-link")} to={menuItem.link}>
                            {menuItem.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
