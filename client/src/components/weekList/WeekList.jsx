import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useNavigate } from 'react-router-dom'

export const WeekList = ({ week, groop }) => {

    const { request } = useHttp()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    console.log("2123", week)

    const deleteHandler = async () => {


        try {
            console.log(groop)
            const data = await request(`/api/user/${groop.login}/week/delete`, 'DELETE', null, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log('data', data)

            navigate(`/`)
        } catch (e) { }

    }

    if (!week) {
        return (
            <>
                <p className="g">Расписание отсутствует</p>
                <button  onClick={() => { navigate(`/groop/${groop.login}/new`) }}>Добавить расписание</button>
                
            </>
        )
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th >№</th>
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
                        <td>1</td>
                        <td>{week.mondayfirstLesson}</td>
                        <td>{week.tuesdayfirstLesson}</td>
                        <td>{week.wednesdayfirstLesson}</td>
                        <td>{week.thirthdayfirstLesson}</td>
                        <td>{week.fridayfirstLesson}</td>
                        <td>{week.saturdayfirstLesson}</td>
                        <td>{week.sundayfirstLesson}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{week.mondaysecondLesson}</td>
                        <td>{week.tuesdaysecondLesson}</td>
                        <td>{week.wednesdaysecondLesson}</td>
                        <td>{week.thirtdaysecondLesson}</td>
                        <td>{week.fridaysecondLesson}</td>
                        <td>{week.saturdaysecondLesson}</td>
                        <td>{week.sundaysecondLesson}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{week.mondaythirdLesson}</td>
                        <td>{week.tuesdaythirdLesson}</td>
                        <td>{week.wednesdaythirdLesson}</td>
                        <td>{week.thirtdaythirdLesson}</td>
                        <td>{week.fridaythirdLesson}</td>
                        <td>{week.saturdaythirdLesson}</td>
                        <td>{week.sundaythirdLesson}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{week.mondayfourthLesson}</td>
                        <td>{week.tuesdayfourthLesson}</td>
                        <td>{week.wednesdayfourthLesson}</td>
                        <td>{week.thirtdayfourthLesson}</td>
                        <td>{week.fridayfourthLesson}</td>
                        <td>{week.saturdayfourthLesson}</td>
                        <td>{week.sundayfourthLesson}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{week.mondayfifthLesson}</td>
                        <td>{week.tuesdayfifthLesson}</td>
                        <td>{week.wednesdayfifthLesson}</td>
                        <td>{week.thirtdayfifthLesson}</td>
                        <td>{week.fridayfifthLesson}</td>
                        <td>{week.saturdayfifthLesson}</td>
                        <td>{week.sundayfifthLesson}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{week.mondaysixthLesson}</td>
                        <td>{week.tuesdaysixthLesson}</td>
                        <td>{week.wednesdaysixthLesson}</td>
                        <td>{week.thirtdaysixthLesson}</td>
                        <td>{week.fridaysixthLesson}</td>
                        <td>{week.saturdaysixthLesson}</td>
                        <td>{week.sundaysixthLesson}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{week.mondayseventhLesson}</td>
                        <td>{week.tuesdayseventhLesson}</td>
                        <td>{week.wednesdayseventhLesson}</td>
                        <td>{week.thirtdayseventhLesson}</td>
                        <td>{week.fridayseventhLesson}</td>
                        <td>{week.saturdayseventhLesson}</td>
                        <td>{week.sundayseventhLesson}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>{week.mondayeighthLesson}</td>
                        <td>{week.tuesdayeighthLesson}</td>
                        <td>{week.wednesdayeighthLesson}</td>
                        <td>{week.thirtdayeighthLesson}</td>
                        <td>{week.fridayeighthLesson}</td>
                        <td>{week.saturdayeighthLesson}</td>
                        <td>{week.sundayeighthLesson}</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>{week.mondayninthLesson}</td>
                        <td>{week.tuesdayninthLesson}</td>
                        <td>{week.wednesdayninthLesson}</td>
                        <td>{week.thirtdayninthLesson}</td>
                        <td>{week.fridayninthLesson}</td>
                        <td>{week.saturdayninthLesson}</td>
                        <td>{week.sundayninthLesson}</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>{week.mondaytenthLesson}</td>
                        <td>{week.tuesdaytenthLesson}</td>
                        <td>{week.wednesdaytenthLesson}</td>
                        <td>{week.thirtdaytenthLesson}</td>
                        <td>{week.fridaytenthLesson}</td>
                        <td>{week.saturdaytenthLesson}</td>
                        <td>{week.sundaytenthLesson}</td>
                    </tr>
                </tbody>

            </table>
            <button className="btn " onClick={deleteHandler}>Удалить расписание</button>
            <button className="btn " onClick={() => { navigate(`/groop/${groop.login}/update`) }}>Изменить расписание</button>

        </>
    )

}