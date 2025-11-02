import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../../Pages/Login/Login.tsx';
import Header from './Header.tsx';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const auth = useSelector((state: any) => state.auth.isAuthenticated);

    console.log("token - " + localStorage.getItem("token"));
    console.log("auth - " + auth);
    //if(!auth ){return <Login/>}
    return (
        <>
            {auth ?
                <div className="min-h-screen flex flex-col bg-gray-50">
                    <Header />
                    <main>{children}</main>
                </div>
                :
                <Login />
            }
        </>

    );
}


export default Layout;
