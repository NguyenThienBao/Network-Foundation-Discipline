// import components
import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import About from "./About"
import Contact from "./Contact"

const Pages: React.FC = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={ <Home />}  />
                    <Route path="products/*" element={ <Products /> } />
                    <Route path="about" element={ <About /> } />
                    <Route path="contact" element={ <Contact /> } />
                </Routes>
            </BrowserRouter>
            
            <Footer />
        </>
    )
}

export default Pages