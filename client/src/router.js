import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from "./pages/UserPages/AuthPage"
import { CreatePage } from "./pages/UserPages/CreatePage"
import { CreateWeekPage } from "./pages/UserPages/CreateWeekPage"
import { UpdateWeekPage } from "./pages/UserPages/UpdateWeekPage.jsx"
import { GroopPage } from "./pages/UserPages/GroopPage"
import { MainPage } from "./pages/UserPages/MainPage"
import { GroopLoginPage } from './pages/GroopPages/GroopLoginPage'
import { ViewPage } from './pages/GroopPages/ViewPage'



export const useRoutes = (isAuthenticated, rules) => {

    console.log("sdasdas2", rules)
    if (isAuthenticated && rules === 'admin') {
        return (

            <Routes>
                <Route path="main/" element={<MainPage />} />
                <Route path="create/" element={<CreatePage />} />
                <Route path="groop/:login" element={<GroopPage />} />
                <Route path="groop/:login/new" element={<CreateWeekPage />} />
                <Route path="groop/:login/update" element={<UpdateWeekPage />} />

                <Route path="/*" element={<Navigate replace to="/main" />} />
            </Routes>

        )
    }
    if (isAuthenticated) {
        return (

            <Routes>
                <Route path="view/" element={<ViewPage />} />
                <Route path="/*" element={<Navigate replace to="/view" />} />
            </Routes>

        )
    }
    return (
        <Routes>
            <Route path="/userlogin" element={<AuthPage />} />
            <Route path="/" element={<GroopLoginPage />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}