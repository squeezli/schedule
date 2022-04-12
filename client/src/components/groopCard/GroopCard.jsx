import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useNavigate } from 'react-router-dom'
import { useMessage } from '../../hooks/message.hook'
import './groopCard.css'

export const GroopCard = ({ groop }) => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const { request, error,clearError } = useHttp()
    const message = useMessage()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const deleteHandler = async () => {


        try {
            console.log(groop)
            const data = await request(`/api/user/${groop.login}/delete`, 'DELETE', null, {
                Authorization: `Bearer ${auth.token}`
            })

            console.log(data)

            navigate(`/`)
        } catch (e) { }

    }
    
    return (
        <div className='title'>
            <h2>Группа {groop.nameGroop}</h2>

            <button className='g' onClick={deleteHandler}>Удалить группу</button>

        </div>
    )
}