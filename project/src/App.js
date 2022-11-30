import React from "react"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { Home } from "./components/Home"
import { Login } from "./components/Login"
import { WhoWeHelpFundations } from "./components/home components/WhoWeHelpFundations"


function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />}/>
                <Route path='/' element={<Home />}>
                </Route>

                <Route path="/login" element={<Login />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default App