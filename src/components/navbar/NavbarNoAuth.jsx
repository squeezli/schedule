import React from "react"
import '../normalize.css';
import './navbar.css';

export const NavbarNoAuth = () => {
  
    return (
        <section className="navbar">
            <div className="">
                <nav className="nav">
                    <div className="logo">Расписание онлайн</div>
                    <ul className="menu-nav">
                        <li className="menu__item"><a href="/">Студент</a></li>
                        <li className="menu__item"><a href="/userlogin">Администратор</a></li>
                    </ul>
                </nav>
            </div>
        </section>
        
    )
}