const Groop = require('../models/Groop')
const Week = require('../models/Week')

exports.weekDelete = async (req, res) => {
    try {

        const groop = await Groop.findOne({login: req.params.login})

       
        Week.findOneAndDelete({ idGroops:groop }, function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
          });

        res.status(201).json({ message: 'Расписание успешно удалено' })

    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}
exports.groopDelete = async (req, res) => {
    try {
        const groop = await Groop.findOne({login: req.params.login})

        Groop.findOneAndDelete({ id:groop }, function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
          });

        Week.findOneAndDelete({ idGroops:groop }, function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
          });
        res.status(201).json({ message: 'Группа успешно удалена' })
    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}
exports.userDelete = async (req, res) => {
    try {
        res.status(201).json({ message: 'Пользователь успешно удален' })
    } catch (error) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
    }

}