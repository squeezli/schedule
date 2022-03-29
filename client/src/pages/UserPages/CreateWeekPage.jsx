import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/loader/Loader'
import { useNavigate } from 'react-router-dom'

export const CreateWeekPage = () => {
    const { request, loading } = useHttp()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const groopLogin = useParams().login
    const [weeks, setWeeks] = useState({
        login: '', nameGroop: '', passwordGroop: ''
    });

    const changeHandler = event => {
        setWeeks({ ...weeks, [event.target.name]: event.target.value })
    }

    const addHandler = async () => {

        try {

            const data = await request(`api/user/${groopLogin}/new`, 'POST', { ...weeks }, {
                Authorization: `Bearer ${auth.token}`
            })

            console.log('Data', data)
            navigate(`/groop/${data.groop.login}`)
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
                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonFirstLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueFirstLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedFirstLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirFirstLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriFirstLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatFirstLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubFirstLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>2</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonSecondLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueSecondLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedSecondLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirSecondLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriSecondLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatSecondLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubSecondLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>3</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonThirthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueThirthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedThirthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirThirthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriThirthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatThirthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubThirthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>4</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonFourLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueFourLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedFourLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirFourLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriFourLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatFourLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubFourLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>5</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonFifthtLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueFifthtLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedFifthtLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirFifthtLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriFifthtLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatFifthtLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubFifthtLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>6</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonSixthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueSixthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedSixthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirSixthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriSixthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatSixthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubSixthLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>7</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonSeventLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueSeventLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedSeventLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirSeventLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriSeventLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatSeventLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubSeventLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>8</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonEithLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueEithLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedEithLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirEithLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriEithLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatEithLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubEithLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>9</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonNineLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueNineLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedNineLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirNineLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriNineLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatNineLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubNineLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                        <tr>
                        <td>10</td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.MonTenLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.TueTenLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.WedTenLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.ThirTenLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.FriTenLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SatTenLes}
                                    onChange={changeHandler}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={weeks.SubTenLes}
                                    onChange={changeHandler}
                                />
                            </td>
                        </tr>


                       

                    </tbody>
                </table>
            </div>


            <button className="btn " onClick={addHandler}>Сохранить расписание</button>

        </>

    )

}