import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [rules, setRules] = useState(null)
    const [ready, setReady] = useState(false)
    
    const login = useCallback((jwtToken) => {
        
        setToken(jwtToken)
        // setUserId(id)
        // setRules(rules)
        localStorage.setItem(storageName, JSON.stringify({
            userId:id
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRules(null)
        localStorage.removeItem(storageName)
    },[])

    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId, data.rules)
        }
        setReady(true)
    }, [login])
    console.log("asdas",rules)
    return { login, logout, token, userId, ready, rules}
    
}