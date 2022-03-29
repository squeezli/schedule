import React from "react"
import { Link } from 'react-router-dom'


export const GroopList = ({ groops }) => {
    if (!groops.length) {
        return <p className="g">Группы отсутствуют</p>
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
                        <tr key={groop.id}>
                            <td>{index + 1}</td>
                            <td>{groop.nameGroop}</td>
                            <td>{groop.login}</td>
                            <td>
                                <Link to={`/groop/${groop.login}`}>Открыть</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}