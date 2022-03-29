import React from 'react'
import { Link } from 'react-router-dom'

export const ListWeek = ({week, groop}) => {

    console.log(week)

    if (!week.length) {
        return (
        <>
        <p className="g">Расписание отсутствует</p>
        <Link to={`/groop/${groop.login}/new`}>Добавить расписание</Link>
        </>
        )
    }
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
           
{/*                     
                        <tr>
                            <td>{week.monday.firstlesson}</td>
                            <td>{week.tuesday.firstlesson}</td>
                            {/* <td>{week.wednesday.firstlesson}</td>
                            <td>{week.thisday.firstlesson}</td>
                            <td>{week.friday.firstlesson}</td>
                            <td>{week.saturday.firstlesson}</td>
                            <td>{week.sunday.firstlesson}</td> *
                        </tr>
                        <tr>
                            <td>{week.monday.secondlesson}</td>
                            <td>{week.tuesday.secondlesson}</td>
                            {/* <td>{week.wednesday.secondlesson}</td>
                            <td>{week.thisday.secondlesson}</td>
                            <td>{week.friday.secondlesson}</td>
                            <td>{week.saturday.secondlesson}</td>
                            <td>{week.sunday.secondlesson}</td> *
                        </tr>
                        <tr>
                            <td>{week.monday.thirdlesson}</td>
                            <td>{week.tuesday.thirdlesson}</td>
                            {/* <td>{week.wednesday.thirdlesson}</td>
                            <td>{week.thisday.thirdlesson}</td>
                            <td>{week.friday.thirdlesson}</td>
                            <td>{week.saturday.thirdlesson}</td>
                            <td>{week.sunday.thirdlesson}</td> *
                        </tr>
                        <tr>
                            <td>{week.monday.fourlesson}</td>
                            <td>{week.tuesday.fourlesson}</td>
                            {/* <td>{week.wednesday.fourlesson}</td>
                            <td>{week.thisday.fourlesson}</td>
                            <td>{week.friday.fourlesson}</td>
                            <td>{week.saturday.fourlesson}</td>
                            <td>{week.sunday.fourlesson}</td> *
                        </tr>
                        <tr>
                            <td>{week.monday.fifthlesson}</td>
                            <td>{week.tuesday.fifthlesson}</td>
                            {/* <td>{week.wednesday.fifthlesson}</td>
                            <td>{week.thisday.fifthlesson}</td>
                            <td>{week.friday.fifthlesson}</td>
                            <td>{week.saturday.fifthlesson}</td>
                            <td>{week.sunday.fifthlesson}</td> *
                        </tr>
                        <tr>
                            <td>{week.monday.sixthlesson}</td>
                            <td>{week.tuesday.sixthlesson}</td>
                            {/* <td>{week.wednesday.sixthlesson}</td>
                            <td>{week.thisday.sixthlesson}</td>
                            <td>{week.friday.sixthlesson}</td>
                            <td>{week.saturday.sixthlesson}</td>
                            <td>{week.sunday.sixthlesson}</td> *
                        </tr>
     */}
            </tbody>
        </table>
    
    )

}