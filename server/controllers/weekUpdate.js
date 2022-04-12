const Groop = require('../models/Groop')
const Week = require('../models/Week')

exports.weekUpdate = async (req, res) => {
    try {
        const groop = await Groop.findOne({ login: req.params.login })
        const week = await Week.findOne({ idGroops: groop._id })

        Object.assign(week, req.body)
        week.save()

        return res.status(201).json({ week, message: 'Расписание обновлено' })
    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}