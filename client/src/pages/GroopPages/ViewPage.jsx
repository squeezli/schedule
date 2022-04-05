import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/loader/Loader'
import { GroopCard } from '../../components/groopCard/GroopCard'
import { WeekList } from '../../components/weekList/WeekList'



export const ViewPage = () => {
   const {token} = useContext(AuthContext)
    const { request, loading } = useHttp()

    const [groop, setGroop] = useState(null)
    const [week, setWeek] = useState(null)
    const groopLogin = 

    console.log("123", )

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/user/groop/${groopLogin}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log("fetched", fetched)
            setGroop(fetched.groop)
            setWeek(fetched.week)

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
            {!loading && groop && <GroopCard groop={groop} />}

            {!loading && groop && <WeekList week={week} groop={groop} />}
        </>
    )

}