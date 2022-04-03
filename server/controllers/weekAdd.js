const Groop = require('../models/Groop')
const Week = require('../models/Week')

exports.weekAdd = async (req, res) => {
    try {
     
        console.log("dasdasd",req.params)

        const {mon1,mon2,mon3,mon4,mon5,mon6,mon7,mon8,mon9,mon10} = req.body
        const {tues1,tues2,tues3,tues4,tues5,tues6,tues7,tues8,tues9,tues10} = req.body
        const {wed1, wed2, wed3, wed4, wed5, wed6, wed7, wed8, wed9, wed10 } = req.body
        const {thir1,thir2,thir3,thir4,thir5,thir6,thir7,thir8,thir9,thir10} = req.body
        const {fri1,fri2,fri3,fri4,fri5,fri6,fri7,fri8,fri9,fri10} = req.body
        const {sat1,sat2,sat3,sat4,sat5,sat6,sat7,sat8,sat9,sat10} = req.body
        const {sun1,sun2,sun3,sun4,sun5,sun6,sun7,sun8,sun9,sun10} = req.body
        
        const groop = await Groop.findOne({login: req.params.login})

        console.log("dasdasd",groop._id)

        const week = new Week({
            mondayfirstLesson:mon1,
            mondaysecondLesson: mon2,
            mondaythirdLesson:mon3 ,
            mondayfourthLesson: mon4,
            mondayfifthLesson: mon5,
            mondaysixthLesson: mon6,
            mondayseventhLesson: mon7,
            mondayeighthLesson: mon8,
            mondayninthLesson: mon9,
            mondaytenthLesson: mon10,

            tuesdayfirstLesson:tues1,
            tuesdaysecondLesson:tues2,
            tuesdaythirdLesson:tues3,
            tuesdayfourthLesson:tues4,
            tuesdayfifthLesson:tues5,
            tuesdaysixthLesson:tues6,
            tuesdayseventhLesson:tues7,
            tuesdayeighthLesson:tues8,
            tuesdayninthLesson:tues9,
            tuesdaytenthLesson:tues10,
            

            wednesdayfirstLesson:wed1,
            wednesdaysecondLesson:wed2,
            wednesdaythirdLesson:wed3,
            wednesdayfourthLesson:wed4,
            wednesdayfifthLesson:wed5,
            wednesdaysixthLesson:wed6,
            wednesdayseventhLesson:wed7,
            wednesdayeighthLesson:wed8,
            wednesdayninthLesson:wed9,
            wednesdaytenthLesson:wed10,


            thirthdayfirstLesson:thir1,
            thirthdaysecondLesson:thir2,
            thirthdaythirdLesson:thir3,
            thirthdayfourthLesson:thir4,
            thirthdayfifthLesson:thir5,
            thirthdaysixthLesson:thir6,
            thirthdayseventhLesson:thir7,
            thirthdayeighthLesson:thir8,
            thirthdayninthLesson:thir9,
            thirthdaytenthLesson:thir10,

            
            fridayfirstLesson:fri1,
            fridaysecondLesson:fri2,
            fridaythirdLesson:fri3,
            fridayfourthLesson:fri4,
            fridayfifthLesson:fri5,
            fridaysixthLesson:fri6,
            fridayseventhLesson:fri7,
            fridayeighthLesson:fri8,
            fridayninthLesson:fri9,
            fridaytenthLesson:fri10,


            saturdayfirstLesson:sat1,
            saturdaysecondLesson:sat2,
            saturdaythirdLesson:sat3,
            saturdayfourthLesson:sat4,
            saturdayfifthLesson:sat5,
            saturdaysixthLesson:sat6,
            saturdayseventhLesson:sat7,
            saturdayeighthLesson:sat8,
            saturdayninthLesson:sat9,
            saturdaytenthLesson:sat10,


            sundayfirstLesson:sun1,
            sundaysecondLesson:sun2,
            sundaythirdLesson:sun3,
            sundayfourthLesson:sun4,
            sundayfifthLesson:sun5,
            sundaysixthLesson:sun6,
            sundayseventhLesson:sun7,
            sundayeighthLesson:sun8,
            sundayninthLesson:sun9,
            sundaytenthLesson:sun10,

            idGroops:groop._id

        })


        
        week.save()



        console.log("dasdasd",week)

        return res.status(201).json({week, message: 'Группа добавлена'  })

       

    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}