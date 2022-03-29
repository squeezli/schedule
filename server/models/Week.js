const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    idUser: { type: Types.ObjectId, ref: "User" },
    idgroops: { type: Types.ObjectId, ref: "Groop" },
    monday: [{
        firstLesson: String,
        secondLesson: String,
        thirdLesson: String,
        fourthLesson: String,
        fifthLesson: String,
        sixthLesson: String,
        seventhLesson: String,
        eighthLesson: String,
        ninthLesson: String,
        tenthLesson: String,
    }],
    tuesday: [{
        firstLesson: String,
        secondLesson: String,
        thirdLesson: String,
        fourthLesson: String,
        fifthLesson: String,
        sixthLesson: String,
        seventhLesson: String,
        eighthLesson: String,
        ninthLesson: String,
        tenthLesson: String
    }],
    wednesday: [{
        firstLesson: String,
        secondLesson: String,
        thirdLesson: String,
        fourthLesson: String,
        fifthLesson: String,
        sixthLesson: String,
        seventhLesson: String,
        eighthLesson: String,
        ninthLesson: String,
        tenthLesson: String
    }],
    thirday: [{
        firstLesson: String,
        secondLesson: String,
        thirdLesson: String,
        fourthLesson: String,
        fifthLesson: String,
        sixthLesson: String,
        seventhLesson: String,
        eighthLesson: String,
        ninthLesson: String,
        tenthLesson: String
    }],
    friday: [{
        firstLesson: String,
        secondLesson: String,
        thirdLesson: String,
        fourthLesson: String,
        fifthLesson: String,
        sixthLesson: String,
        seventhLesson: String,
        eighthLesson: String,
        ninthLesson: String,
        tenthLesson: String
    }],
    saturday: [{
        firstLesson: String,
        secondLesson: String,
        thirdLesson: String,
        fourthLesson: String,
        fifthLesson: String,
        sixthLesson: String,
        seventhLesson: String,
        eighthLesson: String,
        ninthLesson: String,
        tenthLesson: String
    }],
    sunday: [{
        firstLesson: String,
        secondLesson: String,
        thirdLesson: String,
        fourthLesson: String,
        fifthLesson: String,
        sixthLesson: String,
        seventhLesson: String,
        eighthLesson: String,
        ninthLesson: String,
        tenthLesson: String
    }],
});

module.exports = model('Week', schema)