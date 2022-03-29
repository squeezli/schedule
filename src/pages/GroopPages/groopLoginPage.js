import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useHttp } from '../../hooks/http.hook'

import '../css/Auth.css'

export const GroopLoginPage = () => {
    const auth = useContext(AuthContext)
  
    const { request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
  
        clearError()
    }, [error, clearError]);


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    const loginHandler = async () => {
        try {
            const data = await request('api/groop/login', 'POST', { ...form })
            auth.login(data.token, data.groopId)
            console.log('Data', data)
        } catch (e) { }
    }

    return (
        <div className="container">
            <div className="auth__block">
                <span className="auth__title">Авторизация</span>

                <div className="input__field">
                    <label htmlFor="email">login: </label>
                    <input
                        type="text"
                        placeholder="Введите login"
                        id="login"
                        name="login"
                        value={form.login}
                        onChange={changeHandler}
                    />
                </div>

                <div className="input__field">
                    <label htmlFor="password">Пароль: <input
                        type="password"
                        placeholder="Введите пароль"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={changeHandler}
                    /></label>
                    
                </div>
                <button className="btn " onClick={loginHandler}>Войти</button>
                

            </div>
        </div>
    )

}