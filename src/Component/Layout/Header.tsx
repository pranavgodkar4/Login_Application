import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import img from '../../assets/Logo2.jpg';
import { logout } from '../../Store/Auth/AuthReducer'

const Header: React.FC = () => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logout())
        // setIsAuthenticated(false);
        // navigate("/login");
    };
    return (
        <>
            {/* Header / Navbar */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo + App name */}
                    <div className="flex items-center gap-2">
                        <img
                            src={img}// your logo path (replace if needed)
                            alt="App Logo"
                            className="w-8 h-8"
                        />
                        <span className="text-xl font-bold text-blue-600">MyApp</span>
                    </div>

                    {/* Navigation Links */}
                    {isAuthenticated && (
                        <nav className="flex items-center gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-semibold text-blue-600" : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-semibold text-blue-600" : ""
                                    }`
                                }
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/Dashboard"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-semibold text-blue-600" : ""
                                    }`
                                }
                            >
                                Dashboard
                            </NavLink>

                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="ml-4 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition"
                            >
                                Logout
                            </button>
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;
