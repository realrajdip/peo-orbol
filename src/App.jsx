import React from 'react'
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Service from "./pages/Service.jsx";
import Theartical from "./pages/Theartical.jsx";
import BusinessInsight from './pages/BusinessInsight.jsx'
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/theartical" element={<Theartical />} />
          <Route path="/service/businessInsight" element={<BusinessInsight />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App