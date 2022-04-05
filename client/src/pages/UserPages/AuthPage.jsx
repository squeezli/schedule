import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useHttp } from '../../hooks/http.hook'
import '../css/Auth.css'
import '../css/Normalize.css'

export const AuthPage = () => {
    
    const auth = useContext(AuthContext)    
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {

        clearError()
    }, [error, clearError]);


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('api/user/create', 'POST', { ...form })

            console.log('Data', data)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('api/user/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
            console.log('Data', data)
        } catch (e) { }
    }

 

    return (
        <div className="container">
           
               <div className="auth__block">
                <span className="auth__title">Авторизация</span>
            
                <div className="input__field">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        placeholder="Введите email"
                        id="email"
                        name="email"
                        value={form.email}
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
                <button className="btn " onClick={registerHandler}>Регистрация</button>
            </div> 
            
        </div>
    )

}