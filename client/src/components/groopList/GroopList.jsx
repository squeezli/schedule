import React, {useEffect} from "react"
import { Link } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'

export const GroopList = ({ groops }) => {
    const {error, clearError,} = useHttp()
    const message = useMessage()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);

    if (!groops.length) {
        return (<table>
            <thead>
                <tr>
                    <th style={{textAlign:'center'}} >Группы отсутствуют</th>
                </tr>
            </thead>
        </table>)

    }

    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Группа</th>
                    <th>Логин</th>
                    <th style={{width:'60px'}}>Открыть</th>
                </tr>
            </thead>

            <tbody>
                {groops.map((groop, index) => {
                    return (

                        <tr key={groop.login}>
                            <td>{index + 1}</td>
                            <td>{groop.nameGroop}</td>
                            <td>{groop.login}</td>
                            <td>
                                <Link to={`/groop/${groop.login} `}>Открыть</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}