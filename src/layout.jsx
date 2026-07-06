import React from "react";
import Header from "./componets/header";
import Footer from "./componets/footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/> 
        <Footer/>    
        </>
    )
}
export default Layout