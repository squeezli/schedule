import React from 'react'
import { Link } from 'react-router-dom'

export const ListWeek = () => {

    return (
       
           <table>
            <thead>
                <tr>
                    <th>Понедельник</th>
                    <th>Вторник</th>
                    <th>Среда</th>
                    <th>Четверг</th>
                    <th>Пятница</th>
                    <th>Суббота</th>
                    <th>Воскресение</th>
                </tr>
            </thead>

            <tbody>
           
                    
                        <tr>
                            <td>{week.monday.firstlesson}</td>
                            <td>{week.tuesday.firstlesson}</td>
                            {/* <td>{week.wednesday.firstlesson}</td>
                            <td>{week.thisday.firstlesson}</td>
                            <td>{week.friday.firstlesson}</td>
                            <td>{week.saturday.firstlesson}</td>
                            <td>{week.sunday.firstlesson}</td> */}
                        </tr>
                        <tr>
                            <td>{week.monday.secondlesson}</td>
                            <td>{week.tuesday.secondlesson}</td>
                            {/* <td>{week.wednesday.secondlesson}</td>
                            <td>{week.thirday.secondlesson}</td>
                            <td>{week.friday.secondlesson}</td>
                            <td>{week.saturday.secondlesson}</td>
                            <td>{week.sunday.secondlesson}</td> */}
                        </tr>
    
            </tbody>
        </table>
    
    )

}