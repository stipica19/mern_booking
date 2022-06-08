import "./App.css";
import "./utilities.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect } from "react";
import { setCurrentUser } from "./actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import Register from "./components/Register";
import { Event } from "./components/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pocetna" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
