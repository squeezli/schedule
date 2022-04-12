const Groop = require('../models/Groop')
const Week = require('../models/Week')

exports.weekAdd = async (req, res) => {
    try {
        const groop = await Groop.findOne({ login: req.params.login })
        const week = new Week({ idGroops: groop._id })

        Object.assign(week, req.body)
        week.save()

        return res.status(201).json({ week, message: 'Группа добавлена' })
    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}