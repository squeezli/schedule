import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../css/Auth.css'
import '../css/Normalize.css'



export const AuthPage = () => {
    const message = useMessage()
    const auth = useContext(AuthContext)
    const { request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('api/user/create', 'POST', { ...form })
            message(data.message)
            console.log('Data', data)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('api/user/login', 'POST', { ...form })
            auth.login(data.token, data.id, data.rules)
            console.log('Data', data)
        } catch (e) { }
    }

    return (

            <div className='auth__block'>
                <span className='auth__title'>Авторизация</span>

                <div className='input__field'>
                    <label htmlFor='email'></label>
                    <input
                        type='text'
                        placeholder='Введите email'
                        id='email'
                        name='email'
                        value={form.email}
                        onChange={changeHandler}
                    />
                </div>

                <div className='input__field'>
                    <label htmlFor='password'></label><input
                        type='password'
                        placeholder='Введите пароль'
                        id='password'
                        name='password'
                        value={form.password}
                        onChange={changeHandler}
                    />

                </div>
                <button className='btn btn2' onClick={loginHandler}>Войти</button>
                <button className='btn btn1'  onClick={registerHandler}>Регистрация</button>
            </div>



      




    )

}