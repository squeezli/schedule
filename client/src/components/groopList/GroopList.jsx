import React from "react"
import { Link } from 'react-router-dom'


export const GroopList = ({ groops }) => {

    console.log(groops)

    if (!groops.length) {
        return (<table>
            <thead>
                <tr>
                    <th>Группы отсутствуют</th>
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
                <th>Открыть</th>
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