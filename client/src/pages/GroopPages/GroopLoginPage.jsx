import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import '../css/Auth.css'

export const GroopLoginPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
    });

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    const loginHandler = async () => {
        try {
            const data = await request('api/groop/login', 'POST', { ...form })
            auth.login(data.token, data.id)
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
                        placeholder='Введите login'
                        id='login'
                        name='login'
                        value={form.login}
                        onChange={changeHandler}
                    />
                </div>

                <div className='input__field'>
                    <label htmlFor='password'></label>
                    <input
                        type='password'
                        placeholder='Введите пароль'
                        id='password'
                        name='password'
                        value={form.password}
                        onChange={changeHandler}
                    />
                </div>
                <button className='btn ' onClick={loginHandler}>Войти</button>


            </div>
    )

}