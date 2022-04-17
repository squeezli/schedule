import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/loader/Loader'
import { useNavigate } from 'react-router-dom'

export const UpdateWeekPage = () => {
    const { token } = useContext(AuthContext)
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const groopLogin = useParams().login
    const [week, setWeek] = useState({});
    const { request, loading } = useHttp()


    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/user/groop/${groopLogin}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log("fetched", fetched)
            setWeek(fetched.week)

        } catch (e) { }
    }, [token, groopLogin, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    const changeHandler = event => {
        setWeek({ ...week, [event.target.name]: event.target.value })
    }


    const addHandler = async () => {

        try {
            console.log('Data', week)
            console.log(groopLogin)
            const data = await request(`/api/user/${groopLogin}/update`, 'PUT', { ...week }, {
                Authorization: `Bearer ${auth.token}`
            })
            console.log(data)

            navigate(`/groop/${groopLogin}`)
        } catch (e) { }

    }
    const falseHandler = async () => {

        try {
            navigate(`/groop/${groopLogin}`)
        } catch (e) { }

    }

    if (loading) {
        return <Loader />
    }

    return (

        <>

            <div>
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
                    <tbody className='tb1'>

                        <tr>
                            <td>1</td>
                            <td>
                                <input
                                    name='mondayfirstLesson'
                                    type="text"
                                    value={week.mondayfirstLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdayfirstLesson'
                                    type="text"
                                    value={week.tuesdayfirstLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdayfirstLesson'
                                    type="text"
                                    value={week.wednesdayfirstLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdayfirstLesson'
                                    type="text"
                                    value={week.thirthdayfirstLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridayfirstLesson'
                                    type="text"
                                    value={week.fridayfirstLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdayfirstLesson'
                                    type="text"
                                    value={week.saturdayfirstLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundayfirstLesson'
                                    type="text"
                                    value={week.sundayfirstLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>2</td>
                            <td>
                                <input
                                    name='mondaysecondLesson'
                                    type="text"
                                    value={week.mondaysecondLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdaysecondLesson'
                                    type="text"
                                    value={week.tuesdaysecondLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdaysecondLesson'
                                    type="text"
                                    value={week.wednesdaysecondLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdaysecondLesson'
                                    type="text"
                                    value={week.thirthdaysecondLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridaysecondLesson'
                                    type="text"
                                    value={week.fridaysecondLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdaysecondLesson'
                                    type="text"
                                    value={week.saturdaysecondLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundaysecondLesson'
                                    type="text"
                                    value={week.sundaysecondLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>3</td>
                            <td>
                                <input
                                    name='mondaythirdLesson'
                                    type="text"
                                    value={week.mondaythirdLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdaythirdLesson'
                                    type="text"
                                    value={week.tuesdaythirdLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdaythirdLesson'
                                    type="text"
                                    value={week.wednesdaythirdLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdaythirdLesson'
                                    type="text"
                                    value={week.thirthdaythirdLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridaythirdLesson'
                                    type="text"
                                    value={week.fridaythirdLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdaythirdLesson'
                                    type="text"
                                    value={week.saturdaythirdLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundaythirdLesson'
                                    type="text"
                                    value={week.sundaythirdLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>4</td>
                            <td>
                                <input
                                    name='mondayfourthLesson'
                                    type="text"
                                    value={week.mondayfourthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdayfourthLesson'
                                    type="text"
                                    value={week.tuesdayfourthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdayfourthLesson'
                                    type="text"
                                    value={week.wednesdayfourthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdayfourthLesson'
                                    type="text"
                                    value={week.thirthdayfourthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridayfourthLesson'
                                    type="text"
                                    value={week.fridayfourthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdayfourthLesson'
                                    type="text"
                                    value={week.saturdayfourthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundayfourthLesson'
                                    type="text"
                                    value={week.sundayfourthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>5</td>
                            <td>
                                <input
                                    name='mondayfifthLesson'
                                    type="text"
                                    value={week.mondayfifthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdayfifthLesson'
                                    type="text"
                                    value={week.tuesdayfifthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdayfifthLesson'
                                    type="text"
                                    value={week.wednesdayfifthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdayfifthLesson'
                                    type="text"
                                    value={week.thirthdayfifthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridayfifthLesson'
                                    type="text"
                                    value={week.fridayfifthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdayfifthLesson'
                                    type="text"
                                    value={week.saturdayfifthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundayfifthLesson'
                                    type="text"
                                    value={week.sundayfifthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>6</td>
                            <td>
                                <input
                                    name='mondaysixthLesson'
                                    type="text"
                                    value={week.mondaysixthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdaysixthLesson'
                                    type="text"
                                    value={week.tuesdaysixthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdaysixthLesson'
                                    type="text"
                                    value={week.wednesdaysixthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdaysixthLesson'
                                    type="text"
                                    value={week.thirthdaysixthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridaysixthLesson'
                                    type="text"
                                    value={week.fridaysixthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdaysixthLesson'
                                    type="text"
                                    value={week.saturdaysixthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundaysixthLesson'
                                    type="text"
                                    value={week.sundaysixthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>7</td>
                            <td>
                                <input
                                    name='mondayseventhLesson'
                                    type="text"
                                    value={week.mondayseventhLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdayseventhLesson'
                                    type="text"
                                    value={week.tuesdayseventhLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdayseventhLesson'
                                    type="text"
                                    value={week.wednesdayseventhLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdayseventhLesson'
                                    type="text"
                                    value={week.thirthdayseventhLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridayseventhLesson'
                                    type="text"
                                    value={week.fridayseventhLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdayseventhLesson'
                                    type="text"
                                    value={week.saturdayseventhLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundayseventhLesson'
                                    type="text"
                                    value={week.sundayseventhLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>8</td>
                            <td>
                                <input
                                    name='mondayeighthLesson'
                                    type="text"
                                    value={week.mondayeighthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdayeighthLesson'
                                    type="text"
                                    value={week.tuesdayeighthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdayeighthLesson'
                                    type="text"
                                    value={week.wednesdayeighthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdayeighthLesson'
                                    type="text"
                                    value={week.thirthdayeighthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridayeighthLesson'
                                    type="text"
                                    value={week.fridayeighthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdayeighthLesson'
                                    type="text"
                                    value={week.saturdayeighthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundayeighthLesson'
                                    type="text"
                                    value={week.sundayeighthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>9</td>
                            <td>
                                <input
                                    name='mondayninthLesson'
                                    type="text"
                                    value={week.mondayninthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdayninthLesson'
                                    type="text"
                                    value={week.tuesdayninthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdayninthLesson'
                                    type="text"
                                    value={week.wednesdayninthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdayninthLesson'
                                    type="text"
                                    value={week.thirthdayninthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridayninthLesson'
                                    type="text"
                                    value={week.fridayninthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdayninthLesson'
                                    type="text"
                                    value={week.saturdayninthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundayninthLesson'
                                    type="text"
                                    value={week.sundayninthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                            <td>10</td>
                            <td>
                                <input
                                    name='mondaytenthLesson'
                                    type="text"
                                    value={week.mondaytenthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='tuesdaytenthLesson'
                                    type="text"
                                    value={week.tuesdaytenthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='wednesdaytenthLesson'
                                    type="text"
                                    value={week.wednesdaytenthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='thirthdaytenthLesson'
                                    type="text"
                                    value={week.thirthdaytenthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='fridaytenthLesson'
                                    type="text"
                                    value={week.fridaytenthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='saturdaytenthLesson'
                                    type="text"
                                    value={week.saturdaytenthLesson}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    name='sundaytenthLesson'
                                    type="text"
                                    value={week.sundaytenthLesson}
                                    onChange={changeHandler}
                                />
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        <div className="hhh"style={{margin:'50px', textAlign:'center'}}>
            <button className="btn btn2" onClick={falseHandler}>Отмена</button>
            <button className="btn btn1" onClick={addHandler}>Сохранить расписание</button>

        </div>
            
        </>

    )

}