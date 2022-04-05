import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useNavigate } from 'react-router-dom'
import './groopCard.css'

export const GroopCard = ({ groop }) => {
    const { request } = useHttp()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const deleteHandler = async () => {


        try {
            console.log(groop)
            const data = await request(`/api/user/${groop.login}/delete`, 'DELETE', null, {
                Authorization: `Bearer ${auth.token}`
            })


            navigate(`/`)
        } catch (e) { }

    }
    
    return (
        <div className='title'>
            <h2>Группа {groop.nameGroop}</h2>

            <button onClick={deleteHandler}>Удалить группу</button>

        </div>
    )
}