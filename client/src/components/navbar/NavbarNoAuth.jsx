import React from 'react'
import '../normalize.css';
import './navbar.css';

export const NavbarNoAuth = () => {
  
    return (
        <section className='navbar'>
            <div className=''>
                <nav className='nav'>
                    <h1 className='logo'>Расписание онлайн</h1>
                    <ul className='menu-nav'>
                        <li className='menu__item'><a href='/'>Студент</a></li>
                        <li className='menu__item'><a href='/userlogin'>Администратор</a></li>
                    </ul>
                </nav>
            </div>
        </section>
        
    )
}