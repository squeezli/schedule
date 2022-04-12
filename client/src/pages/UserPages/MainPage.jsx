import React, { useCallback, useContext, useEffect, useState } from 'react'
import { GroopList } from '../../components/groopList/GroopList'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { Loader } from '../../components/loader/Loader'
import { useNavigate } from 'react-router-dom'
import '../../components/groopCard/GroopCard'
import '../css/Button.css'
import '../css/Table.css'

export const MainPage = () => {
  const { request, error, clearError, loading } = useHttp()
  const message = useMessage()
  const [groops, setGroops] = useState([])
  const navigate = useNavigate()
  const { token } = useContext(AuthContext)
  
  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const fetchGroops = useCallback(async () => {
    try {
      const fetched = await request('/api/user/groops', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setGroops(fetched)
    } catch (e) { }
  }, [token, request])



  useEffect(() => {
    fetchGroops()
  }, [fetchGroops])

  if (loading) {
    return <Loader />
  }

  return (

    <div>
    <div className='title'>
      <h1>Список групп</h1>
        <button classname='g' onClick={() => { navigate(`/create`) }}>Добавить группу</button>
        </div>
        {!loading && <GroopList groops={groops} />}

      
    </div>

  )

}