const Groop = require('../models/Groop')
const Week = require('../models/Week')

exports.weekUpdate = async (req, res) => {
    try {

        console.log("dasdasd", req.params)

        const groop = await Groop.findOne({ login: req.params.login })

        console.log("dasdasd11", groop._id)

        const week = await Week.findOne({ idGroops: groop._id })
        console.log("dasdasd1221", groop._id)
        Object.assign(week, req.body)
        console.log("dasdasd1221",req.body)
        week.save()

        console.log("dasdadasdasdsd", week)

        return res.status(201).json({ week, message: 'Расписание обновлено' })



    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}