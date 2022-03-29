import React, {useCallback, useContext, useEffect, useState} from "react"
import { GroopList } from "../../components/groopList/GroopList"
import { AuthContext } from "../../context/AuthContext"
import { useHttp } from "../../hooks/http.hook"
import {Loader} from "../../components/loader/Loader"

export const MainPage = () => {

    const [groops, setGroops] = useState([])

    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
  
    const fetchGroops = useCallback(async () => {
      try {
        const fetched = await request('/api/user/groops', 'GET', null, {
          Authorization: `Bearer ${token}`
        })
        setGroops(fetched)
      } catch (e) {}
    }, [token, request])
  
    useEffect(() => {
      fetchGroops()
    }, [fetchGroops])

    if (loading) {
        return <Loader/>
      }

    return (
        
        <div>
            <h1>Список групп</h1>
            <div className="links">
            <a href="/create" className="link">Добавить группу</a>
            
            {!loading && <GroopList groops={groops}/>}

            </div>
        </div>

    )

}