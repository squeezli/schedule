import React,{useContext} from "react"
import {  useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import '../../pages/css/Normalize.css';
import './navbar.css';



export const Navbar = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const logoutHandler = e => {
        e.preventDefault()
        auth.logout()
        navigate('/')
    }
    return (
        <section className="navbar">
            <div className="">
                <nav className="nav">
                    <h1 className="logo"> <a href="/">Расписание онлайн</a></h1>
                    <ul className="menu-nav">
                        <li className="menu__item"></li>
                        <li className="menu__item"><a href="/" onClick={logoutHandler}>Выход</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}