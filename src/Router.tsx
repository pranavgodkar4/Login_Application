import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import UserLogin from "./Pages/Login/UserLogin";
import SignUp from "./Pages/Login/SignUp";
import DashBoard from "./Pages/Home/DashBoard";
import Login from "./Pages/Login/Login";

 
export const AppRoute:React.FC = () => {
    const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);
    return(
        <Routes>
            <Route path="/" element={isAuthenticated ? <HomePage/> : <Navigate to="/Login" />}/>
            <Route 
             path="/Home" 
             element={<HomePage/> }/>
             <Route 
             path="/Dashboard" 
             
             element={<DashBoard/> }/>
             <Route 
             path="/Login"
             element={<UserLogin/>}/>
             <Route
             path="/register"
             element={<SignUp/>}/>
        </Routes>
    )
}