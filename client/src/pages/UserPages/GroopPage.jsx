import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/loader/Loader'
import { GroopCard } from '../../components/groopCard/GroopCard'
import { ListWeek } from '../../components/week/Week'

export const GroopPage = () => {
    const { token } = useContext(AuthContext)
    const { request, loading  } = useHttp()
    
    const [groop, setGroop] = useState(null)
    const [week, setWeek] = useState(null)
    const groopLogin = useParams().login
    const getLink = useCallback(async () => {

       try {
           const fetched = await request(`/api/user/groop/${groopLogin}`, 'GET', null, {
               Authorization: `Bearer ${token}`
           })
        //    console.log("fetched", fetched)
           setGroop(fetched)
           setWeek(fetched)
           
        } catch (e) { }
    }, [token, groopLogin, request])
    
    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }
    
    return (
        <>
            {!loading && groop && <GroopCard groop={groop}/>}
            
            {!loading && groop && week && <ListWeek week={week} groop={groop}/>}

        </>
    )

}