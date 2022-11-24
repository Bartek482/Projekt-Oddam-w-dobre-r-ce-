import React from "react";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>

                <Route path="/login" element={<Login />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;