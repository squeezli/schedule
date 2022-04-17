import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useMessage } from '../../hooks/message.hook'

export const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const { request, error, clearError } = useHttp()
    const message = useMessage()
    const [forms, setForms] = useState({
        login: '', nameGroop: '', passwordGroop: ''
    });

    useEffect(() => {
        console.log('error', error)
        message(error)
        clearError()
    }, [error, message, clearError])


    const changeHandler = event => {
        setForms({ ...forms, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {

            const data = await request('api/user/create/groop', 'POST', { ...forms }, {
                Authorization: `Bearer ${auth.token}`
            })

            console.log('Data', data)
            navigate(`/groop/${data.groop.login}`)
        } catch (e) { }
    }




    return (

        <div className='div1'>
            <div className='groop' style={{ margin: '25px 0' }}>

                <span className='main__title' style={{fontSize: '2em',
margin: '0.67em 0'}}>Добавить группу</span>
                <div className='input__fields'>
                    <label htmlFor='login' >login группы
                        <input
                            style={{ margin: '10px 0 10px 13px' }}
                            type='text'
                            placeholder='Введите login'
                            id='login'
                            name='login'
                            value={forms.login}
                            onChange={changeHandler}
                        /></label>
                </div>

                <div className='input__fields'>
                    <label htmlFor='nameGroop'>Имя группы
                        <input
                            style={{ margin: '10px 0 10px 13px' }}
                            type='text'
                            placeholder='Введите имя'
                            id='nameGroop'
                            name='nameGroop'
                            value={forms.nameGroop}
                            onChange={changeHandler}
                        /></label>
                </div>

                <div className='input__fields'>
                    <label htmlFor='passwordGroop'>Пароль для группы
                        <input
                            style={{ margin: '10px 0 10px 13px' }}
                            type='text'
                            placeholder='Введите пароль'
                            id='passwordGroop'
                            name='passwordGroop'
                            value={forms.passwordGroop}
                            onChange={changeHandler}
                        /></label>
                </div>
                <button onClick={registerHandler}>Добавить</button>
            </div>
        </div>

    )

}
