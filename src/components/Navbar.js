// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Star, User, Phone, Info } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const NavItem = ({ to, icon: Icon, label }) => (
        <Link
            to={to}
            className={`flex flex-col items-center justify-center px-4 py-2 space-y-1 ${isActive(to)
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-blue-500 transition-colors'
                }`}
        >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
        </Link>
    );

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-lg">
            <div className="max-w-lg mx-auto">
                <div className="flex justify-around items-center">
                    <NavItem to="/" icon={Home} label="Home" />
                    <NavItem to="/search" icon={Search} label="Search" />
                    <NavItem to="/favorites" icon={Star} label="Favorites" />
                    <NavItem to="/profile" icon={Info} label="About" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;