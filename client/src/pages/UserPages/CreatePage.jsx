import React, { useState, useContext} from "react"
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'

export const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const { request} = useHttp()
    const [forms, setForms] = useState({
        login: '', nameGroop: '', passwordGroop: ''
    });

  


    const changeHandler = event => {
        setForms({ ...forms, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {

            const data = await request('api/user/create/groop', 'POST', { ...forms },{
                Authorization: `Bearer ${auth.token}`
            })

            console.log('Data', data)
            navigate(`/groop/${data.groop._id}`)
        } catch (e) { }
    }

    


    return (

        <div>
            <div className="groop">

                <span className="main__title">Добавить группу</span>
                <div className="input__fields">
                    <label htmlFor="login">login группы
                    <input
                        type="text"
                        placeholder="Введите login"
                        id="login"
                        name="login"
                        value={forms.login}
                        onChange={changeHandler}
                    /></label>
                </div>

                <div className="input__fields">
                    <label htmlFor="nameGroop">Имя группы
                    <input
                        type="text"
                        placeholder="Введите имя"
                        id="nameGroop"
                        name="nameGroop"
                        value={forms.nameGroop}
                        onChange={changeHandler}
                    /></label>
                </div>

                <div className="input__fields">
                    <label htmlFor="passwordGroop">Пароль для группы
                    <input
                        type="text"
                        placeholder="Введите пароль"
                        id="passwordGroop"
                        name="passwordGroop"
                        value={forms.passwordGroop}
                        onChange={changeHandler}
                    /></label>
                </div>
                <button className="btn " onClick={registerHandler}>Добавить</button>
            </div>
        </div>

    )

}
